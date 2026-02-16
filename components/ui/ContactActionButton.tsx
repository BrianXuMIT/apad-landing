import React from "react";

type ContactActionButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant: "primary" | "secondary";
  className?: string;
};

export default function ContactActionButton({
  children,
  icon,
  variant,
  className = "",
}: ContactActionButtonProps) {
  const variantClass =
    variant === "primary"
      ? "border-[#2B1B72] bg-[linear-gradient(145deg,#2A1A70_0%,#3A258A_100%)] text-white shadow-[0_8px_16px_rgba(20,12,52,0.3)] hover:border-[#3A2790] hover:shadow-[0_10px_20px_rgba(20,12,52,0.36)]"
      : "border-white/85 bg-white text-[#5D36CF] shadow-[0_8px_16px_rgba(40,24,95,0.2)] hover:bg-white/95 hover:shadow-[0_10px_20px_rgba(40,24,95,0.26)]";

  return (
    <button
      type="button"
      className={`inline-flex h-[42px] items-center gap-2 whitespace-nowrap rounded-[13px] border px-4 font-kanit text-[13px] font-medium transition-all duration-300 hover:-translate-y-0.5 max-[430px]:w-full max-[430px]:justify-center sm:h-[44px] sm:px-5 sm:text-[14px] lg:h-[46px] lg:text-[15px] ${variantClass} ${className}`.trim()}
    >
      {icon}
      {children}
    </button>
  );
}

