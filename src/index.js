import * as THREE from 'three'
import * as GRID from './css/js/grid'

const canvas = document.querySelector('#c')
const renderer = new THREE.WebGLRenderer({canvas})

const fov = 75
const aspect = 2
const near = 0.0001
const far = 1000
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
camera.position.set(0, 10, -1)
camera.up.set(0, 0, 1)
camera.lookAt(0, 0, 0)

const scene = new THREE.Scene()

GRID.createGrid(scene, 5, 2)

function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

function render(time) {

    if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement
        camera.aspect = canvas.clientWidth / canvas.clientHeight
        camera.updateProjectionMatrix()
    }

    renderer.render(scene, camera)
    requestAnimationFrame(render)
}

requestAnimationFrame(render)
