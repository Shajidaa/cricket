import { NewsItem } from "@/types";

export async function getAllNews() {
  try {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/news`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error('There was a problem loading the news.');
    }

    return res.json();
  } catch (error) {
    console.error("News Fetch Error:", error);
    return [];
  }
}

export async function getNewsById(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/news/${id}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error('News item not found.');
    }

    return res.json();
  } catch (error) {
    console.error("News Fetch Error:", error);
    return null;
  }
}
// Simple function to get news by category
export async function getNewsByCategory(
  category: string, 
  excludeId?: string, 
  limit: number = 3
): Promise<NewsItem[]> {
  try {
    // Assuming you have a getAllNews function
    const allNews = await getAllNews();
    
    let filteredNews = allNews.filter((news: NewsItem) => news.category === category);
    
    // Exclude current news if excludeId is provided
    if (excludeId) {
      filteredNews = filteredNews.filter((news: NewsItem) => news.id !== excludeId);
    }
    
    // Sort by date (newest first) and limit
    return filteredNews
      .sort((a:NewsItem, b: NewsItem) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
      
  } catch (error) {
    console.error('Error fetching news by category:', error);
    return [];
  }
}