"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Logo from "./Logo";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const socialLinks = [
  { name: "Facebook", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z", url: "#" },
  { name: "X", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z", url: "#" },
  { name: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z", url: "#" },
];

const links = {
  solutions: [
    { name: "Web Development", url: "/services/website-development" },
    { name: "App Development", url: "/services/app-development" },
    { name: "UI / UX Design", url: "/services/ui-ux-design" },
    { name: "SEO Optimization", url: "/services/seo-optimization" },
    { name: "Logo Design", url: "/services/logo-design" },
  ],
  company: [
    { name: "Case Studies", url: "/case-studies" },
    { name: "Testimonials", url: "#reviews" },
    { name: "Contact", url: "/contact" },
  ],
};

export default function Footer() {
  const footerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = contentRef.current?.querySelectorAll(".footer-animate");
      if (elements?.length) {
        gsap.fromTo(
          elements,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: footerRef.current, start: "top 85%", once: true },
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#010504] overflow-hidden"
      style={{ background: "#010504" }}
    >
      {/* Glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#2de8b0] opacity-20 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#010504]/50 to-[#010504]" />
      </div>

      <div ref={contentRef} className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="footer-animate border-t border-white/10 mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="footer-animate text-center md:text-left">
            <Logo size="sm" />
            <p className="text-white/50 text-sm mb-6 max-w-xs mx-auto md:mx-0">
              Crafting digital experiences that inspire and engage.
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="group w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:border-[#2de8b0]/40 hover:scale-105"
                  aria-label={social.name}
                >
                  <svg className="w-4 h-4 text-white/60 group-hover:text-[#2de8b0] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="footer-animate lg:col-span-1 grid grid-cols-2 gap-8 text-center md:text-left">
            <div>
              <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">Solutions</h4>
              <ul className="space-y-3">
                {links.solutions.map((link) => (
                  <li key={link.name}>
                    <a href={link.url} className="text-white/50 text-sm hover:text-[#2de8b0] transition-colors duration-300">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">Company</h4>
              <ul className="space-y-3">
                {links.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.url} className="text-white/50 text-sm hover:text-[#2de8b0] transition-colors duration-300">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div className="footer-animate text-center md:text-left lg:text-right">
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">Ready to start?</h4>
            <p className="text-white/40 text-sm mb-4">Book a free consultation and let&apos;s discuss your next project.</p>
            <a
              href="https://calendly.com/afterrenderagency/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 rounded-lg bg-[#2de8b0] text-black text-sm font-semibold transition-all duration-300 hover:bg-[#1bc497] hover:shadow-[0_0_20px_rgba(45,232,176,0.3)]"
            >
              Book a call
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-animate border-t border-white/10 pt-8">
          <p className="text-center text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Devskarnel. All rights reserved.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#2de8b0]/30 to-transparent" />
    </footer>
  );
}
