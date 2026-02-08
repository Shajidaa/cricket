"use client";
import { useState, useEffect } from 'react';
import { StatsData } from '@/types/stats';
import { ChevronRight } from 'lucide-react';
import Container from '../layout/Container';
import StatsModal from '../modals/StatsModal';

export default function StatsSection() {
    const [statsData, setStatsData] = useState<StatsData | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState<'runs' | 'wickets' | 'standings'>('runs');

    useEffect(() => {
        const fetchStatsData = async () => {
            try {
                const response = await fetch('/data/stats.json');
                const data = await response.json();
                setStatsData(data);
            } catch (error) {
                console.error('Error fetching stats data:', error);
            }
        };
        fetchStatsData();
    }, []);

    const openModal = (type: 'runs' | 'wickets' | 'standings') => {
        setModalType(type);
        setModalOpen(true);
    };

    if (!statsData) return null;

    const { stats, tournament } = statsData;

    const getModalData = () => {
        switch (modalType) {
            case 'runs':
                return stats.most_runs;
            case 'wickets':
                return stats.most_wickets;
            case 'standings':
                return stats.standings.table_leaders;
        }
    };

    const getModalTitle = () => {
        switch (modalType) {
            case 'runs':
                return 'Most Runs';
            case 'wickets':
                return 'Most Wickets';
            case 'standings':
                return 'Full Standings';
        }
    };

    return (
        <>
            <section className="py-12 bg-white">
                <Container className=" px-4 grid grid-cols-1 md:grid-cols-3 gap-4">

                    {/* WBBL|11 MOST RUNS */}
                    <div className="border border-gray-100 shadow-sm rounded-sm overflow-hidden flex flex-col">
                        <h2 className="bg-white p-4 text-xl italic font-black uppercase tracking-tighter text-gray-900 border-b border-gray-100">
                            {tournament} Most Runs
                        </h2>
                        <div className="relative bg-gradient-to-r from-[#b30000] to-[#1a0000] p-6 text-white min-h-[200px] flex flex-col justify-center">
                            <div className="relative  z-10">
                                <h3 className="text-2xl font-bold leading-tight w-1/2">
                                    {stats.most_runs[0].player}
                                </h3>
                                <div className="text-7xl font-black mt-2 italic text-red-600 drop-shadow-md">
                                    {stats.most_runs[0].value}
                                </div>
                            </div>
                            {/* Placeholder for player image similar to Georgia Wareham */}
                            <div className="absolute right-0 bottom-0 h-full w-1/2 bg-[url('/images/player-placeholder.png')] bg-contain bg-no-repeat bg-right-bottom opacity-90" />
                        </div>
                        <div className="flex-grow">
                            {stats.most_runs.slice(1, 4).map((item, idx) => (
                                <div key={idx} className="flex justify-between items-center p-4 border-b border-gray-50 last:border-0">
                                    <span className="font-bold text-gray-800"><span className="mr-3 text-gray-400">{item.rank}</span>{item.player}</span>
                                    <span className="font-black text-red-600 text-lg">{item.value}</span>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => openModal('runs')}
                            className="flex items-center justify-center gap-1 p-4 text-red-600 font-bold text-sm uppercase hover:bg-gray-50 transition-colors"
                        >
                            More Stats <ChevronRight size={16} />
                        </button>
                    </div>

                    {/* WBBL|11 MOST WICKETS */}
                    <div className="border border-gray-100 shadow-sm rounded-sm overflow-hidden flex flex-col">
                        <h2 className="bg-white p-4 text-xl italic font-black uppercase tracking-tighter text-gray-900 border-b border-gray-100">
                            {tournament} Most Wickets
                        </h2>
                        <div className="relative bg-gradient-to-r from-[#b30000] to-[#1a0000] p-6 text-white min-h-[200px] flex flex-col justify-center">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold leading-tight w-1/2">
                                    {stats.most_wickets[0].player}
                                </h3>
                                <div className="text-7xl font-black mt-2 italic text-red-600 drop-shadow-md">
                                    {stats.most_wickets[0].value}
                                </div>
                            </div>
                            <div className="absolute right-0 bottom-0 h-full w-1/2 bg-[url('/images/player-placeholder.png')] bg-contain bg-no-repeat bg-right-bottom opacity-90" />
                        </div>
                        <div className="flex-grow">
                            {stats.most_wickets.slice(1, 4).map((item, idx) => (
                                <div key={idx} className="flex justify-between items-center p-4 border-b border-gray-50 last:border-0">
                                    <span className="font-bold text-gray-800"><span className="mr-3 text-gray-400">{item.rank}</span>{item.player}</span>
                                    <span className="font-black text-red-600 text-lg">{item.value}</span>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => openModal('wickets')}
                            className="flex items-center justify-center gap-1 p-4 text-red-600 font-bold text-sm uppercase hover:bg-gray-50 transition-colors"
                        >
                            More Stats <ChevronRight size={16} />
                        </button>
                    </div>

                    {/* WBBL|11 STANDINGS */}
                    <div className="border border-gray-100 shadow-sm rounded-sm overflow-hidden flex flex-col">
                        <h2 className="bg-white p-4 text-xl italic font-black uppercase tracking-tighter text-gray-900 border-b border-gray-100">
                            {tournament} Standings
                        </h2>
                        <div className="relative bg-gradient-to-r from-[#b30000] to-[#1a0000] p-6 text-white min-h-[200px] flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold leading-tight">
                                    {stats.standings.team_focus.name}
                                </h3>
                                <div className="text-7xl font-black mt-2 italic text-red-600 drop-shadow-md uppercase">
                                    {stats.standings.team_focus.rank}
                                </div>
                            </div>

                            {/* Team Logo placeholder top right */}
                            <div className="absolute top-6 right-6 w-16 h-12 bg-contain bg-center bg-no-repeat opacity-80"
                                style={{ backgroundImage: "url('/images/renegades-logo.png')" }} />
                        </div>
                        <div className="flex-grow">
                            {stats.standings.table_leaders.slice(0, 4).map((team, idx) => (
                                <div key={idx} className="flex justify-between items-center p-4 border-b border-gray-50 last:border-0">
                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-400 font-bold">{team.rank}</span>
                                        <div className="w-6 h-6 bg-gray-200 rounded-sm" /> {/* Logo placeholder */}
                                        <span className="font-bold text-gray-800 text-sm">{team.team}</span>
                                    </div>
                                    <span className="font-black text-red-600 text-sm whitespace-nowrap">{team.points} pts</span>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => openModal('standings')}
                            className="flex items-center justify-center gap-1 p-4 text-red-600 font-bold text-sm uppercase hover:bg-gray-50 transition-colors"
                        >
                            Full Table <ChevronRight size={16} />
                        </button>
                    </div>

                </Container>
            </section>

            {/* Stats Modal */}
            <StatsModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                type={modalType}
                data={getModalData()}
                title={getModalTitle()}
                tournament={tournament}
            />
        </>
    );
}