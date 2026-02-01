"use client";
import { Match } from '@/types/cricket';
import { useState } from 'react';
import MatchDetailsModal from '@/components/modals/MatchDetailsModal';

export default function MatchCard({ match }: { match: Match }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const info = match.matchInfo;
    const isLive = info.status.toLowerCase().includes('live') ||
        info.status.toLowerCase().includes('innings') ||
        info.status.toLowerCase().includes('batting');

    const handleCardClick = () => {
        setIsModalOpen(true);
    };

    const formatScore = (score: any) => {
        if (!score?.inngs1) return null;
        return `${score.inngs1.runs}/${score.inngs1.wickets}`;
    };

    return (
        <>
            <div
                className="group cursor-pointer transform hover:scale-105 transition-all duration-200"
                onClick={handleCardClick}
            >
                <div className="overflow-hidden md:max-w-96 rounded-lg mb-4 border bg-white shadow-md hover:shadow-xl transition-shadow">
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
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-center flex-1">
                                <h3 className="font-bold text-lg text-gray-800 group-hover:text-red-600 transition-colors">
                                    {info.team1.teamSName || info.team1.teamName}
                                </h3>
                                {match.matchScore?.team1Score && (
                                    <p className="text-sm font-semibold text-gray-600 mt-1">
                                        {formatScore(match.matchScore.team1Score)}
                                    </p>
                                )}
                            </div>
                            <div className="px-4">
                                <span className="text-gray-400 font-bold text-sm">VS</span>
                            </div>
                            <div className="text-center flex-1">
                                <h3 className="font-bold text-lg text-gray-800 group-hover:text-red-600 transition-colors">
                                    {info.team2.teamSName || info.team2.teamName}
                                </h3>
                                {match.matchScore?.team2Score && (
                                    <p className="text-sm font-semibold text-gray-600 mt-1">
                                        {formatScore(match.matchScore.team2Score)}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Match Status */}
                        <div className="text-center">
                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${isLive
                                    ? 'bg-red-100 text-red-800'
                                    : info.status.toLowerCase().includes('won') || info.status.toLowerCase().includes('completed')
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-blue-100 text-blue-800'
                                }`}>
                                {info.status}
                            </div>
                        </div>

                        {/* Venue */}
                        <div className="text-center mt-3">
                            <p className="text-xs text-gray-500">
                                📍 {info.venueInfo.ground}, {info.venueInfo.city}
                            </p>
                        </div>

                        {/* Click indicator */}
                        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded">
                                Click for details
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <MatchDetailsModal
                match={match}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}