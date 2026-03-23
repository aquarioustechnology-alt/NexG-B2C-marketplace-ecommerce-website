"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const EngineCareCTA = () => {
  return (
    <section className="bg-white py-[84px]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="relative w-full aspect-[21/7] lg:aspect-[25/6] overflow-hidden rounded-[32px] shadow-2xl">
          {/* Background Image */}
          <img
            src="/images/Homepage/CTA BG first.png?v=10"
            alt="Engine Care background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Content */}
          <div className="relative h-full flex flex-col justify-center px-10 lg:px-20 max-w-[800px]">
            <h1 
              className="!text-white text-[26px] lg:text-[38px] font-black leading-tight tracking-tighter mb-2 capitalize drop-shadow-2xl"
              style={{ color: 'white' }}
            >
              Engineering Extreme Care <br /> for Every Drive
            </h1>
            
            <p className="text-gray-200 text-[14px] lg:text-[16px] font-medium mb-6 max-w-[600px] leading-relaxed">
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
