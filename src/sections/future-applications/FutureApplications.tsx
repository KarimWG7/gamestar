import { useGSAP } from "@gsap/react";
import ApplicationCard from "./ApplicationCard";
import ApplicationFutureHeader from "./Header";
import gsap from "gsap";

export default function FutureApplications() {
  useGSAP(() => {
    gsap.from("#future-container", {
      scrollTrigger: {
        trigger: ".future-card-first",
        toggleActions: "restart pasue none pause",
      },
      opacity: 0,
      y: 25,
      duration: 1,
    });
  }, {});
  return (
    <section className="px-3 flex flex-col relative container mx-auto mt-10 mb-30">
      <div
        className="grid gap-5 grid-cols-2 md:grid-cols-4 sm:grid-cols-3 items-center"
        id="future-container"
      >
        <ApplicationFutureHeader className="col-span-2 mb-4" />
        {/* Top right */}
        <ApplicationCard
          title="EARN2BUY"
          icon="💎"
          className="md:translate-x-5 lg:-translate-y- md:col-span-2 md:max-w-[80%] h-35 w-full md:h-35 bg-[#EAF7FF] future-card future-card-first"
        />

        {/* Top left */}
        <ApplicationCard
          title="G–PAD"
          icon="🎮"
          className="place-self-end md:max-w-[80%] h-35 w-full md:h-35 bg-[#F5F9FC] future-card"
        />

        {/* Middle center */}
        <ApplicationCard
          title="NEW GAME DEVELOPMENT FUND"
          icon="🧊"
          className="place-self-center md:max-w-[80%] h-35 w-full md:h-35 bg-[#FCEBFA] future-card"
        />

        {/* Right middle */}
        <ApplicationCard
          title="G–AVATAR"
          icon="🧍"
          className="place-self-start lg:-translate-y-5 md:max-w-[80%] h-35 w-full md:h-35 bg-[#F6FAFD] future-card"
        />

        {/* Far right middle */}
        <ApplicationCard
          title="LOAN2BUY"
          icon="💳"
          className="md:max-w-[80%] h-35 w-full md:h-35 bg-[#EBFAEE] lg:-translate-x-10 lg:-translate-y-5 future-card"
        />

        {/* Bottom left */}
        <ApplicationCard
          title="GAMESTA TRADING FUND"
          icon="📊"
          className="place-self-end lg:col-span-2 md:max-w-[80%] h-35 w-full md:h-35 bg-[#EAF7FF] future-card"
        />

        {/* Bottom right */}
        <ApplicationCard
          title="GAMESTA API & SDK WITH BIG DATA"
          icon="💻"
          className="col-span-2 lg:col-span-1 lg:-translate-y-4 md:max-w-[80%] h-35 w-full md:h-35 bg-[#F5F1FF] future-card future-card-last"
        />
      </div>
    </section>
  );
}
