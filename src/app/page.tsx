import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/homepage/Hero";
import TrustBadges from "@/components/homepage/TrustBadges";

export default function Home() {
  return (
    <div className="flex flex-col font-sans">
      <Hero />
      <TrustBadges />

      {/* Placeholder for trending */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
           <div className="flex items-center justify-between mb-16">
             <h2 className="text-4xl font-bold text-[#222222]">Trending Now</h2>
             <Link href="/shop" className="text-brand-blue font-bold flex items-center gap-1.5 hover:translate-x-1 transition-transform">
               Explore all products <ArrowRight className="w-5 h-5" />
             </Link>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
             {[1, 2, 3, 4].map((i) => (
               <div key={i} className="group cursor-pointer">
                 <div className="aspect-[4/5] bg-gray-100 rounded-3xl mb-6 overflow-hidden relative shadow-sm group-hover:shadow-md transition-all">
                   <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                   <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#222222] shadow-sm uppercase tracking-wide">
                     Hot Item
                   </div>
                 </div>
                 <h4 className="text-lg font-bold text-[#222222] mb-1.5 group-hover:text-brand-blue transition-colors">Premium Gadget ${i * 99}.00</h4>
                 <p className="text-xs text-brand-orange uppercase tracking-[0.1em] font-bold">Electronics</p>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
}
