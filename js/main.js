// init variables
var scene, camera, renderer;
var cube, bluCube, redCube;

//create scene
function init(){
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
	camera.position.z = 5;
}

//make a cube
function makeCube(){
	var geometry = new THREE.BoxGeometry(1,1,1);
	var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	cube = new THREE.Mesh( geometry, material );
	scene.add( cube );
}

//makes a generic big cube with given values
function bigCube(colorVal, posVal){
	var geometry = new THREE.BoxGeometry(2,2,2);
	var material = new THREE.MeshBasicMaterial( { color: colorVal } );
	var cubeObj = new THREE.Mesh( geometry, material );
	//scene.add( cubeObj );
	cubeObj.position.x = posVal;
	return cubeObj;
}

//make the bigger cubes, and add them
function makeBigCubes(){
	bluCube = new bigCube(0x0000ff, 3);
	redCube = new bigCube(0xff0000, -3);
	scene.add(bluCube);
	scene.add(redCube);
}

//do the math
function render() {
	requestAnimationFrame(render);
	renderer.render(scene, camera);
	rotateCube(cube, 0.1, 0.1);
	rotateCube(bluCube, 0, -0.1);
	rotateCube(redCube, -0.1, 0);
}

//rotate the cubes
function rotateCube(cubeObj, rotVal0, rotVal1){
	cubeObj.rotation.x += rotVal0;
	cubeObj.rotation.y += rotVal1;
}

//init functions
init();
makeCube();
makeBigCubes();
render();
