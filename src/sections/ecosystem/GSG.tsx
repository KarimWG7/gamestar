import { cn } from "@/lib/utils";

const GSG = ({ className }: { className: string }) => {
  return (
    <div>
      <div className={cn(["relative inline-block", className])}>
        <div className="absolute -inset-15 lg:-inset-30 rounded-full bg-linear-to-tr from-blue-300/20 to-blue-100/10 pointer-events-none outer-circ" />

        <div className="rounded-full p-1.5 bg-linear-to-b from-primary to-purple-600 inline-block relative inner-circ">
          <h4 className="-rotate-6 text-3xl md:text-5xl font-bold flex flex-col items-center font-machina size-50 lg:size-70 rounded-full bg-white content-center justify-center relative overflow-hidden">
            {/* bluish-transparent (bottom) to transparent (top) gradient */}
            <span className="absolute inset-x-0 bottom-0 h-full bg-linear-to-t from-purple-700/10 to-blue-500/10 pointer-events-none" />
            <span className="text-[16px] font-normal text-start z-10">The</span>
            $ GSG
          </h4>
        </div>
        <div className="flex flex-col items-start -rotate-6 absolute w-fit top-2/3 sm:top-1/2 -right-[30%] sm:-right-[120%] mt-4 text-stack">
          <p className="text-lg lg:text-2xl bg-primary p-1 text-background">
            Token will be used
          </p>
          <p className="text-lg lg:text-2xl bg-primary p-1 text-background min-[600px]:ml-12 sm:ml-24 text-margined">
            to transact value within{" "}
          </p>
          <p className="text-lg lg:text-2xl bg-primary p-1 text-background min-[600px]:ml-24 sm:ml-48 text-margined">
            the Gamesta Ecosystem
          </p>
        </div>
        <p className="font-machina max-w-2xs absolute text-end text-sm text-foreground font-medium -bottom-7/8 sm:top-1/6 min-[550px]:-right-[130%] md:-right-[200%] rotate-3 left-text">
          Our token will be based on Polygon (MATIC) to leverage the ETH network
          whilst keeping the gas & transaction fees to a minimum.
        </p>
      </div>
    </div>
  );
};

export default GSG;
