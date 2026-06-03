"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import Lenis from "lenis";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

export default function LenisProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const instance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    setLenis(instance);

    function raf(time: number) {
      instance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    function handleAnchorClick(e: MouseEvent) {
      const target = e.currentTarget as HTMLAnchorElement;
      if (!target.hash || !target.hash.startsWith("#")) return;
      const el = document.querySelector(target.hash);
      if (!el) return;
      e.preventDefault();
      instance.scrollTo(el as HTMLElement, { offset: -80 });
    }

    document.querySelectorAll('a[href^="#"]').forEach((a) =>
      a.addEventListener("click", handleAnchorClick as EventListener)
    );

    return () => {
      instance.destroy();
      document.querySelectorAll('a[href^="#"]').forEach((a) =>
        a.removeEventListener("click", handleAnchorClick as EventListener)
      );
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}
