const siteUrl = "https://portfolio-latest-y5jf.vercel.app";

// Single-page site, so one entry. It exists because /sitemap.xml was answering
// with the 404 page, which is a worse signal to a crawler than an honest
// one-URL sitemap.
export default function sitemap() {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
