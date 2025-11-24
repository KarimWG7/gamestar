import { cn } from "@/lib/utils";

export default function ApplicationCard({
  title,
  icon,
  className,
}: {
  title: string;
  icon: string;
  className?: string;
}) {
  return (
    <div
      className={cn([
        `rounded-[40px] shadow-2xl flex flex-col items-center justify-center text-center p-6 hover:scale-[1.1] transition duration-500`,
        className,
      ])}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <p className="text-[14px] font-semibold leading-tight font-machina">
        {title}
      </p>
    </div>
  );
}
