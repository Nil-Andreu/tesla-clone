import * as THREE from 'three';
import * as dat from 'dat.gui'


//Loading for the textures
const textureLoader = new THREE.TextureLoader()
const normalTexture = textureLoader.load('./textures/NormalMap.png')

/**For creating something in THREE, it must have:
 * The object (geometry)
 * The scene
 * The material
 * The camera
 * The light
 * And the renderer
 */

//Create the variable of the canvas
const canvas = document.querySelector(".canvas")

// Create the scene, which needs to be created always
const scene = new THREE.Scene()

// Create the object, the body of it
const geometry = new THREE.SphereBufferGeometry(.5, 64, 64); //There is a lot of built-in geometric objects

// Debuguer
// const gui = new dat.GUI()

// The material. To MSM we can create a normal map geneartor for which we could then put a great texture
const material = new THREE.MeshStandardMaterial()
material.metalness = 0.7
material.roughness = 0.2
material.normalMap = normalTexture 
material.color = new THREE.Color(0x292929)

// Mesh the geometry and then the material to join the
const sphere = new THREE.Mesh(geometry, material)
scene.add(sphere) //And add this scene

// Light 1 (is the one we will use as default)
const pointLight = new THREE.PointLight(0xffffff, 0.1) //The color and the brightness. The point light is only one of the different types
pointLight.position.x = 2 // The light on the x position
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

// Light 2
const pointLight2 = new THREE.PointLight(0xff0000, 2) //The color and the brightness. The point light is only one of the different types
pointLight2.position.set(-1.86, 1, -1.65)
pointLight2.intensity = 10
scene.add(pointLight2)

/*const light1 = gui.addFolder('Light 1') // To create a folder to the gui
light1.add(pointLight2.position, 'y').min(-3).max(3).step(0.01) // To control the position of the light that we have created in the browser
light1.add(pointLight2.position, 'x').min(-6).max(6).step(0.01)
light1.add(pointLight2.position, 'z').min(-3).max(3).step(0.01)
light1.add(pointLight2, 'intensity').min(0).max(10).step(0.01)
const pointLightHelper = new THREE.PointLightHelper(pointLight2, 1)
scene.add(pointLightHelper)*/


// Light 3
const pointLight3 = new THREE.PointLight(0xe1ff, 2) //The color and the brightness. The point light is only one of the different types
pointLight3.position.set(2.13, -3, -1.98)
pointLight3.intensity = 6.8
scene.add(pointLight3)

/*const light2 = gui.addFolder('Light 2') // To create a folder to the gui
light2.add(pointLight3.position, 'y').min(-3).max(3).step(0.01) // To control the position of the light that we have created in the browser
light2.add(pointLight3.position, 'x').min(-6).max(6).step(0.01)
light2.add(pointLight3.position, 'z').min(-3).max(3).step(0.01)
light2.add(pointLight3, 'intensity').min(0).max(10).step(0.01)

const light2Color = {
    color: 0xff0000
}//Gonna create a property foor which we would then access the color with the gui
light2.addColor(light2Color, 'color').onChange(() => {
        pointLight3.color.set(light2Color.color)
    })

const pointLightHelper2 = new THREE.PointLightHelper(pointLight3, 1) //Will apper a pointer that helps us position the light
scene.add(pointLightHelper2)*/


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
camera.position.z = 2

// Gonna use WebGL to render the object
const renderer = new THREE.WebGLRenderer({
    canvas : canvas,
    alpha : true,
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

//Animation
const clock = new THREE.Clock()

const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    //Update the objects
    sphere.rotation.y = .5 * elapsedTime

    // Render
    renderer.render(scene, camera)

    //Call tick again on the next frame
    window.requestAnimationFrame(tick) //This is just vanilla javascript
}

tick() //Run this function in bucle


