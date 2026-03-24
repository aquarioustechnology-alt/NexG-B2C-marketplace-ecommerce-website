"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Youtube, ArrowRight } from "lucide-react";

const Footer = () => {
  const shopCategories = [
    "Engine Oils", "Industrial Oils", "Greases", "Automotive Parts", "Fuel Additives", "Brake Lubricants", "Coolants & Antifreeze", "Transmission Fluids"
  ];

  const usefulLinks = [
    "Affiliate Program", "Security Policy", "Authenticity & Quality", "Return & Refund", "Terms & Conditions", "Privacy Policy"
  ];

  const getToKnowUs = [
    "Our Story", "Bulk Request", "Blog", "Careers", "Sustainability"
  ];

  const getInTouch = [
    "Contact Us", "Seller Support", "Help Centre", "FAQ", "Report an Issue", "Technical Expert"
  ];

  // SEO Catalog Sections
  const seoCatalog = [
    {
      title: "Engine Oils",
      tags: ["Synthetic Engine Oil", "Semi-Synthetic Oil", "Mineral Engine Oil", "Diesel Engine Oil", "Petrol Engine Oil", "4-Stroke Motorcycle Oil", "2-Stroke Engine Oil", "Racing Performance Oil", "Turbo Diesel Oil", "High Mileage Engine Oil", "Passenger Car Motor Oil", "Heavy Duty Engine Oil", "Commercial Vehicle Oil"]
    },
    {
      title: "Industrial Lubricants",
      tags: ["Hydraulic Fluids", "Industrial Gear Oil", "Compressor Oil", "Spindle & Loom Oil", "Cutting Fluids", "Metal Working Fluids", "Rust Preventives", "Quenching Oil", "Transformer Oil", "Heat Transfer Fluid", "Circulating Oil", "Vacuum Pump Oil", "Textile Lubricants", "Food Grade Lubricants"]
    },
    {
      title: "Automotive Essentials",
      tags: ["Transmission Fluid", "ATF Fluids", "Manual Gear Oil", "CVT Fluid", "Brake Fluid DOT 3", "Brake Fluid DOT 4", "Antifreeze Coolant", "Radiator Coolant", "Fuel Additives", "AdBlue Solutions", "Clutch Fluid", "Power Steering Fluid"]
    },
    {
      title: "Greases & Maintenance",
      tags: ["Wheel Bearing Grease", "Chassis Grease", "Universal Joint Grease", "High Temp Lithium Grease", "Calcium Sulphonate Grease", "Moly Grease", "Complex Grease", "Graphite Grease", "Silicone Lubricant", "Chain Lube", "Degreaser Spray", "Car Shampoo", "Tyre Polish"]
    },
    {
      title: "Popular Brands",
      tags: ["Motul", "Shell Helix", "Castrol", "Mobil 1", "Valvoline", "Liqui Moly", "AMSOIL", "Ravenol", "Gulf Oil", "Servo", "Petronas", "Idemitsu", "TotalEnergies", "ELF Lubricants", "Veedol", "Savsol"]
    }
  ];

  return (
    <footer className="bg-[#0B1120] text-white mt-auto font-sans overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-16 pb-8">
        {/* 1. Main Multi-column Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-16">
          <div className="space-y-6 lg:col-span-1">
            <h3 className="text-[16px] font-semibold text-white tracking-tight">Shop Categories</h3>
            <ul className="space-y-3 text-[14px] text-white/60 font-medium">
              {shopCategories.map(item => (
                <li key={item}><Link href="#" className="hover:text-brand-orange transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 lg:col-span-1">
            <h3 className="text-[16px] font-semibold text-white tracking-tight">Useful Links</h3>
            <ul className="space-y-3 text-[14px] text-white/60 font-medium">
              {usefulLinks.map(item => (
                <li key={item}><Link href="#" className="hover:text-brand-orange transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 lg:col-span-1">
            <h3 className="text-[16px] font-semibold text-white tracking-tight">Get To Know Us</h3>
            <ul className="space-y-3 text-[14px] text-white/60 font-medium">
              {getToKnowUs.map(item => (
                <li key={item}><Link href="#" className="hover:text-brand-orange transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 lg:col-span-1">
            <h3 className="text-[16px] font-semibold text-white tracking-tight">Get In Touch</h3>
            <ul className="space-y-3 text-[14px] text-white/60 font-medium">
              {getInTouch.map(item => (
                <li key={item}><Link href="#" className="hover:text-brand-orange transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 lg:col-span-2 lg:pl-10">
            <h3 className="text-[16px] font-semibold text-white tracking-tight">Newsletter</h3>
            <p className="text-[13px] text-white/50 leading-relaxed">
              To stay up to date with our latest offers and products, subscribe to our newsletter.
            </p>
            <div className="space-y-3 pt-2">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full bg-white px-5 py-3.5 rounded-xl text-black text-[14px] outline-none focus:ring-2 focus:ring-brand-orange transition-all font-sans placeholder:text-gray-400"
              />
              <button 
                className="relative w-full px-6 py-3.5 bg-brand-orange text-white rounded-xl font-semibold text-[14px] overflow-hidden group transition-all duration-300 hover:bg-white hover:text-brand-orange cursor-pointer active:scale-[0.98] border-none"
              >
                <div className="absolute inset-0 w-0 bg-white group-hover:w-full transition-all duration-500 ease-out opacity-20" />
                <span className="relative z-10">Submit</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2. Branding & Socials Row */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6 border-t border-white/10 gap-8">
          <Link href="/">
            <Image 
              src="/images/logo/logo-white.png" 
              alt="Get Lubricants Logo" 
              width={210} 
              height={64} 
              className="object-contain"
            />
          </Link>
          
          <div className="flex items-center gap-6">
            <span className="text-[14px] font-semibold text-white/80 tracking-wide">Follow us on</span>
            <div className="flex gap-4">
              {[Facebook, Twitter, Youtube, Instagram].map((Icon, idx) => (
                <Link 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-[#0B1120] transition-all duration-300 group"
                >
                  <Icon className="w-4.5 h-4.5 group-hover:scale-110 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Deep SEO & Catalog Sections */}
        <div className="py-8 border-t border-white/10 space-y-5">
          {seoCatalog.map((section) => (
            <div key={section.title} className="space-y-2">
              <h4 className="text-[14px] font-semibold text-white tracking-wide">{section.title}</h4>
              <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-[12px] text-white/40 font-medium leading-relaxed">
                {section.tags.map((tag, idx) => (
                  <React.Fragment key={tag}>
                    <Link href="#" className="hover:text-white transition-colors">{tag}</Link>
                    {idx < section.tags.length - 1 && <span className="text-white/20 font-light">|</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}

          <div className="text-[11px] text-white/30 leading-relaxed font-medium tracking-wide border-t border-white/5 pt-8 normal-case">
            <p>
              Brands and symbols of various oil and lubricant companies are used for informational purposes only. Use of these symbols and brand names does not imply any authorization by or association with these companies. Get Lubricants provides high-quality certified products sourced directly or via authorized channels.
            </p>
          </div>
        </div>

        {/* 4. Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-white/50 font-medium">
          <p suppressHydrationWarning>© {new Date().getFullYear()} Get Lubricants. All rights reserved.</p>
          <div className="flex gap-8 items-center">
            <Link href="https://www.theaquarious.com/" target="_blank" className="hover:text-white transition-colors">Designed by Aquarious</Link>
            <div className="w-1 h-1 bg-white/20 rounded-full" />
            <span className="text-white/40 normal-case">Some images are AI generated</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
