import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";

/**
 * Two families, both self-hosted by `next/font` — no request leaves the page
 * for a stylesheet, and no layout shift, because the metrics are known at
 * build time.
 *
 * Newsreader carries the headings; Inter carries everything a reader actually
 * reads at length. Numbers and stacks use the system mono stack, which costs
 * nothing to download.
 *
 * The previous rule was `* { font-family: Outfit }` in globals.css with no
 * @font-face and no <link> behind it, so the page had been rendering in the
 * browser default all along.
 */
const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const display = Newsreader({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal"],
  variable: "--font-display",
});

const siteUrl = "https://portfolio-latest-y5jf.vercel.app";
const title = "Vipin Chandra Sao — Full-Stack Developer (Backend-Leaning)";
const description =
  "Full-stack developer, backend-leaning. Node.js, TypeScript, PostgreSQL and " +
  "LLM-backed features — retrieval with citations, auth services, and " +
  "marketplace data pipelines. Based in India (UTC+5:30), open to remote roles.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Vipin Chandra Sao",
  },
  description,
  keywords: [
    "Vipin Chandra Sao",
    "full-stack developer",
    "backend developer",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Next.js",
    "retrieval augmented generation",
  ],
  authors: [{ name: "Vipin Chandra Sao", url: siteUrl }],
  creator: "Vipin Chandra Sao",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Vipin Chandra Sao",
    title,
    description,
    locale: "en_US",
    images: [
      {
        url: "/user-vipin.png",
        width: 360,
        height: 360,
        alt: "Vipin Chandra Sao",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@vipinSao1",
    images: ["/user-vipin.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${display.variable}`}
    >
      <body className="bg-bg text-fg antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:border focus:border-line-strong focus:bg-surface focus:px-4 focus:py-2 focus:text-step--1"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
