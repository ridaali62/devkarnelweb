"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";

const defaultSlides = [
  { src: "https://res.cloudinary.com/dlurrugno/image/upload/v1775905816/mag-cropped_ynegzt.png", title: "The Magazine", category: "Publishing Platform" },
  { src: "https://res.cloudinary.com/dlurrugno/image/upload/v1775905815/tmgcropped_clpgiu.png", title: "TMG Corporate", category: "Corporate Website" },
  { src: "https://res.cloudinary.com/dlurrugno/image/upload/v1775905816/javecropped_jvo8uy.png", title: "Jave Cafe", category: "Restaurant & Ordering" },
  { src: "https://res.cloudinary.com/dlurrugno/image/upload/v1775905812/darkdrop-coffee.vercel.app__hd1aro.png", title: "DarkDrop Coffee", category: "E-Commerce" },
  { src: "https://res.cloudinary.com/dlurrugno/image/upload/v1775905817/icecropped_cnutjn.png", title: "ICE Platform", category: "SaaS / Technology" },
];

const AUTO_PLAY_INTERVAL = 3500;

export default function HeroCarousel({ featureTags = [], images }) {
  // Accept either array of strings (legacy) or array of slide objects
  const slides = images
    ? images.map((img, i) =>
        typeof img === "string" ? { src: img, title: `Project ${i + 1}`, category: "Portfolio" } : img
      )
    : defaultSlides;

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
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_PLAY_INTERVAL);
  }, [slides.length]);

  const animateSlides = useCallback((index) => {
    const s = slidesRef.current;
    if (!s?.length || !s[index]) return;
    if (isAnimatingRef.current) s.forEach((sl) => { if (sl) gsap.killTweensOf(sl); });
    isAnimatingRef.current = true;
    s.forEach((slide, i) => {
      if (!slide) return;
      if (i === index) {
        gsap.to(slide, { opacity: 1, scale: 1, zIndex: 10, duration: 0.6, ease: "power3.out", onComplete: () => { isAnimatingRef.current = false; } });
      } else {
        gsap.to(slide, { opacity: 0, scale: 0.97, zIndex: 0, duration: 0.5, ease: "power2.inOut" });
      }
    });
  }, []);

  const handleNext = useCallback((e) => {
    if (e) e.stopPropagation();
    if (isAnimatingRef.current) return;
    setActiveIndex((prev) => (prev + 1) % slides.length);
    clearAutoPlay(); startAutoPlay();
  }, [slides.length, clearAutoPlay, startAutoPlay]);

  const handlePrev = useCallback((e) => {
    if (e) e.stopPropagation();
    if (isAnimatingRef.current) return;
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    clearAutoPlay(); startAutoPlay();
  }, [slides.length, clearAutoPlay, startAutoPlay]);

  const handleMouseEnter = useCallback(() => { isHoveredRef.current = true; clearAutoPlay(); }, [clearAutoPlay]);
  const handleMouseLeave = useCallback(() => {
    isHoveredRef.current = false;
    requestAnimationFrame(() => { if (!isHoveredRef.current) startAutoPlay(); });
  }, [startAutoPlay]);

  useEffect(() => {
    gsap.fromTo(carouselRef.current, { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.8, delay: 0.8, ease: "power3.out" });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => { startAutoPlay(); }, 100);
    return () => { clearTimeout(timer); clearAutoPlay(); };
  }, [startAutoPlay, clearAutoPlay]);

  useEffect(() => { animateSlides(activeIndex); }, [activeIndex, animateSlides]);

  return (
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
          {slides.map((slide, i) => (
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
                  {slides.map((_, idx) => (
                    <div
                      key={idx}
                      className={`rounded-full transition-all duration-300 ${idx === activeIndex ? "w-5 h-[3px] bg-[#2de8b0]" : "w-[5px] h-[5px] bg-white/30"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Nav buttons — inside frame */}
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

          {/* Slide counter */}
          <div className="absolute top-4 right-4 z-30 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white/60 text-xs font-medium tabular-nums">
            {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </div>
        </div>

        <div className="absolute -inset-4 bg-[#2de8b0]/8 blur-3xl -z-10 group-hover:bg-[#2de8b0]/15 transition-colors duration-500" />
      </div>

      {/* Feature Tags */}
      {featureTags.length > 0 && (
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 px-1">
          {featureTags.map((tag, i) => (
            <div key={i} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-default">
              {tag}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
