"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Plus, X } from "lucide-react";
import { urbanist } from "@/app/fonts";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const defaultFaqData = [
  {
    question: "How much does a website cost?",
    answer: "Simple sites start at $499. More complex builds are quoted based on your specific needs. We also offer monthly payment plans starting at $99/mo so there’s no large upfront cost required.",
  },
  {
    question: "Do I really get hosting free?",
    answer: "Yes! Every new website build includes your first full year of hosting at no charge. After that, we offer competitive ongoing hosting packages.",
  },
  {
    question: "How long does it take to build a website?",
    answer: "A typical 6-page business website takes about 4 weeks from kickoff to launch. Timelines vary based on complexity and how quickly content and feedback are provided.",
  },
  {
    question: "What size businesses do you work with?",
    answer: "We work with everyone — from brand-new startups to established corporations. If you’re a business looking to grow online, we’d love to help.",
  },
  {
    question: "Can I update my website after it's built?",
    answer: "Absolutely. We build on WordPress and modern stacks, so you can easily manage and update your own content.",
  },
  {
    question: "What makes Devskarnel different?",
    answer: "We combine cutting-edge tools including AI-powered features, transparent pricing, flexible payment options, and a results-first approach.",
  },
];

const WebFAQ = ({ title = "Common Questions", subtitle = "Support", faqData = null }) => {
  const items = faqData || defaultFaqData;
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation for the cards
      gsap.fromTo(
        itemsRef.current,
        { 
          opacity: 0, 
          y: 20,
          filter: "blur(10px)" 
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // GSAP height animation logic for opening/closing
  const toggleAccordion = (index) => {
    const isOpening = activeIndex !== index;
    const content = document.getElementById(`faq-content-${index}`);
    
    if (isOpening) {
      // Close currently active if one exists
      if (activeIndex !== -1) {
        gsap.to(`#faq-content-${activeIndex}`, { height: 0, opacity: 0, duration: 0.4, ease: "power2.inOut" });
      }
      setActiveIndex(index);
      gsap.fromTo(content, 
        { height: 0, opacity: 0 }, 
        { height: "auto", opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    } else {
      setActiveIndex(-1);
      gsap.to(content, { height: 0, opacity: 0, duration: 0.4, ease: "power2.inOut" });
    }
  };

  return (
    <section
      ref={containerRef}
      className={`relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 flex flex-col items-center overflow-hidden ${urbanist.className}`}
       style={{
        background: `
          radial-gradient(circle at 0% 0%, rgba(0,0,0,1) 0%, transparent 70%),
          radial-gradient(circle at 100% 0%, rgba(0,0,0,1) 0%, transparent 70%),
          radial-gradient(circle at 0% 100%, rgba(0,0,0,1) 0%, transparent 70%),
          radial-gradient(circle at 100% 100%, rgba(0,0,0,1) 0%, transparent 70%),
          radial-gradient(circle at 50% 50%, rgba(45, 232, 176, 0.4) 0%, transparent 60%),
          linear-gradient(180deg, #000000 0%, #000000 35%, #0F7C6E 50%, #000000 65%, #000000 100%)
        `
      }}
    >
      <div className="max-w-3xl w-full z-10">
        <div className="text-center mb-16">
          <p className="text-[#2de8b0] text-sm font-bold uppercase tracking-[0.4em] mb-4">{subtitle}</p>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {title}
          </h2>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 ${
                activeIndex === index ? "bg-white/[0.07] border-[#2de8b0]/40 shadow-[0_0_30px_rgba(45,232,176,0.1)]" : "bg-white/[0.02]"
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full p-6 text-left flex justify-between items-center gap-4 cursor-pointer"
              >
                <span className={`text-base sm:text-lg font-semibold transition-colors duration-300 ${
                  activeIndex === index ? "text-[#2de8b0]" : "text-white/80"
                }`}>
                  {item.question}
                </span>
                <div className={`p-2 rounded-xl transition-all duration-300 ${
                  activeIndex === index ? "bg-[#2de8b0] text-black" : "bg-white/5 text-white/40"
                }`}>
                  {activeIndex === index ? <X size={18} strokeWidth={3} /> : <Plus size={18} strokeWidth={3} />}
                </div>
              </button>

              <div 
                id={`faq-content-${index}`} 
                className="overflow-hidden h-0 opacity-0"
              >
                <div className="px-6 pb-6 text-white/50 leading-relaxed text-base pt-2 border-t border-white/5 mt-2">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebFAQ;