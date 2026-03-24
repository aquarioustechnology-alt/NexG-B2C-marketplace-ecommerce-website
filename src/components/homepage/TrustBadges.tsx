import React from "react";
import { Truck, RotateCcw, ShieldCheck, Headset } from "lucide-react";

const badges = [
  {
    icon: <Truck className="w-9 h-9 text-brand-blue" strokeWidth={1} />,
    title: "Free Delivery",
    desc: "On all orders above Rs. 499",
  },
  {
    icon: <RotateCcw className="w-9 h-9 text-brand-blue" strokeWidth={1} />,
    title: "Easy Returns",
    desc: "10 days Return Policy",
  },
  {
    icon: <ShieldCheck className="w-9 h-9 text-brand-blue" strokeWidth={1} />,
    title: "Genuine Products",
    desc: "100% Guaranteed",
  },
  {
    icon: <Headset className="w-9 h-9 text-brand-blue" strokeWidth={1} />,
    title: "Help & Support",
    desc: "Dedicated 24x7 support",
  },
];

const TrustBadges = () => {
  return (
    <section className="bg-[#F4F8FB] py-10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center lg:divide-x lg:divide-gray-200">
          {badges.map((badge, index) => (
            <div 
              key={index} 
              className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 lg:gap-5 flex-1 lg:px-6 first:pl-0 last:pr-0"
            >
              {/* Ultra-Sleek Icon */}
              <div className="flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                {badge.icon}
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <h3 className="text-[#222222] text-[16px] font-semibold tracking-tight mb-0.5">
                  {badge.title}
                </h3>
                <p className="text-gray-500 text-[13px] font-semibold leading-tight">
                  {badge.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
