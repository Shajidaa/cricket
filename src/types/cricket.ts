// types/cricket.ts
export interface Match {
    matchInfo: {
        matchId: number;
        seriesName: string;
        status: string;
        venueInfo: { ground: string; city: string };
        team1: { teamName: string };
        team2: { teamName: string };
    };
}

export interface TypeMatch {
    matchType: string;
    seriesMatches: { seriesAdWrapper?: { matches: Match[] } }[];
}

export interface CricbuzzResponse {
    typeMatches: TypeMatch[];
}