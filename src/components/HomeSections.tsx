"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock3, Dumbbell, Users } from "lucide-react";
import { ParallaxFrame, Reveal } from "@/components/Parallax";

const benefits = [
  {
    Icon: Clock3,
    number: "01",
    title: "YOUR SCHEDULE",
    detail: "Flexible 24/7 member access.",
  },
  {
    Icon: Dumbbell,
    number: "02",
    title: "SERIOUS EQUIPMENT",
    detail: "A full floor for strength and cardio.",
  },
  {
    Icon: Users,
    number: "03",
    title: "REAL GUIDANCE",
    detail: "Support for every level of training.",
  },
] as const;

export function WhyArmour() {
  return (
    <section
      aria-labelledby="why-armour-heading"
      className="border-y border-white/10 bg-[#0D0E10] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 font-oswald text-xs font-bold uppercase tracking-[0.25em] text-[#E33B42]">
                THE ARMOUR ADVANTAGE
              </p>
              <h2 id="why-armour-heading" className="font-oswald text-4xl font-bold uppercase leading-tight text-white sm:text-6xl">
                BUILT FOR <span className="text-[#C8010A]">YOUR PROGRESS.</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm text-white/60">
              The essentials to train with confidence.
            </p>
          </div>
        </Reveal>
        <div className="grid border-t border-white/15 md:grid-cols-3">
          {benefits.map(({ Icon, number, title, detail }, index) => (
            <Reveal key={number} delay={index * 0.08}>
              <div className="flex h-full items-start gap-5 border-b border-white/15 px-1 py-8 md:border-b-0 md:px-7 md:first:pl-0 md:last:pr-0">
                <Icon aria-hidden="true" className="mt-1 size-7 shrink-0 text-[#C8010A]" />
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-white/35">{number}</span>
                  <h3 className="mt-2 font-oswald text-2xl font-bold uppercase text-white">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">{detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LadiesSpotlight() {
  return (
    <section id="ladies-program" aria-labelledby="ladies-heading" className="bg-[#08090B] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <ParallaxFrame speed={9} className="relative h-[380px] overflow-hidden border border-white/10 sm:h-[520px]">
            <Image
              src="/images/dummy-gallery-5.webp"
              alt="ARMOUR 24-7 Gym training facilities"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </ParallaxFrame>
        </div>
        <Reveal className="lg:col-span-6">
          <p className="mb-5 font-oswald text-xs font-bold uppercase tracking-[0.25em] text-[#E33B42]">
            FITNESS FOR EVERY WOMAN
          </p>
          <h2 id="ladies-heading" className="font-oswald text-5xl font-bold uppercase leading-[0.94] tracking-tight text-white sm:text-6xl lg:text-7xl">
            STRONGER <span className="text-[#C8010A]">TOGETHER.</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
            A supportive space to build strength, confidence and consistency — at your pace.
          </p>
          <p className="mt-6 text-sm font-medium tracking-wide text-white/65">
            Strength training <span className="mx-2 text-[#C8010A]">/</span> Cardio <span className="mx-2 text-[#C8010A]">/</span> Guided workouts
          </p>
          <Link
            href="/contact?program=ladies-program"
            className="group mt-9 inline-flex min-h-12 items-center gap-3 bg-[#C8010A] px-7 py-4 font-oswald text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
          >
            Ask about ladies training
            <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function MembershipPreview() {
  return (
    <section
      id="memberships"
      aria-labelledby="memberships-heading"
      className="relative isolate overflow-hidden border-y border-white/10 bg-[#141517] px-4 py-24 sm:px-6 sm:py-28 lg:px-8"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-[#C8010A]/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <Reveal>
          <p className="mb-4 font-oswald text-xs font-bold uppercase tracking-[0.25em] text-[#E33B42]">
            MAKE IT YOUR ROUTINE
          </p>
          <h2 id="memberships-heading" className="font-oswald text-5xl font-bold uppercase leading-[0.94] tracking-tight text-white sm:text-6xl lg:text-7xl">
            YOUR JOURNEY. <span className="text-[#C8010A]">YOUR PLAN.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65">
            Start with a month or commit for the long run. Explore the membership that fits your goals.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="border border-white/15 bg-black/20 p-6 sm:p-8">
            <p className="mb-6 font-oswald text-xs font-bold uppercase tracking-[0.2em] text-white/55">
              MEMBERSHIP DURATIONS
            </p>
            <div className="grid grid-cols-4 gap-2 text-center">
              {[1, 3, 6, 12].map((months) => (
                <div key={months} className="border border-white/10 bg-white/[0.04] px-1 py-4">
                  <span className="block font-oswald text-3xl font-bold text-white sm:text-4xl">{months}</span>
                  <span className="mt-1 block text-[10px] uppercase tracking-wider text-white/50">
                    {months === 1 ? "Month" : "Months"}
                  </span>
                </div>
              ))}
            </div>
            <Link
              href="/pricing"
              className="group mt-7 flex min-h-12 items-center justify-between bg-[#C8010A] px-5 py-4 font-oswald text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
            >
              View plans & pricing
              <ArrowUpRight aria-hidden="true" className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
