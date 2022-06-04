import { createCamera } from './components/camera.js';
import { createPyramid } from './components/pyramid.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/loop.js';
import { createPlane} from './components/plane.js'
// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    const pyramid = createPyramid();
    const plane = createPlane();
    const light = createLights();
    loop.updatables.push(plane);
    scene.add(plane, light);

    const resizer = new Resizer(container, camera, renderer);

  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);

  }

  start(cc) {
    loop.start(cc);
  }
  
  stop() {
    loop.stop();
  }
}

    

export { World };
