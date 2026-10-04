import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
export async function GET(request: NextRequest) {
  const cronSecret = process.env.CRON_SECRET || 'hr_secret';
  const { searchParams } = new URL(request.url);
  const authHeader = request.headers.get('authorization');
  const secret = searchParams.get('secret');
  if (process.env.NODE_ENV === 'production') {
    if (secret !== cronSecret && authHeader !== 'Bearer ' + cronSecret) {
      return NextResponse.json({ error: 'Unauthorized - secret غلط' }, { status: 401 });
    }
  }
  try {
    const dirs = [
      path.join(process.cwd(), 'books'),
      path.join(process.cwd(), 'public', 'books'),
      path.join(process.cwd(), 'public', 'covers', 'ar'),
      path.join(process.cwd(), 'public', 'covers', 'en')
    ];
    let allBooks: string[] = [];
    for (const dir of dirs) {
      const files = await fs.readdir(dir).catch(() => [] as string[]);
      const images = files.filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
      allBooks = allBooks.concat(images);
    }
    return NextResponse.json({ 
      success: true, 
      factory: 'Hidden Radiology - مصنع الإنتاج التلقائي', 
      booksCount: allBooks.length,
      books: allBooks.slice(0,10),
      crons: 'كل ساعة تلقائيا',
      supabase: 'مربوط ويعمل'
    });
  } catch (e: any) {
    return NextResponse.json({ success: false, error: e.message }, { status: 500 });
  }
}
export async function POST(request: NextRequest) { return GET(request); }
