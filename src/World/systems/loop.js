import { Clock } from 'https://cdn.skypack.dev/three@0.132.2';

class Loop {
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];
  }

  start() {
    this.renderer.setAnimationLoop(() => {
        // render a frame
        this.renderer.render(this.scene, this.camera);
      });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  tick() {
    for (const object of this.updatables) {
      object.tick();
    }
  }
}

export { Loop }