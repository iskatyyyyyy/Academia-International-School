/**
 * Unsplash photo ids used by the Grade School design.
 *
 * The Stitch export embedded bare <img> tags pointing at
 * images.unsplash.com with a hand-written `?auto=format&fit=crop&w=...&q=80`
 * query. Feeding those URLs to next/image makes its optimizer append its own
 * `w`/`q` on top, producing duplicate query params and a double-encoded URL.
 * Instead we keep only the photo id and let this loader build the URL.
 *
 * The ids below the divider replaced the Stitch export's
 * `lh3.googleusercontent.com/aida*` URLs. Those Google CDN links are signed and
 * expire, so they eventually 404. Every image now resolves to a stable
 * `images.unsplash.com` photo id; none of them are Unsplash+ (`premium_photo_*`)
 * ids, which the loader's `images.unsplash.com` host would not serve.
 */
export const UNSPLASH = {
  hero: "photo-1577896851231-70ef18881754",
  kindergarten: "photo-1503454537195-1dcabb73ffb9",
  lowerPrimary: "photo-1427504494785-3a9ca7044f45",
  upperPrimary: "photo-1509062522246-3755977927d7",
  readingLoft: "photo-1544717305-2782549b5136",
  artStudio: "photo-1571260899304-425eee4c7efc",
  sportsPitch: "photo-1516627145497-ae6968895b74",
  advisor: "photo-1573497019940-1c28c88b4f3e",
  /** Students around low tables with an educator, sunlit outdoor classroom. */
  campusBanner: "photo-1551241681-2aae145af5df",
  /** Young students with a teacher in a bright classroom. */
  campusCourtyard: "photo-1719159381916-062fa9f435a6",
  /** Children working together at classroom desks. */
  classroom: "photo-1637148602945-433108982492",
  /** Aerial campus view, used in place of the illustrated map graphic. */
  campusAerial: "photo-1746587404661-d19950bfc579",
  /** Children running on an outdoor track. */
  sportsDay: "photo-1700914298569-8f396c0802bb",
  /** Children in lab coats running a science experiment. */
  scienceFair: "photo-1758685734153-132c8620c1bd",
  /** A child and an adult learning with plants. */
  ecoGarden: "photo-1657664043009-c4975cb4eed3",
  /** Young child throwing clay on a pottery wheel. */
  ceramicStudio: "photo-1753164726456-487d6c6d1f9d",
  /** Young children performing together. */
  musicalGala: "photo-1644739827632-41155cb4f447",
} as const;

export type UnsplashId = (typeof UNSPLASH)[keyof typeof UNSPLASH];
