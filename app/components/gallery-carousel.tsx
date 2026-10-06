"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const INTERVAL_MS = 3000;
const SLIDE_MS = 500;
const SLIDE_EASE = "cubic-bezier(0.77, 0, 0.175, 1)";

const SLIDES = [
  { src: "/ais-1.jpg", label: "AIS 1" },
  { src: "/ais-5.jpg", label: "AIS 5" },
  { src: "/adm-1.jpg", label: "ADM 1" },
] as const;

const Chevron = ({ flipped }: { flipped?: boolean }) => (
  <svg
    className={`h-4 w-4 ${flipped ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
      d="M9 5l7 7-7 7"
    />
  </svg>
);

export function GalleryCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  const running = !paused && !reduced;

  useEffect(() => {
    if (!running) return;
    const timer = setTimeout(
      () => setIndex((current) => (current + 1) % SLIDES.length),
      INTERVAL_MS,
    );
    return () => clearTimeout(timer);
  }, [running, index]);

  const goTo = (next: number) =>
    setIndex((next + SLIDES.length) % SLIDES.length);

  const controlClass =
    "flex items-center justify-center rounded-full border border-white/60 bg-white/75 text-forest shadow-sm backdrop-blur-md transition-colors duration-150 hover:bg-white";

  return (
    <div className="relative h-[320px] overflow-hidden rounded-3xl border border-white/50 shadow-xl sm:h-[400px] md:h-[460px]">
      <div
        className="flex h-full will-change-transform"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: reduced
            ? "none"
            : `transform ${SLIDE_MS}ms ${SLIDE_EASE}`,
        }}
      >
        {SLIDES.map((slide) => (
          <div key={slide.src} className="relative h-full w-full shrink-0">
            <Image
              src={slide.src}
              alt={`Academia International School — ${slide.label}`}
              fill
              sizes="(min-width: 768px) 1216px, 100vw"
              quality={75}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/50 to-transparent"
      />

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Previous photo"
        className={`absolute left-4 top-1/2 h-10 w-10 -translate-y-1/2 ${controlClass}`}
      >
        <Chevron flipped />
      </button>

      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Next photo"
        className={`absolute right-4 top-1/2 h-10 w-10 -translate-y-1/2 ${controlClass}`}
      >
        <Chevron />
      </button>

      <div className="absolute bottom-4 right-4 flex items-center gap-3 rounded-full bg-black/40 px-3.5 py-2 backdrop-blur-md">
        <div className="flex items-center gap-2">
          {SLIDES.map((slide, position) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => goTo(position)}
              aria-label={`Show photo ${position + 1} of ${SLIDES.length}`}
              aria-current={position === index ? "true" : undefined}
              className={`h-2 w-2 rounded-full transition-colors duration-150 ${
                position === index
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          aria-pressed={paused}
          aria-label={paused ? "Play gallery" : "Pause gallery"}
          className="flex h-5 w-5 items-center justify-center text-white/85 transition-colors duration-150 hover:text-white"
        >
          {paused ? (
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M6 5h4v14H6zM14 5h4v14h-4z" />
            </svg>
          )}
        </button>
      </div>

      <p className="sr-only" aria-live="polite">
        {`Photo ${index + 1} of ${SLIDES.length}: ${SLIDES[index].label}`}
      </p>
    </div>
  );
}
