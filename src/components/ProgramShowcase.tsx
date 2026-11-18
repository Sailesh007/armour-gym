import Image from "next/image";
import { ParallaxFrame } from "@/components/Parallax";
import { ButtonLink, Container, SectionTitle } from "@/components/home/ui";

// One real photo plus a plain list. We only show photos of the actual gym, and we
// do not have a photo for every program, so the list carries the detail instead.
const programs = [
  {
    title: "Strength training",
    detail: "Barbell, dumbbell and plate-loaded machine work built around progressive overload.",
  },
  {
    title: "Cardio training",
    detail: "Treadmills, ellipticals and bikes for endurance and steady calorie burn.",
  },
  {
    title: "Functional fitness",
    detail: "Kettlebells, cables and bands for balance, core strength and agility.",
  },
  {
    title: "Personal training",
    detail: "One-on-one coaching with a certified trainer, matched to your goal.",
  },
];

export default function ProgramShowcase() {
  return (
    <section id="programs" className="bg-[#0A0B0D] py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <ParallaxFrame
            speed={8}
            className="relative h-[26rem] overflow-hidden bg-[#151515] sm:h-[34rem] lg:col-span-5 lg:h-[38rem]"
          >
            <Image
              src="/images/img_7848.webp"
              alt="Power rack and lifting platform at ARMOUR 24-7 Gym"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              style={{ objectPosition: "center 55%" }}
            />
          </ParallaxFrame>

          <div className="lg:col-span-7">
            <SectionTitle
              title="Train your way"
              lead="Different goals, one floor. Pick a focus and our coaches will help you build it."
            />

            <ul className="mt-10">
              {programs.map((p) => (
                <li key={p.title} className="border-t border-white/15 py-6 last:border-b">
                  <h3 className="font-oswald text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-[56ch] font-body text-base leading-relaxed text-gray-300">
                    {p.detail}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <ButtonLink href="/contact" arrow>
                Ask about a program
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
