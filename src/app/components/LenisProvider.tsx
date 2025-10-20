// app/components/LenisProvider.tsx
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
      // 🔑 Leave page scroll native:
      smoothWheel: false,
      syncTouch: false,

      // Only affects programmatic/anchor scrolling:
      duration: 0.7,
      easing: (t: number) => t, // near-linear
      anchors: { offset: 80 },  // sticky header height
    });

    return () => {
      lenis?.destroy?.();
    };
  }, []);

  return null;
}