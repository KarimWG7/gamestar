import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const ApplicationFutureHeader = ({ className }: { className: string }) => {
  useGSAP(() => {
    gsap.from(".future-header", {
      scrollTrigger: {
        trigger: ".future-header",
        toggleActions: "restart pause resume pause",
        start: "top bottom",
        scrub: 1,
      },
      y: "50px",
    });
  }, {});
  return (
    <div className={cn(["text-center md:text-end future-header", className])}>
      <h2 className="text-6xl md:text-8xl font-medium text-foreground leading-none font-machina">
        Future
      </h2>
      <h2 className="text-4xl md:text-6xl font-medium text-foreground leading-none -mt-2 font-machina">
        Applications
      </h2>

      <Button className="mt-3 px-8 py-6 rounded-lg bg-linear-to-tr from-[#00C2FF] to-[#0094FF] text-white text-sm shadow-md">
        Read more in our Whitepaper
      </Button>
    </div>
  );
};

export default ApplicationFutureHeader;
