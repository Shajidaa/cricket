// src/app/api/stats/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const API_KEY = process.env.RAPIDAPI_KEY;
  const API_HOST = "cricbuzz-cricket.p.rapidapi.com";

  // Validate that API_KEY exists
  if (!API_KEY) {
    return NextResponse.json(
      { error: "Missing API key configuration" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch("https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live", {
      method: "GET",
      headers: {
        "x-rapidapi-key": API_KEY, // Now TypeScript knows this is string, not string | undefined
        "x-rapidapi-host": API_HOST,
      },
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}