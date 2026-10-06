"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDES = ["/ais-1.jpg", "/ais-5.jpg"];
const HOLD_MS = 6000;
const FADE_MS = 1200;

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const timer = setTimeout(
      () => setIndex((current) => (current + 1) % SLIDES.length),
      HOLD_MS,
    );
    return () => clearTimeout(timer);
  }, [reduced, index]);

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      {SLIDES.map((src, position) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={position === 0}
          sizes="100vw"
          quality={75}
          className={`scale-105 object-cover object-center transition-opacity ease-in-out ${
            position === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transitionDuration: reduced ? "0ms" : `${FADE_MS}ms`,
          }}
        />
      ))}
    </div>
  );
}
