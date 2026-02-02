// types/cricket.ts
export interface Innings {
    inningsId: number;
    runs: number;
    wickets: number;
    overs: number;
}

export interface TeamScore {
    inngs1?: Innings;
    inngs2?: Innings;
}

export interface MatchScore {
    team1Score?: TeamScore;
    team2Score?: TeamScore;
}

export interface Match {
    matchInfo: {
        matchId: number;
        seriesId: number;
        seriesName: string;
        matchDesc: string;
        matchFormat: string;
        status: string;
        venueInfo: { ground: string; city: string };
        team1: { teamName: string; teamSName?: string };
        team2: { teamName: string; teamSName?: string };
        startDate?: string;
        endDate?: string;
    };
    matchScore?: MatchScore;
}

export interface TypeMatch {
    matchType: string;
    seriesMatches: { seriesAdWrapper?: { matches: Match[] } }[];
}

export interface AppIndex {
    seoTitle: string;
    webURL: string;
}

export interface Filters {
    matchType: string[];
}

export interface CricbuzzResponse {
    appIndex: AppIndex;
    filters: Filters;
    responseLastUpdated: string;
    typeMatches: TypeMatch[];
}