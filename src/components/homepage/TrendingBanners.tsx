"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const TrendingBanners = () => {
  const banners = [
    {
      image: "/images/Homepage/Trending BG 1.png",
      title: "Elite Performance Car Oils",
      buttonText: "Shop Now",
      link: "/shop"
    },
    {
      image: "/images/Homepage/Trending BG 3.png",
      title: "Heavy Duty Diesel Solutions",
      buttonText: "Explore Products",
      link: "/shop"
    },
    {
      image: "/images/Homepage/Trending BG 2.png",
      title: "Advanced Engine Protection",
      buttonText: "Buy Now",
      link: "/shop"
    },
    {
      image: "/images/Homepage/Trending BG 4.png",
      title: "Premium Synthetic Range",
      buttonText: "Exclusive Products",
      link: "/shop"
    }
  ];

  return (
    <section className="bg-white pt-0 pb-[60px]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Section Heading - Centered */}
        <div className="flex items-center justify-center gap-4 mb-10 px-1">
          <div className="hidden lg:block h-[2px] w-16 bg-brand-blue rounded-full mt-1.5" />
          <h2 className="text-[30px] lg:text-[34px] font-semibold text-[#222222] tracking-tighter text-center">
            Premium Automotive Offers
          </h2>
          <div className="hidden lg:block h-[2px] w-16 bg-brand-blue rounded-full mt-1.5" />
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-1">
          {banners.map((banner, index) => (
            <div 
              key={index}
              className="group relative aspect-[21/10] overflow-hidden rounded-[24px] shadow-lg cursor-pointer"
            >
              <img 
                src={banner.image} 
                alt={banner.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* High-End Linear Gradient: Strong at bottom, smooth fade to top */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:from-black/95 transition-all duration-500" />
              
              {/* Combined Heading and Button Content */}
              <div className="absolute bottom-10 left-10 right-10 flex flex-col items-start gap-4 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-white text-[18px] lg:text-[22px] font-medium leading-tight max-w-[80%] drop-shadow-lg">
                  {banner.title}
                </h3>
                <Link 
                  href={banner.link} 
                  className="relative px-8 py-3 bg-brand-blue rounded-lg text-white font-bold text-[14px] inline-flex items-center gap-2 group/btnInner transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 w-0 bg-brand-orange group-hover/btnInner:w-full transition-all duration-500 ease-out" />
                  <span className="relative z-10 font-semibold">{banner.buttonText}</span>
                  <ArrowRight className="relative z-10 w-4.5 h-4.5 transition-all duration-500 group-hover/btnInner:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingBanners;
