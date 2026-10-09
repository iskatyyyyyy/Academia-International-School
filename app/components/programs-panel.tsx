import Image from "next/image";
import { UNSPLASH, type UnsplashId } from "../lib/unsplash";

/**
 * Program content for the home page panel and the standalone view.
 *
 * Copy and data live here rather than in the view so Home and /programs render
 * the same pathways from one source and cannot drift apart.
 */
type Program = {
  image: UnsplashId;
  alt: string;
  title: string;
  body?: string;
  tags?: readonly string[];
  cta: string;
};

const PROGRAMS: readonly Program[] = [
  {
    image: UNSPLASH.kindergarten,
    alt: "Kindergarten children at play",
    title: "Kindergarten",
    body: "Structured play-based learning that awakens phonics, early numeracy, emotional regulation, and joyful social collaboration in a warm, welcoming setting.",
    tags: ["Sensory Play", "Arabic Foundations"],
    cta: "Explore Kindergarten",
  },
  {
    image: UNSPLASH.lowerPrimary,
    alt: "Students working together",
    title: "Grade School",
    body: "Building reading fluency and mathematical reasoning through collaborative scientific investigations, project-based inquiry, computational robotics, debate, and student leadership.",
    tags: ["Guided Literacy", "STEM Discovery", "Research & Debate"],
    cta: "Explore Grade School",
  },
  {
    image: UNSPLASH.upperPrimary,
    alt: "Students in a science classroom",
    title: "Junior High School",
    body: "The Junior High School Program provides students with a strong academic foundation, essential life skills, and personal development to prepare them for Senior High School and future success.",
    cta: "Explore Junior High School",
  },
  {
    image: UNSPLASH.classroom,
    alt: "Students working together at classroom desks",
    title: "Senior High School",
    body: "Senior High School offers six strands: STEM, ABM, HUMSS, GAS, TVL-HE, and TVL-ICT.",
    tags: ["STEM", "ABM", "HUMSS", "GAS", "TVL-HE", "TVL-ICT"],
    cta: "Explore Senior High School",
  },
];

type ProgramsPanelProps = {
  /**
   * Section heading. Omit when the owning view already renders an h1 for this
   * content, so a page never ships two headings for the same thing.
   */
  heading?: string;
  /** Omit the eyebrow; the standalone view leads with its own h1 instead. */
  kicker?: string;
  /** Trailing "details" link, e.g. /#enrollment. */
  detailsHref: string;
  /** Destination for every card CTA. */
  ctaHref: string;
};

export function ProgramsPanel({
  heading,
  kicker,
  detailsHref,
  ctaHref,
}: ProgramsPanelProps) {
  const hasHeader = Boolean(heading || kicker);

  return (
    <section id="programs" className="scroll-mt-24 space-y-8">
      {hasHeader ? (
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            {kicker ? (
              <span className="rounded-full bg-forest/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-forest">
                {kicker}
              </span>
            ) : null}
            {heading ? (
              <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-forest md:text-4xl">
                {heading}
              </h2>
            ) : null}
          </div>
          <a
            href={detailsHref}
            className="flex items-center gap-1.5 self-start text-xs font-bold text-forest hover:underline md:self-end"
          >
            View full curriculum details
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
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {PROGRAMS.map((program) => (
          <article
            key={program.title}
            className="group flex flex-col justify-between rounded-3xl border border-white/50 bg-white/30 p-8 shadow-xl backdrop-blur-md transition-shadow hover:shadow-glass-lift"
          >
            <div className="space-y-4">
              <div className="relative mb-5 h-48 overflow-hidden rounded-2xl border border-white/40">
                <Image
                  src={program.image}
                  alt={program.alt}
                  fill
                  sizes="(min-width: 1280px) 300px, (min-width: 640px) 45vw, 100vw"
                  quality={75}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-2xl font-bold text-forest">
                {program.title}
              </h3>
              {program.body ? (
                <p className="text-sm leading-relaxed text-forest">
                  {program.body}
                </p>
              ) : null}
              {program.tags ? (
                <ul className="flex flex-wrap gap-2 pt-2">
                  {program.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/70 bg-white/60 px-2.5 py-1 text-xs font-semibold text-forest backdrop-blur-sm"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            <div className="pt-6">
              <a
                href={ctaHref}
                className="flex w-full items-center justify-center gap-1.5 rounded-full bg-forest py-2.5 text-xs font-semibold text-white transition hover:bg-forest-hover"
              >
                {program.cta}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
