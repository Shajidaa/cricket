import StatsCard from "@/components/cards/StatsCard";
import HeroSection from "@/components/layout/home/HeroSection";
import LatestNewsSection from "@/components/layout/home/LatestNewsSection";


export default function Home() {
  return (
    <div><HeroSection />
    <LatestNewsSection/>
    <StatsCard/>
    </div>
  );
}
