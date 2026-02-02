export interface PlayerStat {
    rank: number;
    player: string;
    value: number;
}

export interface TeamStanding {
    rank: number;
    team: string;
    points: number;
}

export interface TeamFocus {
    name: string;
    rank: string;
    points: number;
}

export interface Standings {
    team_focus: TeamFocus;
    table_leaders: TeamStanding[];
}

export interface Stats {
    most_runs: PlayerStat[];
    most_wickets: PlayerStat[];
    standings: Standings;
}

export interface StatsData {
    tournament: string;
    stats: Stats;
}