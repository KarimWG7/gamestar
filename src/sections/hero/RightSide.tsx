import { Character } from "@/components/appComponents/AnimatedCharacter";
import { Laptop } from "@/components/Images";
import { cn } from "@/lib/utils";

const RightSide = ({ className }: { className?: string }) => {
  return (
    <div className={cn(["relative w-full h-full", className])}>
      <Laptop className="from-bottom absolute  left-0" />

      {/* Characters with %-based positioning */}
      <Character number={1} top="50%" left="-10%" className="-z-10" />
      <Character number={2} top="-30%" left="-15%" className="-z-20" />
      <Character number={3} top="-40%" left="10%" />
      <Character number={4} top="-45%" left="18%" className="-z-10" />
      <Character number={5} top="-44%" left="32%" />
      <Character number={6} top="-45%" left="42%" className="-z-10" />
      <Character number={7} top="-60%" left="60%" className="-z-10" />
      <Character number={8} top="20%" left="90%" className="-z-10" />
      <Character number={9} top="20%" left="92%" className="-z-10" />
    </div>
  );
};

export default RightSide;
