"use client";
import Container from '@/components/layout/Container';
import Link from 'next/link';
import { Home, Search, ArrowLeft, AlertTriangle } from 'lucide-react';

export default function NotFound() {
    return (
        <Container className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center max-w-2xl mx-auto px-4">
                {/* 404 Cricket Scene */}
                <div className="relative mb-8">
                    {/* Large 404 */}
                    <div className="text-8xl md:text-9xl font-black text-gray-200 select-none">
                        4<span className="text-red-300">0</span>4
                    </div>

                    {/* Cricket Stumps in the "0" */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                            {/* Stumps */}
                            <div className="flex gap-1">
                                <div className="w-1 h-16 bg-yellow-600 rounded-t"></div>
                                <div className="w-1 h-16 bg-yellow-600 rounded-t"></div>
                                <div className="w-1 h-16 bg-yellow-600 rounded-t"></div>
                            </div>
                            {/* Bails */}
                            <div className="absolute -top-1 left-0 right-0 flex justify-between">
                                <div className="w-2 h-1 bg-yellow-800 rounded"></div>
                                <div className="w-2 h-1 bg-yellow-800 rounded"></div>
                            </div>
                            {/* Cricket Ball */}
                            <div className="absolute -right-8 top-6 w-4 h-4 bg-red-600 rounded-full shadow-lg animate-bounce">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-3 h-0.5 bg-white rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Error Message */}
                <div className="space-y-6">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <AlertTriangle className="w-6 h-6 text-yellow-500" />
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                            Oops! That's a Wide Ball!
                        </h1>
                    </div>

                    <p className="text-lg text-gray-600 mb-2">
                        The page you're looking for has been bowled out.
                    </p>
                    <p className="text-gray-500">
                        It seems like this page doesn't exist or has been moved to the pavilion.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                        <Link
                            href="/"
                            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-lg"
                        >
                            <Home size={20} />
                            Back to Home
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                        >
                            <ArrowLeft size={20} />
                            Go Back
                        </button>
                    </div>

                    {/* Quick Links */}
                    <div className="mt-12 p-6 bg-white rounded-xl shadow-md">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                            <Search size={20} className="text-blue-500" />
                            Looking for something specific?
                        </h3>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <Link
                                href="/matches"
                                className="flex flex-col items-center gap-2 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
                            >
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
                                    <span className="text-red-600 font-bold text-lg">🏏</span>
                                </div>
                                <span className="text-sm font-medium text-gray-700">Live Matches</span>
                            </Link>

                            <Link
                                href="/news"
                                className="flex flex-col items-center gap-2 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
                            >
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                    <span className="text-blue-600 font-bold text-lg">📰</span>
                                </div>
                                <span className="text-sm font-medium text-gray-700">Cricket News</span>
                            </Link>

                            <Link
                                href="/videos"
                                className="flex flex-col items-center gap-2 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
                            >
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                                    <span className="text-green-600 font-bold text-lg">🎥</span>
                                </div>
                                <span className="text-sm font-medium text-gray-700">Videos</span>
                            </Link>

                            <Link
                                href="/team"
                                className="flex flex-col items-center gap-2 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
                            >
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                                    <span className="text-purple-600 font-bold text-lg">👥</span>
                                </div>
                                <span className="text-sm font-medium text-gray-700">Teams</span>
                            </Link>
                        </div>
                    </div>


                </div>
            </div>
        </Container>
    );
}