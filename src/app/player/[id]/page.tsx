import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPlayerById, getAllPlayers } from '@/services/playerService'
import { Player } from '@/types'
import PlayerCard from '@/components/cards/PlayerCard '
import DetailRow from '@/components/DetailRow'

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
        
      {/* 1. Hero Section - Adjusted for mobile height */}
      <div className="relative bg-[#8B0000] text-white overflow-hidden min-h-[500px] md:min-h-[400px] flex items-end">
    
        <div className="absolute inset-0 opacity-20 bg-[url('/city-silhouette.png')] bg-bottom bg-repeat-x"></div>
        
        <div className="container mx-auto px-4 md:px-6 pb-8 md:pb-16 relative z-10 flex flex-col md:flex-row justify-between items-center md:items-end">
          
          {/* Responsive Typography: Smaller on mobile, massive on desktop */}
          <div className="mb-8 md:mb-0 text-center md:text-left w-full">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase italic tracking-tighter leading-[0.9] md:leading-none">
              {playerItem.name.split(' ')[0]}<br />
              <span className="text-red-600">{playerItem.name.split(' ').slice(1).join(' ')}</span>
            </h1>
            <div className="flex items-center justify-center md:justify-start mt-4 gap-2">
               <span className="text-xs md:text-sm font-bold uppercase tracking-widest">{playerItem.personal_details.country}</span>
               <span className="mx-1 md:mx-2">|</span>
               <span className="text-xs md:text-sm font-bold uppercase tracking-widest">{playerItem.personal_details.position}</span>
            </div>
          </div>

          {/* Image Container: Scale down for small screens */}
          <div className="relative w-48 h-64 sm:w-64 sm:h-80 md:w-80 md:h-[450px] flex-shrink-0">
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

      {/* 2. Navigation Tabs - Horizontal scroll on mobile */}
      <div className="border-b border-gray-200 sticky top-0 bg-white z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar">
            {['Biography', 'Statistics', 'News'].map((tab) => (
              <button
                key={tab}
                className={`py-4 px-2 font-bold uppercase text-xs md:text-sm border-b-4 transition-colors whitespace-nowrap ${
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
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          
          {/* Personal Details Column */}
          <div className="order-2 lg:order-1">
            <h2 className="text-xl md:text-2xl font-black uppercase italic mb-4 md:mb-6 border-b-2 border-gray-100 pb-2">
              Personal Details
            </h2>
            <div className="space-y-1">
              <DetailRow label="Date of Birth" value={playerItem.personal_details.dob} />
              <DetailRow label="Position" value={playerItem.personal_details.position} />
              <DetailRow label="Batting Style" value={playerItem.personal_details.batting_style} />
              <DetailRow label="Bowling Style" value={playerItem.personal_details.bowling_style} />
              <DetailRow label="Country" value={playerItem.personal_details.country} />
            </div>
          </div>

          {/* Player Story Column */}
          <div className="order-1 lg:order-2">
            <h2 className="text-xl md:text-2xl font-black uppercase italic mb-4 md:mb-6 border-b-2 border-gray-100 pb-2">
              Player Story
            </h2>
            <div className="prose prose-sm md:prose-base prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm md:text-base">
                {playerItem.player_story}
              </p>
            </div>
            <Link 
              href={`https://cricket.com.au`} 
              className="inline-block mt-6 md:mt-8 px-6 py-2 border border-red-600 text-red-600 font-bold rounded-sm hover:bg-red-50 transition-colors uppercase text-xs md:text-sm"
            >
              More on cricket.com.au ↗
            </Link>
          </div>
        </div>
      </div>

      {/* 4. Related Players */}
      {relatedPlayers.length > 0 && (
        <div className="bg-gray-50 py-8 md:py-12">
          <div className="container mx-auto px-4 md:px-6">
            <h3 className="text-xl md:text-2xl font-black uppercase italic mb-6 md:mb-8">More from {playerItem.league}</h3>
            {/* Grid adjustments for 1 col mobile, 2 col tablet, 4 col desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedPlayers.map((player:Player) => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>
                <Link
          href="/player"
          className="inline-flex items-center text-red-600 mt-5 hover:text-red-700 mb-6 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Players
        </Link>
          </div>

        </div>
      )}
        
    </div>
  )
}
