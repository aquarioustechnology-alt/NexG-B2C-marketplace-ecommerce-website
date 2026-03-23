"use client";

import Link from "next/link";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              NexG
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/shop" className="text-gray-700 hover:text-blue-600 transition-colors">Shop</Link>
            <Link href="/deals" className="text-gray-700 hover:text-blue-600 transition-colors">Deals</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
          </nav>

          {/* Search, User, Cart */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center relative">
              <input
                type="text"
                placeholder="Search products..."
                suppressHydrationWarning
                className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-64 transition-all"
              />
              <Search className="absolute left-3 w-4 h-4 text-gray-400" />
            </div>

            <button 
              suppressHydrationWarning
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors relative"
            >
              <User className="w-5 h-5" />
            </button>

            <button 
              suppressHydrationWarning
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors relative"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-1 right-1 bg-blue-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              suppressHydrationWarning
              className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Home</Link>
            <Link href="/shop" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Shop</Link>
            <Link href="/deals" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Deals</Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">About</Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Contact</Link>
            <div className="mt-4 px-3">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
