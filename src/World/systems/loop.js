import { MathUtils } from 'https://cdn.skypack.dev/three';

//const clock = new Clock();
var x = 0;
class Loop {
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];
  }
  
  start(xx) {
    
    this.renderer.setAnimationLoop(() => {
      // tell every animated object to tick forward one frame
      this.tick(xx);
      
      if (x<MathUtils.degToRad(90)){
        // render a frame
        this.renderer.render(this.scene, this.camera);
        x +=0.01
      }
      else {
        this.renderer.setAnimationLoop(null);
        x=0;
      }
      
    });
      
    
    
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  tick(yy) {
    // only call the getDelta function once per frame!
    //const delta = clock.getDelta();

    // console.log(
    //   `The last frame rendered in ${delta * 1000} milliseconds`,
    // );

    for (const object of this.updatables) {
      if (yy==1) {
        object.rotation.z += 0.01;
      }
      if (yy==2) {
        object.rotation.z -= 0.01;
      }
      
    }
  }
}

export { Loop };