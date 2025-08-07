import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera, Stars } from '@react-three/drei';
import FloatingProduct from './FloatingProduct';

const Scene3D: React.FC = () => {
  return (
    <div className="h-screen w-full relative">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <OrbitControls 
          enablePan={false} 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          autoRotate
          autoRotateSpeed={0.5}
        />
        
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4F46E5" />
        
        <Suspense fallback={null}>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          <FloatingProduct 
            position={[-2, 1, 0]} 
            color="#4F46E5" 
            text="Premium T-Shirts"
          />
          <FloatingProduct 
            position={[2, -0.5, -1]} 
            color="#7C3AED" 
            text="Designer Jackets"
          />
          <FloatingProduct 
            position={[0, 0.5, -2]} 
            color="#EC4899" 
            text="Casual Wear"
          />
          <FloatingProduct 
            position={[-1.5, -1, 1]} 
            color="#10B981" 
            text="Formal Shirts"
          />
          <FloatingProduct 
            position={[1.5, 1.5, 0.5]} 
            color="#F59E0B" 
            text="Trendy Hoodies"
          />
          
          <Environment preset="night" />
        </Suspense>
      </Canvas>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />
    </div>
  );
};

export default Scene3D;