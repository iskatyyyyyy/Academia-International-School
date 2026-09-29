import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MeshBackground from "../components/mesh-background";
import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";
import { UNSPLASH } from "../lib/unsplash";

/**
 * About view, ported from the Stitch export of
 * "Our Foundational Core". Copy is verbatim from that export; the mockup was a
 * single-page app with a stateful nav, and the screen itself has no state, so
 * this is a Server Component.
 */

export const metadata: Metadata = {
  title: "Our Foundational Core | Academia International School",
  description:
    "Fostering an inquiring spirit, emotional resilience, and moral integrity in students ages 4 to 11 in Qatar.",
};

const CORE_FEATURES = [
  {
    title: "Early Childhood Flourishing",
    body: "Child-led play, sensory exploration, and emotional safety from KG1 through Primary stages.",
  },
  {
    title: "Holistic & Dual-Language Mastery",
    body: "Seamless integration of international IB PYP inquiry paired with rich Arabic and Islamic cultural values.",
  },
  {
    title: "Protected, Sunlit Campus Environment",
    body: "State-of-the-art secure learning suites, green discovery courtyards, and boutique student-to-teacher ratios (1:8).",
  },
] as const;

const PILLARS = [
  {
    title: "Inquiry-Driven Discovery",
    body: "Hands-on investigative learning where curiosity leads each lesson, developing critical thinking from kindergarten onward.",
    footer: "Active Investigation",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Bilingual Excellence",
    body: "Fluency in English and Arabic, deeply honoring local Qatari heritage while cultivating a global perspective.",
    footer: "Dual-Language Fluency",
    icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129",
  },
  {
    title: "Emotional & Physical Safety",
    body: "Anti-bullying pastoral care, certified child wellbeing coaches, and advanced secure campus parameters.",
    footer: "Wellbeing First",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Moral Character & Empathy",
    body: "Community service, respectful dialogue, kindness initiatives, and proactive planetary stewardship.",
    footer: "Values-Led Action",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
] as const;

const CHECK_PATH =
  "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z";
const ARROW_PATH = "M14 5l7 7m0 0l-7 7m7-7H3";
const DOWNLOAD_PATH =
  "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4";
const PEOPLE_PATH =
  "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z";

export default function AboutPage() {
  return (
    <>
      <MeshBackground />
      <SiteHeader />

      <main className="flex-1 pt-28 md:pt-36">
        <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-6 md:pb-32">
          {/* Page header */}
          <section className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full border border-white/70 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-forest backdrop-blur-sm">
              About Academia International School • Doha
            </span>
            <h1 className="text-balance font-serif text-4xl font-bold tracking-tight text-forest sm:text-5xl lg:text-6xl">
              Our Foundational Core
            </h1>
            <p className="mt-4 text-balance text-base leading-relaxed text-forest sm:text-lg">
              Fostering an inquiring spirit, emotional resilience, and moral
              integrity in students ages 4 to 11 in Qatar.
            </p>
          </section>

          {/* Mission split card */}
          <section className="rounded-3xl border border-white/50 bg-white/30 p-8 shadow-xl backdrop-blur-md md:p-12 lg:p-14">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="flex flex-col justify-center lg:col-span-6">
                <span className="mb-4 inline-block self-start rounded-full border border-white/70 bg-white/60 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-forest backdrop-blur-sm">
                  Mission &amp; Educational Philosophy
                </span>
                <h2 className="text-balance mb-5 font-serif text-2xl font-bold leading-tight text-forest sm:text-3xl lg:text-4xl">
                  Empowering Young Minds in Qatar to Grow with Wonder, Empathy,
                  and Purpose
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-forest/80 sm:text-base">
                  Academia International School Doha nurtures each child’s innate
                  curiosity through joyful exploration and disciplined inquiry.
                  Rooted in the rich cultural heritage of Qatar and driven by
                  premier international educational practices, our foundational
                  years offer children the freedom to question, construct
                  understanding, and grow into confident, bilingual global
                  citizens.
                </p>

                <div className="mb-8 space-y-4">
                  {CORE_FEATURES.map((feature) => (
                    <div key={feature.title} className="flex items-start gap-3.5">
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/70 bg-white/60 text-forest backdrop-blur-sm">
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d={CHECK_PATH}
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-forest">
                          {feature.title}
                        </h3>
                        <p className="mt-0.5 text-xs leading-normal text-forest/75 sm:text-sm">
                          {feature.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mb-8 rounded-2xl border-l-4 border-forest bg-white/40 p-5 backdrop-blur-sm">
                  <p className="font-serif text-xs italic leading-relaxed text-forest/90 sm:text-sm">
                    “At AIS Grade School, every hallway is designed as a second
                    teacher—nurturing curiosity before compliance.”
                  </p>
                  <span className="mt-2 block text-xs font-bold tracking-wide text-forest">
                    — Dr. Mariam Al-Kuwari, Head of Primary
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/#campus"
                    className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow transition-all hover:bg-forest-hover"
                  >
                    <span>Explore Campus Facilities</span>
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={ARROW_PATH}
                      />
                    </svg>
                  </Link>
                  <a
                    href="#prospectus"
                    className="inline-flex items-center gap-2 rounded-full border border-forest/40 bg-white/60 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-forest backdrop-blur-sm transition-all hover:bg-white/80"
                  >
                    <span>Download School Prospectus</span>
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={DOWNLOAD_PATH}
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="relative lg:col-span-6">
                <div className="relative overflow-hidden rounded-3xl border border-white/50 shadow-md">
                  <Image
                    src={UNSPLASH.campusCourtyard}
                    alt="Teacher guiding young students in a sunlit courtyard garden classroom at an international grade school campus in Doha"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    quality={75}
                    className="h-[520px] w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/70 bg-white/75 px-4 py-2 shadow-lg backdrop-blur-md">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-600 motion-safe:animate-pulse" />
                    <span className="text-xs font-bold tracking-wide text-forest">
                      Accredited by Qatar MoEHE
                    </span>
                  </div>

                  <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2 shadow-lg backdrop-blur-md">
                    <svg
                      className="h-4 w-4 text-forest"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={PEOPLE_PATH}
                      />
                    </svg>
                    <span className="text-xs font-bold tracking-wide text-forest">
                      1:8 Teacher-to-Student Ratio
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Four pillars */}
          <section className="mb-8 mt-4">
            <div className="mx-auto mb-10 max-w-xl text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-forest/70">
                Our Anchor Values
              </span>
              <h2 className="mt-1 font-serif text-3xl font-bold text-forest">
                Four Pillars of Academic Life
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PILLARS.map((pillar) => (
                <article
                  key={pillar.title}
                  className="flex flex-col justify-between rounded-3xl border border-white/50 bg-white/30 p-6 shadow-xl backdrop-blur-md transition-shadow hover:shadow-glass-lift"
                >
                  <div>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-white/60 text-forest backdrop-blur-sm">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d={pillar.icon}
                        />
                      </svg>
                    </div>
                    <h3 className="mb-2 font-serif text-lg font-bold text-forest">
                      {pillar.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-forest/75 sm:text-sm">
                      {pillar.body}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-1 border-t border-white/60 pt-4 text-[11px] font-semibold tracking-wide text-forest">
                    {pillar.footer} <span aria-hidden="true">→</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
