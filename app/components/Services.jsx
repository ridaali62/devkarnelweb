"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    title: "App Development",
    desc: "Building high-performance native and cross-platform mobile solutions.",
    colSpan: "lg:col-span-1",
    image: "/images/service_images/appdev.png",
    href: "/services/app-development",
  },
  {
    title: "Web Development",
    desc: "Scalable, lightning-fast web applications built with modern frameworks.",
    colSpan: "lg:col-span-2",
    image: "/images/service_images/website.png",
    href: "/services/website-development",
  },
  {
    title: "UI / UX Design",
    desc: "Crafting intuitive interfaces and seamless user journeys that convert.",
    colSpan: "lg:col-span-1",
    image: "/images/service_images/uiux.png",
    href: "/services/ui-ux-design",
  },
  {
    title: "SEO Optimization",
    desc: "Boosting visibility and organic growth through data-driven strategies.",
    colSpan: "lg:col-span-1",
    image: "/images/service_images/seo1.png",
    href: "/services/seo-optimization",
  },
  {
    title: "Logo Design",
    desc: "Creating memorable brand identities that stand the test of time.",
    colSpan: "lg:col-span-1",
    image: "/images/service_images/website.png",
    href: "/services/logo-design",
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full py-20 lg:py-28 overflow-hidden bg-[#010504]"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #2de8b0 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <svg className="w-4 h-4 text-[#2de8b0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm text-white/70 uppercase tracking-wider font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4">Services we offer</h2>
          <p className="text-white/40 text-base sm:text-lg max-w-2xl mx-auto">End-to-end digital solutions to take your business from concept to launch.</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {servicesData.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={service.colSpan}
            >
              <Link
                href={service.href}
                className="relative group overflow-hidden rounded-xl flex flex-col
                  min-h-80 sm:min-h-96 lg:min-h-[420px]
                  transition-transform duration-300 ease-out
                  hover:scale-[1.02]
                  border border-white/10 hover:border-[#2de8b0]/30
                  bg-[#0a0f0d] cursor-pointer block"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    quality={75}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="absolute inset-0 z-10 bg-linear-to-t from-black/95 via-black/50 to-transparent" />
                <div className="absolute inset-0 z-10 bg-black/20 group-hover:bg-black/5 transition-colors duration-500" />

                <div className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-8">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">{service.title}</h3>
                    <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-md">{service.desc}</p>
                  </div>

                  <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <span className="text-[#2de8b0] text-sm font-medium">Learn more</span>
                    <svg className="w-4 h-4 text-[#2de8b0] group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-40 h-40 bg-[#2de8b0]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
