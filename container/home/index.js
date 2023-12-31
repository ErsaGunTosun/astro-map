'use client';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import UUID from "uniq-id";

//Components
import Orbit from '@/components/orbit';
import Planet from '@/components/planet/index.js';
import Stars from '@/components/stars/index.js';
import { BlackBackground } from '@/components/background/index.js';

// Planet Data
import Planets from '@/mocks/planets.json';


export default function Astro() {
    return (
        <div className="absolute w-full h-full z-0">

            <Canvas camera={{ position: [-300, 200, 300] }} >
                <OrbitControls> </OrbitControls>
                <BlackBackground />
                <Stars />
                <ambientLight intensity={0.7} />       
                <Planet
                    name={'Sun'}
                    size={16}
                    orbitRotation={0}
                    selftRotation={0.004}
                    distance={0}
                    texture='/assets/texture/sun.jpg'
                    textDistance={19.8} />

                {Planets.results.map((planet) => {
                    return (
                        <Orbit
                            key={UUID(5)}
                            radius={planet.distance} />
                    )
                })}

                {Planets.results.map((planet) => {
                    return (
                        <Planet
                            key={UUID(5)}
                            name={planet.name}
                            size={planet.size}
                            orbitRotation={planet.orbitRotation}
                            selftRotation={planet.selfRotation}
                            distance={planet.distance}
                            texture={planet.texture}
                            textDistance={planet.textDistance}
                            ring={planet.ring}
                            ring_texture={planet.ring_texture}
                        />
                    )
                })}
                <pointLight position={[10, 0, 0]} distance={0} intensity={2} color={0xffffff} />
            </Canvas>
        </div>
    )
}
