import { TextureLoader } from "three/src/loaders/TextureLoader";
import {
  useFrame,
  useLoader,
  useThree,
  MeshStandardMaterialProps,
} from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Text } from "@react-three/drei";
import { MeshStandardMaterial, RingGeometry } from "three";


const calculatePlanetPositions = ({ angularSpeed }) => {
  const referenceDate = new Date("2023-06-06T23:00:00");
  const currentTime = new Date();
  const timeElapsed = (currentTime - referenceDate) / (1000 * 60 * 60);
  const currentAngle = angularSpeed * timeElapsed;

  const x = Math.cos(currentAngle);
  const y = 0;
  const z = Math.sin(currentAngle);

  return { x, y, z };
};

export default function Planet({
  name,
  size,
  orbitRotation,
  selftRotation,
  distance,
  texture,
  textDistance,
  isSolo,
  position,
  isCanvas = false,
  ring,
  ring_texture,
}) {
  const router = useRouter();
  const [textPosition, setTextPosition] = useState([0, 0, 0]);
  const [textRotation, setTextRotation] = useState([0, 0, 0]);
  const [show, setShow] = useState(false);
  const planetRef = useRef();
  const ringRef = useRef();
  const textureRef = useRef();

  const { camera } = useThree();
  useFrame((state, delta) => {
    const calculatePositions = calculatePlanetPositions({
      angularSpeed: orbitRotation,
    });

    planetRef.current.position.x = calculatePositions.x * distance;
    planetRef.current.position.z = calculatePositions.z * distance;

    if (ring  & !isCanvas) {
      ringRef.current.position.x = planetRef.current.position.x;
      ringRef.current.position.z = planetRef.current.position.z;
    }

    planetRef.current.rotation.y += selftRotation;

    setTextRotation([camera.rotation.x, camera.rotation.y, camera.rotation.z]);
    setTextPosition([
      planetRef.current.position.x,
      planetRef.current.position.y + textDistance,
      planetRef.current.position.z,
    ]);
  });

  useEffect(() => {
    if (ring) {
      const loader = new TextureLoader();
      console.log(process.env.API_URL);
      loader.load(`${ring_texture}`, (txtr) => {
        textureRef.current = txtr;
      });
    }
  }, []);

  const showText = () => {
    setShow(true);
    document.querySelector("body").style.cursor = "pointer";
  };
  const closeText = () => {
    setShow(false);
    document.querySelector("body").style.cursor = "default";
  };

  const clickPlanet = () => {
    document.querySelector("body").style.cursor = "default";
    router.push(`/${name.toLowerCase()}`, { scroll: false });
  };
  const planetTexture = useLoader(TextureLoader, texture);

  return (
    <>
      {isSolo ? ( (
          <mesh
            position={isCanvas ? position : [distance, 0, 0]}
            ref={planetRef}
          >
            <sphereGeometry args={[size, 30, 30]} />
            <meshStandardMaterial map={planetTexture} />
          </mesh>
        ) 
      ) :(
        <mesh
          onClick={clickPlanet}
          onPointerOver={showText}
          onPointerOut={closeText}
          position={[distance, 0, 0]}
          ref={planetRef}
        >
          <sphereGeometry args={[size, 30, 30]} />
          <meshStandardMaterial map={planetTexture} />
        </mesh>
      )}
      {ring ? (
            <mesh
            position={isCanvas ? position : [distance, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            ref={ringRef}
            geometry={
                new RingGeometry(size + 1, size + 4.2, 32, 32, 0, Math.PI * 2)
            }
            material={
                new MeshStandardMaterial({
                color: "#ffffff",
                side: 2,
                map: textureRef?.current,
                })
            }
            ></mesh>
        ) : null}
      {show ? (
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
      ) : null}
    </>
  );
}
