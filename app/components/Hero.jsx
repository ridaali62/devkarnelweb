"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "3x", label: "Faster Load Times" },
];

export default function Hero() {
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = contentRef.current.querySelectorAll(".hero-anim");
      gsap.fromTo(
        els,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power2.out" }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#010504]">
      {/* Single static glow — no animation, no blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #2de8b0 0%, transparent 70%)" }} />

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #010504)" }} />

      <div ref={contentRef} className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-32 pb-24 flex flex-col items-center text-center">

        <div className="hero-anim inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#2de8b0]/20 bg-[#2de8b0]/5 text-[#2de8b0] text-xs font-medium tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2de8b0] animate-pulse" />
          Web Development Agency — Pakistan
        </div>

        <h1 className="hero-anim text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
          <span className="text-white">Results-Driven </span>
          <span className="text-[#2de8b0]">Web Design</span>
          <br />
          <span className="text-white/70 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">& Development</span>
        </h1>

        <p className="hero-anim text-white/50 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
          We build fast, scalable, and SEO-optimized websites that convert visitors into customers. From startups to enterprises.
        </p>

        <div className="hero-anim flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link href="/contact" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm font-bold text-black bg-[#2de8b0] hover:bg-[#1bc497] transition-colors duration-200 shadow-[0_4px_24px_rgba(45,232,176,0.25)] active:scale-95">
              Start a Project
            </button>
          </Link>
          <a href="https://calendly.com/afterrenderagency/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm font-semibold text-white/80 hover:text-white border border-white/15 hover:border-white/30 transition-all duration-200 active:scale-95">
              Book a Free Call
            </button>
          </a>
        </div>

        {/* Stats */}
        <div className="hero-anim mt-16 w-full max-w-lg grid grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1 py-4 rounded-xl border border-white/8 bg-white/3">
              <span className="text-2xl sm:text-3xl font-bold text-[#2de8b0]">{stat.value}</span>
              <span className="text-[11px] sm:text-xs text-white/40 text-center leading-tight">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
