import { Check } from "lucide-react";

const Incubation = () => {
  return (
    <section className="py-30 px-3 bg-blue-50">
      <div className="mx-auto max-w-7xl contianer">
        <h2 className="text-5xl md:text-7xl font-machina text-center">
          Incubation & Advisory
        </h2>
        <div className="items-center mt-5 max-w-2xl mx-auto">
          <p className="text-lg">
            GAMESTA brings value to new crypto projects through its experience
            in Gaming, P2E, Metaverse, and Blockchain. Through previous success,
            connections, and experience we are able to add unique value add
            propositions, allowing developers and creatives to concentrate on
            their skills.
          </p>
          <p className="my-5 text-sm">Services include:</p>
          <div className="grid grid-cols-2 gap-x-10 gap-y-5">
            <div className="flex gap-4">
              <Check color="#35a39e" />
              <p>Tokenomics & Strategy</p>
            </div>
            <div className="flex gap-4">
              <Check color="#35a39e" />
              <p>Brand Association</p>
            </div>
            <div className="flex gap-4">
              <Check color="#35a39e" />
              <p>GAMESTA Investor Network</p>
            </div>
            <div className="flex gap-4">
              <Check color="#35a39e" />
              <p>CEX, DEX, & Launchpad </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Incubation;
