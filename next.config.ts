import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The default loader. A custom `loaderFile` previously rewrote bare
    // Unsplash photo ids into full URLs, but Next disables its own image
    // optimizer whenever `loader` is anything but `default`, so every local
    // photograph in /public was served raw. Components now pass full URLs
    // (see app/lib/unsplash.ts) and no query string of their own, so the
    // default loader can append `w`/`q` through /_next/image for both local
    // and remote images.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/photo-*",
      },
      {
        // The Stitch exports reference generated imagery on Google's CDN rather
        // than Unsplash. These are plain image URLs with no loader rewrite, so
        // next/image needs the host allowed to fetch them. Two prefixes are in
        // play: `/aida-public/*` for most cards, and bare `/aida/*` for the
        // courtyard photograph on /contact. remotePatterns matches on pathname
        // prefix, so both need listing or the unmatched one throws at runtime
        // while the build still passes.
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/aida-public/*",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/aida/*",
      },
    ],
    // Next 16 defaults to [75]; the loader requests 75, so this is just explicit.
    qualities: [75],
  },
};

export default nextConfig;
