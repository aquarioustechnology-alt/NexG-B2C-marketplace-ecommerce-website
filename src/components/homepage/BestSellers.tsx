"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ShoppingCart, Heart, Eye, ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "NexG Ultra Guard 10W-40 Premium Synthetic Engine Oil",
    category: "Car Oils",
    price: 899,
    originalPrice: 1249,
    discount: "28% OFF",
    rating: 4.8,
    image: "/images/Products/product image 1.jpg",
    sizes: ["1L", "5L", "26L"],
  },
  {
    id: 2,
    name: "NexG Turbo Power 15W-40 Heavy Duty Diesel Engine Oil",
    category: "Car Oils",
    price: 1450,
    originalPrice: 1899,
    discount: "24% OFF",
    rating: 4.7,
    image: "/images/Products/product image 2.jpg",
    sizes: ["5L", "10L", "210L"],
  },
  {
    id: 3,
    name: "NexG Moto X 4T 20W-40 High Performance Bike Oil",
    category: "Bike Oils",
    price: 349,
    originalPrice: 499,
    discount: "30% OFF",
    rating: 4.9,
    image: "/images/Products/product image 3.jpg",
    sizes: ["1L", "2.5L"],
  },
  {
    id: 4,
    name: "NexG Hydra Flow ISO 68 Industrial Hydraulic Oil",
    category: "Hydraulic",
    price: 5600,
    originalPrice: 7200,
    discount: "22% OFF",
    rating: 4.6,
    image: "/images/Products/product image 4.jpg",
    sizes: ["26L", "210L"],
  },
  {
    id: 5,
    name: "NexG Gear Max EP-90 Heavy Duty Gear Lubricant",
    category: "Industrial",
    price: 1250,
    originalPrice: 1650,
    discount: "24% OFF",
    rating: 4.5,
    image: "/images/Products/product image 5.jpg",
    sizes: ["1L", "5L", "20L"],
  },
  {
    id: 6,
    name: "NexG Cool Guard Long Life Radiator Coolant (Ready to Use)",
    category: "Coolants",
    price: 249,
    originalPrice: 350,
    discount: "29% OFF",
    rating: 4.8,
    image: "/images/Products/product image 6.jpg",
    sizes: ["1L", "5L"],
  },
  {
    id: 7,
    name: "NexG Multi-Purpose Lithium Grease (MP-3)",
    category: "Greases",
    price: 450,
    originalPrice: 599,
    discount: "25% OFF",
    rating: 4.7,
    image: "/images/Products/Product image 7.jpg",
    sizes: ["500g", "1kg", "18kg"],
  },
  {
    id: 8,
    name: "NexG Marine Guard Outboard 2T Oil Special Edition",
    category: "Industrial",
    price: 950,
    originalPrice: 1299,
    discount: "27% OFF",
    rating: 4.9,
    image: "/images/Products/Product image 8.jpg",
    sizes: ["1L", "5L"],
  }
];

const tabs = ["Car Oils", "Bike Oils", "Industrial", "Hydraulic", "Greases", "Coolants"];

const BestSellers = () => {
  const [activeTab, setActiveTab] = useState("Car Oils");
  const [selectedSizes, setSelectedSizes] = useState<Record<number, string>>({});
  const [wishlisted, setWishlisted] = useState<Record<number, boolean>>({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (products.length - 5));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (products.length - 5)) % (products.length - 5));
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
    <section className="bg-white py-20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12 px-1">
          <div className="flex items-center gap-4">
            <h2 className="text-[28px] lg:text-[32px] font-black text-[#222222] tracking-tighter">
              Best Sellers
            </h2>
            <div className="hidden lg:block h-[2px] w-16 bg-brand-blue rounded-full mt-1.5" />
          </div>

          {/* Navigation Tabs - Reduced Size */}
          <div className="flex flex-wrap items-center gap-1.5 lg:gap-2 bg-[#F8F9FA] p-1 rounded-lg border border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-brand-blue text-white shadow-sm"
                    : "text-gray-500 hover:text-brand-blue hover:bg-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid - Single Row of 6 */}
        <div className="relative group/carousel">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-[-25px] top-[100px] z-30 w-11 h-11 bg-white shadow-xl rounded-[8px] flex items-center justify-center text-gray-800 hover:bg-brand-blue hover:text-white transition-all border border-gray-100/60 group px-0"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-[-25px] top-[100px] z-30 w-11 h-11 bg-white shadow-xl rounded-[8px] flex items-center justify-center text-gray-800 hover:bg-brand-blue hover:text-white transition-all border border-gray-100/60 group px-0"
          >
             <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 overflow-hidden">
            {products.slice(currentIndex, currentIndex + 6).map((product) => (
              <div 
                key={product.id} 
                className="group flex flex-col transition-all duration-500 bg-white overflow-hidden"
              >
                {/* Product Image Container - ONLY THIS HAS THE BORDER */}
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

                  {/* Actions (Wishlist/Quick view) */}
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

                  {/* Add to Cart (Slide from bottom) - Blue to Orange sweep */}
                  <div className="absolute bottom-[-60px] group-hover:bottom-0 left-0 right-0 z-20 p-3 transition-all duration-500">
                    <button className="relative w-full bg-brand-blue text-white py-3 rounded-xl font-bold text-[13px] flex items-center justify-center gap-2 shadow-lg overflow-hidden group/btn cursor-pointer">
                      {/* Left-to-Right Orange Sweep Layer */}
                      <div className="absolute inset-0 w-0 bg-brand-orange group-hover/btn:w-full transition-all duration-500 ease-out" />
                      
                      <ShoppingCart className="relative z-10 w-4.5 h-4.5" />
                      <span className="relative z-10">Add to Cart</span>
                    </button>
                  </div>
                </div>

                {/* Product Details */}
                <div className="px-1 py-5">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-brand-orange text-brand-orange" : "text-gray-300"}`} 
                      />
                    ))}
                    <span className="text-[10px] text-gray-500 font-bold ml-1">{product.rating}</span>
                  </div>

                  <h3 className="text-[#222222] font-black leading-snug mb-3 line-clamp-2 min-h-[38px] hover:text-brand-blue cursor-pointer transition-colors text-[14px] tracking-tight">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[18px] font-black text-brand-blue">
                      ₹{product.price.toLocaleString()}
                    </span>
                    <span className="text-[14px] font-bold text-brand-red line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  </div>

                  {/* Size Choices - Larger and Selectable with Deselect */}
                  <div className="flex flex-wrap items-center gap-2">
                    {product.sizes.map((size) => (
                      <button 
                        key={size}
                        onClick={() => selectSize(product.id, size)}
                        className={`px-4 py-2 border rounded-lg text-[10px] font-black uppercase transition-all cursor-pointer ${
                          selectedSizes[product.id] === size 
                          ? "bg-brand-blue text-white border-brand-blue shadow-md" 
                          : "bg-white text-gray-600 border-gray-200 hover:border-brand-blue hover:text-brand-blue"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
