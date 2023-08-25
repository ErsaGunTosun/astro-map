import * as THREE from 'three';

export default function Orbit({ radius }) {
    const points = [];
    const segments = 128;

    for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        const x = radius * Math.cos(theta);
        const z = radius * Math.sin(theta);

        points.push(new THREE.Vector3(x, 0, z));
    }

    const orbitGeometry = new THREE.BufferGeometry().setFromPoints(points);

    return (
        <line geometry={orbitGeometry}>
            <lineBasicMaterial color={0xffffff} />
        </line>
    );

}
