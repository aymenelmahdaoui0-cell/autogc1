import type { SVGProps } from 'react';
import { cn } from '@/lib/utils';

export function HardHatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      className={cn('h-4 w-4', props.className)}
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M20.5 12h-3" />
      <path d="M3.5 12h3" />
      <path d="M12 6V3" />
      <path d="M12 21v-3" />
    </svg>
  );
}
