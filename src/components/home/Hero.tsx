"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { HeroParallax } from "@/components/Parallax";
import { ButtonLink } from "./ui";
import AccessStrip from "./AccessStrip";

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <HeroParallax
      id="homepage-hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-12 pt-28 sm:pt-36"
      background={
        <>
          <Image
            src="/images/hero_armour.webp"
            alt="ARMOUR 24-7 Gym training space in Hathijan Circle, Ahmedabad"
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
        {/* One orchestrated entrance: headline, copy, actions, then the live strip */}
        <motion.div
          variants={list}
          initial={reduce ? false : "hidden"}
          animate="show"
          className="max-w-5xl"
        >
          <motion.h1
            variants={item}
            className="font-oswald text-[clamp(3.75rem,10vw,10rem)] font-bold uppercase leading-[0.84] tracking-[-0.04em] text-white"
          >
            Built
            <br />
            to be
            <br />
            <span className="text-[#C8010A]">stronger.</span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-7 border-l-2 border-[#C8010A] pl-5 sm:mt-10 sm:flex-row sm:items-end sm:justify-between sm:gap-10 sm:pl-7"
          >
            <p className="max-w-md font-body text-base leading-relaxed text-white/85 sm:text-lg">
              Imported equipment, certified floor coaches and biometric entry at any hour, in
              Hathijan Circle, Ahmedabad.
            </p>
            <div className="flex shrink-0 flex-wrap gap-3">
              <ButtonLink href="/pricing" arrow>
                See membership plans
              </ButtonLink>
              <ButtonLink href="/contact?plan=demo" variant="outline">
                Book a demo session (₹500)
              </ButtonLink>
            </div>
          </motion.div>

          <motion.div variants={item} className="mt-10 max-w-3xl">
            <AccessStrip />
          </motion.div>
        </motion.div>
      </div>
    </HeroParallax>
  );
}
