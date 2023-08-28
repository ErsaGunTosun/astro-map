import * as THREE from 'three';
import { useThree } from '@react-three/fiber';

function BlackBackgroundTexture() {
    const { scene } = useThree();

    const textureLoader = new THREE.CubeTextureLoader();
    const starsTexture = textureLoader.load([
        '/assets/texture/stars.jpg', '/assets/texture/stars.jpg', '/assets/texture/stars.jpg',
        '/assets/texture/stars.jpg', '/assets/texture/stars.jpg', '/assets/texture/stars.jpg'
    ]);
    scene.background = starsTexture;

    return null;
}
function BlackBackground() {
    const { scene } = useThree();
    scene.background = new THREE.Color(0x000000);
    return null;
}

export {
    BlackBackground,
    BlackBackgroundTexture
}