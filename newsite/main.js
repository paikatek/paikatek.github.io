import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
import {Text} from 'troika-three-text';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import Stats from 'three/examples/jsm/libs/stats.module';


let articles = [];
let articlesHeights = [];
let articlesElemHeights = [];
let articlesImageWidth = [];
let articlesImageHeight = [];
let scrolling = 0;
let clock = new THREE.Clock();
let deltaTime=0;
let elementTextWidth = 10;
let check = false;
let cameraFov = 65;
let defaultFontaddSize = 1;
let aspect = 0;
let naviUpH;

	


  if(check==true){cameraFov=50;defaultFontaddSize=3;alert(mobile);}
//const table = document.getElementsByClassName('elementText');
const elements = [];
const elementsText = [];
//const targets = { table: [], sphere: [], helix: [], grid: [] };
let elementIndex = 0;

const scene = new THREE.Scene();

let world = new THREE.Object3D;
scene.add( world );
 console.log(check);
const camera = new THREE.PerspectiveCamera( cameraFov, window.innerWidth / window.innerHeight, 0.1, 1000 );

const light = new THREE.DirectionalLight(0x669999, 5);
light.position.set=new THREE.Vector3(1,3,5);
scene.add(light);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio( window.devicePixelRatio );
document.getElementById("webGL").appendChild( renderer.domElement );
scene.background = new THREE.Color( 0x000000 );
camera.position.x = -1.95;
camera.position.y = 2;
camera.position.z = 5;


//window.addEventListener( 'resize', onWindowResize );
clock.start();
clock.startTime;
clock.getElapsedTime();
const scene2 = new THREE.Scene();
//sceneTest();
const renderScene = new RenderPass( scene, camera );
//const renderScene2 = new RenderPass( scene2, camera );
const composer = new EffectComposer( renderer );
composer.addPass( renderScene );
const bloomPass = new UnrealBloomPass(
	new THREE.Vector2(window.innerWidth, window.innerHeight),
	1.6,
	0.1,
	0.1
);
composer.addPass(bloomPass);
composer.renderToScreen = false;
const mixPass = new ShaderPass(
	new THREE.ShaderMaterial({
		uniforms: {
			baseTexture: {value: null},
			bloomTexture: {value: composer.renderTarget2.texture}
		},
		vertexShader: document.getElementById('vertexshader').textContent,
		fragmentShader: document.getElementById('fragmentshader').textContent
	}), 'baseTexture'
);

const finalComposer = new EffectComposer(renderer);
finalComposer.addPass(renderScene);
finalComposer.addPass(mixPass);

const outputPass = new OutputPass();
finalComposer.addPass(outputPass);

const BLOOM_SCENE = 1;
const bloomLayer = new THREE.Layers();
bloomLayer.set(BLOOM_SCENE);
const darkMaterial = new THREE.MeshBasicMaterial({color:0x000000});
const materials = {};

function nonBloomed(obj){
	if(obj.isMesh && bloomLayer.test(obj.layers) === false){
		materials[obj.uuid] = obj.material;
		obj.material = darkMaterial;
	}
	if(obj.isText && bloomLayer.test(obj.layers) === false){
		materials[obj.uuid] = obj.material;
		obj.material = darkMaterial;
	}
}

function restoreMaterial(obj){
	if(materials[obj.uuid]){
		obj.material = materials[obj.uuid];
		delete materials[obj.uuid];
	}
}

bloomPass.strength = 0.5;
bloomPass.radius = 0.5;
bloomPass.threshold = 0.1;

renderer.toneMapping = THREE.CineonToneMapping;
renderer.toneMappingExposure = 1;
renderer.outputColorSpace = THREE.SRGBColorSpace;

THREE.Cache.enabled = true;

getArticles();
articleCreatePlane();
articleAdjustPlane();

naviUp();

//drawingLines();
let path0 = [];
let path1 = [];
let path2 = [];
let path3 = [];
let path4 = [];

function drawingLines(path,name,from,to,no){
	const material = new THREE.LineBasicMaterial( { color: 0x404040} );
	let position1 = new THREE.Vector3;
	let firstSeg = new THREE.Vector3;
	let secondSeg = new THREE.Vector3;
	let position2 = new THREE.Vector3;
	let thirdSeg = new THREE.Vector3;
	from.getWorldPosition(position1);
	to.getWorldPosition(position2);
	scene.children[0].children[0].getWorldPosition(firstSeg);
	firstSeg.y += (scene.children[0].children[0].geometry.parameters.height/2)+0.3+(0.1*no);
	secondSeg.x = scene.children[0].children[0].position.x+(scene.children[0].children[0].geometry.parameters.width/2)+0.35+(0.1*no);
	thirdSeg.x = scene.children[0].children[0].position.x+(scene.children[0].children[0].geometry.parameters.width/2)+0.2;
	path.push( new THREE.Vector3( position1.x, position1.y-0.24, -5 ) );
	path.push( new THREE.Vector3( position1.x, firstSeg.y, -5 ) );
	path.push( new THREE.Vector3( secondSeg.x, firstSeg.y, -5 ) );
	path.push( new THREE.Vector3( secondSeg.x, position2.y, -5 ) );
	path.push( new THREE.Vector3( thirdSeg.x, position2.y, -5 ) );

	const geometry = new THREE.BufferGeometry().setFromPoints( path );

	const line = new THREE.Line( geometry, material );
	line.name = name;
	//line.computeLineDistances();
	scene.add( line );
	//console.log(position);
}





function naviUp(){
	let geometry = new THREE.BoxGeometry(10,0.3,0.001);
	let material = new THREE.MeshBasicMaterial({color: 0x009966});
	let position = new THREE.Vector3(0,0,0);

	const naviUp = new THREE.Mesh(geometry,material);
	naviUp.layers.toggle(BLOOM_SCENE);
	naviUp.name = 'naviUp';
	//position.y += parent.geometry.parameters.height*0.52;
	naviUp.position.x=scene.children[0].children[0].position.x;
	//naviUp.position.y=scene.children[0].children[0].position.y+(scene.children[0].children[0].geometry.parameters.height/2)+0.6;
	naviUp.position.z=-5;

	scene.children[0].add(naviUp);
	naviUpH = naviUp;
	//let textNo = [];

	function addText(no,text,wFactor,hFactor){
		const textNo = new Text;
		textNo.name = 'naviText';
		textNo.text = text;
		textNo.font = './public/fonts/Roboto-Bold.ttf';
		textNo.fontSize = 0.27*defaultFontaddSize;
		textNo.textAlign = 'justify';
		textNo.letterSpacing = 0.1;
		textNo.material = new THREE.MeshBasicMaterial({color:0x000000});
		textNo.maxWidth = 10;
		naviUp.add(textNo);
		textNo.sync(() => {
		textNo.position.set(-(naviUp.geometry.parameters.width*wFactor),(naviUp.geometry.parameters.height*hFactor),0.001);
		scene.children[0].children[4].children[2].addEventListener('synccomplete', () => {
		
		function callbackTest() {
			naviUpH.position.y = scene.children[0].children[0].position.y+(scene.children[0].children[0].geometry.parameters.height/2)+1;
			
			if(no==0)drawingLines(path0,'NaviUpToAboutMe',textNo,scene.children[0].children[0],0);
		if(no==1)drawingLines(path1,'NaviUpToDevelop',textNo,scene.children[0].children[1],1);
		if(no==2)drawingLines(path2,'NaviUpToVis',textNo,scene.children[0].children[2],2);
		if(no==3)drawingLines(path3,'NaviUpToSmart',textNo,scene.children[0].children[3],3);
		if(no==4)drawingLines(path4,'NaviUpToKont',textNo,scene.children[0].children[4],4);

		toScreenPosition(scene.children[0].children[0],camera);
			}
		callbackTest;
		setTimeout(callbackTest, 30);}); 
	});}

	addText(0,'O mnie',0.49,0.38);
	addText(1,'Programowanie',0.35,0.38);
	addText(2,'Wizualizacje',0.08,0.38);
	addText(3,'Smart Dom',-0.16,0.38);
	addText(4,'Kontakt',-0.375,0.38);
	
}
[new THREE.Vector3(399.68222832009576, 304.2712647391499, 73.6856319205078),
	new THREE.Vector3(-53.56300074753207, 171.49711742836848, -14.495472686253045),
	new THREE.Vector3(-283.4748557538718, 183.4943402647093, -27.197994207077706),
	new THREE.Vector3(-424.21523355695456, 259.1844883292352, -127.65006440703308)]

function articleCreateBorder(i){
	let parent = scene.children[0].children[i];
	let geometry = new THREE.BoxGeometry(parent.geometry.parameters.width*1.04,0.018,0.015);
	let material = new THREE.MeshBasicMaterial({color: 0x66ffcc});
	let position = new THREE.Vector3(0,0,0);
	//console.log(parent.geometry.parameters.height);
	
	const top = new THREE.Mesh(geometry,material);
	top.layers.toggle(BLOOM_SCENE);
	top.name = 'borderTop';
	position.y += parent.geometry.parameters.height*0.52;
	top.position.set(position.x,position.y,position.z);
	scene.children[0].children[i].add(top);

	position = new THREE.Vector3(0,0,0);
	const bottom = new THREE.Mesh(geometry,material);
	bottom.layers.toggle(BLOOM_SCENE);
	bottom.name = 'borderBottom';
	position.y -= parent.geometry.parameters.height*0.52;
	bottom.position.set(position.x,position.y,position.z);
	scene.children[0].children[i].add(bottom);

	position = new THREE.Vector3(0,0,0);
	geometry = new THREE.BoxGeometry(0.015,parent.geometry.parameters.height*1.04,0.018);
	const left = new THREE.Mesh(geometry,material);
	left.layers.toggle(BLOOM_SCENE);
	left.name = 'borderLeft';
	position.x -= parent.geometry.parameters.width*0.52;
	left.position.set(position.x,position.y,position.z);
	scene.children[0].children[i].add(left);

	position = new THREE.Vector3(0,0,0);
	const right = new THREE.Mesh(geometry,material);
	right.layers.toggle(BLOOM_SCENE);
	right.name = 'borderRight';
	position.x += parent.geometry.parameters.width*0.52;
	right.position.set(position.x,position.y,position.z);
	scene.children[0].children[i].add(right);
}


function articleAdjustPlane(){
	
	for(let i=0;i<scene.children[0].children.length;i++){
	let dimensions = new THREE.Vector2;
	dimensions.x = 10.5;
	let geometry = new THREE.PlaneGeometry;
	let move = new THREE.Vector3(-2.2,2.2,-5);
	let articleImage = scene.children[0].children[i].children[0];
	let articleTitle = scene.children[0].children[i].children[1];
	let articleText = scene.children[0].children[i].children[2];
	let article = scene.children[0].children;

	dimensions.y = articleImage.geometry.parameters.height;
	
	articleTitle.sync(() => {
		let articleTitle = scene.children[0].children[i].children[1];
		dimensions.y += articleTitle.geometry.boundingBox.max.y-articleTitle.geometry.boundingBox.min.y;
	  });

	articleText.sync(() => {
		let articleImage = scene.children[0].children[i].children[0];
		let articleTitle = scene.children[0].children[i].children[1];
		let articleText = scene.children[0].children[i].children[2];
		let article = scene.children[0].children;

		dimensions.y += articleText.geometry.boundingBox.max.y-articleText.geometry.boundingBox.min.y;
		geometry = new THREE.PlaneGeometry(dimensions.x,dimensions.y+0.7);
		article[i].geometry = geometry;
		if(i>0){move.y=article[i-1].position.y-(article[i-1].geometry.parameters.height/2+article[i].geometry.parameters.height/2)-0.9;};
		article[i].position.set(move.x,move.y,move.z);

		articleImage.position.x = -(dimensions.x*0.5)+(articleImage.geometry.parameters.width/2)+0.2;
		articleImage.position.y = (article[i].geometry.parameters.height/2)-(articleImage.geometry.parameters.height/2)-0.15;

		articleTitle.position.x = -(dimensions.x*0.5)+0.2;
		articleTitle.position.y = article[i].geometry.parameters.height/2-articleImage.geometry.parameters.height-0.3;

		articleText.position.x = -(dimensions.x*0.5)+0.2;
		articleText.position.y = article[i].geometry.parameters.height/2-articleImage.geometry.parameters.height-0.8;

		//console.log(scene);
		articleCreateBorder(i);}
		);}
}


function getArticles(){
	articles = document.getElementsByClassName("article-container");
}

function articleCreatePlane(){
	for(let i=0;i<articles.length;i++){
		let aspect = articles[i].clientHeight/articles[i].clientWidth;
		let width = 14;
		let move = new THREE.Vector3(-2.2,2.2,-5);
		let geometry = new THREE.Vector2(1,1);
		articlesHeights.push(width*aspect);
		let material = new THREE.MeshStandardMaterial( { color: 0x000000, opacity: 0.0, transparent: true, } );
		const plane = new THREE.Object3D( geometry, material );
		plane.name = 'elementPlane';
		if(i>0){move.y=scene.children[0].children[i-1].position.y-(articlesHeights[i-1]/2+articlesHeights[i]/2)-0.45;}
		plane.position.set(move.x,move.y,move.z);
		
		//plane.layers.toggle(BLOOM_SCENE);
		
		scene.children[0].add(plane);
		aspect = articles[i].getElementsByClassName("image")[0].clientWidth/articles[i].getElementsByClassName("image")[0].clientHeight;
		
		articleCreateImage(i,articles[i].getElementsByClassName("image")[0].src,aspect);
		
		articleCreateTitle(i);
		
		articleCreateText(i);
	}
}
 function articleCreateImage(index,source,aspect){
	let plane = new THREE.Mesh;
	let box = new THREE.Mesh;
	let height = 3;
	let material = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
	let geometry = new THREE.PlaneGeometry;
	const loader = new THREE.TextureLoader();
	const texture = loader.load( source , function (tex){
		texture.colorSpace = THREE.SRGBColorSpace;
	} );
	material = new THREE.MeshBasicMaterial({color: 0xFFFFFF,map: texture});
	geometry = new THREE.PlaneGeometry(height*aspect,height);
	articlesImageWidth.push(height*aspect);
	plane = new THREE.Mesh( geometry, material );
	//plane.position.x = -6.8+(height*aspect*0.5);
	//plane.position.y += articlesHeights[index]*0.5-(height*0.5)-0.2;
	plane.position.z+=0.1;
	geometry = new THREE.BoxGeometry(height*aspect+0.07,height+0.07,0.01);
	material = new THREE.MeshBasicMaterial({color: 0x66ffcc});
	box = new THREE.Mesh( geometry, material );
	box.position.z-=0.01;
	box.layers.toggle(BLOOM_SCENE);
	plane.add(box);
	//plane.layers.toggle(BLOOM_SCENE);
	scene.children[0].children[index].add(plane);
 }

function articleCreateTitle(index){
	let titleText = new Text;
	titleText.name = 'titleText';
	titleText.text = articles[index].getElementsByTagName('h2')[0].textContent;
	titleText.font = './public/fonts/Roboto-Bold.ttf';
	titleText.fontSize = 0.4*defaultFontaddSize;
	titleText.textAlign = 'justify';
	titleText.letterSpacing = 0.1;
	titleText.material = new THREE.MeshBasicMaterial({color:0x00b377});
	titleText.maxWidth = 10;
	titleText.layers.toggle(BLOOM_SCENE);
	scene.children[0].children[index].add(titleText);
}

function articleCreateText(index){
	let text = new Text;
	text.name = 'articleText';
	text.text = articles[index].getElementsByClassName('elementText')[0].textContent;
	text.font = './public/fonts/Roboto-Regular.ttf';
	text.fontSize = 0.25*defaultFontaddSize;
	text.textAlign = 'justify';
	text.letterSpacing = 0.1;
	text.lineHeight = 1.2;
	text.material = new THREE.MeshBasicMaterial({color:0x66ffcc});
	text.maxWidth = 10;
	//text.position.x=-6.8;
	//text.position.y=articlesHeights[index]*0.5-4;
	//text.layers.toggle(BLOOM_SCENE);
	scene.children[0].children[index].add(text);
}



function elementGetSize(element){
	let elementSize;
	elementSize = new THREE.Vector3(elementTextWidth, element.geometry.boundingBox.max.y - element.geometry.boundingBox.min.y, 0.1)
	return elementSize;
}

function createElPlane(elementSize,i){

	let geometry = new THREE.PlaneGeometry(elementSize.x,elementSize.y);
	const material = new THREE.MeshBasicMaterial( { color: 0x909090 } );
	const plane = new THREE.Mesh( geometry, material );
	plane.name = 'elementPlane';
	plane.position.set(elementsText[i].position.x+(elementSize.x/2),elementsText[i].position.y- (elementSize.y/2),-5.01)
	scene.children[0].add(plane);
	elementIndex = scene.children[0].children.length-1;
	elements.push(plane);
	return elementIndex;
	
}
 
function random( min, max ){
        return Math.random() * (max-min) + min;
    }
	

function move(e){

    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
	scrolling = delta*2;
	let elementPlane = new Array;
}
		






function onWindowResize() {

	


	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setPixelRatio( window.devicePixelRatio );
	//composer.setSize( window.innerWidth, window.innerHeight );
	//composer.setPixelRatio( window.innerWidth, window.innerHeight );
	finalComposer.setSize( window.innerWidth, window.innerHeight );//console.log(window.innerWidth, window.innerHeight);
	finalComposer.setPixelRatio( window.devicePixelRatio );
	//console.log(window.innerWidth);
	//if (window.innerWidth<1000)camera.fov=60+(1000-window.innerWidth)*0.075;	
	//else camera.fov=60;	

	toScreenPosition(scene.children[0].children[0],camera);
	
	
}

function toScreenPosition(obj, camera)
{
    let vector = new THREE.Vector3();
    
    // TODO: need to update this when resize window
    let widthHalf = 0.5*window.innerWidth;
    let heightHalf = 0.5*window.innerHeight;
    //vector.set(obj,1,1);
    obj.updateMatrixWorld();
    vector.setFromMatrixPosition(obj.matrixWorld);
	vector.x-= scene.children[0].children[0].geometry.parameters.width/2;
	//console.log(vector);

    vector.project(camera);
    vector.x = ( vector.x * widthHalf ) + widthHalf;
    vector.y = - ( vector.y * heightHalf ) + heightHalf;
    //console.log(vector.x, vector.y, camera.fov);
	while(vector.x<30){
		camera.fov+=0.01;
		obj.updateMatrixWorld();
    	vector.setFromMatrixPosition(obj.matrixWorld);
		camera.updateProjectionMatrix();
		vector.x-= scene.children[0].children[0].geometry.parameters.width/2;
		//console.log(vector);
		vector.project(camera);
    	vector.x = ( vector.x * widthHalf ) + widthHalf;
    	vector.y = - ( vector.y * heightHalf ) + heightHalf;
	}
	if(window.innerHeight>700){
		if(camera.fov<cameraFov)camera.fov=cameraFov;
	while(vector.x>30.01&&camera.fov>cameraFov){
		camera.fov-=0.01;
		obj.updateMatrixWorld();
		vector.setFromMatrixPosition(obj.matrixWorld);
		camera.updateProjectionMatrix();
		vector.x-= scene.children[0].children[0].geometry.parameters.width/2;
		//console.log(vector);
		vector.project(camera);
		vector.x = ( vector.x * widthHalf ) + widthHalf;
		vector.y = - ( vector.y * heightHalf ) + heightHalf;
	}}

	if(window.innerHeight<700){
		
		while(vector.x>30.01){
			camera.fov-=0.01;
			obj.updateMatrixWorld();
			vector.setFromMatrixPosition(obj.matrixWorld);
			camera.updateProjectionMatrix();
			vector.x-= scene.children[0].children[0].geometry.parameters.width/2;
			//console.log(vector);
			vector.project(camera);
			vector.x = ( vector.x * widthHalf ) + widthHalf;
			vector.y = - ( vector.y * heightHalf ) + heightHalf;
		}
		//if(camera.fov<50)camera.fov=50;
	}
	//if (vector.x>50&&camera.fov>50)camera.fov-=1;
	//if (vector.x>300)camera.fov-=1;
    return { 
        x: vector.x,
        y: vector.y
    };

}








function sceneTest(){
const testPlane = new THREE.Mesh(new THREE.PlaneGeometry,new THREE.MeshBasicMaterial);


const camera2 = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const light2 = new THREE.DirectionalLight(0x669999, 5);
light2.position.set=new THREE.Vector3(1,3,5);
scene2.add(light2);

scene2.background = new THREE.Color( 0x000000 );
camera2.position.z = 5;

scene2.add(testPlane);}
//const bbCamera = new THREE.Object3D;
//let position = new THREE.Vector3;
//camera.getWorldPosition(position);
//bbCamera.position.set(position); 

let curve0 = 0;
let electronPosIndex0 = 0;
let electronObj0;
electronObj0 = new THREE.Mesh(new THREE.SphereGeometry(0.035,3,3,0,3),new THREE.MeshBasicMaterial({color:0x66ffcc}));
electronObj0.name='electron';
electronObj0.position.set(-2,-2,7);
scene.add(electronObj0);
electronObj0.layers.toggle(BLOOM_SCENE);

let curve1 = 0;
let electronPosIndex1 = 0;
let electronObj1;
electronObj1 = new THREE.Mesh(new THREE.SphereGeometry(0.035,3,3,0,3),new THREE.MeshBasicMaterial({color:0x66ffcc}));
electronObj1.name='electron';
electronObj1.position.set(-2,-2,7);
scene.add(electronObj1);
electronObj1.layers.toggle(BLOOM_SCENE);

let curve2 = 0;
let electronPosIndex2 = 0;
let electronObj2;
electronObj2 = new THREE.Mesh(new THREE.SphereGeometry(0.035,3,3,0,3),new THREE.MeshBasicMaterial({color:0x66ffcc}));
electronObj2.name='electron';
electronObj2.position.set(-2,-2,7);
scene.add(electronObj2);
electronObj2.layers.toggle(BLOOM_SCENE);

let curve3 = 0;
let electronPosIndex3 = 0;
let electronObj3;
electronObj3 = new THREE.Mesh(new THREE.SphereGeometry(0.035,3,3,0,3),new THREE.MeshBasicMaterial({color:0x66ffcc}));
electronObj3.name='electron';
electronObj3.position.set(-2,-2,7);
scene.add(electronObj3);
electronObj3.layers.toggle(BLOOM_SCENE);

let curve4 = 0;
let electronPosIndex4 = 0;
let electronObj4;
electronObj4 = new THREE.Mesh(new THREE.SphereGeometry(0.035,3,3,0,3),new THREE.MeshBasicMaterial({color:0x66ffcc}));
electronObj4.name='electron';
electronObj4.position.set(-2,-2,7);
scene.add(electronObj4);
electronObj4.layers.toggle(BLOOM_SCENE);

let electronsOn = [false,false, false, false];

function electron(on,curve,electronPosIndex,obj,path,seg0,seg1,seg2,seg3){
	electronsOn[on]=true;
	var line = new THREE.Line3();
	var tempo;
	const seg = [seg0,seg1,seg2,seg3];
	if(path==path0){
		electronPosIndex=electronPosIndex0;
		curve=curve0;
	}
	if(path==path1){
		electronPosIndex=electronPosIndex1;
		curve=curve1;
	}
	if(path==path2){
		electronPosIndex=electronPosIndex2;
		curve=curve2;
	}
	if(path==path3){
		electronPosIndex=electronPosIndex3;
		curve=curve3;
	}
	if(path==path4){
		electronPosIndex=electronPosIndex4;
		curve=curve4;
	}

	if (curve <= seg[0]) {
		line = new THREE.Line3(path[0],path[1]);
		tempo = seg[0];
		obj.position.z = -5;
		} 		  	
  	if (curve == seg[0]) {electronPosIndex = 0;var line = new THREE.Line3(path[1],path[2]);tempo = seg[1];}
	if (curve>seg[0])	{
		var line = new THREE.Line3(path[1],path[2]);
		tempo = seg[1];  	}
	if (curve == (seg[0]+seg[1])) {electronPosIndex = 0;var line = new THREE.Line3(path[2],path[3]);tempo = seg[2];}
	if (curve>(seg[0]+seg[1]))	{
		var line = new THREE.Line3(path[2],path[3]);
		tempo = seg[2];  	}
	if (curve == (seg[0]+seg[1]+seg[2])) {electronPosIndex = 0;var line = new THREE.Line3(path[3],path[4]);tempo = seg[3];}
	if (curve>(seg[0]+seg[1]+seg[2]))	{
		var line = new THREE.Line3(path[3],path[4]);
		tempo = seg[3];  	}
	if (curve == (seg[0]+seg[1]+seg[2]+seg[3])) {electronPosIndex = 0;curve=0;line = new THREE.Line3(path[0],path[1]);tempo = seg[0]; electronsOn[on]=false;obj.position.z = 7;}
	
	electronPosIndex++;
	curve++;

  	let electronPos = new THREE.Vector3;
	line.at(electronPosIndex / tempo, electronPos);
  	obj.position.x = electronPos.x;
  	obj.position.y = electronPos.y;
	
	switch (path) {
		case path0: electronPosIndex0=electronPosIndex; curve0=curve; break;
		case path1: electronPosIndex1=electronPosIndex; curve1=curve; break;
		case path2: electronPosIndex2=electronPosIndex; curve2=curve; break;
		case path3: electronPosIndex3=electronPosIndex; curve3=curve; break;
		case path4: electronPosIndex4=electronPosIndex; curve4=curve; break;
	  }		
}

const curves = [curve0,curve1,curve2,curve3,curve4];
	const electronPosIndexes = [electronPosIndex0,electronPosIndex1,electronPosIndex2,electronPosIndex3,electronPosIndex4];
	const electronObjs = [electronObj0,electronObj1,electronObj2,electronObj3,electronObj4];
	const paths = [path0,path1,path2,path3,path4];

function randomElectron(min,max,prob){
		for(let i=0;i<5;i++){
		let probab = prob*(max-min);
		let probLow = probab/5*i;
		let probHigh = probab/5*(i+1);
		if(random(min,max)>probLow&&random(min,max)<probHigh){
			electronsOn[i]=true;
			electron(i,curves[i],electronPosIndexes[i],electronObjs[i],paths[i],10-i,(6-i)*10,50+(i*50),3+i);
		}//console.log(probLow,probHigh);
	}
}
let INTERSECTED;
const raycaster = new THREE.Raycaster();
let pointer = new THREE.Vector2();

document.addEventListener( 'mousemove', onPointerMove );

function onPointerMove( event ) {
	pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
	//console.log(pointer);
}

function onPointerDown(event){
	pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
	const intersects = raycaster.intersectObjects( scene.children[0].children[5].children, false );
	if ( intersects.length > 0 ) {
		const object = intersects[0].object;
		if(object===scene.children[0].children[5].children[0]){

			camera.position.y=scene.children[0].children[0].position.y-(scene.children[0].children[0].geometry.parameters.height*0.25)+(cameraFov-camera.fov)*0.15;
			
		
		
		}
		if(object===scene.children[0].children[5].children[1]){camera.position.y=scene.children[0].children[1].position.y-(scene.children[0].children[1].geometry.parameters.height*0.2)+(cameraFov-camera.fov)*0.15;}
		if(object===scene.children[0].children[5].children[2]){camera.position.y=scene.children[0].children[2].position.y-(scene.children[0].children[2].geometry.parameters.height*0.42)+(cameraFov-camera.fov)*0.15;}
		if(object===scene.children[0].children[5].children[3]){camera.position.y=scene.children[0].children[3].position.y-(scene.children[0].children[3].geometry.parameters.height*0.42)+(cameraFov-camera.fov)*0.15;}
		if(object===scene.children[0].children[5].children[4]){camera.position.y=scene.children[0].children[4].position.y-(scene.children[0].children[4].geometry.parameters.height*0.42)+(cameraFov-camera.fov)*0.15;	
			if(camera.position.y < -27-(cameraFov-camera.fov)*0.15)camera.position.y = -27-(cameraFov-camera.fov)*0.15;
		}
	}
}




function animate() {
	
	//console.log(camera.position.y);	

	window.addEventListener('pointerdown',onPointerDown);

	window.addEventListener('pointermove',onPointerMove);
	
	raycaster.setFromCamera( pointer, camera );

				const intersects = raycaster.intersectObjects( scene.children[0].children[5].children, false );

				if ( intersects.length > 0 ) {	

					if ( INTERSECTED != intersects[ 0 ].object ) {

						if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );

						INTERSECTED = intersects[ 0 ].object;
						INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
						INTERSECTED.material.color.setHex( 0xFFFFFF );

					}

				} else {

					if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );

					INTERSECTED = null;

				}


				window.addEventListener('touchstart', (event) => {
					this.mouseDown = true
					this.handle.style.opacity = 1.0
					this.update(
						event.targetTouches[0].pageX,
						event.targetTouches[0].pageY
					)
				});
				
				let touchEnd = () => {
					this.mouseDown = false
					this.resetHandlePosition()
				};
				document.addEventListener('touchend', touchEnd);
				
				
				document.addEventListener('touchmove', (event) => {
					if (!this.mouseDown)
						return
					this.update(event.touches[0].pageX, event.touches[0].pageY)
				});


	window.addEventListener('wheel', move, false);

	//randomElectron(0,100,1);
	if(random( 0, 10000 )<15){electronsOn[0]=true;}
	if(random( 0, 10000 )>15&&random( 0, 10000 )<30){electronsOn[1]=true;}
	if(random( 0, 10000 )>30&&random( 0, 10000 )<45){electronsOn[2]=true;}
	if(random( 0, 10000 )>45&&random( 0, 10000 )<60){electronsOn[3]=true;}
	if(random( 0, 10000 )>60&&random( 0, 10000 )<75){electronsOn[4]=true;}
	if(electronsOn[0]==true)electron(0,curve0,electronPosIndex0,electronObj0,path0,10,60,50,3);
	if(electronsOn[1]==true)electron(1,curve1,electronPosIndex1,electronObj1,path1,9,50,100,4);
	if(electronsOn[2]==true)electron(2,curve2,electronPosIndex2,electronObj2,path2,8,40,150,5);		
	if(electronsOn[3]==true)electron(3,curve3,electronPosIndex3,electronObj3,path3,7,30,200,6);
	if(electronsOn[4]==true)electron(4,curve4,electronPosIndex4,electronObj4,path4,6,20,250,7);

	
	if(scrolling>0.1 || scrolling <-0.1){

		for(let i=0;i<articles.length;i++){
			if(camera.position.y<=2 && camera.position.y>=-27)camera.position.y+=scrolling*0.045;
			
		}
		if(camera.position.y>2){
			camera.position.y=2;
			scrolling = 0;
		}
		else if(camera.position.y<-27){
			camera.position.y=-27;
			scrolling = 0;
		} else scrolling = scrolling * 0.9;}
	
	window.addEventListener( 'resize', onWindowResize );
	scene.traverse(nonBloomed);
	composer.render();
	scene.traverse(restoreMaterial);
	finalComposer.render();
	requestAnimationFrame( animate );
	//stats.update();

	

}
/*const stats = new Stats();
stats.showPanel(3);
document.body.appendChild(stats.dom);*/

animate();


