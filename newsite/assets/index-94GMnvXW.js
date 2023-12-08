(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $s="158",vu=0,Ro=1,xu=2,vc=1,Su=2,An=3,Un=0,Ct=1,ln=2,Rn=0,Ui=1,Ts=2,Co=3,Uo=4,Mu=5,ni=100,yu=101,Eu=102,Lo=103,Po=104,Tu=200,bu=201,Au=202,wu=203,bs=204,As=205,Ru=206,Cu=207,Uu=208,Lu=209,Pu=210,Du=211,Iu=212,Fu=213,Nu=214,Ou=0,Bu=1,Gu=2,ua=3,ku=4,zu=5,Hu=6,Vu=7,xc=0,Wu=1,Xu=2,Wn=0,Sc=1,Mc=2,eo=3,yc=4,Yu=5,Ec=300,Pi=301,Di=302,ws=303,Rs=304,Sa=306,Cs=1e3,cn=1001,Us=1002,At=1003,Do=1004,ka=1005,Ot=1006,qu=1007,Sr=1008,Xn=1009,ju=1010,Ku=1011,to=1012,Tc=1013,Hn=1014,Vn=1015,Cn=1016,bc=1017,Ac=1018,ri=1020,Zu=1021,un=1023,Ju=1024,Qu=1025,ai=1026,Ii=1027,$u=1028,wc=1029,ef=1030,Rc=1031,Cc=1033,za=33776,Ha=33777,Va=33778,Wa=33779,Io=35840,Fo=35841,No=35842,Oo=35843,tf=36196,Bo=37492,Go=37496,ko=37808,zo=37809,Ho=37810,Vo=37811,Wo=37812,Xo=37813,Yo=37814,qo=37815,jo=37816,Ko=37817,Zo=37818,Jo=37819,Qo=37820,$o=37821,Xa=36492,el=36494,tl=36495,nf=36283,nl=36284,il=36285,rl=36286,Uc=3e3,si=3001,rf=3200,Lc=3201,Pc=0,af=1,Kt="",dt="srgb",Ln="srgb-linear",no="display-p3",Ma="display-p3-linear",fa="linear",it="srgb",ha="rec709",da="p3",fi=7680,al=519,sf=512,of=513,lf=514,cf=515,uf=516,ff=517,hf=518,df=519,sl=35044,ol="300 es",Ls=1035,wn=2e3,pa=2001;class Gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const n=r.slice(0);for(let i=0,o=n.length;i<o;i++)n[i].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ya=Math.PI/180,Ps=180/Math.PI;function Er(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Et[a&255]+Et[a>>8&255]+Et[a>>16&255]+Et[a>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[r&255]+Et[r>>8&255]+Et[r>>16&255]+Et[r>>24&255]).toLowerCase()}function wt(a,e,t){return Math.max(e,Math.min(t,a))}function pf(a,e){return(a%e+e)%e}function qa(a,e,t){return(1-t)*a+t*e}function ll(a){return(a&a-1)===0&&a!==0}function Ds(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function sr(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Nt(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(wt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),i=this.x-e.x,o=this.y-e.y;return this.x=i*r-o*n+e.x,this.y=i*n+o*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,r,n,i,o,s,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,n,i,o,s,l,c)}set(e,t,r,n,i,o,s,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=s,u[3]=t,u[4]=i,u[5]=l,u[6]=r,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,o=r[0],s=r[3],l=r[6],c=r[1],u=r[4],f=r[7],h=r[2],p=r[5],g=r[8],_=n[0],d=n[3],m=n[6],E=n[1],v=n[4],S=n[7],T=n[2],U=n[5],w=n[8];return i[0]=o*_+s*E+l*T,i[3]=o*d+s*v+l*U,i[6]=o*m+s*S+l*w,i[1]=c*_+u*E+f*T,i[4]=c*d+u*v+f*U,i[7]=c*m+u*S+f*w,i[2]=h*_+p*E+g*T,i[5]=h*d+p*v+g*U,i[8]=h*m+p*S+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*s*c-r*i*u+r*s*l+n*i*c-n*o*l}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=u*o-s*c,h=s*l-u*i,p=c*i-o*l,g=t*f+r*h+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(n*c-u*r)*_,e[2]=(s*r-n*o)*_,e[3]=h*_,e[4]=(u*t-n*l)*_,e[5]=(n*i-s*t)*_,e[6]=p*_,e[7]=(r*l-c*t)*_,e[8]=(o*t-r*i)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,i,o,s){const l=Math.cos(i),c=Math.sin(i);return this.set(r*l,r*c,-r*(l*o+c*s)+o+e,-n*c,n*l,-n*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(ja.makeScale(e,t)),this}rotate(e){return this.premultiply(ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ja=new Je;function Dc(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Mr(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function mf(){const a=Mr("canvas");return a.style.display="block",a}const cl={};function mr(a){a in cl||(cl[a]=!0,console.warn(a))}const ul=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fl=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ir={[Ln]:{transfer:fa,primaries:ha,toReference:a=>a,fromReference:a=>a},[dt]:{transfer:it,primaries:ha,toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[Ma]:{transfer:fa,primaries:da,toReference:a=>a.applyMatrix3(fl),fromReference:a=>a.applyMatrix3(ul)},[no]:{transfer:it,primaries:da,toReference:a=>a.convertSRGBToLinear().applyMatrix3(fl),fromReference:a=>a.applyMatrix3(ul).convertLinearToSRGB()}},gf=new Set([Ln,Ma]),$e={enabled:!0,_workingColorSpace:Ln,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(a){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!a},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!gf.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const r=Ir[e].toReference,n=Ir[t].fromReference;return n(r(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this._workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this._workingColorSpace)},getPrimaries:function(a){return Ir[a].primaries},getTransfer:function(a){return a===Kt?fa:Ir[a].transfer}};function Li(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ka(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let hi;class Ic{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hi===void 0&&(hi=Mr("canvas")),hi.width=e.width,hi.height=e.height;const r=hi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=hi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mr("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),i=n.data;for(let o=0;o<i.length;o++)i[o]=Li(i[o]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Li(t[r]/255)*255):t[r]=Li(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _f=0;class Fc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Er(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let i;if(Array.isArray(n)){i=[];for(let o=0,s=n.length;o<s;o++)n[o].isDataTexture?i.push(Za(n[o].image)):i.push(Za(n[o]))}else i=Za(n);r.url=i}return t||(e.images[this.uuid]=r),r}}function Za(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Ic.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vf=0;class Ut extends Gi{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,r=cn,n=cn,i=Ot,o=Sr,s=un,l=Xn,c=Ut.DEFAULT_ANISOTROPY,u=Kt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Er(),this.name="",this.source=new Fc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=i,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===si?dt:Kt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ec)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cs:e.x=e.x-Math.floor(e.x);break;case cn:e.x=e.x<0?0:1;break;case Us:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cs:e.y=e.y-Math.floor(e.y);break;case cn:e.y=e.y<0?0:1;break;case Us:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===dt?si:Uc}set encoding(e){mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===si?dt:Kt}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Ec;Ut.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,r=0,n=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=this.w,o=e.elements;return this.x=o[0]*t+o[4]*r+o[8]*n+o[12]*i,this.y=o[1]*t+o[5]*r+o[9]*n+o[13]*i,this.z=o[2]*t+o[6]*r+o[10]*n+o[14]*i,this.w=o[3]*t+o[7]*r+o[11]*n+o[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,i;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],_=l[2],d=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+d)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(p+1)/2,T=(m+1)/2,U=(u+h)/4,w=(f+_)/4,I=(g+d)/4;return v>S&&v>T?v<.01?(r=0,n=.707106781,i=.707106781):(r=Math.sqrt(v),n=U/r,i=w/r):S>T?S<.01?(r=.707106781,n=0,i=.707106781):(n=Math.sqrt(S),r=U/n,i=I/n):T<.01?(r=.707106781,n=.707106781,i=0):(i=Math.sqrt(T),r=w/i,n=I/i),this.set(r,n,i,t),this}let E=Math.sqrt((d-g)*(d-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(d-g)/E,this.y=(f-_)/E,this.z=(h-u)/E,this.w=Math.acos((c+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xf extends Gi{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const n={width:e,height:t,depth:1};r.encoding!==void 0&&(mr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===si?dt:Kt),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new Ut(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Fc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fn extends xf{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Nc extends Ut{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=At,this.minFilter=At,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sf extends Ut{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=At,this.minFilter=At,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tr{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,i,o,s){let l=r[n+0],c=r[n+1],u=r[n+2],f=r[n+3];const h=i[o+0],p=i[o+1],g=i[o+2],_=i[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(s===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==p||u!==g){let d=1-s;const m=l*h+c*p+u*g+f*_,E=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const T=Math.sqrt(v),U=Math.atan2(T,m*E);d=Math.sin(d*U)/T,s=Math.sin(s*U)/T}const S=s*E;if(l=l*d+h*S,c=c*d+p*S,u=u*d+g*S,f=f*d+_*S,d===1-s){const T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,r,n,i,o){const s=r[n],l=r[n+1],c=r[n+2],u=r[n+3],f=i[o],h=i[o+1],p=i[o+2],g=i[o+3];return e[t]=s*g+u*f+l*p-c*h,e[t+1]=l*g+u*h+c*f-s*p,e[t+2]=c*g+u*p+s*h-l*f,e[t+3]=u*g-s*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const r=e._x,n=e._y,i=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(r/2),u=s(n/2),f=s(i/2),h=l(r/2),p=l(n/2),g=l(i/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],i=t[8],o=t[1],s=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=r+s+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(i-c)*p,this._z=(o-n)*p}else if(r>s&&r>f){const p=2*Math.sqrt(1+r-s-f);this._w=(u-l)/p,this._x=.25*p,this._y=(n+o)/p,this._z=(i+c)/p}else if(s>f){const p=2*Math.sqrt(1+s-r-f);this._w=(i-c)/p,this._x=(n+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-r-s);this._w=(o-n)/p,this._x=(i+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,i=e._z,o=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=r*u+o*s+n*c-i*l,this._y=n*u+o*l+i*s-r*c,this._z=i*u+o*c+r*l-n*s,this._w=o*u-r*s-n*l-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,n=this._y,i=this._z,o=this._w;let s=o*e._w+r*e._x+n*e._y+i*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=r,this._y=n,this._z=i,this;const l=1-s*s;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*r+t*this._x,this._y=p*n+t*this._y,this._z=p*i+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=r*f+this._x*h,this._y=n*f+this._y*h,this._z=i*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),n=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(n),r*Math.sin(i),r*Math.cos(i),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,r=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6]*n,this.y=i[1]*t+i[4]*r+i[7]*n,this.z=i[2]*t+i[5]*r+i[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=e.elements,o=1/(i[3]*t+i[7]*r+i[11]*n+i[15]);return this.x=(i[0]*t+i[4]*r+i[8]*n+i[12])*o,this.y=(i[1]*t+i[5]*r+i[9]*n+i[13])*o,this.z=(i[2]*t+i[6]*r+i[10]*n+i[14])*o,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,i=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*n-s*r),u=2*(s*t-i*n),f=2*(i*r-o*t);return this.x=t+l*c+o*f-s*u,this.y=r+l*u+s*c-i*f,this.z=n+l*f+i*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[4]*r+i[8]*n,this.y=i[1]*t+i[5]*r+i[9]*n,this.z=i[2]*t+i[6]*r+i[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,i=e.z,o=t.x,s=t.y,l=t.z;return this.x=n*l-i*s,this.y=i*o-r*l,this.z=r*s-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ja.copy(this).projectOnVector(e),this.sub(Ja)}reflect(e){return this.sub(Ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(wt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ja=new X,hl=new Tr;class ki{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const i=r.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=i.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,rn):rn.fromBufferAttribute(i,o),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fr.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Fr.copy(r.boundingBox)),Fr.applyMatrix4(e.matrixWorld),this.union(Fr)}const n=e.children;for(let i=0,o=n.length;i<o;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),Nr.subVectors(this.max,or),di.subVectors(e.a,or),pi.subVectors(e.b,or),mi.subVectors(e.c,or),Nn.subVectors(pi,di),On.subVectors(mi,pi),Kn.subVectors(di,mi);let t=[0,-Nn.z,Nn.y,0,-On.z,On.y,0,-Kn.z,Kn.y,Nn.z,0,-Nn.x,On.z,0,-On.x,Kn.z,0,-Kn.x,-Nn.y,Nn.x,0,-On.y,On.x,0,-Kn.y,Kn.x,0];return!Qa(t,di,pi,mi,Nr)||(t=[1,0,0,0,1,0,0,0,1],!Qa(t,di,pi,mi,Nr))?!1:(Or.crossVectors(Nn,On),t=[Or.x,Or.y,Or.z],Qa(t,di,pi,mi,Nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xn=[new X,new X,new X,new X,new X,new X,new X,new X],rn=new X,Fr=new ki,di=new X,pi=new X,mi=new X,Nn=new X,On=new X,Kn=new X,or=new X,Nr=new X,Or=new X,Zn=new X;function Qa(a,e,t,r,n){for(let i=0,o=a.length-3;i<=o;i+=3){Zn.fromArray(a,i);const s=n.x*Math.abs(Zn.x)+n.y*Math.abs(Zn.y)+n.z*Math.abs(Zn.z),l=e.dot(Zn),c=t.dot(Zn),u=r.dot(Zn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const Mf=new ki,lr=new X,$a=new X;class br{constructor(e=new X,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Mf.setFromPoints(e).getCenter(r);let n=0;for(let i=0,o=e.length;i<o;i++)n=Math.max(n,r.distanceToSquared(e[i]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lr.subVectors(e,this.center);const t=lr.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(lr,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($a.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lr.copy(e.center).add($a)),this.expandByPoint(lr.copy(e.center).sub($a))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new X,es=new X,Br=new X,Bn=new X,ts=new X,Gr=new X,ns=new X;class io{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){es.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),Bn.copy(this.origin).sub(es);const i=e.distanceTo(t)*.5,o=-this.direction.dot(Br),s=Bn.dot(this.direction),l=-Bn.dot(Br),c=Bn.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-s,h=o*s-l,g=i*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,p=f*(f+o*h+2*s)+h*(o*f+h+2*l)+c}else h=i,f=Math.max(0,-(o*h+s)),p=-f*f+h*(h+2*l)+c;else h=-i,f=Math.max(0,-(o*h+s)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*i+s)),h=f>0?-i:Math.min(Math.max(-i,-l),i),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-i,-l),i),p=h*(h+2*l)+c):(f=Math.max(0,-(o*i+s)),h=f>0?i:Math.min(Math.max(-i,-l),i),p=-f*f+h*(h+2*l)+c);else h=o>0?-i:i,f=Math.max(0,-(o*h+s)),p=-f*f+h*(h+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(es).addScaledVector(Br,h),p}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);const r=Sn.dot(this.direction),n=Sn.dot(Sn)-r*r,i=e.radius*e.radius;if(n>i)return null;const o=Math.sqrt(i-n),s=r-o,l=r+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,i,o,s,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(r=(e.min.x-h.x)*c,n=(e.max.x-h.x)*c):(r=(e.max.x-h.x)*c,n=(e.min.x-h.x)*c),u>=0?(i=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(i=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),r>o||i>n||((i>r||isNaN(r))&&(r=i),(o<n||isNaN(n))&&(n=o),f>=0?(s=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(s=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),r>l||s>n)||((s>r||r!==r)&&(r=s),(l<n||n!==n)&&(n=l),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,r,n,i){ts.subVectors(t,e),Gr.subVectors(r,e),ns.crossVectors(ts,Gr);let o=this.direction.dot(ns),s;if(o>0){if(n)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Bn.subVectors(this.origin,e);const l=s*this.direction.dot(Gr.crossVectors(Bn,Gr));if(l<0)return null;const c=s*this.direction.dot(ts.cross(Bn));if(c<0||l+c>o)return null;const u=-s*Bn.dot(ns);return u<0?null:this.at(u/o,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,r,n,i,o,s,l,c,u,f,h,p,g,_,d){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,n,i,o,s,l,c,u,f,h,p,g,_,d)}set(e,t,r,n,i,o,s,l,c,u,f,h,p,g,_,d){const m=this.elements;return m[0]=e,m[4]=t,m[8]=r,m[12]=n,m[1]=i,m[5]=o,m[9]=s,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=p,m[7]=g,m[11]=_,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,n=1/gi.setFromMatrixColumn(e,0).length(),i=1/gi.setFromMatrixColumn(e,1).length(),o=1/gi.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*i,t[5]=r[5]*i,t[6]=r[6]*i,t[7]=0,t[8]=r[8]*o,t[9]=r[9]*o,t[10]=r[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,i=e.z,o=Math.cos(r),s=Math.sin(r),l=Math.cos(n),c=Math.sin(n),u=Math.cos(i),f=Math.sin(i);if(e.order==="XYZ"){const h=o*u,p=o*f,g=s*u,_=s*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=h-_*c,t[9]=-s*l,t[2]=_-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,_=c*f;t[0]=h+_*s,t[4]=g*s-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-s,t[2]=p*s-g,t[6]=_+h*s,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,_=c*f;t[0]=h-_*s,t[4]=-o*f,t[8]=g+p*s,t[1]=p+g*s,t[5]=o*u,t[9]=_-h*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=s*u,_=s*f;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=p*c-g,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=s*l,_=s*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-s*u,t[2]=-c*u,t[6]=p*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=s*l,_=s*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=s*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yf,e,Ef)}lookAt(e,t,r){const n=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Gn.crossVectors(r,zt),Gn.lengthSq()===0&&(Math.abs(r.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Gn.crossVectors(r,zt)),Gn.normalize(),kr.crossVectors(zt,Gn),n[0]=Gn.x,n[4]=kr.x,n[8]=zt.x,n[1]=Gn.y,n[5]=kr.y,n[9]=zt.y,n[2]=Gn.z,n[6]=kr.z,n[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,o=r[0],s=r[4],l=r[8],c=r[12],u=r[1],f=r[5],h=r[9],p=r[13],g=r[2],_=r[6],d=r[10],m=r[14],E=r[3],v=r[7],S=r[11],T=r[15],U=n[0],w=n[4],I=n[8],M=n[12],b=n[1],q=n[5],P=n[9],B=n[13],R=n[2],G=n[6],k=n[10],Y=n[14],ee=n[3],V=n[7],N=n[11],y=n[15];return i[0]=o*U+s*b+l*R+c*ee,i[4]=o*w+s*q+l*G+c*V,i[8]=o*I+s*P+l*k+c*N,i[12]=o*M+s*B+l*Y+c*y,i[1]=u*U+f*b+h*R+p*ee,i[5]=u*w+f*q+h*G+p*V,i[9]=u*I+f*P+h*k+p*N,i[13]=u*M+f*B+h*Y+p*y,i[2]=g*U+_*b+d*R+m*ee,i[6]=g*w+_*q+d*G+m*V,i[10]=g*I+_*P+d*k+m*N,i[14]=g*M+_*B+d*Y+m*y,i[3]=E*U+v*b+S*R+T*ee,i[7]=E*w+v*q+S*G+T*V,i[11]=E*I+v*P+S*k+T*N,i[15]=E*M+v*B+S*Y+T*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],i=e[12],o=e[1],s=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],_=e[7],d=e[11],m=e[15];return g*(+i*l*f-n*c*f-i*s*h+r*c*h+n*s*p-r*l*p)+_*(+t*l*p-t*c*h+i*o*h-n*o*p+n*c*u-i*l*u)+d*(+t*c*f-t*s*p-i*o*f+r*o*p+i*s*u-r*c*u)+m*(-n*s*u-t*l*f+t*s*h+n*o*f-r*o*h+r*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],_=e[13],d=e[14],m=e[15],E=f*d*c-_*h*c+_*l*p-s*d*p-f*l*m+s*h*m,v=g*h*c-u*d*c-g*l*p+o*d*p+u*l*m-o*h*m,S=u*_*c-g*f*c+g*s*p-o*_*p-u*s*m+o*f*m,T=g*f*l-u*_*l-g*s*h+o*_*h+u*s*d-o*f*d,U=t*E+r*v+n*S+i*T;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/U;return e[0]=E*w,e[1]=(_*h*i-f*d*i-_*n*p+r*d*p+f*n*m-r*h*m)*w,e[2]=(s*d*i-_*l*i+_*n*c-r*d*c-s*n*m+r*l*m)*w,e[3]=(f*l*i-s*h*i-f*n*c+r*h*c+s*n*p-r*l*p)*w,e[4]=v*w,e[5]=(u*d*i-g*h*i+g*n*p-t*d*p-u*n*m+t*h*m)*w,e[6]=(g*l*i-o*d*i-g*n*c+t*d*c+o*n*m-t*l*m)*w,e[7]=(o*h*i-u*l*i+u*n*c-t*h*c-o*n*p+t*l*p)*w,e[8]=S*w,e[9]=(g*f*i-u*_*i-g*r*p+t*_*p+u*r*m-t*f*m)*w,e[10]=(o*_*i-g*s*i+g*r*c-t*_*c-o*r*m+t*s*m)*w,e[11]=(u*s*i-o*f*i-u*r*c+t*f*c+o*r*p-t*s*p)*w,e[12]=T*w,e[13]=(u*_*n-g*f*n+g*r*h-t*_*h-u*r*d+t*f*d)*w,e[14]=(g*s*n-o*_*n-g*r*l+t*_*l+o*r*d-t*s*d)*w,e[15]=(o*f*n-u*s*n+u*r*l-t*f*l-o*r*h+t*s*h)*w,this}scale(e){const t=this.elements,r=e.x,n=e.y,i=e.z;return t[0]*=r,t[4]*=n,t[8]*=i,t[1]*=r,t[5]*=n,t[9]*=i,t[2]*=r,t[6]*=n,t[10]*=i,t[3]*=r,t[7]*=n,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),i=1-r,o=e.x,s=e.y,l=e.z,c=i*o,u=i*s;return this.set(c*o+r,c*s-n*l,c*l+n*s,0,c*s+n*l,u*s+r,u*l-n*o,0,c*l-n*s,u*l+n*o,i*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,i,o){return this.set(1,r,i,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,i=t._x,o=t._y,s=t._z,l=t._w,c=i+i,u=o+o,f=s+s,h=i*c,p=i*u,g=i*f,_=o*u,d=o*f,m=s*f,E=l*c,v=l*u,S=l*f,T=r.x,U=r.y,w=r.z;return n[0]=(1-(_+m))*T,n[1]=(p+S)*T,n[2]=(g-v)*T,n[3]=0,n[4]=(p-S)*U,n[5]=(1-(h+m))*U,n[6]=(d+E)*U,n[7]=0,n[8]=(g+v)*w,n[9]=(d-E)*w,n[10]=(1-(h+_))*w,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;let i=gi.set(n[0],n[1],n[2]).length();const o=gi.set(n[4],n[5],n[6]).length(),s=gi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(i=-i),e.x=n[12],e.y=n[13],e.z=n[14],an.copy(this);const c=1/i,u=1/o,f=1/s;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=f,an.elements[9]*=f,an.elements[10]*=f,t.setFromRotationMatrix(an),r.x=i,r.y=o,r.z=s,this}makePerspective(e,t,r,n,i,o,s=wn){const l=this.elements,c=2*i/(t-e),u=2*i/(r-n),f=(t+e)/(t-e),h=(r+n)/(r-n);let p,g;if(s===wn)p=-(o+i)/(o-i),g=-2*o*i/(o-i);else if(s===pa)p=-o/(o-i),g=-o*i/(o-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,n,i,o,s=wn){const l=this.elements,c=1/(t-e),u=1/(r-n),f=1/(o-i),h=(t+e)*c,p=(r+n)*u;let g,_;if(s===wn)g=(o+i)*f,_=-2*f;else if(s===pa)g=i*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const gi=new X,an=new ct,yf=new X(0,0,0),Ef=new X(1,1,1),Gn=new X,kr=new X,zt=new X,dl=new ct,pl=new Tr;class ya{constructor(e=0,t=0,r=0,n=ya.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,i=n[0],o=n[4],s=n[8],l=n[1],c=n[5],u=n[9],f=n[2],h=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(wt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,i)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,i),this._z=0);break;case"ZXY":this._x=Math.asin(wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,i)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(s,i)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return dl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dl,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pl.setFromEuler(this),this.setFromQuaternion(pl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ya.DEFAULT_ORDER="XYZ";class Ea{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Tf=0;const ml=new X,_i=new Tr,Mn=new ct,zr=new X,cr=new X,bf=new X,Af=new Tr,gl=new X(1,0,0),_l=new X(0,1,0),vl=new X(0,0,1),wf={type:"added"},Rf={type:"removed"};class pt extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=Er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new X,t=new ya,r=new Tr,n=new X(1,1,1);function i(){r.setFromEuler(t,!1)}function o(){t.setFromQuaternion(r,void 0,!1)}t._onChange(i),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ct},normalMatrix:{value:new Je}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.multiply(_i),this}rotateOnWorldAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.premultiply(_i),this}rotateX(e){return this.rotateOnAxis(gl,e)}rotateY(e){return this.rotateOnAxis(_l,e)}rotateZ(e){return this.rotateOnAxis(vl,e)}translateOnAxis(e,t){return ml.copy(e).applyQuaternion(this.quaternion),this.position.add(ml.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gl,e)}translateY(e){return this.translateOnAxis(_l,e)}translateZ(e){return this.translateOnAxis(vl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?zr.copy(e):zr.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(cr,zr,this.up):Mn.lookAt(zr,cr,this.up),this.quaternion.setFromRotationMatrix(Mn),n&&(Mn.extractRotation(n.matrixWorld),_i.setFromRotationMatrix(Mn),this.quaternion.premultiply(_i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(wf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const o=this.children[r].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let r=[];this[e]===t&&r.push(this);for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectsByProperty(e,t);o.length>0&&(r=r.concat(o))}return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,e,bf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,Af,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++){const i=t[r];(i.matrixWorldAutoUpdate===!0||e===!0)&&i.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let i=0,o=n.length;i<o;i++){const s=n[i];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function i(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=i(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];i(e.shapes,f)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(i(e.materials,this.material[l]));n.material=s}else n.material=i(e.materials,this.material);if(this.children.length>0){n.children=[];for(let s=0;s<this.children.length;s++)n.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];n.animations.push(i(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);s.length>0&&(r.geometries=s),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),p.length>0&&(r.animations=p),g.length>0&&(r.nodes=g)}return r.object=n,r;function o(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}pt.DEFAULT_UP=new X(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new X,yn=new X,is=new X,En=new X,vi=new X,xi=new X,xl=new X,rs=new X,as=new X,ss=new X;let Hr=!1;class on{constructor(e=new X,t=new X,r=new X){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),sn.subVectors(e,t),n.cross(sn);const i=n.lengthSq();return i>0?n.multiplyScalar(1/Math.sqrt(i)):n.set(0,0,0)}static getBarycoord(e,t,r,n,i){sn.subVectors(n,t),yn.subVectors(r,t),is.subVectors(e,t);const o=sn.dot(sn),s=sn.dot(yn),l=sn.dot(is),c=yn.dot(yn),u=yn.dot(is),f=o*c-s*s;if(f===0)return i.set(-2,-1,-1);const h=1/f,p=(c*l-s*u)*h,g=(o*u-s*l)*h;return i.set(1-p-g,g,p)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,En),En.x>=0&&En.y>=0&&En.x+En.y<=1}static getUV(e,t,r,n,i,o,s,l){return Hr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Hr=!0),this.getInterpolation(e,t,r,n,i,o,s,l)}static getInterpolation(e,t,r,n,i,o,s,l){return this.getBarycoord(e,t,r,n,En),l.setScalar(0),l.addScaledVector(i,En.x),l.addScaledVector(o,En.y),l.addScaledVector(s,En.z),l}static isFrontFacing(e,t,r,n){return sn.subVectors(r,t),yn.subVectors(e,t),sn.cross(yn).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),sn.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,n,i){return Hr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Hr=!0),on.getInterpolation(e,this.a,this.b,this.c,t,r,n,i)}getInterpolation(e,t,r,n,i){return on.getInterpolation(e,this.a,this.b,this.c,t,r,n,i)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,i=this.c;let o,s;vi.subVectors(n,r),xi.subVectors(i,r),rs.subVectors(e,r);const l=vi.dot(rs),c=xi.dot(rs);if(l<=0&&c<=0)return t.copy(r);as.subVectors(e,n);const u=vi.dot(as),f=xi.dot(as);if(u>=0&&f<=u)return t.copy(n);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(r).addScaledVector(vi,o);ss.subVectors(e,i);const p=vi.dot(ss),g=xi.dot(ss);if(g>=0&&p<=g)return t.copy(i);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return s=c/(c-g),t.copy(r).addScaledVector(xi,s);const d=u*g-p*f;if(d<=0&&f-u>=0&&p-g>=0)return xl.subVectors(i,n),s=(f-u)/(f-u+(p-g)),t.copy(n).addScaledVector(xl,s);const m=1/(d+_+h);return o=_*m,s=h*m,t.copy(r).addScaledVector(vi,o).addScaledVector(xi,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function os(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Ke{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,r,n=$e.workingColorSpace){return this.r=e,this.g=t,this.b=r,$e.toWorkingColorSpace(this,n),this}setHSL(e,t,r,n=$e.workingColorSpace){if(e=pf(e,1),t=wt(t,0,1),r=wt(r,0,1),t===0)this.r=this.g=this.b=r;else{const i=r<=.5?r*(1+t):r+t-r*t,o=2*r-i;this.r=os(o,i,e+1/3),this.g=os(o,i,e),this.b=os(o,i,e-1/3)}return $e.toWorkingColorSpace(this,n),this}setStyle(e,t=dt){function r(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const o=n[1],s=n[2];switch(o){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],o=i.length;if(o===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){const r=Oc[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=Ka(e.r),this.g=Ka(e.g),this.b=Ka(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return $e.fromWorkingColorSpace(Tt.copy(this),e),Math.round(wt(Tt.r*255,0,255))*65536+Math.round(wt(Tt.g*255,0,255))*256+Math.round(wt(Tt.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(Tt.copy(this),t);const r=Tt.r,n=Tt.g,i=Tt.b,o=Math.max(r,n,i),s=Math.min(r,n,i);let l,c;const u=(s+o)/2;if(s===o)l=0,c=0;else{const f=o-s;switch(c=u<=.5?f/(o+s):f/(2-o-s),o){case r:l=(n-i)/f+(n<i?6:0);break;case n:l=(i-r)/f+2;break;case i:l=(r-n)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=dt){$e.fromWorkingColorSpace(Tt.copy(this),e);const t=Tt.r,r=Tt.g,n=Tt.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL(Vr);const r=qa(kn.h,Vr.h,t),n=qa(kn.s,Vr.s,t),i=qa(kn.l,Vr.l,t);return this.setHSL(r,n,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,n=this.b,i=e.elements;return this.r=i[0]*t+i[3]*r+i[6]*n,this.g=i[1]*t+i[4]*r+i[7]*n,this.b=i[2]*t+i[5]*r+i[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new Ke;Ke.NAMES=Oc;let Cf=0;class zi extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Er(),this.name="",this.type="Material",this.blending=Ui,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bs,this.blendDst=As,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(r.blending=this.blending),this.side!==Un&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==bs&&(r.blendSrc=this.blendSrc),this.blendDst!==As&&(r.blendDst=this.blendDst),this.blendEquation!==ni&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ua&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==al&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(r.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(i){const o=[];for(const s in i){const l=i[s];delete l.metadata,o.push(l)}return o}if(t){const i=n(e.textures),o=n(e.images);i.length>0&&(r.textures=i),o.length>0&&(r.images=o)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let i=0;i!==n;++i)r[i]=t[i].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xt extends zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new X,Wr=new Ve;class hn{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=sl,this.updateRange={offset:0,count:-1},this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,i=this.itemSize;n<i;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Wr.fromBufferAttribute(this,t),Wr.applyMatrix3(e),this.setXY(t,Wr.x,Wr.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=sr(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Nt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),r=Nt(r,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),r=Nt(r,this.array),n=Nt(n,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Bc extends hn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Gc extends hn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Bt extends hn{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Uf=0;const Xt=new ct,ls=new pt,Si=new X,Ht=new ki,ur=new ki,vt=new X;class Wt extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Er(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dc(e)?Gc:Bc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const i=new Je().getNormalMatrix(e);r.applyNormalMatrix(i),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,r){return Xt.makeTranslation(e,t,r),this.applyMatrix4(Xt),this}scale(e,t,r){return Xt.makeScale(e,t,r),this.applyMatrix4(Xt),this}lookAt(e){return ls.lookAt(e),ls.updateMatrix(),this.applyMatrix4(ls.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(e){const t=[];for(let r=0,n=e.length;r<n;r++){const i=e[r];t.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new Bt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const i=t[r];Ht.setFromBufferAttribute(i),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const r=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const s=t[i];ur.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(Ht.min,ur.min),Ht.expandByPoint(vt),vt.addVectors(Ht.max,ur.max),Ht.expandByPoint(vt)):(Ht.expandByPoint(ur.min),Ht.expandByPoint(ur.max))}Ht.getCenter(r);let n=0;for(let i=0,o=e.count;i<o;i++)vt.fromBufferAttribute(e,i),n=Math.max(n,r.distanceToSquared(vt));if(t)for(let i=0,o=t.length;i<o;i++){const s=t[i],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)vt.fromBufferAttribute(s,c),l&&(Si.fromBufferAttribute(e,c),vt.add(Si)),n=Math.max(n,r.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,n=t.position.array,i=t.normal.array,o=t.uv.array,s=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<s;b++)c[b]=new X,u[b]=new X;const f=new X,h=new X,p=new X,g=new Ve,_=new Ve,d=new Ve,m=new X,E=new X;function v(b,q,P){f.fromArray(n,b*3),h.fromArray(n,q*3),p.fromArray(n,P*3),g.fromArray(o,b*2),_.fromArray(o,q*2),d.fromArray(o,P*2),h.sub(f),p.sub(f),_.sub(g),d.sub(g);const B=1/(_.x*d.y-d.x*_.y);isFinite(B)&&(m.copy(h).multiplyScalar(d.y).addScaledVector(p,-_.y).multiplyScalar(B),E.copy(p).multiplyScalar(_.x).addScaledVector(h,-d.x).multiplyScalar(B),c[b].add(m),c[q].add(m),c[P].add(m),u[b].add(E),u[q].add(E),u[P].add(E))}let S=this.groups;S.length===0&&(S=[{start:0,count:r.length}]);for(let b=0,q=S.length;b<q;++b){const P=S[b],B=P.start,R=P.count;for(let G=B,k=B+R;G<k;G+=3)v(r[G+0],r[G+1],r[G+2])}const T=new X,U=new X,w=new X,I=new X;function M(b){w.fromArray(i,b*3),I.copy(w);const q=c[b];T.copy(q),T.sub(w.multiplyScalar(w.dot(q))).normalize(),U.crossVectors(I,q);const B=U.dot(u[b])<0?-1:1;l[b*4]=T.x,l[b*4+1]=T.y,l[b*4+2]=T.z,l[b*4+3]=B}for(let b=0,q=S.length;b<q;++b){const P=S[b],B=P.start,R=P.count;for(let G=B,k=B+R;G<k;G+=3)M(r[G+0]),M(r[G+1]),M(r[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let h=0,p=r.count;h<p;h++)r.setXYZ(h,0,0,0);const n=new X,i=new X,o=new X,s=new X,l=new X,c=new X,u=new X,f=new X;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),_=e.getX(h+1),d=e.getX(h+2);n.fromBufferAttribute(t,g),i.fromBufferAttribute(t,_),o.fromBufferAttribute(t,d),u.subVectors(o,i),f.subVectors(n,i),u.cross(f),s.fromBufferAttribute(r,g),l.fromBufferAttribute(r,_),c.fromBufferAttribute(r,d),s.add(u),l.add(u),c.add(u),r.setXYZ(g,s.x,s.y,s.z),r.setXYZ(_,l.x,l.y,l.z),r.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)n.fromBufferAttribute(t,h+0),i.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,i),f.subVectors(n,i),u.cross(f),r.setXYZ(h+0,u.x,u.y,u.z),r.setXYZ(h+1,u.x,u.y,u.z),r.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,f=s.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,d=l.length;_<d;_++){s.isInterleavedBufferAttribute?p=l[_]*s.data.stride+s.offset:p=l[_]*u;for(let m=0;m<u;m++)h[g++]=c[p++]}return new hn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,r=this.index.array,n=this.attributes;for(const s in n){const l=n[s],c=e(l,r);t.setAttribute(s,c)}const i=this.morphAttributes;for(const s in i){const l=[],c=i[s];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,r);l.push(p)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let i=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(n[l]=u,i=!0)}i&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const i=e.morphAttributes;for(const c in i){const u=[],f=i[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sl=new ct,Jn=new io,Xr=new br,Ml=new X,Mi=new X,yi=new X,Ei=new X,cs=new X,Yr=new X,qr=new Ve,jr=new Ve,Kr=new Ve,yl=new X,El=new X,Tl=new X,Zr=new X,Jr=new X;class rt extends pt{constructor(e=new Wt,t=new xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=n.length;i<o;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}getVertexPosition(e,t){const r=this.geometry,n=r.attributes.position,i=r.morphAttributes.position,o=r.morphTargetsRelative;t.fromBufferAttribute(n,e);const s=this.morphTargetInfluences;if(i&&s){Yr.set(0,0,0);for(let l=0,c=i.length;l<c;l++){const u=s[l],f=i[l];u!==0&&(cs.fromBufferAttribute(f,e),o?Yr.addScaledVector(cs,u):Yr.addScaledVector(cs.sub(t),u))}t.add(Yr)}return t}raycast(e,t){const r=this.geometry,n=this.material,i=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Xr.copy(r.boundingSphere),Xr.applyMatrix4(i),Jn.copy(e.ray).recast(e.near),!(Xr.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(Xr,Ml)===null||Jn.origin.distanceToSquared(Ml)>(e.far-e.near)**2))&&(Sl.copy(i).invert(),Jn.copy(e.ray).applyMatrix4(Sl),!(r.boundingBox!==null&&Jn.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Jn)))}_computeIntersections(e,t,r){let n;const i=this.geometry,o=this.material,s=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv1,f=i.attributes.normal,h=i.groups,p=i.drawRange;if(s!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const d=h[g],m=o[d.materialIndex],E=Math.max(d.start,p.start),v=Math.min(s.count,Math.min(d.start+d.count,p.start+p.count));for(let S=E,T=v;S<T;S+=3){const U=s.getX(S),w=s.getX(S+1),I=s.getX(S+2);n=Qr(this,m,e,r,c,u,f,U,w,I),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=d.materialIndex,t.push(n))}}else{const g=Math.max(0,p.start),_=Math.min(s.count,p.start+p.count);for(let d=g,m=_;d<m;d+=3){const E=s.getX(d),v=s.getX(d+1),S=s.getX(d+2);n=Qr(this,o,e,r,c,u,f,E,v,S),n&&(n.faceIndex=Math.floor(d/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const d=h[g],m=o[d.materialIndex],E=Math.max(d.start,p.start),v=Math.min(l.count,Math.min(d.start+d.count,p.start+p.count));for(let S=E,T=v;S<T;S+=3){const U=S,w=S+1,I=S+2;n=Qr(this,m,e,r,c,u,f,U,w,I),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=d.materialIndex,t.push(n))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let d=g,m=_;d<m;d+=3){const E=d,v=d+1,S=d+2;n=Qr(this,o,e,r,c,u,f,E,v,S),n&&(n.faceIndex=Math.floor(d/3),t.push(n))}}}}function Lf(a,e,t,r,n,i,o,s){let l;if(e.side===Ct?l=r.intersectTriangle(o,i,n,!0,s):l=r.intersectTriangle(n,i,o,e.side===Un,s),l===null)return null;Jr.copy(s),Jr.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(Jr);return c<t.near||c>t.far?null:{distance:c,point:Jr.clone(),object:a}}function Qr(a,e,t,r,n,i,o,s,l,c){a.getVertexPosition(s,Mi),a.getVertexPosition(l,yi),a.getVertexPosition(c,Ei);const u=Lf(a,e,t,r,Mi,yi,Ei,Zr);if(u){n&&(qr.fromBufferAttribute(n,s),jr.fromBufferAttribute(n,l),Kr.fromBufferAttribute(n,c),u.uv=on.getInterpolation(Zr,Mi,yi,Ei,qr,jr,Kr,new Ve)),i&&(qr.fromBufferAttribute(i,s),jr.fromBufferAttribute(i,l),Kr.fromBufferAttribute(i,c),u.uv1=on.getInterpolation(Zr,Mi,yi,Ei,qr,jr,Kr,new Ve),u.uv2=u.uv1),o&&(yl.fromBufferAttribute(o,s),El.fromBufferAttribute(o,l),Tl.fromBufferAttribute(o,c),u.normal=on.getInterpolation(Zr,Mi,yi,Ei,yl,El,Tl,new X),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const f={a:s,b:l,c,normal:new X,materialIndex:0};on.getNormal(Mi,yi,Ei,f.normal),u.face=f}return u}class Pn extends Wt{constructor(e=1,t=1,r=1,n=1,i=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:i,depthSegments:o};const s=this;n=Math.floor(n),i=Math.floor(i),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,r,t,e,o,i,0),g("z","y","x",1,-1,r,t,-e,o,i,1),g("x","z","y",1,1,e,r,t,n,o,2),g("x","z","y",1,-1,e,r,-t,n,o,3),g("x","y","z",1,-1,e,t,r,n,i,4),g("x","y","z",-1,-1,e,t,-r,n,i,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(f,2));function g(_,d,m,E,v,S,T,U,w,I,M){const b=S/w,q=T/I,P=S/2,B=T/2,R=U/2,G=w+1,k=I+1;let Y=0,ee=0;const V=new X;for(let N=0;N<k;N++){const y=N*q-B;for(let L=0;L<G;L++){const z=L*b-P;V[_]=z*E,V[d]=y*v,V[m]=R,c.push(V.x,V.y,V.z),V[_]=0,V[d]=0,V[m]=U>0?1:-1,u.push(V.x,V.y,V.z),f.push(L/w),f.push(1-N/I),Y+=1}}for(let N=0;N<I;N++)for(let y=0;y<w;y++){const L=h+y+G*N,z=h+y+G*(N+1),W=h+(y+1)+G*(N+1),H=h+(y+1)+G*N;l.push(L,z,H),l.push(z,W,H),ee+=6}s.addGroup(p,ee,M),p+=ee,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fi(a){const e={};for(const t in a){e[t]={};for(const r in a[t]){const n=a[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function bt(a){const e={};for(let t=0;t<a.length;t++){const r=Fi(a[t]);for(const n in r)e[n]=r[n]}return e}function Pf(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function kc(a){return a.getRenderTarget()===null?a.outputColorSpace:$e.workingColorSpace}const Ni={clone:Fi,merge:bt};var Df=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,If=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rt extends zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Df,this.fragmentShader=If,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fi(e.uniforms),this.uniformsGroups=Pf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class zc extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class jt extends zc{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(Ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,n,i,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ya*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,i=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;i+=o.offsetX*n/l,t-=o.offsetY*r/c,n*=o.width/l,r*=o.height/c}const s=this.filmOffset;s!==0&&(i+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+n,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ti=-90,bi=1;class Ff extends pt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new jt(Ti,bi,e,t);n.layers=this.layers,this.add(n);const i=new jt(Ti,bi,e,t);i.layers=this.layers,this.add(i);const o=new jt(Ti,bi,e,t);o.layers=this.layers,this.add(o);const s=new jt(Ti,bi,e,t);s.layers=this.layers,this.add(s);const l=new jt(Ti,bi,e,t);l.layers=this.layers,this.add(l);const c=new jt(Ti,bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,n,i,o,s,l]=t;for(const c of t)this.remove(c);if(e===wn)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pa)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,o,s,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,n),e.render(t,i),e.setRenderTarget(r,1,n),e.render(t,o),e.setRenderTarget(r,2,n),e.render(t,s),e.setRenderTarget(r,3,n),e.render(t,l),e.setRenderTarget(r,4,n),e.render(t,c),r.texture.generateMipmaps=_,e.setRenderTarget(r,5,n),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=g,r.texture.needsPMREMUpdate=!0}}class Hc extends Ut{constructor(e,t,r,n,i,o,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Pi,super(e,t,r,n,i,o,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nf extends fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];t.encoding!==void 0&&(mr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===si?dt:Kt),this.texture=new Hc(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Pn(5,5,5),i=new Rt({name:"CubemapFromEquirect",uniforms:Fi(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ct,blending:Rn});i.uniforms.tEquirect.value=t;const o=new rt(n,i),s=t.minFilter;return t.minFilter===Sr&&(t.minFilter=Ot),new Ff(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,r,n){const i=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,r,n);e.setRenderTarget(i)}}const us=new X,Of=new X,Bf=new Je;class ei{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=us.subVectors(r,t).cross(Of.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(us),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/n;return i<0||i>1?null:t.copy(e.start).addScaledVector(r,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Bf.getNormalMatrix(e),n=this.coplanarPoint(us).applyMatrix4(e),i=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new br,$r=new X;class ro{constructor(e=new ei,t=new ei,r=new ei,n=new ei,i=new ei,o=new ei){this.planes=[e,t,r,n,i,o]}set(e,t,r,n,i,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(r),s[3].copy(n),s[4].copy(i),s[5].copy(o),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=wn){const r=this.planes,n=e.elements,i=n[0],o=n[1],s=n[2],l=n[3],c=n[4],u=n[5],f=n[6],h=n[7],p=n[8],g=n[9],_=n[10],d=n[11],m=n[12],E=n[13],v=n[14],S=n[15];if(r[0].setComponents(l-i,h-c,d-p,S-m).normalize(),r[1].setComponents(l+i,h+c,d+p,S+m).normalize(),r[2].setComponents(l+o,h+u,d+g,S+E).normalize(),r[3].setComponents(l-o,h-u,d-g,S-E).normalize(),r[4].setComponents(l-s,h-f,d-_,S-v).normalize(),t===wn)r[5].setComponents(l+s,h+f,d+_,S+v).normalize();else if(t===pa)r[5].setComponents(s,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(e){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if($r.x=n.normal.x>0?e.max.x:e.min.x,$r.y=n.normal.y>0?e.max.y:e.min.y,$r.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint($r)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vc(){let a=null,e=!1,t=null,r=null;function n(i,o){t(i,o),r=a.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=a.requestAnimationFrame(n),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){a=i}}}function Gf(a,e){const t=e.isWebGL2,r=new WeakMap;function n(c,u){const f=c.array,h=c.usage,p=a.createBuffer();a.bindBuffer(u,p),a.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=a.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=a.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=a.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=a.SHORT;else if(f instanceof Uint32Array)g=a.UNSIGNED_INT;else if(f instanceof Int32Array)g=a.INT;else if(f instanceof Int8Array)g=a.BYTE;else if(f instanceof Uint8Array)g=a.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function i(c,u,f){const h=u.array,p=u.updateRange;a.bindBuffer(f,c),p.count===-1?a.bufferSubData(f,0,h):(t?a.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):a.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),r.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=r.get(c);u&&(a.deleteBuffer(u.buffer),r.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=r.get(c);(!h||h.version<c.version)&&r.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=r.get(c);f===void 0?r.set(c,n(c,u)):f.version<c.version&&(i(f.buffer,c,u),f.version=c.version)}return{get:o,remove:s,update:l}}class _n extends Wt{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const i=e/2,o=t/2,s=Math.floor(r),l=Math.floor(n),c=s+1,u=l+1,f=e/s,h=t/l,p=[],g=[],_=[],d=[];for(let m=0;m<u;m++){const E=m*h-o;for(let v=0;v<c;v++){const S=v*f-i;g.push(S,-E,0),_.push(0,0,1),d.push(v/s),d.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<s;E++){const v=E+c*m,S=E+c*(m+1),T=E+1+c*(m+1),U=E+1+c*m;p.push(v,S,U),p.push(S,T,U)}this.setIndex(p),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(_,3)),this.setAttribute("uv",new Bt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _n(e.width,e.height,e.widthSegments,e.heightSegments)}}var kf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,eh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,th=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ih=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ah=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,sh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,oh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ch=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ph="gl_FragColor = linearToOutputTexel( gl_FragColor );",mh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,gh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_h=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Th=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ah=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ch=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Lh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ph=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ih=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Oh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Wh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Xh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,$h=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ed=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,td=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ad=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,od=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ld=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ud=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,md=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_d=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Sd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Md=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ed=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Td=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,bd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ad=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ud=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ld=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Pd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Nd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Od=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Xd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jd=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$d=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ep=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,np=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ap=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,op=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,up=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:kf,alphahash_pars_fragment:zf,alphamap_fragment:Hf,alphamap_pars_fragment:Vf,alphatest_fragment:Wf,alphatest_pars_fragment:Xf,aomap_fragment:Yf,aomap_pars_fragment:qf,begin_vertex:jf,beginnormal_vertex:Kf,bsdfs:Zf,iridescence_fragment:Jf,bumpmap_pars_fragment:Qf,clipping_planes_fragment:$f,clipping_planes_pars_fragment:eh,clipping_planes_pars_vertex:th,clipping_planes_vertex:nh,color_fragment:ih,color_pars_fragment:rh,color_pars_vertex:ah,color_vertex:sh,common:oh,cube_uv_reflection_fragment:lh,defaultnormal_vertex:ch,displacementmap_pars_vertex:uh,displacementmap_vertex:fh,emissivemap_fragment:hh,emissivemap_pars_fragment:dh,colorspace_fragment:ph,colorspace_pars_fragment:mh,envmap_fragment:gh,envmap_common_pars_fragment:_h,envmap_pars_fragment:vh,envmap_pars_vertex:xh,envmap_physical_pars_fragment:Lh,envmap_vertex:Sh,fog_vertex:Mh,fog_pars_vertex:yh,fog_fragment:Eh,fog_pars_fragment:Th,gradientmap_pars_fragment:bh,lightmap_fragment:Ah,lightmap_pars_fragment:wh,lights_lambert_fragment:Rh,lights_lambert_pars_fragment:Ch,lights_pars_begin:Uh,lights_toon_fragment:Ph,lights_toon_pars_fragment:Dh,lights_phong_fragment:Ih,lights_phong_pars_fragment:Fh,lights_physical_fragment:Nh,lights_physical_pars_fragment:Oh,lights_fragment_begin:Bh,lights_fragment_maps:Gh,lights_fragment_end:kh,logdepthbuf_fragment:zh,logdepthbuf_pars_fragment:Hh,logdepthbuf_pars_vertex:Vh,logdepthbuf_vertex:Wh,map_fragment:Xh,map_pars_fragment:Yh,map_particle_fragment:qh,map_particle_pars_fragment:jh,metalnessmap_fragment:Kh,metalnessmap_pars_fragment:Zh,morphcolor_vertex:Jh,morphnormal_vertex:Qh,morphtarget_pars_vertex:$h,morphtarget_vertex:ed,normal_fragment_begin:td,normal_fragment_maps:nd,normal_pars_fragment:id,normal_pars_vertex:rd,normal_vertex:ad,normalmap_pars_fragment:sd,clearcoat_normal_fragment_begin:od,clearcoat_normal_fragment_maps:ld,clearcoat_pars_fragment:cd,iridescence_pars_fragment:ud,opaque_fragment:fd,packing:hd,premultiplied_alpha_fragment:dd,project_vertex:pd,dithering_fragment:md,dithering_pars_fragment:gd,roughnessmap_fragment:_d,roughnessmap_pars_fragment:vd,shadowmap_pars_fragment:xd,shadowmap_pars_vertex:Sd,shadowmap_vertex:Md,shadowmask_pars_fragment:yd,skinbase_vertex:Ed,skinning_pars_vertex:Td,skinning_vertex:bd,skinnormal_vertex:Ad,specularmap_fragment:wd,specularmap_pars_fragment:Rd,tonemapping_fragment:Cd,tonemapping_pars_fragment:Ud,transmission_fragment:Ld,transmission_pars_fragment:Pd,uv_pars_fragment:Dd,uv_pars_vertex:Id,uv_vertex:Fd,worldpos_vertex:Nd,background_vert:Od,background_frag:Bd,backgroundCube_vert:Gd,backgroundCube_frag:kd,cube_vert:zd,cube_frag:Hd,depth_vert:Vd,depth_frag:Wd,distanceRGBA_vert:Xd,distanceRGBA_frag:Yd,equirect_vert:qd,equirect_frag:jd,linedashed_vert:Kd,linedashed_frag:Zd,meshbasic_vert:Jd,meshbasic_frag:Qd,meshlambert_vert:$d,meshlambert_frag:ep,meshmatcap_vert:tp,meshmatcap_frag:np,meshnormal_vert:ip,meshnormal_frag:rp,meshphong_vert:ap,meshphong_frag:sp,meshphysical_vert:op,meshphysical_frag:lp,meshtoon_vert:cp,meshtoon_frag:up,points_vert:fp,points_frag:hp,shadow_vert:dp,shadow_frag:pp,sprite_vert:mp,sprite_frag:gp},Re={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},mn={basic:{uniforms:bt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:bt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ke(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:bt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:bt([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:bt([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Ke(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:bt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:bt([Re.points,Re.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:bt([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:bt([Re.common,Re.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:bt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:bt([Re.sprite,Re.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:bt([Re.common,Re.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:bt([Re.lights,Re.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};mn.physical={uniforms:bt([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const ea={r:0,b:0,g:0};function _p(a,e,t,r,n,i,o){const s=new Ke(0);let l=i===!0?0:1,c,u,f=null,h=0,p=null;function g(d,m){let E=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?_(s,l):v&&v.isColor&&(_(v,1),E=!0);const S=a.xr.getEnvironmentBlendMode();S==="additive"?r.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,o),(a.autoClear||E)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Sa)?(u===void 0&&(u=new rt(new Pn(1,1,1),new Rt({name:"BackgroundCubeMaterial",uniforms:Fi(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,U,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=$e.getTransfer(v.colorSpace)!==it,(f!==v||h!==v.version||p!==a.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,p=a.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new rt(new _n(2,2),new Rt({name:"BackgroundMaterial",uniforms:Fi(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=$e.getTransfer(v.colorSpace)!==it,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||p!==a.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,p=a.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function _(d,m){d.getRGB(ea,kc(a)),r.buffers.color.setClear(ea.r,ea.g,ea.b,m,o)}return{getClearColor:function(){return s},setClearColor:function(d,m=1){s.set(d),l=m,_(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,_(s,l)},render:g}}function vp(a,e,t,r){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),i=r.isWebGL2?null:e.get("OES_vertex_array_object"),o=r.isWebGL2||i!==null,s={},l=d(null);let c=l,u=!1;function f(R,G,k,Y,ee){let V=!1;if(o){const N=_(Y,k,G);c!==N&&(c=N,p(c.object)),V=m(R,Y,k,ee),V&&E(R,Y,k,ee)}else{const N=G.wireframe===!0;(c.geometry!==Y.id||c.program!==k.id||c.wireframe!==N)&&(c.geometry=Y.id,c.program=k.id,c.wireframe=N,V=!0)}ee!==null&&t.update(ee,a.ELEMENT_ARRAY_BUFFER),(V||u)&&(u=!1,I(R,G,k,Y),ee!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(ee).buffer))}function h(){return r.isWebGL2?a.createVertexArray():i.createVertexArrayOES()}function p(R){return r.isWebGL2?a.bindVertexArray(R):i.bindVertexArrayOES(R)}function g(R){return r.isWebGL2?a.deleteVertexArray(R):i.deleteVertexArrayOES(R)}function _(R,G,k){const Y=k.wireframe===!0;let ee=s[R.id];ee===void 0&&(ee={},s[R.id]=ee);let V=ee[G.id];V===void 0&&(V={},ee[G.id]=V);let N=V[Y];return N===void 0&&(N=d(h()),V[Y]=N),N}function d(R){const G=[],k=[],Y=[];for(let ee=0;ee<n;ee++)G[ee]=0,k[ee]=0,Y[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:k,attributeDivisors:Y,object:R,attributes:{},index:null}}function m(R,G,k,Y){const ee=c.attributes,V=G.attributes;let N=0;const y=k.getAttributes();for(const L in y)if(y[L].location>=0){const W=ee[L];let H=V[L];if(H===void 0&&(L==="instanceMatrix"&&R.instanceMatrix&&(H=R.instanceMatrix),L==="instanceColor"&&R.instanceColor&&(H=R.instanceColor)),W===void 0||W.attribute!==H||H&&W.data!==H.data)return!0;N++}return c.attributesNum!==N||c.index!==Y}function E(R,G,k,Y){const ee={},V=G.attributes;let N=0;const y=k.getAttributes();for(const L in y)if(y[L].location>=0){let W=V[L];W===void 0&&(L==="instanceMatrix"&&R.instanceMatrix&&(W=R.instanceMatrix),L==="instanceColor"&&R.instanceColor&&(W=R.instanceColor));const H={};H.attribute=W,W&&W.data&&(H.data=W.data),ee[L]=H,N++}c.attributes=ee,c.attributesNum=N,c.index=Y}function v(){const R=c.newAttributes;for(let G=0,k=R.length;G<k;G++)R[G]=0}function S(R){T(R,0)}function T(R,G){const k=c.newAttributes,Y=c.enabledAttributes,ee=c.attributeDivisors;k[R]=1,Y[R]===0&&(a.enableVertexAttribArray(R),Y[R]=1),ee[R]!==G&&((r.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,G),ee[R]=G)}function U(){const R=c.newAttributes,G=c.enabledAttributes;for(let k=0,Y=G.length;k<Y;k++)G[k]!==R[k]&&(a.disableVertexAttribArray(k),G[k]=0)}function w(R,G,k,Y,ee,V,N){N===!0?a.vertexAttribIPointer(R,G,k,ee,V):a.vertexAttribPointer(R,G,k,Y,ee,V)}function I(R,G,k,Y){if(r.isWebGL2===!1&&(R.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const ee=Y.attributes,V=k.getAttributes(),N=G.defaultAttributeValues;for(const y in V){const L=V[y];if(L.location>=0){let z=ee[y];if(z===void 0&&(y==="instanceMatrix"&&R.instanceMatrix&&(z=R.instanceMatrix),y==="instanceColor"&&R.instanceColor&&(z=R.instanceColor)),z!==void 0){const W=z.normalized,H=z.itemSize,te=t.get(z);if(te===void 0)continue;const J=te.buffer,Q=te.type,he=te.bytesPerElement,be=r.isWebGL2===!0&&(Q===a.INT||Q===a.UNSIGNED_INT||z.gpuType===Tc);if(z.isInterleavedBufferAttribute){const oe=z.data,D=oe.stride,ke=z.offset;if(oe.isInstancedInterleavedBuffer){for(let _e=0;_e<L.locationSize;_e++)T(L.location+_e,oe.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let _e=0;_e<L.locationSize;_e++)S(L.location+_e);a.bindBuffer(a.ARRAY_BUFFER,J);for(let _e=0;_e<L.locationSize;_e++)w(L.location+_e,H/L.locationSize,Q,W,D*he,(ke+H/L.locationSize*_e)*he,be)}else{if(z.isInstancedBufferAttribute){for(let oe=0;oe<L.locationSize;oe++)T(L.location+oe,z.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let oe=0;oe<L.locationSize;oe++)S(L.location+oe);a.bindBuffer(a.ARRAY_BUFFER,J);for(let oe=0;oe<L.locationSize;oe++)w(L.location+oe,H/L.locationSize,Q,W,H*he,H/L.locationSize*oe*he,be)}}else if(N!==void 0){const W=N[y];if(W!==void 0)switch(W.length){case 2:a.vertexAttrib2fv(L.location,W);break;case 3:a.vertexAttrib3fv(L.location,W);break;case 4:a.vertexAttrib4fv(L.location,W);break;default:a.vertexAttrib1fv(L.location,W)}}}}U()}function M(){P();for(const R in s){const G=s[R];for(const k in G){const Y=G[k];for(const ee in Y)g(Y[ee].object),delete Y[ee];delete G[k]}delete s[R]}}function b(R){if(s[R.id]===void 0)return;const G=s[R.id];for(const k in G){const Y=G[k];for(const ee in Y)g(Y[ee].object),delete Y[ee];delete G[k]}delete s[R.id]}function q(R){for(const G in s){const k=s[G];if(k[R.id]===void 0)continue;const Y=k[R.id];for(const ee in Y)g(Y[ee].object),delete Y[ee];delete k[R.id]}}function P(){B(),u=!0,c!==l&&(c=l,p(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:P,resetDefaultState:B,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:q,initAttributes:v,enableAttribute:S,disableUnusedAttributes:U}}function xp(a,e,t,r){const n=r.isWebGL2;let i;function o(c){i=c}function s(c,u){a.drawArrays(i,c,u),t.update(u,i,1)}function l(c,u,f){if(f===0)return;let h,p;if(n)h=a,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](i,c,u,f),t.update(u,i,f)}this.setMode=o,this.render=s,this.renderInstances=l}function Sp(a,e,t){let r;function n(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=a.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function i(w){if(w==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=i(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),h=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=a.getParameter(a.MAX_TEXTURE_SIZE),g=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),_=a.getParameter(a.MAX_VERTEX_ATTRIBS),d=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),m=a.getParameter(a.MAX_VARYING_VECTORS),E=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,S=o||e.has("OES_texture_float"),T=v&&S,U=o?a.getParameter(a.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:i,precision:s,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:d,maxVaryings:m,maxFragmentUniforms:E,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:T,maxSamples:U}}function Mp(a){const e=this;let t=null,r=0,n=!1,i=!1;const o=new ei,s=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||r!==0||n;return n=h,r=f.length,p},this.beginShadows=function(){i=!0,u(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,_=f.clipIntersection,d=f.clipShadows,m=a.get(f);if(!n||g===null||g.length===0||i&&!d)i?u(null):c();else{const E=i?0:r,v=E*4;let S=m.clippingState||null;l.value=S,S=u(g,h,v,p);for(let T=0;T!==v;++T)S[T]=t[T];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(f,h,p,g){const _=f!==null?f.length:0;let d=null;if(_!==0){if(d=l.value,g!==!0||d===null){const m=p+_*4,E=h.matrixWorldInverse;s.getNormalMatrix(E),(d===null||d.length<m)&&(d=new Float32Array(m));for(let v=0,S=p;v!==_;++v,S+=4)o.copy(f[v]).applyMatrix4(E,s),o.normal.toArray(d,S),d[S+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,d}}function yp(a){let e=new WeakMap;function t(o,s){return s===ws?o.mapping=Pi:s===Rs&&(o.mapping=Di),o}function r(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===ws||s===Rs)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Nf(l.height/2);return c.fromEquirectangularTexture(a,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){const s=o.target;s.removeEventListener("dispose",n);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function i(){e=new WeakMap}return{get:r,dispose:i}}class ao extends zc{constructor(e=-1,t=1,r=1,n=-1,i=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=i,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,i,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let i=r-e,o=r+e,s=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=c*this.view.offsetX,o=i+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(i,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ci=4,bl=[.125,.215,.35,.446,.526,.582],ii=20,fs=new ao,Al=new Ke;let hs=null,ds=0,ps=0;const ti=(1+Math.sqrt(5))/2,Ai=1/ti,wl=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,ti,Ai),new X(0,ti,-Ai),new X(Ai,0,ti),new X(-Ai,0,ti),new X(ti,Ai,0),new X(-ti,Ai,0)];class Rl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100){hs=this._renderer.getRenderTarget(),ds=this._renderer.getActiveCubeFace(),ps=this._renderer.getActiveMipmapLevel(),this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,r,n,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ll(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hs,ds,ps),e.scissorTest=!1,ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pi||e.mapping===Di?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hs=this._renderer.getRenderTarget(),ds=this._renderer.getActiveCubeFace(),ps=this._renderer.getActiveMipmapLevel();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:Cn,format:un,colorSpace:Ln,depthBuffer:!1},n=Cl(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cl(e,t,r);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ep(i)),this._blurMaterial=Tp(i,e,t)}return n}_compileMaterial(e){const t=new rt(this._lodPlanes[0],e);this._renderer.compile(t,fs)}_sceneToCubeUV(e,t,r,n){const s=new jt(90,1,t,r),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Al),u.toneMapping=Wn,u.autoClear=!1;const p=new xt({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),g=new rt(new Pn,p);let _=!1;const d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,_=!0):(p.color.copy(Al),_=!0);for(let m=0;m<6;m++){const E=m%3;E===0?(s.up.set(0,l[m],0),s.lookAt(c[m],0,0)):E===1?(s.up.set(0,0,l[m]),s.lookAt(0,c[m],0)):(s.up.set(0,l[m],0),s.lookAt(0,0,c[m]));const v=this._cubeSize;ta(n,E*v,m>2?v:0,v,v),u.setRenderTarget(n),_&&u.render(g,s),u.render(e,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===Pi||e.mapping===Di;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ll()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ul());const i=n?this._cubemapMaterial:this._equirectMaterial,o=new rt(this._lodPlanes[0],i),s=i.uniforms;s.envMap.value=e;const l=this._cubeSize;ta(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(o,fs)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const i=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=wl[(n-1)%wl.length];this._blur(e,n-1,n,i,o)}t.autoClear=r}_blur(e,t,r,n,i){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,r,n,"latitudinal",i),this._halfBlur(o,e,r,r,n,"longitudinal",i)}_halfBlur(e,t,r,n,i,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new rt(this._lodPlanes[n],c),h=c.uniforms,p=this._sizeLods[r]-1,g=isFinite(i)?Math.PI/(2*p):2*Math.PI/(2*ii-1),_=i/g,d=isFinite(i)?1+Math.floor(u*_):ii;d>ii&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${ii}`);const m=[];let E=0;for(let w=0;w<ii;++w){const I=w/_,M=Math.exp(-I*I/2);m.push(M),w===0?E+=M:w<d&&(E+=2*M)}for(let w=0;w<m.length;w++)m[w]=m[w]/E;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=m,h.latitudinal.value=o==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-r;const S=this._sizeLods[n],T=3*S*(n>v-Ci?n-v+Ci:0),U=4*(this._cubeSize-S);ta(t,T,U,3*S,2*S),l.setRenderTarget(t),l.render(f,fs)}}function Ep(a){const e=[],t=[],r=[];let n=a;const i=a-Ci+1+bl.length;for(let o=0;o<i;o++){const s=Math.pow(2,n);t.push(s);let l=1/s;o>a-Ci?l=bl[o-a+Ci-1]:o===0&&(l=0),r.push(l);const c=1/(s-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,d=2,m=1,E=new Float32Array(_*g*p),v=new Float32Array(d*g*p),S=new Float32Array(m*g*p);for(let U=0;U<p;U++){const w=U%3*2/3-1,I=U>2?0:-1,M=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];E.set(M,_*g*U),v.set(h,d*g*U);const b=[U,U,U,U,U,U];S.set(b,m*g*U)}const T=new Wt;T.setAttribute("position",new hn(E,_)),T.setAttribute("uv",new hn(v,d)),T.setAttribute("faceIndex",new hn(S,m)),e.push(T),n>Ci&&n--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Cl(a,e,t){const r=new fn(a,e,t);return r.texture.mapping=Sa,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ta(a,e,t,r,n){a.viewport.set(e,t,r,n),a.scissor.set(e,t,r,n)}function Tp(a,e,t){const r=new Float32Array(ii),n=new X(0,1,0);return new Rt({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Ul(){return new Rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Ll(){return new Rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function so(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bp(a){let e=new WeakMap,t=null;function r(s){if(s&&s.isTexture){const l=s.mapping,c=l===ws||l===Rs,u=l===Pi||l===Di;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return t===null&&(t=new Rl(a)),f=c?t.fromEquirectangular(s,f):t.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(c&&f&&f.height>0||u&&f&&n(f)){t===null&&(t=new Rl(a));const h=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,h),s.addEventListener("dispose",i),h.texture}else return null}}}return s}function n(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function i(s){const l=s.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:o}}function Ap(a){const e={};function t(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=a.getExtension(r)}return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const n=t(r);return n===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}function wp(a,e,t,r){const n={},i=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let d=0,m=_.length;d<m;d++)e.remove(_[d])}h.removeEventListener("dispose",o),delete n[h.id];const p=i.get(h);p&&(e.remove(p),i.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function s(f,h){return n[h.id]===!0||(h.addEventListener("dispose",o),n[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],a.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let d=0,m=_.length;d<m;d++)e.update(_[d],a.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let v=0,S=E.length;v<S;v+=3){const T=E[v+0],U=E[v+1],w=E[v+2];h.push(T,U,U,w,w,T)}}else if(g!==void 0){const E=g.array;_=g.version;for(let v=0,S=E.length/3-1;v<S;v+=3){const T=v+0,U=v+1,w=v+2;h.push(T,U,U,w,w,T)}}else return;const d=new(Dc(h)?Gc:Bc)(h,1);d.version=_;const m=i.get(f);m&&e.remove(m),i.set(f,d)}function u(f){const h=i.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return i.get(f)}return{get:s,update:l,getWireframeAttribute:u}}function Rp(a,e,t,r){const n=r.isWebGL2;let i;function o(h){i=h}let s,l;function c(h){s=h.type,l=h.bytesPerElement}function u(h,p){a.drawElements(i,p,s,h*l),t.update(p,i,1)}function f(h,p,g){if(g===0)return;let _,d;if(n)_=a,d="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[d](i,p,s,h*l,g),t.update(p,i,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function Cp(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(i,o,s){switch(t.calls++,o){case a.TRIANGLES:t.triangles+=s*(i/3);break;case a.LINES:t.lines+=s*(i/2);break;case a.LINE_STRIP:t.lines+=s*(i-1);break;case a.LINE_LOOP:t.lines+=s*i;break;case a.POINTS:t.points+=s*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function Up(a,e){return a[0]-e[0]}function Lp(a,e){return Math.abs(e[1])-Math.abs(a[1])}function Pp(a,e,t){const r={},n=new Float32Array(8),i=new WeakMap,o=new ht,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let d=i.get(u);if(d===void 0||d.count!==_){let G=function(){B.dispose(),i.delete(u),u.removeEventListener("dispose",G)};var p=G;d!==void 0&&d.texture.dispose();const v=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,U=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],I=u.morphAttributes.color||[];let M=0;v===!0&&(M=1),S===!0&&(M=2),T===!0&&(M=3);let b=u.attributes.position.count*M,q=1;b>e.maxTextureSize&&(q=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const P=new Float32Array(b*q*4*_),B=new Nc(P,b,q,_);B.type=Vn,B.needsUpdate=!0;const R=M*4;for(let k=0;k<_;k++){const Y=U[k],ee=w[k],V=I[k],N=b*q*4*k;for(let y=0;y<Y.count;y++){const L=y*R;v===!0&&(o.fromBufferAttribute(Y,y),P[N+L+0]=o.x,P[N+L+1]=o.y,P[N+L+2]=o.z,P[N+L+3]=0),S===!0&&(o.fromBufferAttribute(ee,y),P[N+L+4]=o.x,P[N+L+5]=o.y,P[N+L+6]=o.z,P[N+L+7]=0),T===!0&&(o.fromBufferAttribute(V,y),P[N+L+8]=o.x,P[N+L+9]=o.y,P[N+L+10]=o.z,P[N+L+11]=V.itemSize===4?o.w:1)}}d={count:_,texture:B,size:new Ve(b,q)},i.set(u,d),u.addEventListener("dispose",G)}let m=0;for(let v=0;v<h.length;v++)m+=h[v];const E=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(a,"morphTargetBaseInfluence",E),f.getUniforms().setValue(a,"morphTargetInfluences",h),f.getUniforms().setValue(a,"morphTargetsTexture",d.texture,t),f.getUniforms().setValue(a,"morphTargetsTextureSize",d.size)}else{const g=h===void 0?0:h.length;let _=r[u.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];r[u.id]=_}for(let S=0;S<g;S++){const T=_[S];T[0]=S,T[1]=h[S]}_.sort(Lp);for(let S=0;S<8;S++)S<g&&_[S][1]?(s[S][0]=_[S][0],s[S][1]=_[S][1]):(s[S][0]=Number.MAX_SAFE_INTEGER,s[S][1]=0);s.sort(Up);const d=u.morphAttributes.position,m=u.morphAttributes.normal;let E=0;for(let S=0;S<8;S++){const T=s[S],U=T[0],w=T[1];U!==Number.MAX_SAFE_INTEGER&&w?(d&&u.getAttribute("morphTarget"+S)!==d[U]&&u.setAttribute("morphTarget"+S,d[U]),m&&u.getAttribute("morphNormal"+S)!==m[U]&&u.setAttribute("morphNormal"+S,m[U]),n[S]=w,E+=w):(d&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),m&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),n[S]=0)}const v=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(a,"morphTargetBaseInfluence",v),f.getUniforms().setValue(a,"morphTargetInfluences",n)}}return{update:l}}function Dp(a,e,t,r){let n=new WeakMap;function i(l){const c=r.render.frame,u=l.geometry,f=e.get(l,u);if(n.get(f)!==c&&(e.update(f),n.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),n.get(l)!==c&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;n.get(h)!==c&&(h.update(),n.set(h,c))}return f}function o(){n=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:i,dispose:o}}const Wc=new Ut,Xc=new Nc,Yc=new Sf,qc=new Hc,Pl=[],Dl=[],Il=new Float32Array(16),Fl=new Float32Array(9),Nl=new Float32Array(4);function Hi(a,e,t){const r=a[0];if(r<=0||r>0)return a;const n=e*t;let i=Pl[n];if(i===void 0&&(i=new Float32Array(n),Pl[n]=i),e!==0){r.toArray(i,0);for(let o=1,s=0;o!==e;++o)s+=t,a[o].toArray(i,s)}return i}function mt(a,e){if(a.length!==e.length)return!1;for(let t=0,r=a.length;t<r;t++)if(a[t]!==e[t])return!1;return!0}function gt(a,e){for(let t=0,r=e.length;t<r;t++)a[t]=e[t]}function Ta(a,e){let t=Dl[e];t===void 0&&(t=new Int32Array(e),Dl[e]=t);for(let r=0;r!==e;++r)t[r]=a.allocateTextureUnit();return t}function Ip(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Fp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;a.uniform2fv(this.addr,e),gt(t,e)}}function Np(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;a.uniform3fv(this.addr,e),gt(t,e)}}function Op(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;a.uniform4fv(this.addr,e),gt(t,e)}}function Bp(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(mt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,r))return;Nl.set(r),a.uniformMatrix2fv(this.addr,!1,Nl),gt(t,r)}}function Gp(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(mt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,r))return;Fl.set(r),a.uniformMatrix3fv(this.addr,!1,Fl),gt(t,r)}}function kp(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(mt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,r))return;Il.set(r),a.uniformMatrix4fv(this.addr,!1,Il),gt(t,r)}}function zp(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Hp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;a.uniform2iv(this.addr,e),gt(t,e)}}function Vp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;a.uniform3iv(this.addr,e),gt(t,e)}}function Wp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;a.uniform4iv(this.addr,e),gt(t,e)}}function Xp(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Yp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;a.uniform2uiv(this.addr,e),gt(t,e)}}function qp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;a.uniform3uiv(this.addr,e),gt(t,e)}}function jp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;a.uniform4uiv(this.addr,e),gt(t,e)}}function Kp(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTexture2D(e||Wc,n)}function Zp(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||Yc,n)}function Jp(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||qc,n)}function Qp(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||Xc,n)}function $p(a){switch(a){case 5126:return Ip;case 35664:return Fp;case 35665:return Np;case 35666:return Op;case 35674:return Bp;case 35675:return Gp;case 35676:return kp;case 5124:case 35670:return zp;case 35667:case 35671:return Hp;case 35668:case 35672:return Vp;case 35669:case 35673:return Wp;case 5125:return Xp;case 36294:return Yp;case 36295:return qp;case 36296:return jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Kp;case 35679:case 36299:case 36307:return Zp;case 35680:case 36300:case 36308:case 36293:return Jp;case 36289:case 36303:case 36311:case 36292:return Qp}}function em(a,e){a.uniform1fv(this.addr,e)}function tm(a,e){const t=Hi(e,this.size,2);a.uniform2fv(this.addr,t)}function nm(a,e){const t=Hi(e,this.size,3);a.uniform3fv(this.addr,t)}function im(a,e){const t=Hi(e,this.size,4);a.uniform4fv(this.addr,t)}function rm(a,e){const t=Hi(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function am(a,e){const t=Hi(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function sm(a,e){const t=Hi(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function om(a,e){a.uniform1iv(this.addr,e)}function lm(a,e){a.uniform2iv(this.addr,e)}function cm(a,e){a.uniform3iv(this.addr,e)}function um(a,e){a.uniform4iv(this.addr,e)}function fm(a,e){a.uniform1uiv(this.addr,e)}function hm(a,e){a.uniform2uiv(this.addr,e)}function dm(a,e){a.uniform3uiv(this.addr,e)}function pm(a,e){a.uniform4uiv(this.addr,e)}function mm(a,e,t){const r=this.cache,n=e.length,i=Ta(t,n);mt(r,i)||(a.uniform1iv(this.addr,i),gt(r,i));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||Wc,i[o])}function gm(a,e,t){const r=this.cache,n=e.length,i=Ta(t,n);mt(r,i)||(a.uniform1iv(this.addr,i),gt(r,i));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||Yc,i[o])}function _m(a,e,t){const r=this.cache,n=e.length,i=Ta(t,n);mt(r,i)||(a.uniform1iv(this.addr,i),gt(r,i));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||qc,i[o])}function vm(a,e,t){const r=this.cache,n=e.length,i=Ta(t,n);mt(r,i)||(a.uniform1iv(this.addr,i),gt(r,i));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||Xc,i[o])}function xm(a){switch(a){case 5126:return em;case 35664:return tm;case 35665:return nm;case 35666:return im;case 35674:return rm;case 35675:return am;case 35676:return sm;case 5124:case 35670:return om;case 35667:case 35671:return lm;case 35668:case 35672:return cm;case 35669:case 35673:return um;case 5125:return fm;case 36294:return hm;case 36295:return dm;case 36296:return pm;case 35678:case 36198:case 36298:case 36306:case 35682:return mm;case 35679:case 36299:case 36307:return gm;case 35680:case 36300:case 36308:case 36293:return _m;case 36289:case 36303:case 36311:case 36292:return vm}}class Sm{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.setValue=$p(t.type)}}class Mm{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.size=t.size,this.setValue=xm(t.type)}}class ym{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let i=0,o=n.length;i!==o;++i){const s=n[i];s.setValue(e,t[s.id],r)}}}const ms=/(\w+)(\])?(\[|\.)?/g;function Ol(a,e){a.seq.push(e),a.map[e.id]=e}function Em(a,e,t){const r=a.name,n=r.length;for(ms.lastIndex=0;;){const i=ms.exec(r),o=ms.lastIndex;let s=i[1];const l=i[2]==="]",c=i[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===n){Ol(t,c===void 0?new Sm(s,a,e):new Mm(s,a,e));break}else{let f=t.map[s];f===void 0&&(f=new ym(s),Ol(t,f)),t=f}}}class oa{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){const i=e.getActiveUniform(t,n),o=e.getUniformLocation(t,i.name);Em(i,o,this)}}setValue(e,t,r,n){const i=this.map[t];i!==void 0&&i.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let i=0,o=t.length;i!==o;++i){const s=t[i],l=r[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,i=e.length;n!==i;++n){const o=e[n];o.id in t&&r.push(o)}return r}}function Bl(a,e,t){const r=a.createShader(e);return a.shaderSource(r,t),a.compileShader(r),r}const Tm=37297;let bm=0;function Am(a,e){const t=a.split(`
`),r=[],n=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let o=n;o<i;o++){const s=o+1;r.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return r.join(`
`)}function wm(a){const e=$e.getPrimaries($e.workingColorSpace),t=$e.getPrimaries(a);let r;switch(e===t?r="":e===da&&t===ha?r="LinearDisplayP3ToLinearSRGB":e===ha&&t===da&&(r="LinearSRGBToLinearDisplayP3"),a){case Ln:case Ma:return[r,"LinearTransferOETF"];case dt:case no:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),[r,"LinearTransferOETF"]}}function Gl(a,e,t){const r=a.getShaderParameter(e,a.COMPILE_STATUS),n=a.getShaderInfoLog(e).trim();if(r&&n==="")return"";const i=/ERROR: 0:(\d+)/.exec(n);if(i){const o=parseInt(i[1]);return t.toUpperCase()+`

`+n+`

`+Am(a.getShaderSource(e),o)}else return n}function Rm(a,e){const t=wm(e);return`vec4 ${a}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Cm(a,e){let t;switch(e){case Sc:t="Linear";break;case Mc:t="Reinhard";break;case eo:t="OptimizedCineon";break;case yc:t="ACESFilmic";break;case Yu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Um(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.normalMapTangentSpace||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(pr).join(`
`)}function Lm(a){const e=[];for(const t in a){const r=a[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Pm(a,e){const t={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const i=a.getActiveAttrib(e,n),o=i.name;let s=1;i.type===a.FLOAT_MAT2&&(s=2),i.type===a.FLOAT_MAT3&&(s=3),i.type===a.FLOAT_MAT4&&(s=4),t[o]={type:i.type,location:a.getAttribLocation(e,o),locationSize:s}}return t}function pr(a){return a!==""}function kl(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zl(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Is(a){return a.replace(Dm,Fm)}const Im=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Fm(a,e){let t=je[e];if(t===void 0){const r=Im.get(e);if(r!==void 0)t=je[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Is(t)}const Nm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hl(a){return a.replace(Nm,Om)}function Om(a,e,t,r){let n="";for(let i=parseInt(e);i<parseInt(t);i++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return n}function Vl(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Bm(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===vc?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Su?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===An&&(e="SHADOWMAP_TYPE_VSM"),e}function Gm(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Pi:case Di:e="ENVMAP_TYPE_CUBE";break;case Sa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function km(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Di:e="ENVMAP_MODE_REFRACTION";break}return e}function zm(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case xc:e="ENVMAP_BLENDING_MULTIPLY";break;case Wu:e="ENVMAP_BLENDING_MIX";break;case Xu:e="ENVMAP_BLENDING_ADD";break}return e}function Hm(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function Vm(a,e,t,r){const n=a.getContext(),i=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=Bm(t),c=Gm(t),u=km(t),f=zm(t),h=Hm(t),p=t.isWebGL2?"":Um(t),g=Lm(i),_=n.createProgram();let d,m,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pr).join(`
`),d.length>0&&(d+=`
`),m=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pr).join(`
`),m.length>0&&(m+=`
`)):(d=[Vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),m=[p,Vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?je.tonemapping_pars_fragment:"",t.toneMapping!==Wn?Cm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Rm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pr).join(`
`)),o=Is(o),o=kl(o,t),o=zl(o,t),s=Is(s),s=kl(s,t),s=zl(s,t),o=Hl(o),s=Hl(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=E+d+o,S=E+m+s,T=Bl(n,n.VERTEX_SHADER,v),U=Bl(n,n.FRAGMENT_SHADER,S);n.attachShader(_,T),n.attachShader(_,U),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function w(q){if(a.debug.checkShaderErrors){const P=n.getProgramInfoLog(_).trim(),B=n.getShaderInfoLog(T).trim(),R=n.getShaderInfoLog(U).trim();let G=!0,k=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(G=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(n,_,T,U);else{const Y=Gl(n,T,"vertex"),ee=Gl(n,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Program Info Log: `+P+`
`+Y+`
`+ee)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(B===""||R==="")&&(k=!1);k&&(q.diagnostics={runnable:G,programLog:P,vertexShader:{log:B,prefix:d},fragmentShader:{log:R,prefix:m}})}n.deleteShader(T),n.deleteShader(U),I=new oa(n,_),M=Pm(n,_)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=n.getProgramParameter(_,Tm)),b},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=U,this}let Wm=0;class Xm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),i=this._getShaderStage(r),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(i)===!1&&(o.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Ym(e),t.set(e,r)),r}}class Ym{constructor(e){this.id=Wm++,this.code=e,this.usedTimes=0}}function qm(a,e,t,r,n,i,o){const s=new Ea,l=new Xm,c=[],u=n.isWebGL2,f=n.logarithmicDepthBuffer,h=n.vertexTextures;let p=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function d(M,b,q,P,B){const R=P.fog,G=B.geometry,k=M.isMeshStandardMaterial?P.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||k),ee=Y&&Y.mapping===Sa?Y.image.height:null,V=g[M.type];M.precision!==null&&(p=n.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const N=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,y=N!==void 0?N.length:0;let L=0;G.morphAttributes.position!==void 0&&(L=1),G.morphAttributes.normal!==void 0&&(L=2),G.morphAttributes.color!==void 0&&(L=3);let z,W,H,te;if(V){const We=mn[V];z=We.vertexShader,W=We.fragmentShader}else z=M.vertexShader,W=M.fragmentShader,l.update(M),H=l.getVertexShaderID(M),te=l.getFragmentShaderID(M);const J=a.getRenderTarget(),Q=B.isInstancedMesh===!0,he=!!M.map,be=!!M.matcap,oe=!!Y,D=!!M.aoMap,ke=!!M.lightMap,_e=!!M.bumpMap,Se=!!M.normalMap,xe=!!M.displacementMap,Ne=!!M.emissiveMap,le=!!M.metalnessMap,ve=!!M.roughnessMap,ye=M.anisotropy>0,ae=M.clearcoat>0,Ie=M.iridescence>0,A=M.sheen>0,x=M.transmission>0,O=ye&&!!M.anisotropyMap,fe=ae&&!!M.clearcoatMap,Z=ae&&!!M.clearcoatNormalMap,ie=ae&&!!M.clearcoatRoughnessMap,de=Ie&&!!M.iridescenceMap,ce=Ie&&!!M.iridescenceThicknessMap,ge=A&&!!M.sheenColorMap,Ce=A&&!!M.sheenRoughnessMap,Ue=!!M.specularMap,se=!!M.specularColorMap,Ee=!!M.specularIntensityMap,we=x&&!!M.transmissionMap,Fe=x&&!!M.thicknessMap,Oe=!!M.gradientMap,Me=!!M.alphaMap,Te=M.alphaTest>0,F=!!M.alphaHash,Ae=!!M.extensions,ue=!!G.attributes.uv1,K=!!G.attributes.uv2,pe=!!G.attributes.uv3;let Le=Wn;return M.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Le=a.toneMapping),{isWebGL2:u,shaderID:V,shaderType:M.type,shaderName:M.name,vertexShader:z,fragmentShader:W,defines:M.defines,customVertexShaderID:H,customFragmentShaderID:te,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:Q,instancingColor:Q&&B.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:J===null?a.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ln,map:he,matcap:be,envMap:oe,envMapMode:oe&&Y.mapping,envMapCubeUVHeight:ee,aoMap:D,lightMap:ke,bumpMap:_e,normalMap:Se,displacementMap:h&&xe,emissiveMap:Ne,normalMapObjectSpace:Se&&M.normalMapType===af,normalMapTangentSpace:Se&&M.normalMapType===Pc,metalnessMap:le,roughnessMap:ve,anisotropy:ye,anisotropyMap:O,clearcoat:ae,clearcoatMap:fe,clearcoatNormalMap:Z,clearcoatRoughnessMap:ie,iridescence:Ie,iridescenceMap:de,iridescenceThicknessMap:ce,sheen:A,sheenColorMap:ge,sheenRoughnessMap:Ce,specularMap:Ue,specularColorMap:se,specularIntensityMap:Ee,transmission:x,transmissionMap:we,thicknessMap:Fe,gradientMap:Oe,opaque:M.transparent===!1&&M.blending===Ui,alphaMap:Me,alphaTest:Te,alphaHash:F,combine:M.combine,mapUv:he&&_(M.map.channel),aoMapUv:D&&_(M.aoMap.channel),lightMapUv:ke&&_(M.lightMap.channel),bumpMapUv:_e&&_(M.bumpMap.channel),normalMapUv:Se&&_(M.normalMap.channel),displacementMapUv:xe&&_(M.displacementMap.channel),emissiveMapUv:Ne&&_(M.emissiveMap.channel),metalnessMapUv:le&&_(M.metalnessMap.channel),roughnessMapUv:ve&&_(M.roughnessMap.channel),anisotropyMapUv:O&&_(M.anisotropyMap.channel),clearcoatMapUv:fe&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Z&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(M.sheenRoughnessMap.channel),specularMapUv:Ue&&_(M.specularMap.channel),specularColorMapUv:se&&_(M.specularColorMap.channel),specularIntensityMapUv:Ee&&_(M.specularIntensityMap.channel),transmissionMapUv:we&&_(M.transmissionMap.channel),thicknessMapUv:Fe&&_(M.thicknessMap.channel),alphaMapUv:Me&&_(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Se||ye),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:ue,vertexUv2s:K,vertexUv3s:pe,pointsUvs:B.isPoints===!0&&!!G.attributes.uv&&(he||Me),fog:!!R,useFog:M.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:B.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:y,morphTextureStride:L,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:a.shadowMap.enabled&&q.length>0,shadowMapType:a.shadowMap.type,toneMapping:Le,useLegacyLights:a._useLegacyLights,decodeVideoTexture:he&&M.map.isVideoTexture===!0&&$e.getTransfer(M.map.colorSpace)===it,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ln,flipSided:M.side===Ct,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Ae&&M.extensions.derivatives===!0,extensionFragDepth:Ae&&M.extensions.fragDepth===!0,extensionDrawBuffers:Ae&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ae&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const q in M.defines)b.push(q),b.push(M.defines[q]);return M.isRawShaderMaterial===!1&&(E(b,M),v(b,M),b.push(a.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function E(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function v(M,b){s.disableAll(),b.isWebGL2&&s.enable(0),b.supportsVertexTextures&&s.enable(1),b.instancing&&s.enable(2),b.instancingColor&&s.enable(3),b.matcap&&s.enable(4),b.envMap&&s.enable(5),b.normalMapObjectSpace&&s.enable(6),b.normalMapTangentSpace&&s.enable(7),b.clearcoat&&s.enable(8),b.iridescence&&s.enable(9),b.alphaTest&&s.enable(10),b.vertexColors&&s.enable(11),b.vertexAlphas&&s.enable(12),b.vertexUv1s&&s.enable(13),b.vertexUv2s&&s.enable(14),b.vertexUv3s&&s.enable(15),b.vertexTangents&&s.enable(16),b.anisotropy&&s.enable(17),b.alphaHash&&s.enable(18),M.push(s.mask),s.disableAll(),b.fog&&s.enable(0),b.useFog&&s.enable(1),b.flatShading&&s.enable(2),b.logarithmicDepthBuffer&&s.enable(3),b.skinning&&s.enable(4),b.morphTargets&&s.enable(5),b.morphNormals&&s.enable(6),b.morphColors&&s.enable(7),b.premultipliedAlpha&&s.enable(8),b.shadowMapEnabled&&s.enable(9),b.useLegacyLights&&s.enable(10),b.doubleSided&&s.enable(11),b.flipSided&&s.enable(12),b.useDepthPacking&&s.enable(13),b.dithering&&s.enable(14),b.transmission&&s.enable(15),b.sheen&&s.enable(16),b.opaque&&s.enable(17),b.pointsUvs&&s.enable(18),b.decodeVideoTexture&&s.enable(19),M.push(s.mask)}function S(M){const b=g[M.type];let q;if(b){const P=mn[b];q=Ni.clone(P.uniforms)}else q=M.uniforms;return q}function T(M,b){let q;for(let P=0,B=c.length;P<B;P++){const R=c[P];if(R.cacheKey===b){q=R,++q.usedTimes;break}}return q===void 0&&(q=new Vm(a,b,M,i),c.push(q)),q}function U(M){if(--M.usedTimes===0){const b=c.indexOf(M);c[b]=c[c.length-1],c.pop(),M.destroy()}}function w(M){l.remove(M)}function I(){l.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:S,acquireProgram:T,releaseProgram:U,releaseShaderCache:w,programs:c,dispose:I}}function jm(){let a=new WeakMap;function e(i){let o=a.get(i);return o===void 0&&(o={},a.set(i,o)),o}function t(i){a.delete(i)}function r(i,o,s){a.get(i)[o]=s}function n(){a=new WeakMap}return{get:e,remove:t,update:r,dispose:n}}function Km(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Wl(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Xl(){const a=[];let e=0;const t=[],r=[],n=[];function i(){e=0,t.length=0,r.length=0,n.length=0}function o(f,h,p,g,_,d){let m=a[e];return m===void 0?(m={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:d},a[e]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=p,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=d),e++,m}function s(f,h,p,g,_,d){const m=o(f,h,p,g,_,d);p.transmission>0?r.push(m):p.transparent===!0?n.push(m):t.push(m)}function l(f,h,p,g,_,d){const m=o(f,h,p,g,_,d);p.transmission>0?r.unshift(m):p.transparent===!0?n.unshift(m):t.unshift(m)}function c(f,h){t.length>1&&t.sort(f||Km),r.length>1&&r.sort(h||Wl),n.length>1&&n.sort(h||Wl)}function u(){for(let f=e,h=a.length;f<h;f++){const p=a[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:r,transparent:n,init:i,push:s,unshift:l,finish:u,sort:c}}function Zm(){let a=new WeakMap;function e(r,n){const i=a.get(r);let o;return i===void 0?(o=new Xl,a.set(r,[o])):n>=i.length?(o=new Xl,i.push(o)):o=i[n],o}function t(){a=new WeakMap}return{get:e,dispose:t}}function Jm(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new Ke};break;case"SpotLight":t={position:new X,direction:new X,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new X,halfWidth:new X,halfHeight:new X};break}return a[e.id]=t,t}}}function Qm(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let $m=0;function eg(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function tg(a,e){const t=new Jm,r=Qm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new X);const i=new X,o=new ct,s=new ct;function l(u,f){let h=0,p=0,g=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let _=0,d=0,m=0,E=0,v=0,S=0,T=0,U=0,w=0,I=0,M=0;u.sort(eg);const b=f===!0?Math.PI:1;for(let P=0,B=u.length;P<B;P++){const R=u[P],G=R.color,k=R.intensity,Y=R.distance,ee=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=G.r*k*b,p+=G.g*k*b,g+=G.b*k*b;else if(R.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(R.sh.coefficients[V],k);M++}else if(R.isDirectionalLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity*b),R.castShadow){const N=R.shadow,y=r.get(R);y.shadowBias=N.bias,y.shadowNormalBias=N.normalBias,y.shadowRadius=N.radius,y.shadowMapSize=N.mapSize,n.directionalShadow[_]=y,n.directionalShadowMap[_]=ee,n.directionalShadowMatrix[_]=R.shadow.matrix,S++}n.directional[_]=V,_++}else if(R.isSpotLight){const V=t.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(G).multiplyScalar(k*b),V.distance=Y,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,n.spot[m]=V;const N=R.shadow;if(R.map&&(n.spotLightMap[w]=R.map,w++,N.updateMatrices(R),R.castShadow&&I++),n.spotLightMatrix[m]=N.matrix,R.castShadow){const y=r.get(R);y.shadowBias=N.bias,y.shadowNormalBias=N.normalBias,y.shadowRadius=N.radius,y.shadowMapSize=N.mapSize,n.spotShadow[m]=y,n.spotShadowMap[m]=ee,U++}m++}else if(R.isRectAreaLight){const V=t.get(R);V.color.copy(G).multiplyScalar(k),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),n.rectArea[E]=V,E++}else if(R.isPointLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity*b),V.distance=R.distance,V.decay=R.decay,R.castShadow){const N=R.shadow,y=r.get(R);y.shadowBias=N.bias,y.shadowNormalBias=N.normalBias,y.shadowRadius=N.radius,y.shadowMapSize=N.mapSize,y.shadowCameraNear=N.camera.near,y.shadowCameraFar=N.camera.far,n.pointShadow[d]=y,n.pointShadowMap[d]=ee,n.pointShadowMatrix[d]=R.shadow.matrix,T++}n.point[d]=V,d++}else if(R.isHemisphereLight){const V=t.get(R);V.skyColor.copy(R.color).multiplyScalar(k*b),V.groundColor.copy(R.groundColor).multiplyScalar(k*b),n.hemi[v]=V,v++}}E>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=g;const q=n.hash;(q.directionalLength!==_||q.pointLength!==d||q.spotLength!==m||q.rectAreaLength!==E||q.hemiLength!==v||q.numDirectionalShadows!==S||q.numPointShadows!==T||q.numSpotShadows!==U||q.numSpotMaps!==w||q.numLightProbes!==M)&&(n.directional.length=_,n.spot.length=m,n.rectArea.length=E,n.point.length=d,n.hemi.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=U,n.spotShadowMap.length=U,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=U+w-I,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=M,q.directionalLength=_,q.pointLength=d,q.spotLength=m,q.rectAreaLength=E,q.hemiLength=v,q.numDirectionalShadows=S,q.numPointShadows=T,q.numSpotShadows=U,q.numSpotMaps=w,q.numLightProbes=M,n.version=$m++)}function c(u,f){let h=0,p=0,g=0,_=0,d=0;const m=f.matrixWorldInverse;for(let E=0,v=u.length;E<v;E++){const S=u[E];if(S.isDirectionalLight){const T=n.directional[h];T.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(m),h++}else if(S.isSpotLight){const T=n.spot[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(m),g++}else if(S.isRectAreaLight){const T=n.rectArea[_];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),s.identity(),o.copy(S.matrixWorld),o.premultiply(m),s.extractRotation(o),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(s),T.halfHeight.applyMatrix4(s),_++}else if(S.isPointLight){const T=n.point[p];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),p++}else if(S.isHemisphereLight){const T=n.hemi[d];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(m),d++}}}return{setup:l,setupView:c,state:n}}function Yl(a,e){const t=new tg(a,e),r=[],n=[];function i(){r.length=0,n.length=0}function o(f){r.push(f)}function s(f){n.push(f)}function l(f){t.setup(r,f)}function c(f){t.setupView(r,f)}return{init:i,state:{lightsArray:r,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function ng(a,e){let t=new WeakMap;function r(i,o=0){const s=t.get(i);let l;return s===void 0?(l=new Yl(a,e),t.set(i,[l])):o>=s.length?(l=new Yl(a,e),s.push(l)):l=s[o],l}function n(){t=new WeakMap}return{get:r,dispose:n}}class jc extends zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Kc extends zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ig=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ag(a,e,t){let r=new ro;const n=new Ve,i=new Ve,o=new ht,s=new jc({depthPacking:Lc}),l=new Kc,c={},u=t.maxTextureSize,f={[Un]:Ct,[Ct]:Un,[ln]:ln},h=new Rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:ig,fragmentShader:rg}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Wt;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new rt(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vc;let m=this.type;this.render=function(T,U,w){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||T.length===0)return;const I=a.getRenderTarget(),M=a.getActiveCubeFace(),b=a.getActiveMipmapLevel(),q=a.state;q.setBlending(Rn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const P=m!==An&&this.type===An,B=m===An&&this.type!==An;for(let R=0,G=T.length;R<G;R++){const k=T[R],Y=k.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;n.copy(Y.mapSize);const ee=Y.getFrameExtents();if(n.multiply(ee),i.copy(Y.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(i.x=Math.floor(u/ee.x),n.x=i.x*ee.x,Y.mapSize.x=i.x),n.y>u&&(i.y=Math.floor(u/ee.y),n.y=i.y*ee.y,Y.mapSize.y=i.y)),Y.map===null||P===!0||B===!0){const N=this.type!==An?{minFilter:At,magFilter:At}:{};Y.map!==null&&Y.map.dispose(),Y.map=new fn(n.x,n.y,N),Y.map.texture.name=k.name+".shadowMap",Y.camera.updateProjectionMatrix()}a.setRenderTarget(Y.map),a.clear();const V=Y.getViewportCount();for(let N=0;N<V;N++){const y=Y.getViewport(N);o.set(i.x*y.x,i.y*y.y,i.x*y.z,i.y*y.w),q.viewport(o),Y.updateMatrices(k,N),r=Y.getFrustum(),S(U,w,Y.camera,k,this.type)}Y.isPointLightShadow!==!0&&this.type===An&&E(Y,w),Y.needsUpdate=!1}m=this.type,d.needsUpdate=!1,a.setRenderTarget(I,M,b)};function E(T,U){const w=e.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new fn(n.x,n.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,a.setRenderTarget(T.mapPass),a.clear(),a.renderBufferDirect(U,null,w,h,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,a.setRenderTarget(T.map),a.clear(),a.renderBufferDirect(U,null,w,p,_,null)}function v(T,U,w,I){let M=null;const b=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(b!==void 0)M=b;else if(M=w.isPointLight===!0?l:s,a.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const q=M.uuid,P=U.uuid;let B=c[q];B===void 0&&(B={},c[q]=B);let R=B[P];R===void 0&&(R=M.clone(),B[P]=R),M=R}if(M.visible=U.visible,M.wireframe=U.wireframe,I===An?M.side=U.shadowSide!==null?U.shadowSide:U.side:M.side=U.shadowSide!==null?U.shadowSide:f[U.side],M.alphaMap=U.alphaMap,M.alphaTest=U.alphaTest,M.map=U.map,M.clipShadows=U.clipShadows,M.clippingPlanes=U.clippingPlanes,M.clipIntersection=U.clipIntersection,M.displacementMap=U.displacementMap,M.displacementScale=U.displacementScale,M.displacementBias=U.displacementBias,M.wireframeLinewidth=U.wireframeLinewidth,M.linewidth=U.linewidth,w.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const q=a.properties.get(M);q.light=w}return M}function S(T,U,w,I,M){if(T.visible===!1)return;if(T.layers.test(U.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===An)&&(!T.frustumCulled||r.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);const P=e.update(T),B=T.material;if(Array.isArray(B)){const R=P.groups;for(let G=0,k=R.length;G<k;G++){const Y=R[G],ee=B[Y.materialIndex];if(ee&&ee.visible){const V=v(T,ee,I,M);a.renderBufferDirect(w,null,P,V,T,Y)}}}else if(B.visible){const R=v(T,B,I,M);a.renderBufferDirect(w,null,P,R,T,null)}}const q=T.children;for(let P=0,B=q.length;P<B;P++)S(q[P],U,w,I,M)}}function sg(a,e,t){const r=t.isWebGL2;function n(){let F=!1;const Ae=new ht;let ue=null;const K=new ht(0,0,0,0);return{setMask:function(pe){ue!==pe&&!F&&(a.colorMask(pe,pe,pe,pe),ue=pe)},setLocked:function(pe){F=pe},setClear:function(pe,Le,Pe,We,et){et===!0&&(pe*=We,Le*=We,Pe*=We),Ae.set(pe,Le,Pe,We),K.equals(Ae)===!1&&(a.clearColor(pe,Le,Pe,We),K.copy(Ae))},reset:function(){F=!1,ue=null,K.set(-1,0,0,0)}}}function i(){let F=!1,Ae=null,ue=null,K=null;return{setTest:function(pe){pe?he(a.DEPTH_TEST):be(a.DEPTH_TEST)},setMask:function(pe){Ae!==pe&&!F&&(a.depthMask(pe),Ae=pe)},setFunc:function(pe){if(ue!==pe){switch(pe){case Ou:a.depthFunc(a.NEVER);break;case Bu:a.depthFunc(a.ALWAYS);break;case Gu:a.depthFunc(a.LESS);break;case ua:a.depthFunc(a.LEQUAL);break;case ku:a.depthFunc(a.EQUAL);break;case zu:a.depthFunc(a.GEQUAL);break;case Hu:a.depthFunc(a.GREATER);break;case Vu:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}ue=pe}},setLocked:function(pe){F=pe},setClear:function(pe){K!==pe&&(a.clearDepth(pe),K=pe)},reset:function(){F=!1,Ae=null,ue=null,K=null}}}function o(){let F=!1,Ae=null,ue=null,K=null,pe=null,Le=null,Pe=null,We=null,et=null;return{setTest:function(qe){F||(qe?he(a.STENCIL_TEST):be(a.STENCIL_TEST))},setMask:function(qe){Ae!==qe&&!F&&(a.stencilMask(qe),Ae=qe)},setFunc:function(qe,Qe,st){(ue!==qe||K!==Qe||pe!==st)&&(a.stencilFunc(qe,Qe,st),ue=qe,K=Qe,pe=st)},setOp:function(qe,Qe,st){(Le!==qe||Pe!==Qe||We!==st)&&(a.stencilOp(qe,Qe,st),Le=qe,Pe=Qe,We=st)},setLocked:function(qe){F=qe},setClear:function(qe){et!==qe&&(a.clearStencil(qe),et=qe)},reset:function(){F=!1,Ae=null,ue=null,K=null,pe=null,Le=null,Pe=null,We=null,et=null}}}const s=new n,l=new i,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},g=new WeakMap,_=[],d=null,m=!1,E=null,v=null,S=null,T=null,U=null,w=null,I=null,M=new Ke(0,0,0),b=0,q=!1,P=null,B=null,R=null,G=null,k=null;const Y=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,V=0;const N=a.getParameter(a.VERSION);N.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(N)[1]),ee=V>=1):N.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),ee=V>=2);let y=null,L={};const z=a.getParameter(a.SCISSOR_BOX),W=a.getParameter(a.VIEWPORT),H=new ht().fromArray(z),te=new ht().fromArray(W);function J(F,Ae,ue,K){const pe=new Uint8Array(4),Le=a.createTexture();a.bindTexture(F,Le),a.texParameteri(F,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(F,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Pe=0;Pe<ue;Pe++)r&&(F===a.TEXTURE_3D||F===a.TEXTURE_2D_ARRAY)?a.texImage3D(Ae,0,a.RGBA,1,1,K,0,a.RGBA,a.UNSIGNED_BYTE,pe):a.texImage2D(Ae+Pe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,pe);return Le}const Q={};Q[a.TEXTURE_2D]=J(a.TEXTURE_2D,a.TEXTURE_2D,1),Q[a.TEXTURE_CUBE_MAP]=J(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Q[a.TEXTURE_2D_ARRAY]=J(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Q[a.TEXTURE_3D]=J(a.TEXTURE_3D,a.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),he(a.DEPTH_TEST),l.setFunc(ua),le(!1),ve(Ro),he(a.CULL_FACE),xe(Rn);function he(F){h[F]!==!0&&(a.enable(F),h[F]=!0)}function be(F){h[F]!==!1&&(a.disable(F),h[F]=!1)}function oe(F,Ae){return p[F]!==Ae?(a.bindFramebuffer(F,Ae),p[F]=Ae,r&&(F===a.DRAW_FRAMEBUFFER&&(p[a.FRAMEBUFFER]=Ae),F===a.FRAMEBUFFER&&(p[a.DRAW_FRAMEBUFFER]=Ae)),!0):!1}function D(F,Ae){let ue=_,K=!1;if(F)if(ue=g.get(Ae),ue===void 0&&(ue=[],g.set(Ae,ue)),F.isWebGLMultipleRenderTargets){const pe=F.texture;if(ue.length!==pe.length||ue[0]!==a.COLOR_ATTACHMENT0){for(let Le=0,Pe=pe.length;Le<Pe;Le++)ue[Le]=a.COLOR_ATTACHMENT0+Le;ue.length=pe.length,K=!0}}else ue[0]!==a.COLOR_ATTACHMENT0&&(ue[0]=a.COLOR_ATTACHMENT0,K=!0);else ue[0]!==a.BACK&&(ue[0]=a.BACK,K=!0);K&&(t.isWebGL2?a.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function ke(F){return d!==F?(a.useProgram(F),d=F,!0):!1}const _e={[ni]:a.FUNC_ADD,[yu]:a.FUNC_SUBTRACT,[Eu]:a.FUNC_REVERSE_SUBTRACT};if(r)_e[Lo]=a.MIN,_e[Po]=a.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(_e[Lo]=F.MIN_EXT,_e[Po]=F.MAX_EXT)}const Se={[Tu]:a.ZERO,[bu]:a.ONE,[Au]:a.SRC_COLOR,[bs]:a.SRC_ALPHA,[Pu]:a.SRC_ALPHA_SATURATE,[Uu]:a.DST_COLOR,[Ru]:a.DST_ALPHA,[wu]:a.ONE_MINUS_SRC_COLOR,[As]:a.ONE_MINUS_SRC_ALPHA,[Lu]:a.ONE_MINUS_DST_COLOR,[Cu]:a.ONE_MINUS_DST_ALPHA,[Du]:a.CONSTANT_COLOR,[Iu]:a.ONE_MINUS_CONSTANT_COLOR,[Fu]:a.CONSTANT_ALPHA,[Nu]:a.ONE_MINUS_CONSTANT_ALPHA};function xe(F,Ae,ue,K,pe,Le,Pe,We,et,qe){if(F===Rn){m===!0&&(be(a.BLEND),m=!1);return}if(m===!1&&(he(a.BLEND),m=!0),F!==Mu){if(F!==E||qe!==q){if((v!==ni||U!==ni)&&(a.blendEquation(a.FUNC_ADD),v=ni,U=ni),qe)switch(F){case Ui:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ts:a.blendFunc(a.ONE,a.ONE);break;case Co:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Uo:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ui:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ts:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case Co:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Uo:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}S=null,T=null,w=null,I=null,M.set(0,0,0),b=0,E=F,q=qe}return}pe=pe||Ae,Le=Le||ue,Pe=Pe||K,(Ae!==v||pe!==U)&&(a.blendEquationSeparate(_e[Ae],_e[pe]),v=Ae,U=pe),(ue!==S||K!==T||Le!==w||Pe!==I)&&(a.blendFuncSeparate(Se[ue],Se[K],Se[Le],Se[Pe]),S=ue,T=K,w=Le,I=Pe),(We.equals(M)===!1||et!==b)&&(a.blendColor(We.r,We.g,We.b,et),M.copy(We),b=et),E=F,q=!1}function Ne(F,Ae){F.side===ln?be(a.CULL_FACE):he(a.CULL_FACE);let ue=F.side===Ct;Ae&&(ue=!ue),le(ue),F.blending===Ui&&F.transparent===!1?xe(Rn):xe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),s.setMask(F.colorWrite);const K=F.stencilWrite;c.setTest(K),K&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ae(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?he(a.SAMPLE_ALPHA_TO_COVERAGE):be(a.SAMPLE_ALPHA_TO_COVERAGE)}function le(F){P!==F&&(F?a.frontFace(a.CW):a.frontFace(a.CCW),P=F)}function ve(F){F!==vu?(he(a.CULL_FACE),F!==B&&(F===Ro?a.cullFace(a.BACK):F===xu?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):be(a.CULL_FACE),B=F}function ye(F){F!==R&&(ee&&a.lineWidth(F),R=F)}function ae(F,Ae,ue){F?(he(a.POLYGON_OFFSET_FILL),(G!==Ae||k!==ue)&&(a.polygonOffset(Ae,ue),G=Ae,k=ue)):be(a.POLYGON_OFFSET_FILL)}function Ie(F){F?he(a.SCISSOR_TEST):be(a.SCISSOR_TEST)}function A(F){F===void 0&&(F=a.TEXTURE0+Y-1),y!==F&&(a.activeTexture(F),y=F)}function x(F,Ae,ue){ue===void 0&&(y===null?ue=a.TEXTURE0+Y-1:ue=y);let K=L[ue];K===void 0&&(K={type:void 0,texture:void 0},L[ue]=K),(K.type!==F||K.texture!==Ae)&&(y!==ue&&(a.activeTexture(ue),y=ue),a.bindTexture(F,Ae||Q[F]),K.type=F,K.texture=Ae)}function O(){const F=L[y];F!==void 0&&F.type!==void 0&&(a.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function fe(){try{a.compressedTexImage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{a.compressedTexImage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{a.texSubImage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{a.texSubImage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{a.texStorage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ue(){try{a.texStorage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{a.texImage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{a.texImage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(F){H.equals(F)===!1&&(a.scissor(F.x,F.y,F.z,F.w),H.copy(F))}function Fe(F){te.equals(F)===!1&&(a.viewport(F.x,F.y,F.z,F.w),te.copy(F))}function Oe(F,Ae){let ue=f.get(Ae);ue===void 0&&(ue=new WeakMap,f.set(Ae,ue));let K=ue.get(F);K===void 0&&(K=a.getUniformBlockIndex(Ae,F.name),ue.set(F,K))}function Me(F,Ae){const K=f.get(Ae).get(F);u.get(Ae)!==K&&(a.uniformBlockBinding(Ae,K,F.__bindingPointIndex),u.set(Ae,K))}function Te(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),r===!0&&(a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),h={},y=null,L={},p={},g=new WeakMap,_=[],d=null,m=!1,E=null,v=null,S=null,T=null,U=null,w=null,I=null,M=new Ke(0,0,0),b=0,q=!1,P=null,B=null,R=null,G=null,k=null,H.set(0,0,a.canvas.width,a.canvas.height),te.set(0,0,a.canvas.width,a.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:he,disable:be,bindFramebuffer:oe,drawBuffers:D,useProgram:ke,setBlending:xe,setMaterial:Ne,setFlipSided:le,setCullFace:ve,setLineWidth:ye,setPolygonOffset:ae,setScissorTest:Ie,activeTexture:A,bindTexture:x,unbindTexture:O,compressedTexImage2D:fe,compressedTexImage3D:Z,texImage2D:se,texImage3D:Ee,updateUBOMapping:Oe,uniformBlockBinding:Me,texStorage2D:Ce,texStorage3D:Ue,texSubImage2D:ie,texSubImage3D:de,compressedTexSubImage2D:ce,compressedTexSubImage3D:ge,scissor:we,viewport:Fe,reset:Te}}function og(a,e,t,r,n,i,o){const s=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,u=n.maxTextureSize,f=n.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(A,x){return m?new OffscreenCanvas(A,x):Mr("canvas")}function v(A,x,O,fe){let Z=1;if((A.width>fe||A.height>fe)&&(Z=fe/Math.max(A.width,A.height)),Z<1||x===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ie=x?Ds:Math.floor,de=ie(Z*A.width),ce=ie(Z*A.height);_===void 0&&(_=E(de,ce));const ge=O?E(de,ce):_;return ge.width=de,ge.height=ce,ge.getContext("2d").drawImage(A,0,0,de,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+de+"x"+ce+")."),ge}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function S(A){return ll(A.width)&&ll(A.height)}function T(A){return s?!1:A.wrapS!==cn||A.wrapT!==cn||A.minFilter!==At&&A.minFilter!==Ot}function U(A,x){return A.generateMipmaps&&x&&A.minFilter!==At&&A.minFilter!==Ot}function w(A){a.generateMipmap(A)}function I(A,x,O,fe,Z=!1){if(s===!1)return x;if(A!==null){if(a[A]!==void 0)return a[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ie=x;if(x===a.RED&&(O===a.FLOAT&&(ie=a.R32F),O===a.HALF_FLOAT&&(ie=a.R16F),O===a.UNSIGNED_BYTE&&(ie=a.R8)),x===a.RED_INTEGER&&(O===a.UNSIGNED_BYTE&&(ie=a.R8UI),O===a.UNSIGNED_SHORT&&(ie=a.R16UI),O===a.UNSIGNED_INT&&(ie=a.R32UI),O===a.BYTE&&(ie=a.R8I),O===a.SHORT&&(ie=a.R16I),O===a.INT&&(ie=a.R32I)),x===a.RG&&(O===a.FLOAT&&(ie=a.RG32F),O===a.HALF_FLOAT&&(ie=a.RG16F),O===a.UNSIGNED_BYTE&&(ie=a.RG8)),x===a.RGBA){const de=Z?fa:$e.getTransfer(fe);O===a.FLOAT&&(ie=a.RGBA32F),O===a.HALF_FLOAT&&(ie=a.RGBA16F),O===a.UNSIGNED_BYTE&&(ie=de===it?a.SRGB8_ALPHA8:a.RGBA8),O===a.UNSIGNED_SHORT_4_4_4_4&&(ie=a.RGBA4),O===a.UNSIGNED_SHORT_5_5_5_1&&(ie=a.RGB5_A1)}return(ie===a.R16F||ie===a.R32F||ie===a.RG16F||ie===a.RG32F||ie===a.RGBA16F||ie===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function M(A,x,O){return U(A,O)===!0||A.isFramebufferTexture&&A.minFilter!==At&&A.minFilter!==Ot?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function b(A){return A===At||A===Do||A===ka?a.NEAREST:a.LINEAR}function q(A){const x=A.target;x.removeEventListener("dispose",q),B(x),x.isVideoTexture&&g.delete(x)}function P(A){const x=A.target;x.removeEventListener("dispose",P),G(x)}function B(A){const x=r.get(A);if(x.__webglInit===void 0)return;const O=A.source,fe=d.get(O);if(fe){const Z=fe[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(A),Object.keys(fe).length===0&&d.delete(O)}r.remove(A)}function R(A){const x=r.get(A);a.deleteTexture(x.__webglTexture);const O=A.source,fe=d.get(O);delete fe[x.__cacheKey],o.memory.textures--}function G(A){const x=A.texture,O=r.get(A),fe=r.get(x);if(fe.__webglTexture!==void 0&&(a.deleteTexture(fe.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(O.__webglFramebuffer[Z]))for(let ie=0;ie<O.__webglFramebuffer[Z].length;ie++)a.deleteFramebuffer(O.__webglFramebuffer[Z][ie]);else a.deleteFramebuffer(O.__webglFramebuffer[Z]);O.__webglDepthbuffer&&a.deleteRenderbuffer(O.__webglDepthbuffer[Z])}else{if(Array.isArray(O.__webglFramebuffer))for(let Z=0;Z<O.__webglFramebuffer.length;Z++)a.deleteFramebuffer(O.__webglFramebuffer[Z]);else a.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&a.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&a.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let Z=0;Z<O.__webglColorRenderbuffer.length;Z++)O.__webglColorRenderbuffer[Z]&&a.deleteRenderbuffer(O.__webglColorRenderbuffer[Z]);O.__webglDepthRenderbuffer&&a.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let Z=0,ie=x.length;Z<ie;Z++){const de=r.get(x[Z]);de.__webglTexture&&(a.deleteTexture(de.__webglTexture),o.memory.textures--),r.remove(x[Z])}r.remove(x),r.remove(A)}let k=0;function Y(){k=0}function ee(){const A=k;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),k+=1,A}function V(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function N(A,x){const O=r.get(A);if(A.isVideoTexture&&ae(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const fe=A.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(O,A,x);return}}t.bindTexture(a.TEXTURE_2D,O.__webglTexture,a.TEXTURE0+x)}function y(A,x){const O=r.get(A);if(A.version>0&&O.__version!==A.version){he(O,A,x);return}t.bindTexture(a.TEXTURE_2D_ARRAY,O.__webglTexture,a.TEXTURE0+x)}function L(A,x){const O=r.get(A);if(A.version>0&&O.__version!==A.version){he(O,A,x);return}t.bindTexture(a.TEXTURE_3D,O.__webglTexture,a.TEXTURE0+x)}function z(A,x){const O=r.get(A);if(A.version>0&&O.__version!==A.version){be(O,A,x);return}t.bindTexture(a.TEXTURE_CUBE_MAP,O.__webglTexture,a.TEXTURE0+x)}const W={[Cs]:a.REPEAT,[cn]:a.CLAMP_TO_EDGE,[Us]:a.MIRRORED_REPEAT},H={[At]:a.NEAREST,[Do]:a.NEAREST_MIPMAP_NEAREST,[ka]:a.NEAREST_MIPMAP_LINEAR,[Ot]:a.LINEAR,[qu]:a.LINEAR_MIPMAP_NEAREST,[Sr]:a.LINEAR_MIPMAP_LINEAR},te={[sf]:a.NEVER,[df]:a.ALWAYS,[of]:a.LESS,[cf]:a.LEQUAL,[lf]:a.EQUAL,[hf]:a.GEQUAL,[uf]:a.GREATER,[ff]:a.NOTEQUAL};function J(A,x,O){if(O?(a.texParameteri(A,a.TEXTURE_WRAP_S,W[x.wrapS]),a.texParameteri(A,a.TEXTURE_WRAP_T,W[x.wrapT]),(A===a.TEXTURE_3D||A===a.TEXTURE_2D_ARRAY)&&a.texParameteri(A,a.TEXTURE_WRAP_R,W[x.wrapR]),a.texParameteri(A,a.TEXTURE_MAG_FILTER,H[x.magFilter]),a.texParameteri(A,a.TEXTURE_MIN_FILTER,H[x.minFilter])):(a.texParameteri(A,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(A,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),(A===a.TEXTURE_3D||A===a.TEXTURE_2D_ARRAY)&&a.texParameteri(A,a.TEXTURE_WRAP_R,a.CLAMP_TO_EDGE),(x.wrapS!==cn||x.wrapT!==cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(A,a.TEXTURE_MAG_FILTER,b(x.magFilter)),a.texParameteri(A,a.TEXTURE_MIN_FILTER,b(x.minFilter)),x.minFilter!==At&&x.minFilter!==Ot&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(a.texParameteri(A,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(A,a.TEXTURE_COMPARE_FUNC,te[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const fe=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===At||x.minFilter!==ka&&x.minFilter!==Sr||x.type===Vn&&e.has("OES_texture_float_linear")===!1||s===!1&&x.type===Cn&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||r.get(x).__currentAnisotropy)&&(a.texParameterf(A,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),r.get(x).__currentAnisotropy=x.anisotropy)}}function Q(A,x){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",q));const fe=x.source;let Z=d.get(fe);Z===void 0&&(Z={},d.set(fe,Z));const ie=V(x);if(ie!==A.__cacheKey){Z[ie]===void 0&&(Z[ie]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Z[ie].usedTimes++;const de=Z[A.__cacheKey];de!==void 0&&(Z[A.__cacheKey].usedTimes--,de.usedTimes===0&&R(x)),A.__cacheKey=ie,A.__webglTexture=Z[ie].texture}return O}function he(A,x,O){let fe=a.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(fe=a.TEXTURE_2D_ARRAY),x.isData3DTexture&&(fe=a.TEXTURE_3D);const Z=Q(A,x),ie=x.source;t.bindTexture(fe,A.__webglTexture,a.TEXTURE0+O);const de=r.get(ie);if(ie.version!==de.__version||Z===!0){t.activeTexture(a.TEXTURE0+O);const ce=$e.getPrimaries($e.workingColorSpace),ge=x.colorSpace===Kt?null:$e.getPrimaries(x.colorSpace),Ce=x.colorSpace===Kt||ce===ge?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,x.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,x.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Ue=T(x)&&S(x.image)===!1;let se=v(x.image,Ue,!1,u);se=Ie(x,se);const Ee=S(se)||s,we=i.convert(x.format,x.colorSpace);let Fe=i.convert(x.type),Oe=I(x.internalFormat,we,Fe,x.colorSpace,x.isVideoTexture);J(fe,x,Ee);let Me;const Te=x.mipmaps,F=s&&x.isVideoTexture!==!0,Ae=de.__version===void 0||Z===!0,ue=M(x,se,Ee);if(x.isDepthTexture)Oe=a.DEPTH_COMPONENT,s?x.type===Vn?Oe=a.DEPTH_COMPONENT32F:x.type===Hn?Oe=a.DEPTH_COMPONENT24:x.type===ri?Oe=a.DEPTH24_STENCIL8:Oe=a.DEPTH_COMPONENT16:x.type===Vn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===ai&&Oe===a.DEPTH_COMPONENT&&x.type!==to&&x.type!==Hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Hn,Fe=i.convert(x.type)),x.format===Ii&&Oe===a.DEPTH_COMPONENT&&(Oe=a.DEPTH_STENCIL,x.type!==ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=ri,Fe=i.convert(x.type))),Ae&&(F?t.texStorage2D(a.TEXTURE_2D,1,Oe,se.width,se.height):t.texImage2D(a.TEXTURE_2D,0,Oe,se.width,se.height,0,we,Fe,null));else if(x.isDataTexture)if(Te.length>0&&Ee){F&&Ae&&t.texStorage2D(a.TEXTURE_2D,ue,Oe,Te[0].width,Te[0].height);for(let K=0,pe=Te.length;K<pe;K++)Me=Te[K],F?t.texSubImage2D(a.TEXTURE_2D,K,0,0,Me.width,Me.height,we,Fe,Me.data):t.texImage2D(a.TEXTURE_2D,K,Oe,Me.width,Me.height,0,we,Fe,Me.data);x.generateMipmaps=!1}else F?(Ae&&t.texStorage2D(a.TEXTURE_2D,ue,Oe,se.width,se.height),t.texSubImage2D(a.TEXTURE_2D,0,0,0,se.width,se.height,we,Fe,se.data)):t.texImage2D(a.TEXTURE_2D,0,Oe,se.width,se.height,0,we,Fe,se.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){F&&Ae&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ue,Oe,Te[0].width,Te[0].height,se.depth);for(let K=0,pe=Te.length;K<pe;K++)Me=Te[K],x.format!==un?we!==null?F?t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,se.depth,we,Me.data,0,0):t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,K,Oe,Me.width,Me.height,se.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?t.texSubImage3D(a.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,se.depth,we,Fe,Me.data):t.texImage3D(a.TEXTURE_2D_ARRAY,K,Oe,Me.width,Me.height,se.depth,0,we,Fe,Me.data)}else{F&&Ae&&t.texStorage2D(a.TEXTURE_2D,ue,Oe,Te[0].width,Te[0].height);for(let K=0,pe=Te.length;K<pe;K++)Me=Te[K],x.format!==un?we!==null?F?t.compressedTexSubImage2D(a.TEXTURE_2D,K,0,0,Me.width,Me.height,we,Me.data):t.compressedTexImage2D(a.TEXTURE_2D,K,Oe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?t.texSubImage2D(a.TEXTURE_2D,K,0,0,Me.width,Me.height,we,Fe,Me.data):t.texImage2D(a.TEXTURE_2D,K,Oe,Me.width,Me.height,0,we,Fe,Me.data)}else if(x.isDataArrayTexture)F?(Ae&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ue,Oe,se.width,se.height,se.depth),t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,we,Fe,se.data)):t.texImage3D(a.TEXTURE_2D_ARRAY,0,Oe,se.width,se.height,se.depth,0,we,Fe,se.data);else if(x.isData3DTexture)F?(Ae&&t.texStorage3D(a.TEXTURE_3D,ue,Oe,se.width,se.height,se.depth),t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,we,Fe,se.data)):t.texImage3D(a.TEXTURE_3D,0,Oe,se.width,se.height,se.depth,0,we,Fe,se.data);else if(x.isFramebufferTexture){if(Ae)if(F)t.texStorage2D(a.TEXTURE_2D,ue,Oe,se.width,se.height);else{let K=se.width,pe=se.height;for(let Le=0;Le<ue;Le++)t.texImage2D(a.TEXTURE_2D,Le,Oe,K,pe,0,we,Fe,null),K>>=1,pe>>=1}}else if(Te.length>0&&Ee){F&&Ae&&t.texStorage2D(a.TEXTURE_2D,ue,Oe,Te[0].width,Te[0].height);for(let K=0,pe=Te.length;K<pe;K++)Me=Te[K],F?t.texSubImage2D(a.TEXTURE_2D,K,0,0,we,Fe,Me):t.texImage2D(a.TEXTURE_2D,K,Oe,we,Fe,Me);x.generateMipmaps=!1}else F?(Ae&&t.texStorage2D(a.TEXTURE_2D,ue,Oe,se.width,se.height),t.texSubImage2D(a.TEXTURE_2D,0,0,0,we,Fe,se)):t.texImage2D(a.TEXTURE_2D,0,Oe,we,Fe,se);U(x,Ee)&&w(fe),de.__version=ie.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function be(A,x,O){if(x.image.length!==6)return;const fe=Q(A,x),Z=x.source;t.bindTexture(a.TEXTURE_CUBE_MAP,A.__webglTexture,a.TEXTURE0+O);const ie=r.get(Z);if(Z.version!==ie.__version||fe===!0){t.activeTexture(a.TEXTURE0+O);const de=$e.getPrimaries($e.workingColorSpace),ce=x.colorSpace===Kt?null:$e.getPrimaries(x.colorSpace),ge=x.colorSpace===Kt||de===ce?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,x.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,x.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ce=x.isCompressedTexture||x.image[0].isCompressedTexture,Ue=x.image[0]&&x.image[0].isDataTexture,se=[];for(let K=0;K<6;K++)!Ce&&!Ue?se[K]=v(x.image[K],!1,!0,c):se[K]=Ue?x.image[K].image:x.image[K],se[K]=Ie(x,se[K]);const Ee=se[0],we=S(Ee)||s,Fe=i.convert(x.format,x.colorSpace),Oe=i.convert(x.type),Me=I(x.internalFormat,Fe,Oe,x.colorSpace),Te=s&&x.isVideoTexture!==!0,F=ie.__version===void 0||fe===!0;let Ae=M(x,Ee,we);J(a.TEXTURE_CUBE_MAP,x,we);let ue;if(Ce){Te&&F&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Ae,Me,Ee.width,Ee.height);for(let K=0;K<6;K++){ue=se[K].mipmaps;for(let pe=0;pe<ue.length;pe++){const Le=ue[pe];x.format!==un?Fe!==null?Te?t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,0,0,Le.width,Le.height,Fe,Le.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,Me,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,0,0,Le.width,Le.height,Fe,Oe,Le.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,Me,Le.width,Le.height,0,Fe,Oe,Le.data)}}}else{ue=x.mipmaps,Te&&F&&(ue.length>0&&Ae++,t.texStorage2D(a.TEXTURE_CUBE_MAP,Ae,Me,se[0].width,se[0].height));for(let K=0;K<6;K++)if(Ue){Te?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,se[K].width,se[K].height,Fe,Oe,se[K].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Me,se[K].width,se[K].height,0,Fe,Oe,se[K].data);for(let pe=0;pe<ue.length;pe++){const Pe=ue[pe].image[K].image;Te?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,0,0,Pe.width,Pe.height,Fe,Oe,Pe.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,Me,Pe.width,Pe.height,0,Fe,Oe,Pe.data)}}else{Te?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Fe,Oe,se[K]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Me,Fe,Oe,se[K]);for(let pe=0;pe<ue.length;pe++){const Le=ue[pe];Te?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,0,0,Fe,Oe,Le.image[K]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,Me,Fe,Oe,Le.image[K])}}}U(x,we)&&w(a.TEXTURE_CUBE_MAP),ie.__version=Z.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function oe(A,x,O,fe,Z,ie){const de=i.convert(O.format,O.colorSpace),ce=i.convert(O.type),ge=I(O.internalFormat,de,ce,O.colorSpace);if(!r.get(x).__hasExternalTextures){const Ue=Math.max(1,x.width>>ie),se=Math.max(1,x.height>>ie);Z===a.TEXTURE_3D||Z===a.TEXTURE_2D_ARRAY?t.texImage3D(Z,ie,ge,Ue,se,x.depth,0,de,ce,null):t.texImage2D(Z,ie,ge,Ue,se,0,de,ce,null)}t.bindFramebuffer(a.FRAMEBUFFER,A),ye(x)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,fe,Z,r.get(O).__webglTexture,0,ve(x)):(Z===a.TEXTURE_2D||Z>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,fe,Z,r.get(O).__webglTexture,ie),t.bindFramebuffer(a.FRAMEBUFFER,null)}function D(A,x,O){if(a.bindRenderbuffer(a.RENDERBUFFER,A),x.depthBuffer&&!x.stencilBuffer){let fe=s===!0?a.DEPTH_COMPONENT24:a.DEPTH_COMPONENT16;if(O||ye(x)){const Z=x.depthTexture;Z&&Z.isDepthTexture&&(Z.type===Vn?fe=a.DEPTH_COMPONENT32F:Z.type===Hn&&(fe=a.DEPTH_COMPONENT24));const ie=ve(x);ye(x)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ie,fe,x.width,x.height):a.renderbufferStorageMultisample(a.RENDERBUFFER,ie,fe,x.width,x.height)}else a.renderbufferStorage(a.RENDERBUFFER,fe,x.width,x.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,A)}else if(x.depthBuffer&&x.stencilBuffer){const fe=ve(x);O&&ye(x)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,fe,a.DEPTH24_STENCIL8,x.width,x.height):ye(x)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,fe,a.DEPTH24_STENCIL8,x.width,x.height):a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,x.width,x.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,A)}else{const fe=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Z=0;Z<fe.length;Z++){const ie=fe[Z],de=i.convert(ie.format,ie.colorSpace),ce=i.convert(ie.type),ge=I(ie.internalFormat,de,ce,ie.colorSpace),Ce=ve(x);O&&ye(x)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ce,ge,x.width,x.height):ye(x)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ce,ge,x.width,x.height):a.renderbufferStorage(a.RENDERBUFFER,ge,x.width,x.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ke(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),N(x.depthTexture,0);const fe=r.get(x.depthTexture).__webglTexture,Z=ve(x);if(x.depthTexture.format===ai)ye(x)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,fe,0,Z):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,fe,0);else if(x.depthTexture.format===Ii)ye(x)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,fe,0,Z):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function _e(A){const x=r.get(A),O=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ke(x.__webglFramebuffer,A)}else if(O){x.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)t.bindFramebuffer(a.FRAMEBUFFER,x.__webglFramebuffer[fe]),x.__webglDepthbuffer[fe]=a.createRenderbuffer(),D(x.__webglDepthbuffer[fe],A,!1)}else t.bindFramebuffer(a.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=a.createRenderbuffer(),D(x.__webglDepthbuffer,A,!1);t.bindFramebuffer(a.FRAMEBUFFER,null)}function Se(A,x,O){const fe=r.get(A);x!==void 0&&oe(fe.__webglFramebuffer,A,A.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),O!==void 0&&_e(A)}function xe(A){const x=A.texture,O=r.get(A),fe=r.get(x);A.addEventListener("dispose",P),A.isWebGLMultipleRenderTargets!==!0&&(fe.__webglTexture===void 0&&(fe.__webglTexture=a.createTexture()),fe.__version=x.version,o.memory.textures++);const Z=A.isWebGLCubeRenderTarget===!0,ie=A.isWebGLMultipleRenderTargets===!0,de=S(A)||s;if(Z){O.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(s&&x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[ce]=[];for(let ge=0;ge<x.mipmaps.length;ge++)O.__webglFramebuffer[ce][ge]=a.createFramebuffer()}else O.__webglFramebuffer[ce]=a.createFramebuffer()}else{if(s&&x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let ce=0;ce<x.mipmaps.length;ce++)O.__webglFramebuffer[ce]=a.createFramebuffer()}else O.__webglFramebuffer=a.createFramebuffer();if(ie)if(n.drawBuffers){const ce=A.texture;for(let ge=0,Ce=ce.length;ge<Ce;ge++){const Ue=r.get(ce[ge]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&A.samples>0&&ye(A)===!1){const ce=ie?x:[x];O.__webglMultisampledFramebuffer=a.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ge=0;ge<ce.length;ge++){const Ce=ce[ge];O.__webglColorRenderbuffer[ge]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,O.__webglColorRenderbuffer[ge]);const Ue=i.convert(Ce.format,Ce.colorSpace),se=i.convert(Ce.type),Ee=I(Ce.internalFormat,Ue,se,Ce.colorSpace,A.isXRRenderTarget===!0),we=ve(A);a.renderbufferStorageMultisample(a.RENDERBUFFER,we,Ee,A.width,A.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ge,a.RENDERBUFFER,O.__webglColorRenderbuffer[ge])}a.bindRenderbuffer(a.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=a.createRenderbuffer(),D(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Z){t.bindTexture(a.TEXTURE_CUBE_MAP,fe.__webglTexture),J(a.TEXTURE_CUBE_MAP,x,de);for(let ce=0;ce<6;ce++)if(s&&x.mipmaps&&x.mipmaps.length>0)for(let ge=0;ge<x.mipmaps.length;ge++)oe(O.__webglFramebuffer[ce][ge],A,x,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ge);else oe(O.__webglFramebuffer[ce],A,x,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);U(x,de)&&w(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const ce=A.texture;for(let ge=0,Ce=ce.length;ge<Ce;ge++){const Ue=ce[ge],se=r.get(Ue);t.bindTexture(a.TEXTURE_2D,se.__webglTexture),J(a.TEXTURE_2D,Ue,de),oe(O.__webglFramebuffer,A,Ue,a.COLOR_ATTACHMENT0+ge,a.TEXTURE_2D,0),U(Ue,de)&&w(a.TEXTURE_2D)}t.unbindTexture()}else{let ce=a.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(s?ce=A.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,fe.__webglTexture),J(ce,x,de),s&&x.mipmaps&&x.mipmaps.length>0)for(let ge=0;ge<x.mipmaps.length;ge++)oe(O.__webglFramebuffer[ge],A,x,a.COLOR_ATTACHMENT0,ce,ge);else oe(O.__webglFramebuffer,A,x,a.COLOR_ATTACHMENT0,ce,0);U(x,de)&&w(ce),t.unbindTexture()}A.depthBuffer&&_e(A)}function Ne(A){const x=S(A)||s,O=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let fe=0,Z=O.length;fe<Z;fe++){const ie=O[fe];if(U(ie,x)){const de=A.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,ce=r.get(ie).__webglTexture;t.bindTexture(de,ce),w(de),t.unbindTexture()}}}function le(A){if(s&&A.samples>0&&ye(A)===!1){const x=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],O=A.width,fe=A.height;let Z=a.COLOR_BUFFER_BIT;const ie=[],de=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ce=r.get(A),ge=A.isWebGLMultipleRenderTargets===!0;if(ge)for(let Ce=0;Ce<x.length;Ce++)t.bindFramebuffer(a.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,ce.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Ce=0;Ce<x.length;Ce++){ie.push(a.COLOR_ATTACHMENT0+Ce),A.depthBuffer&&ie.push(de);const Ue=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Ue===!1&&(A.depthBuffer&&(Z|=a.DEPTH_BUFFER_BIT),A.stencilBuffer&&(Z|=a.STENCIL_BUFFER_BIT)),ge&&a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,ce.__webglColorRenderbuffer[Ce]),Ue===!0&&(a.invalidateFramebuffer(a.READ_FRAMEBUFFER,[de]),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[de])),ge){const se=r.get(x[Ce]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,se,0)}a.blitFramebuffer(0,0,O,fe,0,0,O,fe,Z,a.NEAREST),p&&a.invalidateFramebuffer(a.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ge)for(let Ce=0;Ce<x.length;Ce++){t.bindFramebuffer(a.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.RENDERBUFFER,ce.__webglColorRenderbuffer[Ce]);const Ue=r.get(x[Ce]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,ce.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.TEXTURE_2D,Ue,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function ve(A){return Math.min(f,A.samples)}function ye(A){const x=r.get(A);return s&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ae(A){const x=o.render.frame;g.get(A)!==x&&(g.set(A,x),A.update())}function Ie(A,x){const O=A.colorSpace,fe=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Ls||O!==Ln&&O!==Kt&&($e.getTransfer(O)===it?s===!1?e.has("EXT_sRGB")===!0&&fe===un?(A.format=Ls,A.minFilter=Ot,A.generateMipmaps=!1):x=Ic.sRGBToLinear(x):(fe!==un||Z!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}this.allocateTextureUnit=ee,this.resetTextureUnits=Y,this.setTexture2D=N,this.setTexture2DArray=y,this.setTexture3D=L,this.setTextureCube=z,this.rebindTextures=Se,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=ye}function lg(a,e,t){const r=t.isWebGL2;function n(i,o=Kt){let s;const l=$e.getTransfer(o);if(i===Xn)return a.UNSIGNED_BYTE;if(i===bc)return a.UNSIGNED_SHORT_4_4_4_4;if(i===Ac)return a.UNSIGNED_SHORT_5_5_5_1;if(i===ju)return a.BYTE;if(i===Ku)return a.SHORT;if(i===to)return a.UNSIGNED_SHORT;if(i===Tc)return a.INT;if(i===Hn)return a.UNSIGNED_INT;if(i===Vn)return a.FLOAT;if(i===Cn)return r?a.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(i===Zu)return a.ALPHA;if(i===un)return a.RGBA;if(i===Ju)return a.LUMINANCE;if(i===Qu)return a.LUMINANCE_ALPHA;if(i===ai)return a.DEPTH_COMPONENT;if(i===Ii)return a.DEPTH_STENCIL;if(i===Ls)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(i===$u)return a.RED;if(i===wc)return a.RED_INTEGER;if(i===ef)return a.RG;if(i===Rc)return a.RG_INTEGER;if(i===Cc)return a.RGBA_INTEGER;if(i===za||i===Ha||i===Va||i===Wa)if(l===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===za)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===za)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ha)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Va)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Io||i===Fo||i===No||i===Oo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Io)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===No)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Oo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===tf)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===Bo||i===Go)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Bo)return l===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Go)return l===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ko||i===zo||i===Ho||i===Vo||i===Wo||i===Xo||i===Yo||i===qo||i===jo||i===Ko||i===Zo||i===Jo||i===Qo||i===$o)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ko)return l===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zo)return l===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ho)return l===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vo)return l===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wo)return l===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xo)return l===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yo)return l===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qo)return l===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jo)return l===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ko)return l===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zo)return l===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jo)return l===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qo)return l===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$o)return l===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xa||i===el||i===tl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Xa)return l===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===el)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nf||i===nl||i===il||i===rl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Xa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===nl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===il)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ri?r?a.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):a[i]!==void 0?a[i]:null}return{convert:n}}class cg extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class na extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ug={type:"move"};class gs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new na,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new na,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new na,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,i=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const d=t.getJointPose(_,r),m=this._getHandJoint(c,_);d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=d.radius),m.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,r),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&i!==null&&(n=i),n!==null&&(s.matrix.fromArray(n.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,n.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(n.linearVelocity)):s.hasLinearVelocity=!1,n.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(n.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(ug)))}return s!==null&&(s.visible=n!==null),l!==null&&(l.visible=i!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new na;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class fg extends Ut{constructor(e,t,r,n,i,o,s,l,c,u){if(u=u!==void 0?u:ai,u!==ai&&u!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===ai&&(r=Hn),r===void 0&&u===Ii&&(r=ri),super(null,n,i,o,s,l,u,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:At,this.minFilter=l!==void 0?l:At,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class hg extends Gi{constructor(e,t){super();const r=this;let n=null,i=1,o=null,s="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const _=t.getContextAttributes();let d=null,m=null;const E=[],v=[],S=new jt;S.layers.enable(1),S.viewport=new ht;const T=new jt;T.layers.enable(2),T.viewport=new ht;const U=[S,T],w=new cg;w.layers.enable(1),w.layers.enable(2);let I=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(y){let L=E[y];return L===void 0&&(L=new gs,E[y]=L),L.getTargetRaySpace()},this.getControllerGrip=function(y){let L=E[y];return L===void 0&&(L=new gs,E[y]=L),L.getGripSpace()},this.getHand=function(y){let L=E[y];return L===void 0&&(L=new gs,E[y]=L),L.getHandSpace()};function b(y){const L=v.indexOf(y.inputSource);if(L===-1)return;const z=E[L];z!==void 0&&(z.update(y.inputSource,y.frame,c||o),z.dispatchEvent({type:y.type,data:y.inputSource}))}function q(){n.removeEventListener("select",b),n.removeEventListener("selectstart",b),n.removeEventListener("selectend",b),n.removeEventListener("squeeze",b),n.removeEventListener("squeezestart",b),n.removeEventListener("squeezeend",b),n.removeEventListener("end",q),n.removeEventListener("inputsourceschange",P);for(let y=0;y<E.length;y++){const L=v[y];L!==null&&(v[y]=null,E[y].disconnect(L))}I=null,M=null,e.setRenderTarget(d),p=null,h=null,f=null,n=null,m=null,N.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(y){i=y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(y){s=y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(y){c=y},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(y){if(n=y,n!==null){if(d=e.getRenderTarget(),n.addEventListener("select",b),n.addEventListener("selectstart",b),n.addEventListener("selectend",b),n.addEventListener("squeeze",b),n.addEventListener("squeezestart",b),n.addEventListener("squeezeend",b),n.addEventListener("end",q),n.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const L={antialias:n.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(n,t,L),n.updateRenderState({baseLayer:p}),m=new fn(p.framebufferWidth,p.framebufferHeight,{format:un,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let L=null,z=null,W=null;_.depth&&(W=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,L=_.stencil?Ii:ai,z=_.stencil?ri:Hn);const H={colorFormat:t.RGBA8,depthFormat:W,scaleFactor:i};f=new XRWebGLBinding(n,t),h=f.createProjectionLayer(H),n.updateRenderState({layers:[h]}),m=new fn(h.textureWidth,h.textureHeight,{format:un,type:Xn,depthTexture:new fg(h.textureWidth,h.textureHeight,z,void 0,void 0,void 0,void 0,void 0,void 0,L),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const te=e.properties.get(m);te.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(s),N.setContext(n),N.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function P(y){for(let L=0;L<y.removed.length;L++){const z=y.removed[L],W=v.indexOf(z);W>=0&&(v[W]=null,E[W].disconnect(z))}for(let L=0;L<y.added.length;L++){const z=y.added[L];let W=v.indexOf(z);if(W===-1){for(let te=0;te<E.length;te++)if(te>=v.length){v.push(z),W=te;break}else if(v[te]===null){v[te]=z,W=te;break}if(W===-1)break}const H=E[W];H&&H.connect(z)}}const B=new X,R=new X;function G(y,L,z){B.setFromMatrixPosition(L.matrixWorld),R.setFromMatrixPosition(z.matrixWorld);const W=B.distanceTo(R),H=L.projectionMatrix.elements,te=z.projectionMatrix.elements,J=H[14]/(H[10]-1),Q=H[14]/(H[10]+1),he=(H[9]+1)/H[5],be=(H[9]-1)/H[5],oe=(H[8]-1)/H[0],D=(te[8]+1)/te[0],ke=J*oe,_e=J*D,Se=W/(-oe+D),xe=Se*-oe;L.matrixWorld.decompose(y.position,y.quaternion,y.scale),y.translateX(xe),y.translateZ(Se),y.matrixWorld.compose(y.position,y.quaternion,y.scale),y.matrixWorldInverse.copy(y.matrixWorld).invert();const Ne=J+Se,le=Q+Se,ve=ke-xe,ye=_e+(W-xe),ae=he*Q/le*Ne,Ie=be*Q/le*Ne;y.projectionMatrix.makePerspective(ve,ye,ae,Ie,Ne,le),y.projectionMatrixInverse.copy(y.projectionMatrix).invert()}function k(y,L){L===null?y.matrixWorld.copy(y.matrix):y.matrixWorld.multiplyMatrices(L.matrixWorld,y.matrix),y.matrixWorldInverse.copy(y.matrixWorld).invert()}this.updateCamera=function(y){if(n===null)return;w.near=T.near=S.near=y.near,w.far=T.far=S.far=y.far,(I!==w.near||M!==w.far)&&(n.updateRenderState({depthNear:w.near,depthFar:w.far}),I=w.near,M=w.far);const L=y.parent,z=w.cameras;k(w,L);for(let W=0;W<z.length;W++)k(z[W],L);z.length===2?G(w,S,T):w.projectionMatrix.copy(S.projectionMatrix),Y(y,w,L)};function Y(y,L,z){z===null?y.matrix.copy(L.matrixWorld):(y.matrix.copy(z.matrixWorld),y.matrix.invert(),y.matrix.multiply(L.matrixWorld)),y.matrix.decompose(y.position,y.quaternion,y.scale),y.updateMatrixWorld(!0),y.projectionMatrix.copy(L.projectionMatrix),y.projectionMatrixInverse.copy(L.projectionMatrixInverse),y.isPerspectiveCamera&&(y.fov=Ps*2*Math.atan(1/y.projectionMatrix.elements[5]),y.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(y){l=y,h!==null&&(h.fixedFoveation=y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=y)};let ee=null;function V(y,L){if(u=L.getViewerPose(c||o),g=L,u!==null){const z=u.views;p!==null&&(e.setRenderTargetFramebuffer(m,p.framebuffer),e.setRenderTarget(m));let W=!1;z.length!==w.cameras.length&&(w.cameras.length=0,W=!0);for(let H=0;H<z.length;H++){const te=z[H];let J=null;if(p!==null)J=p.getViewport(te);else{const he=f.getViewSubImage(h,te);J=he.viewport,H===0&&(e.setRenderTargetTextures(m,he.colorTexture,h.ignoreDepthValues?void 0:he.depthStencilTexture),e.setRenderTarget(m))}let Q=U[H];Q===void 0&&(Q=new jt,Q.layers.enable(H),Q.viewport=new ht,U[H]=Q),Q.matrix.fromArray(te.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(te.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(J.x,J.y,J.width,J.height),H===0&&(w.matrix.copy(Q.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),W===!0&&w.cameras.push(Q)}}for(let z=0;z<E.length;z++){const W=v[z],H=E[z];W!==null&&H!==void 0&&H.update(W,L,c||o)}ee&&ee(y,L),L.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:L}),g=null}const N=new Vc;N.setAnimationLoop(V),this.setAnimationLoop=function(y){ee=y},this.dispose=function(){}}}function dg(a,e){function t(d,m){d.matrixAutoUpdate===!0&&d.updateMatrix(),m.value.copy(d.matrix)}function r(d,m){m.color.getRGB(d.fogColor.value,kc(a)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function n(d,m,E,v,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(d,m):m.isMeshToonMaterial?(i(d,m),f(d,m)):m.isMeshPhongMaterial?(i(d,m),u(d,m)):m.isMeshStandardMaterial?(i(d,m),h(d,m),m.isMeshPhysicalMaterial&&p(d,m,S)):m.isMeshMatcapMaterial?(i(d,m),g(d,m)):m.isMeshDepthMaterial?i(d,m):m.isMeshDistanceMaterial?(i(d,m),_(d,m)):m.isMeshNormalMaterial?i(d,m):m.isLineBasicMaterial?(o(d,m),m.isLineDashedMaterial&&s(d,m)):m.isPointsMaterial?l(d,m,E,v):m.isSpriteMaterial?c(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map,t(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.bumpMap&&(d.bumpMap.value=m.bumpMap,t(m.bumpMap,d.bumpMapTransform),d.bumpScale.value=m.bumpScale,m.side===Ct&&(d.bumpScale.value*=-1)),m.normalMap&&(d.normalMap.value=m.normalMap,t(m.normalMap,d.normalMapTransform),d.normalScale.value.copy(m.normalScale),m.side===Ct&&d.normalScale.value.negate()),m.displacementMap&&(d.displacementMap.value=m.displacementMap,t(m.displacementMap,d.displacementMapTransform),d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,d.emissiveMapTransform)),m.specularMap&&(d.specularMap.value=m.specularMap,t(m.specularMap,d.specularMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const E=e.get(m).envMap;if(E&&(d.envMap.value=E,d.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap){d.lightMap.value=m.lightMap;const v=a._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,d.lightMapTransform)}m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,d.aoMapTransform))}function o(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,t(m.map,d.mapTransform))}function s(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function l(d,m,E,v){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*E,d.scale.value=v*.5,m.map&&(d.map.value=m.map,t(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function c(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,t(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function u(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function f(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function h(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,d.roughnessMapTransform)),e.get(m).envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function p(d,m,E){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ct&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=E.texture,d.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,m){m.matcap&&(d.matcap.value=m.matcap)}function _(d,m){const E=e.get(m).light;d.referencePosition.value.setFromMatrixPosition(E.matrixWorld),d.nearDistance.value=E.shadow.camera.near,d.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function pg(a,e,t,r){let n={},i={},o=[];const s=t.isWebGL2?a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,v){const S=v.program;r.uniformBlockBinding(E,S)}function c(E,v){let S=n[E.id];S===void 0&&(g(E),S=u(E),n[E.id]=S,E.addEventListener("dispose",d));const T=v.program;r.updateUBOMapping(E,T);const U=e.render.frame;i[E.id]!==U&&(h(E),i[E.id]=U)}function u(E){const v=f();E.__bindingPointIndex=v;const S=a.createBuffer(),T=E.__size,U=E.usage;return a.bindBuffer(a.UNIFORM_BUFFER,S),a.bufferData(a.UNIFORM_BUFFER,T,U),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,v,S),S}function f(){for(let E=0;E<s;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const v=n[E.id],S=E.uniforms,T=E.__cache;a.bindBuffer(a.UNIFORM_BUFFER,v);for(let U=0,w=S.length;U<w;U++){const I=S[U];if(p(I,U,T)===!0){const M=I.__offset,b=Array.isArray(I.value)?I.value:[I.value];let q=0;for(let P=0;P<b.length;P++){const B=b[P],R=_(B);typeof B=="number"?(I.__data[0]=B,a.bufferSubData(a.UNIFORM_BUFFER,M+q,I.__data)):B.isMatrix3?(I.__data[0]=B.elements[0],I.__data[1]=B.elements[1],I.__data[2]=B.elements[2],I.__data[3]=B.elements[0],I.__data[4]=B.elements[3],I.__data[5]=B.elements[4],I.__data[6]=B.elements[5],I.__data[7]=B.elements[0],I.__data[8]=B.elements[6],I.__data[9]=B.elements[7],I.__data[10]=B.elements[8],I.__data[11]=B.elements[0]):(B.toArray(I.__data,q),q+=R.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,M,I.__data)}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function p(E,v,S){const T=E.value;if(S[v]===void 0){if(typeof T=="number")S[v]=T;else{const U=Array.isArray(T)?T:[T],w=[];for(let I=0;I<U.length;I++)w.push(U[I].clone());S[v]=w}return!0}else if(typeof T=="number"){if(S[v]!==T)return S[v]=T,!0}else{const U=Array.isArray(S[v])?S[v]:[S[v]],w=Array.isArray(T)?T:[T];for(let I=0;I<U.length;I++){const M=U[I];if(M.equals(w[I])===!1)return M.copy(w[I]),!0}}return!1}function g(E){const v=E.uniforms;let S=0;const T=16;let U=0;for(let w=0,I=v.length;w<I;w++){const M=v[w],b={boundary:0,storage:0},q=Array.isArray(M.value)?M.value:[M.value];for(let P=0,B=q.length;P<B;P++){const R=q[P],G=_(R);b.boundary+=G.boundary,b.storage+=G.storage}if(M.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=S,w>0){U=S%T;const P=T-U;U!==0&&P-b.boundary<0&&(S+=T-U,M.__offset=S)}S+=b.storage}return U=S%T,U>0&&(S+=T-U),E.__size=S,E.__cache={},this}function _(E){const v={boundary:0,storage:0};return typeof E=="number"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function d(E){const v=E.target;v.removeEventListener("dispose",d);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),a.deleteBuffer(n[v.id]),delete n[v.id],delete i[v.id]}function m(){for(const E in n)a.deleteBuffer(n[E]);o=[],n={},i={}}return{bind:l,update:c,dispose:m}}class Zc{constructor(e={}){const{canvas:t=mf(),context:r=null,depth:n=!0,stencil:i=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;r!==null?h=r.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,d=null;const m=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dt,this._useLegacyLights=!1,this.toneMapping=Wn,this.toneMappingExposure=1;const v=this;let S=!1,T=0,U=0,w=null,I=-1,M=null;const b=new ht,q=new ht;let P=null;const B=new Ke(0);let R=0,G=t.width,k=t.height,Y=1,ee=null,V=null;const N=new ht(0,0,G,k),y=new ht(0,0,G,k);let L=!1;const z=new ro;let W=!1,H=!1,te=null;const J=new ct,Q=new Ve,he=new X,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return w===null?Y:1}let D=r;function ke(C,j){for(let $=0;$<C.length;$++){const ne=C[$],re=t.getContext(ne,j);if(re!==null)return re}return null}try{const C={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$s}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),D===null){const j=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&j.shift(),D=ke(j,C),D===null)throw ke(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let _e,Se,xe,Ne,le,ve,ye,ae,Ie,A,x,O,fe,Z,ie,de,ce,ge,Ce,Ue,se,Ee,we,Fe;function Oe(){_e=new Ap(D),Se=new Sp(D,_e,e),_e.init(Se),Ee=new lg(D,_e,Se),xe=new sg(D,_e,Se),Ne=new Cp(D),le=new jm,ve=new og(D,_e,xe,le,Se,Ee,Ne),ye=new yp(v),ae=new bp(v),Ie=new Gf(D,Se),we=new vp(D,_e,Ie,Se),A=new wp(D,Ie,Ne,we),x=new Dp(D,A,Ie,Ne),Ce=new Pp(D,Se,ve),de=new Mp(le),O=new qm(v,ye,ae,_e,Se,we,de),fe=new dg(v,le),Z=new Zm,ie=new ng(_e,Se),ge=new _p(v,ye,ae,xe,x,h,l),ce=new ag(v,x,Se),Fe=new pg(D,Ne,Se,xe),Ue=new xp(D,_e,Ne,Se),se=new Rp(D,_e,Ne,Se),Ne.programs=O.programs,v.capabilities=Se,v.extensions=_e,v.properties=le,v.renderLists=Z,v.shadowMap=ce,v.state=xe,v.info=Ne}Oe();const Me=new hg(v,D);this.xr=Me,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const C=_e.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=_e.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(C){C!==void 0&&(Y=C,this.setSize(G,k,!1))},this.getSize=function(C){return C.set(G,k)},this.setSize=function(C,j,$=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=C,k=j,t.width=Math.floor(C*Y),t.height=Math.floor(j*Y),$===!0&&(t.style.width=C+"px",t.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(G*Y,k*Y).floor()},this.setDrawingBufferSize=function(C,j,$){G=C,k=j,Y=$,t.width=Math.floor(C*$),t.height=Math.floor(j*$),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(N)},this.setViewport=function(C,j,$,ne){C.isVector4?N.set(C.x,C.y,C.z,C.w):N.set(C,j,$,ne),xe.viewport(b.copy(N).multiplyScalar(Y).floor())},this.getScissor=function(C){return C.copy(y)},this.setScissor=function(C,j,$,ne){C.isVector4?y.set(C.x,C.y,C.z,C.w):y.set(C,j,$,ne),xe.scissor(q.copy(y).multiplyScalar(Y).floor())},this.getScissorTest=function(){return L},this.setScissorTest=function(C){xe.setScissorTest(L=C)},this.setOpaqueSort=function(C){ee=C},this.setTransparentSort=function(C){V=C},this.getClearColor=function(C){return C.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(C=!0,j=!0,$=!0){let ne=0;if(C){let re=!1;if(w!==null){const De=w.texture.format;re=De===Cc||De===Rc||De===wc}if(re){const De=w.texture.type,Be=De===Xn||De===Hn||De===to||De===ri||De===bc||De===Ac,ze=ge.getClearColor(),me=ge.getClearAlpha(),Xe=ze.r,Ye=ze.g,He=ze.b;Be?(p[0]=Xe,p[1]=Ye,p[2]=He,p[3]=me,D.clearBufferuiv(D.COLOR,0,p)):(g[0]=Xe,g[1]=Ye,g[2]=He,g[3]=me,D.clearBufferiv(D.COLOR,0,g))}else ne|=D.COLOR_BUFFER_BIT}j&&(ne|=D.DEPTH_BUFFER_BIT),$&&(ne|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),Z.dispose(),ie.dispose(),le.dispose(),ye.dispose(),ae.dispose(),x.dispose(),we.dispose(),Fe.dispose(),O.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",et),Me.removeEventListener("sessionend",qe),te&&(te.dispose(),te=null),Qe.stop()};function Te(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=Ne.autoReset,j=ce.enabled,$=ce.autoUpdate,ne=ce.needsUpdate,re=ce.type;Oe(),Ne.autoReset=C,ce.enabled=j,ce.autoUpdate=$,ce.needsUpdate=ne,ce.type=re}function Ae(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ue(C){const j=C.target;j.removeEventListener("dispose",ue),K(j)}function K(C){pe(C),le.remove(C)}function pe(C){const j=le.get(C).programs;j!==void 0&&(j.forEach(function($){O.releaseProgram($)}),C.isShaderMaterial&&O.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,$,ne,re,De){j===null&&(j=be);const Be=re.isMesh&&re.matrixWorld.determinant()<0,ze=wr(C,j,$,ne,re);xe.setMaterial(ne,Be);let me=$.index,Xe=1;if(ne.wireframe===!0){if(me=A.getWireframeAttribute($),me===void 0)return;Xe=2}const Ye=$.drawRange,He=$.attributes.position;let nt=Ye.start*Xe,yt=(Ye.start+Ye.count)*Xe;De!==null&&(nt=Math.max(nt,De.start*Xe),yt=Math.min(yt,(De.start+De.count)*Xe)),me!==null?(nt=Math.max(nt,0),yt=Math.min(yt,me.count)):He!=null&&(nt=Math.max(nt,0),yt=Math.min(yt,He.count));const ot=yt-nt;if(ot<0||ot===1/0)return;we.setup(re,ne,ze,$,me);let Pt,tt=Ue;if(me!==null&&(Pt=Ie.get(me),tt=se,tt.setIndex(Pt)),re.isMesh)ne.wireframe===!0?(xe.setLineWidth(ne.wireframeLinewidth*oe()),tt.setMode(D.LINES)):tt.setMode(D.TRIANGLES);else if(re.isLine){let Ze=ne.linewidth;Ze===void 0&&(Ze=1),xe.setLineWidth(Ze*oe()),re.isLineSegments?tt.setMode(D.LINES):re.isLineLoop?tt.setMode(D.LINE_LOOP):tt.setMode(D.LINE_STRIP)}else re.isPoints?tt.setMode(D.POINTS):re.isSprite&&tt.setMode(D.TRIANGLES);if(re.isInstancedMesh)tt.renderInstances(nt,ot,re.count);else if($.isInstancedBufferGeometry){const Ze=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Dn=Math.min($.instanceCount,Ze);tt.renderInstances(nt,ot,Dn)}else tt.render(nt,ot)};function Le(C,j,$){C.transparent===!0&&C.side===ln&&C.forceSinglePass===!1?(C.side=Ct,C.needsUpdate=!0,Lt(C,j,$),C.side=Un,C.needsUpdate=!0,Lt(C,j,$),C.side=ln):Lt(C,j,$)}this.compile=function(C,j,$=null){$===null&&($=C),d=ie.get($),d.init(),E.push(d),$.traverseVisible(function(re){re.isLight&&re.layers.test(j.layers)&&(d.pushLight(re),re.castShadow&&d.pushShadow(re))}),C!==$&&C.traverseVisible(function(re){re.isLight&&re.layers.test(j.layers)&&(d.pushLight(re),re.castShadow&&d.pushShadow(re))}),d.setupLights(v._useLegacyLights);const ne=new Set;return C.traverse(function(re){const De=re.material;if(De)if(Array.isArray(De))for(let Be=0;Be<De.length;Be++){const ze=De[Be];Le(ze,$,re),ne.add(ze)}else Le(De,$,re),ne.add(De)}),E.pop(),d=null,ne},this.compileAsync=function(C,j,$=null){const ne=this.compile(C,j,$);return new Promise(re=>{function De(){if(ne.forEach(function(Be){le.get(Be).currentProgram.isReady()&&ne.delete(Be)}),ne.size===0){re(C);return}setTimeout(De,10)}_e.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Pe=null;function We(C){Pe&&Pe(C)}function et(){Qe.stop()}function qe(){Qe.start()}const Qe=new Vc;Qe.setAnimationLoop(We),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(C){Pe=C,Me.setAnimationLoop(C),C===null?Qe.stop():Qe.start()},Me.addEventListener("sessionstart",et),Me.addEventListener("sessionend",qe),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(j),j=Me.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,j,w),d=ie.get(C,E.length),d.init(),E.push(d),J.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),z.setFromProjectionMatrix(J),H=this.localClippingEnabled,W=de.init(this.clippingPlanes,H),_=Z.get(C,m.length),_.init(),m.push(_),st(C,j,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(ee,V),this.info.render.frame++,W===!0&&de.beginShadows();const $=d.state.shadowsArray;if(ce.render($,C,j),W===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),ge.render(_,C),d.setupLights(v._useLegacyLights),j.isArrayCamera){const ne=j.cameras;for(let re=0,De=ne.length;re<De;re++){const Be=ne[re];Zt(_,C,Be,Be.viewport)}}else Zt(_,C,j);w!==null&&(ve.updateMultisampleRenderTarget(w),ve.updateRenderTargetMipmap(w)),C.isScene===!0&&C.onAfterRender(v,C,j),we.resetDefaultState(),I=-1,M=null,E.pop(),E.length>0?d=E[E.length-1]:d=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function st(C,j,$,ne){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)$=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)d.pushLight(C),C.castShadow&&d.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||z.intersectsSprite(C)){ne&&he.setFromMatrixPosition(C.matrixWorld).applyMatrix4(J);const Be=x.update(C),ze=C.material;ze.visible&&_.push(C,Be,ze,$,he.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||z.intersectsObject(C))){const Be=x.update(C),ze=C.material;if(ne&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),he.copy(C.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),he.copy(Be.boundingSphere.center)),he.applyMatrix4(C.matrixWorld).applyMatrix4(J)),Array.isArray(ze)){const me=Be.groups;for(let Xe=0,Ye=me.length;Xe<Ye;Xe++){const He=me[Xe],nt=ze[He.materialIndex];nt&&nt.visible&&_.push(C,Be,nt,$,he.z,He)}}else ze.visible&&_.push(C,Be,ze,$,he.z,null)}}const De=C.children;for(let Be=0,ze=De.length;Be<ze;Be++)st(De[Be],j,$,ne)}function Zt(C,j,$,ne){const re=C.opaque,De=C.transmissive,Be=C.transparent;d.setupLightsView($),W===!0&&de.setGlobalState(v.clippingPlanes,$),De.length>0&&Jt(re,De,j,$),ne&&xe.viewport(b.copy(ne)),re.length>0&&Gt(re,j,$),De.length>0&&Gt(De,j,$),Be.length>0&&Gt(Be,j,$),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Jt(C,j,$,ne){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const De=Se.isWebGL2;te===null&&(te=new fn(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?Cn:Xn,minFilter:Sr,samples:De?4:0})),v.getDrawingBufferSize(Q),De?te.setSize(Q.x,Q.y):te.setSize(Ds(Q.x),Ds(Q.y));const Be=v.getRenderTarget();v.setRenderTarget(te),v.getClearColor(B),R=v.getClearAlpha(),R<1&&v.setClearColor(16777215,.5),v.clear();const ze=v.toneMapping;v.toneMapping=Wn,Gt(C,$,ne),ve.updateMultisampleRenderTarget(te),ve.updateRenderTargetMipmap(te);let me=!1;for(let Xe=0,Ye=j.length;Xe<Ye;Xe++){const He=j[Xe],nt=He.object,yt=He.geometry,ot=He.material,Pt=He.group;if(ot.side===ln&&nt.layers.test(ne.layers)){const tt=ot.side;ot.side=Ct,ot.needsUpdate=!0,dn(nt,$,ne,yt,ot,Pt),ot.side=tt,ot.needsUpdate=!0,me=!0}}me===!0&&(ve.updateMultisampleRenderTarget(te),ve.updateRenderTargetMipmap(te)),v.setRenderTarget(Be),v.setClearColor(B,R),v.toneMapping=ze}function Gt(C,j,$){const ne=j.isScene===!0?j.overrideMaterial:null;for(let re=0,De=C.length;re<De;re++){const Be=C[re],ze=Be.object,me=Be.geometry,Xe=ne===null?Be.material:ne,Ye=Be.group;ze.layers.test($.layers)&&dn(ze,j,$,me,Xe,Ye)}}function dn(C,j,$,ne,re,De){C.onBeforeRender(v,j,$,ne,re,De),C.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),re.onBeforeRender(v,j,$,ne,C,De),re.transparent===!0&&re.side===ln&&re.forceSinglePass===!1?(re.side=Ct,re.needsUpdate=!0,v.renderBufferDirect($,j,ne,re,C,De),re.side=Un,re.needsUpdate=!0,v.renderBufferDirect($,j,ne,re,C,De),re.side=ln):v.renderBufferDirect($,j,ne,re,C,De),C.onAfterRender(v,j,$,ne,re,De)}function Lt(C,j,$){j.isScene!==!0&&(j=be);const ne=le.get(C),re=d.state.lights,De=d.state.shadowsArray,Be=re.state.version,ze=O.getParameters(C,re.state,De,j,$),me=O.getProgramCacheKey(ze);let Xe=ne.programs;ne.environment=C.isMeshStandardMaterial?j.environment:null,ne.fog=j.fog,ne.envMap=(C.isMeshStandardMaterial?ae:ye).get(C.envMap||ne.environment),Xe===void 0&&(C.addEventListener("dispose",ue),Xe=new Map,ne.programs=Xe);let Ye=Xe.get(me);if(Ye!==void 0){if(ne.currentProgram===Ye&&ne.lightsStateVersion===Be)return pn(C,ze),Ye}else ze.uniforms=O.getUniforms(C),C.onBuild($,ze,v),C.onBeforeCompile(ze,v),Ye=O.acquireProgram(ze,me),Xe.set(me,Ye),ne.uniforms=ze.uniforms;const He=ne.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(He.clippingPlanes=de.uniform),pn(C,ze),ne.needsLights=Ra(C),ne.lightsStateVersion=Be,ne.needsLights&&(He.ambientLightColor.value=re.state.ambient,He.lightProbe.value=re.state.probe,He.directionalLights.value=re.state.directional,He.directionalLightShadows.value=re.state.directionalShadow,He.spotLights.value=re.state.spot,He.spotLightShadows.value=re.state.spotShadow,He.rectAreaLights.value=re.state.rectArea,He.ltc_1.value=re.state.rectAreaLTC1,He.ltc_2.value=re.state.rectAreaLTC2,He.pointLights.value=re.state.point,He.pointLightShadows.value=re.state.pointShadow,He.hemisphereLights.value=re.state.hemi,He.directionalShadowMap.value=re.state.directionalShadowMap,He.directionalShadowMatrix.value=re.state.directionalShadowMatrix,He.spotShadowMap.value=re.state.spotShadowMap,He.spotLightMatrix.value=re.state.spotLightMatrix,He.spotLightMap.value=re.state.spotLightMap,He.pointShadowMap.value=re.state.pointShadowMap,He.pointShadowMatrix.value=re.state.pointShadowMatrix),ne.currentProgram=Ye,ne.uniformsList=null,Ye}function _t(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=oa.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function pn(C,j){const $=le.get(C);$.outputColorSpace=j.outputColorSpace,$.instancing=j.instancing,$.instancingColor=j.instancingColor,$.skinning=j.skinning,$.morphTargets=j.morphTargets,$.morphNormals=j.morphNormals,$.morphColors=j.morphColors,$.morphTargetsCount=j.morphTargetsCount,$.numClippingPlanes=j.numClippingPlanes,$.numIntersection=j.numClipIntersection,$.vertexAlphas=j.vertexAlphas,$.vertexTangents=j.vertexTangents,$.toneMapping=j.toneMapping}function wr(C,j,$,ne,re){j.isScene!==!0&&(j=be),ve.resetTextureUnits();const De=j.fog,Be=ne.isMeshStandardMaterial?j.environment:null,ze=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ln,me=(ne.isMeshStandardMaterial?ae:ye).get(ne.envMap||Be),Xe=ne.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ye=!!$.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),He=!!$.morphAttributes.position,nt=!!$.morphAttributes.normal,yt=!!$.morphAttributes.color;let ot=Wn;ne.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ot=v.toneMapping);const Pt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,tt=Pt!==void 0?Pt.length:0,Ze=le.get(ne),Dn=d.state.lights;if(W===!0&&(H===!0||C!==M)){const St=C===M&&ne.id===I;de.setState(ne,C,St)}let at=!1;ne.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Dn.state.version||Ze.outputColorSpace!==ze||re.isInstancedMesh&&Ze.instancing===!1||!re.isInstancedMesh&&Ze.instancing===!0||re.isSkinnedMesh&&Ze.skinning===!1||!re.isSkinnedMesh&&Ze.skinning===!0||re.isInstancedMesh&&Ze.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Ze.instancingColor===!1&&re.instanceColor!==null||Ze.envMap!==me||ne.fog===!0&&Ze.fog!==De||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==de.numPlanes||Ze.numIntersection!==de.numIntersection)||Ze.vertexAlphas!==Xe||Ze.vertexTangents!==Ye||Ze.morphTargets!==He||Ze.morphNormals!==nt||Ze.morphColors!==yt||Ze.toneMapping!==ot||Se.isWebGL2===!0&&Ze.morphTargetsCount!==tt)&&(at=!0):(at=!0,Ze.__version=ne.version);let Qt=Ze.currentProgram;at===!0&&(Qt=Lt(ne,j,re));let Ji=!1,$t=!1,Yn=!1;const lt=Qt.getUniforms(),en=Ze.uniforms;if(xe.useProgram(Qt.program)&&(Ji=!0,$t=!0,Yn=!0),ne.id!==I&&(I=ne.id,$t=!0),Ji||M!==C){lt.setValue(D,"projectionMatrix",C.projectionMatrix),lt.setValue(D,"viewMatrix",C.matrixWorldInverse);const St=lt.map.cameraPosition;St!==void 0&&St.setValue(D,he.setFromMatrixPosition(C.matrixWorld)),Se.logarithmicDepthBuffer&&lt.setValue(D,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&lt.setValue(D,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,$t=!0,Yn=!0)}if(re.isSkinnedMesh){lt.setOptional(D,re,"bindMatrix"),lt.setOptional(D,re,"bindMatrixInverse");const St=re.skeleton;St&&(Se.floatVertexTextures?(St.boneTexture===null&&St.computeBoneTexture(),lt.setValue(D,"boneTexture",St.boneTexture,ve),lt.setValue(D,"boneTextureSize",St.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const qn=$.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0&&Se.isWebGL2===!0)&&Ce.update(re,$,Qt),($t||Ze.receiveShadow!==re.receiveShadow)&&(Ze.receiveShadow=re.receiveShadow,lt.setValue(D,"receiveShadow",re.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(en.envMap.value=me,en.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),$t&&(lt.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ze.needsLights&&Zi(en,Yn),De&&ne.fog===!0&&fe.refreshFogUniforms(en,De),fe.refreshMaterialUniforms(en,ne,Y,k,te),oa.upload(D,_t(Ze),en,ve)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(oa.upload(D,_t(Ze),en,ve),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&lt.setValue(D,"center",re.center),lt.setValue(D,"modelViewMatrix",re.modelViewMatrix),lt.setValue(D,"normalMatrix",re.normalMatrix),lt.setValue(D,"modelMatrix",re.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const St=ne.uniformsGroups;for(let Dt=0,Ca=St.length;Dt<Ca;Dt++)if(Se.isWebGL2){const jn=St[Dt];Fe.update(jn,Qt),Fe.bind(jn,Qt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Qt}function Zi(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function Ra(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(C,j,$){le.get(C.texture).__webglTexture=j,le.get(C.depthTexture).__webglTexture=$;const ne=le.get(C);ne.__hasExternalTextures=!0,ne.__hasExternalTextures&&(ne.__autoAllocateDepthBuffer=$===void 0,ne.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,j){const $=le.get(C);$.__webglFramebuffer=j,$.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(C,j=0,$=0){w=C,T=j,U=$;let ne=!0,re=null,De=!1,Be=!1;if(C){const me=le.get(C);me.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(D.FRAMEBUFFER,null),ne=!1):me.__webglFramebuffer===void 0?ve.setupRenderTarget(C):me.__hasExternalTextures&&ve.rebindTextures(C,le.get(C.texture).__webglTexture,le.get(C.depthTexture).__webglTexture);const Xe=C.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Be=!0);const Ye=le.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ye[j])?re=Ye[j][$]:re=Ye[j],De=!0):Se.isWebGL2&&C.samples>0&&ve.useMultisampledRTT(C)===!1?re=le.get(C).__webglMultisampledFramebuffer:Array.isArray(Ye)?re=Ye[$]:re=Ye,b.copy(C.viewport),q.copy(C.scissor),P=C.scissorTest}else b.copy(N).multiplyScalar(Y).floor(),q.copy(y).multiplyScalar(Y).floor(),P=L;if(xe.bindFramebuffer(D.FRAMEBUFFER,re)&&Se.drawBuffers&&ne&&xe.drawBuffers(C,re),xe.viewport(b),xe.scissor(q),xe.setScissorTest(P),De){const me=le.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+j,me.__webglTexture,$)}else if(Be){const me=le.get(C.texture),Xe=j||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,me.__webglTexture,$||0,Xe)}I=-1},this.readRenderTargetPixels=function(C,j,$,ne,re,De,Be){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Be!==void 0&&(ze=ze[Be]),ze){xe.bindFramebuffer(D.FRAMEBUFFER,ze);try{const me=C.texture,Xe=me.format,Ye=me.type;if(Xe!==un&&Ee.convert(Xe)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Ye===Cn&&(_e.has("EXT_color_buffer_half_float")||Se.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Ye!==Xn&&Ee.convert(Ye)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ye===Vn&&(Se.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-ne&&$>=0&&$<=C.height-re&&D.readPixels(j,$,ne,re,Ee.convert(Xe),Ee.convert(Ye),De)}finally{const me=w!==null?le.get(w).__webglFramebuffer:null;xe.bindFramebuffer(D.FRAMEBUFFER,me)}}},this.copyFramebufferToTexture=function(C,j,$=0){const ne=Math.pow(2,-$),re=Math.floor(j.image.width*ne),De=Math.floor(j.image.height*ne);ve.setTexture2D(j,0),D.copyTexSubImage2D(D.TEXTURE_2D,$,0,0,C.x,C.y,re,De),xe.unbindTexture()},this.copyTextureToTexture=function(C,j,$,ne=0){const re=j.image.width,De=j.image.height,Be=Ee.convert($.format),ze=Ee.convert($.type);ve.setTexture2D($,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,$.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,$.unpackAlignment),j.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ne,C.x,C.y,re,De,Be,ze,j.image.data):j.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ne,C.x,C.y,j.mipmaps[0].width,j.mipmaps[0].height,Be,j.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,ne,C.x,C.y,Be,ze,j.image),ne===0&&$.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(C,j,$,ne,re=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const De=C.max.x-C.min.x+1,Be=C.max.y-C.min.y+1,ze=C.max.z-C.min.z+1,me=Ee.convert(ne.format),Xe=Ee.convert(ne.type);let Ye;if(ne.isData3DTexture)ve.setTexture3D(ne,0),Ye=D.TEXTURE_3D;else if(ne.isDataArrayTexture)ve.setTexture2DArray(ne,0),Ye=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,ne.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,ne.unpackAlignment);const He=D.getParameter(D.UNPACK_ROW_LENGTH),nt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),yt=D.getParameter(D.UNPACK_SKIP_PIXELS),ot=D.getParameter(D.UNPACK_SKIP_ROWS),Pt=D.getParameter(D.UNPACK_SKIP_IMAGES),tt=$.isCompressedTexture?$.mipmaps[0]:$.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,tt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,tt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,C.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,C.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,C.min.z),$.isDataTexture||$.isData3DTexture?D.texSubImage3D(Ye,re,j.x,j.y,j.z,De,Be,ze,me,Xe,tt.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Ye,re,j.x,j.y,j.z,De,Be,ze,me,tt.data)):D.texSubImage3D(Ye,re,j.x,j.y,j.z,De,Be,ze,me,Xe,tt),D.pixelStorei(D.UNPACK_ROW_LENGTH,He),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,yt),D.pixelStorei(D.UNPACK_SKIP_ROWS,ot),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Pt),re===0&&ne.generateMipmaps&&D.generateMipmap(Ye),xe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?ve.setTextureCube(C,0):C.isData3DTexture?ve.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ve.setTexture2DArray(C,0):ve.setTexture2D(C,0),xe.unbindTexture()},this.resetState=function(){T=0,U=0,w=null,xe.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===no?"display-p3":"srgb",t.unpackColorSpace=$e.workingColorSpace===Ma?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===dt?si:Uc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===si?dt:Ln}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class mg extends Zc{}mg.prototype.isWebGL1Renderer=!0;class Jc extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class gg extends hn{constructor(e,t,r,n=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Qc extends zi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ql=new X,jl=new X,Kl=new ct,_s=new io,ia=new br;class _g extends pt{constructor(e=new Wt,t=new Qc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let n=1,i=t.count;n<i;n++)ql.fromBufferAttribute(t,n-1),jl.fromBufferAttribute(t,n),r[n]=r[n-1],r[n]+=ql.distanceTo(jl);e.setAttribute("lineDistance",new Bt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,i=e.params.Line.threshold,o=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),ia.copy(r.boundingSphere),ia.applyMatrix4(n),ia.radius+=i,e.ray.intersectsSphere(ia)===!1)return;Kl.copy(n).invert(),_s.copy(e.ray).applyMatrix4(Kl);const s=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=new X,u=new X,f=new X,h=new X,p=this.isLineSegments?2:1,g=r.index,d=r.attributes.position;if(g!==null){const m=Math.max(0,o.start),E=Math.min(g.count,o.start+o.count);for(let v=m,S=E-1;v<S;v+=p){const T=g.getX(v),U=g.getX(v+1);if(c.fromBufferAttribute(d,T),u.fromBufferAttribute(d,U),_s.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(h);I<e.near||I>e.far||t.push({distance:I,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),E=Math.min(d.count,o.start+o.count);for(let v=m,S=E-1;v<S;v+=p){if(c.fromBufferAttribute(d,v),u.fromBufferAttribute(d,v+1),_s.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(h);U<e.near||U>e.far||t.push({distance:U,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=n.length;i<o;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}}class li extends Wt{constructor(e=1,t=32,r=16,n=0,i=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:n,phiLength:i,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const l=Math.min(o+s,Math.PI);let c=0;const u=[],f=new X,h=new X,p=[],g=[],_=[],d=[];for(let m=0;m<=r;m++){const E=[],v=m/r;let S=0;m===0&&o===0?S=.5/t:m===r&&l===Math.PI&&(S=-.5/t);for(let T=0;T<=t;T++){const U=T/t;f.x=-e*Math.cos(n+U*i)*Math.sin(o+v*s),f.y=e*Math.cos(o+v*s),f.z=e*Math.sin(n+U*i)*Math.sin(o+v*s),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),d.push(U+S,1-v),E.push(c++)}u.push(E)}for(let m=0;m<r;m++)for(let E=0;E<t;E++){const v=u[m][E+1],S=u[m][E],T=u[m+1][E],U=u[m+1][E+1];(m!==0||o>0)&&p.push(v,S,U),(m!==r-1||l<Math.PI)&&p.push(S,T,U)}this.setIndex(p),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(_,3)),this.setAttribute("uv",new Bt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new li(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vg extends Rt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xg extends zi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Fs={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class Sg{constructor(e,t,r){const n=this;let i=!1,o=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(u){s++,i===!1&&n.onStart!==void 0&&n.onStart(u,o,s),i=!0},this.itemEnd=function(u){o++,n.onProgress!==void 0&&n.onProgress(u,o,s),o===s&&(i=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Mg=new Sg;class oo{constructor(e){this.manager=e!==void 0?e:Mg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(n,i){r.load(e,n,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}oo.DEFAULT_MATERIAL_NAME="__DEFAULT";class yg extends oo{constructor(e){super(e)}load(e,t,r,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,o=Fs.get(e);if(o!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(o),i.manager.itemEnd(e)},0),o;const s=Mr("img");function l(){u(),Fs.add(e,this),t&&t(this),i.manager.itemEnd(e)}function c(f){u(),n&&n(f),i.manager.itemError(e),i.manager.itemEnd(e)}function u(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),i.manager.itemStart(e),s.src=e,s}}class Eg extends oo{constructor(e){super(e)}load(e,t,r,n){const i=new Ut,o=new yg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){i.image=s,i.needsUpdate=!0,t!==void 0&&t(i)},r,n),i}}class Tg extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const vs=new ct,Zl=new X,Jl=new X;class bg{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ro,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Zl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zl),Jl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jl),t.updateMatrixWorld(),vs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vs),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(vs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ag extends bg{constructor(){super(new ao(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wg extends Tg{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new Ag}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Rg extends Wt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class $c{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ql(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ql();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ql(){return(typeof performance>"u"?Date:performance).now()}class Cg{constructor(e,t,r=0,n=1/0){this.ray=new io(e,t),this.near=r,this.far=n,this.camera=null,this.layers=new Ea,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,r=[]){return Ns(e,this,r,t),r.sort($l),r}intersectObjects(e,t=!0,r=[]){for(let n=0,i=e.length;n<i;n++)Ns(e[n],this,r,t);return r.sort($l),r}}function $l(a,e){return a.distance-e.distance}function Ns(a,e,t,r){if(a.layers.test(e.layers)&&a.raycast(e,t),r===!0){const n=a.children;for(let i=0,o=n.length;i<o;i++)Ns(n[i],e,t,!0)}}const ec=new X,ra=new X;class Tn{constructor(e=new X,t=new X){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){ec.subVectors(e,this.start),ra.subVectors(this.end,this.start);const r=ra.dot(ra);let i=ra.dot(ec)/r;return t&&(i=wt(i,0,1)),i}closestPointToPoint(e,t,r){const n=this.closestPointToPointParameter(e,t);return this.delta(r).multiplyScalar(n).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$s}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$s);function Ug(){var a=Object.create(null);function e(n,i){var o=n.id,s=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!a[o])try{l=l.map(function(h){return h&&h.isWorkerModule&&(e(h,function(p){if(p instanceof Error)throw p}),h=a[h.id].value),h}),c=r("<"+s+">.init",c),u&&(u=r("<"+s+">.getTransferables",u));var f=null;typeof c=="function"?f=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),a[o]={id:o,value:f,getTransferables:u},i(f)}catch(h){h&&h.noLog||console.error(h),i(h)}}function t(n,i){var o,s=n.id,l=n.args;(!a[s]||typeof a[s].value!="function")&&i(new Error("Worker module "+s+": not found or its 'init' did not return a function"));try{var c=(o=a[s]).value.apply(o,l);c&&typeof c.then=="function"?c.then(u,function(f){return i(f instanceof Error?f:new Error(""+f))}):u(c)}catch(f){i(f)}function u(f){try{var h=a[s].getTransferables&&a[s].getTransferables(f);(!h||!Array.isArray(h)||!h.length)&&(h=void 0),i(f,h)}catch(p){console.error(p),i(p)}}}function r(n,i){var o=void 0;self.troikaDefine=function(l){return o=l};var s=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+i+`
)`],{type:"application/javascript"}));try{importScripts(s)}catch(l){console.error(l)}return URL.revokeObjectURL(s),delete self.troikaDefine,o}self.addEventListener("message",function(n){var i=n.data,o=i.messageId,s=i.action,l=i.data;try{s==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:{isCallable:typeof c=="function"}})}),s==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:o,success:!1,error:c.stack})}})}function Lg(a){var e=function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=a.dependencies,r=a.init;t=Array.isArray(t)?t.map(function(i){return i&&i._getInitResult?i._getInitResult():i}):[];var n=Promise.all(t).then(function(i){return r.apply(null,i)});return e._getInitResult=function(){return n},n},e}var eu=function(){var a=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),a=!0}catch(t){typeof process<"u",console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return eu=function(){return a},a},Pg=0,Dg=0,xs=!1,gr=Object.create(null),_r=Object.create(null),Os=Object.create(null);function Vi(a){if((!a||typeof a.init!="function")&&!xs)throw new Error("requires `options.init` function");var e=a.dependencies,t=a.init,r=a.getTransferables,n=a.workerId;if(!eu())return Lg(a);n==null&&(n="#default");var i="workerModule"+ ++Pg,o=a.name||i,s=null;e=e&&e.map(function(c){return typeof c=="function"&&!c.workerModuleData&&(xs=!0,c=Vi({workerId:n,name:"<"+o+"> function dependency: "+c.name,init:`function(){return (
`+la(c)+`
)}`}),xs=!1),c&&c.workerModuleData&&(c=c.workerModuleData),c});function l(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(!s){s=tc(n,"registerModule",l.workerModuleData);var f=function(){s=null,_r[n].delete(f)};(_r[n]||(_r[n]=new Set)).add(f)}return s.then(function(h){var p=h.isCallable;if(p)return tc(n,"callModule",{id:i,args:c});throw new Error("Worker module function was called but `init` did not return a callable function")})}return l.workerModuleData={isWorkerModule:!0,id:i,name:o,dependencies:e,init:la(t),getTransferables:r&&la(r)},l}function Ig(a){_r[a]&&_r[a].forEach(function(e){e()}),gr[a]&&(gr[a].terminate(),delete gr[a])}function la(a){var e=a.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function Fg(a){var e=gr[a];if(!e){var t=la(Ug);e=gr[a]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+a.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(r){var n=r.data,i=n.messageId,o=Os[i];if(!o)throw new Error("WorkerModule response with empty or unknown messageId");delete Os[i],o(n)}}return e}function tc(a,e,t){return new Promise(function(r,n){var i=++Dg;Os[i]=function(o){o.success?r(o.result):n(new Error("Error in worker "+e+" call: "+o.error))},Fg(a).postMessage({messageId:i,action:e,data:t})})}function tu(){var a=function(e){function t(V,N,y,L,z,W,H,te){var J=1-H;te.x=J*J*V+2*J*H*y+H*H*z,te.y=J*J*N+2*J*H*L+H*H*W}function r(V,N,y,L,z,W,H,te,J,Q){var he=1-J;Q.x=he*he*he*V+3*he*he*J*y+3*he*J*J*z+J*J*J*H,Q.y=he*he*he*N+3*he*he*J*L+3*he*J*J*W+J*J*J*te}function n(V,N){for(var y=/([MLQCZ])([^MLQCZ]*)/g,L,z,W,H,te;L=y.exec(V);){var J=L[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(Q){return parseFloat(Q)});switch(L[1]){case"M":H=z=J[0],te=W=J[1];break;case"L":(J[0]!==H||J[1]!==te)&&N("L",H,te,H=J[0],te=J[1]);break;case"Q":{N("Q",H,te,H=J[2],te=J[3],J[0],J[1]);break}case"C":{N("C",H,te,H=J[4],te=J[5],J[0],J[1],J[2],J[3]);break}case"Z":(H!==z||te!==W)&&N("L",H,te,z,W);break}}}function i(V,N,y){y===void 0&&(y=16);var L={x:0,y:0};n(V,function(z,W,H,te,J,Q,he,be,oe){switch(z){case"L":N(W,H,te,J);break;case"Q":{for(var D=W,ke=H,_e=1;_e<y;_e++)t(W,H,Q,he,te,J,_e/(y-1),L),N(D,ke,L.x,L.y),D=L.x,ke=L.y;break}case"C":{for(var Se=W,xe=H,Ne=1;Ne<y;Ne++)r(W,H,Q,he,be,oe,te,J,Ne/(y-1),L),N(Se,xe,L.x,L.y),Se=L.x,xe=L.y;break}}})}var o="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",s="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(V,N){var y=V.getContext?V.getContext("webgl",c):V,L=l.get(y);if(!L){let Se=function(ae){var Ie=W[ae];if(!Ie&&(Ie=W[ae]=y.getExtension(ae),!Ie))throw new Error(ae+" not supported");return Ie},xe=function(ae,Ie){var A=y.createShader(Ie);return y.shaderSource(A,ae),y.compileShader(A),A},Ne=function(ae,Ie,A,x){if(!H[ae]){var O={},fe={},Z=y.createProgram();y.attachShader(Z,xe(Ie,y.VERTEX_SHADER)),y.attachShader(Z,xe(A,y.FRAGMENT_SHADER)),y.linkProgram(Z),H[ae]={program:Z,transaction:function(de){y.useProgram(Z),de({setUniform:function(ge,Ce){for(var Ue=[],se=arguments.length-2;se-- >0;)Ue[se]=arguments[se+2];var Ee=fe[Ce]||(fe[Ce]=y.getUniformLocation(Z,Ce));y["uniform"+ge].apply(y,[Ee].concat(Ue))},setAttribute:function(ge,Ce,Ue,se,Ee){var we=O[ge];we||(we=O[ge]={buf:y.createBuffer(),loc:y.getAttribLocation(Z,ge),data:null}),y.bindBuffer(y.ARRAY_BUFFER,we.buf),y.vertexAttribPointer(we.loc,Ce,y.FLOAT,!1,0,0),y.enableVertexAttribArray(we.loc),z?y.vertexAttribDivisor(we.loc,se):Se("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(we.loc,se),Ee!==we.data&&(y.bufferData(y.ARRAY_BUFFER,Ee,Ue),we.data=Ee)}})}}}H[ae].transaction(x)},le=function(ae,Ie){J++;try{y.activeTexture(y.TEXTURE0+J);var A=te[ae];A||(A=te[ae]=y.createTexture(),y.bindTexture(y.TEXTURE_2D,A),y.texParameteri(y.TEXTURE_2D,y.TEXTURE_MIN_FILTER,y.NEAREST),y.texParameteri(y.TEXTURE_2D,y.TEXTURE_MAG_FILTER,y.NEAREST)),y.bindTexture(y.TEXTURE_2D,A),Ie(A,J)}finally{J--}},ve=function(ae,Ie,A){var x=y.createFramebuffer();Q.push(x),y.bindFramebuffer(y.FRAMEBUFFER,x),y.activeTexture(y.TEXTURE0+Ie),y.bindTexture(y.TEXTURE_2D,ae),y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,ae,0);try{A(x)}finally{y.deleteFramebuffer(x),y.bindFramebuffer(y.FRAMEBUFFER,Q[--Q.length-1]||null)}},ye=function(){W={},H={},te={},J=-1,Q.length=0};var he=Se,be=xe,oe=Ne,D=le,ke=ve,_e=ye,z=typeof WebGL2RenderingContext<"u"&&y instanceof WebGL2RenderingContext,W={},H={},te={},J=-1,Q=[];y.canvas.addEventListener("webglcontextlost",function(ae){ye(),ae.preventDefault()},!1),l.set(y,L={gl:y,isWebGL2:z,getExtension:Se,withProgram:Ne,withTexture:le,withTextureFramebuffer:ve,handleContextLoss:ye})}N(L)}function f(V,N,y,L,z,W,H,te){H===void 0&&(H=15),te===void 0&&(te=null),u(V,function(J){var Q=J.gl,he=J.withProgram,be=J.withTexture;be("copy",function(oe,D){Q.texImage2D(Q.TEXTURE_2D,0,Q.RGBA,z,W,0,Q.RGBA,Q.UNSIGNED_BYTE,N),he("copy",o,s,function(ke){var _e=ke.setUniform,Se=ke.setAttribute;Se("aUV",2,Q.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),_e("1i","image",D),Q.bindFramebuffer(Q.FRAMEBUFFER,te||null),Q.disable(Q.BLEND),Q.colorMask(H&8,H&4,H&2,H&1),Q.viewport(y,L,z,W),Q.scissor(y,L,z,W),Q.drawArrays(Q.TRIANGLES,0,3)})})})}function h(V,N,y){var L=V.width,z=V.height;u(V,function(W){var H=W.gl,te=new Uint8Array(L*z*4);H.readPixels(0,0,L,z,H.RGBA,H.UNSIGNED_BYTE,te),V.width=N,V.height=y,f(H,te,0,0,L,z)})}var p=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:f,resizeWebGLCanvasWithoutClearing:h});function g(V,N,y,L,z,W){W===void 0&&(W=1);var H=new Uint8Array(V*N),te=L[2]-L[0],J=L[3]-L[1],Q=[];i(y,function(Se,xe,Ne,le){Q.push({x1:Se,y1:xe,x2:Ne,y2:le,minX:Math.min(Se,Ne),minY:Math.min(xe,le),maxX:Math.max(Se,Ne),maxY:Math.max(xe,le)})}),Q.sort(function(Se,xe){return Se.maxX-xe.maxX});for(var he=0;he<V;he++)for(var be=0;be<N;be++){var oe=ke(L[0]+te*(he+.5)/V,L[1]+J*(be+.5)/N),D=Math.pow(1-Math.abs(oe)/z,W)/2;oe<0&&(D=1-D),D=Math.max(0,Math.min(255,Math.round(D*255))),H[be*V+he]=D}return H;function ke(Se,xe){for(var Ne=1/0,le=1/0,ve=Q.length;ve--;){var ye=Q[ve];if(ye.maxX+le<=Se)break;if(Se+le>ye.minX&&xe-le<ye.maxY&&xe+le>ye.minY){var ae=m(Se,xe,ye.x1,ye.y1,ye.x2,ye.y2);ae<Ne&&(Ne=ae,le=Math.sqrt(Ne))}}return _e(Se,xe)&&(le=-le),le}function _e(Se,xe){for(var Ne=0,le=Q.length;le--;){var ve=Q[le];if(ve.maxX<=Se)break;var ye=ve.y1>xe!=ve.y2>xe&&Se<(ve.x2-ve.x1)*(xe-ve.y1)/(ve.y2-ve.y1)+ve.x1;ye&&(Ne+=ve.y1<ve.y2?1:-1)}return Ne!==0}}function _(V,N,y,L,z,W,H,te,J,Q){W===void 0&&(W=1),te===void 0&&(te=0),J===void 0&&(J=0),Q===void 0&&(Q=0),d(V,N,y,L,z,W,H,null,te,J,Q)}function d(V,N,y,L,z,W,H,te,J,Q,he){W===void 0&&(W=1),J===void 0&&(J=0),Q===void 0&&(Q=0),he===void 0&&(he=0);for(var be=g(V,N,y,L,z,W),oe=new Uint8Array(be.length*4),D=0;D<be.length;D++)oe[D*4+he]=be[D];f(H,oe,J,Q,V,N,1<<3-he,te)}function m(V,N,y,L,z,W){var H=z-y,te=W-L,J=H*H+te*te,Q=J?Math.max(0,Math.min(1,((V-y)*H+(N-L)*te)/J)):0,he=V-(y+Q*H),be=N-(L+Q*te);return he*he+be*be}var E=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:_,generateIntoFramebuffer:d}),v="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",S="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",T="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",U=new Float32Array([0,0,2,0,0,2]),w=null,I=!1,M={},b=new WeakMap;function q(V){if(!I&&!G(V))throw new Error("WebGL generation not supported")}function P(V,N,y,L,z,W,H){if(W===void 0&&(W=1),H===void 0&&(H=null),!H&&(H=w,!H)){var te=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!te)throw new Error("OffscreenCanvas or DOM canvas not supported");H=w=te.getContext("webgl",{depth:!1})}q(H);var J=new Uint8Array(V*N*4);u(H,function(oe){var D=oe.gl,ke=oe.withTexture,_e=oe.withTextureFramebuffer;ke("readable",function(Se,xe){D.texImage2D(D.TEXTURE_2D,0,D.RGBA,V,N,0,D.RGBA,D.UNSIGNED_BYTE,null),_e(Se,xe,function(Ne){R(V,N,y,L,z,W,D,Ne,0,0,0),D.readPixels(0,0,V,N,D.RGBA,D.UNSIGNED_BYTE,J)})})});for(var Q=new Uint8Array(V*N),he=0,be=0;he<J.length;he+=4)Q[be++]=J[he];return Q}function B(V,N,y,L,z,W,H,te,J,Q){W===void 0&&(W=1),te===void 0&&(te=0),J===void 0&&(J=0),Q===void 0&&(Q=0),R(V,N,y,L,z,W,H,null,te,J,Q)}function R(V,N,y,L,z,W,H,te,J,Q,he){W===void 0&&(W=1),J===void 0&&(J=0),Q===void 0&&(Q=0),he===void 0&&(he=0),q(H);var be=[];i(y,function(oe,D,ke,_e){be.push(oe,D,ke,_e)}),be=new Float32Array(be),u(H,function(oe){var D=oe.gl,ke=oe.isWebGL2,_e=oe.getExtension,Se=oe.withProgram,xe=oe.withTexture,Ne=oe.withTextureFramebuffer,le=oe.handleContextLoss;if(xe("rawDistances",function(ve,ye){(V!==ve._lastWidth||N!==ve._lastHeight)&&D.texImage2D(D.TEXTURE_2D,0,D.RGBA,ve._lastWidth=V,ve._lastHeight=N,0,D.RGBA,D.UNSIGNED_BYTE,null),Se("main",v,S,function(ae){var Ie=ae.setAttribute,A=ae.setUniform,x=!ke&&_e("ANGLE_instanced_arrays"),O=!ke&&_e("EXT_blend_minmax");Ie("aUV",2,D.STATIC_DRAW,0,U),Ie("aLineSegment",4,D.DYNAMIC_DRAW,1,be),A.apply(void 0,["4f","uGlyphBounds"].concat(L)),A("1f","uMaxDistance",z),A("1f","uExponent",W),Ne(ve,ye,function(fe){D.enable(D.BLEND),D.colorMask(!0,!0,!0,!0),D.viewport(0,0,V,N),D.scissor(0,0,V,N),D.blendFunc(D.ONE,D.ONE),D.blendEquationSeparate(D.FUNC_ADD,ke?D.MAX:O.MAX_EXT),D.clear(D.COLOR_BUFFER_BIT),ke?D.drawArraysInstanced(D.TRIANGLES,0,3,be.length/4):x.drawArraysInstancedANGLE(D.TRIANGLES,0,3,be.length/4)})}),Se("post",o,T,function(ae){ae.setAttribute("aUV",2,D.STATIC_DRAW,0,U),ae.setUniform("1i","tex",ye),D.bindFramebuffer(D.FRAMEBUFFER,te),D.disable(D.BLEND),D.colorMask(he===0,he===1,he===2,he===3),D.viewport(J,Q,V,N),D.scissor(J,Q,V,N),D.drawArrays(D.TRIANGLES,0,3)})}),D.isContextLost())throw le(),new Error("webgl context lost")})}function G(V){var N=!V||V===w?M:V.canvas||V,y=b.get(N);if(y===void 0){I=!0;var L=null;try{var z=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],W=P(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,V);y=W&&z.length===W.length&&W.every(function(H,te){return H===z[te]}),y||(L="bad trial run results",console.info(z,W))}catch(H){y=!1,L=H.message}L&&console.warn("WebGL SDF generation not supported:",L),I=!1,b.set(N,y)}return y}var k=Object.freeze({__proto__:null,generate:P,generateIntoCanvas:B,generateIntoFramebuffer:R,isSupported:G});function Y(V,N,y,L,z,W){z===void 0&&(z=Math.max(L[2]-L[0],L[3]-L[1])/2),W===void 0&&(W=1);try{return P.apply(k,arguments)}catch(H){return console.info("WebGL SDF generation failed, falling back to JS",H),g.apply(E,arguments)}}function ee(V,N,y,L,z,W,H,te,J,Q){z===void 0&&(z=Math.max(L[2]-L[0],L[3]-L[1])/2),W===void 0&&(W=1),te===void 0&&(te=0),J===void 0&&(J=0),Q===void 0&&(Q=0);try{return B.apply(k,arguments)}catch(he){return console.info("WebGL SDF generation failed, falling back to JS",he),_.apply(E,arguments)}}return e.forEachPathCommand=n,e.generate=Y,e.generateIntoCanvas=ee,e.javascript=E,e.pathToLineSegments=i,e.webgl=k,e.webglUtils=p,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}function Ng(){var a=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},r={},n={};r.L=1,n[1]="L",Object.keys(t).forEach(function(le,ve){r[le]=1<<ve+1,n[r[le]]=le}),Object.freeze(r);var i=r.LRI|r.RLI|r.FSI,o=r.L|r.R|r.AL,s=r.B|r.S|r.WS|r.ON|r.FSI|r.LRI|r.RLI|r.PDI,l=r.BN|r.RLE|r.LRE|r.RLO|r.LRO|r.PDF,c=r.S|r.WS|r.B|i|r.PDI|l,u=null;function f(){if(!u){u=new Map;var le=function(ye){if(t.hasOwnProperty(ye)){var ae=0;t[ye].split(",").forEach(function(Ie){var A=Ie.split("+"),x=A[0],O=A[1];x=parseInt(x,36),O=O?parseInt(O,36):0,u.set(ae+=x,r[ye]);for(var fe=0;fe<O;fe++)u.set(++ae,r[ye])})}};for(var ve in t)le(ve)}}function h(le){return f(),u.get(le.codePointAt(0))||r.L}function p(le){return n[h(le)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function _(le,ve){var ye=36,ae=0,Ie=new Map,A=ve&&new Map,x;return le.split(",").forEach(function O(fe){if(fe.indexOf("+")!==-1)for(var Z=+fe;Z--;)O(x);else{x=fe;var ie=fe.split(">"),de=ie[0],ce=ie[1];de=String.fromCodePoint(ae+=parseInt(de,ye)),ce=String.fromCodePoint(ae+=parseInt(ce,ye)),Ie.set(de,ce),ve&&A.set(ce,de)}}),{map:Ie,reverseMap:A}}var d,m,E;function v(){if(!d){var le=_(g.pairs,!0),ve=le.map,ye=le.reverseMap;d=ve,m=ye,E=_(g.canonical,!1).map}}function S(le){return v(),d.get(le)||null}function T(le){return v(),m.get(le)||null}function U(le){return v(),E.get(le)||null}var w=r.L,I=r.R,M=r.EN,b=r.ES,q=r.ET,P=r.AN,B=r.CS,R=r.B,G=r.S,k=r.ON,Y=r.BN,ee=r.NSM,V=r.AL,N=r.LRO,y=r.RLO,L=r.LRE,z=r.RLE,W=r.PDF,H=r.LRI,te=r.RLI,J=r.FSI,Q=r.PDI;function he(le,ve){for(var ye=125,ae=new Uint32Array(le.length),Ie=0;Ie<le.length;Ie++)ae[Ie]=h(le[Ie]);var A=new Map;function x(It,nn){var Ft=ae[It];ae[It]=nn,A.set(Ft,A.get(Ft)-1),Ft&s&&A.set(s,A.get(s)-1),A.set(nn,(A.get(nn)||0)+1),nn&s&&A.set(s,(A.get(s)||0)+1)}for(var O=new Uint8Array(le.length),fe=new Map,Z=[],ie=null,de=0;de<le.length;de++)ie||Z.push(ie={start:de,end:le.length-1,level:ve==="rtl"?1:ve==="ltr"?0:Ao(de,!1)}),ae[de]&R&&(ie.end=de,ie=null);for(var ce=z|L|y|N|i|Q|W|R,ge=function(It){return It+(It&1?1:2)},Ce=function(It){return It+(It&1?2:1)},Ue=0;Ue<Z.length;Ue++){ie=Z[Ue];var se=[{_level:ie.level,_override:0,_isolate:0}],Ee=void 0,we=0,Fe=0,Oe=0;A.clear();for(var Me=ie.start;Me<=ie.end;Me++){var Te=ae[Me];if(Ee=se[se.length-1],A.set(Te,(A.get(Te)||0)+1),Te&s&&A.set(s,(A.get(s)||0)+1),Te&ce)if(Te&(z|L)){O[Me]=Ee._level;var F=(Te===z?Ce:ge)(Ee._level);F<=ye&&!we&&!Fe?se.push({_level:F,_override:0,_isolate:0}):we||Fe++}else if(Te&(y|N)){O[Me]=Ee._level;var Ae=(Te===y?Ce:ge)(Ee._level);Ae<=ye&&!we&&!Fe?se.push({_level:Ae,_override:Te&y?I:w,_isolate:0}):we||Fe++}else if(Te&i){Te&J&&(Te=Ao(Me+1,!0)===1?te:H),O[Me]=Ee._level,Ee._override&&x(Me,Ee._override);var ue=(Te===te?Ce:ge)(Ee._level);ue<=ye&&we===0&&Fe===0?(Oe++,se.push({_level:ue,_override:0,_isolate:1,_isolInitIndex:Me})):we++}else if(Te&Q){if(we>0)we--;else if(Oe>0){for(Fe=0;!se[se.length-1]._isolate;)se.pop();var K=se[se.length-1]._isolInitIndex;K!=null&&(fe.set(K,Me),fe.set(Me,K)),se.pop(),Oe--}Ee=se[se.length-1],O[Me]=Ee._level,Ee._override&&x(Me,Ee._override)}else Te&W?(we===0&&(Fe>0?Fe--:!Ee._isolate&&se.length>1&&(se.pop(),Ee=se[se.length-1])),O[Me]=Ee._level):Te&R&&(O[Me]=ie.level);else O[Me]=Ee._level,Ee._override&&Te!==Y&&x(Me,Ee._override)}for(var pe=[],Le=null,Pe=ie.start;Pe<=ie.end;Pe++){var We=ae[Pe];if(!(We&l)){var et=O[Pe],qe=We&i,Qe=We===Q;Le&&et===Le._level?(Le._end=Pe,Le._endsWithIsolInit=qe):pe.push(Le={_start:Pe,_end:Pe,_level:et,_startsWithPDI:Qe,_endsWithIsolInit:qe})}}for(var st=[],Zt=0;Zt<pe.length;Zt++){var Jt=pe[Zt];if(!Jt._startsWithPDI||Jt._startsWithPDI&&!fe.has(Jt._start)){for(var Gt=[Le=Jt],dn=void 0;Le&&Le._endsWithIsolInit&&(dn=fe.get(Le._end))!=null;)for(var Lt=Zt+1;Lt<pe.length;Lt++)if(pe[Lt]._start===dn){Gt.push(Le=pe[Lt]);break}for(var _t=[],pn=0;pn<Gt.length;pn++)for(var wr=Gt[pn],Zi=wr._start;Zi<=wr._end;Zi++)_t.push(Zi);for(var Ra=O[_t[0]],C=ie.level,j=_t[0]-1;j>=0;j--)if(!(ae[j]&l)){C=O[j];break}var $=_t[_t.length-1],ne=O[$],re=ie.level;if(!(ae[$]&i)){for(var De=$+1;De<=ie.end;De++)if(!(ae[De]&l)){re=O[De];break}}st.push({_seqIndices:_t,_sosType:Math.max(C,Ra)%2?I:w,_eosType:Math.max(re,ne)%2?I:w})}}for(var Be=0;Be<st.length;Be++){var ze=st[Be],me=ze._seqIndices,Xe=ze._sosType,Ye=ze._eosType,He=O[me[0]]&1?I:w;if(A.get(ee))for(var nt=0;nt<me.length;nt++){var yt=me[nt];if(ae[yt]&ee){for(var ot=Xe,Pt=nt-1;Pt>=0;Pt--)if(!(ae[me[Pt]]&l)){ot=ae[me[Pt]];break}x(yt,ot&(i|Q)?k:ot)}}if(A.get(M))for(var tt=0;tt<me.length;tt++){var Ze=me[tt];if(ae[Ze]&M)for(var Dn=tt-1;Dn>=-1;Dn--){var at=Dn===-1?Xe:ae[me[Dn]];if(at&o){at===V&&x(Ze,P);break}}}if(A.get(V))for(var Qt=0;Qt<me.length;Qt++){var Ji=me[Qt];ae[Ji]&V&&x(Ji,I)}if(A.get(b)||A.get(B))for(var $t=1;$t<me.length-1;$t++){var Yn=me[$t];if(ae[Yn]&(b|B)){for(var lt=0,en=0,qn=$t-1;qn>=0&&(lt=ae[me[qn]],!!(lt&l));qn--);for(var St=$t+1;St<me.length&&(en=ae[me[St]],!!(en&l));St++);lt===en&&(ae[Yn]===b?lt===M:lt&(M|P))&&x(Yn,lt)}}if(A.get(M))for(var Dt=0;Dt<me.length;Dt++){var Ca=me[Dt];if(ae[Ca]&M){for(var jn=Dt-1;jn>=0&&ae[me[jn]]&(q|l);jn--)x(me[jn],M);for(Dt++;Dt<me.length&&ae[me[Dt]]&(q|l|M);Dt++)ae[me[Dt]]!==M&&x(me[Dt],M)}}if(A.get(q)||A.get(b)||A.get(B))for(var Qi=0;Qi<me.length;Qi++){var ho=me[Qi];if(ae[ho]&(q|b|B)){x(ho,k);for(var Rr=Qi-1;Rr>=0&&ae[me[Rr]]&l;Rr--)x(me[Rr],k);for(var Cr=Qi+1;Cr<me.length&&ae[me[Cr]]&l;Cr++)x(me[Cr],k)}}if(A.get(M))for(var Ua=0,po=Xe;Ua<me.length;Ua++){var mo=me[Ua],La=ae[mo];La&M?po===w&&x(mo,w):La&o&&(po=La)}if(A.get(s)){var $i=I|M|P,go=$i|w,Ur=[];{for(var ci=[],ui=0;ui<me.length;ui++)if(ae[me[ui]]&s){var er=le[me[ui]],_o=void 0;if(S(er)!==null)if(ci.length<63)ci.push({char:er,seqIndex:ui});else break;else if((_o=T(er))!==null)for(var tr=ci.length-1;tr>=0;tr--){var Pa=ci[tr].char;if(Pa===_o||Pa===T(U(er))||S(U(Pa))===er){Ur.push([ci[tr].seqIndex,ui]),ci.length=tr;break}}}Ur.sort(function(It,nn){return It[0]-nn[0]})}for(var Da=0;Da<Ur.length;Da++){for(var vo=Ur[Da],Lr=vo[0],Ia=vo[1],xo=!1,tn=0,Fa=Lr+1;Fa<Ia;Fa++){var So=me[Fa];if(ae[So]&go){xo=!0;var Mo=ae[So]&$i?I:w;if(Mo===He){tn=Mo;break}}}if(xo&&!tn){tn=Xe;for(var Na=Lr-1;Na>=0;Na--){var yo=me[Na];if(ae[yo]&go){var Eo=ae[yo]&$i?I:w;Eo!==He?tn=Eo:tn=He;break}}}if(tn){if(ae[me[Lr]]=ae[me[Ia]]=tn,tn!==He){for(var nr=Lr+1;nr<me.length;nr++)if(!(ae[me[nr]]&l)){h(le[me[nr]])&ee&&(ae[me[nr]]=tn);break}}if(tn!==He){for(var ir=Ia+1;ir<me.length;ir++)if(!(ae[me[ir]]&l)){h(le[me[ir]])&ee&&(ae[me[ir]]=tn);break}}}}for(var In=0;In<me.length;In++)if(ae[me[In]]&s){for(var To=In,Oa=In,Ba=Xe,rr=In-1;rr>=0;rr--)if(ae[me[rr]]&l)To=rr;else{Ba=ae[me[rr]]&$i?I:w;break}for(var bo=Ye,ar=In+1;ar<me.length;ar++)if(ae[me[ar]]&(s|l))Oa=ar;else{bo=ae[me[ar]]&$i?I:w;break}for(var Ga=To;Ga<=Oa;Ga++)ae[me[Ga]]=Ba===bo?Ba:He;In=Oa}}}for(var kt=ie.start;kt<=ie.end;kt++){var gu=O[kt],Pr=ae[kt];if(gu&1?Pr&(w|M|P)&&O[kt]++:Pr&I?O[kt]++:Pr&(P|M)&&(O[kt]+=2),Pr&l&&(O[kt]=kt===0?ie.level:O[kt-1]),kt===ie.end||h(le[kt])&(G|R))for(var Dr=kt;Dr>=0&&h(le[Dr])&c;Dr--)O[Dr]=ie.level}}return{levels:O,paragraphs:Z};function Ao(It,nn){for(var Ft=It;Ft<le.length;Ft++){var Fn=ae[Ft];if(Fn&(I|V))return 1;if(Fn&(R|w)||nn&&Fn===Q)return 0;if(Fn&i){var wo=_u(Ft);Ft=wo===-1?le.length:wo}}return 0}function _u(It){for(var nn=1,Ft=It+1;Ft<le.length;Ft++){var Fn=ae[Ft];if(Fn&R)break;if(Fn&Q){if(--nn===0)return Ft}else Fn&i&&nn++}return-1}}var be="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",oe;function D(){if(!oe){var le=_(be,!0),ve=le.map,ye=le.reverseMap;ye.forEach(function(ae,Ie){ve.set(Ie,ae)}),oe=ve}}function ke(le){return D(),oe.get(le)||null}function _e(le,ve,ye,ae){var Ie=le.length;ye=Math.max(0,ye==null?0:+ye),ae=Math.min(Ie-1,ae==null?Ie-1:+ae);for(var A=new Map,x=ye;x<=ae;x++)if(ve[x]&1){var O=ke(le[x]);O!==null&&A.set(x,O)}return A}function Se(le,ve,ye,ae){var Ie=le.length;ye=Math.max(0,ye==null?0:+ye),ae=Math.min(Ie-1,ae==null?Ie-1:+ae);var A=[];return ve.paragraphs.forEach(function(x){var O=Math.max(ye,x.start),fe=Math.min(ae,x.end);if(O<fe){for(var Z=ve.levels.slice(O,fe+1),ie=fe;ie>=O&&h(le[ie])&c;ie--)Z[ie]=x.level;for(var de=x.level,ce=1/0,ge=0;ge<Z.length;ge++){var Ce=Z[ge];Ce>de&&(de=Ce),Ce<ce&&(ce=Ce|1)}for(var Ue=de;Ue>=ce;Ue--)for(var se=0;se<Z.length;se++)if(Z[se]>=Ue){for(var Ee=se;se+1<Z.length&&Z[se+1]>=Ue;)se++;se>Ee&&A.push([Ee+O,se+O])}}}),A}function xe(le,ve,ye,ae){var Ie=Ne(le,ve,ye,ae),A=[].concat(le);return Ie.forEach(function(x,O){A[O]=(ve.levels[x]&1?ke(le[x]):null)||le[x]}),A.join("")}function Ne(le,ve,ye,ae){for(var Ie=Se(le,ve,ye,ae),A=[],x=0;x<le.length;x++)A[x]=x;return Ie.forEach(function(O){for(var fe=O[0],Z=O[1],ie=A.slice(fe,Z+1),de=ie.length;de--;)A[Z-de]=ie[de]}),A}return e.closingToOpeningBracket=T,e.getBidiCharType=h,e.getBidiCharTypeName=p,e.getCanonicalBracket=U,e.getEmbeddingLevels=he,e.getMirroredCharacter=ke,e.getMirroredCharactersMap=_e,e.getReorderSegments=Se,e.getReorderedIndices=Ne,e.getReorderedString=xe,e.openingToClosingBracket=S,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}const nu=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Bs(a){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(r,n){let i=je[n];return i?Bs(i):r}return a.replace(e,t)}const Mt=[];for(let a=0;a<256;a++)Mt[a]=(a<16?"0":"")+a.toString(16);function Og(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Mt[a&255]+Mt[a>>8&255]+Mt[a>>16&255]+Mt[a>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[r&255]+Mt[r>>8&255]+Mt[r>>16&255]+Mt[r>>24&255]).toUpperCase()}const $n=Object.assign||function(){let a=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let r=arguments[e];if(r)for(let n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])}return a},Bg=Date.now(),nc=new WeakMap,ic=new Map;let Gg=1e10;function Gs(a,e){const t=Vg(e);let r=nc.get(a);if(r||nc.set(a,r=Object.create(null)),r[t])return new r[t];const n=`_onBeforeCompile${t}`,i=function(c,u){a.onBeforeCompile.call(this,c,u);const f=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let h=ic[f];if(!h){const p=kg(this,c,e,t);h=ic[f]=p}c.vertexShader=h.vertexShader,c.fragmentShader=h.fragmentShader,$n(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-Bg}}),this[n]&&this[n](c)},o=function(){return s(e.chained?a:a.clone())},s=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:a}),Object.defineProperty(u,"id",{value:Gg++}),u.uuid=Og(),u.uniforms=$n({},c.uniforms,e.uniforms),u.defines=$n({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=$n({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:o},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return a.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return i},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return a.copy.call(this,c),!a.isShaderMaterial&&!a.isDerivedMaterial&&($n(this.extensions,c.extensions),$n(this.defines,c.defines),$n(this.uniforms,Ni.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new a.constructor;return s(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=Gs(a.isDerivedMaterial?a.getDepthMaterial():new jc({depthPacking:Lc}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=Gs(a.isDerivedMaterial?a.getDistanceMaterial():new Kc,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),a.dispose.call(this)}}};return r[t]=o,new o}function kg(a,{vertexShader:e,fragmentShader:t},r,n){let{vertexDefs:i,vertexMainIntro:o,vertexMainOutro:s,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:f,fragmentColorTransform:h,customRewriter:p,timeUniform:g}=r;if(i=i||"",o=o||"",s=s||"",c=c||"",u=u||"",f=f||"",(l||p)&&(e=Bs(e)),(h||p)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=Bs(t)),p){let _=p({vertexShader:e,fragmentShader:t});e=_.vertexShader,t=_.fragmentShader}if(h){let _=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,d=>(_.push(d),"")),f=`${h}
${_.join(`
`)}
${f}`}if(g){const _=`
uniform float ${g};
`;i=_+i,c=_+c}return l&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,i=`${i}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,o=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${o}
`,e=e.replace(/\b(position|normal|uv)\b/g,(_,d,m,E)=>/\battribute\s+vec[23]\s+$/.test(E.substr(0,m))?d:`troika_${d}_${n}`),a.map&&a.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=rc(e,n,i,o,s),t=rc(t,n,c,u,f),{vertexShader:e,fragmentShader:t}}function rc(a,e,t,r,n){return(r||n||t)&&(a=a.replace(nu,`
${t}
void troikaOrigMain${e}() {`),a+=`
void main() {
  ${r}
  troikaOrigMain${e}();
  ${n}
}`),a}function zg(a,e){return a==="uniforms"?void 0:typeof e=="function"?e.toString():e}let Hg=0;const ac=new Map;function Vg(a){const e=JSON.stringify(a,zg);let t=ac.get(e);return t==null&&ac.set(e,t=++Hg),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function Wg(){return typeof window>"u"&&(self.window=self),function(a){var e={parse:function(n){var i=e._bin,o=new Uint8Array(n);if(i.readASCII(o,0,4)=="ttcf"){var s=4;i.readUshort(o,s),s+=2,i.readUshort(o,s),s+=2;var l=i.readUint(o,s);s+=4;for(var c=[],u=0;u<l;u++){var f=i.readUint(o,s);s+=4,c.push(e._readFont(o,f))}return c}return[e._readFont(o,0)]},_readFont:function(n,i){var o=e._bin,s=i;o.readFixed(n,i),i+=4;var l=o.readUshort(n,i);i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:n,_offset:s},f={},h=0;h<l;h++){var p=o.readASCII(n,i,4);i+=4,o.readUint(n,i),i+=4;var g=o.readUint(n,i);i+=4;var _=o.readUint(n,i);i+=4,f[p]={offset:g,length:_}}for(h=0;h<c.length;h++){var d=c[h];f[d]&&(u[d.trim()]=e[d.trim()].parse(n,f[d].offset,f[d].length,u))}return u},_tabOffset:function(n,i,o){for(var s=e._bin,l=s.readUshort(n,o+4),c=o+12,u=0;u<l;u++){var f=s.readASCII(n,c,4);c+=4,s.readUint(n,c),c+=4;var h=s.readUint(n,c);if(c+=4,s.readUint(n,c),c+=4,f==i)return h}return 0}};e._bin={readFixed:function(n,i){return(n[i]<<8|n[i+1])+(n[i+2]<<8|n[i+3])/65540},readF2dot14:function(n,i){return e._bin.readShort(n,i)/16384},readInt:function(n,i){return e._bin._view(n).getInt32(i)},readInt8:function(n,i){return e._bin._view(n).getInt8(i)},readShort:function(n,i){return e._bin._view(n).getInt16(i)},readUshort:function(n,i){return e._bin._view(n).getUint16(i)},readUshorts:function(n,i,o){for(var s=[],l=0;l<o;l++)s.push(e._bin.readUshort(n,i+2*l));return s},readUint:function(n,i){return e._bin._view(n).getUint32(i)},readUint64:function(n,i){return 4294967296*e._bin.readUint(n,i)+e._bin.readUint(n,i+4)},readASCII:function(n,i,o){for(var s="",l=0;l<o;l++)s+=String.fromCharCode(n[i+l]);return s},readUnicode:function(n,i,o){for(var s="",l=0;l<o;l++){var c=n[i++]<<8|n[i++];s+=String.fromCharCode(c)}return s},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,i,o){var s=e._bin._tdec;return s&&i==0&&o==n.length?s.decode(n):e._bin.readASCII(n,i,o)},readBytes:function(n,i,o){for(var s=[],l=0;l<o;l++)s.push(n[i+l]);return s},readASCIIArray:function(n,i,o){for(var s=[],l=0;l<o;l++)s.push(String.fromCharCode(n[i+l]));return s},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,i,o,s,l){var c=e._bin,u={},f=i;c.readFixed(n,i),i+=4;var h=c.readUshort(n,i);i+=2;var p=c.readUshort(n,i);i+=2;var g=c.readUshort(n,i);return i+=2,u.scriptList=e._lctf.readScriptList(n,f+h),u.featureList=e._lctf.readFeatureList(n,f+p),u.lookupList=e._lctf.readLookupList(n,f+g,l),u},e._lctf.readLookupList=function(n,i,o){var s=e._bin,l=i,c=[],u=s.readUshort(n,i);i+=2;for(var f=0;f<u;f++){var h=s.readUshort(n,i);i+=2;var p=e._lctf.readLookupTable(n,l+h,o);c.push(p)}return c},e._lctf.readLookupTable=function(n,i,o){var s=e._bin,l=i,c={tabs:[]};c.ltype=s.readUshort(n,i),i+=2,c.flag=s.readUshort(n,i),i+=2;var u=s.readUshort(n,i);i+=2;for(var f=c.ltype,h=0;h<u;h++){var p=s.readUshort(n,i);i+=2;var g=o(n,f,l+p,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(n){for(var i=0,o=0;o<32;o++)n>>>o&1&&i++;return i},e._lctf.readClassDef=function(n,i){var o=e._bin,s=[],l=o.readUshort(n,i);if(i+=2,l==1){var c=o.readUshort(n,i);i+=2;var u=o.readUshort(n,i);i+=2;for(var f=0;f<u;f++)s.push(c+f),s.push(c+f),s.push(o.readUshort(n,i)),i+=2}if(l==2){var h=o.readUshort(n,i);for(i+=2,f=0;f<h;f++)s.push(o.readUshort(n,i)),i+=2,s.push(o.readUshort(n,i)),i+=2,s.push(o.readUshort(n,i)),i+=2}return s},e._lctf.getInterval=function(n,i){for(var o=0;o<n.length;o+=3){var s=n[o],l=n[o+1];if(n[o+2],s<=i&&i<=l)return o}return-1},e._lctf.readCoverage=function(n,i){var o=e._bin,s={};s.fmt=o.readUshort(n,i),i+=2;var l=o.readUshort(n,i);return i+=2,s.fmt==1&&(s.tab=o.readUshorts(n,i,l)),s.fmt==2&&(s.tab=o.readUshorts(n,i,3*l)),s},e._lctf.coverageIndex=function(n,i){var o=n.tab;if(n.fmt==1)return o.indexOf(i);if(n.fmt==2){var s=e._lctf.getInterval(o,i);if(s!=-1)return o[s+2]+(i-o[s])}return-1},e._lctf.readFeatureList=function(n,i){var o=e._bin,s=i,l=[],c=o.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=o.readASCII(n,i,4);i+=4;var h=o.readUshort(n,i);i+=2;var p=e._lctf.readFeatureTable(n,s+h);p.tag=f.trim(),l.push(p)}return l},e._lctf.readFeatureTable=function(n,i){var o=e._bin,s=i,l={},c=o.readUshort(n,i);i+=2,c>0&&(l.featureParams=s+c);var u=o.readUshort(n,i);i+=2,l.tab=[];for(var f=0;f<u;f++)l.tab.push(o.readUshort(n,i+2*f));return l},e._lctf.readScriptList=function(n,i){var o=e._bin,s=i,l={},c=o.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=o.readASCII(n,i,4);i+=4;var h=o.readUshort(n,i);i+=2,l[f.trim()]=e._lctf.readScriptTable(n,s+h)}return l},e._lctf.readScriptTable=function(n,i){var o=e._bin,s=i,l={},c=o.readUshort(n,i);i+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,s+c));var u=o.readUshort(n,i);i+=2;for(var f=0;f<u;f++){var h=o.readASCII(n,i,4);i+=4;var p=o.readUshort(n,i);i+=2,l[h.trim()]=e._lctf.readLangSysTable(n,s+p)}return l},e._lctf.readLangSysTable=function(n,i){var o=e._bin,s={};o.readUshort(n,i),i+=2,s.reqFeature=o.readUshort(n,i),i+=2;var l=o.readUshort(n,i);return i+=2,s.features=o.readUshorts(n,i,l),s},e.CFF={},e.CFF.parse=function(n,i,o){var s=e._bin;(n=new Uint8Array(n.buffer,i,o))[i=0],n[++i],n[++i],n[++i],i++;var l=[];i=e.CFF.readIndex(n,i,l);for(var c=[],u=0;u<l.length-1;u++)c.push(s.readASCII(n,i+l[u],l[u+1]-l[u]));i+=l[l.length-1];var f=[];i=e.CFF.readIndex(n,i,f);var h=[];for(u=0;u<f.length-1;u++)h.push(e.CFF.readDict(n,i+f[u],i+f[u+1]));i+=f[f.length-1];var p=h[0],g=[];i=e.CFF.readIndex(n,i,g);var _=[];for(u=0;u<g.length-1;u++)_.push(s.readASCII(n,i+g[u],g[u+1]-g[u]));if(i+=g[g.length-1],e.CFF.readSubrs(n,i,p),p.CharStrings){i=p.CharStrings,g=[],i=e.CFF.readIndex(n,i,g);var d=[];for(u=0;u<g.length-1;u++)d.push(s.readBytes(n,i+g[u],g[u+1]-g[u]));p.CharStrings=d}if(p.ROS){i=p.FDArray;var m=[];for(i=e.CFF.readIndex(n,i,m),p.FDArray=[],u=0;u<m.length-1;u++){var E=e.CFF.readDict(n,i+m[u],i+m[u+1]);e.CFF._readFDict(n,E,_),p.FDArray.push(E)}i+=m[m.length-1],i=p.FDSelect,p.FDSelect=[];var v=n[i];if(i++,v!=3)throw v;var S=s.readUshort(n,i);for(i+=2,u=0;u<S+1;u++)p.FDSelect.push(s.readUshort(n,i),n[i+2]),i+=3}return p.Encoding&&(p.Encoding=e.CFF.readEncoding(n,p.Encoding,p.CharStrings.length)),p.charset&&(p.charset=e.CFF.readCharset(n,p.charset,p.CharStrings.length)),e.CFF._readFDict(n,p,_),p},e.CFF._readFDict=function(n,i,o){var s;for(var l in i.Private&&(s=i.Private[1],i.Private=e.CFF.readDict(n,s,s+i.Private[0]),i.Private.Subrs&&e.CFF.readSubrs(n,s+i.Private.Subrs,i.Private)),i)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(i[l]=o[i[l]-426+35])},e.CFF.readSubrs=function(n,i,o){var s=e._bin,l=[];i=e.CFF.readIndex(n,i,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,o.Bias=c,o.Subrs=[];for(var f=0;f<l.length-1;f++)o.Subrs.push(s.readBytes(n,i+l[f],l[f+1]-l[f]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,i){for(var o=0;o<n.charset.length;o++)if(n.charset[o]==i)return o;return-1},e.CFF.glyphBySE=function(n,i){return i<0||i>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[i])},e.CFF.readEncoding=function(n,i,o){e._bin;var s=[".notdef"],l=n[i];if(i++,l!=0)throw"error: unknown encoding format: "+l;var c=n[i];i++;for(var u=0;u<c;u++)s.push(n[i+u]);return s},e.CFF.readCharset=function(n,i,o){var s=e._bin,l=[".notdef"],c=n[i];if(i++,c==0)for(var u=0;u<o;u++){var f=s.readUshort(n,i);i+=2,l.push(f)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<o;){f=s.readUshort(n,i),i+=2;var h=0;for(c==1?(h=n[i],i++):(h=s.readUshort(n,i),i+=2),u=0;u<=h;u++)l.push(f),f++}}return l},e.CFF.readIndex=function(n,i,o){var s=e._bin,l=s.readUshort(n,i)+1,c=n[i+=2];if(i++,c==1)for(var u=0;u<l;u++)o.push(n[i+u]);else if(c==2)for(u=0;u<l;u++)o.push(s.readUshort(n,i+2*u));else if(c==3)for(u=0;u<l;u++)o.push(16777215&s.readUint(n,i+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(i+=l*c)-1},e.CFF.getCharString=function(n,i,o){var s=e._bin,l=n[i],c=n[i+1];n[i+2],n[i+3],n[i+4];var u=1,f=null,h=null;l<=20&&(f=l,u=1),l==12&&(f=100*l+c,u=2),21<=l&&l<=27&&(f=l,u=1),l==28&&(h=s.readShort(n,i+1),u=3),29<=l&&l<=31&&(f=l,u=1),32<=l&&l<=246&&(h=l-139,u=1),247<=l&&l<=250&&(h=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(h=256*-(l-251)-c-108,u=2),l==255&&(h=s.readInt(n,i+1)/65535,u=5),o.val=h??"o"+f,o.size=u},e.CFF.readCharString=function(n,i,o){for(var s=i+o,l=e._bin,c=[];i<s;){var u=n[i],f=n[i+1];n[i+2],n[i+3],n[i+4];var h=1,p=null,g=null;u<=20&&(p=u,h=1),u==12&&(p=100*u+f,h=2),u!=19&&u!=20||(p=u,h=2),21<=u&&u<=27&&(p=u,h=1),u==28&&(g=l.readShort(n,i+1),h=3),29<=u&&u<=31&&(p=u,h=1),32<=u&&u<=246&&(g=u-139,h=1),247<=u&&u<=250&&(g=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(g=256*-(u-251)-f-108,h=2),u==255&&(g=l.readInt(n,i+1)/65535,h=5),c.push(g??"o"+p),i+=h}return c},e.CFF.readDict=function(n,i,o){for(var s=e._bin,l={},c=[];i<o;){var u=n[i],f=n[i+1];n[i+2],n[i+3],n[i+4];var h=1,p=null,g=null;if(u==28&&(g=s.readShort(n,i+1),h=3),u==29&&(g=s.readInt(n,i+1),h=5),32<=u&&u<=246&&(g=u-139,h=1),247<=u&&u<=250&&(g=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(g=256*-(u-251)-f-108,h=2),u==255)throw g=s.readInt(n,i+1)/65535,h=5,"unknown number";if(u==30){var _=[];for(h=1;;){var d=n[i+h];h++;var m=d>>4,E=15&d;if(m!=15&&_.push(m),E!=15&&_.push(E),E==15)break}for(var v="",S=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],T=0;T<_.length;T++)v+=S[_[T]];g=parseFloat(v)}u<=21&&(p=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],h=1,u==12&&(p=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][f],h=2)),p!=null?(l[p]=c.length==1?c[0]:c,c=[]):c.push(g),i+=h}return l},e.cmap={},e.cmap.parse=function(n,i,o){n=new Uint8Array(n.buffer,i,o),i=0;var s=e._bin,l={};s.readUshort(n,i),i+=2;var c=s.readUshort(n,i);i+=2;var u=[];l.tables=[];for(var f=0;f<c;f++){var h=s.readUshort(n,i);i+=2;var p=s.readUshort(n,i);i+=2;var g=s.readUint(n,i);i+=4;var _="p"+h+"e"+p,d=u.indexOf(g);if(d==-1){var m;d=l.tables.length,u.push(g);var E=s.readUshort(n,g);E==0?m=e.cmap.parse0(n,g):E==4?m=e.cmap.parse4(n,g):E==6?m=e.cmap.parse6(n,g):E==12?m=e.cmap.parse12(n,g):console.debug("unknown format: "+E,h,p,g),l.tables.push(m)}if(l[_]!=null)throw"multiple tables for one platform+encoding";l[_]=d}return l},e.cmap.parse0=function(n,i){var o=e._bin,s={};s.format=o.readUshort(n,i),i+=2;var l=o.readUshort(n,i);i+=2,o.readUshort(n,i),i+=2,s.map=[];for(var c=0;c<l-6;c++)s.map.push(n[i+c]);return s},e.cmap.parse4=function(n,i){var o=e._bin,s=i,l={};l.format=o.readUshort(n,i),i+=2;var c=o.readUshort(n,i);i+=2,o.readUshort(n,i),i+=2;var u=o.readUshort(n,i);i+=2;var f=u/2;l.searchRange=o.readUshort(n,i),i+=2,l.entrySelector=o.readUshort(n,i),i+=2,l.rangeShift=o.readUshort(n,i),i+=2,l.endCount=o.readUshorts(n,i,f),i+=2*f,i+=2,l.startCount=o.readUshorts(n,i,f),i+=2*f,l.idDelta=[];for(var h=0;h<f;h++)l.idDelta.push(o.readShort(n,i)),i+=2;for(l.idRangeOffset=o.readUshorts(n,i,f),i+=2*f,l.glyphIdArray=[];i<s+c;)l.glyphIdArray.push(o.readUshort(n,i)),i+=2;return l},e.cmap.parse6=function(n,i){var o=e._bin,s={};s.format=o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2,s.firstCode=o.readUshort(n,i),i+=2;var l=o.readUshort(n,i);i+=2,s.glyphIdArray=[];for(var c=0;c<l;c++)s.glyphIdArray.push(o.readUshort(n,i)),i+=2;return s},e.cmap.parse12=function(n,i){var o=e._bin,s={};s.format=o.readUshort(n,i),i+=2,i+=2,o.readUint(n,i),i+=4,o.readUint(n,i),i+=4;var l=o.readUint(n,i);i+=4,s.groups=[];for(var c=0;c<l;c++){var u=i+12*c,f=o.readUint(n,u+0),h=o.readUint(n,u+4),p=o.readUint(n,u+8);s.groups.push([f,h,p])}return s},e.glyf={},e.glyf.parse=function(n,i,o,s){for(var l=[],c=0;c<s.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,i){var o=e._bin,s=n._data,l=e._tabOffset(s,"glyf",n._offset)+n.loca[i];if(n.loca[i]==n.loca[i+1])return null;var c={};if(c.noc=o.readShort(s,l),l+=2,c.xMin=o.readShort(s,l),l+=2,c.yMin=o.readShort(s,l),l+=2,c.xMax=o.readShort(s,l),l+=2,c.yMax=o.readShort(s,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(o.readUshort(s,l)),l+=2;var f=o.readUshort(s,l);if(l+=2,s.length-l<f)return null;c.instructions=o.readBytes(s,l,f),l+=f;var h=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<h;u++){var p=s[l];if(l++,c.flags.push(p),(8&p)!=0){var g=s[l];l++;for(var _=0;_<g;_++)c.flags.push(p),u++}}for(c.xs=[],u=0;u<h;u++){var d=(2&c.flags[u])!=0,m=(16&c.flags[u])!=0;d?(c.xs.push(m?s[l]:-s[l]),l++):m?c.xs.push(0):(c.xs.push(o.readShort(s,l)),l+=2)}for(c.ys=[],u=0;u<h;u++)d=(4&c.flags[u])!=0,m=(32&c.flags[u])!=0,d?(c.ys.push(m?s[l]:-s[l]),l++):m?c.ys.push(0):(c.ys.push(o.readShort(s,l)),l+=2);var E=0,v=0;for(u=0;u<h;u++)E+=c.xs[u],v+=c.ys[u],c.xs[u]=E,c.ys[u]=v}else{var S;c.parts=[];do{S=o.readUshort(s,l),l+=2;var T={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(T),T.glyphIndex=o.readUshort(s,l),l+=2,1&S){var U=o.readShort(s,l);l+=2;var w=o.readShort(s,l);l+=2}else U=o.readInt8(s,l),l++,w=o.readInt8(s,l),l++;2&S?(T.m.tx=U,T.m.ty=w):(T.p1=U,T.p2=w),8&S?(T.m.a=T.m.d=o.readF2dot14(s,l),l+=2):64&S?(T.m.a=o.readF2dot14(s,l),l+=2,T.m.d=o.readF2dot14(s,l),l+=2):128&S&&(T.m.a=o.readF2dot14(s,l),l+=2,T.m.b=o.readF2dot14(s,l),l+=2,T.m.c=o.readF2dot14(s,l),l+=2,T.m.d=o.readF2dot14(s,l),l+=2)}while(32&S);if(256&S){var I=o.readUshort(s,l);for(l+=2,c.instr=[],u=0;u<I;u++)c.instr.push(s[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(n,i,o,s){var l=i;i+=4;var c=e._bin.readUshort(n,i);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,l+c)}},e.GPOS={},e.GPOS.parse=function(n,i,o,s){return e._lctf.parse(n,i,o,s,e.GPOS.subt)},e.GPOS.subt=function(n,i,o,s){var l=e._bin,c=o,u={};if(u.fmt=l.readUshort(n,o),o+=2,i==1||i==2||i==3||i==7||i==8&&u.fmt<=2){var f=l.readUshort(n,o);o+=2,u.coverage=e._lctf.readCoverage(n,f+c)}if(i==1&&u.fmt==1){var h=l.readUshort(n,o);o+=2,h!=0&&(u.pos=e.GPOS.readValueRecord(n,o,h))}else if(i==2&&u.fmt>=1&&u.fmt<=2){h=l.readUshort(n,o),o+=2;var p=l.readUshort(n,o);o+=2;var g=e._lctf.numOfOnes(h),_=e._lctf.numOfOnes(p);if(u.fmt==1){u.pairsets=[];var d=l.readUshort(n,o);o+=2;for(var m=0;m<d;m++){var E=c+l.readUshort(n,o);o+=2;var v=l.readUshort(n,E);E+=2;for(var S=[],T=0;T<v;T++){var U=l.readUshort(n,E);E+=2,h!=0&&(P=e.GPOS.readValueRecord(n,E,h),E+=2*g),p!=0&&(B=e.GPOS.readValueRecord(n,E,p),E+=2*_),S.push({gid2:U,val1:P,val2:B})}u.pairsets.push(S)}}if(u.fmt==2){var w=l.readUshort(n,o);o+=2;var I=l.readUshort(n,o);o+=2;var M=l.readUshort(n,o);o+=2;var b=l.readUshort(n,o);for(o+=2,u.classDef1=e._lctf.readClassDef(n,c+w),u.classDef2=e._lctf.readClassDef(n,c+I),u.matrix=[],m=0;m<M;m++){var q=[];for(T=0;T<b;T++){var P=null,B=null;h!=0&&(P=e.GPOS.readValueRecord(n,o,h),o+=2*g),p!=0&&(B=e.GPOS.readValueRecord(n,o,p),o+=2*_),q.push({val1:P,val2:B})}u.matrix.push(q)}}}else if(i==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(n,l.readUshort(n,o)+c),u.baseCoverage=e._lctf.readCoverage(n,l.readUshort(n,o+2)+c),u.markClassCount=l.readUshort(n,o+4),u.markArray=e.GPOS.readMarkArray(n,l.readUshort(n,o+6)+c),u.baseArray=e.GPOS.readBaseArray(n,l.readUshort(n,o+8)+c,u.markClassCount);else if(i==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(n,l.readUshort(n,o)+c),u.mark2Coverage=e._lctf.readCoverage(n,l.readUshort(n,o+2)+c),u.markClassCount=l.readUshort(n,o+4),u.mark1Array=e.GPOS.readMarkArray(n,l.readUshort(n,o+6)+c),u.mark2Array=e.GPOS.readBaseArray(n,l.readUshort(n,o+8)+c,u.markClassCount);else{if(i==9&&u.fmt==1){var R=l.readUshort(n,o);o+=2;var G=l.readUint(n,o);if(o+=4,s.ltype==9)s.ltype=R;else if(s.ltype!=R)throw"invalid extension substitution";return e.GPOS.subt(n,s.ltype,c+G)}console.debug("unsupported GPOS table LookupType",i,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(n,i,o){var s=e._bin,l=[];return l.push(1&o?s.readShort(n,i):0),i+=1&o?2:0,l.push(2&o?s.readShort(n,i):0),i+=2&o?2:0,l.push(4&o?s.readShort(n,i):0),i+=4&o?2:0,l.push(8&o?s.readShort(n,i):0),i+=8&o?2:0,l},e.GPOS.readBaseArray=function(n,i,o){var s=e._bin,l=[],c=i,u=s.readUshort(n,i);i+=2;for(var f=0;f<u;f++){for(var h=[],p=0;p<o;p++)h.push(e.GPOS.readAnchorRecord(n,c+s.readUshort(n,i))),i+=2;l.push(h)}return l},e.GPOS.readMarkArray=function(n,i){var o=e._bin,s=[],l=i,c=o.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=e.GPOS.readAnchorRecord(n,o.readUshort(n,i+2)+l);f.markClass=o.readUshort(n,i),s.push(f),i+=4}return s},e.GPOS.readAnchorRecord=function(n,i){var o=e._bin,s={};return s.fmt=o.readUshort(n,i),s.x=o.readShort(n,i+2),s.y=o.readShort(n,i+4),s},e.GSUB={},e.GSUB.parse=function(n,i,o,s){return e._lctf.parse(n,i,o,s,e.GSUB.subt)},e.GSUB.subt=function(n,i,o,s){var l=e._bin,c=o,u={};if(u.fmt=l.readUshort(n,o),o+=2,i!=1&&i!=2&&i!=4&&i!=5&&i!=6)return null;if(i==1||i==2||i==4||i==5&&u.fmt<=2||i==6&&u.fmt<=2){var f=l.readUshort(n,o);o+=2,u.coverage=e._lctf.readCoverage(n,c+f)}if(i==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(n,o),o+=2;else if(u.fmt==2){var h=l.readUshort(n,o);o+=2,u.newg=l.readUshorts(n,o,h),o+=2*u.newg.length}}else if(i==2&&u.fmt==1){h=l.readUshort(n,o),o+=2,u.seqs=[];for(var p=0;p<h;p++){var g=l.readUshort(n,o)+c;o+=2;var _=l.readUshort(n,g);u.seqs.push(l.readUshorts(n,g+2,_))}}else if(i==4)for(u.vals=[],h=l.readUshort(n,o),o+=2,p=0;p<h;p++){var d=l.readUshort(n,o);o+=2,u.vals.push(e.GSUB.readLigatureSet(n,c+d))}else if(i==5&&u.fmt==2){if(u.fmt==2){var m=l.readUshort(n,o);o+=2,u.cDef=e._lctf.readClassDef(n,c+m),u.scset=[];var E=l.readUshort(n,o);for(o+=2,p=0;p<E;p++){var v=l.readUshort(n,o);o+=2,u.scset.push(v==0?null:e.GSUB.readSubClassSet(n,c+v))}}}else if(i==6&&u.fmt==3){if(u.fmt==3){for(p=0;p<3;p++){h=l.readUshort(n,o),o+=2;for(var S=[],T=0;T<h;T++)S.push(e._lctf.readCoverage(n,c+l.readUshort(n,o+2*T)));o+=2*h,p==0&&(u.backCvg=S),p==1&&(u.inptCvg=S),p==2&&(u.ahedCvg=S)}h=l.readUshort(n,o),o+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(n,o,h)}}else{if(i==7&&u.fmt==1){var U=l.readUshort(n,o);o+=2;var w=l.readUint(n,o);if(o+=4,s.ltype==9)s.ltype=U;else if(s.ltype!=U)throw"invalid extension substitution";return e.GSUB.subt(n,s.ltype,c+w)}console.debug("unsupported GSUB table LookupType",i,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(n,i){var o=e._bin.readUshort,s=i,l=[],c=o(n,i);i+=2;for(var u=0;u<c;u++){var f=o(n,i);i+=2,l.push(e.GSUB.readSubClassRule(n,s+f))}return l},e.GSUB.readSubClassRule=function(n,i){var o=e._bin.readUshort,s={},l=o(n,i),c=o(n,i+=2);i+=2,s.input=[];for(var u=0;u<l-1;u++)s.input.push(o(n,i)),i+=2;return s.substLookupRecords=e.GSUB.readSubstLookupRecords(n,i,c),s},e.GSUB.readSubstLookupRecords=function(n,i,o){for(var s=e._bin.readUshort,l=[],c=0;c<o;c++)l.push(s(n,i),s(n,i+2)),i+=4;return l},e.GSUB.readChainSubClassSet=function(n,i){var o=e._bin,s=i,l=[],c=o.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=o.readUshort(n,i);i+=2,l.push(e.GSUB.readChainSubClassRule(n,s+f))}return l},e.GSUB.readChainSubClassRule=function(n,i){for(var o=e._bin,s={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=o.readUshort(n,i);i+=2,c==1&&u--,s[l[c]]=o.readUshorts(n,i,u),i+=2*s[l[c]].length}return u=o.readUshort(n,i),i+=2,s.subst=o.readUshorts(n,i,2*u),i+=2*s.subst.length,s},e.GSUB.readLigatureSet=function(n,i){var o=e._bin,s=i,l=[],c=o.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var f=o.readUshort(n,i);i+=2,l.push(e.GSUB.readLigature(n,s+f))}return l},e.GSUB.readLigature=function(n,i){var o=e._bin,s={chain:[]};s.nglyph=o.readUshort(n,i),i+=2;var l=o.readUshort(n,i);i+=2;for(var c=0;c<l-1;c++)s.chain.push(o.readUshort(n,i)),i+=2;return s},e.head={},e.head.parse=function(n,i,o){var s=e._bin,l={};return s.readFixed(n,i),i+=4,l.fontRevision=s.readFixed(n,i),i+=4,s.readUint(n,i),i+=4,s.readUint(n,i),i+=4,l.flags=s.readUshort(n,i),i+=2,l.unitsPerEm=s.readUshort(n,i),i+=2,l.created=s.readUint64(n,i),i+=8,l.modified=s.readUint64(n,i),i+=8,l.xMin=s.readShort(n,i),i+=2,l.yMin=s.readShort(n,i),i+=2,l.xMax=s.readShort(n,i),i+=2,l.yMax=s.readShort(n,i),i+=2,l.macStyle=s.readUshort(n,i),i+=2,l.lowestRecPPEM=s.readUshort(n,i),i+=2,l.fontDirectionHint=s.readShort(n,i),i+=2,l.indexToLocFormat=s.readShort(n,i),i+=2,l.glyphDataFormat=s.readShort(n,i),i+=2,l},e.hhea={},e.hhea.parse=function(n,i,o){var s=e._bin,l={};return s.readFixed(n,i),i+=4,l.ascender=s.readShort(n,i),i+=2,l.descender=s.readShort(n,i),i+=2,l.lineGap=s.readShort(n,i),i+=2,l.advanceWidthMax=s.readUshort(n,i),i+=2,l.minLeftSideBearing=s.readShort(n,i),i+=2,l.minRightSideBearing=s.readShort(n,i),i+=2,l.xMaxExtent=s.readShort(n,i),i+=2,l.caretSlopeRise=s.readShort(n,i),i+=2,l.caretSlopeRun=s.readShort(n,i),i+=2,l.caretOffset=s.readShort(n,i),i+=2,i+=8,l.metricDataFormat=s.readShort(n,i),i+=2,l.numberOfHMetrics=s.readUshort(n,i),i+=2,l},e.hmtx={},e.hmtx.parse=function(n,i,o,s){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,f=0,h=0;h<s.maxp.numGlyphs;h++)h<s.hhea.numberOfHMetrics&&(u=l.readUshort(n,i),i+=2,f=l.readShort(n,i),i+=2),c.aWidth.push(u),c.lsBearing.push(f);return c},e.kern={},e.kern.parse=function(n,i,o,s){var l=e._bin,c=l.readUshort(n,i);if(i+=2,c==1)return e.kern.parseV1(n,i-2,o,s);var u=l.readUshort(n,i);i+=2;for(var f={glyph1:[],rval:[]},h=0;h<u;h++){i+=2,o=l.readUshort(n,i),i+=2;var p=l.readUshort(n,i);i+=2;var g=p>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;i=e.kern.readFormat0(n,i,f)}return f},e.kern.parseV1=function(n,i,o,s){var l=e._bin;l.readFixed(n,i),i+=4;var c=l.readUint(n,i);i+=4;for(var u={glyph1:[],rval:[]},f=0;f<c;f++){l.readUint(n,i),i+=4;var h=l.readUshort(n,i);i+=2,l.readUshort(n,i),i+=2;var p=h>>>8;if((p&=15)!=0)throw"unknown kern table format: "+p;i=e.kern.readFormat0(n,i,u)}return u},e.kern.readFormat0=function(n,i,o){var s=e._bin,l=-1,c=s.readUshort(n,i);i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2;for(var u=0;u<c;u++){var f=s.readUshort(n,i);i+=2;var h=s.readUshort(n,i);i+=2;var p=s.readShort(n,i);i+=2,f!=l&&(o.glyph1.push(f),o.rval.push({glyph2:[],vals:[]}));var g=o.rval[o.rval.length-1];g.glyph2.push(h),g.vals.push(p),l=f}return i},e.loca={},e.loca.parse=function(n,i,o,s){var l=e._bin,c=[],u=s.head.indexToLocFormat,f=s.maxp.numGlyphs+1;if(u==0)for(var h=0;h<f;h++)c.push(l.readUshort(n,i+(h<<1))<<1);if(u==1)for(h=0;h<f;h++)c.push(l.readUint(n,i+(h<<2)));return c},e.maxp={},e.maxp.parse=function(n,i,o){var s=e._bin,l={},c=s.readUint(n,i);return i+=4,l.numGlyphs=s.readUshort(n,i),i+=2,c==65536&&(l.maxPoints=s.readUshort(n,i),i+=2,l.maxContours=s.readUshort(n,i),i+=2,l.maxCompositePoints=s.readUshort(n,i),i+=2,l.maxCompositeContours=s.readUshort(n,i),i+=2,l.maxZones=s.readUshort(n,i),i+=2,l.maxTwilightPoints=s.readUshort(n,i),i+=2,l.maxStorage=s.readUshort(n,i),i+=2,l.maxFunctionDefs=s.readUshort(n,i),i+=2,l.maxInstructionDefs=s.readUshort(n,i),i+=2,l.maxStackElements=s.readUshort(n,i),i+=2,l.maxSizeOfInstructions=s.readUshort(n,i),i+=2,l.maxComponentElements=s.readUshort(n,i),i+=2,l.maxComponentDepth=s.readUshort(n,i),i+=2),l},e.name={},e.name.parse=function(n,i,o){var s=e._bin,l={};s.readUshort(n,i),i+=2;var c=s.readUshort(n,i);i+=2,s.readUshort(n,i);for(var u,f=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],h=i+=2,p=0;p<c;p++){var g=s.readUshort(n,i);i+=2;var _=s.readUshort(n,i);i+=2;var d=s.readUshort(n,i);i+=2;var m=s.readUshort(n,i);i+=2;var E=s.readUshort(n,i);i+=2;var v=s.readUshort(n,i);i+=2;var S,T=f[m],U=h+12*c+v;if(g==0)S=s.readUnicode(n,U,E/2);else if(g==3&&_==0)S=s.readUnicode(n,U,E/2);else if(_==0)S=s.readASCII(n,U,E);else if(_==1)S=s.readUnicode(n,U,E/2);else if(_==3)S=s.readUnicode(n,U,E/2);else{if(g!=1)throw"unknown encoding "+_+", platformID: "+g;S=s.readASCII(n,U,E),console.debug("reading unknown MAC encoding "+_+" as ASCII")}var w="p"+g+","+d.toString(16);l[w]==null&&(l[w]={}),l[w][T!==void 0?T:m]=S,l[w]._lang=d}for(var I in l)if(l[I].postScriptName!=null&&l[I]._lang==1033)return l[I];for(var I in l)if(l[I].postScriptName!=null&&l[I]._lang==0)return l[I];for(var I in l)if(l[I].postScriptName!=null&&l[I]._lang==3084)return l[I];for(var I in l)if(l[I].postScriptName!=null)return l[I];for(var I in l){u=I;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(n,i,o){var s=e._bin.readUshort(n,i);i+=2;var l={};if(s==0)e["OS/2"].version0(n,i,l);else if(s==1)e["OS/2"].version1(n,i,l);else if(s==2||s==3||s==4)e["OS/2"].version2(n,i,l);else{if(s!=5)throw"unknown OS/2 table version: "+s;e["OS/2"].version5(n,i,l)}return l},e["OS/2"].version0=function(n,i,o){var s=e._bin;return o.xAvgCharWidth=s.readShort(n,i),i+=2,o.usWeightClass=s.readUshort(n,i),i+=2,o.usWidthClass=s.readUshort(n,i),i+=2,o.fsType=s.readUshort(n,i),i+=2,o.ySubscriptXSize=s.readShort(n,i),i+=2,o.ySubscriptYSize=s.readShort(n,i),i+=2,o.ySubscriptXOffset=s.readShort(n,i),i+=2,o.ySubscriptYOffset=s.readShort(n,i),i+=2,o.ySuperscriptXSize=s.readShort(n,i),i+=2,o.ySuperscriptYSize=s.readShort(n,i),i+=2,o.ySuperscriptXOffset=s.readShort(n,i),i+=2,o.ySuperscriptYOffset=s.readShort(n,i),i+=2,o.yStrikeoutSize=s.readShort(n,i),i+=2,o.yStrikeoutPosition=s.readShort(n,i),i+=2,o.sFamilyClass=s.readShort(n,i),i+=2,o.panose=s.readBytes(n,i,10),i+=10,o.ulUnicodeRange1=s.readUint(n,i),i+=4,o.ulUnicodeRange2=s.readUint(n,i),i+=4,o.ulUnicodeRange3=s.readUint(n,i),i+=4,o.ulUnicodeRange4=s.readUint(n,i),i+=4,o.achVendID=[s.readInt8(n,i),s.readInt8(n,i+1),s.readInt8(n,i+2),s.readInt8(n,i+3)],i+=4,o.fsSelection=s.readUshort(n,i),i+=2,o.usFirstCharIndex=s.readUshort(n,i),i+=2,o.usLastCharIndex=s.readUshort(n,i),i+=2,o.sTypoAscender=s.readShort(n,i),i+=2,o.sTypoDescender=s.readShort(n,i),i+=2,o.sTypoLineGap=s.readShort(n,i),i+=2,o.usWinAscent=s.readUshort(n,i),i+=2,o.usWinDescent=s.readUshort(n,i),i+=2},e["OS/2"].version1=function(n,i,o){var s=e._bin;return i=e["OS/2"].version0(n,i,o),o.ulCodePageRange1=s.readUint(n,i),i+=4,o.ulCodePageRange2=s.readUint(n,i),i+=4},e["OS/2"].version2=function(n,i,o){var s=e._bin;return i=e["OS/2"].version1(n,i,o),o.sxHeight=s.readShort(n,i),i+=2,o.sCapHeight=s.readShort(n,i),i+=2,o.usDefault=s.readUshort(n,i),i+=2,o.usBreak=s.readUshort(n,i),i+=2,o.usMaxContext=s.readUshort(n,i),i+=2},e["OS/2"].version5=function(n,i,o){var s=e._bin;return i=e["OS/2"].version2(n,i,o),o.usLowerOpticalPointSize=s.readUshort(n,i),i+=2,o.usUpperOpticalPointSize=s.readUshort(n,i),i+=2},e.post={},e.post.parse=function(n,i,o){var s=e._bin,l={};return l.version=s.readFixed(n,i),i+=4,l.italicAngle=s.readFixed(n,i),i+=4,l.underlinePosition=s.readShort(n,i),i+=2,l.underlineThickness=s.readShort(n,i),i+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,i){var o=n.cmap,s=-1;if(o.p0e4!=null?s=o.p0e4:o.p3e1!=null?s=o.p3e1:o.p1e0!=null?s=o.p1e0:o.p0e3!=null&&(s=o.p0e3),s==-1)throw"no familiar platform and encoding!";var l=o.tables[s];if(l.format==0)return i>=l.map.length?0:l.map[i];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(i<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>i?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[i-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:i+l.idDelta[c])}if(l.format==12){if(i>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var f=l.groups[u];if(f[0]<=i&&i<=f[1])return f[2]+(i-f[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,i){var o={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[i]){var s=n.SVG.entries[i];return s==null?o:(typeof s=="string"&&(s=e.SVG.toPath(s),n.SVG.entries[i]=s),s)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,u=n.CFF.Private;if(c.ROS){for(var f=0;c.FDSelect[f+2]<=i;)f+=2;u=c.FDArray[c.FDSelect[f+1]].Private}e.U._drawCFF(n.CFF.CharStrings[i],l,c,u,o)}else n.glyf&&e.U._drawGlyf(i,n,o);return o},e.U._drawGlyf=function(n,i,o){var s=i.glyf[n];s==null&&(s=i.glyf[n]=e.glyf._parseGlyf(i,n)),s!=null&&(s.noc>-1?e.U._simpleGlyph(s,o):e.U._compoGlyph(s,i,o))},e.U._simpleGlyph=function(n,i){for(var o=0;o<n.noc;o++){for(var s=o==0?0:n.endPts[o-1]+1,l=n.endPts[o],c=s;c<=l;c++){var u=c==s?l:c-1,f=c==l?s:c+1,h=1&n.flags[c],p=1&n.flags[u],g=1&n.flags[f],_=n.xs[c],d=n.ys[c];if(c==s)if(h){if(!p){e.U.P.moveTo(i,_,d);continue}e.U.P.moveTo(i,n.xs[u],n.ys[u])}else p?e.U.P.moveTo(i,n.xs[u],n.ys[u]):e.U.P.moveTo(i,(n.xs[u]+_)/2,(n.ys[u]+d)/2);h?p&&e.U.P.lineTo(i,_,d):g?e.U.P.qcurveTo(i,_,d,n.xs[f],n.ys[f]):e.U.P.qcurveTo(i,_,d,(_+n.xs[f])/2,(d+n.ys[f])/2)}e.U.P.closePath(i)}},e.U._compoGlyph=function(n,i,o){for(var s=0;s<n.parts.length;s++){var l={cmds:[],crds:[]},c=n.parts[s];e.U._drawGlyf(c.glyphIndex,i,l);for(var u=c.m,f=0;f<l.crds.length;f+=2){var h=l.crds[f],p=l.crds[f+1];o.crds.push(h*u.a+p*u.b+u.tx),o.crds.push(h*u.c+p*u.d+u.ty)}for(f=0;f<l.cmds.length;f++)o.cmds.push(l.cmds[f])}},e.U._getGlyphClass=function(n,i){var o=e._lctf.getInterval(i,n);return o==-1?0:i[o+2]},e.U._applySubs=function(n,i,o,s){for(var l=n.length-i-1,c=0;c<o.tabs.length;c++)if(o.tabs[c]!=null){var u,f=o.tabs[c];if(!f.coverage||(u=e._lctf.coverageIndex(f.coverage,n[i]))!=-1){if(o.ltype==1)n[i],f.fmt==1?n[i]=n[i]+f.delta:n[i]=f.newg[u];else if(o.ltype==4)for(var h=f.vals[u],p=0;p<h.length;p++){var g=h[p],_=g.chain.length;if(!(_>l)){for(var d=!0,m=0,E=0;E<_;E++){for(;n[i+m+(1+E)]==-1;)m++;g.chain[E]!=n[i+m+(1+E)]&&(d=!1)}if(d){for(n[i]=g.nglyph,E=0;E<_+m;E++)n[i+E+1]=-1;break}}}else if(o.ltype==5&&f.fmt==2)for(var v=e._lctf.getInterval(f.cDef,n[i]),S=f.cDef[v+2],T=f.scset[S],U=0;U<T.length;U++){var w=T[U],I=w.input;if(!(I.length>l)){for(d=!0,E=0;E<I.length;E++){var M=e._lctf.getInterval(f.cDef,n[i+1+E]);if(v==-1&&f.cDef[M+2]!=I[E]){d=!1;break}}if(d){var b=w.substLookupRecords;for(p=0;p<b.length;p+=2)b[p],b[p+1]}}}else if(o.ltype==6&&f.fmt==3){if(!e.U._glsCovered(n,f.backCvg,i-f.backCvg.length)||!e.U._glsCovered(n,f.inptCvg,i)||!e.U._glsCovered(n,f.ahedCvg,i+f.inptCvg.length))continue;var q=f.lookupRec;for(U=0;U<q.length;U+=2){v=q[U];var P=s[q[U+1]];e.U._applySubs(n,i+v,P,s)}}}}},e.U._glsCovered=function(n,i,o){for(var s=0;s<i.length;s++)if(e._lctf.coverageIndex(i[s],n[o+s])==-1)return!1;return!0},e.U.glyphsToPath=function(n,i,o){for(var s={cmds:[],crds:[]},l=0,c=0;c<i.length;c++){var u=i[c];if(u!=-1){for(var f=c<i.length-1&&i[c+1]!=-1?i[c+1]:0,h=e.U.glyphToPath(n,u),p=0;p<h.crds.length;p+=2)s.crds.push(h.crds[p]+l),s.crds.push(h.crds[p+1]);for(o&&s.cmds.push(o),p=0;p<h.cmds.length;p++)s.cmds.push(h.cmds[p]);o&&s.cmds.push("X"),l+=n.hmtx.aWidth[u],c<i.length-1&&(l+=e.U.getPairAdjustment(n,u,f))}}return s},e.U.P={},e.U.P.moveTo=function(n,i,o){n.cmds.push("M"),n.crds.push(i,o)},e.U.P.lineTo=function(n,i,o){n.cmds.push("L"),n.crds.push(i,o)},e.U.P.curveTo=function(n,i,o,s,l,c,u){n.cmds.push("C"),n.crds.push(i,o,s,l,c,u)},e.U.P.qcurveTo=function(n,i,o,s,l){n.cmds.push("Q"),n.crds.push(i,o,s,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,i,o,s,l){for(var c=i.stack,u=i.nStems,f=i.haveWidth,h=i.width,p=i.open,g=0,_=i.x,d=i.y,m=0,E=0,v=0,S=0,T=0,U=0,w=0,I=0,M=0,b=0,q={val:0,size:0};g<n.length;){e.CFF.getCharString(n,g,q);var P=q.val;if(g+=q.size,P=="o1"||P=="o18")c.length%2!=0&&!f&&(h=c.shift()+s.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(P=="o3"||P=="o23")c.length%2!=0&&!f&&(h=c.shift()+s.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(P=="o4")c.length>1&&!f&&(h=c.shift()+s.nominalWidthX,f=!0),p&&e.U.P.closePath(l),d+=c.pop(),e.U.P.moveTo(l,_,d),p=!0;else if(P=="o5")for(;c.length>0;)_+=c.shift(),d+=c.shift(),e.U.P.lineTo(l,_,d);else if(P=="o6"||P=="o7")for(var B=c.length,R=P=="o6",G=0;G<B;G++){var k=c.shift();R?_+=k:d+=k,R=!R,e.U.P.lineTo(l,_,d)}else if(P=="o8"||P=="o24"){B=c.length;for(var Y=0;Y+6<=B;)m=_+c.shift(),E=d+c.shift(),v=m+c.shift(),S=E+c.shift(),_=v+c.shift(),d=S+c.shift(),e.U.P.curveTo(l,m,E,v,S,_,d),Y+=6;P=="o24"&&(_+=c.shift(),d+=c.shift(),e.U.P.lineTo(l,_,d))}else{if(P=="o11")break;if(P=="o1234"||P=="o1235"||P=="o1236"||P=="o1237")P=="o1234"&&(E=d,v=(m=_+c.shift())+c.shift(),b=S=E+c.shift(),U=S,I=d,_=(w=(T=(M=v+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,m,E,v,S,M,b),e.U.P.curveTo(l,T,U,w,I,_,d)),P=="o1235"&&(m=_+c.shift(),E=d+c.shift(),v=m+c.shift(),S=E+c.shift(),M=v+c.shift(),b=S+c.shift(),T=M+c.shift(),U=b+c.shift(),w=T+c.shift(),I=U+c.shift(),_=w+c.shift(),d=I+c.shift(),c.shift(),e.U.P.curveTo(l,m,E,v,S,M,b),e.U.P.curveTo(l,T,U,w,I,_,d)),P=="o1236"&&(m=_+c.shift(),E=d+c.shift(),v=m+c.shift(),b=S=E+c.shift(),U=S,w=(T=(M=v+c.shift())+c.shift())+c.shift(),I=U+c.shift(),_=w+c.shift(),e.U.P.curveTo(l,m,E,v,S,M,b),e.U.P.curveTo(l,T,U,w,I,_,d)),P=="o1237"&&(m=_+c.shift(),E=d+c.shift(),v=m+c.shift(),S=E+c.shift(),M=v+c.shift(),b=S+c.shift(),T=M+c.shift(),U=b+c.shift(),w=T+c.shift(),I=U+c.shift(),Math.abs(w-_)>Math.abs(I-d)?_=w+c.shift():d=I+c.shift(),e.U.P.curveTo(l,m,E,v,S,M,b),e.U.P.curveTo(l,T,U,w,I,_,d));else if(P=="o14"){if(c.length>0&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),c.length==4){var ee=c.shift(),V=c.shift(),N=c.shift(),y=c.shift(),L=e.CFF.glyphBySE(o,N),z=e.CFF.glyphBySE(o,y);e.U._drawCFF(o.CharStrings[L],i,o,s,l),i.x=ee,i.y=V,e.U._drawCFF(o.CharStrings[z],i,o,s,l)}p&&(e.U.P.closePath(l),p=!1)}else if(P=="o19"||P=="o20")c.length%2!=0&&!f&&(h=c.shift()+s.nominalWidthX),u+=c.length>>1,c.length=0,f=!0,g+=u+7>>3;else if(P=="o21")c.length>2&&!f&&(h=c.shift()+s.nominalWidthX,f=!0),d+=c.pop(),_+=c.pop(),p&&e.U.P.closePath(l),e.U.P.moveTo(l,_,d),p=!0;else if(P=="o22")c.length>1&&!f&&(h=c.shift()+s.nominalWidthX,f=!0),_+=c.pop(),p&&e.U.P.closePath(l),e.U.P.moveTo(l,_,d),p=!0;else if(P=="o25"){for(;c.length>6;)_+=c.shift(),d+=c.shift(),e.U.P.lineTo(l,_,d);m=_+c.shift(),E=d+c.shift(),v=m+c.shift(),S=E+c.shift(),_=v+c.shift(),d=S+c.shift(),e.U.P.curveTo(l,m,E,v,S,_,d)}else if(P=="o26")for(c.length%2&&(_+=c.shift());c.length>0;)m=_,E=d+c.shift(),_=v=m+c.shift(),d=(S=E+c.shift())+c.shift(),e.U.P.curveTo(l,m,E,v,S,_,d);else if(P=="o27")for(c.length%2&&(d+=c.shift());c.length>0;)E=d,v=(m=_+c.shift())+c.shift(),S=E+c.shift(),_=v+c.shift(),d=S,e.U.P.curveTo(l,m,E,v,S,_,d);else if(P=="o10"||P=="o29"){var W=P=="o10"?s:o;if(c.length==0)console.debug("error: empty stack");else{var H=c.pop(),te=W.Subrs[H+W.Bias];i.x=_,i.y=d,i.nStems=u,i.haveWidth=f,i.width=h,i.open=p,e.U._drawCFF(te,i,o,s,l),_=i.x,d=i.y,u=i.nStems,f=i.haveWidth,h=i.width,p=i.open}}else if(P=="o30"||P=="o31"){var J=c.length,Q=(Y=0,P=="o31");for(Y+=J-(B=-3&J);Y<B;)Q?(E=d,v=(m=_+c.shift())+c.shift(),d=(S=E+c.shift())+c.shift(),B-Y==5?(_=v+c.shift(),Y++):_=v,Q=!1):(m=_,E=d+c.shift(),v=m+c.shift(),S=E+c.shift(),_=v+c.shift(),B-Y==5?(d=S+c.shift(),Y++):d=S,Q=!0),e.U.P.curveTo(l,m,E,v,S,_,d),Y+=4}else{if((P+"").charAt(0)=="o")throw console.debug("Unknown operation: "+P,n),P;c.push(P)}}}i.x=_,i.y=d,i.nStems=u,i.haveWidth=f,i.width=h,i.open=p};var t=e,r={Typr:t};return a.Typr=t,a.default=r,Object.defineProperty(a,"__esModule",{value:!0}),a}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function Xg(){return function(a){var e=Uint8Array,t=Uint16Array,r=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),o=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(P,B){for(var R=new t(31),G=0;G<31;++G)R[G]=B+=1<<P[G-1];var k=new r(R[30]);for(G=1;G<30;++G)for(var Y=R[G];Y<R[G+1];++Y)k[Y]=Y-R[G]<<5|G;return[R,k]},l=s(n,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var f=s(i,0)[0],h=new t(32768),p=0;p<32768;++p){var g=(43690&p)>>>1|(21845&p)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,h[p]=((65280&g)>>>8|(255&g)<<8)>>>1}var _=function(P,B,R){for(var G=P.length,k=0,Y=new t(B);k<G;++k)++Y[P[k]-1];var ee,V=new t(B);for(k=0;k<B;++k)V[k]=V[k-1]+Y[k-1]<<1;if(R){ee=new t(1<<B);var N=15-B;for(k=0;k<G;++k)if(P[k])for(var y=k<<4|P[k],L=B-P[k],z=V[P[k]-1]++<<L,W=z|(1<<L)-1;z<=W;++z)ee[h[z]>>>N]=y}else for(ee=new t(G),k=0;k<G;++k)P[k]&&(ee[k]=h[V[P[k]-1]++]>>>15-P[k]);return ee},d=new e(288);for(p=0;p<144;++p)d[p]=8;for(p=144;p<256;++p)d[p]=9;for(p=256;p<280;++p)d[p]=7;for(p=280;p<288;++p)d[p]=8;var m=new e(32);for(p=0;p<32;++p)m[p]=5;var E=_(d,9,1),v=_(m,5,1),S=function(P){for(var B=P[0],R=1;R<P.length;++R)P[R]>B&&(B=P[R]);return B},T=function(P,B,R){var G=B/8|0;return(P[G]|P[G+1]<<8)>>(7&B)&R},U=function(P,B){var R=B/8|0;return(P[R]|P[R+1]<<8|P[R+2]<<16)>>(7&B)},w=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],I=function(P,B,R){var G=new Error(B||w[P]);if(G.code=P,Error.captureStackTrace&&Error.captureStackTrace(G,I),!R)throw G;return G},M=function(P,B,R){var G=P.length;if(!G||R&&!R.l&&G<5)return B||new e(0);var k=!B||R,Y=!R||R.i;R||(R={}),B||(B=new e(3*G));var ee,V=function(Ee){var we=B.length;if(Ee>we){var Fe=new e(Math.max(2*we,Ee));Fe.set(B),B=Fe}},N=R.f||0,y=R.p||0,L=R.b||0,z=R.l,W=R.d,H=R.m,te=R.n,J=8*G;do{if(!z){R.f=N=T(P,y,1);var Q=T(P,y+1,3);if(y+=3,!Q){var he=P[(ye=((ee=y)/8|0)+(7&ee&&1)+4)-4]|P[ye-3]<<8,be=ye+he;if(be>G){Y&&I(0);break}k&&V(L+he),B.set(P.subarray(ye,be),L),R.b=L+=he,R.p=y=8*be;continue}if(Q==1)z=E,W=v,H=9,te=5;else if(Q==2){var oe=T(P,y,31)+257,D=T(P,y+10,15)+4,ke=oe+T(P,y+5,31)+1;y+=14;for(var _e=new e(ke),Se=new e(19),xe=0;xe<D;++xe)Se[o[xe]]=T(P,y+3*xe,7);y+=3*D;var Ne=S(Se),le=(1<<Ne)-1,ve=_(Se,Ne,1);for(xe=0;xe<ke;){var ye,ae=ve[T(P,y,le)];if(y+=15&ae,(ye=ae>>>4)<16)_e[xe++]=ye;else{var Ie=0,A=0;for(ye==16?(A=3+T(P,y,3),y+=2,Ie=_e[xe-1]):ye==17?(A=3+T(P,y,7),y+=3):ye==18&&(A=11+T(P,y,127),y+=7);A--;)_e[xe++]=Ie}}var x=_e.subarray(0,oe),O=_e.subarray(oe);H=S(x),te=S(O),z=_(x,H,1),W=_(O,te,1)}else I(1);if(y>J){Y&&I(0);break}}k&&V(L+131072);for(var fe=(1<<H)-1,Z=(1<<te)-1,ie=y;;ie=y){var de=(Ie=z[U(P,y)&fe])>>>4;if((y+=15&Ie)>J){Y&&I(0);break}if(Ie||I(2),de<256)B[L++]=de;else{if(de==256){ie=y,z=null;break}var ce=de-254;if(de>264){var ge=n[xe=de-257];ce=T(P,y,(1<<ge)-1)+c[xe],y+=ge}var Ce=W[U(P,y)&Z],Ue=Ce>>>4;if(Ce||I(3),y+=15&Ce,O=f[Ue],Ue>3&&(ge=i[Ue],O+=U(P,y)&(1<<ge)-1,y+=ge),y>J){Y&&I(0);break}k&&V(L+131072);for(var se=L+ce;L<se;L+=4)B[L]=B[L-O],B[L+1]=B[L+1-O],B[L+2]=B[L+2-O],B[L+3]=B[L+3-O];L=se}}R.l=z,R.p=ie,R.b=L,z&&(N=1,R.m=H,R.d=W,R.n=te)}while(!N);return L==B.length?B:function(Ee,we,Fe){(we==null||we<0)&&(we=0),(Fe==null||Fe>Ee.length)&&(Fe=Ee.length);var Oe=new(Ee instanceof t?t:Ee instanceof r?r:e)(Fe-we);return Oe.set(Ee.subarray(we,Fe)),Oe}(B,0,L)},b=new e(0),q=typeof TextDecoder<"u"&&new TextDecoder;try{q.decode(b,{stream:!0})}catch{}return a.convert_streams=function(P){var B=new DataView(P),R=0;function G(){var oe=B.getUint16(R);return R+=2,oe}function k(){var oe=B.getUint32(R);return R+=4,oe}function Y(oe){he.setUint16(be,oe),be+=2}function ee(oe){he.setUint32(be,oe),be+=4}for(var V={signature:k(),flavor:k(),length:k(),numTables:G(),reserved:G(),totalSfntSize:k(),majorVersion:G(),minorVersion:G(),metaOffset:k(),metaLength:k(),metaOrigLength:k(),privOffset:k(),privLength:k()},N=0;Math.pow(2,N)<=V.numTables;)N++;N--;for(var y=16*Math.pow(2,N),L=16*V.numTables-y,z=12,W=[],H=0;H<V.numTables;H++)W.push({tag:k(),offset:k(),compLength:k(),origLength:k(),origChecksum:k()}),z+=16;var te,J=new Uint8Array(12+16*W.length+W.reduce(function(oe,D){return oe+D.origLength+4},0)),Q=J.buffer,he=new DataView(Q),be=0;return ee(V.flavor),Y(V.numTables),Y(y),Y(N),Y(L),W.forEach(function(oe){ee(oe.tag),ee(oe.origChecksum),ee(z),ee(oe.origLength),oe.outOffset=z,(z+=oe.origLength)%4!=0&&(z+=4-z%4)}),W.forEach(function(oe){var D,ke=P.slice(oe.offset,oe.offset+oe.compLength);if(oe.compLength!=oe.origLength){var _e=new Uint8Array(oe.origLength);D=new Uint8Array(ke,2),M(D,_e)}else _e=new Uint8Array(ke);J.set(_e,oe.outOffset);var Se=0;(z=oe.outOffset+oe.origLength)%4!=0&&(Se=4-z%4),J.set(new Uint8Array(Se).buffer,oe.outOffset+oe.origLength),te=z+Se}),Q.slice(0,te)},Object.defineProperty(a,"__esModule",{value:!0}),a}({}).convert_streams}function Yg(a,e){const t={M:2,L:2,Q:4,C:6,Z:0},r={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,i=2,o=4,s=8,l=16,c=32;let u;function f(w){if(!u){const I={R:i,L:n,D:o,C:l,U:c,T:s};u=new Map;for(let M in r){let b=0;r[M].split(",").forEach(q=>{let[P,B]=q.split("+");P=parseInt(P,36),B=B?parseInt(B,36):0,u.set(b+=P,I[M]);for(let R=B;R--;)u.set(++b,I[M])})}}return u.get(w)||c}const h=1,p=2,g=3,_=4,d=[null,"isol","init","fina","medi"];function m(w){const I=new Uint8Array(w.length);let M=c,b=h,q=-1;for(let P=0;P<w.length;P++){const B=w.codePointAt(P);let R=f(B)|0,G=h;R&s||(M&(n|o|l)?R&(i|o|l)?(G=g,(b===h||b===g)&&I[q]++):R&(n|c)&&(b===p||b===_)&&I[q]--:M&(i|c)&&(b===p||b===_)&&I[q]--,b=I[P]=G,M=R,q=P,B>65535&&P++)}return I}function E(w,I){const M=[];for(let q=0;q<I.length;q++){const P=I.codePointAt(q);P>65535&&q++,M.push(a.U.codeToGlyph(w,P))}const b=w.GSUB;if(b){const{lookupList:q,featureList:P}=b;let B;const R=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,G=[];P.forEach(k=>{if(R.test(k.tag))for(let Y=0;Y<k.tab.length;Y++){if(G[k.tab[Y]])continue;G[k.tab[Y]]=!0;const ee=q[k.tab[Y]],V=/^(isol|init|fina|medi)$/.test(k.tag);V&&!B&&(B=m(I));for(let N=0;N<M.length;N++)(!B||!V||d[B[N]]===k.tag)&&a.U._applySubs(M,N,ee,q)}})}return M}function v(w,I){const M=new Int16Array(I.length*3);let b=0;for(;b<I.length;b++){const R=I[b];if(R===-1)continue;M[b*3+2]=w.hmtx.aWidth[R];const G=w.GPOS;if(G){const k=G.lookupList;for(let Y=0;Y<k.length;Y++){const ee=k[Y];for(let V=0;V<ee.tabs.length;V++){const N=ee.tabs[V];if(ee.ltype===1){if(a._lctf.coverageIndex(N.coverage,R)!==-1&&N.pos){B(N.pos,b);break}}else if(ee.ltype===2){let y=null,L=q();if(L!==-1){const z=a._lctf.coverageIndex(N.coverage,I[L]);if(z!==-1){if(N.fmt===1){const W=N.pairsets[z];for(let H=0;H<W.length;H++)W[H].gid2===R&&(y=W[H])}else if(N.fmt===2){const W=a.U._getGlyphClass(I[L],N.classDef1),H=a.U._getGlyphClass(R,N.classDef2);y=N.matrix[W][H]}if(y){y.val1&&B(y.val1,L),y.val2&&B(y.val2,b);break}}}}else if(ee.ltype===4){const y=a._lctf.coverageIndex(N.markCoverage,R);if(y!==-1){const L=q(P),z=L===-1?-1:a._lctf.coverageIndex(N.baseCoverage,I[L]);if(z!==-1){const W=N.markArray[y],H=N.baseArray[z][W.markClass];M[b*3]=H.x-W.x+M[L*3]-M[L*3+2],M[b*3+1]=H.y-W.y+M[L*3+1];break}}}else if(ee.ltype===6){const y=a._lctf.coverageIndex(N.mark1Coverage,R);if(y!==-1){const L=q();if(L!==-1){const z=I[L];if(S(w,z)===3){const W=a._lctf.coverageIndex(N.mark2Coverage,z);if(W!==-1){const H=N.mark1Array[y],te=N.mark2Array[W][H.markClass];M[b*3]=te.x-H.x+M[L*3]-M[L*3+2],M[b*3+1]=te.y-H.y+M[L*3+1];break}}}}}}}}else if(w.kern&&!w.cff){const k=q();if(k!==-1){const Y=w.kern.glyph1.indexOf(I[k]);if(Y!==-1){const ee=w.kern.rval[Y].glyph2.indexOf(R);ee!==-1&&(M[k*3+2]+=w.kern.rval[Y].vals[ee])}}}}return M;function q(R){for(let G=b-1;G>=0;G--)if(I[G]!==-1&&(!R||R(I[G])))return G;return-1}function P(R){return S(w,R)===1}function B(R,G){for(let k=0;k<3;k++)M[G*3+k]+=R[k]||0}}function S(w,I){const M=w.GDEF&&w.GDEF.glyphClassDef;return M?a.U._getGlyphClass(I,M):0}function T(...w){for(let I=0;I<w.length;I++)if(typeof w[I]=="number")return w[I]}function U(w){const I=Object.create(null),M=w["OS/2"],b=w.hhea,q=w.head.unitsPerEm,P=T(M&&M.sTypoAscender,b&&b.ascender,q),B={unitsPerEm:q,ascender:P,descender:T(M&&M.sTypoDescender,b&&b.descender,0),capHeight:T(M&&M.sCapHeight,P),xHeight:T(M&&M.sxHeight,P),lineGap:T(M&&M.sTypoLineGap,b&&b.lineGap),supportsCodePoint(R){return a.U.codeToGlyph(w,R)>0},forEachGlyph(R,G,k,Y){let ee=0;const V=1/B.unitsPerEm*G,N=E(w,R);let y=0;const L=v(w,N);return N.forEach((z,W)=>{if(z!==-1){let H=I[z];if(!H){const{cmds:te,crds:J}=a.U.glyphToPath(w,z);let Q="",he=0;for(let _e=0,Se=te.length;_e<Se;_e++){const xe=t[te[_e]];Q+=te[_e];for(let Ne=1;Ne<=xe;Ne++)Q+=(Ne>1?",":"")+J[he++]}let be,oe,D,ke;if(J.length){be=oe=1/0,D=ke=-1/0;for(let _e=0,Se=J.length;_e<Se;_e+=2){let xe=J[_e],Ne=J[_e+1];xe<be&&(be=xe),Ne<oe&&(oe=Ne),xe>D&&(D=xe),Ne>ke&&(ke=Ne)}}else be=D=oe=ke=0;H=I[z]={index:z,advanceWidth:w.hmtx.aWidth[z],xMin:be,yMin:oe,xMax:D,yMax:ke,path:Q}}Y.call(null,H,ee+L[W*3]*V,L[W*3+1]*V,y),ee+=L[W*3+2]*V,k&&(ee+=k*G)}y+=R.codePointAt(y)>65535?2:1}),ee}};return B}return function(I){const M=new Uint8Array(I,0,4),b=a._bin.readASCII(M,0,4);if(b==="wOFF")I=e(I);else if(b==="wOF2")throw new Error("woff2 fonts not supported");return U(a.parse(I)[0])}}const qg=Vi({name:"Typr Font Parser",dependencies:[Wg,Xg,Yg],init(a,e,t){const r=a(),n=e();return t(r,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function jg(){return function(a){var e=function(){this.buckets=new Map};e.prototype.add=function(v){var S=v>>5;this.buckets.set(S,(this.buckets.get(S)||0)|1<<(31&v))},e.prototype.has=function(v){var S=this.buckets.get(v>>5);return S!==void 0&&(S&1<<(31&v))!=0},e.prototype.serialize=function(){var v=[];return this.buckets.forEach(function(S,T){v.push((+T).toString(36)+":"+S.toString(36))}),v.join(",")},e.prototype.deserialize=function(v){var S=this;this.buckets.clear(),v.split(",").forEach(function(T){var U=T.split(":");S.buckets.set(parseInt(U[0],36),parseInt(U[1],36))})};var t=Math.pow(2,8),r=t-1,n=~r;function i(v){var S=function(U){return U&n}(v).toString(16),T=function(U){return(U&n)+t-1}(v).toString(16);return"codepoint-index/plane"+(v>>16)+"/"+S+"-"+T+".json"}function o(v,S){var T=v&r,U=S.codePointAt(T/6|0);return((U=(U||48)-48)&1<<T%6)!=0}function s(v,S){var T;(T=v,T.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(U){return U.split("-").map(function(w){return parseInt(w.trim(),16)})})).forEach(function(U){var w=U[0],I=U[1];I===void 0&&(I=w),S(w,I)})}function l(v,S){s(v,function(T,U){for(var w=T;w<=U;w++)S(w)})}var c={},u={},f=new WeakMap,h="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function p(v){var S=f.get(v);return S||(S=new e,l(v.ranges,function(T){return S.add(T)}),f.set(v,S)),S}var g,_=new Map;function d(v,S,T){return v[S]?S:v[T]?T:function(U){for(var w in U)return w}(v)}function m(v,S){var T=S;if(!v.includes(T)){T=1/0;for(var U=0;U<v.length;U++)Math.abs(v[U]-S)<Math.abs(T-S)&&(T=v[U])}return T}function E(v){return g||(g=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(S){g.add(S)})),g.has(v)}return a.CodePointSet=e,a.clearCache=function(){c={},u={}},a.getFontsForString=function(v,S){S===void 0&&(S={});var T,U=S.lang;U===void 0&&(U=new RegExp("\\p{Script=Hangul}","u").test(T=v)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(T)?"ja":"en");var w=S.category;w===void 0&&(w="sans-serif");var I=S.style;I===void 0&&(I="normal");var M=S.weight;M===void 0&&(M=400);var b=(S.dataUrl||h).replace(/\/$/g,""),q=new Map,P=new Uint8Array(v.length),B={},R={},G=new Array(v.length),k=new Map,Y=!1;function ee(y){var L=_.get(y);return L||(L=fetch(b+"/"+y).then(function(z){if(!z.ok)throw new Error(z.statusText);return z.json().then(function(W){if(!Array.isArray(W)||W[0]!==1)throw new Error("Incorrect schema version; need 1, got "+W[0]);return W[1]})}).catch(function(z){if(b!==h)return Y||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+b+'", trying default CDN. '+z.message),Y=!0),b=h,_.delete(y),ee(y);throw z}),_.set(y,L)),L}for(var V=function(y){var L=v.codePointAt(y),z=i(L);G[y]=z,c[z]||k.has(z)||k.set(z,ee(z).then(function(W){c[z]=W})),L>65535&&(y++,N=y)},N=0;N<v.length;N++)V(N);return Promise.all(k.values()).then(function(){k.clear();for(var y=function(z){var W=v.codePointAt(z),H=null,te=c[G[z]],J=void 0;for(var Q in te){var he=R[Q];if(he===void 0&&(he=R[Q]=new RegExp(Q).test(U||"en")),he){for(var be in J=Q,te[Q])if(o(W,te[Q][be])){H=be;break}break}}if(!H){e:for(var oe in te)if(oe!==J){for(var D in te[oe])if(o(W,te[oe][D])){H=D;break e}}}H||(console.debug("No font coverage for U+"+W.toString(16)),H="latin"),G[z]=H,u[H]||k.has(H)||k.set(H,ee("font-meta/"+H+".json").then(function(ke){u[H]=ke})),W>65535&&(z++,L=z)},L=0;L<v.length;L++)y(L);return Promise.all(k.values())}).then(function(){for(var y,L=null,z=0;z<v.length;z++){var W=v.codePointAt(z);if(L&&(E(W)||p(L).has(W)))P[z]=P[z-1];else{L=u[G[z]];var H=B[L.id];if(!H){var te=L.typeforms,J=d(te,w,"sans-serif"),Q=d(te[J],I,"normal"),he=m((y=te[J])===null||y===void 0?void 0:y[Q],M);H=B[L.id]=b+"/font-files/"+L.id+"/"+J+"."+Q+"."+he+".woff"}var be=q.get(H);be==null&&(be=q.size,q.set(H,be)),P[z]=be}W>65535&&(z++,P[z]=P[z-1])}return{fontUrls:Array.from(q.keys()),chars:P}})},Object.defineProperty(a,"__esModule",{value:!0}),a}({})}function Kg(a,e){const t=Object.create(null),r=Object.create(null);function n(o,s){const l=c=>{console.error(`Failure loading font ${o}`,c)};try{const c=new XMLHttpRequest;c.open("get",o,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=a(c.response);u.src=o,s(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function i(o,s){let l=t[o];l?s(l):r[o]?r[o].push(s):(r[o]=[s],n(o,c=>{c.src=o,t[o]=c,r[o].forEach(u=>u(c)),delete r[o]}))}return function(o,s,{lang:l,fonts:c=[],style:u="normal",weight:f="normal",unicodeFontsURL:h}={}){const p=new Uint8Array(o.length),g=[];o.length||E();const _=new Map,d=[];if(u!=="italic"&&(u="normal"),typeof f!="number"&&(f=f==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(S=>!S.lang||S.lang.test(l)).reverse(),c.length){let w=0;(function I(M=0){for(let b=M,q=o.length;b<q;b++){const P=o.codePointAt(b);if(w===1&&g[p[b-1]].supportsCodePoint(P)||/\s/.test(o[b]))p[b]=p[b-1],w===2&&(d[d.length-1][1]=b);else for(let B=p[b],R=c.length;B<=R;B++)if(B===R){const G=w===2?d[d.length-1]:d[d.length]=[b,b];G[1]=b,w=2}else{p[b]=B;const{src:G,unicodeRange:k}=c[B];if(!k||v(P,k)){const Y=t[G];if(!Y){i(G,()=>{I(b)});return}if(Y.supportsCodePoint(P)){let ee=_.get(Y);typeof ee!="number"&&(ee=g.length,g.push(Y),_.set(Y,ee)),p[b]=ee,w=1;break}}}P>65535&&b+1<q&&(p[b+1]=p[b],b++,w===2&&(d[d.length-1][1]=b))}m()})()}else d.push([0,o.length-1]),m();function m(){if(d.length){const S=d.map(T=>o.substring(T[0],T[1]+1)).join(`
`);e.getFontsForString(S,{lang:l||void 0,style:u,weight:f,dataUrl:h}).then(({fontUrls:T,chars:U})=>{const w=g.length;let I=0;d.forEach(b=>{for(let q=0,P=b[1]-b[0];q<=P;q++)p[b[0]+q]=U[I++]+w;I++});let M=0;T.forEach((b,q)=>{i(b,P=>{g[q+w]=P,++M===T.length&&E()})})})}else E()}function E(){s({chars:p,fonts:g})}function v(S,T){for(let U=0;U<T.length;U++){const[w,I=w]=T[U];if(w<=S&&S<=I)return!0}return!1}}}const Zg=Vi({name:"FontResolver",dependencies:[Kg,qg,jg],init(a,e,t){return a(e,t())}});function Jg(a,e){const r=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",i=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function o({text:g,lang:_,fonts:d,style:m,weight:E,preResolvedFonts:v,unicodeFontsURL:S},T){const U=({chars:w,fonts:I})=>{let M,b;const q=[];for(let P=0;P<w.length;P++)w[P]!==b?(b=w[P],q.push(M={start:P,end:P,fontObj:I[w[P]]})):M.end=P;T(q)};v?U(v):a(g,U,{lang:_,fonts:d,style:m,weight:E,unicodeFontsURL:S})}function s({text:g="",font:_,lang:d,sdfGlyphSize:m=64,fontSize:E=400,fontWeight:v=1,fontStyle:S="normal",letterSpacing:T=0,lineHeight:U="normal",maxWidth:w=1/0,direction:I,textAlign:M="left",textIndent:b=0,whiteSpace:q="normal",overflowWrap:P="normal",anchorX:B=0,anchorY:R=0,metricsOnly:G=!1,unicodeFontsURL:k,preResolvedFonts:Y=null,includeCaretPositions:ee=!1,chunkedBoundsSize:V=8192,colorRanges:N=null},y){const L=f(),z={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),E=+E,T=+T,w=+w,U=U||"normal",b=+b,o({text:g,lang:d,style:S,weight:v,fonts:typeof _=="string"?[{src:_}]:_,unicodeFontsURL:k,preResolvedFonts:Y},W=>{z.fontLoad=f()-L;const H=isFinite(w);let te=null,J=null,Q=null,he=null,be=null,oe=null,D=null,ke=null,_e=0,Se=0,xe=q!=="nowrap";const Ne=new Map,le=f();let ve=b,ye=0,ae=new h;const Ie=[ae];W.forEach(Z=>{const{fontObj:ie}=Z,{ascender:de,descender:ce,unitsPerEm:ge,lineGap:Ce,capHeight:Ue,xHeight:se}=ie;let Ee=Ne.get(ie);if(!Ee){const Te=E/ge,F=U==="normal"?(de-ce+Ce)*Te:U*E,Ae=(F-(de-ce)*Te)/2,ue=Math.min(F,(de-ce)*Te),K=(de+ce)/2*Te+ue/2;Ee={index:Ne.size,src:ie.src,fontObj:ie,fontSizeMult:Te,unitsPerEm:ge,ascender:de*Te,descender:ce*Te,capHeight:Ue*Te,xHeight:se*Te,lineHeight:F,baseline:-Ae-de*Te,caretTop:(de+ce)/2*Te+ue/2,caretBottom:K-ue},Ne.set(ie,Ee)}const{fontSizeMult:we}=Ee,Fe=g.slice(Z.start,Z.end+1);let Oe,Me;ie.forEachGlyph(Fe,E,T,(Te,F,Ae,ue)=>{F+=ye,ue+=Z.start,Oe=F,Me=Te;const K=g.charAt(ue),pe=Te.advanceWidth*we,Le=ae.count;let Pe;if("isEmpty"in Te||(Te.isWhitespace=!!K&&new RegExp(n).test(K),Te.canBreakAfter=!!K&&i.test(K),Te.isEmpty=Te.xMin===Te.xMax||Te.yMin===Te.yMax||r.test(K)),!Te.isWhitespace&&!Te.isEmpty&&Se++,xe&&H&&!Te.isWhitespace&&F+pe+ve>w&&Le){if(ae.glyphAt(Le-1).glyphObj.canBreakAfter)Pe=new h,ve=-F;else for(let et=Le;et--;)if(et===0&&P==="break-word"){Pe=new h,ve=-F;break}else if(ae.glyphAt(et).glyphObj.canBreakAfter){Pe=ae.splitAt(et+1);const qe=Pe.glyphAt(0).x;ve-=qe;for(let Qe=Pe.count;Qe--;)Pe.glyphAt(Qe).x-=qe;break}Pe&&(ae.isSoftWrapped=!0,ae=Pe,Ie.push(ae),_e=w)}let We=ae.glyphAt(ae.count);We.glyphObj=Te,We.x=F+ve,We.y=Ae,We.width=pe,We.charIndex=ue,We.fontData=Ee,K===`
`&&(ae=new h,Ie.push(ae),ve=-(F+pe+T*E)+b)}),ye=Oe+Me.advanceWidth*we+T*E});let A=0;Ie.forEach(Z=>{let ie=!0;for(let de=Z.count;de--;){const ce=Z.glyphAt(de);ie&&!ce.glyphObj.isWhitespace&&(Z.width=ce.x+ce.width,Z.width>_e&&(_e=Z.width),ie=!1);let{lineHeight:ge,capHeight:Ce,xHeight:Ue,baseline:se}=ce.fontData;ge>Z.lineHeight&&(Z.lineHeight=ge);const Ee=se-Z.baseline;Ee<0&&(Z.baseline+=Ee,Z.cap+=Ee,Z.ex+=Ee),Z.cap=Math.max(Z.cap,Z.baseline+Ce),Z.ex=Math.max(Z.ex,Z.baseline+Ue)}Z.baseline-=A,Z.cap-=A,Z.ex-=A,A+=Z.lineHeight});let x=0,O=0;if(B&&(typeof B=="number"?x=-B:typeof B=="string"&&(x=-_e*(B==="left"?0:B==="center"?.5:B==="right"?1:c(B)))),R&&(typeof R=="number"?O=-R:typeof R=="string"&&(O=R==="top"?0:R==="top-baseline"?-Ie[0].baseline:R==="top-cap"?-Ie[0].cap:R==="top-ex"?-Ie[0].ex:R==="middle"?A/2:R==="bottom"?A:R==="bottom-baseline"?Ie[Ie.length-1].baseline:c(R)*A)),!G){const Z=e.getEmbeddingLevels(g,I);te=new Uint16Array(Se),J=new Uint8Array(Se),Q=new Float32Array(Se*2),he={},D=[1/0,1/0,-1/0,-1/0],ke=[],ee&&(oe=new Float32Array(g.length*4)),N&&(be=new Uint8Array(Se*3));let ie=0,de=-1,ce=-1,ge,Ce;if(Ie.forEach((Ue,se)=>{let{count:Ee,width:we}=Ue;if(Ee>0){let Fe=0;for(let ue=Ee;ue--&&Ue.glyphAt(ue).glyphObj.isWhitespace;)Fe++;let Oe=0,Me=0;if(M==="center")Oe=(_e-we)/2;else if(M==="right")Oe=_e-we;else if(M==="justify"&&Ue.isSoftWrapped){let ue=0;for(let K=Ee-Fe;K--;)Ue.glyphAt(K).glyphObj.isWhitespace&&ue++;Me=(_e-we)/ue}if(Me||Oe){let ue=0;for(let K=0;K<Ee;K++){let pe=Ue.glyphAt(K);const Le=pe.glyphObj;pe.x+=Oe+ue,Me!==0&&Le.isWhitespace&&K<Ee-Fe&&(ue+=Me,pe.width+=Me)}}const Te=e.getReorderSegments(g,Z,Ue.glyphAt(0).charIndex,Ue.glyphAt(Ue.count-1).charIndex);for(let ue=0;ue<Te.length;ue++){const[K,pe]=Te[ue];let Le=1/0,Pe=-1/0;for(let We=0;We<Ee;We++)if(Ue.glyphAt(We).charIndex>=K){let et=We,qe=We;for(;qe<Ee;qe++){let Qe=Ue.glyphAt(qe);if(Qe.charIndex>pe)break;qe<Ee-Fe&&(Le=Math.min(Le,Qe.x),Pe=Math.max(Pe,Qe.x+Qe.width))}for(let Qe=et;Qe<qe;Qe++){const st=Ue.glyphAt(Qe);st.x=Pe-(st.x+st.width-Le)}break}}let F;const Ae=ue=>F=ue;for(let ue=0;ue<Ee;ue++){const K=Ue.glyphAt(ue);F=K.glyphObj;const pe=F.index,Le=Z.levels[K.charIndex]&1;if(Le){const Pe=e.getMirroredCharacter(g[K.charIndex]);Pe&&K.fontData.fontObj.forEachGlyph(Pe,0,0,Ae)}if(ee){const{charIndex:Pe,fontData:We}=K,et=K.x+x,qe=K.x+K.width+x;oe[Pe*4]=Le?qe:et,oe[Pe*4+1]=Le?et:qe,oe[Pe*4+2]=Ue.baseline+We.caretBottom+O,oe[Pe*4+3]=Ue.baseline+We.caretTop+O;const Qe=Pe-de;Qe>1&&u(oe,de,Qe),de=Pe}if(N){const{charIndex:Pe}=K;for(;Pe>ce;)ce++,N.hasOwnProperty(ce)&&(Ce=N[ce])}if(!F.isWhitespace&&!F.isEmpty){const Pe=ie++,{fontSizeMult:We,src:et,index:qe}=K.fontData,Qe=he[et]||(he[et]={});Qe[pe]||(Qe[pe]={path:F.path,pathBounds:[F.xMin,F.yMin,F.xMax,F.yMax]});const st=K.x+x,Zt=K.y+Ue.baseline+O;Q[Pe*2]=st,Q[Pe*2+1]=Zt;const Jt=st+F.xMin*We,Gt=Zt+F.yMin*We,dn=st+F.xMax*We,Lt=Zt+F.yMax*We;Jt<D[0]&&(D[0]=Jt),Gt<D[1]&&(D[1]=Gt),dn>D[2]&&(D[2]=dn),Lt>D[3]&&(D[3]=Lt),Pe%V===0&&(ge={start:Pe,end:Pe,rect:[1/0,1/0,-1/0,-1/0]},ke.push(ge)),ge.end++;const _t=ge.rect;if(Jt<_t[0]&&(_t[0]=Jt),Gt<_t[1]&&(_t[1]=Gt),dn>_t[2]&&(_t[2]=dn),Lt>_t[3]&&(_t[3]=Lt),te[Pe]=pe,J[Pe]=qe,N){const pn=Pe*3;be[pn]=Ce>>16&255,be[pn+1]=Ce>>8&255,be[pn+2]=Ce&255}}}}}),oe){const Ue=g.length-de;Ue>1&&u(oe,de,Ue)}}const fe=[];Ne.forEach(({index:Z,src:ie,unitsPerEm:de,ascender:ce,descender:ge,lineHeight:Ce,capHeight:Ue,xHeight:se})=>{fe[Z]={src:ie,unitsPerEm:de,ascender:ce,descender:ge,lineHeight:Ce,capHeight:Ue,xHeight:se}}),z.typesetting=f()-le,y({glyphIds:te,glyphFontIndices:J,glyphPositions:Q,glyphData:he,fontData:fe,caretPositions:oe,glyphColors:be,chunkedBounds:ke,fontSize:E,topBaseline:O+Ie[0].baseline,blockBounds:[x,O-A,x+_e,O],visibleBounds:D,timings:z})})}function l(g,_){s({...g,metricsOnly:!0},d=>{const[m,E,v,S]=d.blockBounds;_({width:v-m,height:S-E})})}function c(g){let _=g.match(/^([\d.]+)%$/),d=_?parseFloat(_[1]):NaN;return isNaN(d)?0:d/100}function u(g,_,d){const m=g[_*4],E=g[_*4+1],v=g[_*4+2],S=g[_*4+3],T=(E-m)/d;for(let U=0;U<d;U++){const w=(_+U)*4;g[w]=m+T*U,g[w+1]=m+T*(U+1),g[w+2]=v,g[w+3]=S}}function f(){return(self.performance||Date).now()}function h(){this.data=[]}const p=["glyphObj","x","y","width","charIndex","fontData"];return h.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/p.length)},glyphAt(g){let _=h.flyweight;return _.data=this.data,_.index=g,_},splitAt(g){let _=new h;return _.data=this.data.splice(g*p.length),_}},h.flyweight=p.reduce((g,_,d,m)=>(Object.defineProperty(g,_,{get(){return this.data[this.index*p.length+d]},set(E){this.data[this.index*p.length+d]=E}}),g),{data:null,index:0}),{typeset:s,measure:l}}const oi=()=>(self.performance||Date).now(),ba=tu();let sc;function Qg(a,e,t,r,n,i,o,s,l,c,u=!0){return u?e_(a,e,t,r,n,i,o,s,l,c).then(null,f=>(sc||(console.warn("WebGL SDF generation failed, falling back to JS",f),sc=!0),lc(a,e,t,r,n,i,o,s,l,c))):lc(a,e,t,r,n,i,o,s,l,c)}const ca=[],$g=5;let ks=0;function iu(){const a=oi();for(;ca.length&&oi()-a<$g;)ca.shift()();ks=ca.length?setTimeout(iu,0):0}const e_=(...a)=>new Promise((e,t)=>{ca.push(()=>{const r=oi();try{ba.webgl.generateIntoCanvas(...a),e({timing:oi()-r})}catch(n){t(n)}}),ks||(ks=setTimeout(iu,0))}),t_=4,n_=2e3,oc={};let i_=0;function lc(a,e,t,r,n,i,o,s,l,c){const u="TroikaTextSDFGenerator_JS_"+i_++%t_;let f=oc[u];return f||(f=oc[u]={workerModule:Vi({name:u,workerId:u,dependencies:[tu,oi],init(h,p){const g=h().javascript.generate;return function(..._){const d=p();return{textureData:g(..._),timing:p()-d}}},getTransferables(h){return[h.textureData.buffer]}}),requests:0,idleTimer:null}),f.requests++,clearTimeout(f.idleTimer),f.workerModule(a,e,t,r,n,i).then(({textureData:h,timing:p})=>{const g=oi(),_=new Uint8Array(h.length*4);for(let d=0;d<h.length;d++)_[d*4+c]=h[d];return ba.webglUtils.renderImageData(o,_,s,l,a,e,1<<3-c),p+=oi()-g,--f.requests===0&&(f.idleTimer=setTimeout(()=>{Ig(u)},n_)),{timing:p}})}function r_(a){a._warm||(ba.webgl.isSupported(a),a._warm=!0)}const a_=ba.webglUtils.resizeWebGLCanvasWithoutClearing,Ri={defaultFontURL:null,unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},s_=new Ke;function wi(){return(self.performance||Date).now()}const cc=Object.create(null);function o_(a,e){a=c_({},a);const t=wi(),{defaultFontURL:r}=Ri,n=[];if(r&&n.push({label:"default",src:uc(r)}),a.font&&n.push({label:"user",src:uc(a.font)}),a.font=n,a.text=""+a.text,a.sdfGlyphSize=a.sdfGlyphSize||Ri.sdfGlyphSize,a.unicodeFontsURL=a.unicodeFontsURL||Ri.unicodeFontsURL,a.colorRanges!=null){let h={};for(let p in a.colorRanges)if(a.colorRanges.hasOwnProperty(p)){let g=a.colorRanges[p];typeof g!="number"&&(g=s_.set(g).getHex()),h[p]=g}a.colorRanges=h}Object.freeze(a);const{textureWidth:i,sdfExponent:o}=Ri,{sdfGlyphSize:s}=a,l=i/s*4;let c=cc[s];if(!c){const h=document.createElement("canvas");h.width=i,h.height=s*256/l,c=cc[s]={glyphCount:0,sdfGlyphSize:s,sdfCanvas:h,sdfTexture:new Ut(h,void 0,void 0,void 0,Ot,Ot),contextLost:!1,glyphsByFont:new Map},c.sdfTexture.generateMipmaps=!1,l_(c)}const{sdfTexture:u,sdfCanvas:f}=c;f_(a).then(h=>{const{glyphIds:p,glyphFontIndices:g,fontData:_,glyphPositions:d,fontSize:m,timings:E}=h,v=[],S=new Float32Array(p.length*4);let T=0,U=0;const w=wi(),I=_.map(B=>{let R=c.glyphsByFont.get(B.src);return R||c.glyphsByFont.set(B.src,R=new Map),R});p.forEach((B,R)=>{const G=g[R],{src:k,unitsPerEm:Y}=_[G];let ee=I[G].get(B);if(!ee){const{path:z,pathBounds:W}=h.glyphData[k][B],H=Math.max(W[2]-W[0],W[3]-W[1])/s*(Ri.sdfMargin*s+.5),te=c.glyphCount++,J=[W[0]-H,W[1]-H,W[2]+H,W[3]+H];I[G].set(B,ee={path:z,atlasIndex:te,sdfViewBox:J}),v.push(ee)}const{sdfViewBox:V}=ee,N=d[U++],y=d[U++],L=m/Y;S[T++]=N+V[0]*L,S[T++]=y+V[1]*L,S[T++]=N+V[2]*L,S[T++]=y+V[3]*L,p[R]=ee.atlasIndex}),E.quads=(E.quads||0)+(wi()-w);const M=wi();E.sdf={};const b=f.height,q=Math.ceil(c.glyphCount/l),P=Math.pow(2,Math.ceil(Math.log2(q*s)));P>b&&(console.info(`Increasing SDF texture size ${b}->${P}`),a_(f,i,P),u.dispose()),Promise.all(v.map(B=>ru(B,c,a.gpuAccelerateSDF).then(({timing:R})=>{E.sdf[B.atlasIndex]=R}))).then(()=>{v.length&&!c.contextLost&&(au(c),u.needsUpdate=!0),E.sdfTotal=wi()-M,E.total=wi()-t,e(Object.freeze({parameters:a,sdfTexture:u,sdfGlyphSize:s,sdfExponent:o,glyphBounds:S,glyphAtlasIndices:p,glyphColors:h.glyphColors,caretPositions:h.caretPositions,chunkedBounds:h.chunkedBounds,ascender:h.ascender,descender:h.descender,lineHeight:h.lineHeight,capHeight:h.capHeight,xHeight:h.xHeight,topBaseline:h.topBaseline,blockBounds:h.blockBounds,visibleBounds:h.visibleBounds,timings:h.timings}))})}),Promise.resolve().then(()=>{c.contextLost||r_(f)})}function ru({path:a,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:r,sdfCanvas:n,contextLost:i},o){if(i)return Promise.resolve({timing:-1});const{textureWidth:s,sdfExponent:l}=Ri,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),f=u%(s/r)*r,h=Math.floor(u/(s/r))*r,p=e%4;return Qg(r,r,a,t,c,l,n,f,h,p,o)}function l_(a){const e=a.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),a.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),a.contextLost=!1;const r=[];a.glyphsByFont.forEach(n=>{n.forEach(i=>{r.push(ru(i,a,!0))})}),Promise.all(r).then(()=>{au(a),a.sdfTexture.needsUpdate=!0})})}function c_(a,e){for(let t in e)e.hasOwnProperty(t)&&(a[t]=e[t]);return a}let aa;function uc(a){return aa||(aa=typeof document>"u"?{}:document.createElement("a")),aa.href=a,aa.href}function au(a){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=a,{width:r,height:n}=e,i=a.sdfCanvas.getContext("webgl");let o=t.image.data;(!o||o.length!==r*n*4)&&(o=new Uint8Array(r*n*4),t.image={width:r,height:n,data:o},t.flipY=!1,t.isDataTexture=!0),i.readPixels(0,0,r,n,i.RGBA,i.UNSIGNED_BYTE,o)}}const u_=Vi({name:"Typesetter",dependencies:[Jg,Zg,Ng],init(a,e,t){return a(e,t())}}),f_=Vi({name:"Typesetter",dependencies:[u_],init(a){return function(e){return new Promise(t=>{a.typeset(e,t)})}},getTransferables(a){const e=[];for(let t in a)a[t]&&a[t].buffer&&e.push(a[t].buffer);return e}}),fc={};function h_(a){let e=fc[a];if(!e){const t=new _n(1,1,a,a),r=t.clone(),n=t.attributes,i=r.attributes,o=new Wt,s=n.uv.count;for(let l=0;l<s;l++)i.position.array[l*3]*=-1,i.normal.array[l*3+2]*=-1;["position","normal","uv"].forEach(l=>{o.setAttribute(l,new Bt([...n[l].array,...i[l].array],n[l].itemSize))}),o.setIndex([...t.index.array,...r.index.array.map(l=>l+s)]),o.translate(.5,.5,0),e=fc[a]=o}return e}const d_="aTroikaGlyphBounds",hc="aTroikaGlyphIndex",p_="aTroikaGlyphColor";class m_ extends Rg{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new br,this.boundingBox=new ki}computeBoundingSphere(){}computeBoundingBox(){}setSide(e){const t=this.getIndex().count;this.setDrawRange(e===Ct?t/2:0,e===ln?t:t/2)}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=h_(e);["position","normal","uv"].forEach(r=>{this.attributes[r]=t.attributes[r].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,r,n,i){Ss(this,d_,e,4),Ss(this,hc,t,1),Ss(this,p_,i,3),this._blockBounds=r,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:r}=this;if(t){const{PI:n,floor:i,min:o,max:s,sin:l,cos:c}=Math,u=n/2,f=n*2,h=Math.abs(t),p=e[0]/h,g=e[2]/h,_=i((p+u)/f)!==i((g+u)/f)?-h:o(l(p)*h,l(g)*h),d=i((p-u)/f)!==i((g-u)/f)?h:s(l(p)*h,l(g)*h),m=i((p+n)/f)!==i((g+n)/f)?h*2:s(h-c(p)*h,h-c(g)*h);r.min.set(_,e[1],t<0?-m:0),r.max.set(d,e[3],t<0?0:m)}else r.min.set(e[0],e[1],0),r.max.set(e[2],e[3],0);r.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(hc).count,r=this._chunkedBounds;if(r)for(let n=r.length;n--;){t=r[n].end;let i=r[n].rect;if(i[1]<e.w&&i[3]>e.y&&i[0]<e.z&&i[2]>e.x)break}this.instanceCount=t}}function Ss(a,e,t,r){const n=a.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(a.setAttribute(e,new gg(t,r)),delete a._maxInstanceCount,a.dispose()):n&&a.deleteAttribute(e)}const g_=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaDistanceOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,__=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaDistanceOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaDistanceOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,v_=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaDistanceOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaOutlineOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,x_=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaDistanceOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function S_(a){const e=Gs(a,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Ve},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new ht(0,0,0,0)},uTroikaClipRect:{value:new ht(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Ve},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Ke},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Je},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:g_,vertexTransform:__,fragmentDefs:v_,fragmentColorTransform:x_,customRewriter({vertexShader:t,fragmentShader:r}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(r)&&(r=r.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(nu,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:r}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const lo=new xt({color:16777215,side:ln,transparent:!0}),dc=8421504,pc=new ct,sa=new X,Ms=new X,fr=[],M_=new X,ys="+x+y";function mc(a){return Array.isArray(a)?a[0]:a}let su=()=>{const a=new rt(new _n(1,1),lo);return su=()=>a,a},ou=()=>{const a=new rt(new _n(1,1,32,1),lo);return ou=()=>a,a};const y_={type:"syncstart"},E_={type:"synccomplete"},lu=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],T_=lu.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class Aa extends rt{constructor(){const e=new m_;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=dc,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=ys,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(y_),o_({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const r=this._queuedSyncs;r&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{r.forEach(n=>n&&n())})),this.dispatchEvent(E_),e&&e()})))}onBeforeRender(e,t,r,n,i,o){this.sync(),i.isTroikaTextMaterial&&this._prepareForRender(i),i._hadOwnSide=i.hasOwnProperty("side"),this.geometry.setSide(i._actualSide=i.side),i.side=Un}onAfterRender(e,t,r,n,i,o){i._hadOwnSide?i.side=i._actualSide:delete i.side}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=lo.clone());if((!e||e.baseMaterial!==t)&&(e=this._derivedMaterial=S_(t),t.addEventListener("dispose",function r(){t.removeEventListener("dispose",r),e.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let r=e._outlineMtl;return r||(r=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),r.isTextOutlineMaterial=!0,r.depthWrite=!1,r.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),r.dispose()})),[r,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return mc(this.material).getDepthMaterial()}get customDistanceMaterial(){return mc(this.material).getDistanceMaterial()}_prepareForRender(e){const t=e.isTextOutlineMaterial,r=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:s,blockBounds:l}=n;r.uTroikaSDFTexture.value=s,r.uTroikaSDFTextureSize.value.set(s.image.width,s.image.height),r.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,r.uTroikaSDFExponent.value=n.sdfExponent,r.uTroikaTotalBounds.value.fromArray(l),r.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,u=0,f=0,h,p,g,_=0,d=0;if(t){let{outlineWidth:E,outlineOffsetX:v,outlineOffsetY:S,outlineBlur:T,outlineOpacity:U}=this;c=this._parsePercent(E)||0,u=Math.max(0,this._parsePercent(T)||0),h=U,_=this._parsePercent(v)||0,d=this._parsePercent(S)||0}else f=Math.max(0,this._parsePercent(this.strokeWidth)||0),f&&(g=this.strokeColor,r.uTroikaStrokeColor.value.set(g??dc),p=this.strokeOpacity,p==null&&(p=1)),h=this.fillOpacity;r.uTroikaDistanceOffset.value=c,r.uTroikaPositionOffset.value.set(_,d),r.uTroikaBlurRadius.value=u,r.uTroikaStrokeWidth.value=f,r.uTroikaStrokeOpacity.value=p,r.uTroikaFillOpacity.value=h??1,r.uTroikaCurveRadius.value=this.curveRadius||0;let m=this.clipRect;if(m&&Array.isArray(m)&&m.length===4)r.uTroikaClipRect.value.fromArray(m);else{const E=(this.fontSize||.1)*100;r.uTroikaClipRect.value.set(l[0]-E,l[1]-E,l[2]+E,l[3]+E)}this.geometry.applyClipRect(r.uTroikaClipRect.value)}r.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const i=t?this.outlineColor||0:this.color;if(i==null)delete e.color;else{const s=e.hasOwnProperty("color")?e.color:e.color=new Ke;(i!==s._input||typeof i=="object")&&s.set(s._input=i)}let o=this.orientation||ys;if(o!==e._orientation){let s=r.uTroikaOrient.value;o=o.replace(/[^-+xyz]/g,"");let l=o!==ys&&o.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,f,h]=l;sa.set(0,0,0)[u]=c==="-"?1:-1,Ms.set(0,0,0)[h]=f==="-"?-1:1,pc.lookAt(M_,sa.cross(Ms),Ms),s.setFromMatrix4(pc)}else s.identity();e._orientation=o}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),r=t?parseFloat(t[1]):NaN;e=(isNaN(r)?0:r/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Ve){t.copy(e);const r=this.curveRadius;return r&&(t.x=Math.atan2(e.x,Math.abs(r)-Math.abs(e.z))*Math.abs(r)),t}worldPositionToTextCoords(e,t=new Ve){return sa.copy(e),this.localPositionToTextCoords(this.worldToLocal(sa),t)}raycast(e,t){const{textRenderInfo:r,curveRadius:n}=this;if(r){const i=r.blockBounds,o=n?ou():su(),s=o.geometry,{position:l,uv:c}=s.attributes;for(let u=0;u<c.count;u++){let f=i[0]+c.getX(u)*(i[2]-i[0]);const h=i[1]+c.getY(u)*(i[3]-i[1]);let p=0;n&&(p=n-Math.cos(f/n)*n,f=Math.sin(f/n)*n),l.setXYZ(u,f,h,p)}s.boundingSphere=this.geometry.boundingSphere,s.boundingBox=this.geometry.boundingBox,o.matrixWorld=this.matrixWorld,o.material.side=this.material.side,fr.length=0,o.raycast(e,fr);for(let u=0;u<fr.length;u++)fr[u].object=this,t.push(fr[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,T_.forEach(r=>{this[r]=e[r]}),this}clone(){return new this.constructor().copy(this)}}lu.forEach(a=>{const e="_private_"+a;Object.defineProperty(Aa.prototype,a,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});class Wi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const b_=new ao(-1,1,1,-1,0,1);class A_ extends Wt{constructor(){super(),this.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Bt([0,2,0,0,2,0],2))}}const w_=new A_;class co{constructor(e){this._mesh=new rt(w_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,b_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class R_ extends Wi{constructor(e,t,r=null,n=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=n,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ke}render(e,t,r){const n=e.autoClear;e.autoClear=!1;let i,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=n}}const cu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class uu extends Wi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Rt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ni.clone(e.uniforms),this.material=new Rt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new co(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class gc extends Wi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){const n=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let o,s;this.inverse?(o=0,s=1):(o=1,s=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),i.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),i.buffers.stencil.setClear(s),i.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(n.EQUAL,1,4294967295),i.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),i.buffers.stencil.setLocked(!0)}}class C_ extends Wi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class fu{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const r=e.getSize(new Ve);this._width=r.width,this._height=r.height,t=new fn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Cn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new uu(cu),this.copyPass.material.blending=Rn,this.clock=new $c}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let r=!1;for(let n=0,i=this.passes.length;n<i;n++){const o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),o.needsSwap){if(r){const s=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}gc!==void 0&&(o instanceof gc?r=!0:o instanceof C_&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ve);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const r=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(r,n),this.renderTarget2.setSize(r,n);for(let i=0;i<this.passes.length;i++)this.passes[i].setSize(r,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const U_={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ke(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Oi extends Wi{constructor(e,t,r,n){super(),this.strength=t!==void 0?t:1,this.radius=r,this.threshold=n,this.resolution=e!==void 0?new Ve(e.x,e.y):new Ve(256,256),this.clearColor=new Ke(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new fn(i,o,{type:Cn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const h=new fn(i,o,{type:Cn});h.texture.name="UnrealBloomPass.h"+f,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const p=new fn(i,o,{type:Cn});p.texture.name="UnrealBloomPass.v"+f,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),i=Math.round(i/2),o=Math.round(o/2)}const s=U_;this.highPassUniforms=Ni.clone(s.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Rt({uniforms:this.highPassUniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];i=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Ve(1/i,1/o),i=Math.round(i/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=cu;this.copyUniforms=Ni.clone(u.uniforms),this.blendMaterial=new Rt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Ts,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ke,this.oldClearAlpha=1,this.basic=new xt,this.fsQuad=new co(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let r=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(r,n);for(let i=0;i<this.nMips;i++)this.renderTargetsHorizontal[i].setSize(r,n),this.renderTargetsVertical[i].setSize(r,n),this.separableBlurMaterials[i].uniforms.invSize.value=new Ve(1/r,1/n),r=Math.round(r/2),n=Math.round(n/2)}render(e,t,r,n,i){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),i&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let s=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[l].uniforms.direction.value=Oi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Oi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),s=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,i&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(r),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(e*e))/e);return new Rt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ve(.5,.5)},direction:{value:new Ve(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Rt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Oi.BlurDirectionX=new Ve(1,0);Oi.BlurDirectionY=new Ve(0,1);const L_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class P_ extends Wi{constructor(){super();const e=L_;this.uniforms=Ni.clone(e.uniforms),this.material=new vg({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new co(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},$e.getTransfer(this._outputColorSpace)===it&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Sc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Mc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===eo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===yc&&(this.material.defines.ACES_FILMIC_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}var vr=function(){var a=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(u){u.preventDefault(),r(++a%e.children.length)},!1);function t(u){return e.appendChild(u.dom),u}function r(u){for(var f=0;f<e.children.length;f++)e.children[f].style.display=f===u?"block":"none";a=u}var n=(performance||Date).now(),i=n,o=0,s=t(new vr.Panel("FPS","#0ff","#002")),l=t(new vr.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new vr.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:e,addPanel:t,showPanel:r,begin:function(){n=(performance||Date).now()},end:function(){o++;var u=(performance||Date).now();if(l.update(u-n,200),u>=i+1e3&&(s.update(o*1e3/(u-i),100),i=u,o=0,c)){var f=performance.memory;c.update(f.usedJSHeapSize/1048576,f.jsHeapSizeLimit/1048576)}return u},update:function(){n=this.end()},domElement:e,setMode:r}};vr.Panel=function(a,e,t){var r=1/0,n=0,i=Math.round,o=i(window.devicePixelRatio||1),s=80*o,l=48*o,c=3*o,u=2*o,f=3*o,h=15*o,p=74*o,g=30*o,_=document.createElement("canvas");_.width=s,_.height=l,_.style.cssText="width:80px;height:48px";var d=_.getContext("2d");return d.font="bold "+9*o+"px Helvetica,Arial,sans-serif",d.textBaseline="top",d.fillStyle=t,d.fillRect(0,0,s,l),d.fillStyle=e,d.fillText(a,c,u),d.fillRect(f,h,p,g),d.fillStyle=t,d.globalAlpha=.9,d.fillRect(f,h,p,g),{dom:_,update:function(m,E){r=Math.min(r,m),n=Math.max(n,m),d.fillStyle=t,d.globalAlpha=1,d.fillRect(0,0,s,h),d.fillStyle=e,d.fillText(i(m)+" "+a+" ("+i(r)+"-"+i(n)+")",c,u),d.drawImage(_,f+o,h,p-o,g,f,h,p-o,g),d.fillRect(f+p-o,h,o,g),d.fillStyle=t,d.globalAlpha=.9,d.fillRect(f+p-o,h,o,i((1-m/E)*g))}}};const D_=vr;let gn=[],Es=[],zn=0,uo=new $c;const Ge=new Jc;let I_=new pt;Ge.add(I_);const ft=new jt(75,window.innerWidth/window.innerHeight,.1,1e3),hu=new wg(6723993,5);hu.position.set=new X(1,3,5);Ge.add(hu);const vn=new Zc;vn.setSize(window.innerWidth,window.innerHeight);vn.setPixelRatio(window.devicePixelRatio);document.getElementById("webGL").appendChild(vn.domElement);Ge.background=new Ke(0);ft.position.x=-2;ft.position.z=5;uo.start();uo.startTime;uo.getElapsedTime();new Jc;const du=new R_(Ge,ft),Ar=new fu(vn);Ar.addPass(du);const wa=new Oi(new Ve(window.innerWidth,window.innerHeight),1.6,.1,.1);Ar.addPass(wa);Ar.renderToScreen=!1;const F_=new uu(new Rt({uniforms:{baseTexture:{value:null},bloomTexture:{value:Ar.renderTarget2.texture}},vertexShader:document.getElementById("vertexshader").textContent,fragmentShader:document.getElementById("fragmentshader").textContent}),"baseTexture"),Bi=new fu(vn);Bi.addPass(du);Bi.addPass(F_);const N_=new P_;Bi.addPass(N_);const Vt=1,zs=new Ea;zs.set(Vt);const _c=new xt({color:0}),xr={};function O_(a){a.isMesh&&zs.test(a.layers)===!1&&(xr[a.uuid]=a.material,a.material=_c),a.isText&&zs.test(a.layers)===!1&&(xr[a.uuid]=a.material,a.material=_c)}function B_(a){xr[a.uuid]&&(a.material=xr[a.uuid],delete xr[a.uuid])}wa.strength=.5;wa.radius=.5;wa.threshold=.1;vn.toneMapping=eo;vn.toneMappingExposure=1;vn.outputColorSpace=dt;Fs.enabled=!0;H_();V_();z_();G_();let ma=[],ga=[],_a=[],va=[],xa=[];function hr(a,e,t,r,n,i,o){const s=new Qc({color:4210752});let l=new X,c=new X;t.getWorldPosition(l),r.getWorldPosition(c),a.push(new X(l.x,l.y-.24,-5)),a.push(new X(l.x,l.y+n,-5)),a.push(new X(l.x+i,l.y+n,-5)),a.push(new X(l.x+i,c.y,-5)),a.push(new X(l.x+o,c.y,-5));const u=new Wt().setFromPoints(a),f=new _g(u,s);f.name=e,Ge.add(f)}function G_(){let a=new Pn(10,.3,.001),e=new xt({color:39270});new X(0,0,0);const t=new rt(a,e);t.layers.toggle(Vt),t.name="naviUp",t.position.x-=2,t.position.y+=7,t.position.z=-5,Ge.children[0].add(t);function r(n,i,o,s){const l=new Aa;l.name="naviText",l.text=i,l.font="./public/fonts/Roboto-Bold.ttf",l.fontSize=.27,l.textAlign="justify",l.letterSpacing=.1,l.material=new xt({color:0}),l.maxWidth=10,t.add(l),l.sync(()=>{l.position.set(-(t.geometry.parameters.width*o),t.geometry.parameters.height*s,.001),Ge.children[0].children[4].children[2].addEventListener("synccomplete",()=>{n==0&&hr(ma,"NaviUpToAboutMe",l,Ge.children[0].children[0],-.75,10.3,10.15),n==1&&hr(ga,"NaviUpToDevelop",l,Ge.children[0].children[1],-.65,9,8.75),n==2&&hr(_a,"NaviUpToVis",l,Ge.children[0].children[2],-.55,6.4,6.05),n==3&&hr(va,"NaviUpToSmart",l,Ge.children[0].children[3],-.45,4.1,3.65);function c(){n==4&&hr(xa,"NaviUpToKont",l,Ge.children[0].children[4],-.35,2.04,1.5)}setTimeout(c,30)})})}r(0,"O mnie",.49,.38),r(1,"Programowanie",.35,.38),r(2,"Wizualizacje",.08,.38),r(3,"Smart Dom",-.16,.38),r(4,"Kontakt",-.375,.38)}new X(399.68222832009576,304.2712647391499,73.6856319205078),new X(-53.56300074753207,171.49711742836848,-14.495472686253045),new X(-283.4748557538718,183.4943402647093,-27.197994207077706),new X(-424.21523355695456,259.1844883292352,-127.65006440703308);function k_(a){let e=Ge.children[0].children[a],t=new Pn(e.geometry.parameters.width*1.04,.015,.015),r=new xt({color:6750156}),n=new X(0,0,0);const i=new rt(t,r);i.layers.toggle(Vt),i.name="borderTop",n.y+=e.geometry.parameters.height*.52,i.position.set(n.x,n.y,n.z),Ge.children[0].children[a].add(i),n=new X(0,0,0);const o=new rt(t,r);o.layers.toggle(Vt),o.name="borderBottom",n.y-=e.geometry.parameters.height*.52,o.position.set(n.x,n.y,n.z),Ge.children[0].children[a].add(o),n=new X(0,0,0),t=new Pn(.015,e.geometry.parameters.height*1.04,.015);const s=new rt(t,r);s.layers.toggle(Vt),s.name="borderLeft",n.x-=e.geometry.parameters.width*.52,s.position.set(n.x,n.y,n.z),Ge.children[0].children[a].add(s),n=new X(0,0,0);const l=new rt(t,r);l.layers.toggle(Vt),l.name="borderRight",n.x+=e.geometry.parameters.width*.52,l.position.set(n.x,n.y,n.z),Ge.children[0].children[a].add(l)}function z_(){for(let a=0;a<Ge.children[0].children.length;a++){let e=new Ve;e.x=10.5;let t=new _n,r=new X(-2.2,2.2,-5),n=Ge.children[0].children[a].children[0],i=Ge.children[0].children[a].children[1],o=Ge.children[0].children[a].children[2];Ge.children[0].children,e.y=n.geometry.parameters.height,i.sync(()=>{let s=Ge.children[0].children[a].children[1];e.y+=s.geometry.boundingBox.max.y-s.geometry.boundingBox.min.y}),o.sync(()=>{let s=Ge.children[0].children[a].children[0],l=Ge.children[0].children[a].children[1],c=Ge.children[0].children[a].children[2],u=Ge.children[0].children;e.y+=c.geometry.boundingBox.max.y-c.geometry.boundingBox.min.y,t=new _n(e.x,e.y+.7),u[a].geometry=t,a>0&&(r.y=u[a-1].position.y-(u[a-1].geometry.parameters.height/2+u[a].geometry.parameters.height/2)-.9),u[a].position.set(r.x,r.y,r.z),s.position.x=-(e.x*.5)+s.geometry.parameters.width/2+.2,s.position.y=u[a].geometry.parameters.height/2-s.geometry.parameters.height/2-.15,l.position.x=-(e.x*.5)+.2,l.position.y=u[a].geometry.parameters.height/2-s.geometry.parameters.height-.3,c.position.x=-(e.x*.5)+.2,c.position.y=u[a].geometry.parameters.height/2-s.geometry.parameters.height-.8,k_(a)})}}function H_(){gn=document.getElementsByClassName("article-container")}function V_(){for(let a=0;a<gn.length;a++){let e=gn[a].clientHeight/gn[a].clientWidth,t=14,r=new X(-2.2,2.2,-5),n=new Ve(1,1);Es.push(t*e);let i=new xg({color:0,opacity:0,transparent:!0});const o=new pt(n,i);o.name="elementPlane",a>0&&(r.y=Ge.children[0].children[a-1].position.y-(Es[a-1]/2+Es[a]/2)-.45),o.position.set(r.x,r.y,r.z),Ge.children[0].add(o),e=gn[a].getElementsByClassName("image")[0].clientWidth/gn[a].getElementsByClassName("image")[0].clientHeight,W_(a,gn[a].getElementsByClassName("image")[0].src,e),X_(a),Y_(a)}}function W_(a,e,t){let r=new rt,n=new rt,i=3,o=new xt({color:16777215}),s=new _n;const c=new Eg().load(e,function(u){c.colorSpace=dt});o=new xt({color:16777215,map:c}),s=new _n(i*t,i),r=new rt(s,o),r.position.z+=.1,s=new Pn(i*t+.07,i+.07,.01),o=new xt({color:6750156}),n=new rt(s,o),n.position.z-=.01,n.layers.toggle(Vt),r.add(n),Ge.children[0].children[a].add(r)}function X_(a){let e=new Aa;e.name="titleText",e.text=gn[a].getElementsByTagName("h2")[0].textContent,e.font="./public/fonts/Roboto-Bold.ttf",e.fontSize=.4,e.textAlign="justify",e.letterSpacing=.1,e.material=new xt({color:45943}),e.maxWidth=10,e.layers.toggle(Vt),Ge.children[0].children[a].add(e)}function Y_(a){let e=new Aa;e.name="articleText",e.text=gn[a].getElementsByClassName("elementText")[0].textContent,e.font="./public/fonts/Roboto-Regular.ttf",e.fontSize=.25,e.textAlign="justify",e.letterSpacing=.1,e.lineHeight=1.2,e.material=new xt({color:6750156}),e.maxWidth=10,Ge.children[0].children[a].add(e)}function bn(a,e){return Math.random()*(e-a)+a}function q_(a){var e=Math.max(-1,Math.min(1,a.wheelDelta||-a.detail));zn=e*2,new Array}function j_(){ft.aspect=window.innerWidth/window.innerHeight,ft.updateProjectionMatrix(),vn.setSize(window.innerWidth,window.innerHeight),vn.setPixelRatio(window.devicePixelRatio),Bi.setSize(window.innerWidth,window.innerHeight),Bi.setPixelRatio(window.devicePixelRatio),console.log(window.innerWidth,Ge.children[0].children[0].children[0].rotation)}let Hs=0,Vs=0,Xi;Xi=new rt(new li(.035,3,3,0,3),new xt({color:6750156}));Xi.name="electron";Xi.position.set(-2,-2,7);Ge.add(Xi);Xi.layers.toggle(Vt);let Ws=0,Xs=0,Yi;Yi=new rt(new li(.035,3,3,0,3),new xt({color:6750156}));Yi.name="electron";Yi.position.set(-2,-2,7);Ge.add(Yi);Yi.layers.toggle(Vt);let Ys=0,qs=0,qi;qi=new rt(new li(.035,3,3,0,3),new xt({color:6750156}));qi.name="electron";qi.position.set(-2,-2,7);Ge.add(qi);qi.layers.toggle(Vt);let js=0,Ks=0,ji;ji=new rt(new li(.035,3,3,0,3),new xt({color:6750156}));ji.name="electron";ji.position.set(-2,-2,7);Ge.add(ji);ji.layers.toggle(Vt);let Zs=0,Js=0,Ki;Ki=new rt(new li(.035,3,3,0,3),new xt({color:6750156}));Ki.name="electron";Ki.position.set(-2,-2,7);Ge.add(Ki);Ki.layers.toggle(Vt);let qt=[!1,!1,!1,!1];function dr(a,e,t,r,n,i,o,s,l){qt[a]=!0;var c=new Tn,u;const f=[i,o,s,l];if(n==ma&&(t=Vs,e=Hs),n==ga&&(t=Xs,e=Ws),n==_a&&(t=qs,e=Ys),n==va&&(t=Ks,e=js),n==xa&&(t=Js,e=Zs),e<=f[0]&&(c=new Tn(n[0],n[1]),u=f[0],r.position.z=-5),e==f[0]){t=0;var c=new Tn(n[1],n[2]);u=f[1]}if(e>f[0]){var c=new Tn(n[1],n[2]);u=f[1]}if(e==f[0]+f[1]){t=0;var c=new Tn(n[2],n[3]);u=f[2]}if(e>f[0]+f[1]){var c=new Tn(n[2],n[3]);u=f[2]}if(e==f[0]+f[1]+f[2]){t=0;var c=new Tn(n[3],n[4]);u=f[3]}if(e>f[0]+f[1]+f[2]){var c=new Tn(n[3],n[4]);u=f[3]}e==f[0]+f[1]+f[2]+f[3]&&(t=0,e=0,c=new Tn(n[0],n[1]),u=f[0],qt[a]=!1,r.position.z=7),t++,e++;let h=new X;switch(c.at(t/u,h),r.position.x=h.x,r.position.y=h.y,n){case ma:Vs=t,Hs=e;break;case ga:Xs=t,Ws=e;break;case _a:qs=t,Ys=e;break;case va:Ks=t,js=e;break;case xa:Js=t,Zs=e;break}}let Yt;const Qs=new Cg;let yr=new Ve;document.addEventListener("mousemove",pu);function pu(a){yr.x=a.clientX/window.innerWidth*2-1,yr.y=-(a.clientY/window.innerHeight)*2+1}function K_(a){yr.x=a.clientX/window.innerWidth*2-1,yr.y=-(a.clientY/window.innerHeight)*2+1;const e=Qs.intersectObjects(Ge.children[0].children[5].children,!1);if(e.length>0){const t=e[0].object;t===Ge.children[0].children[5].children[0]&&(ft.position.y=Ge.children[0].children[0].position.y-Ge.children[0].children[0].geometry.parameters.height*.45),t===Ge.children[0].children[5].children[1]&&(ft.position.y=Ge.children[0].children[1].position.y-Ge.children[0].children[1].geometry.parameters.height*.45),t===Ge.children[0].children[5].children[2]&&(ft.position.y=Ge.children[0].children[2].position.y-Ge.children[0].children[2].geometry.parameters.height*.45),t===Ge.children[0].children[5].children[3]&&(ft.position.y=Ge.children[0].children[3].position.y-Ge.children[0].children[3].geometry.parameters.height*.45),t===Ge.children[0].children[5].children[4]&&(ft.position.y=Ge.children[0].children[4].position.y-Ge.children[0].children[4].geometry.parameters.height*.45,ft.position.y<-25&&(ft.position.y=-25))}}function mu(){window.addEventListener("pointerdown",K_),window.addEventListener("pointermove",pu),Qs.setFromCamera(yr,ft);const a=Qs.intersectObjects(Ge.children[0].children[5].children,!1);if(a.length>0?Yt!=a[0].object&&(Yt&&Yt.material.color.setHex(Yt.currentHex),Yt=a[0].object,Yt.currentHex=Yt.material.color.getHex(),Yt.material.color.setHex(16777215)):(Yt&&Yt.material.color.setHex(Yt.currentHex),Yt=null),window.addEventListener("wheel",q_,!1),bn(0,1e4)<15&&(qt[0]=!0),bn(0,1e4)>15&&bn(0,1e4)<30&&(qt[1]=!0),bn(0,1e4)>30&&bn(0,1e4)<45&&(qt[2]=!0),bn(0,1e4)>45&&bn(0,1e4)<60&&(qt[3]=!0),bn(0,1e4)>60&&bn(0,1e4)<75&&(qt[4]=!0),qt[0]==!0&&dr(0,Hs,Vs,Xi,ma,10,60,50,3),qt[1]==!0&&dr(1,Ws,Xs,Yi,ga,9,50,100,4),qt[2]==!0&&dr(2,Ys,qs,qi,_a,8,40,150,5),qt[3]==!0&&dr(3,js,Ks,ji,va,7,30,200,6),qt[4]==!0&&dr(4,Zs,Js,Ki,xa,6,20,250,7),zn>.1||zn<-.1){for(let e=0;e<gn.length;e++)ft.position.y<=0&&ft.position.y>=-25&&(ft.position.y+=zn*.045);ft.position.y>0?(ft.position.y=0,zn=0):ft.position.y<-25?(ft.position.y=-25,zn=0):zn=zn*.9}window.addEventListener("resize",j_),Ge.traverse(O_),Ar.render(),Ge.traverse(B_),Bi.render(),requestAnimationFrame(mu),fo.update()}const fo=new D_;fo.showPanel(3);document.body.appendChild(fo.dom);mu();
