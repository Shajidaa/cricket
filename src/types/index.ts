
export interface NewsItem {
  id: string
  title: string
  date: string
  category: string
  bpl: string | null
  wbbl: string | null
  image: string
  details: string
  score?: string
  status?: string
  tags: string[]
}

export interface VideoItem {
  id: number;
  title: string;
  video_link: string;
  date: string;
  category: string;
  description: string;
}


export interface Player {
  id: string;
  name: string;
  league: string;
  image: string;
  number: number;

  personal_details: {
  dob: string;
  position: string; 

  batting_style: string;
  bowling_style: string;
  country: string;  
  }

  player_story: string;
}

