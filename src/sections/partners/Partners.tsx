import React from "react";
import partner1 from "@/assets/slider/slider-7.png";
import partner2 from "@/assets/logos/partner-2.png";
import partner3 from "@/assets/logos/partner-3.png";
import partner4 from "@/assets/logos/partner-4.png";
import partner5 from "@/assets/logos/partner-5.png";
import partner6 from "@/assets/logos/partner-6.png";
import partner7 from "@/assets/logos/partner-7.png";
import partner8 from "@/assets/logos/partner-8.png";
import partner9 from "@/assets/logos/partner-9.png";
import partner10 from "@/assets/logos/partner-10.png";
import partner11 from "@/assets/logos/partner-11.png";
import partner12 from "@/assets/logos/partner-12.png";
import partner13 from "@/assets/logos/partner-13.png";
import partner14 from "@/assets/logos/partner-14.png";

const partners = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
  partner9,
  partner10,
  partner11,
  partner12,
  partner13,
  partner14,
];

const Partners = () => {
  return (
    <section className="container mx-auto my-20 px-3">
      <h2 className="text-5xl font-machina font-bold max-w-80 mb-10">
        Partners & Investors
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-x-20 sm:gap-y-15">
        {partners.map((partner, idx) => (
          <div
            key={idx}
            className=" w-35 h-20 sm:w-45 sm:h-30 center-elements border rounded-3xl border-muted transition hover:scale-[1.2] duration-300"
          >
            <img src={partner} alt="" className="w-fit h-fit" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
