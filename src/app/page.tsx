import Hero from "@/components/homepage/Hero";
import TrustBadges from "@/components/homepage/TrustBadges";
import PromoBanners from "@/components/homepage/PromoBanners";
import BestSellers from "@/components/homepage/BestSellers";
import AutomotiveMaintenanceAndLubricants from "@/components/homepage/AutomotiveMaintenanceAndLubricants";
import CarEngineOilsGrid from "@/components/homepage/CarEngineOilsGrid";
import EngineCareCTA from "@/components/homepage/EngineCareCTA";
import TopCategories from "@/components/homepage/TopCategories";
import TrendingProducts from "@/components/homepage/TrendingProducts";

export default function Home() {
  return (
    <div className="flex flex-col font-sans">
      <Hero />
      <TrustBadges />
      <PromoBanners />
      <BestSellers />
      <AutomotiveMaintenanceAndLubricants />
      <CarEngineOilsGrid />
      <EngineCareCTA />
      <TopCategories />
      <TrendingProducts />
    </div>
  );
}
