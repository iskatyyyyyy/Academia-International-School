"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

/**
 * Transparent overlay navigation.
 *
 * The bar is `fixed top-0 z-50 w-full` on a transparent, borderless and
 * shadowless wrapper, so it stays visible as a floating track while scrolling
 * instead of occupying flow height, and it carries no background, blur or
 * shadow of its own — the hero's top haze (`from-white/50`) is what keeps the
 * forest-green wordmark legible over the photograph, while the link cluster
 * sits in its own white pill. Each page's `pt-*` on <main> is the breathing
 * room under the overlay.
 *
 * Rendered colors use the app's `forest` / `forest-hover` tokens, which are the
 * same #0B3B24 the export hardcoded, to stay consistent with the rest of the
 * design system.
 */

const NAV = [
  { id: "home", label: "Home", href: "/" },
  { id: "programs", label: "Programs", href: "/programs" },
  { id: "about", label: "About AIS", href: "/about" },
  { id: "admissions", label: "Admissions", href: "/admissions" },
  { id: "campus", label: "Campus Life", href: "/campus-life" },
  { id: "contact", label: "Contact", href: "/contact" },
] as const;

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed left-0 top-0 z-50 flex w-full justify-center bg-transparent pb-2 pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-5 transition-all duration-300"
        >
          <div className="relative w-24 h-24 bg-white rounded-full overflow-hidden flex items-center justify-center p-0">
            <Image
              src="/academia-international-school.png"
              alt="Academia International School logo"
              width={800}
              height={800}
              className="object-cover scale-[1.15]"
            />
          </div>
          <span>
            <span className="block font-serif text-xl font-bold leading-none tracking-tight text-forest">
              Academia International
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-forest">
              Al-noor Educational Center
            </span>
          </span>
        </Link>

        <nav className="hidden shrink-0 items-center rounded-full border border-white/30 bg-white/40 px-2 py-1.5 shadow-sm backdrop-blur-md md:flex">
          {NAV.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.id}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "rounded-full bg-[#004d36] px-4 py-2 text-sm font-medium text-white transition-all duration-300 ease-in-out hover:bg-[#003b29] hover:shadow-md hover:scale-105 active:scale-95"
                    : "rounded-full px-4 py-2 text-sm font-medium text-green-900 transition-all duration-300 ease-in-out hover:bg-white/20 hover:scale-105 active:scale-95"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/admissions"
          className="hidden shrink-0 items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-forest-hover hover:shadow-md lg:flex"
        >
          Enroll now
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="rounded-xl border border-white/70 bg-white/80 p-2 text-forest shadow-sm backdrop-blur-md md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="mx-6 mt-2 space-y-1 rounded-3xl bg-white/90 p-2 shadow-float backdrop-blur-xl md:hidden"
        >
          {NAV.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.id}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={
                  isActive
                    ? "block w-full rounded-full bg-[#004d36] px-4 py-2.5 text-left text-sm font-medium text-white transition-colors"
                    : "block w-full rounded-full px-4 py-2.5 text-left text-sm font-medium text-forest transition-colors hover:bg-green-50/50 hover:text-green-900 hover:pl-6"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
