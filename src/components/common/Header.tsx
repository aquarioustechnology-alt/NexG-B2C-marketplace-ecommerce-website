"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, User, Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm font-sans">
      {/* Top Strip */}
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

      {/* Main Navbar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 sm:h-24">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/images/logo/logo-black.png" 
                  alt="NexG Logo" 
                  width={160} 
                  height={50} 
                  className="object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-12 text-sm font-semibold tracking-wide uppercase">
              <Link href="/" className="text-[#222222] hover:text-brand-blue transition-colors">Home</Link>
              <Link href="/shop" className="text-[#222222] hover:text-brand-blue transition-colors">Shop</Link>
              <Link href="/deals" className="text-[#222222] hover:text-brand-blue transition-colors">Deals</Link>
              <Link href="/about" className="text-[#222222] hover:text-brand-blue transition-colors">About</Link>
              <Link href="/contact" className="text-[#222222] hover:text-brand-blue transition-colors">Contact</Link>
            </nav>

            {/* Search, User, Cart */}
            <div className="flex items-center space-x-6">
              <div className="hidden lg:flex items-center relative group">
                <input
                  type="text"
                  placeholder="Search products..."
                  suppressHydrationWarning
                  className="pl-12 pr-6 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue w-72 xl:w-96 transition-all font-sans"
                />
                <Search className="absolute left-4 w-4 h-4 text-gray-400 group-focus-within:text-brand-blue transition-colors" />
              </div>

              <div className="flex items-center space-x-2">
                <button 
                  suppressHydrationWarning
                  className="p-3 text-[#222222] hover:text-brand-blue hover:bg-brand-blue/5 rounded-full transition-all relative group"
                >
                  <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>

                <button 
                  suppressHydrationWarning
                  className="p-3 text-[#222222] hover:text-brand-blue hover:bg-brand-blue/5 rounded-full transition-all relative group"
                >
                  <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="absolute top-2 right-2 bg-brand-orange text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-lg">
                    0
                  </span>
                </button>

                {/* Mobile Menu Button */}
                <button
                  suppressHydrationWarning
                  className="lg:hidden p-3 text-[#222222] hover:bg-gray-100 rounded-xl transition-colors"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300 shadow-xl">
          <div className="px-6 pt-4 pb-8 space-y-2">
            <Link href="/" className="block px-4 py-3 text-[#222222] hover:bg-gray-50 rounded-xl font-semibold uppercase text-sm tracking-wide">Home</Link>
            <Link href="/shop" className="block px-4 py-3 text-[#222222] hover:bg-gray-50 rounded-xl font-semibold uppercase text-sm tracking-wide">Shop</Link>
            <Link href="/deals" className="block px-4 py-3 text-[#222222] hover:bg-gray-50 rounded-xl font-semibold uppercase text-sm tracking-wide">Deals</Link>
            <Link href="/about" className="block px-4 py-3 text-[#222222] hover:bg-gray-50 rounded-xl font-semibold uppercase text-sm tracking-wide">About</Link>
            <Link href="/contact" className="block px-4 py-3 text-[#222222] hover:bg-gray-50 rounded-xl font-semibold uppercase text-sm tracking-wide">Contact</Link>
            <div className="mt-6 px-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  suppressHydrationWarning
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
