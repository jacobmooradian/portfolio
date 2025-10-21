"use client";

import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

// typed dispose helper to satisfy noImplicitAny
function disposeMaterial(mat: THREE.Material) {
  const anyMat = mat as any;
  anyMat.map?.dispose?.();
  anyMat.normalMap?.dispose?.();
  anyMat.emissiveMap?.dispose?.();
  anyMat.roughnessMap?.dispose?.();
  anyMat.metalnessMap?.dispose?.();
  anyMat.envMap?.dispose?.();
  mat.dispose();
}

export default function Model() {
  // root: only Y (yaw) oscillation
  const root = useRef<THREE.Group>(null);
  // content: centered/scaled GLTF with fixed pitch/roll
  const content = useRef<THREE.Group>(null);

  const gltf = useGLTF("/models/model.gltf") as any;

  // === Your tuned values ===
  const SCALE = .75;
  const PITCH = 0.95;
  const ROLL = 0.20;
  let   YAW_CENTER = -0.35;
  const YAW_SWEEP = 0.20;
  const YAW_SPEED = 0.28;
  const YAW_SIGN  = -1;

  // Pause if user prefers reduced motion or tab hidden (stability + a11y)
  const pausedRef = useRef(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const set = () => (pausedRef.current = mq.matches || document.hidden);
    set();
    mq.addEventListener?.("change", set);
    document.addEventListener("visibilitychange", set);
    return () => {
      mq.removeEventListener?.("change", set);
      document.removeEventListener("visibilitychange", set);
    };
  }, []);

  // One-time scene prep
  useEffect(() => {
    const box = new THREE.Box3();
    const v = new THREE.Vector3();
    const meshes: THREE.Mesh[] = [];

    gltf.scene.traverse((o: any) => {
      if (o.isMesh) {
        if (o.material && !o.material.map) {
          o.material = o.material.clone?.() ?? o.material;
          o.material.color ||= new THREE.Color("#e6e7ee");
          o.material.metalness = 0.15;
          o.material.roughness = 0.55;
        }
        meshes.push(o);
      }
    });

    // Remove giant backdrop outlier if present
    const sizes = meshes.map(m => box.setFromObject(m).getSize(v).length()).sort((a,b)=>a-b);
    const median = sizes[Math.floor(sizes.length/2)] || 1;
    meshes.forEach(m => {
      if (box.setFromObject(m).getSize(v).length() > median * 8) m.parent?.remove(m);
    });

    if (!content.current || !root.current) return;
    
    // CRITICAL FIX: Reset both root AND content to identity
    root.current.scale.set(1, 1, 1);
    root.current.rotation.set(0, 0, 0);
    root.current.position.set(0, 0, 0);
    
    content.current.scale.set(1, 1, 1);
    content.current.rotation.set(0, 0, 0);
    content.current.position.set(0, 0, 0);
    
    // Mount under our content group
    while (content.current.children.length) content.current.remove(content.current.children[0]);
    
    // CRITICAL: Clone the scene to avoid mutating the cached GLTF
    const clonedScene = gltf.scene.clone(true);
    content.current.add(clonedScene);

    // Center to origin & normalize to ~1.8 units
    box.setFromObject(content.current);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const largest = Math.max(size.x, size.y, size.z) || 1;

    content.current.position.copy(center.multiplyScalar(-1));
    const base = 1.8 / largest;
    content.current.scale.setScalar(base);

    // Fixed pitch/roll; yaw is animated on ROOT
    content.current.rotation.set(PITCH, 0, ROLL);

    // Big hero scale on ROOT keeps centering intact
    root.current.scale.setScalar(SCALE);

    // Dispose on unmount (hot reloads / route changes)
    return () => {
      gltf.scene.traverse((o: any) => {
        if (o.isMesh) {
          o.geometry?.dispose?.();
          const mats: THREE.Material[] = (
            Array.isArray(o.material) ? o.material : [o.material]
          ).filter(Boolean) as THREE.Material[];
          mats.forEach((mat) => disposeMaterial(mat));
        }
      });
    };
  }, [gltf]);

  // Oscillating yaw (left↔right), no bob
  useFrame(({ clock }) => {
    if (!root.current || pausedRef.current) return;
    const t = clock.getElapsedTime();
    const yaw = YAW_CENTER + Math.sin(t * YAW_SPEED) * (YAW_SIGN * YAW_SWEEP);
    root.current.rotation.y = yaw;
  });

  return (
    <group ref={root}>
      <group ref={content} />
    </group>
  );
}

useGLTF.preload("/models/model.gltf");