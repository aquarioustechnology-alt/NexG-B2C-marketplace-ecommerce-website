import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              NexG
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Next-generation marketplace for premium B2C products. High quality, great deals, and exceptional service.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="p-2 bg-gray-800 hover:bg-blue-600 rounded-full transition-all group">
                <Facebook className="w-4 h-4 text-gray-300 group-hover:text-white" />
              </Link>
              <Link href="#" className="p-2 bg-gray-800 hover:bg-blue-400 rounded-full transition-all group">
                <Twitter className="w-4 h-4 text-gray-300 group-hover:text-white" />
              </Link>
              <Link href="#" className="p-2 bg-gray-800 hover:bg-pink-600 rounded-full transition-all group">
                <Instagram className="w-4 h-4 text-gray-300 group-hover:text-white" />
              </Link>
              <Link href="#" className="p-2 bg-gray-800 hover:bg-red-600 rounded-full transition-all group">
                <Youtube className="w-4 h-4 text-gray-300 group-hover:text-white" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white border-b border-gray-800 pb-2">Quick Shop</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/shop" className="hover:text-blue-400 transition-colors">Electronics</Link></li>
              <li><Link href="/shop" className="hover:text-blue-400 transition-colors">Fashion</Link></li>
              <li><Link href="/shop" className="hover:text-blue-400 transition-colors">Home & Living</Link></li>
              <li><Link href="/shop" className="hover:text-blue-400 transition-colors">Health & Beauty</Link></li>
              <li><Link href="/shop" className="hover:text-blue-400 transition-colors">Sports & Outddors</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white border-b border-gray-800 pb-2">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/track" className="hover:text-blue-400 transition-colors">Track Order</Link></li>
              <li><Link href="/returns" className="hover:text-blue-400 transition-colors">Return Policy</Link></li>
              <li><Link href="/shipping" className="hover:text-blue-400 transition-colors">Shipping Info</Link></li>
              <li><Link href="/faq" className="hover:text-blue-400 transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white border-b border-gray-800 pb-2">Visit Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span>123 Market St, Tech City, 54321</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <Phone className="w-4 h-4 text-blue-500" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span>hello@nexg-marketplace.com</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-tight text-gray-300">Subscribe for Updates</h4>
              <div className="flex p-0.5 bg-gray-800 border-gray-700 rounded-lg overflow-hidden border">
                <input
                  type="email"
                  placeholder="Your Email..."
                  suppressHydrationWarning
                  className="flex-grow bg-transparent px-3 py-2 text-xs focus:outline-none focus:ring-0"
                />
                <button 
                  suppressHydrationWarning
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-xs font-bold transition-colors"
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-16 pt-8 border-t border-gray-800 text-[10px] text-gray-500 space-y-4 md:space-y-0 uppercase tracking-widest font-medium">
          <p suppressHydrationWarning>© {new Date().getFullYear()} NexG Marketplace. All rights reserved.</p>
          <div className="flex space-x-6">
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
