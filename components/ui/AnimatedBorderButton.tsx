import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnimatedBorderButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  innerClassName?: string;
  variant?: "animated" | "neon";
};

export default function AnimatedBorderButton({
  children,
  className,
  innerClassName,
  variant = "animated",
  type = "button",
  ...props
}: AnimatedBorderButtonProps) {
  const isNeon = variant === "neon";

  return (
    <button
      type={type}
      className={cn(
        "group relative overflow-hidden rounded-[18px] p-[1px] transition-transform active:scale-95",
        isNeon &&
          "rounded-[20px] border border-transparent shadow-[0_10px_22px_rgba(66,57,150,0.32)] transition-all duration-300 hover:border-[#5BEAFF]/85 hover:shadow-[0_0_0_1px_rgba(91,234,255,0.75),0_0_20px_rgba(49,221,255,0.85),0_0_38px_rgba(49,221,255,0.60)]",
        className,
      )}
      {...props}
    >
      {isNeon ? (
        <span className="pointer-events-none absolute -inset-2 -z-10 rounded-[22px] bg-[#31DDFF]/90 opacity-0 blur-[16px] transition-all duration-300 group-hover:opacity-100 group-hover:blur-[20px]" />
      ) : (
        <>
          <span className="pointer-events-none absolute inset-0 [will-change:transform] animate-[spin_12s_linear_infinite] bg-[conic-gradient(from_0deg,#8C45FF,#7560FF,#2DA8FF,#7560FF,#8C45FF)] opacity-90" />
          <span className="pointer-events-none absolute -inset-3 -z-10 rounded-[22px] bg-[#D14BFF]/28 opacity-0 blur-[24px] transition-opacity duration-500 ease-out group-hover:opacity-100" />
        </>
      )}
      <span
        className={cn(
          "relative z-[1] inline-flex h-full w-full items-center justify-center rounded-[17px] bg-gradient-to-r from-[#8C45FF] to-[#0AAFF9] text-white transition-all hover:opacity-90",
          isNeon &&
            "rounded-[18px] bg-[linear-gradient(92deg,#6A1FD0_0%,#2A54DE_52%,#1E5EE0_100%)] shadow-none hover:brightness-110",
          innerClassName,
        )}
      >
        {children}
      </span>
    </button>
  );
}
