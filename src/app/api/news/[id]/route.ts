import { NextResponse } from 'next/server';
import newsData from '@/data/news.json';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params; 

    const newsItem = newsData.find((item) => item.id === id);

    if (!newsItem) {
    
      return NextResponse.json({ message: 'News not found' }, { status: 404 });
    }

    
    return NextResponse.json(newsItem);
  } catch (error) {
    console.error(" API Error:", error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}