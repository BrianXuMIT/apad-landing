import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnimatedBorderCardProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

export default function AnimatedBorderCard({
  children,
  className,
  innerClassName,
}: AnimatedBorderCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[22px] p-[1px] shadow-[0_0_0_1px_rgba(134,98,255,0.20),0_0_18px_rgba(120,88,255,0.16)]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 [will-change:transform] animate-[spin_12s_linear_infinite] bg-[conic-gradient(from_0deg,#8C45FF,#7560FF,#2DA8FF,#7560FF,#8C45FF)] opacity-90" />
      <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[28px] bg-[#D14BFF]/28 opacity-0 blur-[32px] transition-opacity duration-500 ease-out group-hover:opacity-100" />
      <div className={cn("relative z-[1] h-full rounded-[19px]", innerClassName)}>
        {children}
      </div>
    </div>
  );
}
