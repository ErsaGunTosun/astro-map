import * as THREE from 'three';
import { useThree } from '@react-three/fiber';

export default function Stars() {
    const { camera } = useThree();

    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });

    const positions = [];
    const totalStars = 6000;

    for (let i = 0; i < totalStars; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;


        const distance = camera.position.distanceTo(new THREE.Vector3(x, y, z));
        if (distance > 600) {
            positions.push(x, y, z);
        }
    }

    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    return <points geometry={starsGeometry} material={starsMaterial} />;
}
