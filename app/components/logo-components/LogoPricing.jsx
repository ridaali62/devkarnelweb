"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { urbanist } from "@/app/fonts";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const features = [
    "Custom logo concepts",
    "Brand color palette selection",
    "Typography",
    "High-resolution files (PNG, SVG, PDF)",
    "Logo variations (icon, full logo, dark/light versions)",
];

export default function LogoPricing() {
    const cardRef = useRef(null);
    const titleRef = useRef(null);
    const priceRef = useRef(null);
    const buttonRef = useRef(null);
    const featureItemsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 85%",
                },
            });

            tl.fromTo(
                cardRef.current,
                { opacity: 0, y: 50, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" }
            )
                .fromTo(
                    [titleRef.current, priceRef.current],
                    { opacity: 0, x: -20 },
                    { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 },
                    "-=0.4"
                )
                .fromTo(
                    buttonRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" },
                    "-=0.2"
                )
                .fromTo(
                    featureItemsRef.current,
                    { opacity: 0, x: -15 },
                    { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" },
                    "-=0.3"
                );
        });

        return () => ctx.revert();
    }, []);

    return (
        <section
            style={{
                background: `
    /* 1. TOP-LEFT CORNER SHADOW */
    radial-gradient(circle at 0% 0%, rgba(0,0,0,1) 0%, transparent 70%),

    /* 2. TOP-RIGHT CORNER SHADOW */
    radial-gradient(circle at 100% 0%, rgba(0,0,0,1) 0%, transparent 70%),

    /* 3. BOTTOM-LEFT CORNER SHADOW */
    radial-gradient(circle at 0% 100%, rgba(0,0,0,1) 0%, transparent 70%),

    /* 4. BOTTOM-RIGHT CORNER SHADOW */
    radial-gradient(circle at 100% 100%, rgba(0,0,0,1) 0%, transparent 70%),

    /* 5. THE CENTER GLOW (Spotlight) */
    /* This sits on top of the base to give it a soft, circular neon feel */
    radial-gradient(circle at 50% 50%, rgba(45, 232, 176, 0.6) 0%, transparent 60%),

    /* 6. THE "SANDWICH" BASE */
    /* This defines the horizontal bands of color. 
       0-35% is solid black (top)
       50% is the emerald peak
       65-100% is solid black (bottom) */
    linear-gradient(180deg, #000000 0%, #000000 35%, #0F7C6E 50%, #000000 65%, #000000 100%)
  `
            }}
            className={`flex flex-col items-center  py-20 ${urbanist.className}`}
        >
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-white/10 bg-white/5">
                    <svg className="w-4 h-4 text-[#2de8b0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-sm text-white/70 uppercase tracking-wider font-medium">Pricing</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4">Logo Design Pricing</h2>
            </div>
            <div
                ref={cardRef}
                className="relative w-full max-w-md p-8 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden group"
            >
                {/* Animated Background Glow */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#b4f481]/10 blur-[80px] pointer-events-none group-hover:bg-[#b4f481]/20 transition-all duration-700" />

                {/* Card Header */}
                <div className="flex justify-between items-start mb-8">
                    <h3 ref={titleRef} className="text-[#b0f578]  text-3xl font-bold tracking-tight">
                        Pro
                    </h3>
                    <span className="px-4 py-1.5 rounded-full bg-emerald-500 text-[#ffffff] text-[10px] font-bold uppercase tracking-widest border border-[#b4f481]/20">
                        Most Popular
                    </span>
                </div>

                {/* Pricing */}
                <div ref={priceRef}>
                    <div className="flex items-baseline gap-1">
                        <span className="text-white text-5xl font-bold">$ 49.99</span>
                        <span className="text-white/40 text-lg">one-time</span>
                    </div>
                    <p className="mt-4 text-white/60 text-base leading-relaxed">
                        Make your brand instantly recognizable.
                    </p>
                </div>

                {/* CTA Button */}
                <button
                    ref={buttonRef}
                    className="w-full bg-emerald-500 hover:bg-emerald-400  py-4 mt-10 rounded-2xl  text-white/80 font-bold text-lg transition-all duration-300  hover:scale-[1.02] active:scale-[0.98] shadow-[0_10px_30px_rgba(180,244,129,0.3)]"
                >
                    Get Started
                </button>

                <div className="my-10 h-px w-full bg-white/10" />

                {/* Features */}
                <div>
                    <p className="text-white text-sm font-semibold uppercase tracking-wider mb-6 opacity-70">What's included:</p>
                    <ul className="space-y-5">
                        {features.map((feature, index) => (
                            <li
                                key={index}
                                ref={(el) => (featureItemsRef.current[index] = el)}
                                className="flex items-center gap-4 group/item"
                            >
                                <div className="shrink-0 w-5 h-5 rounded-full bg-emerald-500 hover:bg-emerald-400 flex items-center justify-center">
                                    <svg width="10" height="8" viewBox="0 0 14 10" fill="none">
                                        <path d="M1 5L5 9L13 1" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className="text-white/80 text-[0.95rem] font-medium group-hover/item:text-white transition-colors">
                                    {feature}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}