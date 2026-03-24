"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, Send, User, Headset, Sparkles, MessagesSquare } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! Welcome to Get Lubricants. How can I help you find the right engine oil or lubricant today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputValue("");

    // Simple automated response
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: "Thank you for your inquiry! One of our experts will get back to you shortly, or you can check our FAQ for immediate answers.",
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-1.5 z-50 font-sans">
      {/* 1. Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[360px] h-[480px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-brand-blue p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center relative">
                <Headset className="w-5 h-5" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-brand-blue" />
              </div>
              <div>
                <h3 className="text-[14px] font-semibold leading-none mb-1">Get Lubricants Support</h3>
                <span className="text-[10px] text-white/70 flex items-center gap-1">
                   <Sparkles className="w-2.5 h-2.5" /> 24/7 Support Assistant
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1.5 rounded-lg transition-colors cursor-pointer">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-grow overflow-y-auto p-5 space-y-4 bg-[#F8FAFC]">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] p-3.5 rounded-2xl text-[14px] font-medium leading-relaxed shadow-sm ${
                  msg.sender === "user" 
                    ? "bg-brand-red text-white rounded-tr-none" 
                    : "bg-white text-gray-800 rounded-tl-none border border-gray-100"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-3.5 bg-white border-t border-gray-100 flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow px-4 py-2 bg-gray-50 rounded-xl text-[14px] outline-none focus:ring-2 focus:ring-brand-red/20 border border-gray-200 focus:border-brand-red transition-all font-sans"
            />
            <button 
              type="submit" 
              className="bg-brand-red text-white p-2 rounded-xl hover:bg-brand-red/90 transition-all shadow-md active:scale-95 disabled:opacity-50 cursor-pointer"
              disabled={!inputValue.trim()}
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}

      {/* 2. Floating Welcome Tooltip */}
      {!isOpen && showTooltip && (
        <div className="absolute bottom-2 right-16 px-4 py-2.5 bg-white rounded-xl shadow-xl flex items-center gap-3 whitespace-nowrap border border-gray-100 animate-in fade-in slide-in-from-right-2 duration-500 group">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="absolute -top-2 -left-2 w-5 h-5 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <X className="w-3 h-3" />
          </button>
          <div>
            <p className="text-[13px] font-semibold text-gray-800 leading-tight">👋 Hi! I'm Petrolube Specialist</p>
            <p className="text-[12px] text-gray-500 font-medium">How can I help you?</p>
          </div>
          <div className="w-2 h-2 bg-white absolute -right-1 top-1/2 -translate-y-1/2 rotate-45 border-r border-t border-gray-100" />
        </div>
      )}

      {/* 3. Floating Toggle Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
        }}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer ${
          isOpen ? "bg-white text-brand-red" : "bg-brand-red text-white"
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <div className="relative">
            <MessagesSquare className="w-6 h-6" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-brand-red animate-pulse" />
          </div>
        )}
      </button>
    </div>
  );
};

export default ChatBot;
