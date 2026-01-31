"use client";

import { useEffect, useState } from 'react';

export default function StatsCard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // এখন আমরা সরাসরি RapidAPI কল না করে আমাদের নিজেদের API রুট কল করছি
        const response = await fetch("/api/stats"); 
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
console.log(data);

  if (loading) return <div>Loading Stats...</div>;

  return (
    <div className="p-4 bg-gradient-to-r from-orange-600 to-orange-400 rounded-xl text-white">
      <h2 className="font-bold mb-4 italic uppercase">Trending Players</h2>
      {/* Cricbuzz Trending API সাধারণত player-র লিস্ট দেয়, news নয় */}
      {/* {data?.player?.slice(0, 5).map((p: any, index: number) => (
        <div key={index} className="flex justify-between border-b border-orange-300 py-2">
          <span>{p.name}</span>
          <span className="font-bold">{p.teamName}</span>
        </div>
      ))} */}
    </div>
  );
}