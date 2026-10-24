"use client";
import { useEffect, useState } from "react";
import CTAButton from "./CTAButton";

// Pílula flutuante que aparece depois da hero (embaixo no mobile, no topo no desktop)
export default function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("hero");
      if (hero) setVisible(hero.getBoundingClientRect().bottom <= 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-0 right-0 z-50 flex justify-center px-4 transition-[opacity,transform] duration-500 ease-out md:bottom-auto md:top-5 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0 md:-translate-y-4"
      }`}
    >
      <div
        style={{ WebkitBackdropFilter: "blur(14px)", backdropFilter: "blur(14px)" }}
        className="flex w-full max-w-xl transform-gpu items-center justify-between gap-6 rounded-full border border-[#174B4B]/10 bg-[#F0E3D0]/70 py-1.5 pl-6 pr-1.5 shadow-lg"
      >
        <span className="font-serif text-xl font-medium text-[#174B4B]">
          Dra. Thaís <span className="italic text-[#BD7475]">Costa</span>
        </span>
        <CTAButton size="sm" label="Agendar particular" />
      </div>
    </header>
  );
}
