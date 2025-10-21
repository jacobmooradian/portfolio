// components/SceneCanvas.tsx
"use client";

import React, { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Model from "./Model";

/** Idempotent resize: only updates when width/height actually change. */
function UseStableResize() {
  const { gl, camera, setSize, size } = useThree();
  const parentRef = useRef<HTMLDivElement | null>(null);
  const last = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    parentRef.current = gl.domElement.parentElement as HTMLDivElement | null;

    const schedule = (w: number, h: number) => {
      // Avoid synchronous feedback; batch in rAF
      if (raf.current != null) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        // If unchanged, bail
        if (Math.round(last.current.w) === Math.round(w) &&
            Math.round(last.current.h) === Math.round(h)) return;

        last.current = { w, h };

        // Update R3F internal size
        setSize(w, h);

        // Update camera projection only if necessary
        if (camera instanceof THREE.PerspectiveCamera) {
          const nextAspect = (w / h) || 1;
          if (Math.abs(camera.aspect - nextAspect) > 1e-3) {
            camera.aspect = nextAspect;
            camera.updateProjectionMatrix();
          }
        } else if (camera instanceof THREE.OrthographicCamera) {
          // Keep vertical frustum, adapt horizontal to new aspect
          const height = camera.top - camera.bottom;
          const width  = height * ((w / h) || 1);
          const cx = (camera.left + camera.right) / 2;
          const cy = (camera.top + camera.bottom) / 2;
          camera.left   = cx - width / 2;
          camera.right  = cx + width / 2;
          camera.top    = cy + height / 2;
          camera.bottom = cy - height / 2;
          camera.updateProjectionMatrix();
        }
      });
    };

    const updateFromRect = () => {
      const el = parentRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      // Round to avoid sub-pixel loops
      const w = Math.max(1, Math.round(rect.width));
      const h = Math.max(1, Math.round(rect.height));
      // If R3F already has this size, skip entirely
      if (size.width === w && size.height === h) return;
      schedule(w, h);
    };

    // Run once on mount
    updateFromRect();

    // Observe future changes
    const ro = new ResizeObserver(updateFromRect);
    if (parentRef.current) ro.observe(parentRef.current);

    // Cleanup
    return () => {
      ro.disconnect();
      if (raf.current != null) cancelAnimationFrame(raf.current);
    };
  // `size` is stable from R3F; including it prevents drift without causing loops
  }, [gl, camera, setSize, size]);

  return null;
}

export default function SceneCanvas() {
  return (
    <Canvas
      // Fixed DPR = consistent look across routes; no adaptive loops
      dpr={[1, 1.25]}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: "low-power",
        preserveDrawingBuffer: false,
        depth: true,
        stencil: false,
        failIfMajorPerformanceCaveat: false,
      }}
      frameloop="always"
      camera={{ position: [0, 0, 2.2], fov: 34 }}
      style={{ background: "transparent", width: "100%", height: "100%" }}
      onCreated={({ gl, size, camera }) => {
        // Set DPR once (not in the observer) to avoid resize churn
        gl.setPixelRatio(1.25);

        // Ensure initial projection matches the final box on first mount
        if (camera instanceof THREE.PerspectiveCamera) {
          camera.aspect = (size.width / size.height) || 1;
          camera.updateProjectionMatrix();
        }

        // Guard against WebGL context loss
        const canvas = (gl.getContext()?.canvas as HTMLCanvasElement) || undefined;
        const onLost = (e: Event) => e.preventDefault();
        canvas?.addEventListener("webglcontextlost", onLost, false);
        return () => canvas?.removeEventListener("webglcontextlost", onLost, false);
      }}
    >
      <UseStableResize />

      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 6, 5]} intensity={1} />

      <Suspense fallback={null}>
        <Environment preset="city" />
        <Model />
      </Suspense>
    </Canvas>
  );
}