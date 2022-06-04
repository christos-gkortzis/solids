import { PlaneBufferGeometry, Mesh, MeshStandardMaterial, MathUtils } from 'https://cdn.skypack.dev/three';
var x = 0;
function createPlane() {
  // create a geometry
  const geometry = new PlaneBufferGeometry(1, 1 );


  // create a Standart material
  const material = new MeshStandardMaterial({ color: 'red' });

  // create a Mesh containing the geometry and material
  const plane = new Mesh(geometry, material);
  plane.position.set( 0 , 0 , 0);
  
  //plane.rotation.z = MathUtils.degToRad(-45);

  
    

  
  return plane;
}

export { createPlane };
