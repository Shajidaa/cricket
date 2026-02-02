import Container from '@/components/layout/Container';
import { Trophy, Clock, TrendingUp } from 'lucide-react';

export default function Loading() {
    return (
        <Container className="min-h-screen  flex items-center justify-center">
            <div className="text-center">
                {/* Animated Cricket Ball */}
                <div className="relative mb-8">
                    <div className="w-24 h-24 mx-auto relative">
                        {/* Cricket Ball */}
                        <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-red-800 rounded-full shadow-lg animate-bounce">
                            {/* Cricket Ball Seam */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-0.5 bg-white rounded-full"></div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center rotate-90">
                                <div className="w-16 h-0.5 bg-white rounded-full"></div>
                            </div>
                        </div>

                        {/* Orbiting Icons */}
                        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
                            <Trophy className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 text-yellow-500" />
                        </div>
                        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}>
                            <Clock className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 text-blue-500" />
                        </div>
                        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '2.5s' }}>
                            <TrendingUp className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-6 h-6 text-green-500" />
                        </div>
                    </div>
                </div>



            </div>
        </Container>
    );
}