import React from "react";

type HowItWorksIconProps = {
  className?: string;
};

export default function HowItWorksSkillsIcon({
  className = "h-[66px] w-[62px] shrink-0 lg:h-[72px] lg:w-[68px]",
}: HowItWorksIconProps) {
  const gradientId = React.useId();

  return (
    <svg
      width="88"
      height="92"
      viewBox="0 0 129 135"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="64.1738"
          x2="141"
          y2="64.1738"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8C45FF" />
          <stop offset="1" stopColor="#0AAFF9" />
        </linearGradient>
      </defs>

      <path
        d="M46.4977 2.9586C45.5406 0.517656 42.7776 -0.699837 40.4066 0.419323C31.7747 4.4937 24.0445 10.2863 17.698 17.4599C10.301 25.8209 4.99525 35.8189 2.21745 46.6312C-0.560359 57.4435 -0.730825 68.7609 1.72008 79.6519C4.17098 90.543 9.17317 100.696 16.315 109.276C23.4568 117.856 32.534 124.618 42.7996 129.004C53.0652 133.39 64.2257 135.276 75.3625 134.506C86.4993 133.736 97.2941 130.332 106.858 124.575C115.064 119.635 122.163 113.084 127.736 105.335C129.267 103.207 128.571 100.268 126.344 98.8844C124.118 97.5003 121.205 98.1964 119.652 100.309C114.888 106.789 108.879 112.276 101.962 116.441C93.6856 121.422 84.3446 124.368 74.7077 125.034C65.0707 125.7 55.4133 124.068 46.5302 120.273C37.6471 116.477 29.7924 110.627 23.6124 103.202C17.4324 95.7776 13.1039 86.9917 10.9831 77.5674C8.86224 68.1431 9.00975 58.3499 11.4135 48.9938C13.8172 39.6377 18.4083 30.9861 24.8091 23.7511C30.1592 17.7038 36.6456 12.7907 43.8827 9.28144C46.2419 8.13749 47.4548 5.39954 46.4977 2.9586Z"
        fill={`url(#${gradientId})`}
      />

      <g fill={`url(#${gradientId})`}>
        <rect x="41" y="64" width="15" height="28" />
        <rect x="63" y="52" width="15" height="40" />
        <rect x="85" y="40" width="15" height="52" />
      </g>
    </svg>
  );
}

