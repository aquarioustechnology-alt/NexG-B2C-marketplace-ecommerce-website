import Link from "next/link";
import { ArrowRight, ShoppingBag, Zap, ShieldCheck, Truck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-6 uppercase tracking-wider">
              Special Launch Offer: 20% Off Plus Free Shipping
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-8 leading-[1.1]">
              Elevate Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Lifestyle</span> with NexG
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Discover a curated collection of premium products delivered straight to your door. Experience the ultimate shopping journey today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/shop"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 group"
              >
                Start Shopping
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/deals"
                className="w-full sm:w-auto px-8 py-4 bg-gray-50 hover:bg-gray-100 text-gray-900 font-bold rounded-xl border border-gray-200 transition-all flex items-center justify-center gap-2"
              >
                Explore Deals
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-400 blur-[120px] rounded-full"></div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: <Zap className="w-10 h-10 text-blue-600" />, title: "Hyper Fast Delivery", desc: "Get your orders delivered within 24 hours in selected areas." },
              { icon: <ShieldCheck className="w-10 h-10 text-blue-600" />, title: "Secure Checkout", desc: "Your transactions are protected by industry-leading 256-bit encryption." },
              { icon: <ShoppingBag className="w-10 h-10 text-blue-600" />, title: "Premium Quality", desc: "Each product undergoes rigorous quality checks before shipping." },
              { icon: <Truck className="w-10 h-10 text-blue-600" />, title: "Easy Returns", desc: "Not satisfied? Return any product within 30 days, no questions asked." },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                <div className="mb-6 p-4 bg-gray-50 group-hover:bg-blue-50 w-fit rounded-xl transition-colors">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder for trending */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center justify-between mb-12">
             <h2 className="text-3xl font-bold text-gray-900">Trending Now</h2>
             <Link href="/shop" className="text-blue-600 font-bold flex items-center gap-1 hover:underline">
               Explore all products <ArrowRight className="w-4 h-4" />
             </Link>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {[1, 2, 3, 4].map((i) => (
               <div key={i} className="group cursor-pointer">
                 <div className="aspect-[4/5] bg-gray-100 rounded-2xl mb-4 overflow-hidden relative">
                   <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                     Hot Item
                   </div>
                 </div>
                 <h4 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">Premium Gadget ${i * 99}.00</h4>
                 <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">Electronics</p>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
}
