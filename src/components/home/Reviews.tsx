import { Star } from "lucide-react";
import { Container } from "./ui";

// Reviews from the gym's Google Maps listing.
const reviews = [
  {
    name: "Hardik Trivedi",
    text: "One of the best gyms in Hathijan Circle. Clean setup with a wide variety of imported machines and calibrated weights. The trainers are supportive and the atmosphere keeps you focused.",
  },
  {
    name: "Sneha Mehta",
    text: "Great atmosphere, hygienic facilities, and round-the-clock access. Being able to train comfortably after my work shift without rushing before closing time is a huge convenience.",
  },
  {
    name: "Rohan Dave",
    text: "Proper air conditioning, well-maintained equipment, and courteous staff. The dumbbell selection and machine variety are among the best in this area of Ahmedabad.",
  },
  {
    name: "Jignesh Joshi",
    text: "The coaches on the floor take time to guide you on proper posture and injury prevention. Excellent gym for both beginners and experienced lifters.",
  },
];

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
    <section className="bg-[#0e0e0e] py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="font-oswald text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              What members say
            </h2>

            <figure className="mt-10">
              <Stars className="h-5 w-5" />
              <blockquote className="mt-5 max-w-[34ch] font-oswald text-3xl font-medium leading-snug tracking-tight text-white sm:text-4xl">
                {featured.text}
              </blockquote>
              <figcaption className="mt-6 font-body text-sm text-gray-300">
                {featured.name}, verified member
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-5">
            <div className="flex items-end gap-4 border-b border-white/20 pb-6">
              <span className="font-oswald text-6xl font-semibold leading-none text-white">4.9</span>
              <div className="pb-1">
                <Stars />
                <a
                  href="https://maps.app.goo.gl/fdHFDqTDaHNvw5Pf6"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1.5 block font-body text-sm text-gray-200 underline decoration-white/40 underline-offset-4 hover:text-white"
                >
                  Read all reviews on Google Maps
                </a>
              </div>
            </div>

            <ul>
              {rest.map((r) => (
                <li key={r.name} className="border-b border-white/20 py-6">
                  <p className="font-body text-base leading-relaxed text-gray-100">
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <p className="mt-3 font-body text-sm text-gray-300">{r.name}, verified member</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
