"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { urbanist } from "@/app/fonts";

const carouselSlides = [
  { src: "https://res.cloudinary.com/dlurrugno/image/upload/v1775905816/mag-cropped_ynegzt.png", title: "The Magazine", category: "Publishing Platform" },
  { src: "https://res.cloudinary.com/dlurrugno/image/upload/v1775905815/tmgcropped_clpgiu.png", title: "TMG Corporate", category: "Corporate Website" },
  { src: "https://res.cloudinary.com/dlurrugno/image/upload/v1775905816/javecropped_jvo8uy.png", title: "Jave Cafe", category: "Restaurant & Ordering" },
  { src: "https://res.cloudinary.com/dlurrugno/image/upload/v1775905812/darkdrop-coffee.vercel.app__hd1aro.png", title: "DarkDrop Coffee", category: "E-Commerce" },
  { src: "https://res.cloudinary.com/dlurrugno/image/upload/v1775905817/icecropped_cnutjn.png", title: "ICE Platform", category: "SaaS / Technology" },
];

const featureTags = ["SEO Optimized", "Mobile-First", "AI-Powered", "Fast Loading"];

const AUTO_PLAY_INTERVAL = 3500;

export default function WebHero() {
  const headingLine1Ref = useRef(null);
  const headingLine2Ref = useRef(null);
  const headingLine3Ref = useRef(null);
  const subRef = useRef(null);
  const btnsRef = useRef(null);
  const bgRevealRef = useRef(null);
  const carouselRef = useRef(null);
  const slidesContainerRef = useRef(null);
  const slidesRef = useRef([]);
  const intervalRef = useRef(null);
  const isHoveredRef = useRef(false);
  const isAnimatingRef = useRef(false);
  const activeIndexRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => { activeIndexRef.current = activeIndex; }, [activeIndex]);

  const clearAutoPlay = useCallback(() => {
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
  }, []);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current || isHoveredRef.current) return;
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselSlides.length);
    }, AUTO_PLAY_INTERVAL);
  }, []);

  const animateSlides = useCallback((index) => {
    const slides = slidesRef.current;
    if (!slides?.length || !slides[index]) return;
    requestAnimationFrame(() => {
      if (isAnimatingRef.current) slides.forEach((s) => { if (s) gsap.killTweensOf(s); });
      isAnimatingRef.current = true;
      slides.forEach((slide, i) => {
        if (!slide) return;
        if (i === index) {
          gsap.to(slide, { opacity: 1, scale: 1, zIndex: 10, duration: 0.6, ease: "power3.out", onComplete: () => { isAnimatingRef.current = false; } });
        } else {
          gsap.to(slide, { opacity: 0, scale: 0.97, zIndex: 0, duration: 0.5, ease: "power2.inOut" });
        }
      });
    });
  }, []);

  const handleNext = useCallback((e) => {
    if (e) e.stopPropagation();
    if (isAnimatingRef.current) return;
    setActiveIndex((prev) => (prev + 1) % carouselSlides.length);
    clearAutoPlay(); startAutoPlay();
  }, [clearAutoPlay, startAutoPlay]);

  const handlePrev = useCallback((e) => {
    if (e) e.stopPropagation();
    if (isAnimatingRef.current) return;
    setActiveIndex((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
    clearAutoPlay(); startAutoPlay();
  }, [clearAutoPlay, startAutoPlay]);

  const handleMouseEnter = useCallback(() => { isHoveredRef.current = true; clearAutoPlay(); }, [clearAutoPlay]);
  const handleMouseLeave = useCallback(() => {
    isHoveredRef.current = false;
    requestAnimationFrame(() => { if (!isHoveredRef.current) startAutoPlay(); });
  }, [startAutoPlay]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([headingLine1Ref.current, headingLine2Ref.current, headingLine3Ref.current, subRef.current, btnsRef.current], { opacity: 0, y: 40, filter: "blur(10px)" });
      gsap.set(bgRevealRef.current, { opacity: 0 });
      gsap.set(carouselRef.current, { opacity: 0, x: 40 });

      const tl = gsap.timeline();
      tl.to(bgRevealRef.current, { opacity: 1, duration: 1, ease: "power2.out" }, 0);
      tl.to([headingLine1Ref.current, headingLine2Ref.current, headingLine3Ref.current], { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, stagger: 0.15, ease: "power2.out" }, 0.2);
      tl.to(subRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6, ease: "power2.out" }, 0.5);
      tl.to(btnsRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6, ease: "power2.out" }, 0.7);
      tl.to(carouselRef.current, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }, 0.8);
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => { startAutoPlay(); }, 100);
    return () => { clearTimeout(timer); clearAutoPlay(); };
  }, []);

  useEffect(() => { animateSlides(activeIndex); }, [activeIndex, animateSlides]);

  return (
    <section className={`relative min-h-screen w-full flex items-center overflow-hidden bg-[#010504] ${urbanist.className}`}>
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
        }}
      />
      <div className="absolute bg-black inset-0 w-full h-full opacity-40" />
      <div className="absolute inset-0 w-full h-full opacity-20" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(45,232,176,0.1) 0%, transparent 70%)" }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-6 sm:gap-10 lg:gap-16 pt-28 pb-10 lg:pt-36 lg:pb-20">

        {/* Left: Text */}
        <div className="w-full lg:w-2/5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.2rem] font-bold leading-[1.1] tracking-tight text-white mb-8">
            <span ref={headingLine1Ref} className="block">Architecting high-end</span>
            <span ref={headingLine2Ref} className="block bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent">Scalable Websites &</span>
            <span ref={headingLine3Ref} className="block text-[#2de8b0]">Digital Ecosystems</span>
          </h1>
          <p ref={subRef} className="text-white/60 text-sm sm:text-base leading-relaxed mb-8 lg:mb-10 max-w-md">
            We build lightning-fast web applications using Next.js and GSAP.
            From bespoke design systems to complex e-commerce engines, we prioritize performance, SEO, and conversion-driven user experiences.
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

        {/* Right: Carousel */}
        <div className="w-full lg:w-3/5 flex flex-col gap-5 justify-center lg:justify-end">
          <div
            ref={carouselRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="group relative w-full aspect-[4/3] max-w-[720px] mx-auto lg:mx-0"
            style={{ opacity: 0 }}
          >
            {/* Frame */}
            <div ref={slidesContainerRef} className="relative w-full h-full rounded-2xl overflow-hidden bg-[#060d0b] shadow-[0_24px_64px_rgba(0,0,0,0.6)] border border-white/10">

              {/* Slides */}
              {carouselSlides.map((slide, i) => (
                <div
                  key={i}
                  ref={(el) => { slidesRef.current[i] = el; }}
                  className="absolute inset-0 w-full h-full opacity-0"
                  style={{ zIndex: i === 0 ? 10 : 0 }}
                >
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="w-full h-full object-cover object-top"
                    loading={i <= 1 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-black/25" />

                  {/* Slide info */}
                  <div className="absolute bottom-4 left-5 right-5 z-10 flex items-end justify-between">
                    <div>
                      <span className="text-[#2de8b0] text-[10px] font-bold uppercase tracking-widest block mb-0.5">{slide.category}</span>
                      <p className="text-white font-semibold text-sm sm:text-base">{slide.title}</p>
                    </div>
                    <div className="flex gap-1.5 items-center shrink-0">
                      {carouselSlides.map((_, idx) => (
                        <div
                          key={idx}
                          className={`rounded-full transition-all duration-300 ${idx === activeIndex ? "w-5 h-[3px] bg-[#2de8b0]" : "w-[5px] h-[5px] bg-white/30"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Nav buttons — inside frame, visible on hover */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/15 text-white hover:bg-[#2de8b0] hover:text-black hover:border-[#2de8b0] transition-all duration-200 opacity-0 group-hover:opacity-100"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/15 text-white hover:bg-[#2de8b0] hover:text-black hover:border-[#2de8b0] transition-all duration-200 opacity-0 group-hover:opacity-100"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>

              {/* Slide counter top-right */}
              <div className="absolute top-4 right-4 z-30 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white/60 text-xs font-medium tabular-nums">
                {String(activeIndex + 1).padStart(2, "0")} / {String(carouselSlides.length).padStart(2, "0")}
              </div>
            </div>

            <div className="absolute -inset-4 bg-[#2de8b0]/8 blur-3xl -z-10 group-hover:bg-[#2de8b0]/15 transition-colors duration-500" />
          </div>

          {/* Feature Tags */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 px-1">
            {featureTags.map((tag, i) => (
              <div key={i} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-default">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
    </section>
  );
}
