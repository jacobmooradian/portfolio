'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export default function LenisProvider() {
  useEffect(() => {
    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: false,
      syncTouch: false,

      duration: .8,
      easing: (t: number) => t,
      anchors: { offset: 80 },
    });

    return () => {
      lenis?.destroy?.();
    };
  }, []);

  return null;
}