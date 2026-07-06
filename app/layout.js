import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import { urbanist } from "./fonts";
import "./globals.css";

const siteUrl = "https://devskarnel.com";
const siteName = "Devskarnel";
const siteDescription =
  "Devskarnel is a web development agency building fast, SEO-optimized websites using Next.js, React, and MERN stack.";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: `${siteName} – Web Development Agency`,
    template: `%s | ${siteName}`,
  },

  description: siteDescription,

  keywords: [
    "Devskarnel",
    "Web Development Agency",
    "Next.js Developer",
    "MERN Stack Developer",
    "React Developer",
    "SEO-Friendly Web Development",
    "Fast Web Applications",
    "Scalable Web Solutions",
    "Custom Web Development",
    "Full-Stack Development",
    "WordPress Development",
    "Shopify Development",
  ],

  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "oUXQaTT_eWALgmCQeRgd5gKX6TLZpvJ2_bg2nWA5g60",
  },

  openGraph: {
    title: `${siteName} – Web Development Agency`,
    description:
      "We build fast, scalable, and SEO-friendly web applications using Next.js and MERN stack.",
    url: siteUrl,
    siteName,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteName} - Web Development Agency`,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: "Next.js & MERN Web Development Agency",
  },

  icons: {
    icon: "/icon.png",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    alternateName: "Devskarnel Web Solutions",
    url: siteUrl,
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className={`bg-[#010504] text-white antialiased ${urbanist.className}`} suppressHydrationWarning>
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
