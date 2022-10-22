import sunTexture from '../../textures/sun.jpg';
import * as THREE from '../../node_modules/three/src/Three.js';
import {scene} from '../index.js';


export function createSun() {
    const texture = new THREE.TextureLoader().load(sunTexture);
    const geometry = new THREE.SphereGeometry(600, 100, 100)
    const material = new THREE.MeshBasicMaterial({
        map: texture
    });
    const sun = new THREE.Mesh(geometry, material);
    sun.position.x = 29000;
    scene.add(sun);
}
