import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: "ARMOUR 24-7 GYM",
  description: "Fitness facility with strength training, imported equipment and 24/7 member access in Hathijan, Ahmedabad.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://armour-gym-pi.vercel.app",
  telephone: "+918160697163",
  image: "/images/hero_armour.webp",
  hasMap: "https://maps.app.goo.gl/fdHFDqTDaHNvw5Pf6",
  address: {
    "@type": "PostalAddress",
    streetAddress: "C-601, 602 Shalin Square, Hathijan Circle",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "382445",
    addressCountry: "IN",
  },
};

import CinematicStory from "@/components/CinematicStory";
import ProgramShowcase from "@/components/ProgramShowcase";
import { WhyArmour } from "@/components/HomeSections";
import Hero from "@/components/home/Hero";
import Gallery from "@/components/home/Gallery";
import PlansPreview from "@/components/home/PlansPreview";
import Reviews from "@/components/home/Reviews";
import Bmi from "@/components/home/Bmi";
import MobileActionBar from "@/components/home/MobileActionBar";

// Server component. Only the pieces that need browser state (hero strip, story scroll,
// BMI inputs, mobile action bar) are client components.
//
// Rhythm: dark hero, light facts, dark story/programs/gallery, light plans, dark the rest.
export default function HomePage() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <WhyArmour />
      <CinematicStory />
      <ProgramShowcase />
      <Gallery />
      <PlansPreview />
      <Reviews />
      <Bmi />
      <MobileActionBar />
      {/* Keeps the last content clear of the fixed action bar on phones */}
      <div className="h-14 md:hidden" aria-hidden="true" />
    </div>
  );
}
