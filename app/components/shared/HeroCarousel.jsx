"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";

const portfolioImages = [
  "https://res.cloudinary.com/dlurrugno/image/upload/v1775905816/mag-cropped_ynegzt.png",
  "https://res.cloudinary.com/dlurrugno/image/upload/v1775905815/tmgcropped_clpgiu.png",
  "https://res.cloudinary.com/dlurrugno/image/upload/v1775905816/javecropped_jvo8uy.png",
  "https://res.cloudinary.com/dlurrugno/image/upload/v1775905812/darkdrop-coffee.vercel.app__hd1aro.png",
  "https://res.cloudinary.com/dlurrugno/image/upload/v1775905817/icecropped_cnutjn.png",
];

const AUTO_PLAY_INTERVAL = 3500;

export default function HeroCarousel({ featureTags = [], images }) {
  const carouselImages = images || portfolioImages;
  const carouselRef = useRef(null);
  const slidesContainerRef = useRef(null);
  const slidesRef = useRef([]);
  const intervalRef = useRef(null);
  const isHoveredRef = useRef(false);
  const isAnimatingRef = useRef(false);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const clearAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current || isHoveredRef.current) return;
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselImages.length);
    }, AUTO_PLAY_INTERVAL);
  }, []);

  const animateSlides = useCallback((index) => {
    const slides = slidesRef.current;
    if (!slides?.length || !slides[index]) return;
    if (isAnimatingRef.current) {
      slides.forEach((s) => { if (s) gsap.killTweensOf(s); });
    }
    isAnimatingRef.current = true;
    slides.forEach((slide, i) => {
      if (!slide) return;
      if (i === index) {
        gsap.to(slide, { opacity: 1, scale: 1, zIndex: 10, duration: 0.6, ease: "power3.out", onComplete: () => { isAnimatingRef.current = false; } });
      } else {
        gsap.to(slide, { opacity: 0, scale: 0.95, zIndex: 0, duration: 0.5, ease: "power2.inOut" });
      }
    });
  }, []);

  const handleNext = useCallback((e) => {
    if (e) e.stopPropagation();
    if (isAnimatingRef.current) return;
    setActiveIndex((prev) => (prev + 1) % carouselImages.length);
    clearAutoPlay();
    startAutoPlay();
  }, [clearAutoPlay, startAutoPlay]);

  const handlePrev = useCallback((e) => {
    e.stopPropagation();
    if (isAnimatingRef.current) return;
    setActiveIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    clearAutoPlay();
    startAutoPlay();
  }, [clearAutoPlay, startAutoPlay]);

  const handleMouseEnter = useCallback(() => {
    isHoveredRef.current = true;
    clearAutoPlay();
  }, [clearAutoPlay]);

  const handleMouseLeave = useCallback(() => {
    isHoveredRef.current = false;
    requestAnimationFrame(() => { if (!isHoveredRef.current) startAutoPlay(); });
  }, [startAutoPlay]);

  // Entrance animation
  useEffect(() => {
    gsap.fromTo(
      carouselRef.current,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.8, ease: "power3.out" }
    );
  }, []);

  // Autoplay
  useEffect(() => {
    const timer = setTimeout(() => { startAutoPlay(); }, 100);
    return () => { clearTimeout(timer); clearAutoPlay(); };
  }, [startAutoPlay, clearAutoPlay]);

  // Slide transition
  useEffect(() => { animateSlides(activeIndex); }, [activeIndex, animateSlides]);

  return (
    <div className="w-full lg:w-3/5 flex flex-col gap-6 justify-center lg:justify-end">
      {/* Carousel */}
      <div
        ref={carouselRef}
        onClick={() => handleNext()}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group relative w-full aspect-4/3 max-w-180 cursor-pointer mx-auto lg:mx-0"
        style={{ opacity: 0 }}
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
              <div className="absolute inset-0 w-full h-full">
                <img src={src} alt="" className="w-full h-full object-cover scale-110 opacity-40" loading={i <= 1 ? "eager" : "lazy"} />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
              <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
                <img src={src} alt="Portfolio" className="w-full h-full object-contain" loading={i <= 1 ? "eager" : "lazy"} />
              </div>
              <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end">
                <div>
                  <p className="text-[#2de8b0] text-xs font-bold uppercase tracking-widest mb-1">Portfolio</p>
                  <p className="text-white font-medium">Click to explore</p>
                </div>
                <div className="flex gap-1.5">
                  {carouselImages.map((_, idx) => (
                    <div key={idx} className={`h-1 rounded-full transition-all duration-300 ${idx === activeIndex ? "w-6 bg-[#2de8b0]" : "w-2 bg-white/20"}`} />
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
          <div key={i} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-default">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}
