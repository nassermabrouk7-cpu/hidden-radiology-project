import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import path from 'path'

// Token expiration time (24 hours)
const TOKEN_EXPIRY_MS = 24 * 60 * 60 * 1000

// Product to file mapping
const PRODUCT_FILES: Record<string, string> = {
  'cxr-vol1-ar': 'ana-fahim-cxr-ar.pdf',
  'ct-vol2-ar': 'ana-fahim-ct-ar.pdf',
  'mri-vol3-ar': 'ana-fahim-mri-ar.pdf',
  'qs-vol4-ar': 'ana-fahim-quality-safety-ar.pdf',
  'rs-vol5-ar': 'ana-fahim-radiation-safety-ar.pdf',
  'cxr-vol1': 'ana-fahim-cxr-en.pdf',
  'ct-vol2': 'ana-fahim-ct-en.pdf',
  'mri-vol3': 'ana-fahim-mri-en.pdf',
  'qs-vol4': 'ana-fahim-quality-safety-en.pdf',
  'rs-vol5': 'ana-fahim-radiation-safety-en.pdf',
}

interface TokenData {
  purchase_id: string
  product_id: string
  email: string
  timestamp: number
}

function verifyToken(token: string): { valid: boolean; data?: TokenData; error?: string } {
  try {
    const decoded = JSON.parse(Buffer.from(token, 'base64').toString()) as TokenData
    
    // Check token expiration
    if (Date.now() - decoded.timestamp > TOKEN_EXPIRY_MS) {
      return { valid: false, error: 'Token expired' }
    }
    
    // Validate required fields
    if (!decoded.purchase_id || !decoded.product_id || !decoded.email) {
      return { valid: false, error: 'Invalid token structure' }
    }
    
    return { valid: true, data: decoded }
  } catch (error) {
    return { valid: false, error: 'Invalid token format' }
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const token = searchParams.get('token')
    
    if (!token) {
      return NextResponse.json(
        { error: 'Missing download token' },
        { status: 400 }
      )
    }

    // Verify token
    const verification = verifyToken(token)
    if (!verification.valid) {
      return NextResponse.json(
        { error: verification.error || 'Invalid token' },
        { status: 401 }
      )
    }

    const { product_id, purchase_id } = verification.data!
    
    // Get file path for product
    const fileName = PRODUCT_FILES[product_id as keyof typeof PRODUCT_FILES]
    if (!fileName) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }

    // Construct secure file path (outside public directory)
    const filePath = path.join(process.cwd(), 'private_books', fileName)
    
    // Read file
    const fileBuffer = await readFile(filePath)
    
    // Log download (in production, save to database)
    console.log('Secure download initiated:', {
      purchase_id,
      product_id,
      file_name: fileName,
    })

    // Return file with appropriate headers
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    })
  } catch (error) {
    console.error('Download error:', error)
    
    if (error instanceof Error && (error as any).code === 'ENOENT') {
      return NextResponse.json(
        { error: 'File not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  // Alternative endpoint for token-based download
  try {
    const body = await request.json()
    const { token } = body
    
    if (!token) {
      return NextResponse.json(
        { error: 'Missing download token' },
        { status: 400 }
      )
    }

    // Verify token
    const verification = verifyToken(token)
    if (!verification.valid) {
      return NextResponse.json(
        { error: verification.error || 'Invalid token' },
        { status: 401 }
      )
    }

    const { product_id } = verification.data!
    
    // Get file path for product
    const fileName = PRODUCT_FILES[product_id as keyof typeof PRODUCT_FILES]
    if (!fileName) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }

    // Return download URL
    const downloadUrl = `/api/download?token=${token}`
    
    return NextResponse.json({
      success: true,
      download_url: downloadUrl,
      file_name: fileName,
    })
  } catch (error) {
    console.error('Download URL generation error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}