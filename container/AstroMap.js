'use client';
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import UUID from "uniq-id";
import * as THREE from 'three';

//Components
import Orbit from '@/components/orbit';
import Planet from '@/components/planet/index.js';


// Planet Data
import Planets from '@/mocks/planets.json';

function BlackBackground() {
    const { scene } = useThree();

    const textureLoader = new THREE.CubeTextureLoader();
    const starsTexture = textureLoader.load([
        '/assets/texture/stars.jpg', '/assets/texture/stars.jpg', '/assets/texture/stars.jpg',
        '/assets/texture/stars.jpg', '/assets/texture/stars.jpg', '/assets/texture/stars.jpg'
    ]);
    scene.background = starsTexture;

    return null;
}

export default function Astro() {
    return (
        <div className="h-full w-full">
            <Canvas camera={{ fov: 45, position: [-135, 140, 300] }}  >
                <OrbitControls> </OrbitControls>
                <BlackBackground />
                <ambientLight intensity={0.7} />

                <Planet
                    name={'Sun'}
                    size={16}
                    orbitRotation={0}
                    selftRotation={0.004}
                    distance={0}
                    texture='/assets/texture/sun.jpg' />

                {Planets.results.map((planet) => {
                    console.log(planet)
                    return (
                        <Orbit
                            key={UUID(5)}
                            radius={planet.distance} />
                    )
                })}

                {Planets.results.map((planet) => {
                    console.log(planet)
                    return (
                        <Planet
                            key={UUID(5)}
                            name={planet.name}
                            size={planet.size}
                            orbitRotation={planet.orbitRotation}
                            selftRotation={planet.selfRotation}
                            distance={planet.distance}
                            texture={planet.texture} />
                    )
                })}
                <pointLight position={[10, 0, 0]} distance={0} intensity={2} color={0xffffff} />
            </Canvas>
        </div>
    )
}
