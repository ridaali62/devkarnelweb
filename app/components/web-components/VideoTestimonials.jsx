"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Play } from "lucide-react";
import { urbanist } from "@/app/fonts";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const VideoTestimonials = () => {
  const sectionRef = useRef(null);
  const videoCardRef = useRef(null);
  const textRef = useRef(null);
  // State to handle play overlay
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Header Text
      gsap.from(textRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Animate Video Card (Scale & Fade)
      gsap.from(videoCardRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 50,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: videoCardRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 flex flex-col items-center overflow-hidden ${urbanist.className}`}
      style={{
        background: `
          radial-gradient(circle at 0% 0%, rgba(0,0,0,1) 0%, transparent 70%),
          radial-gradient(circle at 100% 0%, rgba(0,0,0,1) 0%, transparent 70%),
          radial-gradient(circle at 50% 50%, rgba(45, 232, 176, 0.25) 0%, transparent 60%),
          linear-gradient(180deg, #000000 0%, #000000 35%, #0F7C6E 50%, #000000 65%, #000000 100%)
        `,
      }}
    >
      {/* 1. Badge & Header */}
      <div ref={textRef} className="text-center mb-16 z-10">
        <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/70 text-xs font-medium uppercase tracking-widest mb-6">
          Video Testimonials
        </span>
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Hear from our <span className="text-[#2de8b0]">happy clients</span>
        </h2>
        <p className="text-white/50 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Real stories. Real experiences. Real satisfaction.
        </p>
      </div>

      {/* 2. Video Player Mockup */}
      <div className="relative w-full max-w-4xl z-10 group" ref={videoCardRef}>
        {/* Glow Effect behind the video */}
        <div className="absolute -inset-1 bg-linear-to-r from-[#2de8b0]/20 to-[#0F7C6E]/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
        
        <div className="relative bg-black rounded border border-white/10 overflow-hidden shadow-2xl">
          {/* Main Thumbnail/Iframe Area */}
          <div 
            className="relative aspect-video w-full overflow-hidden cursor-pointer bg-black"
            onClick={() => setIsPlaying(true)}
          >
            {isPlaying ? (
              <iframe
                src="https://www.youtube.com/embed/HBa1FugVjfU?autoplay=1&rel=0"
                title="AfterRender Testimonials"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            ) : (
              <>
                {/* Fallback Image / Thumbnail from YouTube */}
                <img 
                  src="https://i.ytimg.com/vi/HBa1FugVjfU/maxresdefault.jpg" 
                  alt="Video Thumbnail" 
                  className="w-full h-full object-cover opacity-60 transition duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#2de8b0] flex items-center justify-center shadow-[0_0_30px_rgba(45,232,176,0.5)] transform transition duration-500 group-hover:scale-110">
                    <Play className="text-black fill-current ml-1" size={32} />
                  </div>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-8 left-8 text-left">
                  <h3 className="text-white text-2xl font-bold mb-1">Devskarnel Client Testimonials</h3>
                  <p className="text-white/60 text-sm">Watch the success stories</p>
                </div>
              </>
            )}
          </div>

          {/* Bottom Branding Bar */}
          <div className="bg-white/3 py-6 text-center border-t border-white/5">
              <p className="text-white font-semibold tracking-wide uppercase text-sm">Client Success Stories</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;