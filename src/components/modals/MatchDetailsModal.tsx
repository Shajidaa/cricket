"use client";
import { Match } from '@/types/cricket';
import { X, MapPin, Calendar, Trophy, Clock } from 'lucide-react';
import { useEffect } from 'react';

interface MatchDetailsModalProps {
    match: Match;
    isOpen: boolean;
    onClose: () => void;
}

export default function MatchDetailsModal({ match, isOpen, onClose }: MatchDetailsModalProps) {
    const { matchInfo, matchScore } = match;

    // Close modal on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const isLive = matchInfo.status.toLowerCase().includes('live') ||
        matchInfo.status.toLowerCase().includes('innings') ||
        matchInfo.status.toLowerCase().includes('batting');

    const isCompleted = matchInfo.status.toLowerCase().includes('won') ||
        matchInfo.status.toLowerCase().includes('completed') ||
        matchInfo.status.toLowerCase().includes('result');

    const formatOvers = (overs: number) => {
        const completeOvers = Math.floor(overs);
        const balls = Math.round((overs - completeOvers) * 10);
        return balls > 0 ? `${completeOvers}.${balls}` : `${completeOvers}`;
    };

    const getStatusColor = () => {
        if (isLive) return 'bg-red-500';
        if (isCompleted) return 'bg-green-500';
        return 'bg-blue-500';
    };

    const getStatusText = () => {
        if (isLive) return 'LIVE';
        if (isCompleted) return 'COMPLETED';
        return 'UPCOMING';
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-6 rounded-t-2xl">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <X size={20} />
                    </button>

                    {/* Status Badge */}
                    <div className="flex items-center gap-2 mb-4">
                        <span className={`${getStatusColor()} text-white text-xs font-bold px-3 py-1 rounded-full ${isLive ? 'animate-pulse' : ''}`}>
                            {getStatusText()}
                        </span>
                        <span className="text-gray-300 text-sm">{matchInfo.matchFormat}</span>
                    </div>

                    {/* Series Info */}
                    <div className="mb-4">
                        <h2 className="text-xl font-bold mb-1">{matchInfo.seriesName}</h2>
                        <p className="text-gray-300 text-sm">{matchInfo.matchDesc}</p>
                    </div>

                    {/* Teams Header */}
                    <div className="flex items-center justify-between">
                        <div className="text-center flex-1">
                            <h3 className="text-2xl font-bold">{matchInfo.team1.teamSName || matchInfo.team1.teamName}</h3>
                        </div>
                        <div className="px-6">
                            <span className="text-gray-400 font-bold">VS</span>
                        </div>
                        <div className="text-center flex-1">
                            <h3 className="text-2xl font-bold">{matchInfo.team2.teamSName || matchInfo.team2.teamName}</h3>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Scores Section */}
                    {matchScore && (matchScore.team1Score || matchScore.team2Score) && (
                        <div className="mb-6">
                            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                <Trophy size={20} className="text-yellow-500" />
                                Match Score
                            </h4>

                            <div className="bg-gray-50 rounded-xl p-4">
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Team 1 Score */}
                                    <div className="text-center">
                                        <h5 className="font-semibold text-gray-700 mb-2">{matchInfo.team1.teamName}</h5>
                                        {matchScore.team1Score?.inngs1 && (
                                            <div className="bg-white rounded-lg p-3 mb-2">
                                                <div className="text-2xl font-bold text-gray-800">
                                                    {matchScore.team1Score.inngs1.runs}/{matchScore.team1Score.inngs1.wickets}
                                                </div>
                                                <div className="text-sm text-gray-600">
                                                    ({formatOvers(matchScore.team1Score.inngs1.overs)} overs)
                                                </div>
                                            </div>
                                        )}
                                        {matchScore.team1Score?.inngs2 && (
                                            <div className="bg-white rounded-lg p-3">
                                                <div className="text-xl font-bold text-gray-800">
                                                    {matchScore.team1Score.inngs2.runs}/{matchScore.team1Score.inngs2.wickets}
                                                </div>
                                                <div className="text-sm text-gray-600">
                                                    ({formatOvers(matchScore.team1Score.inngs2.overs)} overs)
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Team 2 Score */}
                                    <div className="text-center">
                                        <h5 className="font-semibold text-gray-700 mb-2">{matchInfo.team2.teamName}</h5>
                                        {matchScore.team2Score?.inngs1 && (
                                            <div className="bg-white rounded-lg p-3 mb-2">
                                                <div className="text-2xl font-bold text-gray-800">
                                                    {matchScore.team2Score.inngs1.runs}/{matchScore.team2Score.inngs1.wickets}
                                                </div>
                                                <div className="text-sm text-gray-600">
                                                    ({formatOvers(matchScore.team2Score.inngs1.overs)} overs)
                                                </div>
                                            </div>
                                        )}
                                        {matchScore.team2Score?.inngs2 && (
                                            <div className="bg-white rounded-lg p-3">
                                                <div className="text-xl font-bold text-gray-800">
                                                    {matchScore.team2Score.inngs2.runs}/{matchScore.team2Score.inngs2.wickets}
                                                </div>
                                                <div className="text-sm text-gray-600">
                                                    ({formatOvers(matchScore.team2Score.inngs2.overs)} overs)
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Match Status */}
                    <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <Clock size={20} className="text-blue-500" />
                            Match Status
                        </h4>
                        <div className="bg-gray-50 rounded-xl p-4">
                            <p className="text-gray-700 font-medium">{matchInfo.status}</p>
                        </div>
                    </div>

                    {/* Venue Information */}
                    <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <MapPin size={20} className="text-green-500" />
                            Venue
                        </h4>
                        <div className="bg-gray-50 rounded-xl p-4">
                            <p className="font-medium text-gray-800">{matchInfo.venueInfo.ground}</p>
                            <p className="text-gray-600">{matchInfo.venueInfo.city}</p>
                        </div>
                    </div>

                    {/* Match Details */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <Calendar size={20} className="text-purple-500" />
                            Match Details
                        </h4>
                        <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Match ID:</span>
                                <span className="font-medium text-gray-800">{matchInfo.matchId}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Series ID:</span>
                                <span className="font-medium text-gray-800">{matchInfo.seriesId}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Format:</span>
                                <span className="font-medium text-gray-800">{matchInfo.matchFormat}</span>
                            </div>
                            {matchInfo.startDate && (
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Start Date:</span>
                                    <span className="font-medium text-gray-800">
                                        {new Date(matchInfo.startDate).toLocaleDateString()}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-6 py-4 rounded-b-2xl">
                    <button
                        onClick={onClose}
                        className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-4 rounded-xl transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}