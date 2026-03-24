"use client";

import React, { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "How do I know if an engine oil is suitable for my car?",
    answer: "You can find the correct engine oil specification in your vehicle's owner manual (e.g., 5W-30 API SN). Alternatively, use our search bar to filter by car make and model, or consult with our technical experts."
  },
  {
    question: "Do you provide bulk discounts for industrial workshops?",
    answer: "Yes, we offer specialized wholesale pricing for bulk orders and industrial accounts. Please visit our Bulk Enquiry page or contact our sales team directly for a customized quote."
  },
  {
    question: "How long does the delivery take across India?",
    answer: "We typically deliver within 3-5 business days for major cities and 5-7 business days for regional areas, ensuring your products arrive safely through our certified logistics partners."
  },
  {
    question: "Are all products on NexG Marketplace 100% authentic?",
    answer: "Absolutely. We only source directly from brand authorized distributors and manufacturers. Every product undergoes strict quality checks and comes with original batch numbers."
  },
  {
    question: "What is your return policy for damaged lubricants?",
    answer: "If you receive a damaged or tampered product, please report it within 24 hours of delivery. We offer full replacements or refunds for any verified shipping damages."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left Side Content */}
          <div className="w-full lg:w-[40%]">
            <h2 className="text-[30px] lg:text-[34px] font-semibold text-[#222222] leading-[1.1] tracking-tighter mb-4">
              Got Questions? <br /> <span className="text-brand-blue">We have Answers.</span>
            </h2>
            
            <p className="text-black text-[15px] leading-relaxed mb-10 font-medium max-w-[480px]">
              Explore our frequently asked questions to find quick answers about our products, delivery, and services.
            </p>

            {/* Action Buttons - Single Row with Animation */}
            <div className="flex flex-wrap items-center gap-3">
              <Link 
                href="/contact" 
                className="relative px-6 py-3.5 bg-brand-blue rounded-xl text-white font-semibold text-[14px] inline-flex items-center gap-3 group overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/20"
              >
                <div className="absolute inset-0 w-0 bg-brand-orange group-hover:w-full transition-all duration-500 ease-out" />
                <span className="relative z-10">Contact Us</span>
                <ArrowRight className="relative z-10 w-4.5 h-4.5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <Link 
                href="/bulk-enquiry" 
                className="relative px-6 py-3.5 border-2 border-brand-orange text-brand-orange bg-transparent rounded-xl font-semibold text-[14px] inline-flex items-center gap-3 group overflow-hidden transition-all duration-300 hover:text-white"
              >
                <div className="absolute inset-0 w-0 bg-brand-orange group-hover:w-full transition-all duration-500 ease-out" />
                <span className="relative z-10">Request Bulk Enquiry</span>
                <ArrowRight className="relative z-10 w-4.5 h-4.5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* FAQ Accordion Side - Rounded 16px and Squeezed */}
          <div className="w-full lg:w-[60%] flex flex-col gap-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx} 
                  className={`group bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                    ? "border-brand-blue/30" 
                    : "border-gray-200 hover:border-brand-blue/20 shadow-none hover:shadow-sm"
                  }`}
                >
                  <button 
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className={`w-full flex items-center justify-between outline-none text-left cursor-pointer transition-all duration-300 ${
                      isOpen ? "p-4 lg:p-5" : "p-3.5 lg:p-4"
                    }`}
                  >
                    <span className={`text-[15px] font-semibold tracking-tight transition-colors duration-300 ${
                      isOpen ? "text-brand-blue" : "text-[#222222] group-hover:text-brand-blue"
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isOpen ? "bg-brand-blue text-white rotate-180" : "bg-gray-50 text-gray-400 group-hover:bg-brand-blue group-hover:text-white"
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  
                  <div className={`transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                  }`}>
                    <div className="px-5 pb-5">
                      <div className="w-full h-px bg-gray-200 mb-2" />
                      <p className="text-black text-[14px] leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
