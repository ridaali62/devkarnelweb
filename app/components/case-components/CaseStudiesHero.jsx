"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { urbanist } from "@/app/fonts";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "3x", label: "Avg. Traffic Growth" },
];

export default function CaseStudiesHero() {
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
    <section
      className={`relative min-h-screen w-full flex items-center overflow-hidden bg-[#010504] ${urbanist.className}`}
    >
      {/* Top center glow — same as home Hero */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #2de8b0 0%, transparent 70%)" }}
      />

      <div
        className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #010504)" }}
      />

      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-36 pb-24 flex flex-col items-center text-center"
      >
        <div className="hero-anim inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#2de8b0]/20 bg-[#2de8b0]/5 text-[#2de8b0] text-xs font-medium tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2de8b0] animate-pulse" />
          Portfolio &amp; Case Studies
        </div>

        <h1 className="hero-anim text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
          <span className="text-white">Work That </span>
          <span className="text-[#2de8b0]">Speaks</span>
          <br />
          <span className="text-white/70 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
            For Itself.
          </span>
        </h1>

        <p className="hero-anim text-white/50 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
          Real projects, real results. From e-commerce to SaaS platforms — here&apos;s what we&apos;ve
          built and the outcomes that followed.
        </p>

        <div className="hero-anim flex flex-col sm:flex-row items-center gap-4">
          <a href="https://calendly.com/afterrenderagency/30min" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-3.5 rounded-lg text-sm font-bold text-black bg-[#2de8b0] hover:bg-[#1bc497] transition-colors duration-200 shadow-[0_4px_24px_rgba(45,232,176,0.25)] active:scale-95 cursor-pointer whitespace-nowrap">
              Start Your Project
            </button>
          </a>
          <a href="#projects">
            <button className="px-8 py-3.5 rounded-lg text-sm font-semibold text-white/80 hover:text-white border border-white/15 hover:border-white/30 transition-all duration-200 active:scale-95 cursor-pointer whitespace-nowrap">
              View Our Work
            </button>
          </a>
        </div>

        {/* Stats row */}
        <div className="hero-anim mt-16 w-full max-w-lg grid grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1 py-5 rounded-xl border border-white/8 bg-white/3"
            >
              <span className="text-2xl sm:text-3xl font-bold text-[#2de8b0]">{stat.value}</span>
              <span className="text-[11px] sm:text-xs text-white/40 text-center leading-tight">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
