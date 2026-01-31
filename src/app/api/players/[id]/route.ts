import { NextRequest, NextResponse } from 'next/server';
import playerData from '@/data/players.json';

// 1. Change Request to NextRequest (recommended)
// 2. Wrap params in Promise<{ id: string }>
export async function GET(
  request: NextRequest, 
  { params }: { params: Promise<{ id: string }> } 
) {
  try {
    // Now this 'await' is typesafe!
    const { id } = await params; 

    const playerItem = playerData.find((item) => item.id === id);

    if (!playerItem) {
      return NextResponse.json({ message: 'Player not found' }, { status: 404 });
    }

    return NextResponse.json(playerItem);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}