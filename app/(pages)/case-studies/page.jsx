"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CaseStudiesHero from "@/app/components/case-components/CaseStudiesHero";
import VideoTestimonials from "@/app/components/web-components/VideoTestimonials";
import Testimonials from "@/app/components/Testimonials";
import Contact from "@/app/components/Contact";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    title: "DarkDrop Coffee",
    category: "E-Commerce",
    tags: ["Next.js", "Tailwind CSS", "Stripe"],
    desc: "A premium e-commerce experience for a specialty coffee brand — built for speed, conversion, and brand storytelling.",
    results: [
      { label: "Online orders", value: "+40%" },
      { label: "Core Web Vitals", value: "98/100" },
      { label: "Bounce rate", value: "−28%" },
    ],
    image: "https://res.cloudinary.com/dlurrugno/image/upload/v1775905812/darkdrop-coffee.vercel.app__hd1aro.png",
  },
  {
    title: "The Magazine",
    category: "Publishing Platform",
    tags: ["Next.js", "Sanity CMS", "SEO"],
    desc: "A high-performance digital magazine with advanced SEO architecture and a seamless content workflow for editors.",
    results: [
      { label: "Monthly readers", value: "10k+" },
      { label: "Articles indexed", value: "200+" },
      { label: "Page load time", value: "0.8s" },
    ],
    image: "https://res.cloudinary.com/dlurrugno/image/upload/v1775905816/mag-cropped_ynegzt.png",
  },
  {
    title: "TMG Corporate",
    category: "Corporate Website",
    tags: ["React", "Node.js", "GSAP"],
    desc: "A polished corporate presence with custom animations and a lead generation funnel that tripled qualified enquiries.",
    results: [
      { label: "Lead generation", value: "3x" },
      { label: "Time on site", value: "+65%" },
      { label: "Mobile score", value: "95/100" },
    ],
    image: "https://res.cloudinary.com/dlurrugno/image/upload/v1775905815/tmgcropped_clpgiu.png",
  },
  {
    title: "Jave Cafe",
    category: "Restaurant & Ordering",
    tags: ["Next.js", "Firebase", "Tailwind CSS"],
    desc: "An online ordering platform for a modern cafe — complete with real-time order management and smooth UX.",
    results: [
      { label: "Online orders/week", value: "150+" },
      { label: "Menu update time", value: "< 5 min" },
      { label: "Customer rating", value: "4.9★" },
    ],
    image: "https://res.cloudinary.com/dlurrugno/image/upload/v1775905816/javecropped_jvo8uy.png",
  },
  {
    title: "ICE Platform",
    category: "SaaS / Technology",
    tags: ["React", "Node.js", "AWS"],
    desc: "A scalable SaaS dashboard for a fintech startup — handling complex data visualization with a clean, intuitive interface.",
    results: [
      { label: "Users in month 1", value: "500+" },
      { label: "Data load time", value: "< 200ms" },
      { label: "Uptime", value: "99.9%" },
    ],
    image: "https://res.cloudinary.com/dlurrugno/image/upload/v1775905817/icecropped_cnutjn.png",
  },
];

function ProjectsSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 85%", once: true },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      style={{
        background: `
          radial-gradient(circle at 0% 0%, rgba(0,0,0,1) 0%, transparent 70%),
          radial-gradient(circle at 100% 0%, rgba(0,0,0,1) 0%, transparent 70%),
          radial-gradient(circle at 0% 100%, rgba(0,0,0,1) 0%, transparent 70%),
          radial-gradient(circle at 100% 100%, rgba(0,0,0,1) 0%, transparent 70%),
          radial-gradient(circle at 50% 50%, rgba(45, 232, 176, 0.6) 0%, transparent 60%),
          linear-gradient(180deg, #000000 0%, #000000 35%, #0F7C6E 50%, #000000 65%, #000000 100%)
        `,
      }}
      className="py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-[#2de8b0] text-sm font-bold uppercase tracking-[0.3em] mb-4">Our Work</h2>
          <p className="text-white text-4xl md:text-5xl font-bold max-w-2xl leading-tight">
            Projects we&apos;re proud of.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`group flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} rounded-2xl border border-white/10 overflow-hidden hover:border-[#2de8b0]/20 transition-all duration-500 bg-white/3`}
            >
              {/* Image */}
              <div className="relative w-full lg:w-3/5 aspect-video lg:aspect-auto min-h-64 overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#2de8b0]/15 border border-[#2de8b0]/30 text-[#2de8b0] text-xs font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-2/5 p-8 lg:p-10 flex flex-col justify-center bg-white/[0.02]">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-[#2de8b0] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-6">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {project.results.map((result, j) => (
                    <div key={j} className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-[#2de8b0] mb-1">{result.value}</div>
                      <div className="text-white/40 text-[10px] leading-tight uppercase tracking-wider">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesHero />
      <ProjectsSection />
      <VideoTestimonials />
      <Testimonials />
      <Contact />
    </>
  );
}
