"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ShoppingCart, Heart, Eye, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: 201,
    name: "NexG Elite 5W-30 Full Synthetic Car Engine Oil",
    category: "Synthetic",
    price: 1250,
    originalPrice: 1599,
    discount: "22% OFF",
    rating: 4.8,
    image: "/images/Products/product image 1.jpg",
    sizes: ["1L", "5L"],
  },
  {
    id: 202,
    name: "NexG Power Smooth 5W-40 Advanced Performance Oil",
    category: "Synthetic",
    price: 1350,
    originalPrice: 1750,
    discount: "23% OFF",
    rating: 4.9,
    image: "/images/Products/product image 2.jpg",
    sizes: ["1L", "5L", "10L"],
  },
  {
    id: 203,
    name: "NexG Standard Guard 10W-30 Semi-Synthetic Oil",
    category: "Semi-Synthetic",
    price: 850,
    originalPrice: 1100,
    discount: "23% OFF",
    rating: 4.7,
    image: "/images/Products/product image 3.jpg",
    sizes: ["1L", "5L"],
  },
  {
    id: 204,
    name: "NexG Classic 20W-50 High Mileage Engine Oil",
    category: "Mineral",
    price: 650,
    originalPrice: 850,
    discount: "24% OFF",
    rating: 4.6,
    image: "/images/Products/product image 4.jpg",
    sizes: ["1L", "5L"],
  },
  {
    id: 205,
    name: "NexG Ultra Synthetic 0W-20 Fuel Economy Oil",
    category: "Synthetic",
    price: 1450,
    originalPrice: 1999,
    discount: "27% OFF",
    rating: 4.9,
    image: "/images/Products/product image 5.jpg",
    sizes: ["1L", "5L"],
  },
  {
    id: 206,
    name: "NexG Diesel Max 15W-40 Advanced Diesel Engine Oil",
    category: "Diesel",
    price: 1550,
    originalPrice: 2100,
    discount: "26% OFF",
    rating: 4.8,
    image: "/images/Products/product image 6.jpg",
    sizes: ["5L", "10L"],
  },
  {
    id: 207,
    name: "NexG Performance Plus 10W-40 Car Oil",
    category: "Synthetic",
    price: 1150,
    originalPrice: 1450,
    discount: "20% OFF",
    rating: 4.7,
    image: "/images/Products/Product image 7.jpg",
    sizes: ["1L", "5L"],
  },
  {
    id: 208,
    name: "NexG Racing Edition 10W-60 Synthetic Oil",
    category: "Racing",
    price: 2200,
    originalPrice: 2800,
    discount: "21% OFF",
    rating: 5.0,
    image: "/images/Products/Product image 8.jpg",
    sizes: ["1L", "4L"],
  }
];

const TrendingProducts = () => {
  const [selectedSizes, setSelectedSizes] = useState<Record<number, string>>({});
  const [wishlisted, setWishlisted] = useState<Record<number, boolean>>({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < products.length - 6) {
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
    setSelectedSizes((prev) => {
      if (prev[productId] === size) {
        const newState = { ...prev };
        delete newState[productId];
        return newState;
      }
      return { ...prev, [productId]: size };
    });
  };

  return (
    <section className="bg-white pt-[60px] pb-0">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Header Section - Exactly same like Engine Oils For Car */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-8 px-1">
          <div className="flex items-center gap-4">
            <h2 className="text-[30px] lg:text-[34px] font-black text-[#222222] tracking-tighter">
              Trending Automotive Products
            </h2>
            <div className="hidden lg:block h-[2px] w-16 bg-brand-blue rounded-full mt-1.5" />
          </div>

          <div className="flex items-center gap-6">
            {/* View All Button - Hero Style (No Shadow) */}
            <Link 
              href="/shop" 
              className="relative px-8 py-2.5 bg-brand-blue rounded-lg text-white font-semibold text-[14px] inline-flex items-center gap-3 group/btn transition-all duration-300 transform hover:-translate-y-1 overflow-hidden cursor-pointer"
            >
              {/* Left-to-Right Orange Sweep Layer */}
              <div className="absolute inset-0 w-0 bg-brand-orange group-hover/btn:w-full transition-all duration-500 ease-out" />
              
              <span className="relative z-10 transition-colors duration-500">View All</span>
              <ArrowRight className="relative z-10 w-4 h-4 transition-all duration-500 group-hover/btn:translate-x-1.5" />
            </Link>
          </div>
        </div>

        {/* Products Slider Wrapping */}
        <div className="relative group/carousel px-1">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-[-25px] top-[100px] z-30 w-11 h-11 bg-white shadow-xl rounded-[8px] flex items-center justify-center transition-all border border-gray-100/60 group px-0 cursor-pointer ${
              currentIndex === 0 ? "opacity-30 !cursor-not-allowed" : "text-gray-800 hover:bg-brand-blue hover:text-white"
            }`}
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentIndex >= products.length - 6}
            className={`absolute right-[-25px] top-[100px] z-30 w-11 h-11 bg-white shadow-xl rounded-[8px] flex items-center justify-center transition-all border border-gray-100/60 group px-0 cursor-pointer ${
              currentIndex >= products.length - 6 ? "opacity-30 !cursor-not-allowed" : "text-gray-800 hover:bg-brand-blue hover:text-white"
            }`}
          >
             <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 6)}%)` }}
            >
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 flex-shrink-0 px-3"
                >
                  <div className="group flex flex-col transition-all duration-500 bg-white overflow-hidden">
                    {/* Product Image Container */}
                    <div className="relative aspect-square bg-white border border-gray-200/60 rounded-2xl p-10 overflow-hidden flex items-center justify-center group-hover:border-brand-blue/40 transition-colors duration-300">
                      <div className="absolute top-3 left-3 z-10 bg-brand-red text-white text-[9px] font-semibold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                        {product.discount}
                      </div>
                      
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={130}
                        height={130}
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
                        <button className="relative w-full bg-brand-blue text-white py-3 rounded-xl font-semibold text-[13px] flex items-center justify-center gap-2 shadow-lg overflow-hidden group/btn cursor-pointer font-sans">
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
                        <span className="text-[10px] text-gray-500 font-semibold ml-1">{product.rating}</span>
                      </div>

                      <h3 className="text-[#222222] font-semibold leading-snug mb-1.5 line-clamp-2 min-h-[38px] hover:text-brand-blue cursor-pointer transition-colors text-[14px] tracking-tight">
                        {product.name}
                      </h3>

                      <div className="flex items-center gap-3 mb-2.5">
                        <span className="text-[18px] font-semibold text-brand-blue">
                          ₹{product.price.toLocaleString()}
                        </span>
                        <span className="text-[14px] font-semibold text-brand-red line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      </div>

                      {/* Size Choices */}
                      <div className="flex flex-wrap items-center gap-2 mt-4">
                        {product.sizes.map((size) => (
                          <button 
                            key={size}
                            onClick={() => selectSize(product.id, size)}
                            className={`px-4 py-2 border rounded-lg text-[11px] font-semibold uppercase transition-all cursor-pointer ${
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

export default TrendingProducts;
