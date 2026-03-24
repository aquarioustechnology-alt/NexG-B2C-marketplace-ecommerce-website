"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="bg-[#0F4E8A] py-16 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10 text-center flex flex-col items-center">
        {/* Main Heading - Exact same style as Best Sellers */}
        <h2 className="text-[30px] lg:text-[34px] font-semibold text-white tracking-tighter leading-tight mb-6 w-full">
          Revolutionizing the Automotive Marketplace with Excellence
        </h2>
        
        {/* Description - Reduced to 15px */}
        <p className="text-white/80 text-[15px] leading-relaxed mb-10 font-medium max-w-[850px] mx-auto">
          At NexG B2C Marketplace, we are committed to providing the highest quality engine oils, lubricants, and petroleum products. 
          With a focus on performance and protection, we bring world-class brands to your doorstep, 
          empowering vehicles and industries across India.
        </p>

        {/* Features Row - Single line with white icons and regular weight */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {[
            "100% Original & Certified",
            "Pan-India Fast Delivery",
            "Expert Technical Support",
            "Bulk Supply for Businesses"
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-white" />
              <span className="text-[14px] font-normal text-white">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
