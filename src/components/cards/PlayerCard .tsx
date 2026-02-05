import { Player } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

export default function PlayerCard({ player }: { player: Player }) {
  return (
    <Link 
      href={`/player/${player.id}`} 
      className="group relative block w-full max-w-sm aspect-3/4 overflow-hidden bg-[#231f20] shadow-xl transition-all duration-300 hover:scale-[1.02]"
      style={{ 
        // This clip-path creates the sharp angled bottom-right corner perfectly
        clipPath: "polygon(0 0, 100% 0, 100% 95%, 95% 100%, 0 100%)" 
      }}
    >
      {/* Background Gradient & Diagonal Stripes */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d65b08]/40 to-black z-0" />
      <div 
        className="absolute inset-0 opacity-10 z-0" 
        style={{
          backgroundImage: `linear-gradient(135deg, transparent 25%, #fff 25%, #fff 50%, transparent 50%, transparent 75%, #fff 75%, #fff 100%)`,
          backgroundSize: '40px 40px'
        }} 
      />

      {/* Player Number */}
      <div className="absolute top-4 left-6 z-20">
        <span className="text-white group-hover:text-red-500 text-6xl font-black italic leading-none select-none opacity-90">
          {player.number}
        </span>
      </div>

      {/* Player Image */}
      <div className="absolute inset-0 z-10">
        <Image
          fill
          src={player.image}
          alt={player.name}
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 bg-gradient-to-t from-black via-transparent to-transparent">
        
        {/* Role/Captain Tag */}
        {player.personal_details.position === 'Captain' && (
          <div className="mb-3">
            <span className="bg-[#ffb800] text-black text-[10px] font-black uppercase px-3 py-1 skew-x-[-12deg] inline-block">
              <span className="inline-block skew-x-12">Captain</span>
            </span>
          </div>
        )}

        <div className="space-y-1">
          <h3 className="text-white text-3xl font-black uppercase italic leading-none tracking-tight transition-colors duration-300 group-hover:text-red-600">
            {player.name}
          </h3>
          <p className="text-white text-sm font-medium opacity-90 transition-colors duration-300 group-hover:text-red-500">
            {player.personal_details.position}
          </p>
        </div>
      </div>
    </Link>
  )
}