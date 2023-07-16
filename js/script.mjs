import { JSDOM } from 'jsdom';
import * as THREE from 'three';

async function createRenderer() {
  const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
  const { document } = dom.window;

  const canvas = document.createElement('canvas');
  const renderer = new THREE.WebGLRenderer({ canvas });

  return renderer;
}

async function main() {
  const renderer = await createRenderer();
  
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, 800 / 600);
  camera.position.z = 3;
  scene.add(camera);
  
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.y = 0.5;
  scene.add(mesh);
  
  renderer.setSize(800, 600);
  renderer.render(scene, camera);
  
  document.body.appendChild(renderer.domElement);
}

main();
