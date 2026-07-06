"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { urbanist } from "@/app/fonts";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const defaultServices = [
    {
        title: "Corporate & Business",
        desc: "Make a powerful first impression. We build polished, credibility-building sites that communicate brand values.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
    {
        title: "eCommerce Development",
        desc: "Sell products and services online with a fast, secure store. We handle payment integrations and optimized checkout.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
        ),
    },
    {
        title: "WordPress Development",
        desc: "Flexible, scalable, and easy to manage. Custom themes and plugins tailored to your exact business needs.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 11-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
        ),
    },
    {
        title: "Website Redesigns",
        desc: "We transform underperforming websites into modern, high-converting digital experiences without starting from scratch.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        ),
    },
    {
        title: "Maintenance & Security",
        desc: "Keep your site fast and secure. We provide regular security audits, updates, and performance optimization.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        title: "Mobile-First Design",
        desc: "Built mobile-first to ensure a perfect experience on any device, screen, or browser—guaranteed.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
    },
];

export default function ServicesSection({
    subtitle = "Our Expertise",
    title = "Tailored digital solutions for modern brands.",
    services = null,
}) {
    const items = services || defaultServices;
    const containerRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                itemsRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    },
                }
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
            }} className={`bg-black py-16 sm:py-24 ${urbanist.className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
                {/* Header Text */}
                <div className="mb-16">
                    <h2 className="text-[#b4f481] text-sm font-bold uppercase tracking-[0.3em] mb-4">{subtitle}</h2>
                    <p className="text-white text-3xl sm:text-4xl md:text-5xl font-bold max-w-2xl leading-tight">
                        {title}
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((service, index) => (
                        <Link
                            key={index}
                            href="/contact"
                            ref={(el) => (itemsRef.current[index] = el)}
                            className="group relative p-8 rounded-3xl bg-white/3 border border-white/10 hover:border-[#b4f481]/30 transition-all duration-500 overflow-hidden block"
                        >
                            {/* Subtle Gradient Hover Effect */}
                            <div className="absolute inset-0 bg-linear-to-br from-[#b4f481]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Icon Container */}
                            <div className="relative z-10 w-12 h-12 rounded-2xl bg-[#b4f481]/10 flex items-center justify-center text-[#b4f481] mb-6 group-hover:scale-110 transition-transform duration-500">
                                {service.icon}
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-white text-xl font-bold mb-3 group-hover:text-[#b4f481] transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-white/50 leading-relaxed text-sm group-hover:text-white/70 transition-colors duration-300">
                                    {service.desc}
                                </p>
                            </div>

                            {/* Corner Arrow → /contact */}
                            <div className="absolute bottom-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg className="w-5 h-5 text-[#b4f481]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}