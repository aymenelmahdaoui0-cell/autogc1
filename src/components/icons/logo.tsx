import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      width="140"
      height="40"
      aria-label="CivilTrain Academy Logo"
      {...props}
    >
      <g className="fill-primary">
        <path d="M10,10 L10,40 L40,40 L40,35 L15,35 L15,10 Z" />
        <path d="M20,15 L30,15 L30,20 L20,20 Z" />
        <path d="M20,25 L30,25 L30,30 L20,30 Z" />
        <path d="M45,10 L50,10 L50,40 L45,40 Z" />
      </g>
      <text
        x="58"
        y="32"
        fontFamily="var(--font-headline), sans-serif"
        fontSize="24"
        fontWeight="bold"
        className="fill-foreground"
      >
        CivilTrain
      </text>
    </svg>
  );
}
