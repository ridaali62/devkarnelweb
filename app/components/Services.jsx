"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    number: "01",
    title: "App Development",
    desc: "High-performance native and cross-platform mobile apps — React Native, Flutter, iOS & Android — built to engage users and scale with your business.",
    cta: "Build Your App",
    href: "/services/app-development",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="2" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 18h.01" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    gradient: "from-violet-500/10 via-transparent to-transparent",
    accentColor: "#a78bfa",
  },
  {
    number: "02",
    title: "Web Development",
    desc: "Scalable, lightning-fast websites and web apps built with Next.js — designed for SEO, performance, and conversion from day one.",
    cta: "Start Your Project",
    href: "/services/website-development",
    badge: "Most Popular",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 21h8M12 17v4" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    gradient: "from-[#2de8b0]/10 via-transparent to-transparent",
    accentColor: "#2de8b0",
    wide: true,
  },
  {
    number: "03",
    title: "UI / UX Design",
    desc: "Intuitive interfaces and seamless user journeys backed by real user research — turning visitors into loyal, returning customers.",
    cta: "Design Your Product",
    href: "/services/ui-ux-design",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    gradient: "from-pink-500/10 via-transparent to-transparent",
    accentColor: "#f472b6",
  },
  {
    number: "04",
    title: "SEO Optimization",
    desc: "Data-driven SEO strategies that boost your search rankings, drive qualified organic traffic, and deliver results that compound month after month.",
    cta: "Get a Free Audit",
    href: "/services/seo-optimization",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    gradient: "from-blue-500/10 via-transparent to-transparent",
    accentColor: "#60a5fa",
  },
  {
    number: "05",
    title: "Logo Design",
    desc: "Memorable brand identities and logo systems crafted to communicate who you are — and make sure people never forget it.",
    cta: "Brand Your Business",
    href: "/services/logo-design",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    gradient: "from-amber-500/10 via-transparent to-transparent",
    accentColor: "#fbbf24",
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const headerRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true } }
      );
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.6, delay: i * 0.08, ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 88%", once: true } }
        );
      });
      gsap.fromTo(bottomRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: bottomRef.current, start: "top 92%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const regularCards = servicesData.filter((s) => !s.wide);
  const wideCard = servicesData.find((s) => s.wide);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full py-20 lg:py-28 overflow-hidden bg-[#010504]"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #2de8b0 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5">
            <svg className="w-3.5 h-3.5 text-[#2de8b0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-xs text-white/60 uppercase tracking-widest font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Services we offer</h2>
          <p className="text-white/40 text-sm sm:text-base max-w-xl mx-auto">
            End-to-end digital solutions to take your business from concept to launch.
          </p>
        </div>

        {/* Row 1: Wide card + 2 regular */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-4 sm:mb-5">

          {/* Wide card (Web Dev) */}
          {wideCard && (
            <div
              ref={(el) => (cardsRef.current[1] = el)}
              className="md:col-span-2 lg:col-span-2"
            >
              <Link href={wideCard.href} className="group relative flex flex-col sm:flex-row gap-0 overflow-hidden rounded-2xl border border-white/8 hover:border-[#2de8b0]/30 bg-[#060d0b] transition-all duration-500 hover:shadow-[0_0_50px_rgba(45,232,176,0.07)] min-h-52 block">
                <div className={`absolute inset-0 bg-gradient-to-br ${wideCard.gradient} opacity-100 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Decorative number */}
                <span className="absolute bottom-2 right-4 text-[130px] font-black text-white/[0.025] leading-none pointer-events-none select-none">
                  {wideCard.number}
                </span>

                <div className="relative z-10 flex flex-col justify-between p-7 sm:p-8 lg:p-10 w-full">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${wideCard.accentColor}18`, color: wideCard.accentColor }}
                    >
                      {wideCard.icon}
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-black text-[10px] font-bold uppercase tracking-wider"
                      style={{ background: wideCard.accentColor }}>
                      {wideCard.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">{wideCard.title}</h3>
                    <p className="text-white/45 text-sm sm:text-base leading-relaxed max-w-lg mb-5">{wideCard.desc}</p>

                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span className="text-sm font-semibold" style={{ color: wideCard.accentColor }}>{wideCard.cta}</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" style={{ color: wideCard.accentColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* App Dev card */}
          {regularCards[0] && (
            <ServiceCard service={regularCards[0]} index={0} refCb={(el) => (cardsRef.current[0] = el)} />
          )}
        </div>

        {/* Row 2: 3 regular cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {regularCards.slice(1).map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i + 2} refCb={(el) => (cardsRef.current[i + 2] = el)} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div ref={bottomRef} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#2de8b0] text-black text-sm font-bold text-center transition-all duration-200 hover:brightness-110 active:scale-95"
            style={{ boxShadow: "0 8px 30px rgba(45,232,176,0.2)" }}>
            Start a Project
          </Link>
          <Link href="/case-studies"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 text-sm font-semibold text-center transition-all duration-200 active:scale-95">
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, refCb }) {
  return (
    <div ref={refCb}>
      <Link
        href={service.href}
        className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 hover:border-white/20 bg-[#060d0b] transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] min-h-52 sm:min-h-64 block"
        style={{ "--accent": service.accentColor }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />

        {/* Decorative number */}
        <span className="absolute bottom-2 right-3 text-[100px] font-black text-white/[0.025] leading-none pointer-events-none select-none">
          {service.number}
        </span>

        <div className="relative z-10 flex flex-col justify-between p-6 sm:p-7 h-full">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shrink-0"
            style={{ background: `${service.accentColor}18`, color: service.accentColor }}
          >
            {service.icon}
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">{service.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed mb-4">{service.desc}</p>

            <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <span className="text-xs font-semibold" style={{ color: service.accentColor }}>{service.cta}</span>
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" style={{ color: service.accentColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
