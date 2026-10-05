import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';

function hashAccessToken(token: string) {
  return crypto.createHash('sha256').update(token).digest('hex');
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Simple in-memory rate limiting for downloads
const downloadLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkDownloadLimit(referenceId: string, maxDownloads = 5, windowHours = 24): boolean {
  const now = Date.now();
  const record = downloadLimitMap.get(referenceId);

  if (!record || now > record.resetTime) {
    downloadLimitMap.set(referenceId, {
      count: 1,
      resetTime: now + (windowHours * 60 * 60 * 1000)
    });
    return true;
  }

  if (record.count >= maxDownloads) {
    return false;
  }

  record.count++;
  return true;
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ referenceId: string }> }
) {
  try {
    const { referenceId } = await params;

    const url = new URL(request.url);
    const accessToken = url.searchParams.get('token');

    if (!accessToken || accessToken.length < 32) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const accessTokenHash = hashAccessToken(accessToken);

    // Validate reference ID format
    if (!referenceId || !/^HR-\d{6}$/.test(referenceId)) {
      return NextResponse.json({ error: 'Invalid reference ID' }, { status: 400 });
    }

    // Rate limiting
    if (!checkDownloadLimit(referenceId)) {
      console.warn(`Download limit exceeded for order: ${referenceId}`);
      return NextResponse.json(
        { error: 'Download limit exceeded. Please contact support.' },
        { status: 429 }
      );
    }

    // Fetch order
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .select('*')
       .eq('reference_id', referenceId)
      .eq('access_token_hash', accessTokenHash)
      .single();

    if (orderError || !order) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }

    // Check if order is confirmed
    if (order.status !== 'confirmed' && order.status !== 'completed') {
      return NextResponse.json(
        { error: 'Order not yet confirmed' },
        { status: 403 }
      );
    }

    // Get products
    let products: Array<{
      id: string;
      title_ar: string;
      title_en: string;
      pdf_url: string;
      language: string;
      quantity?: number;
    }> = [];

    if (order.items && Array.isArray(order.items)) {
      // Multi-product order
      for (const item of order.items) {
        const { data: product } = await supabase
          .from('products')
          .select('id, title_ar, title_en, pdf_url, language')
          .eq('id', item.product_id)
          .single();

        if (product) {
          products.push({
            id: product.id,
            title_ar: product.title_ar,
            title_en: product.title_en,
            pdf_url: product.pdf_url,
            language: product.language,
            quantity: item.quantity
          });
        }
      }
    } else if (order.product_id) {
      // Single product order (legacy)
      const { data: product } = await supabase
        .from('products')
        .select('id, title_ar, title_en, pdf_url, language')
        .eq('id', order.product_id)
        .single();

      if (product) {
        products.push({
          id: product.id,
          title_ar: product.title_ar,
          title_en: product.title_en,
          pdf_url: product.pdf_url,
          language: product.language
        });
      }
    }

    if (products.length === 0) {
      console.error(`No products found for order ${referenceId}`);
      return NextResponse.json({ error: 'Products not found' }, { status: 404 });
    }

    // Generate signed URLs for each PDF (valid for 1 hour)
    const downloadLinks = [];

    for (const product of products) {
      // pdf_url now stores only the filename (e.g., "book-1234567890.pdf")
      // or may still contain full URL for backward compatibility
      let filename = 'book.pdf';
      if (product.pdf_url) {
        // If it's a full URL, extract filename
        if (product.pdf_url.includes('/')) {
          const urlParts = product.pdf_url.split('/');
          filename = urlParts[urlParts.length - 1];
        } else {
          // It's already just a filename
          filename = product.pdf_url;
        }
      }

      const { data: signedUrlData, error: signError } = await supabase.storage
        .from('pdfs')
        .createSignedUrl(filename, 3600); // 1 hour expiry

      if (signError) {
        console.error(`Failed to create signed URL for ${filename}:`, signError);
        // Continue with other products even if one fails
        continue;
      }

      downloadLinks.push({
        productId: product.id,
        title: product.language === 'ar' ? product.title_ar : product.title_en,
        language: product.language,
        quantity: product.quantity,
        downloadUrl: signedUrlData?.signedUrl || null,
        expiresAt: new Date(Date.now() + 3600 * 1000).toISOString()
      });
    }

    if (downloadLinks.length === 0) {
      return NextResponse.json(
        { error: 'Failed to generate download links. Please contact support.' },
        { status: 500 }
      );
    }

    // Log download to database
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';

    try {
      for (const link of downloadLinks) {
        await supabase.from('download_logs').insert({
          order_id: order.id,
          product_id: link.productId,
          reference_id: referenceId,
          customer_email: order.customer_email,
          ip_address: ip,
          user_agent: userAgent,
          download_url: link.downloadUrl,
          signed_url_expires_at: link.expiresAt,
          status: 'success'
        });
      }
    } catch (logError) {
      console.error('Failed to log download:', logError);
      // Don't fail the download if logging fails
    }

    console.log(`Download requested for order ${referenceId} from ${ip}`);

    return NextResponse.json({
      success: true,
      referenceId,
      products: downloadLinks,
      customerName: order.customer_name,
      customerEmail: order.customer_email
    });

  } catch (error) {
    console.error('Download API error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}




