import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useRef, useState } from 'react'
import { Text } from "@react-three/drei";

const calculatePlanetPositions = ({ angularSpeed }) => {
    const referenceDate = new Date('2023-06-06T23:00:00');
    const currentTime = new Date();
    const timeElapsed = (currentTime - referenceDate) / (1000 * 60 * 60);
    const currentAngle = angularSpeed * timeElapsed;

    const x = Math.cos(currentAngle);
    const y = 0;
    const z = Math.sin(currentAngle);

    return { x, y, z };
};

export default function Planet({ name, size, orbitRotation, selftRotation, distance, texture, textDistance, isSolo }) {
    const [textPosition, setTextPosition] = useState([0, 0, 0]);
    const [textRotation, setTextRotation] = useState([0, 0, 0]);
    const [show, setShow] = useState(false);
    const planetRef = useRef();
    const { camera } = useThree();
    useFrame((state, delta) => {
        const calculatePositions = calculatePlanetPositions({ angularSpeed: orbitRotation })
        planetRef.current.position.x = calculatePositions.x * distance;
        planetRef.current.position.z = calculatePositions.z * distance;
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
            {
                isSolo
                    ?
                    <mesh
                        position={[distance, 0, 0]} ref={planetRef} >
                        <sphereGeometry args={[size, 30, 30]} />
                        <meshStandardMaterial map={planetTexture} />
                    </mesh >
                    :
                    <mesh
                        onPointerOver={showText}
                        onPointerOut={closeText}
                        position={[distance, 0, 0]} ref={planetRef} >
                        <sphereGeometry args={[size, 30, 30]} />
                        <meshStandardMaterial map={planetTexture} />
                    </mesh >
            }
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
