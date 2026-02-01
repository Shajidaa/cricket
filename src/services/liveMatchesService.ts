import { CricbuzzResponse } from "@/types/cricket";

export async function getLiveMatches(): Promise<CricbuzzResponse> {
    const url = 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live';

    if (!process.env.CRICBUZZ_API_KEY) {
        throw new Error('CRICBUZZ_API_KEY environment variable is not set');
    }

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': process.env.CRICBUZZ_API_KEY!,
            'x-rapidapi-host': process.env.CRICBUZZ_API_HOST!,
        },
        // This caches the data for 60 seconds to save API quota
        next: { revalidate: 360 }
    };

    const res = await fetch(url, options);



    return res.json();
}