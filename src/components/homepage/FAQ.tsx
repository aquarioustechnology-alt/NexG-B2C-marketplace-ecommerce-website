"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle, ChevronRight } from "lucide-react";
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
    <section className="bg-gray-50 py-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/[0.02] -skew-x-12 z-0" />
      
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Side Content */}
          <div className="w-full lg:w-[40%]">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-blue text-white rounded-lg mb-6 shadow-lg shadow-brand-blue/20 transform -skew-x-12">
              <HelpCircle className="w-4 h-4 skew-x-12" />
              <span className="font-semibold text-[11px] uppercase tracking-[2px] skew-x-12">Support Center</span>
            </div>
            
            <h2 className="text-[40px] lg:text-[52px] font-semibold text-[#222222] leading-[1] tracking-tighter mb-8">
              Got Questions? <br /> <span className="text-brand-blue">We have Answers.</span>
            </h2>
            
            <p className="text-gray-500 text-[16px] leading-relaxed mb-12 font-medium max-w-[480px]">
              Explore our frequently asked questions to find quick answers about our products, delivery, and services.
            </p>

            <div className="flex flex-col gap-4">
              <Link 
                href="/contact" 
                className="group flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-blue/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-orange-light rounded-xl flex items-center justify-center text-brand-orange">
                     <HelpCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-[#222222] font-semibold text-[16px]">Need more help?</h4>
                    <p className="text-gray-400 text-[12px] font-semibold">Talk to our experts directly</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-brand-blue transition-colors group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* FAQ Accordion Side */}
          <div className="w-full lg:w-[60%] flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx} 
                  className={`group bg-white rounded-[24px] border transition-all duration-500 overflow-hidden ${
                    isOpen 
                    ? "border-brand-blue/30 shadow-2xl shadow-brand-blue/10 translate-x-2" 
                    : "border-gray-100 shadow-sm hover:border-gray-200"
                  }`}
                >
                  <button 
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 lg:p-8 outline-none text-left cursor-pointer"
                  >
                    <span className={`text-[17px] lg:text-[19px] font-semibold tracking-tight leading-snug transition-colors duration-300 ${
                      isOpen ? "text-brand-blue" : "text-[#222222] group-hover:text-brand-blue"
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isOpen ? "bg-brand-blue text-white rotate-180" : "bg-gray-50 text-gray-400 group-hover:bg-brand-blue group-hover:text-white"
                    }`}>
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>
                  
                  <div className={`transition-all duration-700 ease-in-out ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}>
                    <div className="px-6 lg:px-8 pb-8">
                      <div className="w-full h-px bg-gray-50 mb-6" />
                      <p className="text-gray-500 text-[15px] lg:text-[16px] leading-relaxed font-semibold">
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
