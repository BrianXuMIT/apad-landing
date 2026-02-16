import React from "react";

type GlowImageProps = {
  src: string;
  alt: string;
  containerClassName?: string;
  imageClassName?: string;
  primaryGlowClassName?: string;
  secondaryGlowClassName?: string;
};

export default function GlowImage({
  src,
  alt,
  containerClassName = "",
  imageClassName = "relative z-[1] h-auto w-full object-contain",
  primaryGlowClassName = "pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D84DFF]/85 blur-[105px] lg:h-[380px] lg:w-[380px] lg:blur-[125px]",
  secondaryGlowClassName = "pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A14DFF]/65 blur-[145px] lg:h-[560px] lg:w-[560px] lg:blur-[165px]",
}: GlowImageProps) {
  return (
    <div className={`relative ${containerClassName}`.trim()}>
      <div className={primaryGlowClassName} />
      <div className={secondaryGlowClassName} />
      <img src={src} alt={alt} className={imageClassName} />
    </div>
  );
}

