'use client';
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import UUID from "uniq-id";

//Components
import Planet from '@/components/planet/index.js';


// Planet Data
import Planets from '@/mocks/planets.json';
import { useState, useEffect } from "react";
export default function PlanetCanvas({ planetName }) {

    return (
        <div className="bg-transparent w-full flex justify-center">
            <div className="w-1/2 md:w-1/3">
                {
                    Planets.results.map((planet) => {
                        if (planet.name == planetName) {
                            return (
                                <Canvas key={UUID(5)} camera={{ fov: 45, position: [1, 1, planet.size * 3] }} >
                                    <OrbitControls />
                                    <ambientLight intensity={0.5} />
                                    {
                                        <Planet
                                            key={UUID(5)}
                                            name={planet.name}
                                            size={planet.size}
                                            orbitRotation={0}
                                            selftRotation={planet.selfRotation}
                                            distance={0}
                                            texture={planet.texture}
                                            textDistance={planet.textDistance}
                                            isSolo={true}
                                        />

                                    }
                                    <spotLight position={[10, 15, 10]} angle={0.3} />
                                </Canvas>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}
