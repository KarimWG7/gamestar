import React from "react";
import footerImage from "@/assets/footer.png";
import logo from "@/assets/logos/logo.png";
import { Button } from "@/components/ui/button";
import { Telegram, Twitter, Youtube } from "@/components/Images";

const Footer = () => {
  return (
    <footer className="bg-foreground text-muted">
      <img src={footerImage} alt="" className="w-full block" />
      <div className="container mx-auto">
        <div className="flex md:justify-between py-10 flex-wrap gap-y-20 gap-x-20 items-start justify-center">
          <div className="flex flex-col gap-3">
            <img src={logo} alt="" />
            <p>© 2022 Gamesta.</p>
            <p>All rights reserved.</p>
          </div>
          <div className="flex flex-col justify-end self-start gap-5">
            <Button className="text-secondary bg-background hover:bg-muted text-md p-5 ">
              Stake GSG
            </Button>
            <div className="flex justify-between gap-5">
              <p>Join us</p>
              <Youtube />
              <Twitter />
              <Telegram />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-10 gap-y-6 px-3">
            <a href="#">Play 2 Earn</a>
            <a href="#">Team</a>
            <a href="#">Terms of service</a>
            <a href="#">Ecosystem</a>
            <a href="#">Partnership</a>
            <a href="# ">Privacy policy</a>
            <a href="#">Roadmap</a>
            <a href="#">Contact us</a>
            <a href="#">Whitepaper</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
