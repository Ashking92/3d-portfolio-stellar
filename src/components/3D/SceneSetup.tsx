
import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment } from '@react-three/drei';
import FloatingObjects from './FloatingObjects';

const SceneSetup = () => {
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

export default SceneSetup;
