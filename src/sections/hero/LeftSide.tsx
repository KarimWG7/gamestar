import { Button } from "@/components/ui/button";
import mexc from "@/assets/logos/mexc.png";
import quickswap from "@/assets/logos/quickswap.png";
import { Telegram, Twitter, Youtube } from "@/components/Images";
import { cn } from "@/lib/utils";

const LeftSide = ({ clasName }: { clasName?: string }) => {
  return (
    <div className={cn(["flex flex-col w-full", clasName])}>
      <p className="text-primary-foreground text-xl max-w-120 mb-5 self-center lg:self-start text-center lg:text-start">
        The next generation of GameFi, bred through advancing technologies to
        deliver solutions to, while building symbiotic relationships in, the
        ever-expanding community.
      </p>
      <div className="mb-4 md:{center-elements flex-col}">
        <p className="text-md mb-1">Buy GSG</p>
        <div className="flex gap-3">
          <Button className="py-6 bg-background text-foreground text-xl flex items-center hover:bg-accent rounded-md">
            <img src={mexc} alt="Two triangles" />
            MEXC
          </Button>
          <Button className="py-6 bg-background text-foreground text-xl flex items-center hover:bg-accent rounded-md">
            <img src={quickswap} alt="Pheonix head" />
            Quickswap
          </Button>
        </div>
      </div>
      <div>
        <p className="text-md mb-1">Join our community</p>
        <div className="flex gap-3 flex-wrap">
          <Button className="py-6 text-lg bg-primary rounded-md transition hover:bg-accent hover:text-foreground">
            <Youtube />
            Youtube
          </Button>
          <Button className="py-6 text-lg bg-primary rounded-md transition hover:bg-accent hover:text-foreground">
            <Twitter />
            Twitter
          </Button>
          <Button className="py-6 text-lg bg-primary rounded-md transition hover:bg-accent hover:text-foreground">
            <Telegram />
            Telegram
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
