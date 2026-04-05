import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Particles() {
  const ref = useRef();

  const positions = new Float32Array(5000);

  for (let i = 0; i < 5000; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
  }

  useFrame((state) => {
    ref.current.rotation.y += 0.0005;
    ref.current.rotation.x += 0.0002;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0
      }}
      camera={{ position: [0, 0, 5] }}
    >
      <Particles />
    </Canvas>
  );
}