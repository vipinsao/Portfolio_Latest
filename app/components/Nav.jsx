"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#open-source", label: "Open source" },
  { href: "#contact", label: "Contact" },
];

/**
 * Four anchors and a theme toggle. No hamburger, no open/closed state, no
 * overlay: the page is five sections long, so a mobile menu would be a state
 * machine guarding a scroll the reader can do with their thumb. Below 640px
 * the links collapse to the name alone.
 *
 * The toggle is deliberately the quietest control here — an icon button at
 * the end of the row. Dark mode already follows the OS; this only exists for
 * the reader whose OS is lying to them.
 */
export default function Nav() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-shell items-center justify-between gap-4 px-5 sm:px-8"
      >
        <a
          href="#top"
          className="font-display text-step-1 tracking-tight text-fg"
        >
          Vipin Chandra Sao
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 sm:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-md px-3 py-2 text-step--1 text-muted transition-colors hover:text-fg"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Rendered only after mount: before hydration the resolved theme is
              unknown, and guessing produces an icon that flips on load. */}
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={
              mounted
                ? `Switch to ${isDark ? "light" : "dark"} theme`
                : "Switch theme"
            }
            className="grid h-9 w-9 place-items-center rounded-md border border-line text-muted transition-colors hover:border-line-strong hover:text-fg"
          >
            {mounted && isDark ? (
              <Sun size={16} aria-hidden="true" />
            ) : (
              <Moon size={16} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
