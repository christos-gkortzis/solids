import { createCamera } from './components/camera.js';
import { createPyramid } from './components/pyramid.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    const pyramid = createPyramid();
    const light = createLights();
    scene.add(pyramid, light);

    const resizer = new Resizer(container, camera, renderer);

  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);

  }
}

export { World };
