
import HeroSection from "@/components/layout/home/HeroSection";
import LatestNewsSection from "@/components/layout/home/LatestNewsSection";
import TestimonialsSection from "@/components/layout/home/TestimonialsSection";
import CTASection from "@/components/layout/home/CTASection";
import StatsSection from "@/components/sections/StatsSection";
import VideoSection from "@/components/layout/home/VideoSection";
import Players from "@/components/layout/home/players";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Latest News Section */}
      <LatestNewsSection />

      {/* Video Section */}
      <VideoSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Players Section */}
      <Players limit={4} />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Call to Action Section */}
      <CTASection />
    </div>
  );
}
