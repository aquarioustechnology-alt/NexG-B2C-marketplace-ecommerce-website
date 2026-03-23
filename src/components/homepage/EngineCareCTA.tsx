"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const EngineCareCTA = () => {
  return (
    <section className="bg-white py-[60px]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="relative w-full aspect-[21/9] lg:aspect-[25/8] overflow-hidden rounded-[32px] shadow-2xl">
          {/* Background Image */}
          <img
            src="/images/Homepage/CTA BG first.png"
            alt="Engine Care background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Darker Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

          {/* Content */}
          <div className="relative h-full flex flex-col justify-center px-10 lg:px-20 max-w-[800px]">
            <h2 className="text-white text-[32px] lg:text-[48px] font-black leading-tight tracking-tighter mb-4 capitalize">
              Engineering Extreme Care <br /> for Every Drive
            </h2>
            
            <p className="text-gray-200 text-[16px] lg:text-[18px] font-medium mb-10 max-w-[600px] leading-relaxed">
              Experience unparalleled engine longevity and smooth performance with 
              our precision-engineered lubricants tailored for modern automotive excellence.
            </p>

            <div className="flex">
              <Link 
                href="/shop" 
                className="relative px-10 py-4 bg-brand-blue rounded-lg text-white font-bold text-[16px] inline-flex items-center gap-3 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group/cta"
              >
                {/* Left-to-Right Orange Sweep Layer */}
                <div className="absolute inset-0 w-0 bg-brand-orange group-hover/cta:w-full transition-all duration-500 ease-out" />
                
                <span className="relative z-10">Explore All Products</span>
                <ArrowRight className="relative z-10 w-5 h-5 transition-all duration-500 group-hover/cta:translate-x-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineCareCTA;
