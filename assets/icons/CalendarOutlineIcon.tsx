import React from "react";

type CalendarOutlineIconProps = React.SVGProps<SVGSVGElement> & {
  strokeWidth?: number;
};

export default function CalendarOutlineIcon({
  className = "h-4 w-4",
  strokeWidth = 1.6,
  ...props
}: CalendarOutlineIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M6 2.75v2.5M14 2.75v2.5M3.5 8.25h13M5.5 4.75h9A1.75 1.75 0 0 1 16.25 6.5v8A1.75 1.75 0 0 1 14.5 16.25h-9A1.75 1.75 0 0 1 3.75 14.5v-8A1.75 1.75 0 0 1 5.5 4.75Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

