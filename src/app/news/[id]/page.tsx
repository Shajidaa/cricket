import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
// import { Metadata } from 'next'
import { getAllNews, getNewsById } from '@/services/newsService'
import { NewsItem } from '@/types'
import NewsCard from '@/components/cards/NewsCard'





export default async function NewsDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; 
  
  const newsItem: NewsItem | null = await getNewsById(id);

  if (!newsItem) {
  
    notFound();
  }

 const allNews = await getAllNews();
  const relatedNews = allNews
    .filter((item: NewsItem) => item.id !== id && item.category === newsItem.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/news"
          className="inline-flex items-center text-red-600 hover:text-red-700 mb-6 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to News
        </Link>

        {/* Article Header */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="relative h-64 md:h-96">
            <Image
              src={newsItem.image}
              alt={newsItem.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                {newsItem.category}
              </span>
              <span className="text-gray-500 text-sm">{newsItem.date}</span>
              {newsItem.status && (
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {newsItem.status}
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {newsItem.title}
            </h1>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg">
              {newsItem.details}
            </p>
          </div>

          {/* Score Display */}
          {newsItem.score && (
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold text-gray-900 mb-2">Match Score</h3>
              <p className="font-mono text-lg text-gray-800">{newsItem.score}</p>
            </div>
          )}

          {/* League Information */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {newsItem.bpl && (
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-1">BPL</h3>
                <p className="text-green-700">{newsItem.bpl}</p>
              </div>
            )}
            {newsItem.wbbl && (
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-1">WBBL</h3>
                <p className="text-purple-700">{newsItem.wbbl}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {relatedNews.length > 0 && (
  <div className="container mx-auto px-4 pb-8">
    <h3 className="text-xl font-bold mb-4">More from {newsItem.category}</h3>
    <div className="space-y-4">
      {relatedNews.map((news: NewsItem) => (
      <NewsCard key={news.id} news={news} />

      ))}
    </div>
  </div>
)}
    </div>
  )
}