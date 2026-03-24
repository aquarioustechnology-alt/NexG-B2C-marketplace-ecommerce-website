import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto border-t border-gray-800 font-sans">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo/logo-white.png" 
                alt="NexG Logo" 
                width={140} 
                height={45} 
                className="object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-medium">
              Next-generation marketplace for premium B2C products. High quality, great deals, and exceptional service.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="p-2.5 bg-gray-800 hover:bg-brand-blue rounded-full transition-all group shadow-sm">
                <Facebook className="w-4 h-4 text-gray-300 group-hover:text-white" />
              </Link>
              <Link href="#" className="p-2.5 bg-gray-800 hover:bg-brand-blue/80 rounded-full transition-all group shadow-sm">
                <Twitter className="w-4 h-4 text-gray-300 group-hover:text-white" />
              </Link>
              <Link href="#" className="p-2.5 bg-gray-800 hover:bg-brand-orange rounded-full transition-all group shadow-sm">
                <Instagram className="w-4 h-4 text-gray-300 group-hover:text-white" />
              </Link>
              <Link href="#" className="p-2.5 bg-gray-800 hover:bg-brand-red rounded-full transition-all group shadow-sm">
                <Youtube className="w-4 h-4 text-gray-300 group-hover:text-white" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#FFFFFF] border-b border-gray-800 pb-3 font-sans">Quick Shop</h3>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              <li><Link href="/shop" className="hover:text-brand-blue transition-colors">Electronics</Link></li>
              <li><Link href="/shop" className="hover:text-brand-blue transition-colors">Fashion</Link></li>
              <li><Link href="/shop" className="hover:text-brand-blue transition-colors">Home & Living</Link></li>
              <li><Link href="/shop" className="hover:text-brand-blue transition-colors">Health & Beauty</Link></li>
              <li><Link href="/shop" className="hover:text-brand-blue transition-colors">Sports & Outdoors</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#FFFFFF] border-b border-gray-800 pb-3 font-sans">Support</h3>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              <li><Link href="/track" className="hover:text-brand-blue transition-colors">Track Order</Link></li>
              <li><Link href="/returns" className="hover:text-brand-blue transition-colors">Return Policy</Link></li>
              <li><Link href="/shipping" className="hover:text-brand-blue transition-colors">Shipping Info</Link></li>
              <li><Link href="/faq" className="hover:text-brand-blue transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-brand-blue transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[#FFFFFF] border-b border-gray-800 pb-3 font-sans">Visit Us</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-sm text-gray-400 font-medium">
                  <MapPin className="w-4 h-4 text-brand-blue" />
                  <span>123 Market St, Tech City, 54321</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-400 font-medium">
                  <Phone className="w-4 h-4 text-brand-blue" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-400 font-medium">
                  <Mail className="w-4 h-4 text-brand-blue" />
                  <span>hello@nexg-marketplace.com</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-tight text-gray-300 font-sans">Subscribe for Updates</h4>
              <div className="flex p-1 bg-gray-800 border-gray-700 rounded-xl overflow-hidden border focus-within:border-brand-blue transition-colors shadow-inner">
                <input
                  type="email"
                  placeholder="Your Email..."
                  suppressHydrationWarning
                  className="flex-grow bg-transparent px-4 py-2.5 text-xs focus:outline-none focus:ring-0 font-sans"
                />
                <button 
                  suppressHydrationWarning
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white px-5 py-2.5 text-xs font-semibold transition-all rounded-lg"
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-20 pt-10 border-t border-gray-800 text-[11px] text-gray-500 space-y-4 md:space-y-0 uppercase tracking-widest font-semibold">
          <p suppressHydrationWarning>© {new Date().getFullYear()} NexG Marketplace. All rights reserved.</p>
          <div className="flex space-x-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
