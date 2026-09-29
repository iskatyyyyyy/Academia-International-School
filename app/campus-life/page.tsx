import type { Metadata } from "next";
import MeshBackground from "../components/mesh-background";
import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";
import CampusLifeView from "../components/campus-life-view";

/**
 * Campus Life route. The body lives in `CampusLifeView` because the export's
 * category filter chips are stateful; this file stays a server component so the
 * title and description remain statically rendered.
 */

export const metadata: Metadata = {
  title: "Campus Life | Academia International School",
  description:
    "Collaborative discovery, athletic milestones, creative expression, and lifelong friendships at our Doha campus.",
};

export default function CampusLifePage() {
  return (
    <>
      <MeshBackground />
      <SiteHeader />

      <main className="flex-1 pt-24 md:pt-28">
        <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 md:py-16">
          <CampusLifeView />
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
