
import { Float } from '@react-three/drei';
import Avatar from './Avatar';
import FloatingMotorcycle from './FloatingMotorcycle';
import TechIcons from './TechIcons';

const FloatingObjects = () => {
  return (
    <>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Avatar />
      </Float>
      
      <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
        <FloatingMotorcycle />
      </Float>
      
      <TechIcons />
    </>
  );
};

export default FloatingObjects;
