import { Match } from '@/types/cricket';

export default function MatchCard({ match }: { match: Match }) {
    const info = match.matchInfo;
    const isLive = info.status.toLowerCase().includes('live') ||
        info.status.toLowerCase().includes('innings') ||
        info.status.toLowerCase().includes('batting');

    return (
        <div className="group cursor-pointer">
            <div className="overflow-hidden md:max-w-96 rounded-lg mb-4 border bg-white">
                {/* Match Header */}
                <div className="relative p-4 bg-gradient-to-r from-gray-50 to-gray-100">
                    {isLive && (
                        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                            LIVE
                        </div>
                    )}

                    {/* Series Name */}
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        {info.seriesName}
                    </p>

                    {/* Teams */}
                    <div className="flex items-center justify-between">
                        <div className="text-center flex-1">
                            <h3 className="font-bold text-lg text-gray-800 group-hover:text-red-600 transition-colors">
                                {info.team1.teamName}
                            </h3>
                        </div>
                        <div className="px-4">
                            <span className="text-gray-400 font-bold text-sm">VS</span>
                        </div>
                        <div className="text-center flex-1">
                            <h3 className="font-bold text-lg text-gray-800 group-hover:text-red-600 transition-colors">
                                {info.team2.teamName}
                            </h3>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}