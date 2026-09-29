import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Unsplash is reached through a custom loader, which rewrites ?w / ?q
    // itself, so it is registered globally instead of per-instance. Passing
    // the loader as a prop from a Server Component is not allowed, since
    // functions cannot cross the RSC boundary.
    loader: "custom",
    loaderFile: "./app/lib/unsplash-loader.ts",
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
