"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Center, Environment } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

function Model({ isMuted }: { isMuted: boolean }) {
  const gltf = useGLTF("/queen_marika_statue_elden_ring.glb");
  const modelRef = useRef<THREE.Group>(null);
  const timeRef = useRef(0);

  useFrame((_, delta) => {
    if (modelRef.current) {
      // Slow pendulum motion - oscillates between -15 and +15 degrees
      timeRef.current += delta * 0.3; // Very slow
      modelRef.current.rotation.y = Math.sin(timeRef.current) * 0.26; // ~15 degrees in radians
    }
  });

  return (
    <Center>
      <group ref={modelRef} scale={1.0}>
        <primitive object={gltf.scene} />
      </group>
    </Center>
  );
}

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#FF4E4E" wireframe />
    </mesh>
  );
}

export default function HeroModel({ isMuted }: { isMuted: boolean }) {
  return (
    <div className="w-full h-full">
      <Canvas
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 0.5, 8], fov: 45 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-3, 2, -3]} intensity={0.5} color={isMuted ? "#888" : "#FF4E4E"} />
        <spotLight position={[0, 10, 0]} intensity={0.3} />
        <Suspense fallback={<LoadingFallback />}>
          <Model isMuted={isMuted} />
          <Environment preset={isMuted ? "city" : "night"} />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/queen_marika_statue_elden_ring.glb");
