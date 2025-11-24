import React from "react";
import twentyImage from "@/assets/twenty.png";
import eightyImage from "@/assets/eighty.png";
import tenImage from "@/assets/ten.png";
import seventyImage from "@/assets/seventy.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Distribution = () => {
  useGSAP(() => {
    gsap.from(".dist-header", {
      scrollTrigger: {
        trigger: ".dist-header",
        toggleActions: "restart pause resume pause",
        start: "top bottom",
        scrub: 1,
      },
      y: "50px",
      opacity: 0.5,
    });
    gsap.from(".eighty", {
      scrollTrigger: {
        trigger: ".eighty",
        toggleActions: "restart pause none pause",
        start: "bottom bottom",
      },
      x: -200,
      opacity: 0,
      duration: 0.5,
    });
    gsap.from(".twenty", {
      scrollTrigger: {
        trigger: ".twenty",
        toggleActions: "restart pause none pause",
        start: "bottom bottom",
      },
      duration: 0.5,
      x: -200,
      opacity: 0,
    });
  }, {});
  return (
    <div className="mt-70 font-machina">
      <h4 className="text-center text-4xl sm:text-5xl dist-header">
        Distribution of game rewards ($GSG):
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-50 mt-15 lg:mt-30">
        <div className="sm:-translate-y-5 w-[300px] sm:w-xs eighty">
          <img src={eightyImage} alt="" className="" />
          <p className="text-2xl font-euclid mt-5">
            of the $GSG is distributed to the player and investor in accordance
            with the agreed upon split.
          </p>
        </div>

        <div className="translate-y-5 lg:col-span-2 flex flex-col items-center twenty">
          <p className="font-euclid text-2xl">The remaining</p>
          <img src={twentyImage} alt="" className="max-w-xs" />
          <p className="text-2xl font-euclid mt-5 sm:translate-x-20 sm:self-start">
            will be divided between the 3
          </p>
          <p className="text-2xl font-euclid sm:translate-x-20 sm:self-start">
            functions of the GAMESTA treasury:
          </p>
          <div className="flex gap-4 mt-15 flex-wrap">
            <div className="flex flex-col items-start min-w-[120px]">
              <img src={tenImage} alt="" className="sm:w-fit w-[72px]" />
              <p className="mt-5 text-xs sm:text-[16px] text-wrap">Burn in</p>
            </div>
            <div className="flex flex-col items-start min-w-[120px]">
              <img src={tenImage} alt="" className="sm:w-fit w-[72px]" />
              <p className="mt-5 text-xs sm:text-[16px] text-wrap">
                Earn-2-Buy (E2B) fund
              </p>
            </div>
            <div className="flex flex-col items-start min-w-[120px]">
              <img src={tenImage} alt="" className="sm:w-fit w-[72px]" />
              <p className="mt-5 text-xs sm:text-[16px] text-wrap">
                Burn back in new game development fund
              </p>
            </div>
            <div className="flex flex-col items-start min-w-[120px]">
              <img src={seventyImage} alt="" className="sm:w-fit w-[72px]" />
              <p className="mt-5 text-xs sm:text-[16px] text-wrap">
                Retained by GAMESTA treasury for deployment when needed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distribution;
