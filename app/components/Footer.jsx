"use client";

import { useEffect, useState } from "react";

/**
 * The year is set on the client, not at build time.
 *
 * This page is statically prerendered, so `new Date().getFullYear()` in a
 * server component freezes at whenever the last deploy happened — which is
 * why the live site was still saying "© 2025" in August 2026. The initial
 * value only ever shows for the frame before hydration.
 */
export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-shell flex-col gap-2 px-5 py-10 text-step--1 text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {year} Vipin Chandra Sao</p>
        <p>
          Next.js, Tailwind, and one animation. Source on{" "}
          <a
            href="https://github.com/vipinsao/Portfolio_Latest"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
