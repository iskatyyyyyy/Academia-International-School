"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { UNSPLASH } from "../lib/unsplash";

/**
 * Campus Life view, ported from the Stitch export of
 * "Academia International School - Campus Life".
 *
 * All copy, category badges, card titles, descriptions, location labels, grade
 * tags, and image URLs are verbatim from that export, as is the masonry
 * `columns-*` layout with its mixed aspect ratios.
 *
 * The export shipped the filter chips as inert buttons with no category data, so
 * the chip-to-card mapping below is derived from each card's own badge and
 * description (see `CATEGORY`). It is a judgement call, not extracted data —
 * swap it if the design intent was different.
 *
 * Deviations from the raw markup, all deliberate:
 *  - Card 2 was an `<h2>` while its five siblings were `<h3>`; all are `<h3>`.
 *  - Icons were already inline SVG, so they are kept verbatim.
 *  - Panels use the app's standard glass tokens instead of the export's
 *    `bg-white` + `border-green-100`, per the Glassmorphism direction.
 */

const FILTERS = [
  "All Moments",
  "Arts & Culture",
  "STEM & Innovation",
  "Sports & Wellness",
  "Campus Traditions",
] as const;

type Filter = (typeof FILTERS)[number];

/** Badge icon paths, verbatim from the export's inline SVGs. */
const ICONS = {
  bolt: "M13 10V3L4 14h7v7l9-11h-7z",
  flask:
    "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  sparkles:
    "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  book: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  palette:
    "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  music:
    "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3",
  calendar:
    "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  pin: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z",
  clock: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  image:
    "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  building:
    "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
} as const;

type IconName = keyof typeof ICONS;

function Glyph({
  name,
  className = "h-4 w-4",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={ICONS[name]} />
    </svg>
  );
}

const MOMENTS = [
  {
    id: "sports-day",
    category: "Sports & Wellness",
    badge: "Athletics & Team Spirit",
    badgeIcon: "bolt",
    title: "Annual Sports Day",
    description:
      "Healthy competition and team spirit on our FIFA-grade outdoor tracks and sun-shaded fields.",
    image: UNSPLASH.sportsDay,
    alt: "Elementary school students during Annual Sports Day in Doha",
    aspect: "aspect-[4/3]",
    overlayFrom: "from-black/85",
    overlayVia: "via-black/30",
    location: "Winter Term Milestone",
    locationIcon: "calendar",
    tag: "Grades 1 – 6",
  },
  {
    id: "science-fair",
    category: "STEM & Innovation",
    badge: "Inquiry & Hands-On STEM",
    badgeIcon: "flask",
    title: "Elementary Science Fair",
    description:
      "Young scientists formulating hypotheses, testing chemical reactions, and presenting findings to parents.",
    image: UNSPLASH.scienceFair,
    alt: "Elementary Science Fair project demonstration",
    aspect: "aspect-[3/4]",
    overlayFrom: "from-black/85",
    overlayVia: "via-black/35",
    location: "Discovery Atrium",
    locationIcon: "pin",
    tag: "Annual Showcase",
  },
  {
    id: "eco-garden",
    category: "Campus Traditions",
    badge: "Environmental Stewardship",
    badgeIcon: "sparkles",
    title: "Sensory Garden & Eco-Harvest",
    description:
      "Learning sustainable agriculture, native flora, and botanical science hands-on on our green rooftop.",
    image: UNSPLASH.ecoGarden,
    alt: "Students in rooftop organic garden in Doha",
    aspect: "aspect-[16/9]",
    overlayFrom: "from-black/85",
    overlayVia: "via-black/35",
    location: "Weekly Eco-Clubs",
    locationIcon: "clock",
    tag: "All Primary",
  },
  {
    id: "book-week",
    category: "Arts & Culture",
    badge: "Literacy & Storytelling",
    badgeIcon: "book",
    title: "Book Week Parade",
    description:
      "Beloved storybook characters come alive as students foster a lifelong love for reading and literary exploration.",
    image: UNSPLASH.readingLoft,
    alt: "Elementary children in World Book Week character costumes parade",
    aspect: "aspect-[4/3]",
    overlayFrom: "from-black/85",
    overlayVia: "via-black/35",
    location: "Spring Literary Festival",
    locationIcon: "calendar",
    tag: "KG – Grade 6",
  },
  {
    id: "studio-arts",
    category: "Arts & Culture",
    badge: "Visual Arts & Craftsmanship",
    badgeIcon: "palette",
    title: "Studio Arts & Ceramic Craft",
    description:
      "Tactile creative exploration with clay modeling, water marbling, and Islamic geometric patterns.",
    image: UNSPLASH.ceramicStudio,
    alt: "Young elementary children in pottery and watercolor art class",
    aspect: "aspect-[3/4]",
    overlayFrom: "from-black/85",
    overlayVia: "via-black/35",
    location: "Sunlit Arts Pavilion",
    locationIcon: "image",
    tag: "Weekly Elective",
  },
  {
    id: "musical-gala",
    category: "Arts & Culture",
    badge: "Performing Arts",
    badgeIcon: "music",
    title: "Moving-Up & Musical Gala",
    description:
      "Violin ensembles, vocal harmonies, and celebration of student progression in our Qatar National Convention auditorium.",
    image: UNSPLASH.musicalGala,
    alt: "Junior orchestra and choir performing on Doha stage",
    aspect: "aspect-square",
    overlayFrom: "from-black/85",
    overlayVia: "via-black/35",
    location: "Grand Auditorium",
    locationIcon: "building",
    tag: "End of Year Celebration",
  },
] as const;

export default function CampusLifeView() {
  const [filter, setFilter] = useState<Filter>("All Moments");

  const visible =
    filter === "All Moments"
      ? MOMENTS
      : MOMENTS.filter((moment) => moment.category === filter);

  return (
    <>
      <header className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-4 py-1.5 text-xs font-semibold tracking-wide text-forest backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-forest motion-safe:animate-pulse" />
          <span>CAMPUS LIFE &amp; STUDENT EXPERIENCES • DOHA</span>
        </div>

        <h1 className="mb-5 text-balance font-serif text-4xl font-bold leading-[1.15] tracking-tight text-forest md:text-5xl lg:text-6xl">
          Community &amp; Growth
        </h1>

        <p className="mx-auto max-w-2xl text-base leading-relaxed text-forest/80 md:text-lg">
          Every day at AIS Grade School unfolds through collaborative discovery,
          joyful athletic milestones, creative expression, and lifelong
          friendships under the Doha sun.
        </p>

        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
          role="group"
          aria-label="Filter campus life moments by category"
        >
          {FILTERS.map((option) => {
            const active = filter === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setFilter(option)}
                aria-pressed={active}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                  active
                    ? "bg-forest text-white shadow-md"
                    : "border border-white/60 bg-white/50 text-forest shadow-sm backdrop-blur-sm hover:border-forest/30 hover:bg-white/70"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </header>

      {/* Multi-column CSS columns for true masonry natural height flow. */}
      <div className="columns-1 gap-8 space-y-8 md:columns-2 lg:columns-3">
        {visible.map((moment) => (
          <article
            key={moment.id}
            className="group mb-8 break-inside-avoid rounded-3xl border border-white/50 bg-white/30 p-3 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-white/70 hover:bg-white/40 hover:shadow-glass-lift"
          >
            <div
              className={`relative overflow-hidden rounded-2xl ${moment.aspect}`}
            >
              <Image
                src={moment.image}
                alt={moment.alt}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                quality={75}
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100"
              />
              <div
                className={`absolute inset-0 flex flex-col justify-end bg-gradient-to-t ${moment.overlayFrom} ${moment.overlayVia} to-transparent p-6 text-white`}
              >
                <span className="mb-2 inline-flex w-max items-center gap-1.5 rounded-full border border-white/20 bg-white/20 px-3 py-1 text-[11px] font-semibold text-emerald-200 backdrop-blur-md">
                  <Glyph name={moment.badgeIcon as IconName} className="h-3 w-3" />
                  {moment.badge}
                </span>
                <h2 className="font-serif text-2xl font-bold leading-snug tracking-tight text-white">
                  {moment.title}
                </h2>
                <p className="mt-1 line-clamp-2 text-xs font-light leading-relaxed text-white/80">
                  {moment.description}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 px-3 pb-2 pt-3.5 text-xs text-forest/80">
              <span className="flex items-center gap-1.5 font-medium">
                <Glyph
                  name={moment.locationIcon as IconName}
                  className="h-3.5 w-3.5 shrink-0 text-forest"
                />
                {moment.location}
              </span>
              <span className="shrink-0 rounded-full border border-white/60 bg-white/50 px-2.5 py-0.5 text-[10px] font-semibold text-forest backdrop-blur-sm">
                {moment.tag}
              </span>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/50 bg-white/30 p-8 shadow-xl backdrop-blur-md md:flex-row md:p-10">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-3 py-1 text-xs font-semibold text-forest backdrop-blur-sm">
            <span>EXPERIENCE AIS IN PERSON</span>
          </div>
          <h2 className="text-balance font-serif text-2xl font-bold tracking-tight text-forest md:text-3xl">
            Book a Guided Family Discovery Walkthrough
          </h2>
          <p className="text-sm leading-relaxed text-forest/80">
            Walk our sunlit shaded courtyards, observe our active bilingual
            inquiry classrooms, and speak with our Head of Primary and admissions
            counselors.
          </p>
        </div>
        <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row md:w-auto">
          <Link
            href="/admissions"
            className="rounded-full bg-forest px-6 py-3.5 text-center text-xs font-semibold tracking-wide text-white shadow-md transition-all hover:bg-forest-hover"
          >
            SCHEDULE CAMPUS VISIT
          </Link>
          <Link
            href="/#contact"
            className="rounded-full border border-white/60 bg-white/50 px-6 py-3.5 text-center text-xs font-semibold tracking-wide text-forest backdrop-blur-sm transition-all hover:bg-white/70"
          >
            VIEW ACADEMIC CALENDAR
          </Link>
        </div>
      </section>
    </>
  );
}
