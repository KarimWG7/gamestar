import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const PlayToEarnHeader = () => {
  const headerRef = useRef(null);
  useGSAP(
    () => {
      gsap.from(".header-solid", {
        scrollTrigger: {
          trigger: ".header-solid",
          toggleActions: "restart pause pause pause",
          start: "center bottom",
          scrub: 1,
        },
        scale: 1.2,
        display: "none",
        rotation: 6,
        opacity: 0,
      });
      gsap.from(".header-outline", {
        scrollTrigger: {
          trigger: ".header-solid",
          toggleActions: "restart pause pause pause",
          start: "center bottom",
          scrub: 1,
        },
        opacity: 0,
      });
      gsap.from(".header-text", {
        scrollTrigger: {
          trigger: ".header-text",
          toggleActions: "restart pause pause pause",
          start: "center bottom",
        },
        paddingLeft: 0,
        opacity: 0,
        duration: 1,
      });
    },
    { scope: headerRef }
  );
  return (
    <div className="relative text-foreground" ref={headerRef}>
      <h2 className="font-machina text-3xl sm:text-5xl lg:text-7xl font-extrabold text-center -rotate-6 header-solid">
        PLAY 2 EARN
      </h2>

      <p className="font-machina text-transparent bg-clip-text text-4xl sm:text-6xl lg:text-8xl font-black text-shadow-outline-primary text-center absolute top-0 sm:-top-3 left-[51.2%] -translate-x-1/2 text-nowrap -z-10 -rotate-3 tracking-[5px] md:tracking-[15px] header-outline">
        PLAY 2 EARN
      </p>
      <h3 className="text-xl text-center mt-10 header-text">
        Play to Earn is flipping the gaming industry on its head
      </h3>
      <p className="md:text-left max-w-2xl mx-auto mt-4 md:pl-35 text-center header-text">
        With the introduction of blockchain technology and the ability to create
        trustless networks, gaming developers are now able to reward and
        incentivise the players that make up the core value of the game.
      </p>
    </div>
  );
};

export default PlayToEarnHeader;
