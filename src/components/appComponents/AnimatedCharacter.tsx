import character_1 from "@/assets/characters/characer-1.png";
import character_2 from "@/assets/characters/characer-2.png";
import character_3 from "@/assets/characters/characer-3.png";
import character_4 from "@/assets/characters/characer-4.png";
import character_5 from "@/assets/characters/characer-5.png";
import character_6 from "@/assets/characters/characer-6.png";
import character_7 from "@/assets/characters/characer-7.png";
import character_8 from "@/assets/characters/characer-8.png";
import character_9 from "@/assets/characters/characer-9.png";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const characters: Record<string, string> = {
  character_1,
  character_2,
  character_3,
  character_4,
  character_5,
  character_6,
  character_7,
  character_8,
  character_9,
};

export const Character = ({
  number,
  top,
  left,
  className,
}: {
  number: number;
  top: string; // e.g. "30%"
  left: string; // e.g. "45%"
  className?: string;
}) => {
  useGSAP(() => {
    gsap.set(`.character-${number}`, {
      position: "fixed",
      top: "50%",
      left: "50%",
      xPercent: -50,
      yPercent: -50,
      scale: 3,
      opacity: 0,
    });

    // 2) ANIMATE TO FINAL RESPONSIVE POSITION
    gsap.to(`.character-${number}`, {
      position: "absolute",
      top,
      left,
      xPercent: 0,
      yPercent: 0,
      scale: 1,
      opacity: 1,
      duration: 1.5,
      delay: number * 0.2 + 0.5,
      ease: `back.out(${0.25 * number})`,
      onComplete: () => {
        gsap.set(`.character-${number}`, { clearProps: "position" });
      },
    });
  }, []);

  const key = `character_${number}`;

  return (
    <img
      src={characters[key]}
      alt=""
      style={{ top, left }}
      className={cn([
        "absolute -translate-x-1/2 -translate-y-1/2 character-" + number,
        className,
      ])}
    />
  );
};
