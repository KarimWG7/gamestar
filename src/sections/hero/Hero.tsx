import { useRef } from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroSection = () => {
  const heroSectionContainer = useRef(null);
  useGSAP(
    () => {
      gsap.from(".from-bottom", {
        delay: 0.5,
        opacity: 0,
        y: 400,
      });
    },
    { scope: heroSectionContainer }
  );
  return (
    <section
      className="text-primary-foreground relative flex flex-col justify-between h-[80vh] container mx-auto px-3"
      ref={heroSectionContainer}
    >
      <h1 className="font-machina text-4xl sm:text-5xl font-bold mb-15 from-bottom text-center lg:text-start">
        A.I. Guardians of GameFi
      </h1>

      <div className="block lg:flex justify-center lg:mx-15 items-center grow">
        <LeftSide clasName="from-bottom" />

        {/* Aspect ratio wrapper */}
        <div className="relative w-full max-w-[900px] aspect-4/2">
          <RightSide className="absolute inset-0 hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
