import type { Metadata } from "next";
import MeshBackground from "../components/mesh-background";
import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";
import { ProgramsView } from "../components/programs-view";

export const metadata: Metadata = {
  title: "Grade School Programs | Academia International School",
  description:
    "Explore the Kindergarten, Lower Primary, and Upper Primary pathways at Academia International School in Doha — curriculum, class times, and cohort details for ages 4 to 11.",
};

export default function ProgramsPage() {
  return (
    <>
      <MeshBackground />
      <SiteHeader />

      <main className="flex-1 pt-28 md:pt-36">
        <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-6 md:pb-32">
          <ProgramsView />
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
