import { NextResponse } from 'next/server';
import playerData from '@/data/players.json';

export async function GET() {
  return NextResponse.json(playerData);
}