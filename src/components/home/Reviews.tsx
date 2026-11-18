import { ArrowUpRight, Star } from "lucide-react";
import { Container } from "./ui";

/**
 * Do not publish copied names, quotes or a numeric star score unless they
 * are confirmed against the business's current Google reviews.
 */
export default function Reviews() {
  return (
    <section aria-labelledby="reviews-heading" className="border-y border-white/10 bg-[#0e0e0e] py-20 text-white md:py-28">
      <Container>
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#FF858A]">
              <span aria-hidden="true" className="h-px w-10 bg-[#C8010A]" />
              COMMUNITY & EXPERIENCE
            </p>
            <h2 id="reviews-heading" className="max-w-3xl font-oswald text-5xl font-semibold leading-[0.96] tracking-tight sm:text-7xl">
              REAL EXPERIENCES.
              <br />
              <span className="text-[#C8010A]">REAL PEOPLE.</span>
            </h2>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg">
              See what visitors and members have shared about their experience at ARMOUR.
            </p>
          </div>
          <div className="lg:col-span-4">
            <div className="mb-6 flex items-center gap-2 text-[#FFCA65]" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((n) => <Star key={n} className="size-5" />)}
            </div>
            <a
              href="https://maps.app.goo.gl/fdHFDqTDaHNvw5Pf6"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-12 items-center gap-3 border-b border-[#C8010A] pb-3 font-oswald text-sm font-bold uppercase tracking-wider text-white transition-colors hover:text-[#FF858A]"
            >
              Read reviews on Google Maps
              <ArrowUpRight aria-hidden="true" className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
            <p className="mt-4 text-xs leading-relaxed text-white/45">
              Reviews and ratings are maintained on Google Maps.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
