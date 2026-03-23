import Link from "next/link";
import { ArrowRight, ShoppingBag, Zap, ShieldCheck, Truck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col font-sans">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-brand-blue/10 text-brand-blue text-[11px] font-bold rounded-full mb-8 uppercase tracking-[0.1em]">
              Special Launch Offer: 20% Off Plus Free Shipping
            </span>
            <h1 className="text-6xl lg:text-8xl font-bold tracking-tight text-[#222222] mb-10 leading-[1.05]">
              Elevate Your <span className="text-brand-blue">Lifestyle</span> with NexG
            </h1>
            <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              Discover a curated collection of premium products delivered straight to your door. Experience the ultimate shopping journey today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link
                href="/shop"
                className="w-full sm:w-auto px-10 py-5 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold rounded-2xl transition-all shadow-xl shadow-brand-blue/20 flex items-center justify-center gap-2 group"
              >
                Start Shopping
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <Link
                href="/deals"
                className="w-full sm:w-auto px-10 py-5 bg-white hover:bg-gray-50 text-[#222222] font-bold rounded-2xl border-2 border-gray-100 transition-all flex items-center justify-center gap-2"
              >
                Explore Deals
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-10 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-blue blur-[150px] rounded-full"></div>
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-brand-orange blur-[150px] rounded-full"></div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Zap className="w-10 h-10 text-brand-blue" />, title: "Hyper Fast Delivery", desc: "Get your orders delivered within 24 hours in selected areas." },
              { icon: <ShieldCheck className="w-10 h-10 text-brand-blue" />, title: "Secure Checkout", desc: "Your transactions are protected by industry-leading encryption." },
              { icon: <ShoppingBag className="w-10 h-10 text-brand-blue" />, title: "Premium Quality", desc: "Each product undergoes rigorous quality checks before shipping." },
              { icon: <Truck className="w-10 h-10 text-brand-blue" />, title: "Easy Returns", desc: "Not satisfied? Return any product within 30 days, no questions asked." },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="mb-8 p-5 bg-gray-50 group-hover:bg-brand-blue/5 w-fit rounded-2xl transition-colors">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#222222] mb-4">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder for trending */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
           <div className="flex items-center justify-between mb-16">
             <h2 className="text-4xl font-bold text-[#222222]">Trending Now</h2>
             <Link href="/shop" className="text-brand-blue font-bold flex items-center gap-1.5 hover:translate-x-1 transition-transform">
               Explore all products <ArrowRight className="w-5 h-5" />
             </Link>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
             {[1, 2, 3, 4].map((i) => (
               <div key={i} className="group cursor-pointer">
                 <div className="aspect-[4/5] bg-gray-100 rounded-3xl mb-6 overflow-hidden relative shadow-sm group-hover:shadow-md transition-all">
                   <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                   <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#222222] shadow-sm uppercase tracking-wide">
                     Hot Item
                   </div>
                 </div>
                 <h4 className="text-lg font-bold text-[#222222] mb-1.5 group-hover:text-brand-blue transition-colors">Premium Gadget ${i * 99}.00</h4>
                 <p className="text-xs text-brand-orange uppercase tracking-[0.1em] font-bold">Electronics</p>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
}
