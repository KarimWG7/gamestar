import React, { useRef } from "react";
import logoImage from "@/assets/logos/logo.png";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Menu from "./Menu";

const linkClassName = "text-sm font-extralight text-background";

const Header = ({ className }: { className?: string }) => {
  const headerContainer = useRef(null);
  useGSAP(
    () => {
      // Animate to normal position
      gsap.from("#header-logo", {
        position: "fixed",
        top: "50%",
        left: "50%",
        translateX: -50,
        translateY: -50,
        scale: 2,
        zIndex: 9999,
        delay: 0.5,
        ease: "none",
        onComplete: () => {
          // Clean up: remove transform so header behaves normally
          gsap.set("#header-logo", { clearProps: "all" });
        },
      });
      gsap.from("#fade-in", {
        opacity: 0,
        x: 500,
        delay: 0.5,
        ease: "back.out",
      });
    },
    { scope: headerContainer }
  );
  return (
    <header
      className={cn([
        "flex mx-auto justify-between py-5 items-center mb-10 container px-3",
        className,
      ])}
      ref={headerContainer}
    >
      <div id="header-logo">
        <img src={logoImage} alt="logo" />
      </div>
      <nav id="fade-in" className="hidden lg:block">
        <ul className="flex gap-8 justify-center items-center">
          <li>
            <a className={linkClassName} href="#">
              Play 2 Earn
            </a>
          </li>
          <li>
            <a className={linkClassName} href="#">
              Ecosystem
            </a>
          </li>
          <li>
            <a className={linkClassName} href="#">
              Roadmap
            </a>
          </li>
          <li>
            <a className={linkClassName} href="#">
              Team
            </a>
          </li>
          <li>
            <a className={linkClassName} href="#">
              Partnership
            </a>
          </li>
          <li>
            <a className={linkClassName} href="#">
              Incubator
            </a>
          </li>
          <li>
            <a className={linkClassName} href="#">
              Contact us
            </a>
          </li>
        </ul>
      </nav>
      <div id="fade-in" className="hidden lg:block">
        <Button className="text-secondary bg-background hover:bg-muted text-md p-5">
          Stake GSG
        </Button>
      </div>
      <Menu className="lg:hidden block" id="fade-in" />
    </header>
  );
};

export default Header;
