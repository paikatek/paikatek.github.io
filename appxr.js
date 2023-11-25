import * as THREE from './libs/three/three.module.js';
import { VRButton } from './libs/three/jsm/VRButton.js';
import { GLTFLoader } from './libs/three/jsm/GLTFLoader.js';
import { RGBELoader } from './libs/three/jsm/RGBELoader.js';
import { OrbitControls } from './libs/three/jsm/OrbitControls.js';
import { LoadingBar } from './libs/LoadingBar.js';

let loadedGltfRes= false;
let childrenOrigPos = new Array;
let childrenExplodePos = new Array;
let showChildOrigPosOnce = true;
let clock = new THREE.Clock();
const epicenter = new THREE.Mesh;
let epicenterHand;
let elapsedTimeReset=0;
let deltaTime=0;

let explodeImplodeOrigDist = new Array;

class Appxr{
    	constructor(){
		const container = document.createElement( 'div' );
		document.body.appendChild( container );
               
        this.worldConstruct();
			
        this.rendererSetup(container);

		this.setEnvironment('./assets/field_sky.hdr');
		
        this.loadingBar = new LoadingBar();
         
        this.loadGLTF('./assets/', 'toolhouse.glb');
 
        this.controls = new OrbitControls( this.camera, this.renderer.domElement );
        this.controls.target.set(0, 3.5, 0);
        this.controls.update();
        
        window.addEventListener('resize', this.resize.bind(this) );
	}	
    
    worldConstruct(){
        this.camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 100 );
		this.camera.position.set( 0, 4, 14 );
        
		this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0xaaaaaa );

        const ambient = new THREE.HemisphereLight(0xFFFFFF,0x10FF10, 0.2);
		this.scene.add(ambient);
        
        const light = new THREE.DirectionalLight( 0xFFFFFF, 5);
        light.position.set( 0.2, 1, 1);
        this.scene.add(light);    
    }

    rendererSetup(container){
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true } );
		this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.physicallyCorrectLights = true;
        container.appendChild( this.renderer.domElement );
    }
    
    setEnvironment(file){
        const loader = new RGBELoader().setDataType( THREE.UnsignedByteType );
        const pmremGenerator = new THREE.PMREMGenerator( this.renderer );
        pmremGenerator.compileEquirectangularShader();
        
        const self = this;
        
        loader.load( file , ( texture ) => {
          const envMap = pmremGenerator.fromEquirectangular( texture ).texture;
          pmremGenerator.dispose();

          self.scene.environment = envMap;

        }, undefined, (err)=>{
            console.error( 'An error occurred setting the environment');
        } );
    }
    
    loadGLTF(filePath , fileName){
        const loader = new GLTFLoader( ).setPath(filePath);
        const self = this;
		// Load a glTF resource
		loader.load(
			// resource URL
			fileName,
			// called when the resource is loaded
			function ( gltf ) {
                const bbox = new THREE.Box3().setFromObject( gltf.scene );
                //console.log(`min:${bbox.min.x.toFixed(2)},${bbox.min.y.toFixed(2)},${bbox.min.z.toFixed(2)} -  max:${bbox.max.x.toFixed(2)},${bbox.max.y.toFixed(2)},${bbox.max.z.toFixed(2)}`);
                let position = new THREE.Vector3();
                let i = 0;
                gltf.scene.traverse( ( child ) => {
                    if (child.isMesh){
                        child.material.color.set(0x8C5303);
                        child.material.emissive.set(0x2E1B00);
                        i++;
                    }
                   if(i==80){loadedGltfRes = true;}
                });
                
                self.gltf = gltf.scene;
                self.scene.add(gltf.scene);
                
                let child;
                let childrenIndexes = [
                    {color: 0x070707, index: 70},
                    {color: 0x070707, index: 73},
                    {color: 0x070707, index: 74},

                    {color: 0x2020FF, index: 72},
                    {color: 0x2020FF, index: 75},
                    {color: 0x2020FF, index: 76},
                    {color: 0x2020FF, index: 77},

                    {color: 0xFFFFFF, index: 71},
                    {color: 0xFFFFFF, index: 78},
                    {color: 0xFFFFFF, index: 79},
                    ]; 
                 
                childrenIndexes.forEach((childIndex) =>{                
                    child = gltf.scene.children[childIndex.index];
                    child.material = new THREE.MeshStandardMaterial;
                    child.material.color.set(childIndex.color);
                    child.material.side = THREE.DoubleSide
                });
 
                self.loadingBar.visible = false;
				self.renderer.setAnimationLoop( self.render.bind(self));
			},

			// called while loading is progressing
			function ( xhr ) {
				self.loadingBar.progress = (xhr.loaded / xhr.total);
			},

			// called when loading has errors
			function ( error ) {
				console.log( 'An error happened' );
			});

            this.setupVR();
    }
    
    setupVR(){
        this.renderer.xr.enabled = true;
        document.body.appendChild( VRButton.createButton( this.renderer ) );
    }

    resize(){
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize( window.innerWidth, window.innerHeight );  
    }
    
    random( min, max ){
        return Math.random() * (max-min) + min;
    }

    deltaTime(){
        return clock.getDelta();
    }

    epicenterCreate(){
        epicenterHand = this.scene.children[2];
        epicenter.geometry= new THREE.SphereBufferGeometry(0.003,12,12);
        let bb=new THREE.Mesh;
        bb.geometry = new THREE.BoxBufferGeometry(1,1,1,1,1,1);
        bb.position.set( 3, 0, 3);
        bb.material = new THREE.MeshStandardMaterial({color:0xFF1111})
        showChildOrigPosOnce=false;
        epicenter.add(this.gltf);
        this.scene.add(epicenter);
        this.scene.add(bb);
    }

    explodeGLTF(){
        for(let i=0;i<80;i++){
            let vecCh = new THREE.Vector3;
            let vecChNew= new THREE.Vector3;
            let vecImp = new THREE.Vector3;
            epicenterHand.getWorldPosition ( vecImp );
            epicenterHand.children[i].getWorldPosition ( vecCh );
            childrenOrigPos[i]=vecCh;
            vecImp.y-=10;
            let diff = new THREE.Vector3;
            diff.subVectors ( vecCh, vecImp );
            diff.multiplyScalar ( 10);
            diff.addVectors ( vecCh, diff );
            epicenterHand.children[i].position.set( diff.x,diff.y,diff.z );
            epicenterHand.children[i].getWorldPosition ( vecChNew );
            childrenExplodePos[i]=vecChNew;
            explodeImplodeOrigDist[i] = vecChNew.distanceTo( vecCh );
        }
    }

    implodeGLTF(){
        let animElemStart=false;
        let interval=3;
        let startingTime=0.8;  
        deltaTime=clock.elapsedTime-deltaTime; 
        for(let i=0;i<80;i++){
            if(clock.elapsedTime>((i/interval)+startingTime)){  
            let vecCh= new THREE.Vector3;
            epicenterHand.children[i].getWorldPosition ( vecCh );
            let diff = new THREE.Vector3;
            diff.subVectors ( vecCh, childrenOrigPos[i] );
            let dist = vecCh.distanceTo( childrenOrigPos[i] );
            if(dist>=0.1){diff.multiplyScalar ( 15*deltaTime);console.log(deltaTime);}
            if(dist<0.1 && dist>0){diff.multiplyScalar (5*deltaTime);console.log();}
            if(dist<0){diff.multiplyScalar ( 1);}
            diff.subVectors ( vecCh, diff );
            epicenterHand.children[i].position.set( diff.x,diff.y,diff.z );
    }}
    deltaTime=clock.elapsedTime;}



    initScene(){
        if(loadedGltfRes==true && showChildOrigPosOnce==true){
            this.epicenterCreate();
            this.explodeGLTF();
            clock.startTime;
            this.scene.children[2].material.alpha=0;
            this.scene.children[3].visible=false; }}

    updateState(){
        let child;
        let childrenIndexes;
        let deltaTime;
        this.deltaTime();
        this.initScene();
        this.implodeGLTF();
        deltaTime=clock.elapsedTime;}

	render() {   
        this.updateState();  
        this.renderer.render( this.scene, this.camera );}
    }
export { Appxr };