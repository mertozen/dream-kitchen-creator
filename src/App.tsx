import './App.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Scene, Camera, Renderer Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Controls for user interaction
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(10, 10, 10);
scene.add(directionalLight);

// Kitchen Cabinet Model
function createCabinet(width:number, height:number, depth:number, color:number) {
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = new THREE.MeshStandardMaterial({ color });
    const cabinet = new THREE.Mesh(geometry, material);
    return cabinet;
}

// Sample kitchen layout
const cabinet1 = createCabinet(2, 2, 1, 0xff0000);
cabinet1.position.set(-1.5, 1, 0);
scene.add(cabinet1);

const cabinet2 = createCabinet(2, 2, 1, 0x00ff00);
cabinet2.position.set(1.5, 1, 0);
scene.add(cabinet2);

// Camera Position
camera.position.set(0, 3, 5);
camera.lookAt(0, 1, 0);

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();

// Handle Window Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
function App() {

  return (
      <div></div>
  )
}

export default App
