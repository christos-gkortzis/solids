import { TetrahedronBufferGeometry, Mesh, MeshStandardMaterial } from 'https://cdn.skypack.dev/three@0.132.2';

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
  return pyramid;
}

export { createPyramid };