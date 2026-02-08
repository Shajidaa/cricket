"use client";
import { useState, useEffect } from 'react';
import { VideoItem } from '@/types';
import VideosCard from '@/components/cards/VideosCard';
import { Play, Calendar, Filter, ArrowRight, Video, Clock, Eye } from 'lucide-react';
import Link from 'next/link';

interface VideoSectionProps {
    limit?: number;
    showHeader?: boolean;
    showFilters?: boolean;
    className?: string;
}

export default function VideoSection({
    limit = 6,
    showHeader = true,
    showFilters = false,
    className = ""
}: VideoSectionProps) {
    const [videos, setVideos] = useState<VideoItem[]>([]);
    const [filteredVideos, setFilteredVideos] = useState<VideoItem[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch('/data/videos.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch videos');
                }

                const data = await response.json();
                setVideos(data);

                // Extract unique categories
                const uniqueCategories = [...new Set(data.map((video: VideoItem) => video.category))] as string[];
                setCategories(['All', ...uniqueCategories]);

            } catch (error) {
                console.error('Error fetching videos:', error);
                setError('Failed to load videos');
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    // Filter videos based on selected category
    useEffect(() => {
        if (activeCategory === 'All') {
            setFilteredVideos(videos.slice(0, limit));
        } else {
            const filtered = videos.filter(video => video.category === activeCategory);
            setFilteredVideos(filtered.slice(0, limit));
        }
    }, [activeCategory, videos, limit]);

    

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

   



    return (
        <section className={`py-16 bg-gray-50 ${className}`}>
            {showHeader && (
                <div className="mb-5 bg-gradient-to-r from-black via-red-950 to-red-600 text-white p-6 shadow-lg">
                    <div className="flex container mx-auto p-5 justify-between items-end mb-8">
                        <div className="flex items-center gap-4">

                            <h1 className="text-5xl font-black italic text-white tracking-tighter border-l-8 border-red-600 pl-4 uppercase">
                                Latest Videos
                            </h1>
                        </div>
                        <div className="hidden md:block bg-white px-4 py-1 rounded-sm text-black font-bold text-[10px] tracking-widest">
                            POWERED BY <span className="text-blue-600">LIBERTY</span>
                        </div>
                    </div>

                </div>
            )}

            <div className="container mx-auto  -mt-20 px-4">


                {/* Videos Grid */}
                {filteredVideos.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {filteredVideos.map((video) => (
                                <div key={video.id} className="group">
                                    {/* Enhanced Video Card */}
                                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:transform group-hover:-translate-y-2">
                                        {/* Video Thumbnail/Player */}
                                        <div className="relative h-48 bg-gray-900">
                                            <iframe
                                                src={video.video_link.replace('watch?v=', 'embed/')}
                                                className="w-full h-full"
                                                title={video.title}
                                                allowFullScreen
                                                loading="lazy"
                                            />

                                            {/* Play Overlay */}
                                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                                                    <Play className="w-8 h-8 text-white ml-1" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Video Info */}
                                        <div className="p-4">
                                            {/* Category Badge */}
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                                                    {video.category}
                                                </span>
                                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                                    <Calendar className="w-3 h-3" />
                                                    <span>{formatDate(video.date)}</span>
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
                                                {video.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                                                {video.description}
                                            </p>

                                            {/* Action Button */}
                                            <button className="w-full bg-gray-100 hover:bg-red-600 hover:text-white text-gray-700 font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                                                <Play className="w-4 h-4" />
                                                Watch Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* View All Button */}
                        <div className="text-center">
                            <Link
                                href="/videos"
                                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg"
                            >
                                <Video size={20} />
                                View All Videos
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </>
                ) : (
                    <div className="text-center py-16">
                        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Video className="w-12 h-12 text-gray-400" />
                        </div>
                        <h3 className="text-gray-600 text-xl font-semibold mb-4">
                            No videos found in &quot;{activeCategory}&quot; category
                        </h3>
                        <p className="text-gray-500 mb-6">
                            Try selecting a different category or check back later.
                        </p>
                        <button
                            onClick={() => setActiveCategory('All')}
                            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
                        >
                            Show All Videos ({videos.length})
                        </button>
                    </div>
                )}


            </div>
        </section>
    );
}
