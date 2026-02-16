import React from "react";
import AnimatedBorderCard from "./AnimatedBorderCard";

type HighlightBadgeProps = {
  text: string;
};
export default function HighlightBadge({ text }: HighlightBadgeProps) {
  const goldGradientId = React.useId();
  const goldShineId = React.useId();
  const starPath =
    "M20.0479 12.127C20.0175 12.0459 19.9535 11.9819 19.8724 11.9514L15.4154 10.2801C15.1559 10.1828 15.1559 9.81572 15.4153 9.71832L19.8725 8.04522C19.9535 8.01479 20.0175 7.95081 20.0479 7.86973L21.7193 3.41441C21.8166 3.15495 22.1836 3.15489 22.281 3.41432L23.9541 7.86982C23.9845 7.95084 24.0484 8.01478 24.1294 8.04521L28.5851 9.71834C28.8445 9.81575 28.8444 10.1827 28.585 10.2801L24.1295 11.9515C24.0485 11.9819 23.9845 12.0458 23.954 12.1269L22.2811 16.584C22.1837 16.8435 21.8166 16.8434 21.7193 16.5839L20.0479 12.127ZM9.38112 22.7854C9.35063 22.7092 9.29023 22.6488 9.214 22.6183L3.36309 20.2779C3.11165 20.1773 3.11165 19.8214 3.36309 19.7208L9.214 17.3804C9.29023 17.3499 9.35063 17.2895 9.38112 17.2133L11.7215 11.3624C11.8221 11.1109 12.178 11.1109 12.2786 11.3624L14.619 17.2133C14.6495 17.2895 14.7099 17.3499 14.7861 17.3804L20.637 19.7208C20.8885 19.8214 20.8885 20.1773 20.637 20.2779L14.7861 22.6183C14.7099 22.6488 14.6495 22.7092 14.619 22.7854L12.2786 28.6363C12.178 28.8877 11.8221 28.8877 11.7215 28.6363L9.38112 22.7854Z";

  return (
    <AnimatedBorderCard
      className="inline-flex rounded-full shadow-[0_10px_26px_rgba(118,86,212,0.16)]"
      innerClassName="flex items-center gap-2.5 rounded-full border border-white/70 bg-[linear-gradient(108deg,#FFFFFF_0%,#FBF7FF_56%,#F3F7FF_100%)] px-4 py-2 backdrop-blur-[2px] sm:gap-3 sm:px-5 sm:py-2.5 lg:px-7 lg:py-3"
    >
      <span className="relative inline-flex h-8 w-8 items-center justify-center lg:h-9 lg:w-9">
        <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(250,204,21,0.48)_0%,rgba(250,204,21,0)_70%)] opacity-80 blur-[1.5px] animate-pulse" />
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 shrink-0 drop-shadow-[0_0_8px_rgba(245,158,11,0.36)]"
        >
          <defs>
            <linearGradient
              id={goldGradientId}
              x1="3"
              y1="4"
              x2="27"
              y2="28"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.03" stopColor="#FFF4BF" />
              <stop offset="0.47" stopColor="#FACC15" />
              <stop offset="1" stopColor="#F59E0B" />
            </linearGradient>
            <radialGradient
              id={goldShineId}
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(11.5 8.5) rotate(40) scale(10.8)"
            >
              <stop stopColor="white" stopOpacity="0.9" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path d={starPath} fill={`url(#${goldGradientId})`} />
          <path
            d={starPath}
            fill={`url(#${goldShineId})`}
            opacity="0.56"
          />
          <path
            d={starPath}
            fill="none"
            stroke="#FCD34D"
            strokeWidth="0.85"
            strokeLinejoin="round"
            opacity="0.92"
          />
        </svg>
      </span>

      <p className="whitespace-nowrap bg-[linear-gradient(98deg,#252B3C_0%,#3D355D_54%,#6645A8_100%)] bg-clip-text font-kanit text-[13px] font-medium leading-none tracking-[0.03em] text-transparent sm:text-[15px] lg:text-[17px]">
        {text}
      </p>
    </AnimatedBorderCard>
  );
}
