import { 
	Mesh,
	PerspectiveCamera,
	Scene,
	MeshBasicMaterial,
	WebGLRenderer,
	GridHelper
} from 'three'
import { OrbitControls } from '@avatsaev/three-orbitcontrols-ts'


let scene:Scene,
		grid:GridHelper,
		camera:PerspectiveCamera,
		renderer:WebGLRenderer,
		controls:OrbitControls,
		config={
			background: 0x666666
		},
		width=window.innerWidth,
		height=window.innerHeight;

function initScene(){
	scene=new Scene()
}

function initCamera(){
	camera=new PerspectiveCamera(45,width/height,1,10000)
	camera.position.set(300,300,300);
	camera.lookAt(scene.position);
	scene.add(camera);
}

function initRenderer(){
	renderer=new WebGLRenderer();
	renderer.setSize(width,height);
	renderer.setClearColor(config.background);
	$('body').append(renderer.domElement);
}

function initGrid(){
	grid=new GridHelper(100,10);
	scene.add(grid);
}

function initControls(){
	controls = new OrbitControls(camera,renderer.domElement);
}


function init(){
	initScene();
	initCamera();
	initRenderer();
	initGrid()
	initControls();
	resize();
	main();
	loop();
}

init();

function resize(){
	window.addEventListener('resize',function(){
		const width = window.innerWidth;
		const height = window.innerHeight;
		camera.aspect=width/height;
		camera.updateProjectionMatrix()
		renderer.setSize(width,height);
	})
}

function loop(){
	renderer.render(scene,camera);
	requestAnimationFrame(loop);
}




function main(){
	//这里开始编写代码
}