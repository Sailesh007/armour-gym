"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, Dumbbell, Users } from "lucide-react";
import { Reveal } from "@/components/Parallax";

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
    title: "IMPORTED EQUIPMENT",
    detail: "Premium imported machines for strength and cardio.",
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
              <h2
                id="why-armour-heading"
                className="font-oswald text-4xl font-bold uppercase leading-tight text-white sm:text-6xl"
              >
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

export function MembershipPreview() {
  return (
    <section
      id="memberships"
      aria-labelledby="memberships-heading"
      className="relative isolate overflow-hidden border-y border-white/10 bg-[#111214] px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-[#C8010A]/10 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
        <Reveal>
          <p className="mb-5 font-oswald text-xs font-bold uppercase tracking-[0.25em] text-[#E33B42]">
            MEMBERSHIP AT ARMOUR
          </p>
          <h2
            id="memberships-heading"
            className="max-w-2xl font-oswald text-[clamp(3.65rem,6.5vw,7rem)] font-bold uppercase leading-[0.91] tracking-[-0.035em] text-white"
          >
            YOUR JOURNEY.
            <br />
            <span className="text-[#C8010A]">YOUR PLAN.</span>
          </h2>
          <p className="mt-7 max-w-md text-base leading-relaxed text-white/65 sm:text-lg">
            Discover the membership that fits your lifestyle. The next step is yours.
          </p>
          <Link
            href="/pricing"
            className="group mt-9 inline-flex min-h-12 items-center gap-3 border-b border-[#C8010A] pb-3 font-oswald text-sm font-bold uppercase tracking-[0.14em] text-white transition-colors hover:text-[#FF858A]"
          >
            View all membership plans
            <ArrowUpRight
              aria-hidden="true"
              className="size-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="group relative isolate flex min-h-[390px] flex-col justify-between overflow-hidden border border-white/15 bg-[#090A0B] p-6 sm:min-h-[465px] sm:p-10">
            <Image
              src="/images/img_7850.webp"
              alt="Training space at ARMOUR 24-7 Gym"
              fill
              sizes="(max-width: 1024px) 100vw, 54vw"
              className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#08090B]/95 via-[#08090B]/45 to-[#08090B]/55"
            />
            <div className="relative z-10 flex items-center justify-between gap-3">
              <span className="font-oswald text-xs font-bold uppercase tracking-[0.24em] text-white/85">
                ARMOUR 24-7
              </span>
              <span aria-hidden="true" className="h-px w-14 bg-[#C8010A]" />
            </div>
            <div className="relative z-10 max-w-md">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#FF9DA1]">
                OWN YOUR PROGRESS
              </p>
              <h3 className="font-oswald text-5xl font-bold uppercase leading-[0.92] tracking-[-0.025em] text-white sm:text-6xl">
                START STRONG.
                <br />
                STAY CONSISTENT.
              </h3>
              <Link
                href="/pricing"
                className="mt-7 inline-flex min-h-12 items-center justify-between gap-5 bg-[#C8010A] px-5 py-3.5 font-oswald text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black"
              >
                Explore Plans
                <ArrowUpRight aria-hidden="true" className="size-5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
