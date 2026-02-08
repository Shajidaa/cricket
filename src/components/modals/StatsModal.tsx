"use client";
import { X, Trophy, Target, TrendingUp } from 'lucide-react';
import { useEffect } from 'react';
import { PlayerStat, TeamStanding } from '@/types/stats';

interface StatsModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: 'runs' | 'wickets' | 'standings';
    data: PlayerStat[] | TeamStanding[];
    title: string;
    tournament: string;
}

export default function StatsModal({ isOpen, onClose, type, data, title, tournament }: StatsModalProps) {
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

    const getIcon = () => {
        switch (type) {
            case 'runs':
                return <Trophy className="text-yellow-500" size={24} />;
            case 'wickets':
                return <Target className="text-red-500" size={24} />;
            case 'standings':
                return <TrendingUp className="text-blue-500" size={24} />;
        }
    };

    const isStandings = type === 'standings';

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
                {/* Header */}
                <div className="relative bg-gradient-to-r from-black via-red-950 to-red-600 text-white p-6">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <X size={20} />
                    </button>

                    <div className="flex items-center gap-3 mb-2">
                        {getIcon()}
                        <h2 className="text-3xl font-black italic uppercase tracking-tight">
                            {title}
                        </h2>
                    </div>
                    <p className="text-gray-300 text-sm font-medium">{tournament}</p>
                </div>

                {/* Content */}
                <div className="overflow-y-auto max-h-[calc(90vh-200px)] p-6">
                    {isStandings ? (
                        // Standings Table
                        <div className="space-y-2">
                            {(data as TeamStanding[]).map((team, idx) => (
                                <div
                                    key={idx}
                                    className={`flex items-center justify-between p-4 rounded-lg transition-all ${idx < 3
                                            ? 'bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500'
                                            : idx === 4
                                                ? 'bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500'
                                                : 'bg-gray-50 hover:bg-gray-100'
                                        }`}
                                >
                                    <div className="flex items-center gap-4 flex-1">
                                        <div
                                            className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-lg ${idx < 3
                                                    ? 'bg-green-500 text-white'
                                                    : idx === 4
                                                        ? 'bg-red-500 text-white'
                                                        : 'bg-gray-300 text-gray-700'
                                                }`}
                                        >
                                            {team.rank}
                                        </div>
                                        <div className="flex items-center gap-3 flex-1">
                                            <div className="w-8 h-8 bg-gray-200 rounded-sm flex-shrink-0" />
                                            <span className="font-bold text-gray-800">{team.team}</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-black text-red-600">{team.points}</div>
                                        <div className="text-xs text-gray-500 font-medium">POINTS</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        // Player Stats Table
                        <div className="space-y-2">
                            {(data as PlayerStat[]).map((player, idx) => (
                                <div
                                    key={idx}
                                    className={`flex items-center justify-between p-4 rounded-lg transition-all ${idx === 0
                                            ? 'bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-500'
                                            : idx === 1
                                                ? 'bg-gradient-to-r from-gray-100 to-gray-200 border-l-4 border-gray-400'
                                                : idx === 2
                                                    ? 'bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-400'
                                                    : 'bg-gray-50 hover:bg-gray-100'
                                        }`}
                                >
                                    <div className="flex items-center gap-4 flex-1">
                                        <div
                                            className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-lg ${idx === 0
                                                    ? 'bg-yellow-500 text-white'
                                                    : idx === 1
                                                        ? 'bg-gray-400 text-white'
                                                        : idx === 2
                                                            ? 'bg-orange-400 text-white'
                                                            : 'bg-gray-300 text-gray-700'
                                                }`}
                                        >
                                            {player.rank}
                                        </div>
                                        <span className="font-bold text-gray-800 flex-1">{player.player}</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-black text-red-600">{player.value}</div>
                                        <div className="text-xs text-gray-500 font-medium uppercase">
                                            {type === 'runs' ? 'RUNS' : 'WICKETS'}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
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
