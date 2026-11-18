"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { ParallaxFrame, Reveal } from "@/components/Parallax";

const moments = [
  {
    number: "01",
    label: "THE SPACE",
    title: "Built to move differently.",
    description:
      "A purposeful training environment with room to focus, push and progress at your own pace.",
    image: "/images/img_7842.webp",
    position: "center",
  },
  {
    number: "02",
    label: "THE EQUIPMENT",
    title: "Every rep matters.",
    description:
      "From free weights to dedicated strength stations, find your next challenge on the gym floor.",
    image: "/images/img_7844.webp",
    position: "center",
  },
  {
    number: "03",
    label: "YOUR ROUTINE",
    title: "Your goals. Your hours.",
    description:
      "Make training part of your life with the flexibility and energy of ARMOUR 24-7.",
    image: "/images/img_7849.webp",
    position: "center",
  },
] as const;

/**
 * Sticky editorial storytelling instead of scroll hijacking.
 * The left narrative remains in view on large screens while the actual
 * gym imagery moves at a different scroll rate inside its frame.
 */
export default function CinematicStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.25"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    mass: 0.5,
  });

  return (
    <section
      ref={sectionRef}
      aria-labelledby="story-heading"
      className="relative isolate overflow-clip border-y border-white/10 bg-[#08090B] py-24 sm:py-32 lg:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(ellipse_at_10%_30%,rgba(200,1,10,0.09),transparent_45%)]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20 lg:px-8">
        <div className="self-start lg:sticky lg:top-32">
          <Reveal>
            <p className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-[#E33B42]">
              <span className="h-px w-10 bg-[#C8010A]" />
              A DIFFERENT STANDARD
            </p>
            <h2
              id="story-heading"
              className="max-w-xl font-oswald text-[clamp(3.5rem,7vw,7.4rem)] font-bold uppercase leading-[0.88] tracking-[-0.04em] text-white"
            >
              MORE THAN
              <br />
              <span className="text-[#C8010A]">A GYM.</span>
              <br />
              A MINDSET.
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-white/65 sm:text-lg">
              Not another ordinary workout. A space designed to help you show
              up, find your rhythm and build a stronger version of yourself.
            </p>
            <Link
              href="/#gallery"
              className="group mt-9 inline-flex items-center gap-3 border-b border-[#C8010A] pb-3 font-oswald text-sm font-bold uppercase tracking-[0.13em] text-white transition-colors hover:text-[#F15A60]"
            >
              Explore our space
              <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <div className="mt-14 hidden items-center gap-4 lg:flex" aria-hidden="true">
            <div className="relative h-24 w-px overflow-hidden bg-white/10">
              <motion.div
                className="absolute inset-0 origin-top bg-[#C8010A]"
                style={{ scaleY: reduceMotion ? 1 : progress }}
              />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
              SCROLL TO EXPLORE
            </span>
          </div>
        </div>

        <div className="space-y-9 sm:space-y-14">
          {moments.map((moment, index) => (
            <Reveal key={moment.number} delay={0.06} y={28}>
              <article className="group overflow-hidden border border-white/10 bg-[#111317] transition-colors duration-500 hover:border-white/25">
                <ParallaxFrame
                  speed={index === 1 ? 8 : 12}
                  className="relative h-[20rem] overflow-hidden sm:h-[30rem] lg:h-[34rem]"
                  overlay={
                    <div className="pointer-events-none absolute inset-0 flex items-start justify-between bg-gradient-to-t from-black/65 via-transparent to-black/30 p-6 sm:p-8">
                      <span className="font-oswald text-6xl font-bold leading-none text-white/35 sm:text-8xl">
                        {moment.number}
                      </span>
                      <span className="border border-white/35 bg-black/30 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-md">
                        {moment.label}
                      </span>
                    </div>
                  }
                >
                  <Image
                    src={moment.image}
                    alt={`ARMOUR 24-7 Gym – ${moment.label.toLowerCase()}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 54vw"
                    className="object-cover transition-[filter] duration-700 group-hover:brightness-110"
                    style={{ objectPosition: moment.position }}
                  />
                </ParallaxFrame>
                <div className="grid gap-3 p-6 sm:p-8">
                  <h3 className="font-oswald text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl">
                    {moment.title}
                  </h3>
                  <p className="max-w-lg text-sm leading-relaxed text-white/60 sm:text-base">
                    {moment.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
