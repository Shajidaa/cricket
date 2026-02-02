import Link from 'next/link';
import { ArrowRight, Play, Trophy } from 'lucide-react';

export default function CTASection() {
    return (
        <section className="py-20 bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
                <div className="absolute top-32 right-20 w-24 h-24 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-32 right-1/3 w-20 h-20 border-2 border-white rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <Trophy className="w-12 h-12 text-yellow-400" />
                        <h2 className="text-4xl md:text-5xl font-black italic uppercase">
                            Ready for Cricket?
                        </h2>
                    </div>

                    <p className="text-xl md:text-2xl mb-8 text-red-100 leading-relaxed">
                        Join millions of cricket fans worldwide and never miss a moment of the action.
                        Get live scores, breaking news, and exclusive content.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link
                            href="/matches"
                            className="group bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            Watch Live Matches
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="/news"
                            className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold px-8 py-4 rounded-lg transition-all duration-300 flex items-center gap-3"
                        >
                            <Trophy className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            Latest Cricket News
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="group">
                            <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform">24/7</div>
                            <div className="text-red-200">Live Coverage</div>
                        </div>
                        <div className="group">
                            <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform">100+</div>
                            <div className="text-red-200">Countries Covered</div>
                        </div>
                        <div className="group">
                            <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform">1M+</div>
                            <div className="text-red-200">Happy Users</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}