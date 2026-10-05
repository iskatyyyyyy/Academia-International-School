"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

/**
 * Floating pill navigation.
 *
 * The outermost bar is transparent and absolutely positioned so it never veils
 * the hero photograph or the mesh field behind it. Contrast for the forest-green
 * wordmark and links now comes from the white/80 nav pill itself, so the
 * top-lit veil the previous fixed bar needed is gone.
 *
 * Because the header is `absolute` rather than `fixed`, it scrolls away with the
 * page instead of lingering over content. Every page reserves top padding
 * (`pt-24`/`pt-28`) for it, so nothing collides on first paint.
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
    <header className="absolute top-0 z-50 w-full bg-transparent pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6">
        <Link href="/" className="group flex shrink-0 items-center gap-4">
          <Image
            src="/aid-logo.png"
            alt="Academia International School logo"
            width={499}
            height={500}
            className="h-16 w-16 shrink-0 object-contain transition-transform group-hover:scale-105"
          />
          <span>
            <span className="block font-serif text-lg font-bold leading-none tracking-tight text-forest">
              Academia International
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-forest">
              Al-noor Educational Center
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full bg-white/80 px-2 py-1.5 shadow-sm backdrop-blur-md md:flex">
          {NAV.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.id}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "rounded-full bg-forest px-4 py-1.5 text-sm font-medium text-white"
                    : "rounded-full px-4 py-1.5 text-sm font-medium text-forest transition-colors hover:bg-white/50"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/admissions"
          className="hidden shrink-0 items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:scale-[1.02] hover:bg-forest-hover hover:shadow-md lg:flex"
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
                    ? "block w-full rounded-full bg-forest px-4 py-2.5 text-left text-sm font-medium text-white"
                    : "block w-full rounded-full px-4 py-2.5 text-left text-sm font-medium text-forest transition-colors hover:bg-white/50"
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
