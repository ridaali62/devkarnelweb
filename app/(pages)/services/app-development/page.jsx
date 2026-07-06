import AppHero from "@/app/components/app-components/AppHero";
import ServicesSection from "@/app/components/web-components/ServicesSection";
import DevskarnelSection from "@/app/components/web-components/DevskarnelSection";
import Review from "@/app/components/web-components/Review";
import WebFAQ from "@/app/components/web-components/WebFAQ";
import CTASection from "@/app/components/web-components/CTASection";

const appServices = [
  {
    title: "React Native Apps",
    desc: "Cross-platform apps with native performance on both iOS and Android from a single codebase.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="2" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 18h.01" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Flutter Development",
    desc: "Beautiful, natively compiled apps with expressive UIs using Google's Flutter framework.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Native iOS & Android",
    desc: "Platform-specific development with Swift and Kotlin for maximum OS-level integration and performance.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2" />
        <path d="M8 21h8M12 17v4" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Progressive Web Apps",
    desc: "Installable, offline-capable web apps that deliver a native experience on any device or browser.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Backend & API Integration",
    desc: "Firebase, REST APIs, GraphQL, and Supabase — seamlessly connected to power your app's data layer.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <ellipse cx="12" cy="5" rx="9" ry="3" strokeWidth="2" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "App Store Launch",
    desc: "End-to-end submission support for App Store and Google Play — we handle every detail of the release.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" strokeWidth="2" strokeLinecap="round" />
        <polyline points="17 8 12 3 7 8" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="3" x2="12" y2="15" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const appFaqs = [
  {
    question: "How long does it take to build a mobile app?",
    answer: "A typical MVP takes 6–12 weeks depending on complexity. We'll give you a detailed timeline after the discovery call with clear milestones.",
  },
  {
    question: "Do you build for both iOS and Android?",
    answer: "Yes. We build cross-platform apps with React Native or Flutter, or fully native apps if your project demands it — you choose the approach that fits your budget and requirements.",
  },
  {
    question: "Will I own the source code?",
    answer: "Absolutely. You own 100% of the code, assets, and intellectual property upon project completion. No lock-in, no licensing fees.",
  },
  {
    question: "Can you integrate with my existing backend?",
    answer: "Yes — we work with REST APIs, GraphQL, Firebase, Supabase, Node.js, and most modern backend systems, whether built by us or your existing team.",
  },
  {
    question: "Do you offer post-launch maintenance?",
    answer: "Yes — we offer ongoing maintenance plans covering OS updates, bug fixes, and feature additions. We'll keep your app running smoothly as platforms evolve.",
  },
  {
    question: "Can I see examples of apps you've built?",
    answer: "Yes! Head over to our Case Studies page to see real projects and their outcomes. We're happy to share more details on a discovery call.",
  },
];

export default function AppDevelopmentPage() {
  return (
    <>
      <AppHero />
      <ServicesSection
        subtitle="App Development"
        title="Everything your mobile app needs to succeed."
        services={appServices}
      />
      <DevskarnelSection
        heading="High-Performance Mobile Apps"
        description="As a results-driven app development agency, we build mobile apps that engage users, drive conversions, and scale with your business."
      />
      <Review />
      <WebFAQ
        subtitle="App Development"
        title="Common Questions"
        faqData={appFaqs}
      />
      <CTASection
        headline="Ready to Build an App That Actually Grows Your Business?"
        description="Let's discuss your app idea, tech stack, and timeline. Tell us about your project or schedule a free strategy call below."
      />
    </>
  );
}
