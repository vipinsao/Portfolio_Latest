"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-950/70">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO / NAME */}
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Vipin Sao
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-700 dark:text-neutral-300">
          <Link
            href="#projects"
            className="hover:text-black dark:hover:text-white transition"
          >
            Projects
          </Link>
          <Link
            href="#workflows"
            className="hover:text-black dark:hover:text-white transition"
          >
            Workflows
          </Link>
          <Link
            href="#blogs"
            className="hover:text-black dark:hover:text-white transition"
          >
            Blogs
          </Link>

          {/* DARK MODE SWITCH */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-md border text-sm hover:bg-neutral-100 dark:hover:bg-neutral-900 transition"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE NAV DROPDOWN */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-4 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
          <Link href="#projects" onClick={() => setOpen(false)}>
            Projects
          </Link>
          <Link href="#workflows" onClick={() => setOpen(false)}>
            Workflows
          </Link>
          <Link href="#blogs" onClick={() => setOpen(false)}>
            Blogs
          </Link>

          <button
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
              setOpen(false);
            }}
            className="p-2 rounded-md border text-sm mt-2"
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}
