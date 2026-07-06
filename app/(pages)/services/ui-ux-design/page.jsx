import UIUXHero from "@/app/components/uiux-components/UIUXHero";
import ServicesSection from "@/app/components/web-components/ServicesSection";
import DevskarnelSection from "@/app/components/web-components/DevskarnelSection";
import Review from "@/app/components/web-components/Review";
import WebFAQ from "@/app/components/web-components/WebFAQ";
import CTASection from "@/app/components/web-components/CTASection";

const uiuxServices = [
  {
    title: "User Research",
    desc: "Interviews, surveys, and usability studies that uncover what your users actually need — not just what they say they want.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeWidth="2" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" strokeWidth="2" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Information Architecture",
    desc: "Sitemaps, user flow mapping, and content hierarchy designed for intuitive navigation from first click to conversion.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
        <path d="M3 9h18M9 21V9" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Wireframing",
    desc: "Low and high-fidelity wireframes in Figma that align your team before a single line of code is written.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2" />
        <path d="M8 21h8M12 17v4M6 7h4M6 11h8" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Interactive Prototyping",
    desc: "Clickable, testable prototypes that let you validate ideas with real users before any development begins.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <polygon points="5 3 19 12 5 21 5 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Visual Design",
    desc: "Pixel-perfect UI that expresses your brand identity with consistency, visual hierarchy, and impact.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <polygon points="12 2 2 7 12 12 22 7 12 2" strokeWidth="2" strokeLinecap="round" />
        <polyline points="2 17 12 22 22 17" strokeWidth="2" strokeLinecap="round" />
        <polyline points="2 12 12 17 22 12" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Design Systems",
    desc: "Component libraries, design tokens, and style guides that ensure brand consistency at any scale.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" strokeWidth="2" strokeLinecap="round" />
        <rect x="14" y="3" width="7" height="7" strokeWidth="2" strokeLinecap="round" />
        <rect x="14" y="14" width="7" height="7" strokeWidth="2" strokeLinecap="round" />
        <rect x="3" y="14" width="7" height="7" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const uiuxFaqs = [
  {
    question: "What tools do you use for design?",
    answer: "We primarily work in Figma for wireframing, prototyping, and building design systems. We also use FigJam for workshops, user journey mapping, and collaborative sessions.",
  },
  {
    question: "Do you work with our existing brand identity?",
    answer: "Absolutely. We adapt every design to your existing brand guidelines, colors, and typography — or help evolve them if a refresh is needed.",
  },
  {
    question: "How many revision rounds are included?",
    answer: "Every project includes structured review rounds scoped clearly upfront. We work collaboratively so revisions are focused and efficient — no surprise overages.",
  },
  {
    question: "Can you also build what you design?",
    answer: "Yes — we offer full-stack development alongside design. Many clients engage us for both to ensure the design intent is perfectly preserved in the final product.",
  },
  {
    question: "How long does a UI/UX project take?",
    answer: "A typical product design project (research through final handoff) takes 4–8 weeks. Standalone wireframe or visual design projects can be completed in 1–3 weeks.",
  },
  {
    question: "What's included in the design handoff?",
    answer: "You receive annotated Figma files with developer specs, exported assets, a component library, and a style guide. We also offer a live handoff call with your dev team.",
  },
];

export default function UIUXDesignPage() {
  return (
    <>
      <UIUXHero />
      <ServicesSection
        subtitle="UI / UX Design"
        title="Every touchpoint crafted to engage, convert, and retain."
        services={uiuxServices}
      />
      <DevskarnelSection
        heading="Purposeful Design That Drives Results"
        description="As a results-driven design agency, we craft digital experiences that resonate with users, convert visitors, and grow with your business."
      />
      <Review />
      <WebFAQ
        subtitle="UI / UX Design"
        title="Common Questions"
        faqData={uiuxFaqs}
      />
      <CTASection
        headline="Ready for a Design That Actually Converts?"
        description="Let's talk about your users, your goals, and how great design can turn your product into something people love. Schedule a free consultation below."
      />
    </>
  );
}
