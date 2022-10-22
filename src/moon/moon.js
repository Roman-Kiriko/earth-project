import moonTexture from '../../textures/moon.jpg';
import * as THREE from '../../node_modules/three/src/Three.js';
import { solarSystem, objects } from '../index.js';

export function createMoon() {
    const texture = new THREE.TextureLoader().load(moonTexture);

    const moonOrbit  = new THREE.Object3D();
    solarSystem.add(moonOrbit);
    objects.push(moonOrbit);
    const geometry = new THREE.SphereGeometry(2, 50, 50);

    const material = new THREE.MeshPhongMaterial({
        map: texture
    });

    const moon = new THREE.Mesh(geometry, material);
    moon.position.x = 150;
    moon.position.y = 5;
    moonOrbit.add(moon);
    objects.push(moon);
}