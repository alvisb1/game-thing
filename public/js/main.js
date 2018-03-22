var socket = io();
		
function testMsg(){
	socket.emit('testSend', "howdy");
}
		
socket.on('testReturn', function(msg){
     console.log(msg);
});

//three js variables-----------------------------------------------------------------------
var scene = new THREE.Scene();
scene.fog = new THREE.FogExp2( 0xcccccc, 0.0002 );
var camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1,  1500 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.autoClear = false;
document.body.appendChild( renderer.domElement );

var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add( light );

var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.01);
directionalLight.position.set( 20, 50, 10 );
scene.add( directionalLight );

camera.position.z = 10;
camera.position.y = 3;

var width = window.innerWidth;
var height = window.innerHeight;

var gravity = 0.5;
//objects----------------------------------------------------------------------------------

var geometry = new THREE.BoxGeometry( 3, 3, 3 );
var material = new THREE.MeshLambertMaterial( { color: 0x00FFFF } );
var materialRed = new THREE.MeshLambertMaterial( { color: 0xff3300 } );
var localPlayer = new Player( geometry, materialRed , 5, 6, 7);

scene.add(localPlayer);

function render() {

	renderer.render( scene, camera );
	requestAnimationFrame( render );
}

render();