import Hero from "@/components/homepage/Hero";
import TrustBadges from "@/components/homepage/TrustBadges";
import HotDeals from "@/components/homepage/HotDeals";
import PromoBanners from "@/components/homepage/PromoBanners";
import BestSellers from "@/components/homepage/BestSellers";
import AutomotiveMaintenanceAndLubricants from "@/components/homepage/AutomotiveMaintenanceAndLubricants";
import CarEngineOilsGrid from "@/components/homepage/CarEngineOilsGrid";
import EngineCareCTA from "@/components/homepage/EngineCareCTA";
import TopCategories from "@/components/homepage/TopCategories";
import TrendingProducts from "@/components/homepage/TrendingProducts";
import TrendingBanners from "@/components/homepage/TrendingBanners";
import RecentlyViewed from "@/components/homepage/RecentlyViewed";
import ProductsUnder500 from "@/components/homepage/ProductsUnder500";
import AboutUs from "@/components/homepage/AboutUs";
import FAQ from "@/components/homepage/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col font-sans">
      <Hero />
      <TrustBadges />
      <HotDeals />
      <PromoBanners />
      <BestSellers />
      <AutomotiveMaintenanceAndLubricants />
      <CarEngineOilsGrid />
      <EngineCareCTA />
      <TopCategories />
      <TrendingProducts />
      <RecentlyViewed />
      <TrendingBanners />
      <ProductsUnder500 />
      <AboutUs />
      <FAQ />
    </div>
  );
}
