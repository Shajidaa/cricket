
"use client";
import { useState, useEffect } from "react";
import NewsCard from "@/components/cards/NewsCard";
import { getAllNews } from "@/services/newsService";
import { NewsItem } from "@/types";
export default function NewsSectionPage() {
      const [allNews, setAllNews] = useState<NewsItem[]>([]);
      const [activeTab, setActiveTab] = useState("All");
    
      useEffect(() => {
        const fetchData = async () => {
          const news = await getAllNews();
          setAllNews(news);
        };
        fetchData();
      }, []);
    
      // ---  FILTER LOGIC ---
      const filteredNews = allNews.filter((news) => {
        if (activeTab === "All") return true;
        
      
        return news.league?.toUpperCase() === activeTab.toUpperCase();
      });
    
      // Added "BPL" to the tabs array
      const tabs = ["All", "WBBL", "BBL", "BPL"];
    console.log("Current Tab:", activeTab, "Results found:", filteredNews.length);
  return (
    <div className="">
         <div className="bg-gradient-to-r from-black via-red-950 to-red-600 text-white p-6 shadow-lg">
           <h1 className="text-4xl md:text-5xl text-center font-black italic mb-8 pl-4 uppercase">
             {activeTab === "All" ? "Latest News" : `${activeTab} News`}
           </h1>
         </div>
   
         <div 
           className="flex mx-auto mb-8 -mt-6 bg-white shadow-md w-fit overflow-hidden relative" 
           style={{ clipPath: "polygon(0 0, 100% 0, 100% 75%, 95% 100%, 0 100%)" }}
         >
           {tabs.map((tab) => (
             <div key={tab} className="relative">
               {activeTab === tab && (
                 <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400 z-10" />
               )}
               
               <button
                 onClick={() => setActiveTab(tab)}
                 className={`px-10 py-4 font-bold transition-colors border-r border-gray-100 last:border-r-0 ${
                   activeTab === tab 
                     ? "text-black bg-white" 
                     : "text-gray-400 bg-white hover:bg-gray-50"
                 }`}
               >
                 {tab}
               </button>
             </div>
           ))}
         </div>
   
         <div className="container mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
           {filteredNews.length > 0 ? (
             filteredNews.map((news: NewsItem) => (
               <NewsCard key={news.id} news={news} />
             ))
           ) : (
             <div className="col-span-full text-center py-20">
               <p className="text-gray-500 text-xl italic font-semibold">
                 No news updates for {activeTab} at this time.
               </p>
             </div>
           )}
         </div>
       </div>
  )
}
