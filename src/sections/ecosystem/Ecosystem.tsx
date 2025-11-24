import { useRef } from "react";
import Header from "./Header";
import GSG from "./GSG";
import Distribution from "./Distribution";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Ecosystem = () => {
  const ecosystemRef = useRef(null);
  useGSAP(() => {
    // Disable these animations on small screens to avoid breaking the landing page.
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(min-width: 768px)").matches) {
      // ensure no leftover ScrollTriggers remain
      try {
        const ScrollTrigger = (window as any).ScrollTrigger;
        if (ScrollTrigger)
          ScrollTrigger.getAll().forEach((st: any) => st.kill());
      } catch (e) {}
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#ecosystem",
        start: "top top",
        end: "+=100%", // keep pinned for one viewport height while the timeline plays
        pin: true,
        pinSpacing: true,
        toggleActions: "restart none none none",
        scrub: 2,
      },
    });

    tl.from(".eco-heading", { x: 200, opacity: 0, duration: 0.8 })
      .from(".eco-header-text", { x: -200, opacity: 0, duration: 1.8 })
      .from(
        ".inner-circ",
        {
          opacity: 0,
          rotation: 360,
          left: "500px",
          transformOrigin: "50% 50%",
          duration: 3,
        },
        "+=0.2"
      )
      .from(".outer-circ", { opacity: 0, duration: 0.6 }, "-=0.6")
      .from(
        ".left-text",
        { x: 50, opacity: 0, rotation: 0, duration: 0.4 },
        "-=0.3"
      )
      .from(
        ".text-stack",
        {
          opacity: 0,
          duration: 2,
        },
        "-=3"
      )
      .from(".text-stack", {
        rotation: 0,
        duration: 1.5,
      })
      .from(
        ".text-margined",
        {
          marginLeft: 0,
          duration: 1.5,
        },
        "-=1.5"
      );

    return () => {
      try {
        tl.kill();
        const ScrollTrigger = (window as any).ScrollTrigger;
        if (ScrollTrigger)
          ScrollTrigger.getAll().forEach((st: any) => st.kill());
      } catch (e) {}
    };
  }, {});

  return (
    <section
      className="container mx-auto mt-15 mb-30 relative max-w-7xl px-3"
      id="ecosystem"
      ref={ecosystemRef}
    >
      <div>
        <Header />
        <GSG className="left-1/8 gsg" />
      </div>
      <Distribution />
    </section>
  );
};

export default Ecosystem;
