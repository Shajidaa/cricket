import MatchCard from '@/components/cards/MatchCard';
import Container from '@/components/layout/Container';
import { getLiveMatches } from '@/services/liveMatchesService';
import { Match } from '@/types/cricket';




export default async function LiveMatchesPage() {
  const data = await getLiveMatches();

  const allMatches: Match[] = data.typeMatches?.flatMap(type =>
    type.seriesMatches.flatMap(series => series.seriesAdWrapper?.matches || [])
  ) || [];
  console.log(allMatches);

  return (
    <Container className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-red-700">Live Cricket Scores</h1>

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
  );
}




