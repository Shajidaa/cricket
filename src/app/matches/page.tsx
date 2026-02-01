
import Container from '@/components/layout/Container';
import { getLiveMatches } from '@/services/liveMatchesService';
import { Match } from '@/types/cricket';




export default async function LiveMatchesPage() {
  const data = await getLiveMatches();

  const allMatches: Match[] = data.typeMatches?.flatMap(type =>
    type.seriesMatches.flatMap(series => series.seriesAdWrapper?.matches || [])
  ) || [];

  return (
    <Container className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-green-700">Live Cricket Scores</h1>

      {allMatches.length === 0 ? (
        <p className="text-gray-500">No live matches at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allMatches.map((match) => {
            const info = match.matchInfo;
            return (
              <div key={info.matchId} className="bg-white p-5 rounded-xl shadow-md border-t-4 border-green-500 hover:shadow-lg transition-shadow">
                <p className="text-xs font-bold text-gray-400 uppercase mb-2">
                  {info.seriesName}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-lg">{info.team1.teamName}</span>
                  <span className="text-gray-400 font-bold">vs</span>
                  <span className="font-bold text-lg">{info.team2.teamName}</span>
                </div>
                <div className="bg-green-50 p-2 rounded text-sm text-green-800 font-medium">
                  {info.status}
                </div>
                <p className="text-xs mt-3 text-gray-500">
                  📍 {info.venueInfo.ground}, {info.venueInfo.city}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </Container>
  );
}