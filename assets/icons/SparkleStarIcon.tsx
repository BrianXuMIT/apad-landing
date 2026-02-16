import React from "react";

type SparkleStarIconProps = {
  className?: string;
};

export default function SparkleStarIcon({
  className = "h-5 w-5 lg:h-6 lg:w-6",
}: SparkleStarIconProps) {
  const starGradientId = React.useId();
  const starShineId = React.useId();

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <defs>
        <linearGradient
          id={starGradientId}
          x1="3"
          y1="3"
          x2="21"
          y2="21"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#A978FF" />
          <stop offset="1" stopColor="#18B8F8" />
        </linearGradient>
        <radialGradient
          id={starShineId}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(8 7) rotate(35) scale(7)"
        >
          <stop stopColor="white" stopOpacity="0.85" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path
        d="M12 2.5c.45 0 .85.3.96.74l1.36 5.17c.05.2.21.36.41.41l5.17 1.36a1 1 0 0 1 0 1.92l-5.17 1.36a.6.6 0 0 0-.41.41l-1.36 5.17a1 1 0 0 1-1.92 0l-1.36-5.17a.6.6 0 0 0-.41-.41L3.1 12.1a1 1 0 0 1 0-1.92l5.17-1.36a.6.6 0 0 0 .41-.41l1.36-5.17A1 1 0 0 1 12 2.5Z"
        fill={`url(#${starGradientId})`}
      />
      <path
        d="M12 2.5c.45 0 .85.3.96.74l1.36 5.17c.05.2.21.36.41.41l5.17 1.36a1 1 0 0 1 0 1.92l-5.17 1.36a.6.6 0 0 0-.41.41l-1.36 5.17a1 1 0 0 1-1.92 0l-1.36-5.17a.6.6 0 0 0-.41-.41L3.1 12.1a1 1 0 0 1 0-1.92l5.17-1.36a.6.6 0 0 0 .41-.41l1.36-5.17A1 1 0 0 1 12 2.5Z"
        fill={`url(#${starShineId})`}
        opacity="0.5"
      />
    </svg>
  );
}

