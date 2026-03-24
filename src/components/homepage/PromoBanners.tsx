import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const banners = [
  {
    image: "/images/Homepage/Promotional 1.png",
    link: "/shop",
    alt: "Promotional Banner 1"
  },
  {
    image: "/images/Homepage/Promotional 2.png",
    link: "/shop",
    alt: "Promotional Banner 2"
  },
  {
    image: "/images/Homepage/Promotional 3.png",
    link: "/shop",
    alt: "Promotional Banner 3"
  }
];

const PromoBanners = () => {
  return (
    <section className="bg-[#F8F9FA] py-20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Section Heading - Balanced Side Lines and Less Gap */}
        <div className="flex items-center justify-center gap-6 mb-10 px-1">
           <div className="h-[2px] w-20 bg-brand-blue rounded-full" />
           <h2 className="text-[30px] lg:text-[34px] font-black text-[#222222] tracking-tighter whitespace-nowrap">
             Exclusive Limited Deals
           </h2>
           <div className="h-[2px] w-20 bg-brand-blue rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 1st Banner - Pure Visual */}
          <div className="group relative block aspect-[16/10] overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer">
            <img
              src="/images/Homepage/Promotion 1.png?v=5"
              alt="Performance Lubricants"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Minimal Overlay for Link visual feedback */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />

            {/* <Link href="/shop" className="absolute inset-0 z-10" /> */}
          </div>

          {/* 2nd Banner - Pure Visual */}
          <div className="group relative block aspect-[16/10] overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer">
            <img
              src="/images/Homepage/Promotion 2.png?v=5"
              alt="Professional Oil"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Minimal Overlay for Link visual feedback */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
            {/* <Link href="/shop" className="absolute inset-0 z-10" /> */}
          </div>

          {/* 3rd Banner - Pure Visual */}
          <div className="group relative block aspect-[16/10] overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer">
            <img
              src="/images/Homepage/Promotion 3.png?v=5"
              alt="Quality Care"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Minimal Overlay for Link visual feedback */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
            {/* <Link href="/shop" className="absolute inset-0 z-10" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanners;
