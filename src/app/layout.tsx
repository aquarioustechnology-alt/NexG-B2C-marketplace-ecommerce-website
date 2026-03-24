import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ChatBot from "@/components/common/ChatBot";
import { CartProvider } from "@/context/CartContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Get Lubricants | Premium B2C Ecommerce",
  description: "Experience the next generation of online shopping with Get Lubricants.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${montserrat.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#222222]">
        <CartProvider>
          <Header />
          <main className="flex-grow w-full max-w-[1600px] mx-auto overflow-hidden">
            {children}
          </main>
          <Footer />
          <ChatBot />
        </CartProvider>
      </body>
    </html>
  );
}
