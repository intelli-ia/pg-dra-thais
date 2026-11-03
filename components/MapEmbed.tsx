"use client";
import { useState } from "react";

// Fachada do mapa: o iframe do Google Maps (~1 MB de JS + cookies de terceiros)
// só é carregado quando a pessoa pede, o que mantém o carregamento inicial leve.
export default function MapEmbed({ src, title, href }: { src: string; title: string; href: string }) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <iframe
        title={title}
        src={src}
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    );
  }

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#174B4B] p-6 text-center text-[#F0E3D0]">
      <svg className="h-12 w-12 text-[#E3AFB0]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </svg>
      <p className="font-serif text-xl font-medium">Como chegar ao consultório</p>
      <button
        type="button"
        onClick={() => setActive(true)}
        className="rounded-full bg-[#A25859] px-6 py-3 text-[15px] font-semibold text-[#FFF8EE] transition hover:bg-[#8F4B4C]"
      >
        Ver mapa
      </button>
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-[#E3AFB0] underline underline-offset-4">
        Abrir no Google Maps
      </a>
    </div>
  );
}
