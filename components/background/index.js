'use client';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { Canvas } from "@react-three/fiber";
import Stars from '../stars/';

function BlackBackgroundTexture() {
    const { scene } = useThree();

    const textureLoader = new THREE.CubeTextureLoader();
    const starsTexture = textureLoader.load([
        '/assets/texture/stars.jpg', '/assets/texture/stars.jpg', '/assets/texture/stars.jpg',
        '/assets/texture/stars.jpg', '/assets/texture/stars.jpg', '/assets/texture/stars.jpg'
    ]);
    scene.background = starsTexture;

    return null;
}
function BlackBackground() {
    const { scene } = useThree();
    scene.background = new THREE.Color(0x000000);
    return null;
}

function BlackBackgroundCanvas() {
    return (
        <div className="absolute w-full h-full z-0">
            <Canvas camera={{ fov: 45, position: [-300, 200, 300] }} >
                <BlackBackground />
                <Stars />
                <ambientLight intensity={0.7} />
            </Canvas>
        </div>
    )
}

export {
    BlackBackground,
    BlackBackgroundTexture,
    BlackBackgroundCanvas
}