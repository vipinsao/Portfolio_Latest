import "./globals.css";
import Providers from "./components/Providers";

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
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors duration-300 bg-white dark:bg-neutral-950">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
