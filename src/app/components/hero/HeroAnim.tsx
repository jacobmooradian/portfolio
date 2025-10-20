'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SFScene from './SFScene';

export default function HeroAnim() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // -----------------------------
      // Ripples: pendulum-style drift
      // -----------------------------
      const driftYoyo = (sel: string, dist: number, dur: number, delay = 0) => {
        gsap.set(sel, { x: 0 });
        gsap.to(sel, {
          x: -dist,
          duration: dur,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          repeatDelay: 0, // add ~0.2 for a tiny pause
          delay,
        });
      };

      driftYoyo('.ripples--far',  18, 8);
      driftYoyo('.ripples--mid',  28, 7, 0.1);
      driftYoyo('.ripples--near', 36, 6, 0.2);

      // Small phase offsets so rectangles aren't perfectly in sync
      gsap.utils.toArray<SVGRectElement>('.ripples rect').forEach((r, i) => {
        gsap.to(r, { x: '+=0', delay: (i % 5) * 0.06 });
      });

      // -----------------------------
      // Sun: premium, calm animation
      // -----------------------------
      const SUN = '.sun';

      // Main continuous motion (runs in parallel)
      const sunMain = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: 'sine.inOut' } });
      sunMain
        // subtle arc drift
        .to(SUN, { x: 5, y: -2, duration: 8 }, 0)
        // micro rotation around center
        .to(SUN, { rotate: 0.6, duration: 8, transformOrigin: '50% 50%' }, 0)
        // soft “breath”
        .to(SUN, { scale: 1.012, duration: 6, transformOrigin: '50% 50%' }, 0);

      // Warmth pulse on the radial gradient (id="c", first stop)
      // (Your SVG already has <radialGradient id="c"> with two <stop>s)
      gsap.to('#c stop[offset="0"]', {
        attr: { 'stop-color': '#FFB86B' }, // slightly warmer than #FFA94D
        duration: 6,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });

      // Rare emphasis beat so the eye occasionally notices life
      gsap.timeline({ repeat: -1, repeatDelay: 10 })
        .to(SUN, { scale: 1.02, duration: 0.5, ease: 'power2.out', transformOrigin: '50% 50%' })
        .to(SUN, { scale: 1.0,  duration: 1.0, ease: 'power2.inOut', transformOrigin: '50% 50%' });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={root}
      className="relative w-full aspect-[16/9] bg-white rounded-xl overflow-hidden border-b border-black/5"
    >
      <SFScene className="block h-full w-full" />
    </div>
  );
}