"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ExternalLink, Layers } from "lucide-react";
import { urbanist } from "@/app/fonts";

const PROJECTS = [
  { id: 0, title: "Prime Supps", subtitle: "Premium Supplements & Gym", category: "E-Commerce", platform: "Custom Code", thumbnail: "https://res.cloudinary.com/dlurrugno/image/upload/v1770205987/supps_vm41cl.png", liveUrl: "https://prime-supps.vercel.app", tags: ["Next.js","Fitness","E-Commerce"], accent: "#ef4444" },
  { id: 1, title: "Magnetik", subtitle: "TikTok Shop Marketing", category: "Business", platform: "Custom Code", thumbnail: "/images/our-work/magnetik.png", liveUrl: "https://magnetik.vercel.app/", tags: ["Marketing","Strategy","TikTok"], accent: "#8b5cf6" },
  { id: 2, title: "Darkdrop Coffee", subtitle: "Artisanal Roastery", category: "E-Commerce", platform: "Custom Code", thumbnail: "/images/our-work/coffee.png", liveUrl: "https://darkdrop-coffee.vercel.app/", tags: ["Custom Code","Small Batch","Next.js"], accent: "#b45309" },
  { id: 3, title: "Freelancer30", subtitle: "Freelancing Education Platform", category: "Business", platform: "Custom Code", thumbnail: "/images/our-work/freelancer30.png", liveUrl: "https://freelancer30xar.vercel.app/", tags: ["Custom Code","MongoDB","UX"], accent: "#0284c7" },
  { id: 4, title: "TMG Van", subtitle: "Trade Motor Group", category: "Business", platform: "Custom Code", thumbnail: "/images/our-work/tmgvan1.png", liveUrl: "https://tmgvan.vercel.app", tags: ["Next.js","Stripe","MongoDB"], accent: "#059669" },
  { id: 5, title: "NextTrip", subtitle: "Tour & Travel", category: "Business", platform: "Custom Code", thumbnail: "/images/our-work/nextrip.png", liveUrl: "https://nextripxar.vercel.app/", tags: ["Custom Code","Tailwind","UI/UX"], accent: "#0891b2" },
  { id: 7, title: "Mobee Medical", subtitle: "Healthcare Website", category: "Healthcare", platform: "Custom Code", thumbnail: "/images/our-work/mobeemedical.png", liveUrl: "https://mobeemedical.vercel.app", tags: ["Custom Code","Healthcare","UI/UX"], accent: "#10b981" },
  { id: 8, title: "Jave", subtitle: "E-Commerce Platform", category: "E-Commerce", platform: "Custom Code", thumbnail: "/images/our-work/jave.png", liveUrl: "https://javexafterrender.vercel.app", tags: ["Custom Code","Next.js","Stripe"], accent: "#f59e0b" },
  { id: 9, title: "Deigo Hair Studio", subtitle: "Premium Salon", category: "Business", platform: "Custom Code", thumbnail: "/images/our-work/deigo.png", liveUrl: "https://deigo.vercel.app", tags: ["Next.js","Salon","UI/UX"], accent: "#ec4899" },
  { id: 10, title: "Render Store", subtitle: "Online Shop", category: "E-Commerce", platform: "Custom Code", thumbnail: "/images/our-work/renderstore.png", liveUrl: "https://renderstore.vercel.app", tags: ["Custom Code","Firebase","Stripe"], accent: "#6366f1" },
  { id: 11, title: "Zero Ice Store", subtitle: "Online Shop", category: "E-Commerce", platform: "WordPress", thumbnail: "/images/our-work/zeroice.png", liveUrl: "https://zeroicexar.kesug.com/", tags: ["WordPress","Elementor","Astra"], accent: "#0891b2" },
  { id: 12, title: "WAVEBOX SaaS", subtitle: "SaaS Landing Page", category: "Business", platform: "WordPress", thumbnail: "/images/our-work/waveboxsaas.png", liveUrl: "https://indigo-dotterel-636649.hostingersite.com/", tags: ["WordPress","Elementor","Astra"], accent: "#0891b2" },
  { id: 13, title: "Outdoor Adventure Car Wash", subtitle: "Landing Page", category: "Business", platform: "WordPress", thumbnail: "/images/our-work/outdoor.png", liveUrl: "https://steelblue-otter-789796.hostingersite.com/", tags: ["WordPress","Elementor","Astra"], accent: "#0891b2" },
  { id: 14, title: "Language Learning", subtitle: "Landing Page", category: "Business", platform: "WordPress", thumbnail: "/images/our-work/langl.png", liveUrl: "https://darkseagreen-ferret-910390.hostingersite.com/", tags: ["WordPress","Elementor","Astra"], accent: "#0891b2" },
];

const FILTERS = [
  { key: "All", label: "All Work" },
  { key: "WordPress", label: "WordPress" },
  { key: "Custom Code", label: "Custom Code" },
  { key: "E-Commerce", label: "E-Commerce" },
  { key: "Business", label: "Business" },
  { key: "Healthcare", label: "Healthcare" },
];

const PLATFORM_COLORS = {
  WordPress: "#3858e9",
  Shopify: "#96bf48",
  "Custom Code": "#2de8b0",
};

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(el); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      className="relative flex flex-col rounded-2xl overflow-hidden border border-white/8 bg-white/[0.03] transition-all duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out, border-color 0.3s ease, box-shadow 0.3s ease",
        borderColor: hovered ? `${project.accent}40` : "rgba(255,255,255,0.08)",
        boxShadow: hovered ? `0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px ${project.accent}20` : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <div className="relative w-full overflow-hidden bg-white/5" style={{ aspectRatio: "16/10" }}>
        <Image
          src={project.thumbnail}
          alt={`${project.title} — ${project.subtitle}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
          onError={(e) => { e.target.src = `https://picsum.photos/seed/${project.id + 20}/800/500`; }}
        />

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
          style={{ background: "rgba(1,5,4,0.65)", backdropFilter: "blur(4px)", opacity: hovered ? 1 : 0 }}
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-semibold rounded-full text-black transition-transform duration-300"
            style={{
              background: project.accent,
              padding: "9px 20px",
              fontSize: "12.5px",
              boxShadow: `0 6px 22px ${project.accent}55`,
              transform: hovered ? "translateY(0) scale(1)" : "translateY(10px) scale(0.94)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={13} strokeWidth={2.5} />
            View Live Site
          </a>
        </div>

        {/* Platform badge */}
        <div
          className="absolute top-2.5 left-2.5 flex items-center gap-1.5 rounded-full px-2.5 py-1 bg-black/60 border border-white/10"
          style={{ backdropFilter: "blur(8px)", fontSize: "9.5px", fontWeight: 600, color: "rgba(255,255,255,0.7)", letterSpacing: "0.04em" }}
        >
          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: PLATFORM_COLORS[project.platform] || "#888" }} />
          {project.platform}
        </div>

        {/* ID badge */}
        <div
          className="absolute top-2.5 right-2.5 rounded-lg px-2 py-1"
          style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)", color: "rgba(255,255,255,0.35)", fontSize: "9px", fontWeight: 700, letterSpacing: "0.1em" }}
        >
          #{String(project.id).padStart(2, "0")}
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 px-4 pt-3.5 pb-4 sm:px-5 sm:pt-4 sm:pb-5">
        <div className="flex gap-1.5 flex-wrap mb-2.5">
          {project.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full"
              style={{
                background: `${project.accent}15`,
                color: project.accent,
                padding: "2.5px 8px",
                fontSize: "9.5px",
                letterSpacing: "0.04em",
                fontWeight: 600,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <h3
          className="font-bold leading-tight mb-1 transition-colors duration-200"
          style={{
            fontSize: "clamp(15px,2.5vw,17px)",
            letterSpacing: "-0.018em",
            color: hovered ? project.accent : "#ffffff",
          }}
        >
          {project.title}
        </h3>
        <p className="mb-3 leading-relaxed text-white/40" style={{ fontSize: "12.5px" }}>
          {project.subtitle}
        </p>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/8">
          <span className="font-semibold uppercase text-white/25" style={{ fontSize: "9.5px", letterSpacing: "0.14em" }}>
            {project.category}
          </span>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200"
            style={{
              background: hovered ? `${project.accent}20` : "rgba(255,255,255,0.05)",
              color: hovered ? project.accent : "rgba(255,255,255,0.3)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <ArrowUpRight
              size={14}
              style={{ transform: hovered ? "translate(1px,-1px)" : "none", transition: "transform 0.2s ease" }}
            />
          </a>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{
          background: project.accent,
          transformOrigin: "left",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94)",
        }}
      />
    </article>
  );
};

const FilterPill = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className="rounded-full border font-medium transition-all duration-200 whitespace-nowrap cursor-pointer outline-none"
    style={{
      padding: "6px 14px",
      fontSize: "12.5px",
      fontWeight: isActive ? 600 : 500,
      background: isActive ? "#2de8b0" : "rgba(255,255,255,0.05)",
      color: isActive ? "#010504" : "rgba(255,255,255,0.5)",
      borderColor: isActive ? "#2de8b0" : "rgba(255,255,255,0.1)",
      boxShadow: isActive ? "0 4px 14px rgba(45,232,176,0.3)" : "none",
    }}
  >
    {label}
  </button>
);

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = PROJECTS.filter((p) =>
    activeFilter === "All" ? true : p.platform === activeFilter || p.category === activeFilter
  );

  return (
    <section
      id="portfolio"
      aria-label="Portfolio"
      className={`relative w-full py-16 sm:py-24 lg:py-32 bg-[#010504] overflow-hidden ${urbanist.className}`}
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none opacity-[0.04]"
        style={{ background: "radial-gradient(ellipse, #2de8b0 0%, transparent 70%)" }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[#2de8b0] text-xs font-medium tracking-wider uppercase">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Our Portfolio
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-2">
                Work that{" "}
                <span className="text-[#2de8b0]">speaks</span>{" "}
                for itself
              </h2>
              <p className="text-white/40 text-sm sm:text-base">
                Real projects, real results — across platforms and industries.
              </p>
            </div>
            <p className="text-white/25 text-xs font-medium shrink-0">
              {filtered.length} project{filtered.length !== 1 ? "s" : ""}
              {activeFilter !== "All" && <span className="text-[#2de8b0] ml-1">· {activeFilter}</span>}
            </p>
          </div>

          <div className="mt-6 h-px bg-white/8" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
          {FILTERS.map((f) => (
            <FilterPill key={f.key} label={f.label} isActive={activeFilter === f.key} onClick={() => setActiveFilter(f.key)} />
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filtered.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-white/20">
              <Layers size={38} strokeWidth={1} className="mb-4 opacity-40" />
              <p className="text-sm font-medium">No projects match this filter</p>
            </div>
          ) : (
            filtered.map((project) => (
              <ProjectCard key={`${activeFilter}-${project.id}`} project={project} />
            ))
          )}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10 sm:mt-14">
          <a
            href="https://calendly.com/afterrenderagency/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-3.5 rounded-xl text-black font-bold text-sm transition-all duration-200 hover:brightness-110 active:scale-95"
            style={{ backgroundColor: "#2de8b0", boxShadow: "0 8px 30px rgba(45,232,176,0.25)" }}
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
