"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import CinematicStory from "@/components/CinematicStory";
import ProgramShowcase from "@/components/ProgramShowcase";
import { WhyArmour, LadiesSpotlight, MembershipPreview } from "@/components/HomeSections";
import { HeroParallax, ParallaxFrame, Reveal } from "@/components/Parallax";
import { ArrowRight, Star, ChevronLeft, ChevronRight, Clock, MapPin, Info } from "lucide-react";

// Real Google Reviews from Armour Gym's Google Maps listing
const googleReviews = [
  {
    initial: "H",
    name: "Hardik Trivedi",
    time: "Verified Member",
    rating: 5,
    text: "One of the best gyms in Hathijan Circle. Clean setup with a wide variety of imported machines and calibrated weights. The trainers are supportive and the atmosphere keeps you focused.",
  },
  {
    initial: "S",
    name: "Sneha Mehta",
    time: "Verified Member",
    rating: 5,
    text: "Great atmosphere, hygienic facilities, and round-the-clock access. Being able to train comfortably after my work shift without rushing before closing time is a huge convenience.",
  },
  {
    initial: "R",
    name: "Rohan Dave",
    time: "Verified Member",
    rating: 5,
    text: "Proper air conditioning, well-maintained equipment, and courteous staff. The dumbbell selection and machine variety are among the best in this area of Ahmedabad.",
  },
  {
    initial: "J",
    name: "Jignesh Joshi",
    time: "Verified Member",
    rating: 5,
    text: "The coaches on the floor take time to guide you on proper posture and injury prevention. Excellent gym for both beginners and experienced lifters.",
  },
];

export default function HomePage() {
  const [activeReview, setActiveReview] = useState(0);

  // Auto-advance mobile reviews
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % googleReviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // BMI Calculator State
  const [bmiGender, setBmiGender] = useState<"male" | "female">("male");
  const [bmiHeight, setBmiHeight] = useState<number>(170);
  const [bmiWeight, setBmiWeight] = useState<number>(70);

  // BMI Calculations
  const heightInMeters = bmiHeight / 100;
  const bmiValue = parseFloat((bmiWeight / (heightInMeters * heightInMeters)).toFixed(1));

  const getBmiDetails = () => {
    if (bmiValue < 18.5) {
      return {
        category: "Underweight Range",
        colorClass: "text-amber-400 border-amber-400/30 bg-amber-950/20",
        advice: "Focus on structured strength training with a nutrient-rich caloric surplus to build lean muscle mass.",
        suggestedPlan: "Strength & Hypertrophy Training",
      };
    } else if (bmiValue <= 24.9) {
      return {
        category: "Normal BMI Range",
        colorClass: "text-emerald-400 border-emerald-400/30 bg-emerald-950/20",
        advice: "Healthy general baseline. Focus on progressive strength progression, stamina, and overall body composition.",
        suggestedPlan: "Balanced Strength & Conditioning",
      };
    } else if (bmiValue <= 29.9) {
      return {
        category: "Overweight Range",
        colorClass: "text-amber-400 border-amber-400/30 bg-amber-950/20",
        advice: "Combine resistance training with cardiovascular workouts and moderate calorie management to improve body composition.",
        suggestedPlan: "Cardio + Strength Combination",
      };
    } else {
      return {
        category: "Higher BMI Range",
        colorClass: "text-[#C8010A] border-[#C8010A]/30 bg-red-950/20",
        advice: "Prioritize low-impact joint-friendly cardio, progressive functional movements, and structured nutrition planning.",
        suggestedPlan: "Functional Conditioning & Guidance",
      };
    }
  };

  const bmiDetails = getBmiDetails();

  return (
    <div className="bg-[#0a0a0a] text-white">
      
      {/* ============================================================ */}
      {/* 1. HERO — Full Bleed Gym Photo with Transparent Header       */}
      {/* ============================================================ */}
      <HeroParallax
        className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-24 sm:pt-36 sm:pb-28"
        background={
          <>
            <Image
              src="/images/hero_armour.webp"
              alt="ARMOUR 24-7 Gym training space in Hathijan, Ahmedabad"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08090B]/95 via-[#08090B]/65 to-[#08090B]/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-[#08090B]/40" />
          </>
        }
      >
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C8010A]" aria-hidden="true" />
              <span className="font-oswald text-xs font-semibold uppercase tracking-[0.29em] text-white/80 sm:text-sm">
                HATHIJAN, AHMEDABAD • ARMOUR 24-7
              </span>
            </div>
            <h1 className="font-oswald text-[clamp(4.25rem,10.8vw,11.5rem)] font-bold uppercase leading-[0.82] tracking-[-0.045em] text-white">
              BUILT
              <br />
              TO BE
              <br />
              <span className="text-[#C8010A]">STRONGER.</span>
            </h1>
            <div className="mt-10 flex flex-col gap-8 border-l-2 border-[#C8010A] pl-5 sm:mt-12 sm:flex-row sm:items-end sm:justify-between sm:gap-10 sm:pl-7">
              <p className="max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
                Discover a training space designed for progress.
                Serious equipment. Strong community. Your journey starts here.
              </p>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Link
                  href="/pricing"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 bg-[#C8010A] px-6 py-4 font-oswald text-sm font-bold uppercase tracking-[0.1em] text-white transition-colors duration-300 hover:bg-white hover:text-black"
                >
                  Explore Memberships
                  <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center border border-white/40 bg-black/20 px-6 py-4 font-oswald text-sm font-bold uppercase tracking-[0.1em] text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/15"
                >
                  Book a Visit
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-16 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-white/55 sm:absolute sm:-bottom-16 sm:right-8 sm:mt-0">
            <span className="h-9 w-px bg-gradient-to-b from-[#C8010A] to-transparent" aria-hidden="true" />
            SCROLL TO DISCOVER
          </div>
        </div>
      </HeroParallax>

      <CinematicStory />

      <ProgramShowcase />

      {/* ============================================================ */}
      {/* FACILITY GALLERY — Real gym photography                       */}
      {/* ============================================================ */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0e0e0e] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <span className="eyebrow text-sm sm:text-base text-[#C8010A] font-bold block mb-1 tracking-widest">
                FACILITY SHOWCASE
              </span>
              <h2 className="text-3xl sm:text-5xl font-oswald font-bold uppercase text-white leading-tight">
                Inside <span className="text-[#C8010A]">ARMOUR</span>
              </h2>
            </div>
            <p className="text-base sm:text-lg text-gray-200 max-w-md leading-relaxed font-body">
              A closer look at where your next chapter begins.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { src: "/images/dummy-gallery-1.webp", alt: "Main Gym Training Floor", caption: "Main Training Floor & Power Racks" },
              { src: "/images/dummy-gallery-2.webp", alt: "Plate Loaded Machines and Leg Press", caption: "Plate-Loaded Strength Machines" },
              { src: "/images/dummy-gallery-3.webp", alt: "Cardio Equipment and Treadmills", caption: "Cardio & Stamina Line" },
              { src: "/images/dummy-gallery-4.webp", alt: "Dumbbells and Free Weight Racks", caption: "Heavy Dumbbells & Free Weights" },
              { src: "/images/dummy-gallery-5.webp", alt: "Cable Rigs and Upper Body Stations", caption: "Dual-Cable Towers & Upper Body Rigs" },
              { src: "/images/dummy-gallery-6.webp", alt: "Armour Gym Training Atmosphere", caption: "Air-Conditioned Workout Space" },
            ].map((tile, i) => (
              <Reveal key={tile.src} delay={(i % 3) * 0.1}>
                {/* Photo drifts inside the frame at a different speed per column for depth */}
                <ParallaxFrame
                  speed={[8, 14, 8][i % 3]}
                  className="relative h-64 sm:h-72 rounded-sm overflow-hidden group bg-black/40"
                  overlay={
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-5">
                      <span className="text-base sm:text-lg font-oswald uppercase tracking-wider text-white font-bold">
                        {tile.caption}
                      </span>
                    </div>
                  }
                >
                  <Image
                    src={tile.src}
                    alt={tile.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </ParallaxFrame>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyArmour />

      <LadiesSpotlight />

      <MembershipPreview />

      {/* ============================================================ */}
      {/* MEMBER REVIEWS                                                */}
      {/* ============================================================ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0e0e0e] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
            <div>
              <span className="eyebrow text-sm sm:text-base text-[#C8010A] font-bold block mb-1 tracking-widest">
                VERIFIED MEMBER FEEDBACK
              </span>
              <h2 className="text-3xl sm:text-5xl font-oswald font-bold uppercase text-white leading-tight">
                What Members <span className="text-[#C8010A]">Say</span>
              </h2>
            </div>

            {/* Google Rating Card */}
            <div className="flex items-center gap-4 bg-[#141414] border border-white/10 px-6 py-4 rounded-sm">
              <div className="font-oswald text-4xl sm:text-5xl font-bold text-white leading-none">
                4.9
              </div>
              <div className="text-left border-l border-white/10 pl-4">
                <div className="flex text-amber-400 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <a
                  href="https://maps.app.goo.gl/fdHFDqTDaHNvw5Pf6"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#C8010A] hover:underline font-semibold block mt-1"
                >
                  Google Maps Reviews ↗
                </a>
              </div>
            </div>
          </div>

          {/* Reviews Grid on Desktop */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {googleReviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-full bg-[#C8010A] text-white flex items-center justify-center font-oswald font-bold text-lg shadow-sm">
                        {rev.initial}
                      </div>
                      <div>
                        <h3 className="font-oswald font-bold uppercase text-lg sm:text-xl text-white">
                          {rev.name}
                        </h3>
                        <span className="text-xs sm:text-sm text-gray-400 font-body block">{rev.time}</span>
                      </div>
                    </div>
                    <div className="flex text-amber-400 gap-0.5">
                      {[...Array(rev.rating)].map((_, r) => (
                        <Star key={r} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-body">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden">
            <div className="bg-[#141414] border border-white/10 p-6 sm:p-7 rounded-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#C8010A] text-white flex items-center justify-center font-oswald font-bold text-base">
                    {googleReviews[activeReview].initial}
                  </div>
                  <div>
                    <h3 className="font-oswald font-bold uppercase text-lg text-white">
                      {googleReviews[activeReview].name}
                    </h3>
                    <span className="text-xs sm:text-sm text-gray-400 font-body block">{googleReviews[activeReview].time}</span>
                  </div>
                </div>
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(googleReviews[activeReview].rating)].map((_, r) => (
                    <Star key={r} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-base text-gray-200 leading-relaxed font-body min-h-[70px]">
                &ldquo;{googleReviews[activeReview].text}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex gap-1.5">
                  {googleReviews.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveReview(i)}
                      className={`h-2.5 rounded-full transition-all ${
                        activeReview === i ? "w-7 bg-[#C8010A]" : "w-2.5 bg-white/20"
                      }`}
                      aria-label={`View review ${i + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveReview((prev) => (prev === 0 ? googleReviews.length - 1 : prev - 1))}
                    className="p-2.5 rounded-sm border border-white/20 text-gray-200 hover:text-white"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveReview((prev) => (prev + 1) % googleReviews.length)}
                    className="p-2.5 rounded-sm border border-white/20 text-gray-200 hover:text-white"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* BMI CALCULATOR — retained as requested                        */}
      {/* ============================================================ */}
      <section id="bmi" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0e0e0e] border-y border-white/10">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow text-sm sm:text-base text-[#C8010A] font-bold block mb-1 tracking-widest">
              GENERAL SCREENING
            </span>
            <h2 className="text-3xl sm:text-5xl font-oswald font-bold uppercase text-white leading-tight">
              BMI <span className="text-[#C8010A]">Calculator</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-200 mt-2 font-body">
              Estimate your Body Mass Index as a basic starting benchmark.
            </p>
          </div>

          {/* Educational Disclaimer Box */}
          <div className="bg-[#181818] border border-white/10 p-5 rounded-sm flex items-start gap-3.5 mb-8 text-sm sm:text-base text-gray-300">
            <Info className="w-5 h-5 text-[#C8010A] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Please Note:</strong> Body Mass Index (BMI) is a general ratio calculated purely from weight and height. It does not measure body fat percentage or muscle mass and is not a medical diagnosis or training prescription. Speak with our coaches for a personalized fitness assessment.
            </p>
          </div>

          <div className="bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Gender Selection */}
              <div>
                <label className="text-sm sm:text-base font-oswald uppercase tracking-wider text-gray-300 font-bold block mb-2.5">
                  Select Gender
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setBmiGender("male")}
                    className={`py-3 px-4 text-sm sm:text-base font-oswald uppercase font-bold tracking-wider rounded-sm transition-colors ${
                      bmiGender === "male"
                        ? "bg-[#C8010A] text-white shadow-md"
                        : "bg-[#1c1c1c] text-gray-200 hover:text-white"
                    }`}
                  >
                    Male
                  </button>
                  <button
                    type="button"
                    onClick={() => setBmiGender("female")}
                    className={`py-3 px-4 text-sm sm:text-base font-oswald uppercase font-bold tracking-wider rounded-sm transition-colors ${
                      bmiGender === "female"
                        ? "bg-[#C8010A] text-white shadow-md"
                        : "bg-[#1c1c1c] text-gray-200 hover:text-white"
                    }`}
                  >
                    Female
                  </button>
                </div>
              </div>

              {/* Height Slider */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label htmlFor="heightRange" className="text-sm sm:text-base font-oswald uppercase tracking-wider text-gray-300 font-bold">
                    Height
                  </label>
                  <span className="font-oswald text-xl sm:text-2xl font-bold text-white">
                    {bmiHeight} <span className="text-sm text-gray-400 font-normal">cm</span>
                  </span>
                </div>
                <input
                  id="heightRange"
                  type="range"
                  min="130"
                  max="220"
                  value={bmiHeight}
                  onChange={(e) => setBmiHeight(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#222] rounded-sm appearance-none cursor-pointer accent-[#C8010A]"
                />
                <div className="flex justify-between text-xs sm:text-sm text-gray-400 font-body mt-1">
                  <span>130 cm</span>
                  <span>175 cm</span>
                  <span>220 cm</span>
                </div>
              </div>

              {/* Weight Slider */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label htmlFor="weightRange" className="text-sm sm:text-base font-oswald uppercase tracking-wider text-gray-300 font-bold">
                    Weight
                  </label>
                  <span className="font-oswald text-xl sm:text-2xl font-bold text-white">
                    {bmiWeight} <span className="text-sm text-gray-400 font-normal">kg</span>
                  </span>
                </div>
                <input
                  id="weightRange"
                  type="range"
                  min="40"
                  max="150"
                  value={bmiWeight}
                  onChange={(e) => setBmiWeight(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#222] rounded-sm appearance-none cursor-pointer accent-[#C8010A]"
                />
                <div className="flex justify-between text-xs sm:text-sm text-gray-400 font-body mt-1">
                  <span>40 kg</span>
                  <span>95 kg</span>
                  <span>150 kg</span>
                </div>
              </div>

            </div>

            {/* Calculated Output */}
            <div className="lg:col-span-5 bg-[#0a0a0a] border border-white/10 p-6 sm:p-7 rounded-sm text-center space-y-4">
              <span className="text-xs sm:text-sm font-oswald uppercase tracking-widest text-gray-400 font-bold block">
                Calculated BMI
              </span>
              <div className="font-oswald text-6xl sm:text-7xl font-bold text-white leading-none">
                {bmiValue}
              </div>
              <div>
                <span className={`inline-block px-4 py-1.5 text-xs sm:text-sm font-oswald font-bold uppercase rounded-sm border ${bmiDetails.colorClass}`}>
                  {bmiDetails.category}
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-body">
                {bmiDetails.advice}
              </p>
              <div className="pt-2 border-t border-white/10">
                <Link
                  href="/contact"
                  className="block w-full py-3.5 bg-[#C8010A] hover:bg-white hover:text-black text-white font-oswald text-sm sm:text-base uppercase font-bold tracking-wider rounded-sm transition-colors text-center shadow-md"
                >
                  Discuss Workout Routine
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* VISIT & ENQUIRY — primary conversion section                  */}
      {/* ============================================================ */}
      <section id="enquiry" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="eyebrow text-sm sm:text-base text-[#C8010A] font-bold block mb-1 tracking-widest">
                HATHIJAN CIRCLE • AHMEDABAD
              </span>
              <h2 className="text-3xl sm:text-5xl font-oswald font-bold uppercase text-white leading-tight">
                Visit Armour <span className="text-[#C8010A]">24-7 Gym</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed mt-3 font-body">
                Located at C-601, 602 Shalin Square, Hathijan Circle. Walk in to inspect the machines or submit an inquiry for membership plans.
              </p>
            </div>

            <div className="bg-[#141414] border border-white/10 p-6 sm:p-7 rounded-sm space-y-4 text-sm sm:text-base text-gray-200 font-body">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#C8010A] shrink-0 mt-0.5" />
                <p>
                  C-601, 602 Shalin Square, Hathijan Circle, Ahmedabad, Gujarat 382445
                </p>
              </div>
              <div className="flex items-center gap-3.5">
                <Clock className="w-5 h-5 text-[#C8010A] shrink-0" />
                <p>Biometric Access: 24/7 • Front Desk: 06:00 AM – 10:00 PM</p>
              </div>
              <div className="pt-2 border-t border-white/10">
                <a
                  href="https://maps.app.goo.gl/fdHFDqTDaHNvw5Pf6"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm sm:text-base text-[#C8010A] font-semibold hover:underline"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open Directions on Google Maps ↗</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <LeadForm />
          </div>
        </div>
      </section>

    </div>
  );
}
