"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { urbanist } from "@/app/fonts";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function CTASection({
    headline = "Ready to Get a Website That Actually Grows Your Business?",
    description = "Let's discuss how we can transform your digital presence into a high-converting engine. Tell us about your project, ask questions, or schedule a free strategy call below.",
}) {
    const containerRef = useRef(null);
    const headlineRef = useRef(null);
    const paragraphRef = useRef(null);
    const buttonRef = useRef(null);
    const backgroundGlowRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
            });

            tl.fromTo(
                headlineRef.current,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
            )
                .fromTo(
                    paragraphRef.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8 },
                    "-=0.6"
                )
                .fromTo(
                    buttonRef.current,
                    { opacity: 0, scale: 0.9, y: 20 },
                    { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" },
                    "-=0.5"
                );

            gsap.to(backgroundGlowRef.current, {
                opacity: 0.6,
                scale: 1.1,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section
            style={{
                background: `
                    radial-gradient(circle at 0% 0%, rgba(0,0,0,1) 0%, transparent 70%),
                    radial-gradient(circle at 100% 0%, rgba(0,0,0,1) 0%, transparent 70%),
                    radial-gradient(circle at 0% 100%, rgba(0,0,0,1) 0%, transparent 70%),
                    radial-gradient(circle at 100% 100%, rgba(0,0,0,1) 0%, transparent 70%),
                    radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.4) 0%, transparent 60%),
                    linear-gradient(180deg, #000000 0%, #000000 35%, #064e3b 50%, #000000 65%, #000000 100%)
                `
            }}
            ref={containerRef}
            className={`relative bg-black py-20 px-4 sm:px-6 md:py-28 md:px-12 overflow-hidden ${urbanist.className}`}
        >
            <div
                ref={backgroundGlowRef}
                className="absolute -bottom-48 -left-48 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none opacity-30 z-0"
            />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h2
                    ref={headlineRef}
                    className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight"
                >
                    <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                        {headline}
                    </span>
                </h2>

                <p
                    ref={paragraphRef}
                    className="text-white/60 text-sm sm:text-base md:text-lg mt-6 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    {description}
                </p>

                <div ref={buttonRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                    <a href="https://calendly.com/afterrenderagency/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-500 text-white font-bold text-sm sm:text-base transition-all duration-300 hover:bg-emerald-400 hover:scale-[1.03] hover:shadow-[0_15px_40px_rgba(16,185,129,0.4)] active:scale-[0.97]">
                            Request a Quote
                        </button>
                    </a>

                    <span className="text-white/40 text-sm font-medium hidden sm:block">or</span>

                    <a
                        href="mailto:devskarnel@gmail.com"
                        className="text-white/70 hover:text-white text-sm sm:text-base font-semibold border-b border-emerald-500/30 hover:border-emerald-500 transition-colors pb-0.5"
                    >
                        devskarnel@gmail.com
                    </a>
                </div>
            </div>
        </section>
    );
}
