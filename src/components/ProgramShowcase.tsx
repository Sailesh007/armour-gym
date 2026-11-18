"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Parallax";

const programs = [
  {
    title: "STRENGTH",
    label: "Strength Training",
    line: "Build strength. Break limits.",
    image: "/images/dummy-gallery-1.webp",
    alt: "Strength training floor at ARMOUR 24-7 Gym",
  },
  {
    title: "CARDIO",
    label: "Cardio Training",
    line: "Find your pace. Go further.",
    image: "/images/dummy-gallery-3.webp",
    alt: "Cardio training equipment at ARMOUR 24-7 Gym",
  },
  {
    title: "FUNCTIONAL",
    label: "Functional Fitness",
    line: "Move better. Feel stronger.",
    image: "/images/dummy-gallery-4.webp",
    alt: "Functional fitness equipment at ARMOUR 24-7 Gym",
  },
  {
    title: "PERSONAL",
    label: "Personal Training",
    line: "Your goals. Focused guidance.",
    image: "/images/dummy-gallery-2.webp",
    alt: "Gym equipment for personal training at ARMOUR 24-7",
  },
] as const;

export default function ProgramShowcase() {
  return (
    <section
      id="programs"
      aria-labelledby="programs-heading"
      className="relative overflow-hidden bg-[#0A0B0D] px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-10 flex flex-col justify-between gap-5 md:mb-14 md:flex-row md:items-end">
            <div>
              <span className="mb-4 block font-oswald text-xs font-bold uppercase tracking-[0.25em] text-[#E33B42]">
                FIND YOUR FOCUS
              </span>
              <h2
                id="programs-heading"
                className="font-oswald text-5xl font-bold uppercase leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-7xl"
              >
                TRAIN <span className="text-[#C8010A]">YOUR WAY.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/60 sm:text-base">
              Different goals. One place to put in the work.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
          {programs.map((program, index) => (
            <Reveal key={program.title} delay={index * 0.07} y={24} className="h-full">
              <article className="group relative isolate h-[390px] overflow-hidden border border-white/10 bg-[#171717] sm:h-[430px] xl:h-[460px]">
                <Image
                  src={program.image}
                  alt={program.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-110"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#060607] via-black/25 to-black/15 transition-colors duration-500"
                />
                <div className="absolute left-5 top-6 flex w-[calc(100%-2.5rem)] items-center justify-between text-xs font-bold tracking-[0.24em] text-white/80">
                  <span>0{index + 1}</span>
                  <span className="h-px w-12 bg-white/60" aria-hidden="true" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF858A]">
                    {program.label}
                  </span>
                  <h3 className="font-oswald text-4xl font-bold uppercase leading-none text-white sm:text-[2.75rem]">
                    {program.title}
                  </h3>
                  <p className="mt-3 text-sm leading-snug text-white/80">{program.line}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Link
            href="/pricing"
            className="group inline-flex min-h-12 items-center justify-center gap-3 border-b border-[#C8010A] pb-3 font-oswald text-sm font-bold uppercase tracking-widest text-white transition-colors hover:text-[#FF858A]"
          >
            Explore membership options
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
