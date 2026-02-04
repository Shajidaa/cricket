"use client";
import { useState, useEffect } from "react";
import { getAllPlayers } from "@/services/playerService";
import { Player } from "@/types";
import PlayerCard from "@/components/cards/PlayerCard ";

export default function PlayerPage() {
  const [allPlayers, setAllPlayers] = useState<Player[]>([]);
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      const players = await getAllPlayers();
      setAllPlayers(players);
    };
    fetchData();
  }, []);

  const filteredPlayers = allPlayers.filter((player) => {
    if (activeTab === "All") return true;
    return player.league === activeTab;
  });

  const tabs = ["All", "WBBL", "BBL"];

  return (
    <div className="">
      <div className="bg-gradient-to-r from-black via-red-950 to-red-600  text-white p-6 shadow-lg">
        {/* --- DYNAMIC TITLE --- */}
        <h1 className="text-3xl md:text-5xl text-center font-black italic mb-8 pl-2 md:mb-8 md:pl-4 uppercase">
          {activeTab === "All" ? "Players" : `${activeTab} Players`}
        </h1>
      </div>

      {/* --- Filter Tabs --- */}
      <div className="flex mx-auto mb-8 -mt-6 bg-gray-900 border-r-5 border-yellow-200 shadow-md w-fit overflow-hidden relative" 
           style={{ clipPath: "polygon(0 0, 100% 0, 100% 75%, 95% 100%, 0 100%)" }}>
        {tabs.map((tab) => (
          <div key={tab} className="relative">
            {/* Yellow Top Border for Active Tab */}
            {activeTab === tab && (
              <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400 z-10" />
            )}
            
            <button
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-4 md:px-10  font-bold  transition-colors border-r border-yellow-100 last:border-r-0 ${
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

      {/* --- Grid Display --- */}
      <div className="container mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map((player: Player) => (
            <PlayerCard key={player.id} player={player} />
          ))
        ) : (
          <div className="col-span-full text-center py-20">
             <p className="text-gray-500 text-xl italic font-semibold">
               No {activeTab} players available at the moment.
             </p>
          </div>
        )}
      </div>
    </div>
  );
}