import CinematicStory from "@/components/CinematicStory";
import ProgramShowcase from "@/components/ProgramShowcase";
import { WhyArmour } from "@/components/HomeSections";
import Hero from "@/components/home/Hero";
import Gallery from "@/components/home/Gallery";
import PlansPreview from "@/components/home/PlansPreview";
import Reviews from "@/components/home/Reviews";
import Bmi from "@/components/home/Bmi";
import Visit from "@/components/home/Visit";
import MobileActionBar from "@/components/home/MobileActionBar";

// Server component. Only the pieces that need browser state (hero strip, story scroll,
// BMI inputs, mobile action bar) are client components.
//
// Rhythm: dark hero, light facts, dark story/programs/gallery, light plans, dark the rest.
export default function HomePage() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      <Hero />
      <WhyArmour />
      <CinematicStory />
      <ProgramShowcase />
      <Gallery />
      <PlansPreview />
      <Reviews />
      <Bmi />
      <Visit />
      <MobileActionBar />
      {/* Keeps the last content clear of the fixed action bar on phones */}
      <div className="h-14 md:hidden" aria-hidden="true" />
    </div>
  );
}
