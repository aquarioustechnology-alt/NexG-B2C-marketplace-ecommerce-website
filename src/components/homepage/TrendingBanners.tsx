"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const TrendingBanners = () => {
  return (
    <section className="bg-white py-0">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
         {/* Section Heading - Centered */}
         <div className="flex items-center justify-center gap-4 mb-10 px-1">
            <div className="hidden lg:block h-[2px] w-16 bg-brand-blue rounded-full mt-1.5" />
            <h2 className="text-[30px] lg:text-[34px] font-semibold text-[#222222] tracking-tighter">
              Premium Automotive Offers
            </h2>
            <div className="hidden lg:block h-[2px] w-16 bg-brand-blue rounded-full mt-1.5" />
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-1">
          {/* Banner 1 */}
          <div className="group relative aspect-[21/13] overflow-hidden rounded-[24px] shadow-lg cursor-pointer">
            <img 
              src="/images/Homepage/Trending BG 1.png" 
              alt="Promo 1"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Black Gradient only at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500" />
            
            {/* Bottom-Left Content: Shop Now Button */}
            <div className="absolute bottom-10 left-10 translate-y-2 group-hover:translate-y-0 transition-all duration-500 opacity-90 group-hover:opacity-100">
              <div className="relative px-10 py-3.5 bg-brand-blue rounded-lg text-white font-bold text-[16px] inline-flex items-center gap-3 group/btnInner transition-all duration-300 transform overflow-hidden pointer-events-auto">
                <div className="absolute inset-0 w-0 bg-brand-orange group-hover/btnInner:w-full transition-all duration-500 ease-out" />
                <span className="relative z-10 font-semibold">Shop Now</span>
                <ArrowRight className="relative z-10 w-5 h-5 transition-all duration-500 group-hover/btnInner:translate-x-1.5" />
              </div>
            </div>
          </div>

          {/* Banner 2 */}
          <div className="group relative aspect-[21/13] overflow-hidden rounded-[24px] shadow-lg cursor-pointer">
            <img 
              src="/images/Homepage/Trending BG 2.png" 
              alt="Promo 2"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500" />
            
            <div className="absolute bottom-10 left-10 translate-y-2 group-hover:translate-y-0 transition-all duration-500 opacity-90 group-hover:opacity-100">
              <div className="relative px-10 py-3.5 bg-brand-blue rounded-lg text-white font-bold text-[16px] inline-flex items-center gap-3 group/btnInner transition-all duration-300 transform overflow-hidden pointer-events-auto">
                <div className="absolute inset-0 w-0 bg-brand-orange group-hover/btnInner:w-full transition-all duration-500 ease-out" />
                <span className="relative z-10 font-semibold">Shop Now</span>
                <ArrowRight className="relative z-10 w-5 h-5 transition-all duration-500 group-hover/btnInner:translate-x-1.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingBanners;
