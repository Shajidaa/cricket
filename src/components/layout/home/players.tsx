"use client";
import { useState, useEffect } from 'react';
import { Player } from '@/types';
import PlayerCard from '@/components/cards/PlayerCard ';
import { Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Container from '../Container';

interface PlayersProps {
    limit?: number;
    showHeader?: boolean;
    showFilters?: boolean;
    className?: string;
}

export default function Players({
    limit = 4,
    showHeader = true,

    className = ""
}: PlayersProps) {
    const [players, setPlayers] = useState<Player[]>([]);



    useEffect(() => {
        const fetchPlayers = async () => {
            try {

                const response = await fetch('/api/players');
                const data = await response.json();
                setPlayers(data);
            } catch (error) {
                console.error('Error fetching players:', error);
            }
        };

        fetchPlayers();
    }, []);







    return (
        <section className={`py-16 bg-gray-50 ${className}`}>
            {showHeader && (
                <div className="mb-5 bg-gradient-to-r from-black via-red-950 to-red-600 text-white p-6 shadow-lg">
                    <Container className="p-5">
                        <div className="flex justify-between items-end mb-8">
                            <div className="flex items-center gap-4">
                                <h1 className="text-5xl font-black italic text-white tracking-tighter border-l-8 border-red-600 pl-4 uppercase">
                                    Our Players
                                </h1>
                            </div>
                            <div className="hidden md:block bg-white px-4 py-1 rounded-sm text-black font-bold text-[10px] tracking-widest">
                                POWERED BY <span className="text-blue-600">LIBERTY</span>
                            </div>
                        </div>



                    </Container>
                </div>
            )}

            <Container className="-mt-20 px-4">
                {/* Players Grid */}
                {players.length > 0 && (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                            {players.slice(0, limit).map((player) => (
                                <PlayerCard key={player.id} player={player} />
                            ))}
                        </div>

                        {/* View All Button */}
                        <div className="text-center">
                            <Link
                                href="/player"
                                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg"
                            >
                                <Users size={20} />
                                View All Players
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </>
                )}
            </Container>
        </section>
    );
}
