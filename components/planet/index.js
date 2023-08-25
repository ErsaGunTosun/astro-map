import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from 'react'
import { Text } from "@react-three/drei";

export default function Planet({ name, size, orbitRotation, selftRotation, distance, texture }) {
    const planetRef = useRef();
    const [show, setShow] = useState(false);

    useFrame((state, delta) => {
        const elapsedTime = state.clock.getElapsedTime();
        planetRef.current.position.x = Math.cos(orbitRotation * elapsedTime) * distance;
        planetRef.current.position.z = Math.sin(orbitRotation * elapsedTime) * distance;
        planetRef.current.rotation.y += (selftRotation);
    });

    const showText = () => {
        setShow(true);
    }
    const closeText = () => {
        setShow(false);
    }
    const planetTexture = useLoader(TextureLoader, texture)
    return (
        <>
            <mesh
                onPointerOver={showText}
                onPointerOut={closeText}
                position={[distance, 0, 0]} ref={planetRef} >
                <sphereGeometry args={[size, 30, 30]} />
                <meshStandardMaterial map={planetTexture} />


            </mesh >
            {
                show
                    ?
                    <Text
                        rota
                        position={[planetRef.current.position.x, planetRef.current.position.y + 20, planetRef.current.position.z]}
                        fontSize={2}
                        color="white"
                        anchorX="center"
                        anchorY="top"
                    >
                        {name}
                    </Text>
                    :
                    null
            }
        </>
    )

}
