import React from "react";

type ArrowRightIconProps = React.SVGProps<SVGSVGElement> & {
  strokeWidth?: number;
};

export default function ArrowRightIcon({
  className = "h-4 w-4",
  strokeWidth = 1.8,
  ...props
}: ArrowRightIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M4 10h11M11 4l6 6-6 6"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

