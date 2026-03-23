import Hero from "@/components/homepage/Hero";
import TrustBadges from "@/components/homepage/TrustBadges";
import PromoBanners from "@/components/homepage/PromoBanners";
import BestSellers from "@/components/homepage/BestSellers";
import EngineOilsForCar from "@/components/homepage/EngineOilsForCar";

export default function Home() {
  return (
    <div className="flex flex-col font-sans">
      <Hero />
      <TrustBadges />
      <PromoBanners />
      <BestSellers />
      <EngineOilsForCar />
    </div>
  );
}
