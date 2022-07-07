import * as THREE from 'three'

function createCube() {
    const boxWidth = 1
    const boxHeight = 0.25
    const boxDepth = 1
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth)

    const material = new THREE.MeshBasicMaterial({color: 0x44aa88})
    const cube = new THREE.Mesh(geometry, material)

    return cube
}

// Todo: Ugly workaround to add elements to scene
// Better to create own scene which represents the entire grid.
function createGrid(scene, x, y) {
    for(let col = 0; col < x; col++){
        for (let row = 0; row < y; row++) {
            let cube = createCube()
            cube.position.x = col + 1
            cube.position.z = row + 1

            scene.add(cube)
        }
    }
}

export {
    createGrid as createGrid
}