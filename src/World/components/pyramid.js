import { TetrahedronBufferGeometry, Mesh, MeshStandardMaterial } from 'https://cdn.skypack.dev/three@0.132.2';

function createPyramid() {
  // create a geometry
  const geometry = new TetrahedronBufferGeometry(2, 0 );

  // create a Standart material
  const material = new MeshStandardMaterial();

  // create a Mesh containing the geometry and material
  const pyramid = new Mesh(geometry, material);

  return pyramid;
}

export { createPyramid };