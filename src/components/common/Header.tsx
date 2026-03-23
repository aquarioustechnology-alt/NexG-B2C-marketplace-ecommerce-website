"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, User, Menu, X, Phone, Mail, MapPin, ChevronDown, PackageCheck } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [pincode, setPincode] = useState("");
  const [appliedPincode, setAppliedPincode] = useState("");

  const handlePincodeApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.length === 6) {
      setAppliedPincode(pincode);
      setIsLocationOpen(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for search would go here
  };

  const categories = [
    { name: "Engine Oils", hasDropdown: true },
    { name: "Industrial Oils", hasDropdown: true },
    { name: "Greases", hasDropdown: true },
    { name: "Automotive", hasDropdown: true },
    { name: "Marine", hasDropdown: true },
    { name: "Agriculture", hasDropdown: false },
    { name: "Fuel Additives", hasDropdown: false },
    { name: "Brands", hasDropdown: true }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_4px_6px_-2px_rgba(0,0,0,0.05)] font-sans">
      {/* 1. Top Strip - Contact Info */}
      <div className="bg-brand-blue text-white py-2">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 tracking-wide">
          <div className="flex items-center text-center sm:text-left">
            <span className="text-[14px] font-semibold">Trusted Marketplace For Engine Oils, Lubricants & Petroleum Products</span>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-5">
            <div className="flex items-center gap-2.5 pr-5 border-r border-white/40">
              <div className="w-7 h-7 bg-[#0F4E8A] rounded-full flex items-center justify-center shadow-sm">
                <Phone className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-[13px] font-bold">+91 1800 123 4567</span>
            </div>
            <div className="flex items-center gap-2.5 pr-5 border-r border-white/40 whitespace-nowrap">
              <div className="w-7 h-7 bg-[#0F4E8A] rounded-full flex items-center justify-center shadow-sm">
                <Mail className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-[13px] font-bold">sales@nexg-marketplace.com</span>
            </div>
            <div className="flex items-center gap-5 uppercase text-[12px] font-bold">
              <Link href="/bulk-enquiry" className="hover:text-white/80 transition-colors pr-5 border-r border-white/40">Bulk Enquiry</Link>
              <Link href="/contact" className="hover:text-white/80 transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Middle Row - Logo, Search, Actions */}
      <div className="bg-white py-2.5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between gap-10">
            {/* Logo & Location */}
            <div className="flex items-center gap-8 min-w-fit">
              <Link href="/" className="flex-shrink-0">
                <Image 
                  src="/images/logo/logo-black.png" 
                  alt="NexG Logo" 
                  width={180} 
                  height={52} 
                  className="object-contain"
                />
              </Link>
              
              <div className="relative">
                <button 
                  onClick={() => setIsLocationOpen(!isLocationOpen)}
                  className="hidden xl:flex items-center gap-3 text-gray-600 hover:text-brand-blue group transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-brand-blue/10 transition-colors">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] uppercase font-bold text-gray-400">Deliver to</span>
                    <span className="text-[13px] font-bold whitespace-nowrap">
                      {appliedPincode ? `Pincode: ${appliedPincode}` : "Select Location"}
                    </span>
                  </div>
                </button>

                {/* Location Dropdown */}
                {isLocationOpen && (
                  <div className="absolute top-full left-0 mt-4 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 p-6 animate-in fade-in slide-in-from-top-2 duration-200">
                    <h4 className="text-[14px] font-bold text-[#222222] mb-4">Choose your Location</h4>
                    <p className="text-[12px] text-gray-500 mb-4 font-medium">Select a delivery location to see product availability and delivery options</p>
                    <form onSubmit={handlePincodeApply} className="space-y-4">
                      <div className="relative">
                        <input 
                          type="text" 
                          placeholder="Enter 6-digit Pincode"
                          maxLength={6}
                          value={pincode}
                          onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-blue transition-colors outline-none font-sans"
                        />
                        <button 
                          type="submit"
                          className="absolute right-2 top-1.5 bottom-1.5 px-3 bg-brand-blue text-white rounded-md text-[11px] font-bold hover:bg-brand-blue/90 transition-colors"
                        >
                          Apply
                        </button>
                      </div>
                      <div className="pt-2">
                        <button 
                          type="button"
                          className="text-brand-blue text-[12px] font-bold hover:underline"
                        >
                          Use Current Location
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>

            {/* Search Bar - Big Strip */}
            <form onSubmit={handleSearch} className="flex-1 max-w-4xl relative group">
              <div className="flex w-full items-stretch h-11 border border-gray-300 rounded-lg overflow-hidden focus-within:ring-4 focus-within:ring-brand-blue/10 focus-within:border-brand-blue transition-all">
                <input
                  type="text"
                  placeholder="Search Products by title, sku, category, brand etc.."
                  className="flex-1 px-5 text-[14px] outline-none placeholder:text-gray-400 font-sans"
                  suppressHydrationWarning
                />
                <button 
                  type="submit"
                  className="bg-brand-orange w-11 h-11 flex-shrink-0 flex items-center justify-center text-white hover:bg-brand-orange/90 transition-colors aspect-square"
                >
                  <Search className="w-5 h-5 stroke-[2.5px]" />
                </button>
              </div>
            </form>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 min-w-fit">
              <Link href="/login" className="flex items-center gap-2 group text-gray-700 hover:text-brand-blue transition-colors">
                <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-[12px] font-bold uppercase whitespace-nowrap">Login</span>
              </Link>
              
              <Link href="/cart" className="flex items-center gap-2 group text-gray-700 hover:text-brand-blue transition-colors relative border-l pl-4 border-gray-200">
                <div className="relative">
                  <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="absolute -top-1.5 -right-1.5 bg-brand-orange text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full ring-2 ring-white">0</span>
                </div>
                <span className="text-[12px] font-bold uppercase whitespace-nowrap">Cart</span>
              </Link>

              <Link href="/track-order" className="flex items-center gap-2 group text-gray-700 hover:text-brand-blue transition-colors border-l pl-4 border-gray-200">
                <PackageCheck className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-[12px] font-bold uppercase whitespace-nowrap">Track Order</span>
              </Link>

              <button className="lg:hidden p-2 text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Row - Categories Navigation */}
      <div className="bg-gray-50/50 hidden lg:block">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <nav className="flex items-center space-x-10 py-3">
            {categories.map((item) => (
              <div key={item.name} className="relative group">
                <button className="flex items-center gap-2 text-[12px] font-bold text-[#222222] hover:text-brand-blue uppercase tracking-tight transition-colors">
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-brand-blue transition-colors" />}
                </button>
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-0 w-56 bg-white shadow-xl rounded-b-xl border border-gray-100 hidden group-hover:block z-50 animate-in fade-in duration-200">
                    <div className="py-2">
                      <Link href="#" className="block px-6 py-2.5 text-sm text-gray-600 hover:bg-brand-blue/5 hover:text-brand-blue font-medium">All {item.name}</Link>
                      <Link href="#" className="block px-6 py-2.5 text-sm text-gray-600 hover:bg-brand-blue/5 hover:text-brand-blue font-medium">Popular Items</Link>
                      <Link href="#" className="block px-6 py-2.5 text-sm text-gray-600 hover:bg-brand-blue/5 hover:text-brand-blue font-medium">New Arrivals</Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="flex-1"></div>
            <Link href="/offers" className="text-[11px] font-bold text-brand-orange hover:text-brand-orange/80 uppercase tracking-tight flex items-center gap-2">
              🔥 Today's Offers
            </Link>
          </nav>
        </div>
      </div>
      {/* Mobile Menu (Shared View) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white fixed inset-0 z-50 animate-in slide-in-from-right duration-300">
          <div className="p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <Image src="/images/logo/logo-black.png" alt="NexG Logo" width={140} height={40} className="object-contain" />
              <button onClick={() => setIsMenuOpen(false)}><X className="w-8 h-8" /></button>
            </div>
            
            <div className="space-y-6 flex-1 overflow-y-auto">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <MapPin className="w-6 h-6 text-brand-blue" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-gray-400">Deliver to</span>
                  <span className="text-sm font-bold">{appliedPincode ? `Pincode: ${appliedPincode}` : "Select Location"}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                {categories.map((cat) => (
                  <Link key={cat.name} href="#" className="flex items-center justify-between p-4 text-base font-bold border-b border-gray-50 uppercase text-[#222222]">
                    {cat.name}
                    {cat.hasDropdown && <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 space-y-4">
              <Link href="/track-order" className="flex items-center gap-4 text-lg font-bold p-3 text-[#222222]">
                <PackageCheck className="w-6 h-6" /> Track Order
              </Link>
              <Link href="/login" className="flex items-center gap-4 text-lg font-bold p-3 text-[#222222]">
                <User className="w-6 h-6" /> Login / Signup
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
