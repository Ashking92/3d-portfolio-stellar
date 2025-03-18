
import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';

const Avatar = () => {
  const avatarRef = useRef<THREE.Group>(null);

  // Simple placeholder avatar using basic shapes since we don't have a custom 3D model
  useFrame((state) => {
    if (avatarRef.current) {
      const time = state.clock.getElapsedTime();
      avatarRef.current.rotation.y = Math.sin(time / 4) * 0.3;
    }
  });

  return (
    <group ref={avatarRef}>
      {/* Body */}
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.8, 1, 2, 16]} />
        <meshStandardMaterial color="#0F4C5C" />
      </mesh>

      {/* Head */}
      <mesh position={[0, 1.4, 0]} castShadow>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#E6E6E6" />
      </mesh>

      {/* Hair */}
      <mesh position={[0, 1.6, 0.1]} castShadow>
        <sphereGeometry args={[0.55, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
        <meshStandardMaterial color="#1A1A1A" />
      </mesh>

      {/* Sunglasses */}
      <mesh position={[0, 1.4, 0.5]} castShadow>
        <boxGeometry args={[1, 0.2, 0.1]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Arms */}
      <mesh position={[-1, 0, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 1.5, 16]} />
        <meshStandardMaterial color="#E6E6E6" />
        <mesh position={[0, -0.8, 0]} rotation={[0, 0, -Math.PI / 4]}>
          <cylinderGeometry args={[0.15, 0.15, 1, 16]} />
          <meshStandardMaterial color="#E6E6E6" />
        </mesh>
      </mesh>
      <mesh position={[1, 0, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 1.5, 16]} />
        <meshStandardMaterial color="#E6E6E6" />
        <mesh position={[0, -0.8, 0]} rotation={[0, 0, Math.PI / 4]}>
          <cylinderGeometry args={[0.15, 0.15, 1, 16]} />
          <meshStandardMaterial color="#E6E6E6" />
        </mesh>
      </mesh>

      {/* Legs */}
      <mesh position={[-0.4, -1.2, 0]} castShadow>
        <cylinderGeometry args={[0.25, 0.25, 1.2, 16]} />
        <meshStandardMaterial color="#0A0A0A" />
      </mesh>
      <mesh position={[0.4, -1.2, 0]} castShadow>
        <cylinderGeometry args={[0.25, 0.25, 1.2, 16]} />
        <meshStandardMaterial color="#0A0A0A" />
      </mesh>
    </group>
  );
};

const FloatingMotorcycle = () => {
  const bikeRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (bikeRef.current) {
      const time = state.clock.getElapsedTime();
      bikeRef.current.rotation.y = time / 2;
      bikeRef.current.position.y = Math.sin(time) * 0.1 + 0.1;
    }
  });

  return (
    <group ref={bikeRef} position={[3, 0, 0]} scale={0.6}>
      {/* Motorcycle Body */}
      <mesh castShadow rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 2, 16]} />
        <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Wheels */}
      <group position={[-1, -0.5, 0]}>
        <mesh castShadow>
          <torusGeometry args={[0.6, 0.1, 16, 32]} />
          <meshStandardMaterial color="#111111" />
        </mesh>
        <mesh>
          <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
          <meshStandardMaterial color="#333333" />
        </mesh>
      </group>

      <group position={[1, -0.5, 0]}>
        <mesh castShadow>
          <torusGeometry args={[0.6, 0.1, 16, 32]} />
          <meshStandardMaterial color="#111111" />
        </mesh>
        <mesh>
          <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
          <meshStandardMaterial color="#333333" />
        </mesh>
      </group>

      {/* Handlebar */}
      <mesh position={[-1, 0.4, 0]} castShadow rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.08, 0.08, 1, 16]} />
        <meshStandardMaterial color="#CCCCCC" metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Seat */}
      <mesh position={[0.5, 0.2, 0]} castShadow>
        <boxGeometry args={[1, 0.1, 0.4]} />
        <meshStandardMaterial color="#222222" roughness={0.8} />
      </mesh>
    </group>
  );
};

const FloatingObjects = () => {
  return (
    <>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Avatar />
      </Float>
      
      <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
        <FloatingMotorcycle />
      </Float>
      
      {/* Floating technology icons */}
      <Float position={[-2.5, 1.5, 0]} speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh castShadow>
          <dodecahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial color="#61DAFB" emissive="#61DAFB" emissiveIntensity={0.4} />
        </mesh>
      </Float>
      
      <Float position={[2.5, 2, -1]} speed={1.5} rotationIntensity={1} floatIntensity={1}>
        <mesh castShadow>
          <icosahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial color="#E44D26" emissive="#E44D26" emissiveIntensity={0.4} />
        </mesh>
      </Float>
      
      <Float position={[-2, -1, -1]} speed={2.5} rotationIntensity={1} floatIntensity={1}>
        <mesh castShadow>
          <octahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial color="#41B883" emissive="#41B883" emissiveIntensity={0.4} />
        </mesh>
      </Float>
    </>
  );
};

const Scene = () => {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.set(0, 0, 8);
  }, [camera]);

  return (
    <>
      <ambientLight intensity={0.4} />
      <spotLight position={[5, 8, 5]} angle={0.3} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-5, -2, -2]} intensity={0.5} />
      
      <FloatingObjects />
      
      <ContactShadows
        position={[0, -3, 0]}
        opacity={0.5}
        scale={10}
        blur={1.5}
        far={4}
      />
      
      <Environment preset="city" />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};

const HeroScene = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0 z-0">
      <Canvas shadows className="w-full h-full" dpr={[1, 2]}>
        <Scene />
      </Canvas>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-portfolio-navy to-transparent z-10" />
    </div>
  );
};

export default HeroScene;
