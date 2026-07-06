import CTASection from '@/app/components/web-components/CTASection'
import DevskarnelSection from '@/app/components/web-components/DevskarnelSection'
import Review from '@/app/components/web-components/Review'
import ServicesSection from '@/app/components/web-components/ServicesSection'
import WebFAQ from '@/app/components/web-components/WebFAQ'
import WebHero from '@/app/components/web-components/WebHero'
import React from 'react'

const page = () => {
  return (
    <>
    <WebHero/>
    <ServicesSection/>
    <DevskarnelSection
      heading="High-Performance Digital Solutions"
      description="As a results-driven web design company, we build websites that connect, convert, and scale."
    />
    <Review/>
    <WebFAQ/>
    <CTASection
      headline="Ready to Get a Website That Actually Grows Your Business?"
      description="Let's discuss how we can transform your digital presence into a high-converting engine. Tell us about your project, ask questions, or schedule a free strategy call below."
    />
    </>
  )
}

export default page