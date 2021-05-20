import React, { Component } from "react";
import styled from "styled-components";
import * as THREE from "three";
// import * as dat from "dat.gui";
import cross from '../../textures/cross.png';


export default class CircularCylinder extends Component {
  componentDidMount() {
    //Texture loader
    const crossmap = new THREE.TextureLoader().load(cross);

    // Create the scene, which needs to be created always
    const scene = new THREE.Scene();

    // Create the object, the body of it
    const geometry = new THREE.TorusGeometry(.7, .2, 12, 80); 

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCnt = 2000; //How many particles we want in the background

    const posArray = new Float32Array(particlesCnt * 3); //Position array of x, y and z for each particle: xyz, xyz, ...

    //Gonna iterate on the position array
    for(let i = 0; i < particlesCnt*3; i++){
        // posArray[i] = Math.random() Create random numbers
        posArray[i] = (Math.random() - 0.5) * (Math.random() * 5) //To align to the center and multiply by random number so there are more disperse
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3)) //To the particle geometry, we add a position attribute where we assign each of the pos array values (3 as xyz)
    // Debuguer
    // const gui = new dat.GUI()

    const material = new THREE.PointsMaterial({
        size: 0.005,
    }); //For creating particles (points) in the geometry. Where the size is the size of each point.
    material.color = new THREE.Color(0xffffff);

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.005,
        map: crossmap,
        transparent: true,
        // color: 'blue', for the color of particles
        // blending: THREE.AdditiveBlending
    });

    // Mesh the geometry and then the material to join the
    const sphere = new THREE.Points(geometry, material);
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(sphere, particlesMesh); //And add sphere and the particles


    // Light 1 (is the one we will use as default)
    const pointLight = new THREE.PointLight(0xffffff, 1); //The color and the brightness. The point light is only one of the different types
    pointLight.position.x = 2; // The light on the x position
    pointLight.position.y = 3;
    pointLight.position.z = 4;
    scene.add(pointLight);

    //Sizes
      const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      
    

    // When the browser is resised, we need to notify this to three.js
    window.addEventListener("resize", () => {
      //Update the sizes when is resized
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      //Update the camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      //Update rendered
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    // Now gonna have the camera and the position of it
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.x = 0; //Gonna be positioned on the x axis at length 2
    camera.position.y = 0;
    camera.position.z = 2;

    // Gonna use WebGL to render the object
    const renderer = new THREE.WebGLRenderer({ alpha:true }); // Alpha true to have a transparent background

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.mount.appendChild(renderer.domElement);


    let mouseX = 0;
    let mouseY = 0;

    function animateParticles(event) {
        mouseY = event.clientY
        mouseX = event.clientX
    }

    document.addEventListener('mousemove', animateParticles)

    //Animation
    const clock = new THREE.Clock();

    const tick = () => {

      const elapsedTime = clock.getElapsedTime();

      particlesMesh.rotation.y = -.1 * elapsedTime

      if (mouseX > 0) {
          particlesMesh.rotation.y = mouseX * (elapsedTime * 0.00005)
          particlesMesh.rotation.x = - mouseY * (elapsedTime * 0.00005)
      } //For solving when the mouse is not moving
      
      //Update the objects
      sphere.rotation.y = 0.5 * elapsedTime;


      // Render
      renderer.render(scene, camera);

      //Call tick again on the next frame
      window.requestAnimationFrame(tick); //This is just vanilla javascript
    };

    tick(); //Run this function in bucle
  }
  render() {
    return <Canvas id="canvas" ref={(ref) => (this.mount = ref)} />;
  }
}

const Canvas = styled.div`
    display: inline-block;
    grid-column: 1/2;
    grid-row: 1/2;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
