'use client';
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import UUID from "uniq-id";

//Components
import Planet from '@/components/planet/index.js'

export default function PlanetsCanvas({ planets }) {
    const canvasRef = useRef();

    return (
        <div className="bg-transparent w-full flex justify-center" id='planetCanvas' key={UUID(5)}>
            <div className="absolute z-0 w-1/2 md:w-1/3 h-36 items-center flex justify-center bg-transparent">
                <div className="rounded-full animate-pulse bg-zinc-800 bg-opacity-50 h-36 w-36"></div>
            </div>
            <div className="z-10 w-full bg-black bg-opacity-0 flex justify-center">

                <div className="w-1/2 z-40 md:w-1/3 h-36 ">
                    <Canvas ref={canvasRef} key={UUID(5)} camera={{ fov: 45, position: [1, 1, 32] }} >
                        <OrbitControls />
                        <ambientLight intensity={0.5} />
                        {
                            planets.map((planet, index) => {
                                <Planet
                                    key={UUID(5)}
                                    name={planet.name}
                                    size={planet.size}
                                    orbitRotation={0}
                                    selftRotation={planet.selftRotation}
                                    distance={0}
                                    texture={planet.texture}
                                    textDistance={planet.textDistance}
                                    isSolo={true}
                                    position={[0,0,0]}
                                    isCanvas={true}
                                />
                            })
                        }
                      

                        <spotLight position={[10, 15, 10]} angle={0.3} />
                    </Canvas>
                </div>
            </div>
        </div>
    )
}
