"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Trophy, Users, ShieldCheck } from "lucide-react";

const stats = [
  { icon: <Trophy className="w-6 h-6" />, label: "Years of Excellence", value: "15+" },
  { icon: <Users className="w-6 h-6" />, label: "Happy Customers", value: "100K+" },
  { icon: <ShieldCheck className="w-6 h-6" />, label: "Authentic Brands", value: "50+" },
];

const AboutUs = () => {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-blue/5 rounded-full mb-6">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
              <span className="text-brand-blue font-bold text-[12px] uppercase tracking-widest">Our Legacy</span>
            </div>
            
            <h2 className="text-[36px] lg:text-[48px] font-semibold text-[#222222] leading-[1.1] tracking-tighter mb-8">
              Revolutionizing the <span className="text-brand-blue">Automotive Marketplace</span> with Excellence
            </h2>
            
            <p className="text-gray-600 text-[16px] leading-relaxed mb-10 font-medium">
              At NexG B2C Marketplace, we are committed to providing the highest quality engine oils, lubricants, and petroleum products. With a focus on performance and protection, we bring world-class brands to your doorstep.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                "100% Original & Certified Products",
                "Pan-India Fast Delivery Network",
                "Expert Technical Support",
                "Bulk Supply for Businesses"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-[14px] font-bold text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-12 pt-8 border-t border-gray-100">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-brand-blue font-semibold text-[28px]">{stat.value}</span>
                  <span className="text-gray-400 font-bold text-[12px] uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-[32px] overflow-hidden shadow-2xl">
              <img 
                src="/images/Homepage/About Image.png" 
                alt="NexG Facility" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1486006396193-471fa7ad93fe?q=80&w=2000&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center shadow-lg">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-[18px]">Quality Guaranteed</h4>
                    <p className="text-white/80 text-[12px] font-medium">Every product is tested for purity and performance.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-brand-orange/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
