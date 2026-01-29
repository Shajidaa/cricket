import Image from 'next/image'


import { NewsItem } from '@/types'

import Link from 'next/link'

export default function NewsCard({ news }: { news: NewsItem }) {
  return (
   <Link href={`/news/${news.id}`} key={news.id} className="cursor-pointer  group"> 
      <div className="overflow-hidden md:max-w-96    rounded-lg mb-4 border">
        <Image
          src={news.image}
          alt={news.title}
          width={400}
          height={200}
        
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <h2 className="text-xl font-bold md:max-w-96 mb-2 transition-colors duration-300 group-hover:text-red-500">
        {news.title}
      </h2>
      
      <p className="text-sm text-gray-500">{news.date}</p>
    </Link>
  )
}