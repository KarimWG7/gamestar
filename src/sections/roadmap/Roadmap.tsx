import { useGSAP } from "@gsap/react";
import { cards } from "./cards";
import RoadmapCard from "./RoadmapCard";
import gsap from "gsap";

export default function Roadmap() {
  useGSAP(() => {
    gsap.from(".roadmap-card", {
      scrollTrigger: {
        trigger: ".roadmap-card-0",
        toggleActions: "restart pasue none pause",
        endTrigger: ".roadmap-card-8",
      },
      x: 25,
      opacity: 0,
      ease: "power",
      stagger: 0.15,
    });
    gsap.from(".roadmap-header", {
      scrollTrigger: {
        trigger: ".roadmap-header",
        start: "bottom bottom",
        toggleActions: "restart pasue none pause",
        scrub: 0.5,
      },
      x: 25,
      opacity: 0,
      diration: 1,
    });
  }, {});
  return (
    <section className="container mx-auto mb-50 mt-20 px-2">
      <h2 className="font-bold text-5xl font-machina sm:mb-15 mb-10 roadmap-header">
        TECHNICAL ROADMAP
      </h2>

      <div className="cards grid sm:grid-cols-3 gap-x-5 gap-y-10 items-stretch">
        {cards.map((card, index) => (
          <RoadmapCard
            card={card}
            key={index}
            className={`roadmap-card roadmap-card-${index}`}
          />
        ))}
      </div>
    </section>
  );
}
