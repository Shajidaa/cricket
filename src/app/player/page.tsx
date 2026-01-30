import PlayerCard from "@/components/cards/PlayerCard ";
import { getAllPlayers } from "@/services/playerService";
import { Player } from "@/types";


export default async function playerPage() {
      const allPlayers = await getAllPlayers();
      
      
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-black italic mb-8 border-l-8 border-red-600 pl-4 ">
        LATEST NEWS
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allPlayers.map((player: Player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  )
}
