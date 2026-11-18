import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ParallaxFrame } from "@/components/Parallax";
import { ButtonLink, Container, SectionTitle } from "@/components/home/ui";

// One authentic ARMOUR photo paired with short, easy-to-scan program descriptions.
const programs = [
  { title: "Strength training", line: "Build strength with free weights and imported machines." },
  { title: "Cardio training", line: "Improve stamina at your own pace." },
  { title: "Functional fitness", line: "Move better with core and conditioning work." },
  { title: "Personal training", line: "Focused coaching built around your goals." },
] as const;

export default function ProgramShowcase() {
  return (
    <section id="programs" aria-labelledby="programs-heading" className="bg-[#0A0B0D] py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <ParallaxFrame
            speed={7}
            className="relative h-[24rem] overflow-hidden bg-[#151515] sm:h-[34rem] lg:col-span-5 lg:h-[40rem]"
            overlay={
              <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/75 via-black/10 to-transparent p-7">
                <span className="font-oswald text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">
                  Every rep counts.
                </span>
              </div>
            }
          >
            <Image
              src="/images/img_7848.webp"
              alt="Actual power rack and lifting platform inside ARMOUR 24-7 Gym"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
              style={{ objectPosition: "center 55%" }}
            />
          </ParallaxFrame>

          <div className="lg:col-span-7">
            <div id="programs-heading">
              <SectionTitle
                title="Train your way"
                lead="Whatever your starting point, find the right way to move."
              />
            </div>
            <ol className="mt-10 border-t border-white/15">
              {programs.map((program, index) => (
                <li
                  key={program.title}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-start gap-3 border-b border-white/15 py-6 transition-colors duration-300 hover:border-[#C8010A]/60 sm:grid-cols-[3rem_1fr_auto] sm:gap-5"
                >
                  <span className="mt-1 font-oswald text-sm font-medium tracking-wider text-[#E33B42]">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-oswald text-2xl font-semibold tracking-tight text-white transition-colors group-hover:text-[#FF858A] sm:text-3xl">
                      {program.title}
                    </h3>
                    <p className="mt-2 max-w-[45ch] text-sm leading-relaxed text-white/60 sm:text-base">
                      {program.line}
                    </p>
                  </div>
                  <ArrowUpRight aria-hidden="true" className="mt-2 size-5 text-white/35 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#FF858A]" />
                </li>
              ))}
            </ol>
            <div className="mt-9">
              <ButtonLink href="/contact" arrow>
                Ask about training
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
