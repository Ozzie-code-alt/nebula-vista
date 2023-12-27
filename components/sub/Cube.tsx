"use client";
import React, { useRef } from "react";
import { Canvas, useFrame, useLoader} from "@react-three/fiber";
import {TextureLoader} from "three/src/loaders/TextureLoader.js"
import { OrbitControls } from "@react-three/drei";


const Cube = () => {
    //make our cube rotate 
    const mesh = useRef(null)
    useFrame((state , delta) =>{
        mesh.current.rotation.x += delta * 0.25
        mesh.current.rotation.y += delta * 0.25
        mesh.current.rotation.z += delta * 0.25
    })
    
const textture_1 = useLoader(TextureLoader, "/assets/justin.webp")
const textture_2 = useLoader(TextureLoader, "/assets/joel.webp")
const textture_3 = useLoader(TextureLoader, "/assets/kent.webp")
const textture_4 = useLoader(TextureLoader, "/assets/sean.webp")
const textture_5 = useLoader(TextureLoader, "/assets/justin.webp")
const textture_6 = useLoader(TextureLoader, "/assets/joel.webp")
  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial map={textture_1} attach={"material-0"}/>
      <meshStandardMaterial map={textture_2} attach={"material-1"}/>
      <meshStandardMaterial map={textture_3} attach={"material-2"}/>
      <meshStandardMaterial map={textture_4} attach={"material-3"}/>
      <meshStandardMaterial map={textture_5} attach={"material-4"}/>
      <meshStandardMaterial map={textture_6} attach={"material-5"}/>
    </mesh>
  );
};

const Index = () => {
  return (
    <div className="w-full h-screen relative z-[90]">
      <Canvas>
      <OrbitControls />
        <ambientLight intensity={2}/>
        <directionalLight position={[2, 1, 1]}/> {/* For 3d lighting effect*/}
        <Cube />
      </Canvas>
    </div>
  );
};

export default Index;
