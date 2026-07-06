"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "CEO, Thrive Digital",
    text: "Devskarnel delivered our new website ahead of schedule and it looks incredible. Our conversion rate went up 40% in the first month alone.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=500&q=90",
  },
  {
    name: "Daniel Martinez",
    role: "Founder, NovaTech",
    text: "The team was transparent throughout the entire build. They communicated every step clearly and the final product exceeded our expectations.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=500&q=90",
  },
  {
    name: "Emily Carter",
    role: "Marketing Director",
    text: "We hired them for SEO and within 3 months our organic traffic tripled. Their strategy was data-driven and easy to understand.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=500&q=90",
  },
  {
    name: "Michael Chen",
    role: "CTO, Blockwave",
    text: "Professional, trustworthy, and incredibly responsive. They built our web app from scratch and the code quality is top-tier.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=500&q=90",
  },
  {
    name: "Jessica Blair",
    role: "Product Lead, Appify",
    text: "The UI/UX redesign they led for our mobile app was seamless. User retention improved by 60% after launch.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=500&q=90",
  },
  {
    name: "Marcus Wright",
    role: "SEO Manager, RankUp",
    text: "Outstanding communication and even better results. Our site now ranks on page one for 15+ competitive keywords.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=500&q=90",
  },
];

export default function Testimonials() {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const slide = (direction) => {
    const cols = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
    const cardWidth = containerRef.current.offsetWidth / cols + (cols > 1 ? 20 / cols : 0);
    const scrollAmount = direction === "next" ? -cardWidth : cardWidth;
    const maxScroll = -(cardWidth * (testimonials.length - cols));

    gsap.to(sliderRef.current, {
      x: `+=${scrollAmount}`,
      duration: 0.6,
      ease: "power2.inOut",
      modifiers: {
        x: gsap.utils.unitize((x) => Math.max(Math.min(0, parseFloat(x)), maxScroll)),
      },
    });
  };

  return (
    <section
      id="reviews"
      className="relative w-full py-20 lg:py-28 overflow-hidden"
      style={{ background: "#010504" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-white/10 bg-white/5">
              <svg className="w-4 h-4 text-[#2de8b0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-sm text-white/70 uppercase tracking-wider font-medium">Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-2">What our clients say</h2>
            <p className="text-white/40 text-sm sm:text-base">Trusted by entrepreneurs and industry leaders worldwide.</p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => slide("prev")}
              className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-[#2de8b0] hover:border-[#2de8b0] hover:text-black transition-all duration-300 text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={() => slide("next")}
              className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-[#2de8b0] hover:border-[#2de8b0] hover:text-black transition-all duration-300 text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div ref={containerRef} className="overflow-hidden">
          <div ref={sliderRef} className="flex gap-5">
            {testimonials.map((item, index) => (
              <div key={index} className="min-w-full sm:min-w-[calc(50%-10px)] lg:min-w-[calc(33.333%-14px)] shrink-0 group">
                <div className="relative rounded-2xl overflow-hidden border border-white/8 group-hover:border-white/18 transition-all duration-500 bg-[#060d0b]">

                  {/* Portrait */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#060d0b]" />
                  </div>

                  {/* Content */}
                  <div className="relative px-6 pb-6 pt-2">
                    {/* Decorative quote */}
                    <svg className="w-8 h-8 text-[#2de8b0]/20 mb-3" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8C5.6 8 2 11.6 2 16v8h8v-8H6c0-2.2 1.8-4 4-4V8zm16 0c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4V8z" />
                    </svg>

                    <p className="text-white/70 text-sm leading-relaxed mb-5">&ldquo;{item.text}&rdquo;</p>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-semibold text-sm">{item.name}</h4>
                        <p className="text-white/35 text-xs mt-0.5">{item.role}</p>
                      </div>
                      <div className="flex text-amber-400 gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
