// Arrow.tsx
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ArrowProps {
  type: "horizontal" | "curved-down-left";
  color?: string;
  className?: string;
}

const Arrow = ({ type, color = "#60A5FA", className = "" }: ArrowProps) => {
  const arrowRef = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const path = arrowRef.current?.querySelector("path");

      if (path) {
        const pathLength = path.getTotalLength();

        gsap.set(path, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: arrowRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        });
      }
    },
    { scope: arrowRef }
  );

  const paths = {
    horizontal: "M 0 30 L 100 30 L 95 25 M 100 30 L 95 35",
    "curved-down-left": "M 50 0 Q 50 75, 100 100 L 95 95 M 100 100 L 95 105",
  };

  const dimensions = {
    horizontal: { width: 120, height: 60, viewBox: "0 0 120 60" },
    "curved-down-left": { width: 100, height: 150, viewBox: "0 0 100 150" },
  };

  const { width, height, viewBox } = dimensions[type];

  return (
    <svg
      ref={arrowRef}
      className={`roadmap-arrow absolute pointer-events-none ${className}`}
      width={width}
      height={height}
      viewBox={viewBox}
    >
      <path
        d={paths[type]}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Arrow;
