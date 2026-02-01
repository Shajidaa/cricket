import { NewsItem } from "@/types";
import newsData from '@/data/news.json';

export async function getAllNews() {
  // During build time, use static data instead of API call
  if (process.env.NODE_ENV === 'production' || !process.env.NEXT_PUBLIC_API_URL) {
    return newsData;
  }

  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  try {
    const res = await fetch(`${baseUrl}/api/news`, {
      cache: 'no-store',
    });

    if (!res.ok) throw new Error("Failed to fetch news");

    return await res.json();
  } catch (error) {
    console.error("News fetch error:", error);
    // Fallback to static data
    return newsData;
  }
}
export async function getNewsById(id: string) {
  // During build time or when API is not available, use static data
  if (process.env.NODE_ENV === 'production' || !process.env.NEXT_PUBLIC_API_URL) {
    const newsItem = newsData.find(item => item.id === id);
    return newsItem || null;
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/news/${id}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('News item not found.');
    }

    return res.json();
  } catch (error) {
    console.error("News Fetch Error:", error);
    // Fallback to static data
    const newsItem = newsData.find(item => item.id === id);
    return newsItem || null;
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
      .sort((a: NewsItem, b: NewsItem) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);

  } catch (error) {
    console.error('Error fetching news by category:', error);
    return [];
  }
}