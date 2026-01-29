import NewsCard from "@/components/cards/NewsCard";
import { getAllNews } from "@/services/newsService";
import { NewsItem } from "@/types";
import Image from "next/image";

export default async function NewsPage() {
  const allNews = await getAllNews();

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-black italic mb-8 border-l-8 border-red-600 pl-4 ">
        LATEST NEWS
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allNews.map((news: NewsItem) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
}