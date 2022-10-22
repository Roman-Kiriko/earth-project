import * as THREE from '../../node_modules/three/src/Three.js';
import { camera } from '../index.js';


export function audio() {
    const listener = new THREE.AudioListener();
    camera.add(listener);

    const sound = new THREE.Audio(listener);

    const audioLoader = new THREE.AudioLoader();



    audioLoader.load('../src/audio/store/be-so-serious.mp3', function (buffer) {
        sound.setBuffer(buffer);
        sound.setLoop(false);
        sound.setVolume(0.5);
        sound.play();
    });
}
