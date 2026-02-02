
import HeroSection from "@/components/layout/home/HeroSection";




import LatestNewsSection from "@/components/layout/home/LatestNewsSection";
import TestimonialsSection from "@/components/layout/home/TestimonialsSection";
import CTASection from "@/components/layout/home/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />


      {/* Latest News Section */}
      <LatestNewsSection />






      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Call to Action Section */}
      <CTASection />
    </div>
  );
}
