"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ShoppingCart, Heart, Eye, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: 301,
    name: "NexG Economy Brake Fluid Dot 3 - 250ml",
    category: "Brake Fluid",
    price: 180,
    originalPrice: 250,
    discount: "28% OFF",
    rating: 4.5,
    image: "/images/Products/product image 1.jpg",
    sizes: ["250ml", "500ml"],
  },
  {
    id: 302,
    name: "NexG Chain Lube Spray - Professional Grade",
    category: "Lube",
    price: 350,
    originalPrice: 499,
    discount: "30% OFF",
    rating: 4.8,
    image: "/images/Products/product image 2.jpg",
    sizes: ["150ml", "500ml"],
  },
  {
    id: 303,
    name: "NexG Car Wash Shampoo - High Suds (1L)",
    category: "Cleaning",
    price: 299,
    originalPrice: 450,
    discount: "34% OFF",
    rating: 4.7,
    image: "/images/Products/product image 3.jpg",
    sizes: ["1L", "5L"],
  },
  {
    id: 304,
    name: "NexG Glass Cleaner Spray - Streak Free",
    category: "Cleaning",
    price: 150,
    originalPrice: 220,
    discount: "32% OFF",
    rating: 4.6,
    image: "/images/Products/product image 4.jpg",
    sizes: ["500ml"],
  },
  {
    id: 305,
    name: "NexG Dashboard Polish - Long Lasting Shine",
    category: "Cleaning",
    price: 420,
    originalPrice: 599,
    discount: "30% OFF",
    rating: 4.9,
    image: "/images/Products/product image 5.jpg",
    sizes: ["200ml", "500ml"],
  },
  {
    id: 306,
    name: "NexG Microfiber Towel - Ultra Soft (Pack of 2)",
    category: "Accessory",
    price: 240,
    originalPrice: 350,
    discount: "31% OFF",
    rating: 4.8,
    image: "/images/Products/product image 6.jpg",
    sizes: ["Medium", "Large"],
  }
];

const ProductsUnder500 = () => {
  const [selectedSizes, setSelectedSizes] = useState<Record<number, string>>({});
  const [wishlisted, setWishlisted] = useState<Record<number, boolean>>({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    // 4 products visible in carousel area
    if (currentIndex < products.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const toggleWishlist = (id: number) => {
    setWishlisted((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const selectSize = (productId: number, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  return (
    <section className="bg-white py-[60px]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-8 px-1">
          <div className="flex items-center gap-4">
            <h2 className="text-[28px] lg:text-[32px] font-black text-[#222222] tracking-tighter">
              Products Under ₹500
            </h2>
            <div className="hidden lg:block h-[2px] w-16 bg-brand-blue rounded-full mt-1.5" />
          </div>

          <div className="flex items-center gap-6">
            {/* Nav Arrows - Repositioned to Top Right */}
            <div className="flex items-center gap-2 mr-4">
              <button 
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className={`w-10 h-10 bg-white shadow-md rounded-[8px] flex items-center justify-center transition-all border border-gray-100/60 group px-0 cursor-pointer ${
                  currentIndex === 0 ? "opacity-30 !cursor-not-allowed" : "text-gray-800 hover:bg-brand-blue hover:text-white"
                  }`}
              >
                  <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
              <button 
                  onClick={nextSlide}
                  disabled={currentIndex >= products.length - 4}
                  className={`w-10 h-10 bg-white shadow-md rounded-[8px] flex items-center justify-center transition-all border border-gray-100/60 group px-0 cursor-pointer ${
                  currentIndex >= products.length - 4 ? "opacity-30 !cursor-not-allowed" : "text-gray-800 hover:bg-brand-blue hover:text-white"
                  }`}
              >
                  <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>

            <Link 
              href="/shop" 
              className="relative px-8 py-2.5 bg-brand-blue rounded-lg text-white font-bold text-[14px] inline-flex items-center gap-3 group/btn transition-all duration-300 transform hover:-translate-y-1 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 w-0 bg-brand-orange group-hover/btn:w-full transition-all duration-500 ease-out" />
              <span className="relative z-10">View All</span>
              <ArrowRight className="relative z-10 w-4 h-4 transition-all duration-500 group-hover/btn:translate-x-1.5" />
            </Link>
          </div>
        </div>

        {/* Main Section Content Wrapper - Fixed Banner + Sliding Products */}
        <div className="flex flex-col lg:flex-row gap-6 relative group/carousel">
          
          {/* 1st Total Card - Sticky Banner Design */}
          <div className="w-full lg:w-1/5 flex-shrink-0">
            <div className="group relative h-full min-h-[415px] overflow-hidden rounded-[24px] shadow-xl cursor-pointer">
              <img 
                src="/images/Homepage/Products Under ₹500 BG.png" 
                alt="Products Under 500 Promo"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Diagonal Dark Gradient from bottom-left */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />
              
              <div className="absolute bottom-8 left-6">
                 <div className="relative px-8 py-3 bg-brand-blue rounded-lg text-white font-bold text-[14px] inline-flex items-center gap-2 group/btnInner transition-all duration-300 transform hover:-translate-y-1 overflow-hidden pointer-events-auto">
                    <div className="absolute inset-0 w-0 bg-brand-orange group-hover/btnInner:w-full transition-all duration-500 ease-out" />
                    <span className="relative z-10">Shop Now</span>
                    <ArrowRight className="relative z-10 w-4 h-4 transition-all duration-300 group-hover/btnInner:translate-x-1" />
                 </div>
              </div>
            </div>
          </div>

          {/* Sliding Products Area - 4 slots visible (Total 5 slots in row) */}
          <div className="relative flex-1 overflow-hidden">

            <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 25}%)` }}
            >
                {products.map((product) => (
                    <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-3">
                        <div className="group flex flex-col transition-all duration-500 bg-white overflow-hidden">
                            {/* Product Image Container */}
                            <div className="relative aspect-square bg-white border border-gray-200/60 rounded-2xl p-8 overflow-hidden flex items-center justify-center group-hover:border-brand-blue/40 transition-colors duration-300">
                                <div className="absolute top-3 left-3 z-10 bg-brand-red text-white text-[9px] font-black px-2 py-0.5 rounded-sm uppercase tracking-wider">
                                    {product.discount}
                                </div>
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={120}
                                    height={120}
                                    className="object-contain group-hover:scale-110 transition-transform duration-700 pointer-events-none"
                                />
                                {/* Actions */}
                                <div className="absolute top-3 right-[-50px] group-hover:right-3 z-20 flex flex-col gap-1.5 transition-all duration-500">
                                    <button 
                                        onClick={() => toggleWishlist(product.id)}
                                        className={`w-9 h-9 rounded-full shadow-md flex items-center justify-center transition-all cursor-pointer ${
                                            wishlisted[product.id] ? "bg-brand-blue text-white" : "bg-white text-gray-600 hover:bg-brand-blue hover:text-white"
                                        }`}
                                    >
                                        <Heart className={`w-4.5 h-4.5 ${wishlisted[product.id] ? "fill-white" : ""}`} />
                                    </button>
                                    <button className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:bg-brand-blue hover:text-white transition-all cursor-pointer">
                                        <Eye className="w-4.5 h-4.5" />
                                    </button>
                                </div>
                                {/* Add to Cart */}
                                <div className="absolute bottom-[-60px] group-hover:bottom-0 left-0 right-0 z-20 p-3 transition-all duration-500">
                                    <button className="relative w-full bg-brand-blue text-white py-3 rounded-xl font-bold text-[13px] flex items-center justify-center gap-2 shadow-lg overflow-hidden group/btn cursor-pointer font-sans">
                                        <div className="absolute inset-0 w-0 bg-brand-orange group-hover/btn:w-full transition-all duration-500 ease-out" />
                                        <ShoppingCart className="relative z-10 w-4.5 h-4.5" />
                                        <span className="relative z-10">Add to Cart</span>
                                    </button>
                                </div>
                            </div>
                            {/* Product Details */}
                            <div className="px-1 py-5">
                                <div className="flex items-center gap-1 mb-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star 
                                            key={i} 
                                            className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-brand-orange text-brand-orange" : "text-gray-300"}`} 
                                        />
                                    ))}
                                    <span className="text-[10px] text-gray-500 font-bold ml-1">{product.rating}</span>
                                </div>
                                <h3 className="text-[#222222] font-black leading-snug mb-1.5 line-clamp-2 min-h-[38px] hover:text-brand-blue cursor-pointer transition-colors text-[14px] tracking-tight">
                                    {product.name}
                                </h3>
                                <div className="flex items-center gap-3 mb-2.5">
                                    <span className="text-[18px] font-black text-brand-blue">
                                        ₹{product.price.toLocaleString()}
                                    </span>
                                    <span className="text-[14px] font-bold text-brand-red line-through">
                                        ₹{product.originalPrice.toLocaleString()}
                                    </span>
                                </div>
                                {/* Size Choices */}
                                <div className="flex flex-wrap items-center gap-2 mt-4">
                                    {product.sizes.map((size) => (
                                        <button 
                                            key={size}
                                            onClick={() => selectSize(product.id, size)}
                                            className={`px-4 py-2 border rounded-lg text-[11px] font-black uppercase transition-all cursor-pointer ${
                                                selectedSizes[product.id] === size 
                                                ? "bg-brand-blue text-white border-transparent shadow-md" 
                                                : "bg-white text-black border-brand-blue/50"
                                            }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductsUnder500;
