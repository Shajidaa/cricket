import { NextResponse } from 'next/server';
import playerData from '@/data/players.json';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params; 

    const playerItem = playerData.find((item) => item.id === id);

    if (!playerItem) {
    
      return NextResponse.json({ message: 'Player not found' }, { status: 404 });
    }

    
    return NextResponse.json(playerItem);
  } catch (error) {
    console.error(" API Error:", error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}