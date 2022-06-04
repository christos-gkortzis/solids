import { World } from './World/World.js';
// Get a reference to the container element
const container = document.querySelector('#scene-container');

// create a new world
const world = new World(container);
function stat() {
  

  // start the animation loop
  world.render();
}
function main(a) {
  // start the animation loop
  world.start(a);
}
stat();
document.getElementById("btn").addEventListener("click", () => {
  main(1);
});
document.getElementById("btn1").addEventListener("click", () => {
  main(2);
});
document.getElementById("btn2").addEventListener("click", () => {
  stat();
});
