export interface MembershipType {
    id: string;
    name: string;
    description: string;
    annual_fee: number;
    one_time_fee?: number;
    benefits: string[];
}

export interface Team {
    team_name: string;
    team_code: string;
    established_year: number;
    home_ground: string;
    team_category: string;
}

export interface PersonalDetails {
    first_name: string;
    last_name: string;
    date_of_birth: string;
    gender: string;
    nationality: string;
    contact_number: string;
    email: string;
    address?: {
        street: string;
        city: string;
        state: string;
        postcode: string;
        country: string;
    };
}

export interface MembershipDetails {
    type: string;
    join_date: string;
    expiry_date: string;
    membership_status: string;
    payment_status: string;
    emergency_contact?: {
        name: string;
        relationship: string;
        contact_number: string;
    };
}

export interface CricketDetails {
    playing_role: string;
    batting_style: string;
    bowling_style: string;
    jersey_number: number;
    preferred_position: string;
    skill_level: string;
}

export interface Member {
    member_id: string;
    personal_details: PersonalDetails;
    membership_details: MembershipDetails;
    cricket_details?: CricketDetails;
}

export interface Season {
    season_year: string;
    start_date: string;
    end_date: string;
    registration_deadline: string;
    season_status: string;
}

export interface Statistics {
    total_members: number;
    active_members: number;
    playing_members: number;
    associate_members: number;
    junior_members: number;
    life_members: number;
    renewal_rate: string;
}

export interface MembershipData {
    team: Team;
    memberships: {
        types: MembershipType[];
    };
    members: Member[];
    seasons: Season[];
    statistics: Statistics;
    metadata: {
        last_updated: string;
        version: string;
        created_by: string;
        next_renewal_date: string;
    };
}