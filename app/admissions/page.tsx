import type { Metadata } from "next";
import Image from "next/image";
import MeshBackground from "../components/mesh-background";
import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";
import { UNSPLASH } from "../lib/unsplash";

/**
 * Admissions view, ported from the Stitch export of the Admissions screen.
 *
 * Copy, field labels, placeholders, select options, and the advisor details are
 * verbatim from that export. The export used Material Symbols ligatures; those
 * are inlined as SVG paths here so the screen carries no icon-font dependency.
 *
 * The form is a static snapshot of the export's step 1 "In Progress" state. It
 * does not submit anywhere and the stepper does not advance — wire that up when
 * there is a real application endpoint behind it.
 */

export const metadata: Metadata = {
  title: "Admissions 2025/26 | Academia International School",
  description:
    "A supportive, transparent four-step application process for Kindergarten through Grade 6 in Doha, Qatar.",
};

const STEP_LABELS = [
  "Parent Info",
  "Student Details",
  "School Records",
  "Review",
] as const;

const ASSURANCES = [
  { label: "Rolling Admissions Open", icon: "clock" },
  { label: "Qatar MoEHE Accredited", icon: "verified" },
  { label: "Average Review Time: 48 Hours", icon: "speed" },
] as const;

const GRADE_OPTIONS = [
  "Kindergarten (KG1 / KG2 - Ages 4-5)",
  "Lower Primary (Grade 1 - Age 6)",
  "Lower Primary (Grade 2 - Age 7)",
  "Lower Primary (Grade 3 - Age 8)",
  "Upper Primary (Grade 4 - Age 9)",
  "Upper Primary (Grade 5 - Age 10)",
  "Upper Primary (Grade 6 - Age 11)",
] as const;

const FAQS = [
  {
    q: "What are the age cut-off dates?",
    a: "As per Qatar MoEHE regulations, student birth dates are evaluated as of September 30th for the entering academic year.",
  },
  {
    q: "Is transportation provided across Doha?",
    a: "Yes, AIS operates air-conditioned, safety-monitored buses servicing West Bay, The Pearl, Lusail, Al Waab, and Al Rayyan.",
  },
] as const;

/** Inlined stand-ins for the export's Material Symbols ligatures. */
const ICON_PATHS: Record<string, string> = {
  clock: "M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z",
  verified:
    "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  speed: "M13 10V3L4 14h7v7l9-11h-7z",
  upload: "M12 16V4m0 0l-4 4m4-4l4 4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2",
  shield: "M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z",
  arrow: "M5 12h14m0 0l-6-6m6 6l-6 6",
  school: "M12 4L2 9l10 5 10-5-10-5zM6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5",
  chat: "M8 10h8M8 14h5M21 12a8 8 0 01-8 8H7l-4 3V12a8 8 0 018-8h2a8 8 0 018 8z",
  call: "M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z",
  mail: "M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zm0 1l8 7 8-7",
  schedule:
    "M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z",
  event:
    "M8 3v3m8-3v3M4 9h16M5 6h14a1 1 0 011 1v13a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1zm4 9h6m-6 4h4",
  calendar:
    "M8 3v3m8-3v3M4 9h16M5 6h14a1 1 0 011 1v13a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1z",
  chevron: "M6 9l6 6 6-6",
};

function Glyph({
  name,
  className = "h-4 w-4",
}: {
  name: keyof typeof ICON_PATHS;
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
      <path d={ICON_PATHS[name]} />
    </svg>
  );
}

const FIELD =
  "w-full rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-sm font-medium text-forest placeholder:text-forest/70 backdrop-blur-sm focus:bg-white/80 focus:outline-none focus:ring-2 focus:ring-forest";
const LABEL = "text-xs font-bold uppercase tracking-wider text-forest";

export default function AdmissionsPage() {
  return (
    <>
      <MeshBackground />
      <SiteHeader />

      <main className="flex-1 pt-24 md:pt-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          {/* Campus banner */}
          <div className="relative h-56 w-full overflow-hidden rounded-3xl shadow-md md:h-72">
            <Image
              src={UNSPLASH.campusBanner}
              alt="Children sitting on outdoor carpets around low wooden tables with an educator in a sunlit courtyard garden classroom"
              fill
              priority
              sizes="(min-width: 1280px) 1280px, 100vw"
              quality={75}
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-forest/90 via-forest/30 to-transparent p-8 text-white">
              <span className="mb-2 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-100 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-emerald-400 motion-safe:animate-pulse" />
                Applications Underway • Fall Term 2025/26
              </span>
              <p className="font-serif text-2xl font-bold tracking-tight md:text-3xl">
                Where World-Class Academics Meet Qatari Heritage
              </p>
            </div>
          </div>

          <section className="w-full py-8 md:py-10">
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-forest backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-forest" />
                Academia International School • Admissions 2025/26
              </div>
              <h1 className="text-balance font-serif text-3xl font-bold leading-[1.15] tracking-tight text-forest sm:text-4xl md:text-5xl">
                Begin Your Child’s Journey with AIS
              </h1>
              <p className="mb-6 mt-4 text-base leading-relaxed text-forest md:text-lg">
                A supportive, transparent four-step application process for
                Kindergarten through Grade 6 in Doha, Qatar. Designed to be
                completed in under 15 minutes.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                {ASSURANCES.map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-3.5 py-1.5 text-xs font-semibold text-forest shadow-sm backdrop-blur-sm"
                  >
                    <Glyph name={item.icon as "clock"} className="h-3.5 w-3.5 text-forest/70" />
                    {item.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
              {/* Left: application form */}
              <div className="flex flex-col gap-6 lg:col-span-8">
                <div className="rounded-3xl border border-white/50 bg-white/30 p-6 shadow-xl backdrop-blur-md sm:p-8 md:p-10">
                  {/* Stepper */}
                  <div className="mb-10">
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {STEP_LABELS.map((label, index) => {
                        const active = index === 0;
                        const next = index === 1;
                        return (
                          <div key={label} className="flex flex-col gap-1.5">
                            <div className="flex items-center gap-2">
                              <div
                                className={`flex h-7 w-7 items-center justify-center rounded-full text-xs shadow-sm ${
                                  active
                                    ? "bg-forest font-bold text-white"
                                    : next
                                      ? "border border-white/70 bg-white/60 font-semibold text-forest backdrop-blur-sm"
                                      : "border border-white/60 bg-white/40 font-medium text-forest/50 backdrop-blur-sm"
                                }`}
                              >
                                {index + 1}
                              </div>
                              <span
                                className={`text-xs tracking-tight ${
                                  active
                                    ? "font-bold text-forest"
                                    : "font-medium text-forest/60"
                                }`}
                              >
                                {label}
                              </span>
                            </div>
                            <div
                              className={`h-1.5 w-full rounded-full ${
                                active
                                  ? "bg-forest"
                                  : "border border-white/50 bg-white/40 backdrop-blur-sm"
                              }`}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <form className="space-y-8">
                    {/* Step 1 */}
                    <div>
                      <div className="mb-4 flex items-center justify-between gap-4 border-b border-white/60 pb-2">
                        <div>
                          <h2 className="font-serif text-xl font-bold text-forest sm:text-2xl">
                            Step 1: Primary Guardian Information
                          </h2>
                          <p className="mt-0.5 text-xs text-forest/70 sm:text-sm">
                            Please provide primary contact information for
                            admissions correspondence.
                          </p>
                        </div>
                        <span className="shrink-0 rounded-full border border-white/70 bg-white/60 px-2.5 py-1 text-xs font-semibold text-forest backdrop-blur-sm">
                          In Progress
                        </span>
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="adm-guardian-name" className={LABEL}>
                            Guardian Full Name *
                          </label>
                          <input
                            id="adm-guardian-name"
                            className={FIELD}
                            placeholder="e.g. Dr. Tariq Al-Kuwari"
                            type="text"
                            required
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="adm-qid" className={LABEL}>
                            Qatar ID (QID) or Passport *
                          </label>
                          <input
                            id="adm-qid"
                            className={FIELD}
                            placeholder="11-digit QID number"
                            type="text"
                            required
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="adm-guardian-email" className={LABEL}>
                            Email Address *
                          </label>
                          <input
                            id="adm-guardian-email"
                            className={FIELD}
                            placeholder="tariq.alkuwari@domain.qa"
                            type="email"
                            required
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="adm-mobile" className={LABEL}>
                            WhatsApp / Mobile Number *
                          </label>
                          <div className="relative">
                            <span className="absolute left-4 top-3 text-xs font-semibold text-forest/70">
                              +974
                            </span>
                            <input
                              id="adm-mobile"
                              className={`${FIELD} pl-16`}
                              placeholder="3344 5566"
                              type="tel"
                              required
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="adm-relationship" className={LABEL}>
                            Relationship to Student *
                          </label>
                          <select
                            id="adm-relationship"
                            className={FIELD}
                            defaultValue="Father / Legal Guardian"
                          >
                            <option>Father / Legal Guardian</option>
                            <option>Mother</option>
                            <option>Other Legal Guardian</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="adm-zone" className={LABEL}>
                            Residential District / Zone *
                          </label>
                          <select
                            id="adm-zone"
                            className={FIELD}
                            defaultValue="Al Waab (Zone 55)"
                          >
                            <option>Al Waab (Zone 55)</option>
                            <option>Al Sadd (Zone 38)</option>
                            <option>The Pearl-Qatar (Zone 66)</option>
                            <option>West Bay / Dafna (Zone 60)</option>
                            <option>Lusail City (Zone 69)</option>
                            <option>Other District in Qatar</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="pt-4">
                      <div className="mb-4 flex items-center justify-between gap-4 border-b border-white/60 pb-2">
                        <div>
                          <h2 className="font-serif text-xl font-bold text-forest sm:text-2xl">
                            Step 2: Student Information
                          </h2>
                          <p className="mt-0.5 text-xs text-forest/70 sm:text-sm">
                            Please indicate grade level and language background.
                          </p>
                        </div>
                        <span className="shrink-0 rounded-full border border-white/60 bg-white/40 px-2.5 py-1 text-xs font-semibold text-forest/70 backdrop-blur-sm">
                          Upcoming
                        </span>
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="adm-student-name" className={LABEL}>
                            Child&apos;s Full Legal Name *
                          </label>
                          <input
                            id="adm-student-name"
                            className={FIELD}
                            placeholder="As written in Passport / QID"
                            type="text"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="adm-dob" className={LABEL}>
                            Date of Birth *
                          </label>
                          <input id="adm-dob" className={FIELD} type="date" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="adm-grade" className={LABEL}>
                            Applying For Grade *
                          </label>
                          <select
                            id="adm-grade"
                            className={FIELD}
                            defaultValue={GRADE_OPTIONS[1]}
                          >
                            {GRADE_OPTIONS.map((option) => (
                              <option key={option}>{option}</option>
                            ))}
                          </select>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="adm-language" className={LABEL}>
                            Primary Language Fluency *
                          </label>
                          <select
                            id="adm-language"
                            className={FIELD}
                            defaultValue="Bilingual: Arabic & English"
                          >
                            <option>Bilingual: Arabic &amp; English</option>
                            <option>
                              English Dominant (Arabic as Additional)
                            </option>
                            <option>
                              Arabic Dominant (English as Additional)
                            </option>
                            <option>Other International Background</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Upload */}
                    <div className="pt-4">
                      <span className={LABEL}>
                        Previous Academic Reports &amp; Health Assessment
                        (Optional at this stage)
                      </span>
                      <div className="mt-2 flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-white/60 bg-white/40 p-6 text-center backdrop-blur-sm transition-colors hover:bg-white/60">
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white/60 text-forest shadow-sm backdrop-blur-sm">
                          <Glyph name="upload" className="h-5 w-5" />
                        </div>
                        <p className="mb-1 text-sm font-semibold text-forest">
                          Click to upload or drag documents here
                        </p>
                        <p className="max-w-sm text-xs text-forest/70">
                          Accepted formats: PDF, JPG, PNG up to 15MB. You can also
                          upload these during your in-person campus assessment.
                        </p>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex flex-col items-center justify-between gap-4 border-t border-white/60 pt-6 sm:flex-row">
                      <div className="flex items-center gap-2 text-xs text-forest/70">
                        <Glyph name="shield" className="h-3.5 w-3.5 text-forest" />
                        <span>
                          Encrypted &amp; Compliant with Qatar Data Protection Law
                        </span>
                      </div>
                      <div className="flex w-full items-center gap-3 sm:w-auto">
                        <button
                          type="button"
                          className="w-full rounded-full border border-white/70 bg-white/50 px-5 py-3 text-xs font-bold uppercase tracking-wide text-forest backdrop-blur-sm transition-colors hover:bg-white/70 sm:w-auto"
                        >
                          Save Draft
                        </button>
                        <button
                          type="submit"
                          className="flex w-full items-center justify-center gap-2 rounded-full bg-forest px-7 py-3 text-xs font-bold uppercase tracking-wide text-white shadow-md transition-all hover:bg-forest-hover sm:w-auto"
                        >
                          <span>Continue to Step 2</span>
                          <Glyph name="arrow" className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                {/* Discovery assessment callout */}
                <div className="flex flex-col items-center gap-6 rounded-3xl border border-white/50 bg-white/30 p-6 shadow-xl backdrop-blur-md sm:flex-row sm:p-8">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/60 bg-forest text-emerald-200 shadow">
                    <Glyph name="school" className="h-7 w-7" />
                  </div>
                  <div className="flex-grow text-center sm:text-left">
                    <h3 className="mb-1 font-serif text-lg font-bold text-forest">
                      Have you scheduled a student discovery assessment?
                    </h3>
                    <p className="text-xs leading-relaxed text-forest/80 sm:text-sm">
                      Every applicant receives a gentle, non-stressful classroom
                      readiness interaction with our Head of Lower Primary prior to
                      final placement.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="shrink-0 rounded-full border border-white/70 bg-white/60 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-forest backdrop-blur-sm transition-colors hover:bg-white/80"
                  >
                    View Assessment Guide
                  </button>
                </div>
              </div>

              {/* Right: advisor, tour, FAQs */}
              <div className="flex flex-col gap-6 lg:col-span-4">
                {/* Advisor */}
                <div className="rounded-3xl border border-white/50 bg-white/30 p-6 shadow-xl backdrop-blur-md">
                  <div className="mb-5 flex items-center gap-4">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-white/60 shadow-sm">
                      <Image
                        src={UNSPLASH.advisor}
                        alt="Sarah Al-Mansoori, Senior Admissions Counselor at AIS Doha"
                        fill
                        sizes="64px"
                        quality={75}
                        className="object-cover"
                      />
                      <span className="absolute bottom-1 right-1 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-white" />
                    </div>
                    <div>
                      <span className="mb-1 inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/60 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-forest backdrop-blur-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 motion-safe:animate-ping" />
                        Online • Available Now
                      </span>
                      <h3 className="font-serif text-lg font-bold leading-snug text-forest">
                        Sarah Al-Mansoori
                      </h3>
                      <p className="text-xs font-medium leading-tight text-forest/80">
                        Senior Admissions Counselor &amp; Early Years Specialist
                      </p>
                    </div>
                  </div>

                  <div className="mb-5 rounded-2xl border border-white/60 bg-white/50 p-4 backdrop-blur-sm">
                    <p className="font-serif text-xs italic leading-relaxed text-forest/90">
                      &quot;Marhaba! I am here to guide your family through every
                      stage of enrollment, bilingual assessments, and campus
                      tours.&quot;
                    </p>
                  </div>

                  <a
                    href="https://wa.me/97430603366"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="mb-4 flex w-full items-center justify-center gap-2 rounded-full bg-forest px-4 py-3 text-xs font-bold uppercase tracking-wide text-white shadow-md transition-all hover:bg-forest-hover"
                  >
                    <Glyph name="chat" className="h-4 w-4 text-emerald-300" />
                    <span>Fast Help via WhatsApp</span>
                  </a>

                  <div className="space-y-3 pt-2 text-xs text-forest/90">
                    <div className="flex items-center gap-2.5">
                      <Glyph name="call" className="h-3.5 w-3.5 text-forest" />
                      <span className="font-semibold">
                        +974 3060 3366
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Glyph name="mail" className="h-3.5 w-3.5 text-forest" />
                      <span className="font-semibold">
                        info@academiaedu.org
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Glyph
                        name="schedule"
                        className="mt-0.5 h-3.5 w-3.5 text-forest"
                      />
                      <span>Sunday – Thursday: 7:30 AM – 3:30 PM (AST)</span>
                    </div>
                  </div>
                </div>

                {/* Campus tour */}
                <div className="rounded-3xl border border-white/50 bg-white/30 p-6 shadow-xl backdrop-blur-md">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/70 bg-white/60 text-forest backdrop-blur-sm">
                      <Glyph name="event" className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold text-forest">
                        Personal Campus Tour
                      </h4>
                      <p className="text-[11px] text-forest/70">
                        Walk through our labs, courts &amp; libraries
                      </p>
                    </div>
                  </div>
                  <p className="mb-4 text-xs leading-relaxed text-forest/80">
                    Experience our outdoor learning courtyards, STEM suites, and
                    Olympic swimming complex first-hand in Al Mamoura.
                  </p>
                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-white/70 bg-white/50 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-forest backdrop-blur-sm transition-colors hover:bg-white/70"
                  >
                    <Glyph name="calendar" className="h-3.5 w-3.5" />
                    <span>Select Tour Date</span>
                  </button>
                </div>

                {/* FAQs */}
                <div className="rounded-3xl border border-white/50 bg-white/30 p-6 shadow-xl backdrop-blur-md">
                  <h4 className="mb-3 font-serif text-sm font-bold uppercase tracking-wider text-forest">
                    Admissions FAQs
                  </h4>
                  <div className="space-y-3 text-xs">
                    {FAQS.map((faq) => (
                      <details key={faq.q} className="group">
                        <summary className="flex list-none items-center justify-between gap-2 font-semibold text-forest">
                          <span>{faq.q}</span>
                          <Glyph
                            name="chevron"
                            className="h-3.5 w-3.5 shrink-0 text-forest transition-transform group-open:rotate-180"
                          />
                        </summary>
                        <p className="mt-2 pl-2 leading-relaxed text-forest/80">
                          {faq.a}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
