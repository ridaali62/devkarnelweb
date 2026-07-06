"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { urbanist } from "@/app/fonts";
import Link from "next/link";
import HeroCarousel from "@/app/components/shared/HeroCarousel";

const featureTags = ["On-Page SEO", "Technical SEO", "Link Building", "Local SEO"];

const seoImages = [
  "/images/service_images/seo1.png",
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
];

export default function SEOHero() {
  const headingLine1Ref = useRef(null);
  const headingLine2Ref = useRef(null);
  const headingLine3Ref = useRef(null);
  const subRef = useRef(null);
  const btnsRef = useRef(null);
  const bgRevealRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [headingLine1Ref.current, headingLine2Ref.current, headingLine3Ref.current, subRef.current, btnsRef.current],
        { opacity: 0, y: 40, filter: "blur(10px)" }
      );
      gsap.set(bgRevealRef.current, { opacity: 0 });

      const tl = gsap.timeline();
      tl.to(bgRevealRef.current, { opacity: 1, duration: 1, ease: "power2.out" }, 0)
        .to(
          [headingLine1Ref.current, headingLine2Ref.current, headingLine3Ref.current],
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, stagger: 0.15, ease: "power2.out" },
          0.2
        )
        .to(subRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6, ease: "power2.out" }, 0.5)
        .to(btnsRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6, ease: "power2.out" }, 0.7);
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      className={`relative min-h-screen w-full flex items-center overflow-hidden bg-[#010504] ${urbanist.className}`}
    >
      <div
        ref={bgRevealRef}
        className="absolute inset-0 w-full h-full"
        style={{
          background: `
            radial-gradient(circle at 10% 70%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 20%, transparent 50%),
            radial-gradient(circle at 40% -10%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 30%, transparent 50%),
            radial-gradient(circle at 90% 100%, rgba(0,0,0,0.7) 10%, rgba(0,0,0,0.3) 30%, transparent 55%),
            radial-gradient(circle at 100% 90%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 25%, transparent 45%),
            linear-gradient(180deg, #24E8B2 0%, #1BC497 5%, #0F7C6E 40%, #0A4A42 60%, #062B24 80%, #010504 100%)
          `,
          backgroundSize: "cover",
        }}
      />
      <div className="absolute bg-black inset-0 w-full h-full opacity-40" />
      <div
        className="absolute inset-0 w-full h-full opacity-20"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(45,232,176,0.1) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pt-28 pb-16 lg:pt-36 lg:pb-20">
        {/* Left: Text */}
        <div className="w-full lg:w-2/5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.2rem] font-bold leading-[1.1] tracking-tight text-white mb-8">
            <span ref={headingLine1Ref} className="block">Rank Higher.</span>
            <span ref={headingLine2Ref} className="block bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent">
              Get Found.
            </span>
            <span ref={headingLine3Ref} className="block text-[#2de8b0]">
              Grow Organically.
            </span>
          </h1>

          <p ref={subRef} className="text-white/60 text-sm sm:text-base leading-relaxed mb-8 lg:mb-10 max-w-md">
            Data-driven SEO strategies that build long-term search visibility, drive qualified
            traffic, and turn rankings into real revenue — sustainably.
          </p>

          <div ref={btnsRef} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="https://calendly.com/afterrenderagency/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-8 py-3.5 rounded-lg text-[1rem] font-bold text-black/80 transition-all duration-200 hover:brightness-110 active:scale-95 whitespace-nowrap text-center"
              style={{ backgroundColor: "#2de8b0", boxShadow: "0 8px 30px rgba(45,232,176,0.25)" }}
            >
              Get a Free SEO Audit
            </a>
            <Link
              href="/case-studies"
              className="cursor-pointer px-8 py-3.5 rounded-lg text-[1rem] font-semibold text-white/80 hover:text-white transition-all duration-200 active:scale-95 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 whitespace-nowrap text-center"
            >
              View Our Results
            </Link>
          </div>
        </div>

        {/* Right: SEO Carousel */}
        <HeroCarousel featureTags={featureTags} images={seoImages} />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />
    </section>
  );
}
