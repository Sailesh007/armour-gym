import Image from "next/image";
import { ParallaxFrame } from "@/components/Parallax";
import { Container, SectionTitle } from "./ui";

// Real photos of the Hathijan Circle floor. Widths vary per row so the grid has a rhythm;
// `focus` keeps the subject (sign, racks, machines) in frame when a portrait photo is cropped wide.
const tiles = [
  {
    src: "/images/img_7843.webp",
    alt: "Main training floor under the illuminated ARMOUR sign",
    caption: "Main floor under the ARMOUR sign",
    span: "lg:col-span-5",
    focus: "center 62%",
  },
  {
    src: "/images/img_7848.webp",
    alt: "Power rack and lifting platform with wall murals",
    caption: "Power rack and lifting platform",
    span: "lg:col-span-4",
    focus: "center 60%",
  },
  {
    src: "/images/img_7853.webp",
    alt: "Rubber dumbbell racks in front of the cable machines",
    caption: "Dumbbell racks",
    span: "lg:col-span-3",
    focus: "center 70%",
  },
  {
    src: "/images/img_7854.webp",
    alt: "Plate-loaded machine in front of the Train In The Dark wall",
    caption: "Plate-loaded machines",
    span: "lg:col-span-3",
    focus: "center 55%",
  },
  {
    src: "/images/img_7845.webp",
    alt: "Bench press station and plate-loaded machines on the main floor",
    caption: "Bench and press stations",
    span: "lg:col-span-4",
    focus: "center 58%",
  },
  {
    src: "/images/img_7851.webp",
    alt: "Wide view of the machines and dumbbell area from the entrance",
    caption: "Machines and free weights",
    span: "lg:col-span-5",
    focus: "center 68%",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#0e0e0e] py-20 md:py-28">
      <Container>
        <SectionTitle
          title="Inside the gym"
          lead="Photos from our floor at Hathijan Circle."
        />

        <div className="mt-12 grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-12">
          {tiles.map((tile) => (
            <ParallaxFrame
              key={tile.src}
              speed={6}
              className={`group relative h-80 overflow-hidden bg-[#151515] sm:h-96 lg:h-[30rem] ${tile.span}`}
              overlay={
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/5 to-transparent p-5">
                  <span className="font-body text-sm font-semibold text-white sm:text-base">
                    {tile.caption}
                  </span>
                </div>
              }
            >
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                style={{ objectPosition: tile.focus }}
              />
            </ParallaxFrame>
          ))}
        </div>
      </Container>
    </section>
  );
}
