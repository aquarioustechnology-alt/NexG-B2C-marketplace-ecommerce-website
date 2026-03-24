import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const carProducts = [
  {
    image: "/images/Homepage/Engine Oil for car 1.png",
    highlight: "Newly Added",
  },
  {
    image: "/images/Homepage/Engine Oil for car 2.png",
    highlight: "Shop Now",
  },
  {
    image: "/images/Homepage/Engine Oil for car 3.png",
    highlight: "Min. 20% off",
  },
  {
    image: "/images/Homepage/Engine Oil for car 4.png",
    highlight: "Exclusive",
  },
];

const AutomotiveMaintenanceAndLubricants = () => {
  return (
    <section className="bg-[#0066B2] py-[60px]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content Side */}
          <div className="w-full lg:w-[30%]">
            <h2 
              className="!text-white text-[32px] lg:text-[44px] font-semibold tracking-tighter leading-tight mb-2"
              style={{ color: 'white' }}
            >
              Automotive Maintenance <br className="hidden lg:block" /> and Lubricants
            </h2>
            <p className="text-white/80 font-medium text-sm lg:text-base mb-6 max-w-[400px]">
              Optimize your engine's performance and ensure long-lasting protection with our premium range of car engine oils.
            </p>
            <Link 
              href="/shop" 
              className="relative px-8 py-3.5 border border-white bg-transparent rounded-lg text-white font-semibold text-[16px] inline-flex items-center gap-3 group/btn transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              {/* Left-to-Right White Sweep Layer */}
              <div className="absolute inset-0 w-0 bg-white group-hover/btn:w-full transition-all duration-500 ease-out" />
              
              <span className="relative z-10 transition-colors duration-500 group-hover/btn:text-brand-blue">View All</span>
              <ArrowRight className="relative z-10 w-5 h-5 transition-all duration-500 group-hover/btn:text-brand-blue group-hover/btn:translate-x-1.5" />
            </Link>
          </div>

          {/* Right Cards Side in White Wrapper - Exact 14px padding */}
          <div className="w-full lg:w-[70%] bg-white rounded-xl p-[14px] shadow-2xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-[14px]">
              {carProducts.map((product, index) => (
                <div 
                  key={index} 
                  className="group relative aspect-[3/4] w-full rounded-lg overflow-hidden cursor-pointer bg-[#F8F9FA]"
                >
                  {/* Image covers entire div */}
                  <img 
                    src={product.image} 
                    alt="Car Engine Oil"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  
                  {/* Highlight Section at Bottom - Brand Orange default, Brand Red on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 bg-brand-orange py-3 text-center transition-all duration-500 group-hover:bg-brand-red z-20">
                    <span className="text-white text-[12px] lg:text-[13px] font-semibold uppercase tracking-widest">
                      {product.highlight}
                    </span>
                  </div>

                  {/* Invisible Link Overlay */}
                  <Link href="/shop" className="absolute inset-0 z-10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomotiveMaintenanceAndLubricants;
