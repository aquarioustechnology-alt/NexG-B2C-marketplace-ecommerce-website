"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    image: "/images/Homepage/hero image 1.png",
    title: "Unmatched Engine Performance & Protection with Next-Gen Lubricants",
    offer: "Flat 60% OFF",
    buttonText: "Shop Now"
  },
  {
    image: "/images/Homepage/hero image 2.png",
    title: "Industrial Grade Lubricants Engineered for Maximum Reliability",
    offer: "Up to 40% OFF",
    buttonText: "Explore Products"
  },
  {
    image: "/images/Homepage/hero image 3.png",
    title: "Premium Petroleum & Industrial Fuels at Wholesale Bulk Rates",
    offer: "Best Bulk Deals",
    buttonText: "Shop Now"
  },
  {
    image: "/images/Homepage/hero image 4.png",
    title: "Next-Gen Fuel Additives for Maximum Savings with Every Kilometer",
    offer: "New Launch Offer",
    buttonText: "Explore Products"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-black h-[300px] sm:h-[350px] lg:h-[380px]">
      {/* Slider */}
      <div className="relative h-full w-full group">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image - Absolute Fill */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover object-center w-full h-full"
                sizes="100vw"
              />
              {/* Refined Left-Side Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent pointer-events-none" />
            </div>

            {/* Content Container - Increased Width */}
            <div className="relative h-full max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center">
              <div className="max-w-5xl w-full">
                {/* Modern Stylized Offer Pill */}
                <div className="mb-5 flex items-center">
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-brand-orange/90 backdrop-blur-md rounded-md border-l-4 border-white shadow-xl transform skew-x-[-12deg]">
                    <span 
                      className="text-white text-[13px] lg:text-[15px] font-black uppercase tracking-[0.1em] skew-x-[12deg]"
                      style={{ color: 'white' }}
                    >
                      {slide.offer}
                    </span>
                  </div>
                </div>

                {/* Attention Grabbing One-Liner - Absolute White & 2 Lines Max */}
                <h1 
                  className="text-3xl lg:text-5xl font-black leading-[1.1] mb-8 tracking-tight !text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] w-full"
                  style={{ color: 'white' }}
                >
                  {slide.title}
                </h1>

                <div className="flex items-center">
                  <Link 
                    href="/shop" 
                    className="relative px-8 py-3.5 bg-brand-blue rounded-lg text-white font-bold text-[16px] flex items-center gap-3 shadow-2xl group/btn transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                  >
                    {/* Left-to-Right White Sweep Layer */}
                    <div className="absolute inset-0 w-0 bg-white group-hover/btn:w-full transition-all duration-500 ease-out" />
                    
                    <span className="relative z-10 transition-colors duration-500 group-hover/btn:text-brand-blue">{slide.buttonText}</span>
                    <ArrowRight className="relative z-10 w-5 h-5 transition-all duration-500 group-hover/btn:text-brand-blue group-hover/btn:translate-x-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Square Navigation Arrows with 8px Radius */}
        <div className="absolute bottom-8 right-12 z-20 flex items-center gap-2">
          <button
            onClick={prevSlide}
            className="w-11 h-11 rounded-[8px] bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-brand-orange hover:border-brand-orange transition-all flex items-center justify-center group/nav"
          >
            <ChevronLeft className="w-6 h-6 group-hover/nav:-translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="w-11 h-11 rounded-[8px] bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-brand-orange hover:border-brand-orange transition-all flex items-center justify-center group/nav"
          >
            <ChevronRight className="w-6 h-6 group-hover/nav:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Modern Rounded Slide Indicators (Lower Height) */}
        <div className="absolute bottom-8 left-12 z-20 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-[4px] rounded-full transition-all duration-500 ${
                i === current ? "w-12 bg-brand-orange" : "w-6 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
