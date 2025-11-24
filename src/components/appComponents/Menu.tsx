import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import logoImage from "@/assets/logos/logo.png";

export default function Menu({
  className,
  id,
}: {
  className: string;
  id: string;
}) {
  return (
    <div className={className} id={id}>
      <Sheet>
        <SheetTrigger asChild>
          <MenuIcon
            color="#fff"
            size="24px"
            className="border border-muted active:color-muted active:bg-border p-1 rounded-lg hover:text-muted cursor-pointer box-content"
          />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <img src={logoImage} alt="logo" className="w-[50%]" />
          </SheetHeader>
          <nav>
            <ul className="flex flex-col gap-8 items-start ml-10">
              <li>
                <a className="text-foreground" href="#">
                  Play 2 Earn
                </a>
              </li>
              <li>
                <a className="text-foreground" href="#">
                  Ecosystem
                </a>
              </li>
              <li>
                <a className="text-foreground" href="#">
                  Roadmap
                </a>
              </li>
              <li>
                <a className="text-foreground" href="#">
                  Team
                </a>
              </li>
              <li>
                <a className="text-foreground" href="#">
                  Partnership
                </a>
              </li>
              <li>
                <a className="text-foreground" href="#">
                  Incubator
                </a>
              </li>
              <li>
                <a className="text-foreground" href="#">
                  Contact us
                </a>
              </li>
            </ul>
          </nav>
          <SheetFooter>
            <Button className="font-machina text-md p-5">Stake GSG</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
