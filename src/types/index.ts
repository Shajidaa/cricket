
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