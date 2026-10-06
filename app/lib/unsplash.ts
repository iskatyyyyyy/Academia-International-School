/**
 * photographs used across the site, as full images.unsplash.com URLs.
 *
 * The Stitch export embedded bare <img> tags pointing at images.unsplash.com
 * with a hand-written `?auto=format&fit=crop&w=...&q=80` query. These are now
 * plain URLs with no query string: next/image's default loader appends its own
 * `w`/`q` through /_next/image, so nothing here may carry query params of its
 * own. A custom loader previously built these URLs from bare photo ids, but it
 * had to disable Next's built-in optimizer to exist, which meant every local
 * photograph in /public shipped raw. With the default loader both local and
 * Unsplash images are resized and re-encoded.
 *
 * Every id below is a stable images.unsplash.com photo id; none are Unsplash+
 * (`premium_photo_*` ids, which images.unsplash.com would not serve). They are
 * allow-listed in next.config.ts under `images.remotePatterns`.
 */
const UNSPLASH_BASE = "https://images.unsplash.com/";

export const UNSPLASH = {
  hero: `${UNSPLASH_BASE}photo-1577896851231-70ef18881754`,
  kindergarten: `${UNSPLASH_BASE}photo-1503454537195-1dcabb73ffb9`,
  lowerPrimary: `${UNSPLASH_BASE}photo-1427504494785-3a9ca7044f45`,
  upperPrimary: `${UNSPLASH_BASE}photo-1509062522246-3755977927d7`,
  readingLoft: `${UNSPLASH_BASE}photo-1544717305-2782549b5136`,
  artStudio: `${UNSPLASH_BASE}photo-1571260899304-425eee4c7efc`,
  sportsPitch: `${UNSPLASH_BASE}photo-1516627145497-ae6968895b74`,
  advisor: `${UNSPLASH_BASE}photo-1573497019940-1c28c88b4f3e`,
  /** Students around low tables with an educator, sunlit outdoor classroom. */
  campusBanner: `${UNSPLASH_BASE}photo-1551241681-2aae145af5df`,
  /** Young students with a teacher in a bright classroom. */
  campusCourtyard: `${UNSPLASH_BASE}photo-1719159381916-062fa9f435a6`,
  /** Children working together at classroom desks. */
  classroom: `${UNSPLASH_BASE}photo-1637148602945-433108982492`,
  /** Aerial campus view, used in place of the illustrated map graphic. */
  campusAerial: `${UNSPLASH_BASE}photo-1746587404661-d19950bfc579`,
  /** Children running on an outdoor track. */
  sportsDay: `${UNSPLASH_BASE}photo-1700914298569-8f396c0802bb`,
  /** Children in lab coats running a science experiment. */
  scienceFair: `${UNSPLASH_BASE}photo-1758685734153-132c8620c1bd`,
  /** A child and an adult learning with plants. */
  ecoGarden: `${UNSPLASH_BASE}photo-1657664043009-c4975cb4eed3`,
  /** Young child throwing clay on a pottery wheel. */
  ceramicStudio: `${UNSPLASH_BASE}photo-1753164726456-487d6c6d1f9d`,
  /** Young children performing together. */
  musicalGala: `${UNSPLASH_BASE}photo-1644739827632-41155cb4f447`,
} as const;

export type UnsplashId = (typeof UNSPLASH)[keyof typeof UNSPLASH];
