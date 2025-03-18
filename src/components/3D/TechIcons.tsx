
import { Float } from '@react-three/drei';

const TechIcons = () => {
  return (
    <>
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

export default TechIcons;
