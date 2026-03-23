"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Engine Oils",
    image: "/images/Homepage/category 1.jpg",
    slug: "engine-oils",
  },
  {
    id: 2,
    name: "Industrial Greases",
    image: "/images/Homepage/category 2.jpg",
    slug: "greases",
  },
  {
    id: 3,
    name: "Advanced Coolants",
    image: "/images/Homepage/category 3.jpg",
    slug: "coolants",
  },
  {
    id: 4,
    name: "Gear & Transmission",
    image: "/images/Homepage/category 4.jpg",
    slug: "gear-oil",
  },
  {
    id: 5,
    name: "Brake Fluids",
    image: "/images/Homepage/category 5.jpg",
    slug: "brake-fluid",
  },
];

const TopCategories = () => {
  return (
    <section className="bg-[#F8F9FA] py-[60px]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Section Heading - Centered with balanced side lines */}
        <div className="flex items-center justify-center gap-6 mb-12 px-1">
          <div className="h-[2px] w-20 bg-brand-blue rounded-full" />
          <h2 className="text-[28px] lg:text-[32px] font-black text-[#222222] tracking-tighter whitespace-nowrap">
            Our Product Categories
          </h2>
          <div className="h-[2px] w-20 bg-brand-blue rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group flex flex-col items-center">
              {/* Image Container with Hover Effect */}
              <div className="relative w-full aspect-square bg-white rounded-3xl p-6 border-2 border-gray-100/60 overflow-hidden transition-all duration-500 hover:border-brand-blue/30 hover:shadow-xl cursor-pointer">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-contain group-hover:scale-110 group-hover:opacity-30 transition-all duration-700"
                />

                {/* View All Overlay - Clear Style for Focus */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
                  {/* Site-wide Rectangular Button Style */}
                  <div className="relative px-6 py-2.5 bg-brand-blue text-white rounded-lg font-bold text-[14px] flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 pointer-events-auto overflow-hidden group/btnInner shadow-lg">
                    {/* Interior White Sweep Animation */}
                    <div className="absolute inset-0 w-0 bg-white group-hover/btnInner:w-full transition-all duration-500 ease-out" />
                    
                    <span className="relative z-10 transition-colors duration-500 group-hover/btnInner:text-brand-blue">View All</span>
                    <ArrowRight className="relative z-10 w-4 h-4 transition-all duration-500 group-hover/btnInner:translate-x-1.5 group-hover/btnInner:text-brand-blue" />
                  </div>
                </div>
              </div>

              {/* Category Name Below Image */}
              <h3 className="mt-6 text-[18px] font-black text-[#222222] tracking-tight group-hover:text-brand-blue transition-colors text-center">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
