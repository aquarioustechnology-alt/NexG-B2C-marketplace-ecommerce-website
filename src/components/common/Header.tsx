"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, User, Menu, X, Phone, Mail, MapPin, ChevronDown, PackageCheck, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";

const Header = () => {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [pincode, setPincode] = useState("");
  const [appliedPincode, setAppliedPincode] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    { 
      name: "Engine Oils", 
      hasDropdown: true,
      subColumns: [
        {
          title: "Petrol Engine Oils",
          links: ["Full Synthetic", "Semi-Synthetic", "Mineral Oils", "High Performance"]
        },
        {
          title: "Diesel Engine Oils",
          links: ["Commercial Vehicles", "Heavy Duty", "Standard Diesel", "Turbo Diesel"]
        },
        {
          title: "Motorcycle Oils",
          links: ["4-Stroke Engines", "2-Stroke Engines", "Racing Performance", "Street Bikes"]
        }
      ]
    },
    { 
      name: "Industrial Oils", 
      hasDropdown: true,
      subColumns: [
        {
          title: "Machinery Oils",
          links: ["Hydraulic Fluids", "Industrial Gears", "Compressor Oils", "Spindle & Looms"]
        },
        {
          title: "Metal Working",
          links: ["Cutting Fluids", "Coolants", "Rust Preventives", "Quenching Oils"]
        },
        {
          title: "Specialty Lubricants",
          links: ["Heat Transfer", "Transformer Oils", "Circulating Oils", "Vacuum Pump"]
        }
      ]
    },
    { 
      name: "Greases", 
      hasDropdown: true,
      subColumns: [
        {
          title: "Automotive Greases",
          links: ["Wheel Bearing", "Chassis Grease", "Universal Joint", "High Temp Lithium"]
        },
        {
          title: "Industrial Greases",
          links: ["Food Grade", "Calcium Sulphonate", "Molygrease", "Complex Greases"]
        }
      ]
    },
    { 
      name: "Automotive", 
      hasDropdown: true,
      subColumns: [
        {
          title: "Transmission & Gear",
          links: ["ATF Fluids", "Manual Transmission", "Hypoid Gear Oils", "CVT Fluids"]
        },
        {
          title: "Care & Maintenance",
          links: ["Brake Fluids (DOT 3/4)", "Antifreeze Coolants", "Fuel Additives", "AdBlue Solutions"]
        }
      ]
    },
    { name: "Fuel Additives", hasDropdown: false },
    { 
      name: "Brands", 
      hasDropdown: true,
      subColumns: [
        {
          title: "Top Brands",
          links: ["Motul", "Shell Helix", "Castrol", "Mobil 1", "Valvoline"]
        },
        {
          title: "Other Partners",
          links: ["Liqui Moly", "AMSOIL", "Ravenol", "Gulf", "Servo"]
        }
      ]
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_4px_6px_-2px_rgba(0,0,0,0.05)] font-sans">
      {/* 1. Top Strip - Contact Info (Hidden on Scroll) */}
      <div className="bg-brand-blue text-white overflow-hidden transition-all duration-300 ease-in-out py-1.5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 tracking-wide">
          <div className="flex items-center text-center sm:text-left">
            <span className="text-[12.5px] font-semibold">Trusted Marketplace For Engine Oils, Lubricants & Petroleum Products</span>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-5">
            <div className="flex items-center gap-2 pr-5 border-r border-white/40">
              <div className="w-6 h-6 bg-[#0F4E8A] rounded-full flex items-center justify-center shadow-sm">
                <Phone className="w-3 h-3 text-white" />
              </div>
              <span className="text-[12px] font-semibold">+91 1800 123 4567</span>
            </div>
            <div className="flex items-center gap-2 pr-5 border-r border-white/40 whitespace-nowrap">
              <div className="w-6 h-6 bg-[#0F4E8A] rounded-full flex items-center justify-center shadow-sm">
                <Mail className="w-3 h-3 text-white" />
              </div>
              <span className="text-[12px] font-semibold">sales@getlubricants.com</span>
            </div>
            <div className="flex items-center gap-5 uppercase text-[11px] font-semibold">
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
                  alt="Get Lubricants Logo" 
                  width={160} 
                  height={46} 
                  className="object-contain"
                />
              </Link>
              
              <div className="relative">
                <button 
                  onClick={() => setIsLocationOpen(!isLocationOpen)}
                  className="hidden xl:flex items-center gap-3 text-gray-600 hover:text-brand-blue group transition-colors cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-brand-blue/10 transition-colors">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[9px] uppercase font-semibold text-gray-400">Deliver to</span>
                    <span className="text-[12px] font-semibold whitespace-nowrap">
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
                          className="absolute right-2 top-1.5 bottom-1.5 px-3 bg-brand-blue text-white rounded-md text-[11px] font-bold hover:bg-brand-blue/90 transition-colors cursor-pointer"
                        >
                          Apply
                        </button>
                      </div>
                      <div className="pt-2">
                        <button 
                          type="button"
                          className="text-brand-blue text-[12px] font-semibold hover:underline cursor-pointer"
                        >
                          Use Current Location
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>

            {/* Moglix-style Innovative Search */}
            <div className="flex-1 max-w-4xl relative group">
              <form 
                onSubmit={handleSearch} 
                className={`relative flex w-full h-11 border rounded-xl overflow-visible transition-all duration-300 ${
                  isSearchFocused 
                  ? "border-brand-blue bg-white" 
                  : "border-gray-200 bg-gray-50/50 hover:border-gray-300 hover:bg-white"
                }`}
              >
                <div className="flex-1 flex items-center px-4">
                  <Search className={`w-4.5 h-4.5 transition-colors duration-300 ${isSearchFocused ? "text-brand-blue" : "text-gray-400"}`} />
                  <input
                    type="text"
                    placeholder="Search for oils, brands, parts..."
                    className="flex-1 px-3.5 text-[14px] bg-transparent outline-none placeholder:text-gray-400 font-medium font-sans"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                    suppressHydrationWarning
                  />
                  {searchQuery && (
                    <button 
                      type="button" 
                      onClick={() => setSearchQuery("")}
                      className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                  )}
                </div>
                
                <button 
                  type="submit"
                  className="bg-brand-blue px-6 flex items-center justify-center text-white hover:bg-[#00569d] transition-all duration-300 font-bold text-[13px] rounded-r-[10px] cursor-pointer"
                >
                  SEARCH
                </button>

                {/* Moglix-style Suggestions Dropdown - Flat & Structured */}
                {isSearchFocused && searchQuery.length > 0 && (
                  <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white rounded-xl border border-gray-200 overflow-hidden z-[100] animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="flex flex-col">
                      {/* Section 1: Top Suggestion Keywords */}
                      <div className="p-4 border-b border-gray-50">
                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Suggestions</h4>
                        <div className="space-y-1">
                          {["Engine Oil", "Synthetic Fluid", "Mechanical Grease", "Industrial Lubricant"].map((keyword) => (
                            <button 
                              key={keyword}
                              onClick={() => setSearchQuery(keyword)}
                              className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-all group/item cursor-pointer"
                            >
                              <div className="flex items-center gap-3">
                                <Search className="w-3.5 h-3.5 text-gray-300 group-hover/item:text-brand-blue" />
                                <span className="text-[13px] font-semibold text-gray-700 group-hover/item:text-brand-blue">
                                  {keyword.toLowerCase().includes(searchQuery.toLowerCase()) ? (
                                    <>
                                      <span className="font-extrabold">{keyword.substring(0, searchQuery.length)}</span>
                                      {keyword.substring(searchQuery.length)}
                                    </>
                                  ) : keyword}
                                </span>
                              </div>
                              <ArrowRight className="w-3.5 h-3.5 text-brand-blue opacity-0 group-hover/item:opacity-100 transition-opacity" />
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Section 2: Recommended Products (New Small Cards) */}
                      <div className="p-4 border-t border-gray-50 flex flex-col gap-3">
                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Recommended Products</h4>
                        <div className="flex flex-col gap-2">
                          {[
                            { name: "Motul 8100 X-cess 5W40 - 1L", price: "₹1,250", brand: "Motul", img: "/images/Products/product image 1.jpg" },
                            { name: "Shell Helix Ultra Fully Synthetic", price: "₹3,100", brand: "Shell", img: "/images/Products/product image 2.jpg" },
                            { name: "Castrol Magnetic 10W-40 - 3.5L", price: "₹2,450", brand: "Castrol", img: "/images/Products/product image 3.jpg" }
                          ].map((prod, idx) => (
                            <Link 
                              key={idx} 
                              href="#" 
                              className="group/prod flex items-center justify-between p-2 rounded-xl transition-all hover:bg-gray-50 cursor-pointer border border-transparent hover:border-gray-100"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white rounded-lg border border-gray-100 flex items-center justify-center p-1 group-hover/prod:border-brand-blue/20 transition-colors overflow-hidden">
                                  <Image 
                                    src={prod.img} 
                                    alt={prod.name} 
                                    width={40} 
                                    height={40} 
                                    className="object-contain"
                                  />
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-[12px] font-bold text-gray-700 leading-tight group-hover/prod:text-brand-blue">{prod.name}</span>
                                  <span className="text-[10px] text-gray-400 font-medium">{prod.brand}</span>
                                </div>
                              </div>
                              <div className="flex flex-col items-end">
                                <span className="text-[13px] font-extrabold text-[#222222]">{prod.price}</span>
                                <span className="text-[9px] font-bold text-brand-orange">BEST SELLER</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Section 3: Professional Checkout Hint */}
                      <div className="bg-gray-50/80 p-3 px-5 flex items-center justify-between border-t border-gray-100">
                        <p className="text-[11px] font-semibold text-gray-500">
                          Search results for "<span className="text-brand-blue font-bold">{searchQuery}</span>"
                        </p>
                        <ArrowRight className="w-3.5 h-3.5 text-brand-blue animate-bounce-x" />
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 min-w-fit">
               <Link href="/login" className="flex items-center gap-1.5 group text-gray-700 hover:text-brand-blue transition-colors">
                <User className="w-4.5 h-4.5 group-hover:scale-110 transition-transform" />
                <span className="text-[11px] font-semibold uppercase whitespace-nowrap">Login</span>
              </Link>
              
              <Link href="/cart" className="flex items-center gap-1.5 group text-gray-700 hover:text-brand-blue transition-colors relative border-l pl-3 border-gray-200">
                <div className="relative">
                  <ShoppingCart className="w-4.5 h-4.5 group-hover:scale-110 transition-transform" />
                  <span className="absolute -top-1.5 -right-1.5 bg-brand-orange text-white text-[9px] font-semibold w-3.5 h-3.5 flex items-center justify-center rounded-full ring-2 ring-white transition-all scale-110">{cartCount}</span>
                </div>
                <span className="text-[11px] font-semibold uppercase whitespace-nowrap">Cart</span>
              </Link>

              <Link href="/track-order" className="flex items-center gap-1.5 group text-gray-700 hover:text-brand-blue transition-colors border-l pl-3 border-gray-200">
                <PackageCheck className="w-4.5 h-4.5 group-hover:scale-110 transition-transform" />
                <span className="text-[11px] font-semibold uppercase whitespace-nowrap">Track Order</span>
              </Link>

              <button className="lg:hidden p-2 text-gray-700 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Row - Categories Navigation (with MEGA MENU) */}
      <div className="bg-white hidden lg:block border-y border-gray-100">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative">
          <nav className="flex items-center space-x-10">
            {categories.map((item) => (
              <div key={item.name} className="group/nav">
                <button className="flex items-center gap-2 text-[11.5px] font-semibold text-[#222222] hover:text-brand-blue uppercase tracking-tight transition-colors cursor-pointer py-4">
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-3 h-3 text-gray-400 group-hover/nav:text-brand-blue transition-colors" />}
                </button>
                
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 right-0 bg-white shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)] hidden group-hover/nav:block z-[9999] animate-in fade-in slide-in-from-top-1 duration-300">
                    <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-3.5 pb-10">
                      <div className="grid grid-cols-4 gap-12">
                        {item.subColumns && item.subColumns.map((col, idx) => (
                          <div key={idx} className="flex flex-col space-y-4">
                            <h3 className="text-brand-blue font-semibold text-[14px] uppercase tracking-wider border-b border-brand-blue/10 pb-2">
                              {col.title}
                            </h3>
                            <div className="flex flex-col space-y-2">
                              {col.links.map((link) => (
                                <Link 
                                  key={link} 
                                  href={`/shop?${item.name.toLowerCase()}=${link.toLowerCase()}`}
                                  className="text-gray-600 hover:text-brand-orange text-[13.5px] font-medium transition-colors flex items-center group/link"
                                >
                                  <div className="w-1.5 h-1.5 bg-gray-200 rounded-full mr-2 group-hover/link:bg-brand-orange transition-colors" />
                                  {link}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                        
                        {/* Static Promotional Column - Pushed to Absolute Right */}
                        <div className="col-start-4 bg-gradient-to-br from-brand-blue to-[#0F4E8A] rounded-2xl p-6 text-white flex flex-col justify-between shadow-lg">
                          <div>
                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-orange">Marketplace Offer</span>
                            <h4 className="text-[20px] font-semibold leading-tight mt-2 !text-white">Premium {item.name} <br /> Collection</h4>
                            <p className="text-white/80 text-[12px] mt-4 font-medium leading-relaxed">
                              Get certified quality products from global brands with secure delivery.
                            </p>
                          </div>
                          <Link href="/shop" className="mt-8 bg-white text-brand-blue px-6 py-2.5 rounded-lg font-bold text-[12px] text-center hover:bg-brand-orange hover:text-white transition-all uppercase tracking-wider">
                            Explore Now
                          </Link>
                        </div>
                      </div>
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
              <Image src="/images/logo/logo-black.png" alt="Get Lubricants Logo" width={140} height={40} className="object-contain" />
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
                  <Link key={cat.name} href="#" className="flex items-center justify-between p-4 text-base font-semibold border-b border-gray-50 uppercase text-[#222222]">
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
