"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 bg-white/80 backdrop-blur-xl z-40 border-b">
      <div className="max-w-6xl mx-auto w-full px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold text-gray-900">
          Vipin Sao
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#projects" className="hover:text-black transition">
            Projects
          </a>
          <a href="#experience" className="hover:text-black transition">
            Experience
          </a>
          <a href="#about" className="hover:text-black transition">
            About
          </a>
          <a href="#contact" className="hover:text-black transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
