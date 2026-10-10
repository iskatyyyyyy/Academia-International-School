import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MeshBackground from "../components/mesh-background";
import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";

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

const FACULTY = [
  {
    src: "/AIS FACULTY 1.jpeg",
    width: 1206,
    height: 1655,
    alt: "Faculty member of Academia International School",
  },
  {
    src: "/AIS FACULTY 2.jpeg",
    width: 1206,
    height: 1655,
    alt: "Faculty member of Academia International School",
  },
  {
    src: "/AIS FACULTY 3.jpeg",
    width: 1206,
    height: 1662,
    alt: "Faculty member of Academia International School",
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
                <div className="relative h-[520px] overflow-hidden rounded-3xl border border-white/50 shadow-md">
                  <Image
                    src="/AIS 12.jpg"
                    alt="Students of Academia International School learning together in Doha"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    quality={75}
                    className="object-cover"
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

          {/* Pillars of Academia — faculty */}
          <section className="mb-8 mt-4">
            <div className="mx-auto mb-10 max-w-xl text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-forest/70">
                Our Faculty
              </span>
              <h2 className="mt-1 font-serif text-3xl font-bold text-forest">
                Pillars of Academia
              </h2>
            </div>

            <div className="columns-1 gap-6 sm:columns-2 [&>figure]:mb-6">
              {FACULTY.map((photo) => (
                <figure
                  key={photo.src}
                  className="break-inside-avoid overflow-hidden rounded-3xl border border-white/50 shadow-xl"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    sizes="(min-width: 640px) 50vw, 100vw"
                    quality={75}
                    className="h-auto w-full transition-transform duration-500 hover:scale-105"
                  />
                </figure>
              ))}
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
