import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useRef, useState } from 'react'
import { Text } from "@react-three/drei";

export default function Planet({ name, size, orbitRotation, selftRotation, distance, texture, textDistance }) {
    const [textPosition, setTextPosition] = useState([0, 0, 0]);
    const [textRotation, setTextRotation] = useState([0, 0, 0]);
    const [show, setShow] = useState(false);
    const planetRef = useRef();
    const textRef = useRef();
    const { camera } = useThree();
    useFrame((state, delta) => {
        const elapsedTime = state.clock.getElapsedTime();
        planetRef.current.position.x = Math.cos(orbitRotation * elapsedTime) * distance;
        planetRef.current.position.z = Math.sin(orbitRotation * elapsedTime) * distance;
        planetRef.current.rotation.y += (selftRotation);
        setTextRotation([camera.rotation.x, camera.rotation.y, camera.rotation.z])
        setTextPosition([planetRef.current.position.x, planetRef.current.position.y + textDistance, planetRef.current.position.z])
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
                        rotation={textRotation}
                        position={textPosition}
                        fontSize={2.3}
                        color="white"
                        anchorX="center"
                        anchorY="top"
                        outlineWidth={0.2}
                        outlineColor="black"
                    >
                        {name}
                    </Text>
                    :
                    null
            }
        </>
    )

}
