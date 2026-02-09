"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Model() {
  const gltf = useGLTF("/bouche_a_levres.glb");
  const modelRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (modelRef.current) {
      // Simple auto-rotation only
      modelRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Center>
      <group ref={modelRef} scale={2.5}>
        <primitive object={gltf.scene} />
      </group>
    </Center>
  );
}

export default function ModelViewer({ isMuted }: { isMuted: boolean }) {
  return (
    <div className="w-full h-full">
      <Canvas
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 0, 5], fov: 50 }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-3, 2, -3]} intensity={0.5} color={isMuted ? "#fff" : "#FF4E4E"} />
        <Model />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/bouche_a_levres.glb");
