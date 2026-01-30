import { Player } from '@/types'
import Image from 'next/image'

export default function PlayerCard({ player }: { player: Player }) {
  return (
    <div className="group cursor-pointer relative bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Player Image with Gradient Overlay */}
      <div className="relative h-64 overflow-hidden bg-gray-200">
        <Image
        fill
          src={player.image} 
          alt={player.name}
          className="w-full h-full object-cover transition-scale duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <span className="text-white text-3xl font-black italic opacity-50">#{player.number}</span>
        </div>
      </div>

      {/* Player Details */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-red-500 leading-tight">{player.name}</h3>
            <p className="text-xs font-semibold uppercase group-hover:text-black tracking-wider text-red-600">{player.personal_details.position}</p>
          </div>
          <span className="bg-gray-100 text-gray-700  text-[10px] px-2 py-1 rounded-full font-bold">
            {player.league}
          </span>
        </div>

      </div>
    </div>
  )
}