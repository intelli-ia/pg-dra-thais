import type { CSSProperties, ReactNode } from "react";

type DecorProps = { className?: string; style?: CSSProperties };

export function Star({ className = "", style }: DecorProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor" aria-hidden>
      <path d="M12 1.5c.6 4.6 1.9 8.1 4.4 9.5 2.2 1.2 4.4 1.4 6.1 1.5-1.7.1-3.9.3-6.1 1.5-2.5 1.4-3.8 4.9-4.4 9.5-.6-4.6-1.9-8.1-4.4-9.5C5.4 12.8 3.2 12.6 1.5 12.5c1.7-.1 3.9-.3 6.1-1.5C10.1 9.6 11.4 6.1 12 1.5z" />
    </svg>
  );
}

export function Cloud({ className = "", style }: DecorProps) {
  return (
    <svg viewBox="0 0 120 64" className={className} style={style} fill="currentColor" aria-hidden>
      <path d="M96 64H26C11.6 64 0 52.4 0 38c0-13 9.6-23.800 22.100-25.700C27 5 35.500 0 45 0c11.800 0 21.800 7.700 25.300 18.300C72.400 17.500 74.600 17 77 17c12.700 0 23 10.300 23 23 0 .6 0 1.100-.1 1.700C111.600 43.300 120 52 120 62.500c0 .5 0 1-.1 1.500H96z" />
    </svg>
  );
}

export function Heart({ className = "", style }: DecorProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor" aria-hidden>
      <path d="M12 21.500C5 16 1.500 12.300 1.500 8A5.500 5.500 0 0 1 12 5.800 5.500 5.500 0 0 1 22.500 8c0 4.300-3.500 8-10.500 13.500z" />
    </svg>
  );
}

export function Balloon({ className = "", style }: DecorProps) {
  return (
    <svg viewBox="0 0 48 90" className={className} style={style} aria-hidden>
      <ellipse cx="24" cy="26" rx="21" ry="25" fill="currentColor" />
      <ellipse cx="16" cy="16" rx="5" ry="8" fill="#fff" opacity="0.3" transform="rotate(-20 16 16)" />
      <path d="M24 51l-4 6h8z" fill="currentColor" />
      <path d="M24 57c-5 8 5 14 0 24" fill="none" stroke="currentColor" strokeWidth="1.500" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}


/** Linha ondulada para dividir blocos de forma mais leve. */
export function Squiggle({ className = "", style }: DecorProps) {
  return (
    <svg viewBox="0 0 120 12" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden>
      <path d="M3 6c8-8 14-8 22 0s14 8 22 0 14-8 22 0 14 8 22 0 14-8 22 0" />
    </svg>
  );
}

/** Ícones infantis para os cartões de acompanhamento e etapas da consulta. */
const iconPaths: Record<string, ReactNode> = {
  growth: (
    <>
      <rect x="10" y="4" width="10" height="40" rx="3" />
      <path d="M10 12h5M10 20h7M10 28h5M10 36h7" />
      <circle cx="33" cy="14" r="5" />
      <path d="M33 20v12m-6 10l6-10 6 10M27 26l6 2 6-2" />
    </>
  ),
  food: (
    <>
      <path d="M24 14c-8-5-16 0-14 11 1.500 9 7 17 14 17s12.500-8 14-17c2-11-6-16-14-11z" />
      <path d="M24 14c0-4 1-7 5-9" />
      <path d="M30 6c3-1 5 0 6 2-3 1-5 1-6-2z" />
    </>
  ),
  moon: (
    <>
      <path d="M38 30A16 16 0 0 1 18 10a16 16 0 1 0 20 20z" />
      <path d="M32 8v6m-3-3h6M40 18v4m-2-2h4" />
    </>
  ),
  smile: (
    <>
      <circle cx="24" cy="24" r="18" />
      <circle cx="18" cy="20" r="1.500" fill="currentColor" />
      <circle cx="30" cy="20" r="1.500" fill="currentColor" />
      <path d="M16 28c3 5 13 5 16 0" />
    </>
  ),
  shield: (
    <>
      <path d="M24 5l15 6v11c0 10-6 17-15 21C15 39 9 32 9 22V11z" />
      <path d="M17 24l5 5 9-10" />
    </>
  ),
  scale: (
    <>
      <rect x="7" y="9" width="34" height="30" rx="8" />
      <path d="M15 20a9 9 0 0 1 18 0" />
      <path d="M24 20l4-5" />
      <path d="M17 31h14" />
    </>
  ),
  ear: (
    <>
      <path d="M16 20a10 10 0 1 1 20 0c0 6-6 7-6 12a6 6 0 0 1-12 0" />
      <path d="M22 20a4 4 0 0 1 8 0c0 3-4 3-4 6" />
    </>
  ),
  stethoscope: (
    <>
      <path d="M12 6v10a8 8 0 0 0 16 0V6" />
      <path d="M10 6h4M26 6h4" />
      <path d="M20 24v6a8 8 0 0 0 16 0v-3" />
      <circle cx="36" cy="23" r="4" />
    </>
  ),
  chat: (
    <>
      <path d="M6 10a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4H20l-9 8v-8h-1a4 4 0 0 1-4-4z" />
      <path d="M15 15h18M15 22h12" />
    </>
  ),
  heart: (
    <path d="M24 41C10 31 5 24 5 17a9 9 0 0 1 19-3 9 9 0 0 1 19 3c0 7-5 14-19 24z" />
  ),
};

export type IconName = keyof typeof iconPaths;

export function CuteIcon({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.400"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {iconPaths[name]}
    </svg>
  );
}

export function Teddy({ className = "", style }: DecorProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} style={style} aria-hidden>
      <circle cx="30" cy="30" r="15" fill="#C98B6B" />
      <circle cx="90" cy="30" r="15" fill="#C98B6B" />
      <circle cx="30" cy="30" r="8" fill="#E3AFB0" />
      <circle cx="90" cy="30" r="8" fill="#E3AFB0" />
      <circle cx="60" cy="58" r="38" fill="#D9A07F" />
      <ellipse cx="60" cy="72" rx="16" ry="12" fill="#F0E3D0" />
      <ellipse cx="60" cy="67" rx="5" ry="3.500" fill="#174B4B" />
      <circle cx="46" cy="50" r="4" fill="#174B4B" />
      <circle cx="74" cy="50" r="4" fill="#174B4B" />
      <path d="M54 76c3 3 9 3 12 0" fill="none" stroke="#174B4B" strokeWidth="2.500" strokeLinecap="round" />
      <ellipse cx="38" cy="64" rx="6" ry="4" fill="#E3AFB0" opacity="0.7" />
      <ellipse cx="82" cy="64" rx="6" ry="4" fill="#E3AFB0" opacity="0.7" />
    </svg>
  );
}
