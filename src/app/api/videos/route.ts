import { NextResponse } from 'next/server';
import videosData from '@/data/videos.json';

export async function GET() {
  return NextResponse.json(videosData);
}