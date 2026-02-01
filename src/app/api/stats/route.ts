import { NextResponse } from 'next/server';

export async function GET() {
    try {
        // Placeholder stats data - replace with actual data source
        const stats = {
            totalMatches: 0,
            totalPlayers: 0,
            totalNews: 0,
            totalVideos: 0
        };

        return NextResponse.json(stats);
    } catch (error) {
        console.error('Error fetching stats:', error);
        return NextResponse.json(
            { error: 'Failed to fetch stats' },
            { status: 500 }
        );
    }
}