"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ShoppingCart, Heart, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

const products = [
  {
    id: 301,
    name: "Motul 8100 X-cess Gen2 5W-40 Synthetic",
    price: 4850,
    originalPrice: 5500,
    discount: "-12%",
    rating: 4.8,
    image: "/images/Products/product image 1.jpg",
    sizes: ["1L", "4L", "5L"]
  },
  {
    id: 302,
    name: "Shell Helix Ultra 5W-40 Fully Synthetic",
    price: 3200,
    originalPrice: 3800,
    discount: "-15%",
    rating: 4.7,
    image: "/images/Products/product image 2.jpg",
    sizes: ["1L", "3.5L", "5L"]
  },
  {
    id: 303,
    name: "Castrol MAGNATEC 5W-30 Petrol/CNG Oil",
    price: 1850,
    originalPrice: 2200,
    discount: "-16%",
    rating: 4.9,
    image: "/images/Products/product image 3.jpg",
    sizes: ["1L", "3L", "3.5L"]
  },
  {
    id: 304,
    name: "Mobil 1 0W-40 Advanced Full Synthetic",
    price: 5200,
    originalPrice: 6000,
    discount: "-13%",
    rating: 4.8,
    image: "/images/Products/product image 4.jpg",
    sizes: ["1L", "4L", "5L"]
  },
  {
    id: 305,
    name: "Valvoline European Full Synthetic 5W-40",
    price: 3950,
    originalPrice: 4500,
    discount: "-12%",
    rating: 4.6,
    image: "/images/Products/product image 5.jpg",
    sizes: ["1L", "4L", "5L"]
  },
  {
    id: 306,
    name: "AMSOIL Signature Series 5W-30 Synthetic",
    price: 6500,
    originalPrice: 7200,
    discount: "-10%",
    rating: 5.0,
    image: "/images/Products/product image 6.jpg",
    sizes: ["1L", "3.8L", "4L"]
  },
  {
    id: 307,
    name: "Liqui Moly Molygen New Generation 5W-40",
    price: 4950,
    originalPrice: 5600,
    discount: "-11%",
    rating: 4.9,
    image: "/images/Products/Product image 7.jpg",
    sizes: ["1L", "4L", "5L"]
  },
  {
    id: 308,
    name: "Ravenol VMP 5W-30 Synthetic Motor Oil",
    price: 5800,
    originalPrice: 6500,
    discount: "-10%",
    rating: 4.8,
    image: "/images/Products/Product image 8.jpg",
    sizes: ["1L", "4L", "5L"]
  }
];

const RecentlyViewed = () => {
  const { addToCart } = useCart();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wishlisted, setWishlisted] = useState<Record<number, boolean>>({});
  const [selectedSizes, setSelectedSizes] = useState<Record<number, string>>({});

  const nextSlide = () => {
    if (currentIndex < products.length - 6) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const toggleWishlist = (id: number) => {
    setWishlisted(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const selectSize = (id: number, size: string) => {
    setSelectedSizes(prev => {
      if (prev[id] === size) {
        const newSizes = { ...prev };
        delete newSizes[id];
        return newSizes;
      }
      return { ...prev, [id]: size };
    });
  };

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="bg-[#F8FBFF] rounded-[32px] p-6 lg:p-8 border border-brand-blue/5 shadow-none overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <h2 className="text-[28px] lg:text-[32px] font-semibold text-[#222222] tracking-tighter capitalize">
                Related To Items You've Viewed
              </h2>
              <div className="hidden lg:block h-[2px] w-16 bg-brand-blue rounded-full mt-1.5" />
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`w-10 h-10 bg-white shadow-sm rounded-lg flex items-center justify-center transition-all border border-gray-100 group cursor-pointer ${
                  currentIndex === 0 ? "opacity-30 !cursor-not-allowed" : "text-gray-800 hover:bg-brand-blue hover:text-white"
                }`}
              >
                <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
              <button 
                onClick={nextSlide}
                disabled={currentIndex >= products.length - 6}
                className={`w-10 h-10 bg-white shadow-sm rounded-lg flex items-center justify-center transition-all border border-gray-100 group cursor-pointer ${
                  currentIndex >= products.length - 6 ? "opacity-30 !cursor-not-allowed" : "text-gray-800 hover:bg-brand-blue hover:text-white"
                }`}
              >
                <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Carousel Content */}
          <div className="relative group/carousel">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / 6)}%)` }}
              >
                {products.map((product) => (
                  <div 
                    key={product.id} 
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 flex-shrink-0 px-2"
                  >
                    <div className="group flex flex-col transition-all duration-500 bg-transparent overflow-hidden">
                      {/* Product Image Container */}
                      <div className="relative aspect-square bg-white border border-gray-200/60 rounded-2xl p-8 overflow-hidden flex items-center justify-center group-hover:border-brand-blue/40 transition-colors duration-300">
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
                        <div className="absolute bottom-[-60px] group-hover:bottom-0 left-0 right-0 z-20 p-2 transition-all duration-500">
                          <button 
                            onClick={(e) => { e.preventDefault(); addToCart(); }}
                            className="relative w-full bg-brand-blue text-white py-2.5 rounded-lg font-semibold text-[12px] flex items-center justify-center gap-2 shadow-lg overflow-hidden group/btn cursor-pointer font-sans"
                          >
                            <div className="absolute inset-0 w-0 bg-brand-orange group-hover/btn:w-full transition-all duration-500 ease-out" />
                            <ShoppingCart className="relative z-10 w-4 h-4" />
                            <span className="relative z-10">Add to Cart</span>
                          </button>
                        </div>
                      </div>

                      {/* Product Details - Transparent background */}
                      <div className="px-1 py-4">
                        <div className="flex items-center gap-1 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-brand-orange text-brand-orange" : "text-gray-300"}`} 
                            />
                          ))}
                          <span className="text-[10px] text-gray-500 font-semibold ml-1">{product.rating}</span>
                        </div>

                        <h3 className="text-[#222222] font-semibold leading-tight mb-1.5 line-clamp-2 min-h-[34px] hover:text-brand-blue cursor-pointer transition-colors text-[13.5px] tracking-tight">
                          {product.name}
                        </h3>

                        <div className="flex items-center gap-3 mb-2.5">
                          <span className="text-[17px] font-semibold text-brand-blue">
                            ₹{product.price.toLocaleString()}
                          </span>
                          <span className="text-[13px] font-semibold text-brand-red line-through">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                        </div>

                        {/* Size Choices */}
                        <div className="flex flex-wrap items-center gap-1.5 mt-3">
                          {product.sizes.map((size) => (
                            <button 
                              key={size}
                              onClick={() => selectSize(product.id, size)}
                              className={`px-3.5 py-1.5 border rounded-lg text-[10.5px] font-semibold uppercase transition-all cursor-pointer ${
                                selectedSizes[product.id] === size 
                                ? "bg-brand-blue text-white border-transparent shadow-md" 
                                : "bg-white/60 text-black border-brand-blue/40"
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
      </div>
    </section>
  );
};

export default RecentlyViewed;
