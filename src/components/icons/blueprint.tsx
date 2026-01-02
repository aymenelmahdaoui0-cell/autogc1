import type { SVGProps } from 'react';
import { cn } from '@/lib/utils';

export function BlueprintIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M13.2 2.1a2 2 0 0 0-2.4 0l-6 3.9a2 2 0 0 0-1.1 1.7V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.7a2 2 0 0 0-1.1-1.7l-6-3.9Z" />
      <path d="m12 12-6-3.9" />
      <path d="m12 12 V 22" />
      <path d="m12 12 6-3.9" />
      <path d="M18 9.9 6 2.1" />
      <path d="m6 18 12-12" />
      <path d="M6 18v-5.7" />
      <path d="M18 18v-5.7" />
    </svg>
  );
}
