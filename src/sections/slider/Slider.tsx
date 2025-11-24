import { useRef } from "react";
import slider_1 from "@/assets/slider/slider-1.png";
import slider_2 from "@/assets/slider/slider-2.png";
import slider_3 from "@/assets/slider/slider-3.png";
import slider_4 from "@/assets/slider/slider-4.png";
import slider_5 from "@/assets/slider/slider-5.png";
import slider_6 from "@/assets/slider/slider-6.png";
import slider_7 from "@/assets/slider/slider-7.png";
import slider_8 from "@/assets/slider/slider-8.png";
import gsap from "gsap";
import { Draggable, MotionPathPlugin, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Draggable, MotionPathPlugin, ScrollTrigger);

const sliderImages = [
  slider_1,
  slider_2,
  slider_3,
  slider_4,
  slider_5,
  slider_6,
  slider_7,
  slider_8,
];

const Slider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLImageElement | null)[]>([]);
  useGSAP(
    () => {
      const slider = sliderRef.current;
      if (!slider) return;

      const items = gsap.utils.toArray<HTMLImageElement>(".slider-item");

      // Duplicate items for seamless loop
      items.forEach((item) => {
        const clone = item.cloneNode(true) as HTMLImageElement;
        slider.appendChild(clone);
      });

      const allItems = gsap.utils.toArray<HTMLImageElement>(".slider-item");

      // Calculate total width of original items
      let totalWidth = 0;
      items.forEach((item) => {
        totalWidth += item.offsetWidth + 16; // 16px gap (gap-4)
      });

      // Animate seamlessly
      gsap.to(allItems, {
        x: -totalWidth,
        duration: totalWidth / 80, // Adjust speed here (lower = faster)
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x) => {
            const value = parseFloat(x);
            return `${value % totalWidth}px`;
          },
        },
      });
    },
    { scope: sliderRef }
  );

  return (
    <div className="my-20 overflow-hidden bg-foreground">
      <h1 className="text-2xl text-primary-foreground font-semibold container mx-auto text-center mt-5 font-machina">
        PLAY 2 EARN GAMES
      </h1>
      <div
        className="flex items-center justify-between gap-4 whitespace-nowrap"
        ref={sliderRef}
      >
        {sliderImages.map((image, idx) => (
          <img
            src={image}
            ref={(el) => {
              itemsRef.current[idx] = el;
            }}
            key={idx}
            className="slider-item"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
