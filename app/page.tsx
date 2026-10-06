import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./components/site-header";
import SiteFooter from "./components/site-footer";
import MeshBackground from "./components/mesh-background";
import { ProgramsPanel } from "./components/programs-panel";
import { AdmissionsForm } from "./components/admissions-form";
import { ContactForm } from "./components/contact-form";
import { UNSPLASH } from "./lib/unsplash";

const STATS = [
  { value: "1 : 8", label: "Teacher-Student Ratio" },
  { value: "35+", label: "Nationalities Represented" },
  { value: "100%", label: "Inquiry-Based Learning" },
  { value: "IB Primary", label: "Candidate School" },
];

const STEPS = [
  {
    step: "01",
    title: "Online Application",
    desc: "Submit student details, Qatar ID, and previous scholastic logs through our fast digital portal.",
    time: "15 mins",
  },
  {
    step: "02",
    title: "Document Review",
    desc: "Our academic registrar reviews transcripts, health records, and immunization records.",
    time: "2 - 3 Days",
  },
  {
    step: "03",
    title: "Student Assessment",
    desc: "A friendly, age-appropriate readiness session and campus tour with our grade leaders.",
    time: "45 mins",
  },
  {
    step: "04",
    title: "Offer & Welcome",
    desc: "Official seat offer extended, orientation pack issued, and uniform fitting scheduled.",
    time: "Within 5 Days",
  },
];

const HIGHLIGHTS = [
  {
    id: UNSPLASH.readingLoft,
    alt: "Students reading in the modern library",
    kicker: "Modern Learning Commons",
    title: "The Junior Reading Loft & Maker Corner",
    wide: true,
  },
  {
    id: UNSPLASH.artStudio,
    alt: "Pottery and watercolor projects in the art studio",
    kicker: "Visual Arts",
    title: "Pottery & Watercolor Studio",
    wide: false,
  },
  {
    id: UNSPLASH.sportsPitch,
    alt: "Children playing on the outdoor sports pitch",
    kicker: "Recreation",
    title: "Shaded AstroTurf Sports Pitch",
    wide: false,
  },
];

const ArrowRight = (
  <svg
    className="h-4 w-4"
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
);

export default function Home() {
  return (
    <>
      <MeshBackground />
      <SiteHeader />

      <main id="top" className="flex-1">
        {/* Edge-to-edge hero */}
        <div className="relative flex min-h-[560px] items-center justify-center overflow-hidden pb-28 pt-24 sm:min-h-[640px] lg:min-h-[700px] lg:pb-32">
          <Image
            src={UNSPLASH.hero}
            alt="Grade School classroom at Academia International"
            fill
            priority
            sizes="100vw"
            quality={75}
            className="scale-105 object-cover object-center"
          />
          {/* A light haze off the top edge, not a full-screen scrim. The glass
              header and the glass headline card both need a light field to hold
              forest-green type over a photograph. */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/10 to-transparent" />

          <div className="relative mx-auto w-full max-w-3xl px-5 sm:px-6">
            {/* Local bloom behind the card. The card is sheer by design, so this
                is what keeps forest-green type above 4.5:1 over an arbitrary
                photograph: it lifts the pixels the text sits on and leaves the
                rest of the image untouched. */}
            <div
              aria-hidden="true"
              className="mesh-blob pointer-events-none absolute -inset-x-6 -inset-y-10 [--blob-color:#ffffffbf]"
            />
            <div className="relative space-y-4 rounded-3xl border border-white/60 bg-white/30 p-8 shadow-float backdrop-blur-md md:p-10">
              <span className="inline-block rounded-full border border-forest/15 bg-forest/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-forest">
                Welcome to AIS Primary Campus • Qatar
              </span>
              <h1 className="text-balance font-serif text-4xl font-bold leading-tight text-forest sm:text-5xl md:text-6xl">
                Nurturing Curiosity.
                <br />
                <span className="font-normal italic">Building Foundations.</span>
              </h1>
              <p className="mx-auto max-w-2xl text-balance text-base font-light leading-relaxed text-forest/70 md:text-lg">
                An inspiring primary education environment in Doha where inquiry,
                holistic character, and international excellence thrive side by side.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
                <a
                  href="#enrollment"
                  className="flex items-center gap-2 rounded-full bg-forest px-8 py-3.5 text-sm font-semibold text-white shadow-md transition hover:scale-105 hover:bg-forest-hover"
                >
                  Begin Enrollment
                  {ArrowRight}
                </a>
                <a
                  href="#programs"
                  className="rounded-full border border-white/70 bg-white/60 px-8 py-3.5 text-sm font-semibold text-forest backdrop-blur-sm transition hover:scale-105 hover:bg-white"
                >
                  Explore Programs
                </a>
              </div>
            </div>
          </div>

          {/* Floating stats bar */}
          <div className="absolute bottom-6 left-1/2 hidden w-11/12 max-w-5xl -translate-x-1/2 lg:block">
            <dl className="grid grid-cols-4 divide-x divide-white/50 rounded-2xl border border-white/60 bg-white/75 p-4 text-center shadow-float backdrop-blur-xl">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-serif text-2xl font-bold text-forest">
                    {stat.value}
                  </dd>
                  <dd className="text-xs font-medium text-forest/70">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mx-auto max-w-7xl space-y-20 px-5 py-16 sm:px-6 md:space-y-28 md:py-24">
          <ProgramsPanel
            heading="Featured Grade School Programs"
            kicker="Academic Pathways"
            detailsHref="#enrollment"
            ctaHref="#enrollment"
          />

          {/* Enrollment journey */}
          <section
            id="enrollment"
            className="scroll-mt-24 space-y-10 rounded-3xl border border-white/50 bg-white/40 p-8 shadow-xl backdrop-blur-md md:p-12"
          >
            <div className="max-w-2xl">
              <span className="rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold text-forest">
                Enrolling for Academic Year 2025 - 2026
              </span>
              <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-forest md:text-4xl">
                A Transparent, Supportive Enrollment Journey
              </h2>
              <p className="mt-2 text-sm text-forest/70">
                We believe admissions should be an encouraging introduction to our
                community. Four gentle steps to joining AIS Doha.
              </p>
            </div>

            <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((item, index) => (
                <li
                  key={item.step}
                  className="flex flex-col justify-between rounded-2xl border border-white/40 bg-white/25 p-6"
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest font-serif text-sm font-bold text-white">
                        {item.step}
                      </span>
                      <span className="rounded-full border border-forest/15 bg-white/50 px-2.5 py-0.5 text-[11px] font-semibold text-forest">
                        {item.time}
                      </span>
                    </div>
                    <h3 className="mb-2 font-serif text-lg font-bold text-forest">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-forest/70">
                      {item.desc}
                    </p>
                  </div>
                  <p className="pt-4 text-xs font-semibold text-forest">
                    Step {index + 1} of {STEPS.length}
                  </p>
                </li>
              ))}
            </ol>

            <div className="flex flex-col items-center justify-between gap-4 border-t border-forest/10 pt-6 sm:flex-row">
              <p className="text-xs text-forest/70">
                Need personalized advice? Our admissions counselors are ready via
                phone and WhatsApp.
              </p>
              <a
                href="#contact"
                className="flex items-center gap-2 rounded-full bg-forest px-6 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-forest-hover"
              >
                Start Step 1 Now
                {ArrowRight}
              </a>
            </div>
          </section>

          {/* Campus highlights */}
          <section id="campus" className="scroll-mt-24 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold text-forest">
                  Life at Academia
                </span>
                <h2 className="mt-2 text-balance font-serif text-3xl font-bold text-forest md:text-4xl">
                  Campus Highlights &amp; Smiling Faces
                </h2>
              </div>
              <Link
                href="/campus-life"
                className="hidden rounded-full border border-white/60 bg-white/40 px-5 py-2 text-xs font-semibold text-forest backdrop-blur-md transition hover:bg-white/60 sm:inline-flex"
              >
                View Full Gallery
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
              {HIGHLIGHTS.map((item) => (
                <figure
                  key={item.title}
                  className={`group relative h-72 overflow-hidden rounded-3xl border border-white/50 shadow-xl ${
                    item.wide ? "md:col-span-2" : ""
                  }`}
                >
                  <Image
                    src={item.id}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    quality={75}
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 text-white">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-forest-200">
                        {item.kicker}
                      </span>
                      <h3 className="font-serif text-lg font-bold">{item.title}</h3>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section id="admissions" className="scroll-mt-24 space-y-8">
            <div className="mx-auto max-w-4xl space-y-3 rounded-3xl border border-white/50 bg-white/40 p-8 text-center shadow-xl backdrop-blur-md md:p-10">
              <span className="rounded-full bg-forest/10 px-4 py-1.5 text-xs font-semibold text-forest">
                Academic Year 2025/2026 Admissions
              </span>
              <h2 className="text-balance font-serif text-3xl font-bold text-forest md:text-4xl">
                Start Your Child&apos;s Application
              </h2>
              <p className="mx-auto max-w-xl text-sm text-forest/70">
                Please complete our 3-step preliminary registration form.
                Applications are evaluated on a rolling basis.
              </p>
            </div>
            <AdmissionsForm />
          </section>

          <section id="contact" className="scroll-mt-24 space-y-8">
            <div className="mx-auto max-w-4xl space-y-3 text-center">
              <span className="inline-flex rounded-full bg-forest/10 px-4 py-1.5 text-xs font-semibold text-forest">
                Get in Touch
              </span>
              <h2 className="text-balance font-serif text-2xl font-bold text-forest md:text-3xl">
                Send a Message to AIS Administration
              </h2>
              <p className="mt-1 text-xs text-forest/70">
                We respond to all online inquiries within one business day.
              </p>
            </div>
            <ContactForm />
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
