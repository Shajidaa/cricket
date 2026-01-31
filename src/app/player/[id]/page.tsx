
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPlayerById, getAllPlayers } from '@/services/playerService'
import { Player } from '@/types'
import PlayerCard from '@/components/cards/PlayerCard '



export default async function PlayerDetails({ params }: { params: Promise<{ id: string }> }) {


  const { id } = await params;
  const playerItem: Player | null = await getPlayerById(id);

  if (!playerItem) {
    notFound();
  }

  const allPlayers = await getAllPlayers();
  const relatedPlayers = allPlayers
    .filter((item: Player) => item.id !== id && item.league === playerItem.league)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <div className="relative bg-[#8B0000] text-white overflow-hidden min-h-[400px] flex items-end">
        {/* Background City Silhouette (Optional/Mockup) */}
        <div className="absolute inset-0 opacity-20 bg-[url('/city-silhouette.png')] bg-bottom bg-repeat-x"></div>
        
        <div className="container mx-auto px-6 pb-16 relative z-10 flex flex-col md:flex-row justify-between items-end">
          <div className="mb-8 md:mb-0">
            <h1 className="text-4xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
              {playerItem.name.split(' ')[0]}<br />
              <span className="text-red-600">{playerItem.name.split(' ').slice(1).join(' ')}</span>
            </h1>
            <div className="flex items-center mt-4 gap-2">
               {/* Replace with actual flag logic */}
               <span className="text-sm font-bold uppercase tracking-widest">{playerItem.personal_details.country}</span>
               <span className="mx-2">|</span>
               <span className="text-sm font-bold uppercase tracking-widest">{playerItem.personal_details.position}</span>
            </div>
          </div>

          <div className="relative w-64 h-80 md:w-80 md:h-[450px]">
            <Image
              src={playerItem.image}
              alt={playerItem.name}
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </div>

      {/* 2. Navigation Tabs */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex gap-6">
            {['Biography', 'Statistics', 'News'].map((tab) => (
              <button
                key={tab}
                className={`py-4 px-2 font-bold uppercase text-sm border-b-4 transition-colors ${
                  tab === 'Biography' ? 'border-yellow-400 text-black' : 'border-transparent text-gray-400'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Content Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Personal Details Column */}
          <div>
            <h2 className="text-2xl font-black uppercase italic mb-6 border-b-2 border-gray-100 pb-2">
              Personal Details
            </h2>
            <div className="space-y-4">
              <DetailRow label="Date of Birth" value={playerItem.personal_details.dob} />
              <DetailRow label="Position" value={playerItem.personal_details.position} />
              <DetailRow label="Batting Style" value={playerItem.personal_details.batting_style} />
              <DetailRow label="Bowling Style" value={playerItem.personal_details.bowling_style} />
              <DetailRow label="Country" value={playerItem.personal_details.country} />
            </div>
          </div>

          {/* Player Story Column */}
          <div>
            <h2 className="text-2xl font-black uppercase italic mb-6 border-b-2 border-gray-100 pb-2">
              Player Story
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {playerItem.player_story}
              </p>
            </div>
            <Link 
              href={`https://cricket.com.au`} 
              className="inline-block mt-8 px-6 py-2 border border-red-600 text-red-600 font-bold rounded-sm hover:bg-red-50 transition-colors uppercase text-sm"
            >
              More on cricket.com.au ↗
            </Link>
          </div>
        </div>
      </div>

      {/* 4. Related Players */}
      {relatedPlayers.length > 0 && (
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-6">
            <h3 className="text-2xl font-black uppercase italic mb-8">More from {playerItem.league}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedPlayers.map((player:Player) => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex border-b border-gray-50 py-3">
      <span className="w-1/3 font-bold text-gray-900">{label}</span>
      <span className="w-2/3 text-gray-600">{value}</span>
    </div>
  )
}