import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

// component
import MyAvatarStanding from "../components/MyAvatarStanding";
import MyAvatarApplause from "../components/MyAvatarApplause";
import MyAvatarWaving from "../components/MyAvatarWaving";
import MyAvatarTwisting from "../components/MyAvatarTwisting";

const MyAvatar = ({ component, position, rotation }) => {
  return (
    <Canvas camera={{ position: [-30, 10, 40], fov: 3.5 }}>
      <ambientLight intensity={0.8} />
      <directionalLight
        position={[-2, 10, 2]}
        intensity={1}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <OrbitControls enableZoom={false} />
      <Suspense fallback={null}>
        {component === "MyAvatarTwisting" ? (
          <MyAvatarTwisting position={position} rotation={rotation} />
        ) : component === "MyAvatarWaving" ? (
          <MyAvatarWaving position={position} rotation={rotation} />
        ) : component === "MyAvatarApplause" ? (
          <MyAvatarApplause position={position} rotation={rotation} />
        ) : (
          <MyAvatarStanding position={position} rotation={rotation} />
        )}
      </Suspense>
    </Canvas>
  );
};

export default MyAvatar;
