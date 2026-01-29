import Image from 'next/image'


import { NewsItem } from '@/types'

export default function NewsCard({ news }: { news: NewsItem }) {
  return (
   <div key={news.id} className="cursor-pointer group"> 
      <div className="overflow-hidden rounded-lg mb-4 border">
        <Image
          src={news.image}
          alt={news.title}
          width={400}
          height={200}
          /* 'group-hover:scale-105' triggers when the div is hovered */
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <h2 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-red-500">
        {news.title}
      </h2>
      
      <p className="text-sm text-gray-500">{news.date}</p>
    </div>
  )
}