import { NextRequest, NextResponse } from 'next/server';
import newsData from '@/data/news.json';

export async function GET(
  request: NextRequest, 
  { params }: { params: Promise<{ id: string }> } 
) {
  // Await the params to get the id
 try{
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