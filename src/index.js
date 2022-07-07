import * as THREE from 'three'
import * as GRID from './css/js/grid'

const canvas = document.querySelector('#c')
const renderer = new THREE.WebGLRenderer({canvas})

const fov = 75
const aspect = 2
const near = 0.1
const far = 50
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
camera.position.set(0, 5, -1)
camera.up.set(0, 0, 1)
camera.lookAt(0, 0, 0)

const scene = new THREE.Scene()

GRID.createGrid(scene, 5, 2)

function render(time) {
    renderer.render(scene, camera)
    requestAnimationFrame(render)
}

requestAnimationFrame(render)
