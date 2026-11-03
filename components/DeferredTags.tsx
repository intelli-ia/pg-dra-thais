"use client";
import { useEffect } from "react";

// Carrega GTM e gtag.js só na primeira interação (ou após um tempo de segurança),
// fora da janela de carregamento inicial, para não pesar no TBT.
export default function DeferredTags({ gtmId, adsId }: { gtmId: string; adsId: string }) {
  useEffect(() => {
    let done = false;
    const events = ["pointerdown", "keydown", "scroll", "touchstart"] as const;

    const load = () => {
      if (done) return;
      done = true;
      events.forEach((e) => window.removeEventListener(e, load));
      clearTimeout(timer);

      const w = window as unknown as { dataLayer: unknown[] };
      w.dataLayer = w.dataLayer || [];
      // gtag.js exige o objeto `arguments` (não um array) no dataLayer
      function gtag(...args: unknown[]) {
        void args;
        // eslint-disable-next-line prefer-rest-params
        w.dataLayer.push(arguments);
      }
      w.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
      gtag("js", new Date());
      gtag("config", adsId);

      for (const src of [
        `https://www.googletagmanager.com/gtm.js?id=${gtmId}`,
        `https://www.googletagmanager.com/gtag/js?id=${adsId}`,
      ]) {
        const s = document.createElement("script");
        s.async = true;
        s.src = src;
        document.head.appendChild(s);
      }
    };

    events.forEach((e) => window.addEventListener(e, load, { passive: true, once: true }));
    const timer = setTimeout(load, 8000);
    return () => {
      events.forEach((e) => window.removeEventListener(e, load));
      clearTimeout(timer);
    };
  }, [gtmId, adsId]);

  return null;
}
