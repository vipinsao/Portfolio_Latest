"use client";
import { useEffect, useState } from "react";

/**
 * The year is set on the client, not at build time.
 *
 * This page is statically prerendered, so `new Date().getFullYear()` in a
 * server component freezes at whenever the last deploy happened — which is why
 * the live site was still saying "© 2025" in August 2026. The initial value
 * only ever shows for the frame before hydration.
 */
export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 py-8 bg-white dark:bg-neutral-950 text-center">
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        © {year} Vipin Chandra Sao — Built with Next.js
      </p>
    </footer>
  );
}
