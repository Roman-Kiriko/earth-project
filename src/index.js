 import stars from '../textures/stars.jpg';
 import earthTexture from '../textures/earth.jpg';
 import * as THREE from '../node_modules/three/src/Three.js';
 import OrbitControls from '../node_modules/orbit-controls-es6/src/index.js';
 import {
     audio
 } from './audio/audio.js';
 import {
     createMoon
 } from './moon/moon.js';
// import  {createSun} from './sun/sun.js';



export const objects = [];

 export const scene = new THREE.Scene();

 export const camera = new THREE.PerspectiveCamera(500, window.innerWidth / window.innerHeight, 0.1, 30000)

 camera.position.set(5, 5, 0);



 const renderer = new THREE.WebGLRenderer({
     antialias: true
 });

 const loader = new THREE.TextureLoader();

 renderer.setSize(window.innerWidth, window.innerHeight);

 renderer.setClearColor(
     0x000000
 );

 const texture = loader.load(stars);
 scene.background = texture;

 document.body.appendChild(renderer.domElement);

 {
     const light = new THREE.DirectionalLight(0xffffff, 1.1);
     light.position.set(-1, 2, 4);
     scene.add(light);

 }



 export const solarSystem = new THREE.Object3D();
 scene.add(solarSystem);
 objects.push(solarSystem);

//  createSun();

const earthOrbit = new THREE.Object3D();
solarSystem.add(earthOrbit);
objects.push(earthOrbit);


 const geometry = new THREE.SphereGeometry(6, 100, 100);
 const material = new THREE.MeshPhongMaterial({
     map: loader.load(earthTexture),
     emissive: 0x112244,
     shininess: 10
 })

 export const earth = new THREE.Mesh(geometry, material);
 earthOrbit.add(earth);
 objects.push(earth);

 createMoon(); 


 renderer.render(scene, camera);


 const controls = new OrbitControls(camera, renderer.domElement);

 controls.addEventListener('change', function () {
     renderer.render(scene, camera);
 });

 function render(time) {
     time *= 0.000001

     objects.forEach(el => {
        el.rotation.y = time;
     })

     renderer.render(scene, camera);

     requestAnimationFrame(render);
 }
 requestAnimationFrame(render);


 const el = document.createElement('button');
 el.textContent = 'Play';
 el.style.position = 'fixed';
 el.style.bottom = '10px';
 el.style.right = '10px';
 el.style.zIndex = 100;
 document.body.appendChild(el);

 el.addEventListener('click', audio, {
     once: true
 })

//  objects.forEach((obj) => {
//      const axes = new THREE.AxesHelper();
//      axes.material.depthTest = false;
//      axes.renderOrder = 1;
//      obj.add(axes);
//  })