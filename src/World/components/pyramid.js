import { TetrahedronBufferGeometry, Mesh, MeshStandardMaterial } from 'https://cdn.skypack.dev/three';

function createPyramid() {
  // create a geometry
  const geometry = new TetrahedronBufferGeometry(1, 0 );

  // create a Standart material
  const material = new MeshStandardMaterial({ color: 'blue' });

  // create a Mesh containing the geometry and material
  const pyramid = new Mesh(geometry, material);
  pyramid.position.set( 0 , 0.5 , 0);
  pyramid.rotation.z = -45;
  
  pyramid.rotation.x = 90;

  pyramid.tick = () => {
    // increase the cube's rotation each frame
    pyramid.rotation.y += 0.01;
    pyramid.rotation.x += 0.01;
    pyramid.rotation.z += 0.01;
    
  };

  return pyramid;
}

export { createPyramid };