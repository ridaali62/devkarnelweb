const siteUrl = "https://devskarnel.com";

export default function sitemap() {
  const lastModified = new Date();

  return [
    { url: siteUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/case-studies`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/services/website-development`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/services/app-development`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/services/ui-ux-design`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/services/seo-optimization`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/services/logo-design`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
