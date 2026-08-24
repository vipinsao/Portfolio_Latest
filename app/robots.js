const siteUrl = "https://portfolio-latest-y5jf.vercel.app";

// `metadata.robots` in layout.js only emits a <meta name="robots"> tag. It does
// not produce /robots.txt, which was returning the 404 page — so crawlers had
// no sitemap reference and no canonical host statement.
export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
