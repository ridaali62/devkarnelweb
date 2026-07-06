"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { urbanist } from "@/app/fonts";

// Carousel Images - trailing spaces removed
const carouselImages = [
  "https://res.cloudinary.com/dlurrugno/image/upload/v1775905816/mag-cropped_ynegzt.png",
  "https://res.cloudinary.com/dlurrugno/image/upload/v1775905815/tmgcropped_clpgiu.png",
  "https://res.cloudinary.com/dlurrugno/image/upload/v1775905816/javecropped_jvo8uy.png",
  "https://res.cloudinary.com/dlurrugno/image/upload/v1775905812/darkdrop-coffee.vercel.app__hd1aro.png",
  "https://res.cloudinary.com/dlurrugno/image/upload/v1775905817/icecropped_cnutjn.png"
];

const featureTags = [
  "SEO Optimized",
  "Mobile-First",
  "AI-Powered",
  "Fast Loading"
];

export default function WebHero() {
  // Text & UI Refs
  const headingLine1Ref = useRef(null);
  const headingLine2Ref = useRef(null);
  const headingLine3Ref = useRef(null);
  const subRef = useRef(null);
  const btnsRef = useRef(null);

  // Background & Carousel Refs
  const bgRevealRef = useRef(null);
  const carouselRef = useRef(null);
  const slidesContainerRef = useRef(null);
  const slidesRef = useRef([]);

  // Auto-play refs - using refs to avoid stale closures
  const intervalRef = useRef(null);
  const isHoveredRef = useRef(false);
  const isAnimatingRef = useRef(false);
  const activeIndexRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);

  // Sync ref with state
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // Auto-play interval duration (milliseconds)
  const AUTO_PLAY_INTERVAL = 3500;

  // Clear interval helper
  const clearAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Start auto-play helper - uses ref to get latest state
  const startAutoPlay = useCallback(() => {
    // Only start if not already running and not hovered
    if (intervalRef.current || isHoveredRef.current) return;

    intervalRef.current = setInterval(() => {
      const nextIndex = (activeIndexRef.current + 1) % carouselImages.length;
      setActiveIndex(nextIndex);
    }, AUTO_PLAY_INTERVAL);
  }, []);

  // Animate slides - scoped to container ref
  const animateSlides = useCallback((index) => {
    const slides = slidesRef.current;

    // Guard: ensure slides exist
    if (!slides || slides.length === 0 || !slides[index]) return;

    // Guard: prevent rapid animation calls
    if (isAnimatingRef.current) {
      // Kill any existing tweens before starting new ones
      slides.forEach((slide) => {
        if (slide) gsap.killTweensOf(slide);
      });
    }

    isAnimatingRef.current = true;

    // Animate all slides to inactive state
    slides.forEach((slide, i) => {
      if (!slide) return;

      if (i === index) {
        gsap.to(slide, {
          opacity: 1,
          scale: 1,
          zIndex: 10,
          duration: 0.6,
          ease: "power3.out",
          onComplete: () => {
            isAnimatingRef.current = false;
          }
        });
      } else {
        gsap.to(slide, {
          opacity: 0,
          scale: 0.95,
          zIndex: 0,
          duration: 0.5,
          ease: "power2.inOut"
        });
      }
    });
  }, []);

  // Handle next with timer reset
  const handleNext = useCallback((e) => {
    if (e) {
      e.stopPropagation();
    }

    // Prevent rapid clicks
    if (isAnimatingRef.current) return;

    const nextIndex = (activeIndexRef.current + 1) % carouselImages.length;
    setActiveIndex(nextIndex);

    // Reset timer on manual navigation for better UX
    clearAutoPlay();
    startAutoPlay();
  }, [clearAutoPlay, startAutoPlay]);

  // Handle previous with timer reset
  const handlePrev = useCallback((e) => {
    e.stopPropagation();

    // Prevent rapid clicks
    if (isAnimatingRef.current) return;

    const prevIndex = (activeIndexRef.current - 1 + carouselImages.length) % carouselImages.length;
    setActiveIndex(prevIndex);

    // Reset timer on manual navigation for better UX
    clearAutoPlay();
    startAutoPlay();
  }, [clearAutoPlay, startAutoPlay]);

  // Hover handlers with debounce protection
  const handleMouseEnter = useCallback(() => {
    isHoveredRef.current = true;
    clearAutoPlay();
  }, [clearAutoPlay]);

  const handleMouseLeave = useCallback(() => {
    isHoveredRef.current = false;
    // Small delay to prevent rapid enter/leave flickering
    requestAnimationFrame(() => {
      if (!isHoveredRef.current) {
        startAutoPlay();
      }
    });
  }, [startAutoPlay]);

  // Initial entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- Initial States ---
      gsap.set([headingLine1Ref.current, headingLine2Ref.current, headingLine3Ref.current, subRef.current, btnsRef.current], {
        opacity: 0,
        y: 40,
        filter: "blur(10px)",
      });

      gsap.set(bgRevealRef.current, { opacity: 0 });
      gsap.set(carouselRef.current, { opacity: 0, x: 40 });

      const tl = gsap.timeline();

      // Static Entrance Animations
      tl.to(bgRevealRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      }, 0);

      tl.to([headingLine1Ref.current, headingLine2Ref.current, headingLine3Ref.current], {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
      }, 0.2);

      tl.to(subRef.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "power2.out",
      }, 0.5);

      tl.to(btnsRef.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "power2.out",
      }, 0.7);

      tl.to(carouselRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out"
      }, 0.8);
    });

    return () => ctx.revert();
  }, []);

  // Auto-play effect - only runs once on mount
  useEffect(() => {
    // Edge case: don't start if no images
    if (carouselImages.length === 0) return;

    // Start auto-play after component mounts
    const timer = setTimeout(() => {
      startAutoPlay();
    }, 100);

    // Cleanup on unmount
    return () => {
      clearTimeout(timer);
      clearAutoPlay();
    };
  }, []); // Empty deps - only run on mount

  // Carousel Image Transitions - triggered when activeIndex changes
  useEffect(() => {
    animateSlides(activeIndex);
  }, [activeIndex, animateSlides]);

  // Edge case: empty images array
  if (carouselImages.length === 0) {
    return null;
  }

  return (
    <section
      className={`relative min-h-screen w-full flex items-center overflow-hidden bg-[#010504] ${urbanist.className}`}
    >
      {/* Background Layers (Static) */}
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
      <div className="absolute inset-0 w-full h-full opacity-20" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(45,232,176,0.1) 0%, transparent 70%)" }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pt-28 pb-16 lg:pt-36 lg:pb-20">

        <div className="w-full lg:w-2/5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.2rem] font-bold leading-[1.1] tracking-tight text-white mb-8">
            <span ref={headingLine1Ref} className="block">Architecting high-end</span>
            <span ref={headingLine2Ref} className="block bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent">
              Scalable Websites &
            </span>
            <span ref={headingLine3Ref} className="block text-[#2de8b0]">
              Digital Ecosystems
            </span>
          </h1>

          <p ref={subRef} className="text-white/60 text-sm sm:text-base leading-relaxed mb-8 lg:mb-10 max-w-md">
            We build lightning-fast web applications using Next.js and GSAP.
            From bespoke design systems to complex e-commerce engines, we prioritize
            performance, SEO, and conversion-driven user experiences.
          </p>

          <div ref={btnsRef} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="https://calendly.com/afterrenderagency/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-8 py-3.5 rounded-lg text-[1rem] font-bold text-black/80 transition-all duration-200 hover:brightness-110 active:scale-95 whitespace-nowrap text-center"
              style={{ backgroundColor: "#2de8b0", boxShadow: "0 8px 30px rgba(45,232,176,0.25)" }}
            >
              Start Your Project
            </a>
            <Link
              href="/case-studies"
              className="cursor-pointer px-8 py-3.5 rounded-lg text-[1rem] font-semibold text-white/80 hover:text-white transition-all duration-200 active:scale-95 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 whitespace-nowrap text-center"
            >
              View Case Studies
            </Link>
          </div>
        </div>

        {/* Carousel + Feature Tags Container */}
        <div className="w-full lg:w-3/5 flex flex-col gap-6 justify-center lg:justify-end">
          {/* Carousel */}
          <div
            ref={carouselRef}
            onClick={() => handleNext()}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="group relative w-full aspect-4/3 max-w-180 cursor-pointer mx-auto lg:mx-0"
          >
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-30 flex justify-between pointer-events-none">
              <button
                onClick={handlePrev}
                className="pointer-events-auto p-3 h-19 cursor-pointer bg-white/90 backdrop-blur-md border border-white/10 text-black/90 hover:text-white/90 hover:bg-[#2de8b0] transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="pointer-events-auto p-3 h-19 cursor-pointer bg-white/90 backdrop-blur-md border border-white/10 text-black/90 hover:text-white/90 hover:bg-[#2de8b0] transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>

            <div ref={slidesContainerRef} className="relative w-full h-full rounded border border-white/10 overflow-hidden bg-black shadow-2xl">
              {carouselImages.map((src, i) => (
                <div
                  key={i}
                  ref={(el) => { slidesRef.current[i] = el; }}
                  className="absolute inset-0 w-full h-full opacity-0"
                  style={{ zIndex: i === 0 ? 10 : 0 }}
                >
                  {/* Blurred Background Layer */}
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src={src}
                      alt=""
                      className="w-full h-full object-cover scale-110 opacity-40"
                      loading={i <= 1 ? "eager" : "lazy"}
                    />
                  </div>

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Main Image (Sharp, Centered) */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
                    <img
                      src={src}
                      alt="Portfolio"
                      className="w-full h-full object-contain"
                      loading={i <= 1 ? "eager" : "lazy"}
                    />
                  </div>

                  {/* Bottom Info Bar */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end">
                    <div>
                      <p className="text-[#2de8b0] text-xs font-bold uppercase tracking-widest mb-1">Portfolio</p>
                      <p className="text-white font-medium">Click to explore</p>
                    </div>
                    <div className="flex gap-1.5">
                      {carouselImages.map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-1 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-6 bg-[#2de8b0]' : 'w-2 bg-white/20'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute -inset-4 bg-[#2de8b0]/10 blur-3xl -z-10 group-hover:bg-[#2de8b0]/20 transition-colors duration-500" />
          </div>

          {/* Feature Tags */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 px-2">
            {featureTags.map((tag, i) => (
              <div
                key={i}
                className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-default"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </section>
  );
}