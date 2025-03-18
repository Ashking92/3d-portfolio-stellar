
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Avatar = () => {
  const avatarRef = useRef<THREE.Group>(null);

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

export default Avatar;
