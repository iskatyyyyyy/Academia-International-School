"use client";

import Image from "next/image";
import { useState } from "react";

import { UNSPLASH } from "../lib/unsplash";

/**
 * Programs view, ported from the Stitch export of
 * "Academia International School - Programs Page".
 *
 * Copy, filter labels, card fields, and KPI figures are taken verbatim from that
 * export. The mockup was a single-page app that swapped views with local state;
 * here the Programs view owns a real route and this component owns only the two
 * interactions the design actually had: the track filter pills and the curriculum
 * modal.
 */

const FILTERS = [
  "All",
  "Ages 4-5 (KG)",
  "Grades 1-3 (Lower)",
  "Grades 4-6 (Upper)",
] as const;

type Filter = (typeof FILTERS)[number];

const PROGRAMS = [
  {
    id: "kg",
    level: "Kindergarten",
    grades: "KG 1 & KG 2",
    ages: "Ages 4 – 5",
    image: UNSPLASH.kindergarten,
    tagline: "Early Wonder & Foundational Play",
    description:
      "A nurturing, inquiry-driven environment integrating Montessori sensory principles with joyful guided play, building self-confidence, phonics mastery, and bilingual empathy from day one.",
    badges: [
      "Small Class Sizes",
      "1:7 Teacher Ratio",
      "Montessori Sensory",
      "Bilingual Immersion",
    ],
    keyHighlights: [
      "Guided Phonics & Early Literacy Discovery",
      "Hands-on Numeracy & Tactile Math Kits",
      "Conversational Modern Standard Arabic",
      "Motor Skills, Expressive Art & Garden Lab",
    ],
    classTime: "7:30 AM – 1:00 PM",
    capacity: "Max 14 students per homeroom",
  },
  {
    id: "lower",
    level: "Lower Primary",
    grades: "Grades 1 – 3",
    ages: "Ages 6 – 8",
    image: UNSPLASH.lowerPrimary,
    tagline: "Inquiry, Core Literacy & Discovery",
    description:
      "Solidifying essential reading fluency, Singapore-style mathematical reasoning, and collaborative scientific investigations in a dynamic classroom that celebrates each child’s unique pace.",
    badges: [
      "Small Class Sizes",
      "Singapore Math",
      "Science Explorer Labs",
      "Dedicated Reading Loft",
    ],
    keyHighlights: [
      "Structured Cambridge English & Literature",
      "Concrete-Pictorial-Abstract Math Foundations",
      "Integrated Environmental & Earth Sciences",
      "Arabic Language & Qatar National Identity",
    ],
    classTime: "7:20 AM – 2:00 PM",
    capacity: "Max 18 students per homeroom",
  },
  {
    id: "upper",
    level: "Upper Primary",
    grades: "Grades 4 – 6",
    ages: "Ages 9 – 11",
    image: UNSPLASH.upperPrimary,
    tagline: "Independent Mastery & Leadership",
    description:
      "Cultivating critical thinkers equipped for middle school transition through advanced project-based inquiry, computational robotics, debate rhetoric, and student council initiatives.",
    badges: [
      "Small Class Sizes",
      "STEM & Robotics Lab",
      "Leadership Incubator",
      "Middle School Prep",
    ],
    keyHighlights: [
      "Algorithm Design & Scratch Coding Lab",
      "Cross-Disciplinary Humanities & Global Issues",
      "Junior Toastmasters & Public Speaking",
      "Advanced Arabic & Islamic Cultural Heritage",
    ],
    classTime: "7:20 AM – 2:15 PM",
    capacity: "Max 20 students per homeroom",
  },
] as const;

const ENRICHMENT_STATS = [
  { value: "1:8", label: "Average Staff Ratio" },
  { value: "100%", label: "Bilingual Support" },
  { value: "24+", label: "After-school Clubs" },
  { value: "IB PYP", label: "Candidate School" },
] as const;

type Program = (typeof PROGRAMS)[number];

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-forest text-[10px] font-bold text-white">
      ✓
    </span>
  );
}

/** Programs view body. Client-side only for the filter and modal state. */
export function ProgramsView() {
  const [selectedTrack, setSelectedTrack] = useState<Filter>("All");
  const [activeModal, setActiveModal] = useState<Program | null>(null);

  const visible = PROGRAMS.filter((program) => {
    if (selectedTrack === "Ages 4-5 (KG)") return program.id === "kg";
    if (selectedTrack === "Grades 1-3 (Lower)") return program.id === "lower";
    if (selectedTrack === "Grades 4-6 (Upper)") return program.id === "upper";
    return true;
  });

  return (
    <>
      <section className="mx-auto max-w-3xl text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-forest backdrop-blur-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-forest motion-safe:animate-pulse" />
          Academics &amp; Curricula 2025–2026
        </span>
        <h1 className="text-balance font-serif text-4xl font-bold leading-[1.15] tracking-tight text-forest sm:text-5xl lg:text-6xl">
          Grade School Educational Pathways
        </h1>
        <p className="mt-5 text-balance text-base leading-relaxed text-forest sm:text-lg">
          Structured inquiry, bilingual excellence, and individualized mentorship
          tailored for each developmental milestone from ages 4 through 11 in
          Doha.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setSelectedTrack(filter)}
              aria-pressed={selectedTrack === filter}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${
                selectedTrack === filter
                  ? "bg-forest text-white shadow-sm"
                  : "border border-white/70 bg-white/60 text-forest backdrop-blur-sm hover:bg-white/80"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <div className="mt-14 grid grid-cols-1 items-stretch gap-8 md:mt-16 md:grid-cols-3">
        {visible.map((program) => (
          <article
            key={program.id}
            className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-white/50 bg-white/30 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-lift"
          >
            <div>
              <div className="relative h-56 w-full overflow-hidden bg-sage-bg sm:h-64">
                <Image
                  src={program.image}
                  alt={program.level}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  quality={75}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  <span className="inline-block rounded-full bg-forest/90 px-3 py-1 text-xs font-semibold text-white shadow-sm backdrop-blur-sm">
                    {program.grades}
                  </span>
                  <span className="inline-block rounded-full border border-white/70 bg-white/75 px-3 py-1 text-xs font-semibold text-forest shadow-sm backdrop-blur-sm">
                    {program.ages}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h2 className="font-serif text-2xl font-bold tracking-tight drop-shadow-sm">
                    {program.level}
                  </h2>
                  <p className="text-xs font-medium text-emerald-200">
                    {program.tagline}
                  </p>
                </div>
              </div>

              <div className="p-7">
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {program.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-white/70 bg-white/60 px-3 py-1 text-xs font-semibold text-forest backdrop-blur-sm"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <p className="mb-6 text-sm leading-relaxed text-forest">
                  {program.description}
                </p>

                <div className="mb-5 border-t border-white/60 pt-5">
                  <span className="mb-3 block text-[11px] font-bold uppercase tracking-wider text-forest/70">
                    Core Learning Highlights
                  </span>
                  <ul className="space-y-2.5">
                    {program.keyHighlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2.5 text-xs leading-snug text-forest sm:text-sm"
                      >
                        <CheckIcon />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-1.5 rounded-2xl border border-white/60 bg-white/40 p-3.5 text-xs text-forest backdrop-blur-sm">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-medium text-forest/70">
                      Daily Schedule:
                    </span>
                    <span className="font-semibold">{program.classTime}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-medium text-forest/70">
                      Cohort Limit:
                    </span>
                    <span className="font-semibold">{program.capacity}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-7 pt-0">
              <button
                type="button"
                onClick={() => setActiveModal(program)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-forest-hover hover:shadow-md"
              >
                Explore {program.level} Curriculum
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Enrichment banner */}
      <section className="mt-14 rounded-3xl border border-white/50 bg-white/30 p-8 shadow-xl backdrop-blur-md sm:p-10">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forest backdrop-blur-sm">
              Qatar Ministry of Education Aligned
            </span>
            <h2 className="text-balance font-serif text-2xl font-bold text-forest sm:text-3xl">
              A Balanced Dual-Language &amp; International Standard
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-forest sm:text-base">
              Every student at Academia International School benefits from rigorous
              international inquiry alongside immersive Arabic language acquisition,
              Islamic values instruction, and Qatar cultural history designed to
              foster proud global citizens.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {ENRICHMENT_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/60 bg-white/40 p-3 text-center backdrop-blur-sm"
                >
                  <span className="block font-serif text-2xl font-bold text-forest">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-medium text-forest/70">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-white/60 bg-white/40 p-6 backdrop-blur-sm lg:col-span-4">
            <div>
              <h3 className="font-serif text-xl font-bold text-forest">
                Have Admissions Questions?
              </h3>
              <p className="mb-4 text-xs leading-relaxed text-forest/70">
                Connect with our Primary School Registrar to receive the
                comprehensive 2025/2026 grade-level curriculum syllabi and book a
                guided campus tour.
              </p>
            </div>
            <div className="space-y-2">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-forest px-4 py-3 text-xs font-semibold text-white transition-all hover:bg-forest-hover"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Full Curriculum PDF
              </button>
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-forest/30 bg-white/70 px-4 py-3 text-xs font-semibold text-forest backdrop-blur-sm transition-all hover:bg-white/90"
              >
                Schedule a Campus Walkthrough
              </button>
            </div>
          </div>
        </div>
      </section>

      {activeModal ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeModal.level} curriculum`}
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl border border-white/60 bg-white/90 p-6 shadow-2xl backdrop-blur-xl md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/70 bg-white/70 font-bold text-forest transition-colors hover:bg-white"
              aria-label="Close"
            >
              ✕
            </button>
            <span className="mb-2 inline-block rounded-full border border-white/70 bg-white/60 px-3 py-1 text-xs font-bold uppercase text-forest backdrop-blur-sm">
              {activeModal.grades} • {activeModal.ages}
            </span>
            <h2 className="font-serif text-2xl font-bold text-forest md:text-3xl">
              {activeModal.level} Curriculum
            </h2>
            <p className="mb-6 text-sm text-forest">{activeModal.description}</p>
            <div className="mb-6 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-forest/70">
                Detailed Subject Modules
              </h3>
              {activeModal.keyHighlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-2 rounded-xl border border-white/60 bg-white/50 p-2.5 text-sm text-forest backdrop-blur-sm"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-forest" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="w-full rounded-full bg-forest py-3 text-xs font-semibold text-white transition-all hover:bg-forest-hover"
            >
              Close Overview
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
