import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingProductProps {
  position: [number, number, number];
  color: string;
  text: string;
}

const FloatingProduct: React.FC<FloatingProductProps> = ({ position, color, text }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
    if (textRef.current) {
      textRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <group position={position}>
      <Box ref={meshRef} args={[0.8, 1.2, 0.1]} castShadow receiveShadow>
        <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
      </Box>
      <Text
        ref={textRef}
        position={[0, -0.8, 0]}
        fontSize={0.15}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
      >
        {text}
      </Text>
      <Sphere args={[0.05]} position={[0.5, 0.5, 0.1]}>
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} />
      </Sphere>
    </group>
  );
};

export default FloatingProduct;