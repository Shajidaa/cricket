"use client";
import MatchCard from '@/components/cards/MatchCard';
import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Trophy } from 'lucide-react';
import Container from '@/components/layout/Container';
import { match } from 'assert';

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
  status: string;
  teams: {
    home: Team;
    away: Team;
  };
}

type FilterType = 'all' | 'live' | 'complete' | 'upcoming';
type LeagueType = 'all' | 'bbl' | 'wbbl';

const MatchResultsPage: React.FC = () => {
  const [matchData, setMatchData] = useState<Match[]>([]);
  const [filteredMatches, setFilteredMatches] = useState<Match[]>([]);
  const [activeFilter, setActiveFilter] = useState<FilterType>('complete');
  const [activeLeague, setActiveLeague] = useState<LeagueType>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data/match.json');
        const data = await response.json();
        setMatchData(data);
        setFilteredMatches(data);
      } catch (error) {
        console.error('Error fetching match data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMatchData();
  }, []);

  useEffect(() => {
    let filtered = matchData;

    // Filter by league
    if (activeLeague !== 'all') {
      filtered = filtered.filter(match =>
        match.match_info.toLowerCase().includes(activeLeague)
      );
    }
if (activeFilter === 'complete') {
    filtered = filtered.filter(match => match.status == 'complete');

   
  } else if (activeFilter === 'live') {
    // If status is not 'complete', we treat it as live/upcoming
     filtered = filtered.filter(match => match.status !== 'complete');
  }

  setFilteredMatches(filtered);
    setFilteredMatches(filtered);
  }, [activeFilter, activeLeague, matchData]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header Skeleton */}
        <div className="bg-gradient-to-r from-black via-red-950 to-red-600 text-white p-6 shadow-lg">
          <Container className="p-5">
            <div className="h-12 bg-white/20 rounded w-64 animate-pulse"></div>
          </Container>
        </div>

        {/* Content Skeleton */}
        <Container className="py-8 px-4">
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-6 animate-pulse">
                <div className="h-20 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-black via-red-950 to-red-600 text-white p-6 shadow-lg mb-8">
        <Container className="p-5">
          <div className="flex justify-between items-end mb-8">
            <h1 className="text-5xl font-black italic text-white tracking-tighter border-l-8 border-red-600 pl-4 uppercase">
              Match Results
            </h1>
            <div className="hidden md:block bg-white px-4 py-1 rounded-sm text-black font-bold text-[10px] tracking-widest">
              POWERED BY <span className="text-blue-600">LIBERTY</span>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Status Filters */}
            <div className="flex bg-white/10 backdrop-blur-sm p-1 rounded-lg text-sm font-bold">
              <button
                onClick={() => setActiveFilter('live')}
                className={`px-6 py-2 rounded-md transition-all ${activeFilter === 'live'
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'text-white hover:bg-white/10'
                  }`}
              >
                Live & Upcoming
              </button>
              <button
                onClick={() => setActiveFilter('complete')}
                className={`px-6 py-2 rounded-md transition-all ${activeFilter === 'complete'
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'text-white hover:bg-white/10'
                  }`}
              >
                Completed
              </button>
            </div>

            {/* League Filters */}
            <div className="flex space-x-6 text-sm font-bold">
              <button
                onClick={() => setActiveLeague('all')}
                className={`pb-2 transition-all ${activeLeague === 'all'
                  ? 'text-white border-b-2 border-red-600'
                  : 'text-gray-300 hover:text-white'
                  }`}
              >
                ALL
              </button>
              <button
                onClick={() => setActiveLeague('bbl')}
                className={`pb-2 transition-all ${activeLeague === 'bbl'
                  ? 'text-white border-b-2 border-red-600'
                  : 'text-gray-300 hover:text-white'
                  }`}
              >
                BBL
              </button>
              <button
                onClick={() => setActiveLeague('wbbl')}
                className={`pb-2 transition-all ${activeLeague === 'wbbl'
                  ? 'text-white border-b-2 border-red-600'
                  : 'text-gray-300 hover:text-white'
                  }`}
              >
                WBBL
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Matches Section */}
      <Container className="pb-16 px-4">
        {/* Stats Bar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Trophy className="text-red-600" size={20} />
            <span className="font-bold text-gray-800">
              {filteredMatches.length} {filteredMatches.length === 1 ? 'Match' : 'Matches'} Found
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>Season 2025-26</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Multiple Venues</span>
            </div>
          </div>
        </div>

        {/* Matches List */}
        {filteredMatches.length > 0 ? (
          <div className="space-y-4">
            {filteredMatches.map((match, index) => (
              <MatchCard key={index} match={match} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-gray-600 text-xl font-semibold mb-4">
              No matches live or upcoming at the moment.
            </h3>
           
            <button
              onClick={() => {
                setActiveFilter('complete');
                setActiveLeague('all');
              }}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
            >
              Show All Matches
            </button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default MatchResultsPage;