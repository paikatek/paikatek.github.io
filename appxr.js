import * as THREE from './libs/three/three.module.js';
import { VRButton } from './libs/three/jsm/VRButton.js';
import { GLTFLoader } from './libs/three/jsm/GLTFLoader.js';
import { RGBELoader } from './libs/three/jsm/RGBELoader.js';
import { OrbitControls } from './libs/three/jsm/OrbitControls.js';
import { LoadingBar } from './libs/LoadingBar.js';
//import { LightShadow } from './libs/lights/LightShadow.js';

let loadedGltfRes= false;
let childrenNames = new Array;
let childrenOrigPos = new Array;
let childrenExplodePos = new Array;
let showChildOrigPosOnce = true;
let clock = new THREE.Clock();
const epicenter = new THREE.Mesh;
let epicenterHand;
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
        this.camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.01, 900 );
		this.camera.position.set( 0, 4, 14 );
        
		this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0xaaaaaa );

        const ambient = new THREE.HemisphereLight(0xFFFFFF,0x10FF10, 0.5);
		this.scene.add(ambient);
        
        const light = new THREE.DirectionalLight( 0xFFFFFF, 5);
        light.position.set( 40, 90, 60);
        light.castShadow = true;
        light.shadow.mapSize.width=4096;
        light.shadow.mapSize.height=4096;
        light.shadow.camera.near = 0.5; // default
        light.shadow.camera.far = 500; // default
        light.shadow.bias = -0.00007;
        this.scene.add(light);    
    }

    rendererSetup(container){
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true } );
		this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.physicallyCorrectLights = true;
        this.renderer.shadowMap.enabled = true;
		this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        //this.renderer.shadowMap.needsUpdate= true;
        container.appendChild( this.renderer.domElement );
        //this.renderer.shadowMap.autoUpdate = true;
   
        //this.lightShadow = new LightShadow(this.camera);
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
                        child.material= new THREE.MeshPhongMaterial;
                        child.material.color.set(0x8C5303);
                        child.material.emissive.set(0x3E2B10);
                        child.castShadow = true;
                        child.receiveShadow = true;
                        let nameInd= new String(child.name).substring(0, 2);
                        let nameVal = new Int16Array;
                        nameVal=parseInt(nameInd, 10);
                        childrenNames.push([nameVal,child.name,i]);

                        i++;
                    }   
                });
               childrenNames.sort(function(a,b){
                    return a[0] - b[0];
                });

                //for(let j=0;j<childrenNames.length;j++){console.log(childrenNames[j][0]," > ",childrenNames[j][1]," > ",childrenNames[j][2]);}

                loadedGltfRes = true;

                self.gltf = gltf.scene;
 
                self.scene.add(gltf.scene);

                let child;
                let childrenIndexes = [
                    {color: 0x070707, index: 70},
                    {color: 0x070707, index: 72},
                    {color: 0x070707, index: 73},

                    {color: 0xFFFFFF, index: 71},
                    {color: 0xFFFFFF, index: 74},
                    {color: 0xFFFFFF, index: 75},

                    {color: 0x5080FF, index: 76},
                    ]; 

                childrenIndexes.forEach((childIndex) =>{                
                    child = gltf.scene.children[childIndex.index];
                    child.material = new THREE.MeshStandardMaterial;
                    child.material.color.set(childIndex.color);
                    child.material.side = THREE.DoubleSide;
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
        bb.material = new THREE.MeshPhongMaterial({color:0xFF1111})
        showChildOrigPosOnce=false;
        epicenter.add(this.gltf);
        this.scene.add(epicenter);
        this.scene.add(bb);
    }

    explodeGLTF(){

        let cloneHand;
        let rotation;
        let transX;
        let transZ;
        elewSidesCopies(false);
        elewFrBkCopies(true);
        elewSidesCopies(true);
        elewFrBkCopies(false);

        letExplode();


        function toCopy(index){
            let clone = new THREE.Mesh;
            clone.copy(epicenterHand.children[index],true);
            epicenterHand.add(clone);
            childrenNames.push([childrenNames.length,"77_elew",childrenNames.length]);
            cloneHand = epicenterHand.children[epicenterHand.children.length-1];
        }


        function leftRightTrans(rotation,transZ,j){
            cloneHand.rotateY(rotation);
            cloneHand.position.z+=transZ;
            if(j>0){cloneHand.position.y+=(j*0.072);}   
        }


        function elewSidesCopies(flip){    
            if(!flip){
                rotation = 0;
                transZ = 0;
            }
            else {
                rotation = Math.PI;
                transZ = -2.984;
                toCopy(76);
                leftRightTrans(rotation,transZ,0);
            }
            for(let j=1;j<18;j++){
                toCopy(76);
                leftRightTrans(rotation,transZ,j);
            }
            for(let j=18;j<24;j++){
                toCopy(76);
                leftRightTrans(rotation,transZ,j);
                cloneHand.position.x+=0.98;
                cloneHand.scale.set(0.51,0.1,0.005);
                let clone2 = new THREE.Mesh;
                clone2.copy(cloneHand,true);
                clone2.position.x=-0.98;
                epicenterHand.add(clone2);
                childrenNames.push([childrenNames.length,"77_elew",childrenNames.length]);
            }
            for(let j=24;j<29;j++){
                toCopy(76);
                leftRightTrans(rotation,transZ,j);
            }}
    

        function backFrontTrans(rotation,transX, transZ, j){
            cloneHand.rotateY(rotation);
            cloneHand.position.y+=(j*0.072);
            cloneHand.position.x+=transX;
            cloneHand.position.z+=transZ;
        }
        

        function elewFrBkCopies(flip){    
            rotation = -Math.PI/2;
            transX = -1.494;
            if(flip==false){
                rotation = Math.PI/2;
                transX = 1.494;
                for(let j=0;j<27;j++){
                toCopy(76);
                backFrontTrans(rotation,transX,-2.496 , j);
                cloneHand.scale.set(0.5,0.1,0.005);
                let clone2 = new THREE.Mesh;
                clone2.copy(cloneHand,true);
                clone2.position.z+=2;
                epicenterHand.add(clone2);
                childrenNames.push([childrenNames.length,"77_elew",childrenNames.length]);
            }}
            else{
                for(let j=0;j<27;j++){
                    toCopy(76);
                    backFrontTrans(rotation,transX,-1.491, j);
                    cloneHand.scale.set(1.495,0.1,0.005);
            }}
            for(let j=27;j<29;j++){
                toCopy(76);
                backFrontTrans(rotation,transX,-1.491, j);
                cloneHand.scale.set(1.495,0.1,0.005);
            }
            for(let j=29;j<41;j++){
                    toCopy(76);
                    backFrontTrans(rotation,transX,-1.491, j);
                    cloneHand.scale.set(1.33-(-0.125*(30-j)),0.1,0.005);
                }
            }


        function letExplode(){
            for(let i=0;i<childrenNames.length;i++){
                let vecCh = new THREE.Vector3;
                let vecChNew= new THREE.Vector3;
                let vecImp = new THREE.Vector3;
                epicenterHand.getWorldPosition ( vecImp );
                epicenterHand.children[i].getWorldPosition ( vecCh );
                childrenOrigPos[i]=vecCh;
                vecImp.y-=10;
                let diff = new THREE.Vector3;
                diff.subVectors ( vecCh, vecImp );
                diff.multiplyScalar ( 4);
                diff.addVectors ( vecCh, diff );
                epicenterHand.children[i].position.set( diff.x,diff.y,diff.z );
                epicenterHand.children[i].getWorldPosition ( vecChNew );
                childrenExplodePos[i]=vecChNew;
                explodeImplodeOrigDist[i] = vecChNew.distanceTo( vecCh );}
        }}



    implodeGLTF(){
        let interval=0.18;
        let startingTime=0.8;  
        deltaTime=clock.elapsedTime-deltaTime; 
        //console.log(clock.elapsedTime);
        for(let i=0;i<childrenNames.length;i++){
            if (i>75){interval=0.12; startingTime=6; };
            let order = childrenNames[i][2];
            if(clock.elapsedTime>((i*interval)+startingTime)){  
            let vecCh= new THREE.Vector3;
            epicenterHand.children[order].getWorldPosition ( vecCh );
            let diff = new THREE.Vector3;
            diff.subVectors ( vecCh, childrenOrigPos[order] );
            let dist = vecCh.distanceTo( childrenOrigPos[order] );

            if(dist>=0.1){diff.multiplyScalar ( 15*deltaTime);}
            if(dist<0.1 && dist>0){diff.multiplyScalar (5*deltaTime);}
            if(dist<0){diff.multiplyScalar ( 1);}
            diff.subVectors ( vecCh, diff );
            epicenterHand.children[order].position.set( diff.x,diff.y,diff.z );
    }}
    deltaTime=clock.elapsedTime;}



    initScene(){
        if(loadedGltfRes==true && showChildOrigPosOnce==true){
            this.setupVR();
            this.epicenterCreate();
            this.explodeGLTF();
            clock.startTime;
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
