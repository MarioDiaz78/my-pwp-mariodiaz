import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { EdgesGeometry, LineBasicMaterial, LineSegments } from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.getElementById('3d-content').appendChild( renderer.domElement );


// Create a cube with translucent material
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, opacity: 0.5, transparent: true } );
const cube = new THREE.Mesh( geometry, material );

// Create edges for the cube
const edges = new EdgesGeometry( geometry );
const edgeMaterial = new LineBasicMaterial( { color: 0xffffff, linewidth: 2 } );
const line = new LineSegments( edges, edgeMaterial );

scene.add( cube );
scene.add( line );

// Create 3D text
const loader = new FontLoader();
loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {
    const textGeometry = new THREE.TextGeometry( 'Mario Diaz Jr', {
        font: font,
        size: 0.2,
        height: 0.05,
    });
    const textMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
    const text = new THREE.Mesh(textGeometry, textMaterial);
    text.position.set(-0.5, 0.2, 0);
    scene.add(text);
});

function animate() {
    console.log(cube.rotation);
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
}

animate();