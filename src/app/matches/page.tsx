import MatchCard from '@/components/cards/MatchCard';
import Container from '@/components/layout/Container';

import { getLiveMatches } from '@/services/liveMatchesService';

import { Match } from '@/types/cricket';




export default async function LiveMatchesPage() {
  const data = await getLiveMatches();


  const allMatches: Match[] = data.typeMatches?.flatMap(type =>
    type.seriesMatches.flatMap(series => series.seriesAdWrapper?.matches || [])
  ) || [];


  return (
    <>
    
 <div className="mb-5 bg-gradient-to-r from-black via-red-950 to-red-600 text-white p-6 shadow-lg">
           <h1 className="text-4xl md:text-5xl text-center font-black italic mb-8 pl-4 uppercase">
             Live Cricket Scores
           </h1>
         </div>
         <Container >
      {allMatches.length === 0 ? (
        <p className="text-gray-500">No live matches at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allMatches.map((match) => {

            return (
              <MatchCard key={match.matchInfo.matchId} match={match} />
            );
          })}
        </div>
      )}
  </Container>
    </>
  );
}



