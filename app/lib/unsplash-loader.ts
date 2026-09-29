"use client";

/**
 * Global next/image loader for images.unsplash.com, wired up through
 * `images.loaderFile` in next.config.ts.
 *
 * The Stitch export embedded bare <img> tags pointing at images.unsplash.com
 * with a hand-written `?auto=format&fit=crop&w=...&q=80` query. Feeding those
 * full URLs to next/image makes its optimizer append its own `w`/`q` on top,
 * producing duplicate query params and a double-encoded URL. So components
 * pass only the bare photo id and this loader builds the URL itself.
 *
 * The file has to be a Client Component because next/image needs to serialize
 * the loader function across the server/client boundary.
 */
export default function unsplashLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  return `https://images.unsplash.com/${src}?auto=format&fit=crop&w=${width}&q=${quality ?? 75}`;
}
