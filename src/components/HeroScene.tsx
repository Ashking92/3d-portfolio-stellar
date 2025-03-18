
import { Canvas } from '@react-three/fiber';
import SceneSetup from './3D/SceneSetup';

const HeroScene = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0 z-0">
      <Canvas shadows className="w-full h-full" dpr={[1, 2]}>
        <SceneSetup />
      </Canvas>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-portfolio-navy to-transparent z-10" />
    </div>
  );
};

export default HeroScene;
