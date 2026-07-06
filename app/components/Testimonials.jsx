"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "CEO, Thrive Digital",
    text: "Devskarnel delivered our new website ahead of schedule and it looks incredible. Our conversion rate went up 40% in the first month alone.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    name: "Daniel Martinez",
    role: "Founder, NovaTech",
    text: "The team was transparent throughout the entire build. They communicated every step clearly and the final product exceeded our expectations.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Emily Carter",
    role: "Marketing Director",
    text: "We hired them for SEO and within 3 months our organic traffic tripled. Their strategy was data-driven and easy to understand.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Michael Chen",
    role: "CTO, Blockwave",
    text: "Professional, trustworthy, and incredibly responsive. They built our web app from scratch and the code quality is top-tier.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Jessica Blair",
    role: "Product Lead, Appify",
    text: "The UI/UX redesign they led for our mobile app was seamless. User retention improved by 60% after launch.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    name: "Marcus Wright",
    role: "SEO Manager, RankUp",
    text: "Outstanding communication and even better results. Our site now ranks on page one for 15+ competitive keywords.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
];

export default function Testimonials() {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const slide = (direction) => {
    const cols = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 2 : 1;
    const cardWidth = containerRef.current.offsetWidth / cols;
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
        {/* Header with nav arrows */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <svg className="w-4 h-4 text-[#2de8b0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-sm text-white/70 uppercase tracking-wider font-medium">Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-2">What our clients say</h2>
            <p className="text-white/40 text-base sm:text-lg">Trusted by entrepreneurs and industry leaders worldwide.</p>
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
              <div key={index} className="min-w-full md:min-w-[calc(50%-10px)] lg:min-w-[calc(25%-15px)] group">
                <div className="relative h-[420px] rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

                  <div className="absolute bottom-0 p-6 w-full">
                    <div className="flex text-amber-400 text-sm mb-3 gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-3">&ldquo;{item.text}&rdquo;</p>
                    <div>
                      <h4 className="text-white font-semibold text-base">{item.name}</h4>
                      <p className="text-white/40 text-xs">{item.role}</p>
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
