import LogoHero from "@/app/components/logo-components/LogoHero";
import LogoPricing from "@/app/components/logo-components/LogoPricing";
import ServicesSection from "@/app/components/web-components/ServicesSection";
import DevskarnelSection from "@/app/components/web-components/DevskarnelSection";
import Review from "@/app/components/web-components/Review";
import WebFAQ from "@/app/components/web-components/WebFAQ";
import CTASection from "@/app/components/web-components/CTASection";

const logoServices = [
  {
    title: "Brand Identity Design",
    desc: "A complete logo system — primary logo, icon mark, wordmark — built with the rules that keep your brand consistent at every size.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Logo Refresh",
    desc: "Modernize an outdated logo while preserving the brand recognition you've already built. Evolution, not revolution.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M23 4v6h-6M1 20v-6h6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Brand Guidelines",
    desc: "A comprehensive brand bible — color codes, typography rules, logo do's and don'ts — so your brand stays consistent everywhere.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeWidth="2" strokeLinecap="round" />
        <polyline points="14 2 14 8 20 8" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="13" x2="8" y2="13" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="17" x2="8" y2="17" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Business Card & Stationery",
    desc: "Letterheads, business cards, and branded stationery that carry your logo's identity into every physical touchpoint.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="5" width="20" height="14" rx="2" strokeWidth="2" strokeLinecap="round" />
        <path d="M2 10h20" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Social Media Kit",
    desc: "Profile pictures, cover photos, and branded post templates — optimized for every platform so your presence is always polished.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="18" cy="5" r="3" strokeWidth="2" /><circle cx="6" cy="12" r="3" strokeWidth="2" /><circle cx="18" cy="19" r="3" strokeWidth="2" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" strokeWidth="2" strokeLinecap="round" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Logo Animation",
    desc: "Bring your logo to life with a smooth motion version for video intros, website loaders, and digital presentations.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <polygon points="5 3 19 12 5 21 5 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const logoFaqs = [
  {
    question: "How many logo concepts will I receive?",
    answer: "We start with 3 distinct logo concepts based on your brief. After you choose a direction, we refine it through revision rounds until it's exactly right.",
  },
  {
    question: "How long does logo design take?",
    answer: "Initial concepts are delivered within 5–7 business days. Final files are typically ready within 2 weeks, depending on revision rounds and your feedback speed.",
  },
  {
    question: "What file formats will I receive?",
    answer: "You get full source files plus exports in PNG, SVG, PDF, and EPS — covering web, print, and every other medium you'll ever need.",
  },
  {
    question: "How many revisions are included?",
    answer: "Our standard package includes 3 rounds of revisions. Additional rounds are available at a small fee. Most clients finalize within 2 rounds.",
  },
  {
    question: "Do you offer full brand identity packages?",
    answer: "Yes — beyond the logo, we can build out your complete brand identity: color system, typography, brand guidelines, stationery, and social media kit.",
  },
  {
    question: "What information do you need to get started?",
    answer: "A short brief covering your business name, industry, target audience, style preferences (modern, classic, minimal, bold), and any references you like. We guide you through it on the kickoff call.",
  },
];

export default function LogoDesignPage() {
  return (
    <>
      <LogoHero />
      <ServicesSection
        subtitle="Logo Design"
        title="Everything your brand needs to make a lasting impression."
        services={logoServices}
      />
      <LogoPricing />
      <DevskarnelSection
        heading="Brand Identity That Builds Trust"
        description="As a results-driven design agency, we craft logos and brand systems that communicate who you are — and make sure people remember it."
      />
      <Review />
      <WebFAQ
        subtitle="Logo Design"
        title="Common Questions"
        faqData={logoFaqs}
      />
      <CTASection
        headline="Ready to Build a Brand People Remember?"
        description="Let's talk about your business, your audience, and the impression you want to make. We'll turn that into a logo you're proud to put on everything."
      />
    </>
  );
}
