"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ShoppingCart, Heart, Eye, ChevronLeft, ChevronRight, Clock } from "lucide-react";

const products = [
  {
    id: 101,
    name: "NexG Ultra Guard 10W-40 Premium Synthetic Engine Oil",
    price: 799,
    originalPrice: 1249,
    discount: "36% OFF",
    rating: 4.9,
    image: "/images/Products/product image 1.jpg",
    sizes: ["1L", "5L"],
  },
  {
    id: 102,
    name: "NexG Turbo Power 15W-40 Heavy Duty Diesel Engine Oil",
    price: 1299,
    originalPrice: 1899,
    discount: "31% OFF",
    rating: 4.8,
    image: "/images/Products/product image 2.jpg",
    sizes: ["5L", "10L"],
  },
  {
    id: 103,
    name: "NexG Moto X 4T 20W-40 High Performance Bike Oil",
    price: 299,
    originalPrice: 499,
    discount: "40% OFF",
    rating: 4.9,
    image: "/images/Products/product image 3.jpg",
    sizes: ["1L"],
  },
  {
    id: 104,
    name: "NexG Hydra Flow ISO 68 Industrial Hydraulic Oil",
    price: 4999,
    originalPrice: 7200,
    discount: "30% OFF",
    rating: 4.7,
    image: "/images/Products/product image 4.jpg",
    sizes: ["26L"],
  },
  {
    id: 105,
    name: "NexG Gear Max EP-90 Heavy Duty Gear Lubricant",
    price: 999,
    originalPrice: 1650,
    discount: "39% OFF",
    rating: 4.6,
    image: "/images/Products/product image 5.jpg",
    sizes: ["1L", "5L"],
  },
  {
    id: 106,
    name: "NexG Cool Guard Long Life Radiator Coolant",
    price: 199,
    originalPrice: 350,
    discount: "43% OFF",
    rating: 4.8,
    image: "/images/Products/product image 6.jpg",
    sizes: ["1L"],
  },
  {
    id: 107,
    name: "NexG Multi-Purpose Lithium Grease (MP-3)",
    price: 349,
    originalPrice: 599,
    discount: "41% OFF",
    rating: 4.7,
    image: "/images/Products/Product image 7.jpg",
    sizes: ["500g", "1kg"],
  },
  {
    id: 108,
    name: "NexG Marine Guard Outboard 2T Oil Special Edition",
    price: 849,
    originalPrice: 1299,
    discount: "34% OFF",
    rating: 4.9,
    image: "/images/Products/Product image 8.jpg",
    sizes: ["1L"],
  }
];

const HotDeals = () => {
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
    <section className="bg-white pt-0 pb-[60px]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8 px-1">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-brand-blue" />
              <h2 className="text-[28px] lg:text-[32px] font-black text-[#222222] tracking-tighter">
                Hot Deals
              </h2>
            </div>
            <div className="hidden lg:block h-[2px] w-16 bg-brand-blue rounded-full mt-1.5" />
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
                      <div className="absolute top-3 left-3 z-10 bg-brand-red text-white text-[9px] font-black px-2 py-0.5 rounded-sm uppercase tracking-wider">
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

                      <div className="flex flex-col gap-1.5 mb-2.5">
                        <div className="flex items-center gap-3">
                          <span className="text-[18px] font-black text-brand-blue">
                            ₹{product.price.toLocaleString()}
                          </span>
                          <span className="text-[14px] font-bold text-gray-400 line-through">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                        </div>
                        <div className="bg-brand-red rounded-md py-1.5 px-3 flex items-center gap-2 w-fit">
                          <Clock className="w-3.5 h-3.5 text-white" />
                          <span className="text-white text-[10px] font-black uppercase tracking-wider">Limited Time Deal</span>
                        </div>
                      </div>

                      {/* Size Choices */}
                      <div className="flex flex-wrap items-center gap-2 mt-2">
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

export default HotDeals;
