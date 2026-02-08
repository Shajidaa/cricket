import React from 'react';

interface Team {
  name: string;
  score: string;
  overs: number | null;
}

interface Match {
  match_info: string;
  date: string;
  venue: string;
  result: string;
  teams: {
    home: Team;
    away: Team;
  };
}

const MatchCard: React.FC<{ match: Match }> = ({ match }) => {
  return (
    <div className="flex flex-col mb-4 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <div className="flex flex-col md:flex-row items-center p-4">
        
        {/* Left Side Accent - Hidden on small mobile to save space, or keeps size */}
        <div className="hidden md:flex w-12 h-20 bg-gradient-to-b from-black to-red-600 rounded-sm mr-4 items-center justify-center flex-shrink-0">
          <span className="text-white text-[10px] font-bold text-center leading-tight">KFC BBL</span>
        </div>

        {/* Match Content */}
        <div className="flex-1 w-full">
          {/* Result Header */}
          <div className="text-center mb-4 md:mb-3 text-sm font-semibold text-gray-800 px-2">
            {match.result}
          </div>

          {/* Teams Container: Stacked on mobile, row on desktop */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 md:px-8">
            
            {/* Home Team */}
            <div className="flex items-center justify-between md:justify-start space-x-3 w-full md:w-1/3 border-b md:border-none pb-2 md:pb-0">
              <span className="font-black text-xs uppercase italic tracking-tighter">
                {match.teams.home.name}
              </span>
              <div className="flex flex-col items-end">
                <span className="text-xl font-bold">{match.teams.home.score}</span>
                {match.teams.home.overs && (
                  <span className="text-[10px] text-gray-500">({match.teams.home.overs})</span>
                )}
              </div>
            </div>

            {/* Status Badge - Centered on all screens */}
            <div className="flex flex-col items-center order-first md:order-none mb-2 md:mb-0">
              <span className="bg-black text-white text-[10px] font-bold px-3 py-1 rounded">
                COMPLETED
              </span>
              <span className="text-[10px] text-gray-400 mt-1 italic text-center">
                {match.date}
              </span>
            </div>

            {/* Away Team */}
            <div className="flex items-center justify-between md:justify-end space-x-3 w-full md:w-1/3 pt-2 md:pt-0">
              <div className="flex flex-col items-start">
                <span className="text-xl font-bold">{match.teams.away.score}</span>
                {match.teams.away.overs && (
                  <span className="text-[10px] text-gray-500">({match.teams.away.overs})</span>
                )}
              </div>
              <span className="font-black text-xs uppercase italic tracking-tighter text-right">
                {match.teams.away.name}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Info */}
      <div className="bg-gray-50 px-4 py-2 border-t border-gray-100 flex justify-center text-center">
        <span className="text-[10px] text-gray-400 uppercase font-medium tracking-widest leading-tight">
          {match.match_info} • {match.venue}
        </span>
      </div>
    </div>
  );
};

export default MatchCard;