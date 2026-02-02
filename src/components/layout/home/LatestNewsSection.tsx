import React from 'react'
import NewsCard from "@/components/cards/NewsCard";
import { NewsItem } from "@/types";
import Image from "next/image";
import Link from "next/link";
import newsData from '@/data/news.json';
import Container from '../Container';

export default async function LatestNewsSection() {
  const allNews: NewsItem[] = newsData;



  // Check if we have news data
  if (!allNews || allNews.length === 0) {
    return (
      <section className="mt-30 mb-20 relative overflow-hidden">
        <div className="container mx-auto p-5">
          <h1 className="text-5xl font-black italic text-white tracking-tighter border-l-8 border-red-600 pl-4 uppercase">
            Latest News
          </h1>
          <p className="text-gray-400 mt-4">No news available at the moment.</p>
        </div>
      </section>
    );
  }

  // প্রথমটা ফিচারড নিউজ, বাকিগুলো গ্রিডে
  const featured = allNews[0];
  const gridNews = allNews.slice(1, 5);

  return (
    <section className="  mt-30 mb-20 relative overflow-hidden ">
      <div className="bg-linear-to-r from-black via-red-950 to-red-600 absolute h-50  inset-0 -z-10 opacity-90">

      </div>
      <div className="container mx-auto">

        {/* Header */}
        <div className="flex  p-5 justify-between items-end mb-8">
          <h1 className="text-5xl font-black italic text-white tracking-tighter border-l-8 border-red-600 pl-4 uppercase">
            Latest News
          </h1>
          <div className="hidden md:block bg-white px-4 py-1 rounded-sm text-black font-bold text-[10px] tracking-widest">
            POWERED BY <span className="text-blue-600">LIBERTY</span>
          </div>
        </div>

        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Featured Article (Left Side) */}
          <Link href={`/news/${featured.id}`} className="lg:col-span-7 group cursor-pointer">

            <div className="relative block overflow-hidden bg-zinc-900 w-full h-[500px]"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 94%, 94% 100%, 0 100%)' }}
            >
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-6">
              <span className="text-red-500 font-bold text-sm uppercase tracking-widest italic">
                {featured.category || "Top Story"}
              </span>
              <h2 className="text-4xl font-black mt-2 leading-[1.1] group-hover:text-red-500 transition-colors uppercase italic">
                {featured.title}
              </h2>
              <p className="text-gray-400 mt-4 line-clamp-2 text-lg">
                {featured.details}
              </p>
              <div className="flex items-center gap-4 mt-6">
                <p className="text-gray-500 text-sm font-bold uppercase">{featured.date}</p>

              </div>
            </div>
          </Link>

          {/* Sidebar Grid (Right Side) */}
          <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">

            {gridNews.map((item) => (
              <NewsCard key={item.id} news={item} />
            ))}
          </div>

        </Container>
      </div>
    </section>
  );
}