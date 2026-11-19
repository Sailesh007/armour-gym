import Image from "next/image";
import { Star } from "lucide-react";
import { ParallaxBg } from "@/components/Parallax";
import { Container } from "./ui";

// Reviews from the gym's Google Maps listing. `topic` is what the reviewer talks about,
// taken from the review text itself.
const reviews = [
  {
    name: "Hardik Trivedi",
    topic: "Equipment",
    text: "One of the best gyms in Hathijan Circle. Clean setup with a wide variety of imported machines and calibrated weights. The trainers are supportive and the atmosphere keeps you focused.",
  },
  {
    name: "Sneha Mehta",
    topic: "Open 24/7",
    text: "Great atmosphere, hygienic facilities, and round-the-clock access. Being able to train comfortably after my work shift without rushing before closing time is a huge convenience.",
  },
  {
    name: "Rohan Dave",
    topic: "Facilities",
    text: "Proper air conditioning, well-maintained equipment, and courteous staff. The dumbbell selection and machine variety are among the best in this area of Ahmedabad.",
  },
  {
    name: "Jignesh Joshi",
    topic: "Coaching",
    text: "The coaches on the floor take time to guide you on proper posture and injury prevention. Excellent gym for both beginners and experienced lifters.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
}

function Stars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span className="flex gap-0.5 text-amber-400" role="img" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`${className} fill-current`} aria-hidden="true" />
      ))}
    </span>
  );
}

export default function Reviews() {
  const [featured, ...rest] = reviews;

  return (
    <section className="relative overflow-hidden bg-[#0e0e0e] py-20 md:py-28">
      {/* Real photo of the floor, kept very dark so text stays readable */}
      <ParallaxBg distance={10}>
        <Image
          src="/images/img_7851.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
      </ParallaxBg>
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e] via-[#0e0e0e]/80 to-[#0e0e0e]"
        aria-hidden="true"
      />

      <Container className="relative">
        {/* Heading + rating */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="font-oswald text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            What members say
          </h2>

          <a
            href="https://maps.app.goo.gl/fdHFDqTDaHNvw5Pf6"
            target="_blank"
            rel="noreferrer"
            className="group flex w-fit items-center gap-5 border border-white/20 bg-black/40 px-6 py-4 backdrop-blur-sm transition-colors hover:border-white/50"
          >
            <span className="font-oswald text-5xl font-semibold leading-none text-white">4.9</span>
            <span>
              <Stars />
              <span className="mt-1.5 block font-body text-sm text-gray-200 underline decoration-white/40 underline-offset-4 group-hover:text-white">
                Google Maps reviews
              </span>
            </span>
          </a>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Featured quote */}
          <figure className="relative flex flex-col justify-between border border-white/15 bg-black/50 p-7 backdrop-blur-sm sm:p-10 lg:col-span-7">
            <span
              className="pointer-events-none absolute right-6 top-2 select-none font-oswald text-[9rem] leading-none text-[#C8010A]/70 sm:right-10"
              aria-hidden="true"
            >
              &rdquo;
            </span>
            <div>
              <p className="inline-block bg-[#C8010A] px-3 py-1 font-body text-xs font-semibold text-white">
                {featured.topic}
              </p>
              <blockquote className="mt-6 max-w-[32ch] font-oswald text-3xl font-medium leading-snug tracking-tight text-white sm:text-4xl">
                {featured.text}
              </blockquote>
            </div>
            <figcaption className="mt-10 flex items-center gap-4 border-t border-white/15 pt-6">
              <span
                className="grid size-11 place-items-center rounded-full bg-white/10 font-body text-sm font-semibold text-white"
                aria-hidden="true"
              >
                {initials(featured.name)}
              </span>
              <span>
                <span className="block font-body text-base font-semibold text-white">
                  {featured.name}
                </span>
                <span className="mt-0.5 flex items-center gap-2 font-body text-sm text-gray-300">
                  <Stars className="h-3.5 w-3.5" /> Google review
                </span>
              </span>
            </figcaption>
          </figure>

          {/* Other reviews */}
          <ul className="grid gap-4 lg:col-span-5">
            {rest.map((r) => (
              <li
                key={r.name}
                className="border border-white/15 border-l-[3px] border-l-[#C8010A] bg-black/50 p-6 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="font-body text-sm font-semibold text-[#E33B42]">{r.topic}</p>
                  <Stars className="h-3.5 w-3.5" />
                </div>
                <p className="mt-3 font-body text-[0.95rem] leading-relaxed text-gray-100">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span
                    className="grid size-8 place-items-center rounded-full bg-white/10 font-body text-xs font-semibold text-white"
                    aria-hidden="true"
                  >
                    {initials(r.name)}
                  </span>
                  <p className="font-body text-sm text-gray-300">{r.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
