import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

// component
import MyAvatarStanding from "../components/avatar-animations/MyAvatarStanding";
import MyAvatarApplause from "../components/avatar-animations/MyAvatarApplause";
import MyAvatarWaving from "../components/avatar-animations/MyAvatarWaving";
import MyAvatarTwisting from "../components/avatar-animations/MyAvatarTwisting";
import MyAvatarLookingAround from "../components/avatar-animations/MyAvatarLookingAround";
import MyAvatarShuffling from "../components/avatar-animations/MyAvatarShuffling";
import MyAvatarBicycle from "../components/avatar-animations/MyAvatarBicycle";
import MyAvatarWriting from "../components/avatar-animations/MyAvatarWriting";

const MyAvatar = ({ component, position, rotation, fov }) => {
  return (
    <Canvas camera={{ position: [-30, 10, 40], fov: fov }}>
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
        ) : component === "MyAvatarStanding" ? (
          <MyAvatarStanding position={position} rotation={rotation} />
        ) : component === "MyAvatarShuffling" ? (
          <MyAvatarShuffling position={position} rotation={rotation} />
        ) : component === "MyAvatarLookingAround" ? (
          <MyAvatarLookingAround position={position} rotation={rotation} />
        ) : component === "MyAvatarBicycle" ? (
          <MyAvatarBicycle position={position} rotation={rotation} />
        ) : component === "MyAvatarWriting" ? (
          <MyAvatarWriting position={position} rotation={rotation} />
        ) : (
          <div></div>
        )}
      </Suspense>
    </Canvas>
  );
};

export default MyAvatar;
