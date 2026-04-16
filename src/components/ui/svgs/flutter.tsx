import type { SVGProps } from "react";

const Flutter = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 317">
    <defs>
      <linearGradient id="flutter-a" x1="4%" x2="75%" y1="27%" y2="53%">
        <stop offset="0%" stopColor="#1A237E" stopOpacity=".4" />
        <stop offset="100%" stopColor="#1A237E" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path fill="#47C5FB" d="M158 0L0 158l49 49L256 0z" />
    <path fill="#47C5FB" d="M158 128L77 209l49 49 130-130z" />
    <path fill="#00569E" d="M126 258l-49-49-26 26 75 82 130-130-49-49z" />
    <path fill="url(#flutter-a)" d="M126 258l50-50-49-49z" opacity=".8" />
  </svg>
);

export { Flutter };
