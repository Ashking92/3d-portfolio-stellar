
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

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

export default FloatingMotorcycle;
