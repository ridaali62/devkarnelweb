import SEOHero from "@/app/components/seo-components/SEOHero";
import ServicesSection from "@/app/components/web-components/ServicesSection";
import DevskarnelSection from "@/app/components/web-components/DevskarnelSection";
import Review from "@/app/components/web-components/Review";
import WebFAQ from "@/app/components/web-components/WebFAQ";
import CTASection from "@/app/components/web-components/CTASection";

const seoServices = [
  {
    title: "On-Page SEO",
    desc: "Title tags, meta descriptions, heading structure, and content optimization that search engines — and users — reward.",
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
    title: "Technical SEO",
    desc: "Core Web Vitals, crawlability, structured data, and site architecture improvements that unlock your ranking potential.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Keyword Research",
    desc: "Discover exactly what your ideal customers search for — and build a targeted strategy around those terms.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" strokeWidth="2" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Content Strategy",
    desc: "Topic clusters, pillar pages, and authority-building content plans that drive organic traffic compounding over time.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Link Building",
    desc: "Ethical, white-hat outreach campaigns to earn high-authority backlinks that boost your domain's credibility.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Local SEO",
    desc: "Google Business Profile optimization, local citations, and geo-targeted strategies to dominate your city's search results.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeWidth="2" />
        <circle cx="12" cy="10" r="3" strokeWidth="2" />
      </svg>
    ),
  },
];

const seoFaqs = [
  {
    question: "How long until I see SEO results?",
    answer: "Most clients see measurable improvements within 3–6 months. SEO compounds over time — the rankings you build in month 3 continue growing in month 12 and beyond.",
  },
  {
    question: "Do you guarantee first-page rankings?",
    answer: "No ethical SEO agency can guarantee specific rankings — Google's algorithm changes constantly. We focus on sustainable, long-term organic growth based on proven strategies.",
  },
  {
    question: "What's included in monthly SEO retainer?",
    answer: "Monthly SEO includes on-page optimization, content publishing, link building outreach, technical fixes, and a detailed performance report covering rankings, traffic, and conversions.",
  },
  {
    question: "Can you optimize my existing website?",
    answer: "Yes — we work with your current site regardless of the platform: WordPress, Shopify, Webflow, Next.js, or custom-built. No rebuild needed in most cases.",
  },
  {
    question: "What's the difference between on-page and technical SEO?",
    answer: "On-page SEO covers content and metadata. Technical SEO covers the infrastructure: site speed, crawlability, indexing, structured data, and Core Web Vitals. Both are essential.",
  },
  {
    question: "Do you work with businesses outside Pakistan?",
    answer: "Yes — we work with clients globally. Our strategies are tailored to your target market, whether it's local (Lahore, Karachi) or international (US, UK, UAE).",
  },
];

export default function SEOOptimizationPage() {
  return (
    <>
      <SEOHero />
      <ServicesSection
        subtitle="SEO Optimization"
        title="Every layer of SEO — technical, content, and authority."
        services={seoServices}
      />
      <DevskarnelSection
        heading="Data-Driven SEO That Delivers"
        description="As a results-driven SEO agency, we build organic growth strategies that connect your business to the right audience and compound over time."
      />
      <Review />
      <WebFAQ
        subtitle="SEO Optimization"
        title="Common Questions"
        faqData={seoFaqs}
      />
      <CTASection
        headline="Ready to Rank Higher and Grow Organically?"
        description="Start with a free SEO audit. Tell us about your site, your goals, and where you're losing traffic — we'll show you exactly how to fix it."
      />
    </>
  );
}
