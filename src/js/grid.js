import * as THREE from 'three'

function createCube() {
    const boxWidth = 1
    const boxHeight = 0.25
    const boxDepth = 1
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth)

    const col = Math.floor(Math.random() * 1000000) 
    const material = new THREE.MeshBasicMaterial({color: col})
    const cube = new THREE.Mesh(geometry, material)

    return cube
}

function createGrid(x, y) {

    const field = new THREE.Object3D()

    for(let col = 0; col < x; col++){
        for (let row = 0; row < y; row++) {
            let cube = createCube()
            cube.position.x = col 
            cube.position.z = row

            field.add(cube)
        }
    }

    field.size = {
        width: x,
        height: 0.25,
        depth: y
    }

    return field
}

export {
    createGrid as createGrid
}