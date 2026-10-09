import type { Metadata } from "next";
import Image from "next/image";
import MeshBackground from "../components/mesh-background";
import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";
import { UNSPLASH } from "../lib/unsplash";

/**
 * Contact & Visit Us, ported from the Stitch export of
 * "Contact & Visit Us | Academia International School - Grade School, Doha".
 *
 * Copy, department details, phone extensions, emails, office locations, form
 * field labels, placeholders, and select options are verbatim from that export,
 * as is the inline SVG icon set.
 *
 * The export's form posted to `action="#"`. There is no mail or CRM endpoint
 * wired up in this project, so it stays a non-submitting form rather than
 * silently posting nowhere. Wire the action when a real handler exists.
 */

export const metadata: Metadata = {
  title: "Contact & Visit Us | Academia International School",
  description:
    "Reach the AIS admissions desk, parent-teacher support, and finance offices, or schedule a guided campus walkthrough in Al Mamoura, Doha.",
};

/** Inline SVG paths, verbatim from the export. */
const ICONS = {
  clock: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  phone:
    "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  mail: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  person:
    "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  building:
    "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  pin: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
  info: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  check: "M5 13l4 4L19 7",
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

const DEPARTMENTS = [
  {
    id: "admissions",
    badge: "Primary Enrollment & Tours",
    status: "Desk Active",
    title: "Admissions Desk",
    description:
      "For kindergarten through grade 6 enrollment inquiries, application status verification, and personalized campus walkthroughs with our academic leadership.",
    details: [
      { icon: "clock", label: "Hours", value: "Sun – Thu: 7:30 AM – 3:30 PM (AST)" },
      { icon: "phone", label: "Phone", value: "+974 3060 3366" },
      { icon: "mail", label: "Email", value: "info@academiaedu.org" },
      {
        icon: "person",
        label: "Lead Contact",
        value: "Ms. Sarah Al-Mansoori, Senior Counselor",
      },
    ],
    cta: "Connect via WhatsApp Desk →",
    href: "https://wa.me/97430603366",
    external: true,
  },
  {
    id: "academic",
    badge: "Academic & Pastoral Care",
    status: "Available",
    title: "Parent-Teacher Support",
    description:
      "Direct coordination with grade-level teaching coordinators, bilingual language specialists, and student wellbeing mentors across all primary cohorts.",
    details: [
      { icon: "clock", label: "Hours", value: "Sun – Thu: 7:15 AM – 2:45 PM" },
      { icon: "phone", label: "Phone", value: "+974 3060 3366" },
      { icon: "mail", label: "Email", value: "info@academiaedu.org" },
      {
        icon: "building",
        label: "Office",
        value: "Academic Admin Suite, Bldg 42, Fl 1",
      },
    ],
    cta: "Schedule Teacher Conference →",
    href: "#inquiry-form",
    external: false,
  },
  {
    id: "finance",
    badge: "Tuition & Accounts",
    status: "Bursar Open",
    title: "Finance & Tuition Office",
    description:
      "Tuition schedules, corporate sibling benefits, payment installment arrangements, and Qatar Ministry educational voucher verification.",
    details: [
      { icon: "clock", label: "Hours", value: "Sun – Thu: 7:30 AM – 2:00 PM" },
      { icon: "phone", label: "Phone", value: "+974 3060 3366" },
      { icon: "mail", label: "Email", value: "info@academiaedu.org" },
      { icon: "building", label: "Office", value: "Administration Bursar Wing, Ground Fl" },
    ],
    cta: "Download Fee Schedule 2025/26 ↘",
    href: "#fee-schedule",
    external: false,
  },
] as const;

const DEPARTMENT_OPTIONS = [
  { value: "admissions", label: "Admissions Desk (KG to Grade 6)" },
  { value: "academic", label: "Academic & Pastoral Care" },
  { value: "finance", label: "Tuition & Billing Office" },
  { value: "general", label: "General Campus Inquiry" },
] as const;

const GRADE_OPTIONS = [
  { value: "", label: "Please select a grade entry cohort..." },
  { value: "kg1", label: "Early Years (KG1 - Age 3 to 4)" },
  { value: "kg2", label: "Kindergarten (KG2 - Age 4 to 5)" },
  { value: "lower_primary", label: "Lower Primary (Grades 1 – 3)" },
  { value: "upper_primary", label: "Upper Primary (Grades 4 – 6)" },
] as const;

const FACILITIES = [
  {
    icon: "pin",
    label: "Campus Address",
    value:
      "Bldg. 25, Street 623, Zone 43, Ahmed Bin Hazem St. Al Mamoura, Doha, Qatar",
  },
  {
    icon: "info",
    label: "Nearby Landmarks",
    value:
      "Opposite Aspire Zone & Villaggio, easily accessible via Al Bustan St. and Salwa Road.",
  },
  {
    icon: "check",
    label: "Visitor Parking",
    value: "Dedicated visitor parking and shaded family reception entrance at Gate 2.",
  },
] as const;

const TOUR_INCLUDES = [
  "Small Cohort Walking Tours",
  "Meet the Primary Leadership",
  "Q&A with Bilingual Specialists",
] as const;

const GLASS_PANEL =
  "rounded-3xl border border-white/50 bg-white/30 shadow-xl backdrop-blur-md";
const GLASS_PILL =
  "inline-block rounded-full border border-white/60 bg-white/50 px-3 py-1 text-xs font-semibold text-forest backdrop-blur-sm";
const FIELD =
  "w-full rounded-2xl border border-white/50 bg-white/40 px-4 py-3 text-sm text-forest backdrop-blur-sm transition-colors placeholder:text-forest/60 focus:border-forest focus:bg-white/60 focus:outline-none focus:ring-1 focus:ring-forest";
const LABEL =
  "mb-2 block text-xs font-semibold uppercase tracking-wider text-forest";

export default function ContactPage() {
  return (
    <>
      <MeshBackground />
      <SiteHeader />

      <main className="flex-1 pt-24 md:pt-28">
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 md:py-10 lg:px-8">
          {/* Hero */}
          <section className="mx-auto max-w-3xl pb-12 pt-4 text-center">
            <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-forest backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-forest motion-safe:animate-pulse" />
              Get in Touch • Al Mamoura, Doha
            </div>
            <h1 className="mb-5 text-balance font-serif text-4xl font-medium leading-[1.15] tracking-tight text-forest sm:text-5xl lg:text-6xl">
              We are Here to Guide Your Family
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-forest/80 sm:text-lg">
              Whether you are inquiring about 2025/26 admissions, scheduling a
              guided discovery walkthrough, or seeking student support, our
              dedicated administration team in Al Mamoura is ready to assist.
            </p>
          </section>

          {/* Department directory */}
          <section className="mb-14">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
              {DEPARTMENTS.map((dept) => (
                <article
                  key={dept.id}
                  className={`${GLASS_PANEL} relative flex flex-col justify-between overflow-hidden p-8 transition-shadow duration-200 hover:shadow-glass-lift`}
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <span className={GLASS_PILL}>{dept.badge}</span>
                      <span
                        className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500"
                        title={dept.status}
                      />
                    </div>
                    <h2 className="mb-3 font-serif text-2xl font-semibold text-forest">
                      {dept.title}
                    </h2>
                    <p className="mb-6 text-sm leading-relaxed text-forest/80">
                      {dept.description}
                    </p>
                    <div className="space-y-3 border-t border-white/60 pt-3 text-xs text-forest/80">
                      {dept.details.map((detail) => (
                        <div key={detail.label} className="flex items-start gap-2.5">
                          <Glyph
                            name={detail.icon as IconName}
                            className="mt-0.5 h-4 w-4 shrink-0 text-forest"
                          />
                          <span>
                            <strong>{detail.label}:</strong> {detail.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 border-t border-white/60 pt-6">
                    {dept.external ? (
                      <a
                        href={dept.href}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="inline-flex w-full items-center justify-center rounded-full bg-forest px-4 py-3 text-xs font-semibold text-white shadow-md transition-colors hover:bg-forest-hover"
                      >
                        {dept.cta}
                      </a>
                    ) : (
                      <a
                        href={dept.href}
                        className="inline-flex w-full items-center justify-center rounded-full bg-forest px-4 py-3 text-xs font-semibold text-white shadow-md transition-colors hover:bg-forest-hover"
                      >
                        {dept.cta}
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Form & campus map */}
          <section
            id="inquiry-form"
            className="mb-14 grid scroll-mt-28 grid-cols-1 items-stretch gap-8 lg:grid-cols-12"
          >
            {/* Inquiry form */}
            <div
              className={`${GLASS_PANEL} flex flex-col justify-between p-8 sm:p-10 lg:col-span-7`}
            >
              <div>
                <span className={GLASS_PILL}>DIRECT INQUIRY</span>
                <h2 className="mb-3 mt-3 font-serif text-3xl font-semibold text-forest sm:text-4xl">
                  Send a Message to AIS
                </h2>
                <p className="mb-8 text-sm leading-relaxed text-forest/80">
                  Complete the inquiry form below and an admissions or department
                  officer will respond within 24 business hours.
                </p>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="fullName" className={LABEL}>
                        Parent / Guardian Name *
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        className={FIELD}
                        placeholder="e.g. Fatima Al-Kuwari"
                        type="text"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="emailAddress" className={LABEL}>
                        Email Address *
                      </label>
                      <input
                        id="emailAddress"
                        name="emailAddress"
                        className={FIELD}
                        placeholder="name@domain.qa"
                        type="email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className={LABEL}>
                        Mobile / WhatsApp (+974) *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-sm font-medium text-forest/70">
                          +974
                        </span>
                        <input
                          id="phone"
                          name="phone"
                          className={`${FIELD} pl-16`}
                          placeholder="5500 0000"
                          type="tel"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="department" className={LABEL}>
                        Inquiring Department *
                      </label>
                      <select
                        id="department"
                        name="department"
                        className={FIELD}
                        defaultValue="admissions"
                      >
                        {DEPARTMENT_OPTIONS.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="gradeLevel" className={LABEL}>
                      Child&apos;s Expected Grade Level (2025/26)
                    </label>
                    <select
                      id="gradeLevel"
                      name="gradeLevel"
                      className={FIELD}
                      defaultValue=""
                    >
                      {GRADE_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className={LABEL}>
                      Your Inquiry or Questions *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className={`${FIELD} resize-none`}
                      placeholder="Tell us how we can assist your child's educational pathway or request specific tour dates..."
                      rows={4}
                      required
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-1">
                    <input
                      id="tourRequest"
                      name="tourRequest"
                      type="checkbox"
                      className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded border-white/70 bg-white/40 text-forest focus:ring-forest"
                    />
                    <label
                      htmlFor="tourRequest"
                      className="cursor-pointer text-xs font-normal leading-normal tracking-normal text-forest/80"
                    >
                      I would also like to schedule an in-person campus
                      walkthrough and classroom observation in Al Mamoura.
                    </label>
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-full bg-forest px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-forest-hover sm:w-auto"
                    >
                      Submit Inquiry Message →
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Campus location */}
            <div
              className={`${GLASS_PANEL} flex flex-col justify-between p-8 sm:p-10 lg:col-span-5`}
            >
              <div>
                <span className={GLASS_PILL}>DOHA CAMPUS LOCATION</span>
                <h2 className="mb-3 mt-3 font-serif text-3xl font-semibold text-forest sm:text-4xl">
                  Visit Our Sunlit Al Mamoura Campus
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-forest/80">
                  Situated within the central educational cluster of Al Mamoura, our
                  state-of-the-art grade school facility provides a tranquil and
                  secure learning environment.
                </p>

                <div className="mb-6 space-y-3 text-xs text-forest/80">
                  {FACILITIES.map((facility) => (
                    <div key={facility.label} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/50 text-forest backdrop-blur-sm">
                        <Glyph name={facility.icon as IconName} className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <strong className="text-forest">{facility.label}:</strong>
                        <br />
                        {facility.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="group relative h-56 overflow-hidden rounded-2xl border border-white/60">
                  <Image
                    src={UNSPLASH.campusAerial}
                    alt="Aerial view of the modern primary school campus in the Al Mamoura district of Doha, Qatar"
                    fill
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    quality={75}
                    className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:group-hover:scale-100"
                  />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 rounded-xl border border-white/70 bg-white/70 px-3 py-2 text-xs shadow-sm backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-600 motion-safe:animate-ping" />
                      <span className="font-semibold text-forest">
                        Academia International School • Al Mamoura
                      </span>
                    </div>
                    <span className="shrink-0 font-mono text-[10px] text-forest/70">
                      Zone 43
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 border-t border-white/60 pt-6 sm:flex-row">
                <a
                  href="https://maps.google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-forest px-4 py-3 text-center text-xs font-semibold text-white shadow-md transition-colors hover:bg-forest-hover"
                >
                  Open in Google Maps ↗
                </a>
                <a
                  href="#directions"
                  className="inline-flex flex-1 items-center justify-center rounded-full border border-white/60 bg-white/50 px-4 py-3 text-center text-xs font-semibold text-forest backdrop-blur-sm transition-colors hover:bg-white/70"
                >
                  Directions via Salwa Road
                </a>
              </div>
            </div>
          </section>

          {/* Campus visit banner */}
          <section
            className={`${GLASS_PANEL} mb-14 overflow-hidden p-6 sm:p-8`}
          >
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
              <div className="space-y-4 md:col-span-7">
                <span className={GLASS_PILL}>CAMPUS VISIT EXPERIENCE</span>
                <h2 className="font-serif text-2xl font-semibold text-forest sm:text-3xl">
                  Experience Our Sunlit Courtyard Classrooms
                </h2>
                <p className="text-sm leading-relaxed text-forest/80">
                  We welcome prospective families to see our bilingual learners
                  thrive in lush, architectural courtyard gardens. Discover our
                  supportive primary classrooms firsthand through a personalized
                  morning tour.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-xs font-medium text-forest">
                  {TOUR_INCLUDES.map((item) => (
                    <span key={item} className="flex items-center gap-1.5">
                      <Glyph name="check" className="h-4 w-4 text-forest" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="relative h-56 overflow-hidden rounded-2xl border border-white/60 sm:h-64">
                  <Image
                    src={UNSPLASH.classroom}
                    alt="A primary school teacher guiding young students through a sunlit courtyard garden classroom on a modern Doha campus"
                    fill
                    sizes="(min-width: 768px) 40vw, 90vw"
                    quality={75}
                    className="object-cover"
                  />
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
