// Shared FirmLock logo mark SVG — used in Nav, Footer, etc.
import type { SVGProps } from 'react';

interface LogoMarkProps extends SVGProps<SVGSVGElement> {
  color?: string;
}

export function LogoMark({ color = '#0A1628', ...props }: LogoMarkProps) {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        d="M16 2 L28 6 V15 C28 22 22.5 27.5 16 30 C9.5 27.5 4 22 4 15 V6 Z"
        stroke={color} strokeWidth="1.8" strokeLinejoin="round"
      />
      <path d="M10 12 L16 8 L22 12 Z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
      <rect x="11"   y="13" width="1.6" height="8" fill={color} />
      <rect x="15.2" y="13" width="1.6" height="8" fill={color} />
      <rect x="19.4" y="13" width="1.6" height="8" fill={color} />
      <rect x="9.5"  y="21" width="13"  height="1.6" fill={color} />
    </svg>
  );
}
