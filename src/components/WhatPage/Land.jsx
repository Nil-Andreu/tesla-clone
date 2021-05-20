import React, {Component} from 'react'
import styled from 'styled-components'
import * as THREE from 'three';
// import * as dat from 'dat.gui';
import normalmap from '../../textures/mountain.png';
import heightmap from '../../textures/height.png';
import alphamap from '../../textures/alpha.png';

export default class Land extends Component {
    componentDidMount() {

        // Create the texture
        const texture = new THREE.TextureLoader().load(normalmap);
        const height = new THREE.TextureLoader().load(heightmap);
        const alpha = new THREE.TextureLoader().load(alphamap);  

        // We are going to put the dark areas to be low, and white to push them up. We do this with photohsop


        // Create the scene, which needs to be created always
        const scene = new THREE.Scene()

        // The buffer type of object is more performant
        const geometry = new THREE.PlaneBufferGeometry(3, 3, 64, 64)
        /**The 3 by 3 is the size, and then the 64 has to be multiples of 2, and is about the detail */

        // Debuguer
        // const gui = new dat.GUI()

        // The material. To MSM we can create a normal map geneartor for which we could then put a great texture
        const material = new THREE.MeshStandardMaterial( {
            color: 'gray',
            map: texture,
            displacementMap: height,
            displacementScale: .6, // How hight and low the values are
            alphaMap: alpha, 
            transparent: true,
            depthTest: false,
        })

        // Mesh the geometry and then the material to join the object
        const plane = new THREE.Mesh(geometry, material)
        scene.add(plane)
        plane.rotation.x = 181

        // Light 1 (is the one we will use as default)
        const pointLight = new THREE.PointLight(0x00b3ff, 2) //The color and the brightness. The point light is only one of the different types
        pointLight.position.x = .2 // The light on the x position
        pointLight.position.y = 10
        pointLight.position.z = 4.4
        scene.add(pointLight)

        //Sizes
        const sizes = {
            width: window.innerWidth, 
            height: window.innerHeight
        }

        // When the browser is resised, we need to notify this to three.js
        window.addEventListener('resize', () => {
            //Update the sizes when is resized
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight

            //Update the camera
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()

            //Update rendered
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })

        // Now gonna have the camera and the position of it
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
        camera.position.x = 0 //Gonna be positioned on the x axis at length 2
        camera.position.y = 0
        camera.position.z = 3

        // Gonna use WebGL to render the object
        const renderer = new THREE.WebGLRenderer({alpha:true}) // Alpha true to have a transparent background

        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        this.mount.appendChild( renderer.domElement );

        //Animation

        let mouseY = 0

        function animateTerrain(event) {
            mouseY = event.clientY //The mouse y gives th
        }

        document.addEventListener('mousemove', animateTerrain)

        const clock = new THREE.Clock()

        const tick = () => {
            const elapsedTime = clock.getElapsedTime()

            //Update the objects
            plane.rotation.z = .5 * elapsedTime
            plane.material.displacementScale = .3 + mouseY * 0.002

            // Render
            renderer.render(scene, camera)

            //Call tick again on the next frame
            window.requestAnimationFrame(tick) //This is just vanilla javascript
        }
        tick();
    }

    render() {
        return (
            <Canvas ref={ref => (this.mount = ref)} />
        )
    }
}

const Canvas = styled.div`
    width: auto;
    height: auto;

    @media (min-width: 1400px) {
        margin-top: 230px;
    }
`;