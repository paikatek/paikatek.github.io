(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cl="158",Yh=0,Ol=1,jh=2,Fu=1,Jh=2,Dn=3,zn=0,Nt=1,dn=2,Nn=0,Ki=1,Ro=2,Bl=3,zl=4,Kh=5,mi=100,Zh=101,Qh=102,kl=103,Gl=104,$h=200,ef=201,tf=202,nf=203,Po=204,Lo=205,rf=206,sf=207,af=208,of=209,lf=210,cf=211,uf=212,hf=213,ff=214,df=0,pf=1,mf=2,ra=3,gf=4,vf=5,_f=6,xf=7,Iu=0,yf=1,Sf=2,ti=0,Nu=1,Ou=2,ul=3,Bu=4,Mf=5,zu=300,nr=301,ir=302,Uo=303,Do=304,va=306,Fo=1e3,pn=1001,Io=1002,Ft=1003,Hl=1004,Ba=1005,Wt=1006,Ef=1007,$r=1008,ni=1009,Tf=1010,bf=1011,hl=1012,ku=1013,Qn=1014,$n=1015,On=1016,Gu=1017,Hu=1018,_i=1020,wf=1021,mn=1023,Af=1024,Cf=1025,xi=1026,rr=1027,Rf=1028,Vu=1029,Pf=1030,Wu=1031,Xu=1033,za=33776,ka=33777,Ga=33778,Ha=33779,Vl=35840,Wl=35841,Xl=35842,ql=35843,Lf=36196,Yl=37492,jl=37496,Jl=37808,Kl=37809,Zl=37810,Ql=37811,$l=37812,ec=37813,tc=37814,nc=37815,ic=37816,rc=37817,sc=37818,ac=37819,oc=37820,lc=37821,Va=36492,cc=36494,uc=36495,Uf=36283,hc=36284,fc=36285,dc=36286,qu=3e3,yi=3001,Df=3200,Yu=3201,ju=0,Ff=1,en="",xt="srgb",kn="srgb-linear",fl="display-p3",_a="display-p3-linear",sa="linear",ot="srgb",aa="rec709",oa="p3",wi=7680,pc=519,If=512,Nf=513,Of=514,Bf=515,zf=516,kf=517,Gf=518,Hf=519,mc=35044,gc="300 es",No=1035,In=2e3,la=2001;class cr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const n=r.slice(0);for(let i=0,a=n.length;i<a;i++)n[i].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wa=Math.PI/180,Oo=180/Math.PI;function ur(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rt[s&255]+Rt[s>>8&255]+Rt[s>>16&255]+Rt[s>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[r&255]+Rt[r>>8&255]+Rt[r>>16&255]+Rt[r>>24&255]).toLowerCase()}function At(s,e,t){return Math.max(e,Math.min(t,s))}function Vf(s,e){return(s%e+e)%e}function Xa(s,e,t){return(1-t)*s+t*e}function vc(s){return(s&s-1)===0&&s!==0}function Bo(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Dr(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Vt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(At(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*r-a*n+e.x,this.y=i*n+a*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,r,n,i,a,o,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,n,i,a,o,l,c)}set(e,t,r,n,i,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=i,u[5]=l,u[6]=r,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,a=r[0],o=r[3],l=r[6],c=r[1],u=r[4],h=r[7],f=r[2],d=r[5],g=r[8],v=n[0],m=n[3],p=n[6],M=n[1],_=n[4],x=n[7],T=n[2],C=n[5],w=n[8];return i[0]=a*v+o*M+l*T,i[3]=a*m+o*_+l*C,i[6]=a*p+o*x+l*w,i[1]=c*v+u*M+h*T,i[4]=c*m+u*_+h*C,i[7]=c*p+u*x+h*w,i[2]=f*v+d*M+g*T,i[5]=f*m+d*_+g*C,i[8]=f*p+d*x+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-r*i*u+r*o*l+n*i*c-n*a*l}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*i,d=c*i-a*l,g=t*h+r*f+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(n*c-u*r)*v,e[2]=(o*r-n*a)*v,e[3]=f*v,e[4]=(u*t-n*l)*v,e[5]=(n*i-o*t)*v,e[6]=d*v,e[7]=(r*l-c*t)*v,e[8]=(a*t-r*i)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,i,a,o){const l=Math.cos(i),c=Math.sin(i);return this.set(r*l,r*c,-r*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(qa.makeScale(e,t)),this}rotate(e){return this.premultiply(qa.makeRotation(-e)),this}translate(e,t){return this.premultiply(qa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qa=new Qe;function Ju(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function es(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Wf(){const s=es("canvas");return s.style.display="block",s}const _c={};function Xr(s){s in _c||(_c[s]=!0,console.warn(s))}const xc=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),yc=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xs={[kn]:{transfer:sa,primaries:aa,toReference:s=>s,fromReference:s=>s},[xt]:{transfer:ot,primaries:aa,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[_a]:{transfer:sa,primaries:oa,toReference:s=>s.applyMatrix3(yc),fromReference:s=>s.applyMatrix3(xc)},[fl]:{transfer:ot,primaries:oa,toReference:s=>s.convertSRGBToLinear().applyMatrix3(yc),fromReference:s=>s.applyMatrix3(xc).convertLinearToSRGB()}},Xf=new Set([kn,_a]),tt={enabled:!0,_workingColorSpace:kn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Xf.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const r=xs[e].toReference,n=xs[t].fromReference;return n(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return xs[s].primaries},getTransfer:function(s){return s===en?sa:xs[s].transfer}};function Zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ya(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ai;class Ku{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ai===void 0&&(Ai=es("canvas")),Ai.width=e.width,Ai.height=e.height;const r=Ai.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Ai}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=es("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),i=n.data;for(let a=0;a<i.length;a++)i[a]=Zi(i[a]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Zi(t[r]/255)*255):t[r]=Zi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qf=0;class Zu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=ur(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let i;if(Array.isArray(n)){i=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?i.push(ja(n[a].image)):i.push(ja(n[a]))}else i=ja(n);r.url=i}return t||(e.images[this.uuid]=r),r}}function ja(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ku.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yf=0;class Ot extends cr{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,r=pn,n=pn,i=Wt,a=$r,o=mn,l=ni,c=Ot.DEFAULT_ANISOTROPY,u=en){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=ur(),this.name="",this.source=new Zu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=i,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===yi?xt:en),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fo:e.x=e.x-Math.floor(e.x);break;case pn:e.x=e.x<0?0:1;break;case Io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fo:e.y=e.y-Math.floor(e.y);break;case pn:e.y=e.y<0?0:1;break;case Io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===xt?yi:qu}set encoding(e){Xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===yi?xt:en}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=zu;Ot.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,r=0,n=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*n+a[12]*i,this.y=a[1]*t+a[5]*r+a[9]*n+a[13]*i,this.z=a[2]*t+a[6]*r+a[10]*n+a[14]*i,this.w=a[3]*t+a[7]*r+a[11]*n+a[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,i;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,x=(d+1)/2,T=(p+1)/2,C=(u+f)/4,w=(h+v)/4,D=(g+m)/4;return _>x&&_>T?_<.01?(r=0,n=.707106781,i=.707106781):(r=Math.sqrt(_),n=C/r,i=w/r):x>T?x<.01?(r=.707106781,n=0,i=.707106781):(n=Math.sqrt(x),r=C/n,i=D/n):T<.01?(r=.707106781,n=.707106781,i=0):(i=Math.sqrt(T),r=w/i,n=D/i),this.set(r,n,i,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-v)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jf extends cr{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const n={width:e,height:t,depth:1};r.encoding!==void 0&&(Xr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===yi?xt:en),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new Ot(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Zu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gn extends jf{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Qu extends Ot{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jf extends Ot{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ls{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,i,a,o){let l=r[n+0],c=r[n+1],u=r[n+2],h=r[n+3];const f=i[a+0],d=i[a+1],g=i[a+2],v=i[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==f||c!==d||u!==g){let m=1-o;const p=l*f+c*d+u*g+h*v,M=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const T=Math.sqrt(_),C=Math.atan2(T,p*M);m=Math.sin(m*C)/T,o=Math.sin(o*C)/T}const x=o*M;if(l=l*m+f*x,c=c*m+d*x,u=u*m+g*x,h=h*m+v*x,m===1-o){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,r,n,i,a){const o=r[n],l=r[n+1],c=r[n+2],u=r[n+3],h=i[a],f=i[a+1],d=i[a+2],g=i[a+3];return e[t]=o*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-o*d,e[t+2]=c*g+u*d+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const r=e._x,n=e._y,i=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(r/2),u=o(n/2),h=o(i/2),f=l(r/2),d=l(n/2),g=l(i/2);switch(a){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],i=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=r+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(i-c)*d,this._z=(a-n)*d}else if(r>o&&r>h){const d=2*Math.sqrt(1+r-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(n+a)/d,this._z=(i+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-r-h);this._w=(i-c)/d,this._x=(n+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-r-o);this._w=(a-n)/d,this._x=(i+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,i=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=r*u+a*o+n*c-i*l,this._y=n*u+a*l+i*o-r*c,this._z=i*u+a*c+r*l-n*o,this._w=a*u-r*o-n*l-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,n=this._y,i=this._z,a=this._w;let o=a*e._w+r*e._x+n*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=r,this._y=n,this._z=i,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*r+t*this._x,this._y=d*n+t*this._y,this._z=d*i+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=r*h+this._x*f,this._y=n*h+this._y*f,this._z=i*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),n=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(n),r*Math.sin(i),r*Math.cos(i),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,r=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6]*n,this.y=i[1]*t+i[4]*r+i[7]*n,this.z=i[2]*t+i[5]*r+i[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=e.elements,a=1/(i[3]*t+i[7]*r+i[11]*n+i[15]);return this.x=(i[0]*t+i[4]*r+i[8]*n+i[12])*a,this.y=(i[1]*t+i[5]*r+i[9]*n+i[13])*a,this.z=(i[2]*t+i[6]*r+i[10]*n+i[14])*a,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,i=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*r),u=2*(o*t-i*n),h=2*(i*r-a*t);return this.x=t+l*c+a*h-o*u,this.y=r+l*u+o*c-i*h,this.z=n+l*h+i*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[4]*r+i[8]*n,this.y=i[1]*t+i[5]*r+i[9]*n,this.z=i[2]*t+i[6]*r+i[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,i=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-i*o,this.y=i*a-r*l,this.z=r*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ja.copy(this).projectOnVector(e),this.sub(Ja)}reflect(e){return this.sub(Ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(At(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ja=new I,Sc=new ls;class hr{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const i=r.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=i.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,cn):cn.fromBufferAttribute(i,a),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ys.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ys.copy(r.boundingBox)),ys.applyMatrix4(e.matrixWorld),this.union(ys)}const n=e.children;for(let i=0,a=n.length;i<a;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),Ss.subVectors(this.max,Fr),Ci.subVectors(e.a,Fr),Ri.subVectors(e.b,Fr),Pi.subVectors(e.c,Fr),Wn.subVectors(Ri,Ci),Xn.subVectors(Pi,Ri),oi.subVectors(Ci,Pi);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-oi.z,oi.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,oi.z,0,-oi.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-oi.y,oi.x,0];return!Ka(t,Ci,Ri,Pi,Ss)||(t=[1,0,0,0,1,0,0,0,1],!Ka(t,Ci,Ri,Pi,Ss))?!1:(Ms.crossVectors(Wn,Xn),t=[Ms.x,Ms.y,Ms.z],Ka(t,Ci,Ri,Pi,Ss))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const An=[new I,new I,new I,new I,new I,new I,new I,new I],cn=new I,ys=new hr,Ci=new I,Ri=new I,Pi=new I,Wn=new I,Xn=new I,oi=new I,Fr=new I,Ss=new I,Ms=new I,li=new I;function Ka(s,e,t,r,n){for(let i=0,a=s.length-3;i<=a;i+=3){li.fromArray(s,i);const o=n.x*Math.abs(li.x)+n.y*Math.abs(li.y)+n.z*Math.abs(li.z),l=e.dot(li),c=t.dot(li),u=r.dot(li);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Kf=new hr,Ir=new I,Za=new I;class cs{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Kf.setFromPoints(e).getCenter(r);let n=0;for(let i=0,a=e.length;i<a;i++)n=Math.max(n,r.distanceToSquared(e[i]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ir.subVectors(e,this.center);const t=Ir.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(Ir,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ir.copy(e.center).add(Za)),this.expandByPoint(Ir.copy(e.center).sub(Za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new I,Qa=new I,Es=new I,qn=new I,$a=new I,Ts=new I,eo=new I;class dl{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){Qa.copy(e).add(t).multiplyScalar(.5),Es.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(Qa);const i=e.distanceTo(t)*.5,a=-this.direction.dot(Es),o=qn.dot(this.direction),l=-qn.dot(Es),c=qn.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*l-o,f=a*o-l,g=i*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=i,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-i,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*i+o)),f=h>0?-i:Math.min(Math.max(-i,-l),i),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-i,-l),i),d=f*(f+2*l)+c):(h=Math.max(0,-(a*i+o)),f=h>0?i:Math.min(Math.max(-i,-l),i),d=-h*h+f*(f+2*l)+c);else f=a>0?-i:i,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(Qa).addScaledVector(Es,f),d}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const r=Cn.dot(this.direction),n=Cn.dot(Cn)-r*r,i=e.radius*e.radius;if(n>i)return null;const a=Math.sqrt(i-n),o=r-a,l=r+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,i,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(r=(e.min.x-f.x)*c,n=(e.max.x-f.x)*c):(r=(e.max.x-f.x)*c,n=(e.min.x-f.x)*c),u>=0?(i=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(i=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),r>a||i>n||((i>r||isNaN(r))&&(r=i),(a<n||isNaN(n))&&(n=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),r>l||o>n)||((o>r||r!==r)&&(r=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,r,n,i){$a.subVectors(t,e),Ts.subVectors(r,e),eo.crossVectors($a,Ts);let a=this.direction.dot(eo),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,e);const l=o*this.direction.dot(Ts.crossVectors(qn,Ts));if(l<0)return null;const c=o*this.direction.dot($a.cross(qn));if(c<0||l+c>a)return null;const u=-o*qn.dot(eo);return u<0?null:this.at(u/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,r,n,i,a,o,l,c,u,h,f,d,g,v,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,n,i,a,o,l,c,u,h,f,d,g,v,m)}set(e,t,r,n,i,a,o,l,c,u,h,f,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=r,p[12]=n,p[1]=i,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,n=1/Li.setFromMatrixColumn(e,0).length(),i=1/Li.setFromMatrixColumn(e,1).length(),a=1/Li.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*i,t[5]=r[5]*i,t[6]=r[6]*i,t[7]=0,t[8]=r[8]*a,t[9]=r[9]*a,t[10]=r[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,i=e.z,a=Math.cos(r),o=Math.sin(r),l=Math.cos(n),c=Math.sin(n),u=Math.cos(i),h=Math.sin(i);if(e.order==="XYZ"){const f=a*u,d=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,v=c*h;t[0]=f+v*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,v=c*h;t[0]=f-v*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-v*h}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zf,e,Qf)}lookAt(e,t,r){const n=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),Yn.crossVectors(r,jt),Yn.lengthSq()===0&&(Math.abs(r.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),Yn.crossVectors(r,jt)),Yn.normalize(),bs.crossVectors(jt,Yn),n[0]=Yn.x,n[4]=bs.x,n[8]=jt.x,n[1]=Yn.y,n[5]=bs.y,n[9]=jt.y,n[2]=Yn.z,n[6]=bs.z,n[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,a=r[0],o=r[4],l=r[8],c=r[12],u=r[1],h=r[5],f=r[9],d=r[13],g=r[2],v=r[6],m=r[10],p=r[14],M=r[3],_=r[7],x=r[11],T=r[15],C=n[0],w=n[4],D=n[8],S=n[12],b=n[1],q=n[5],F=n[9],G=n[13],P=n[2],k=n[6],B=n[10],Y=n[14],ie=n[3],V=n[7],O=n[11],E=n[15];return i[0]=a*C+o*b+l*P+c*ie,i[4]=a*w+o*q+l*k+c*V,i[8]=a*D+o*F+l*B+c*O,i[12]=a*S+o*G+l*Y+c*E,i[1]=u*C+h*b+f*P+d*ie,i[5]=u*w+h*q+f*k+d*V,i[9]=u*D+h*F+f*B+d*O,i[13]=u*S+h*G+f*Y+d*E,i[2]=g*C+v*b+m*P+p*ie,i[6]=g*w+v*q+m*k+p*V,i[10]=g*D+v*F+m*B+p*O,i[14]=g*S+v*G+m*Y+p*E,i[3]=M*C+_*b+x*P+T*ie,i[7]=M*w+_*q+x*k+T*V,i[11]=M*D+_*F+x*B+T*O,i[15]=M*S+_*G+x*Y+T*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],i=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+i*l*h-n*c*h-i*o*f+r*c*f+n*o*d-r*l*d)+v*(+t*l*d-t*c*f+i*a*f-n*a*d+n*c*u-i*l*u)+m*(+t*c*h-t*o*d-i*a*h+r*a*d+i*o*u-r*c*u)+p*(-n*o*u-t*l*h+t*o*f+n*a*h-r*a*f+r*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],M=h*m*c-v*f*c+v*l*d-o*m*d-h*l*p+o*f*p,_=g*f*c-u*m*c-g*l*d+a*m*d+u*l*p-a*f*p,x=u*v*c-g*h*c+g*o*d-a*v*d-u*o*p+a*h*p,T=g*h*l-u*v*l-g*o*f+a*v*f+u*o*m-a*h*m,C=t*M+r*_+n*x+i*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=M*w,e[1]=(v*f*i-h*m*i-v*n*d+r*m*d+h*n*p-r*f*p)*w,e[2]=(o*m*i-v*l*i+v*n*c-r*m*c-o*n*p+r*l*p)*w,e[3]=(h*l*i-o*f*i-h*n*c+r*f*c+o*n*d-r*l*d)*w,e[4]=_*w,e[5]=(u*m*i-g*f*i+g*n*d-t*m*d-u*n*p+t*f*p)*w,e[6]=(g*l*i-a*m*i-g*n*c+t*m*c+a*n*p-t*l*p)*w,e[7]=(a*f*i-u*l*i+u*n*c-t*f*c-a*n*d+t*l*d)*w,e[8]=x*w,e[9]=(g*h*i-u*v*i-g*r*d+t*v*d+u*r*p-t*h*p)*w,e[10]=(a*v*i-g*o*i+g*r*c-t*v*c-a*r*p+t*o*p)*w,e[11]=(u*o*i-a*h*i-u*r*c+t*h*c+a*r*d-t*o*d)*w,e[12]=T*w,e[13]=(u*v*n-g*h*n+g*r*f-t*v*f-u*r*m+t*h*m)*w,e[14]=(g*o*n-a*v*n-g*r*l+t*v*l+a*r*m-t*o*m)*w,e[15]=(a*h*n-u*o*n+u*r*l-t*h*l-a*r*f+t*o*f)*w,this}scale(e){const t=this.elements,r=e.x,n=e.y,i=e.z;return t[0]*=r,t[4]*=n,t[8]*=i,t[1]*=r,t[5]*=n,t[9]*=i,t[2]*=r,t[6]*=n,t[10]*=i,t[3]*=r,t[7]*=n,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),i=1-r,a=e.x,o=e.y,l=e.z,c=i*a,u=i*o;return this.set(c*a+r,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+r,u*l-n*a,0,c*l-n*o,u*l+n*a,i*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,i,a){return this.set(1,r,i,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,i=t._x,a=t._y,o=t._z,l=t._w,c=i+i,u=a+a,h=o+o,f=i*c,d=i*u,g=i*h,v=a*u,m=a*h,p=o*h,M=l*c,_=l*u,x=l*h,T=r.x,C=r.y,w=r.z;return n[0]=(1-(v+p))*T,n[1]=(d+x)*T,n[2]=(g-_)*T,n[3]=0,n[4]=(d-x)*C,n[5]=(1-(f+p))*C,n[6]=(m+M)*C,n[7]=0,n[8]=(g+_)*w,n[9]=(m-M)*w,n[10]=(1-(f+v))*w,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;let i=Li.set(n[0],n[1],n[2]).length();const a=Li.set(n[4],n[5],n[6]).length(),o=Li.set(n[8],n[9],n[10]).length();this.determinant()<0&&(i=-i),e.x=n[12],e.y=n[13],e.z=n[14],un.copy(this);const c=1/i,u=1/a,h=1/o;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=h,un.elements[9]*=h,un.elements[10]*=h,t.setFromRotationMatrix(un),r.x=i,r.y=a,r.z=o,this}makePerspective(e,t,r,n,i,a,o=In){const l=this.elements,c=2*i/(t-e),u=2*i/(r-n),h=(t+e)/(t-e),f=(r+n)/(r-n);let d,g;if(o===In)d=-(a+i)/(a-i),g=-2*a*i/(a-i);else if(o===la)d=-a/(a-i),g=-a*i/(a-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,n,i,a,o=In){const l=this.elements,c=1/(t-e),u=1/(r-n),h=1/(a-i),f=(t+e)*c,d=(r+n)*u;let g,v;if(o===In)g=(a+i)*h,v=-2*h;else if(o===la)g=i*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Li=new I,un=new mt,Zf=new I(0,0,0),Qf=new I(1,1,1),Yn=new I,bs=new I,jt=new I,Mc=new mt,Ec=new ls;class xa{constructor(e=0,t=0,r=0,n=xa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,i=n[0],a=n[4],o=n[8],l=n[1],c=n[5],u=n[9],h=n[2],f=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,i),this._z=0);break;case"ZXY":this._x=Math.asin(At(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,i)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Mc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mc,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ec.setFromEuler(this),this.setFromQuaternion(Ec,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xa.DEFAULT_ORDER="XYZ";class ya{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $f=0;const Tc=new I,Ui=new ls,Rn=new mt,ws=new I,Nr=new I,ed=new I,td=new ls,bc=new I(1,0,0),wc=new I(0,1,0),Ac=new I(0,0,1),nd={type:"added"},id={type:"removed"};class gt extends cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new I,t=new xa,r=new ls,n=new I(1,1,1);function i(){r.setFromEuler(t,!1)}function a(){t.setFromQuaternion(r,void 0,!1)}t._onChange(i),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new mt},normalMatrix:{value:new Qe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.premultiply(Ui),this}rotateX(e){return this.rotateOnAxis(bc,e)}rotateY(e){return this.rotateOnAxis(wc,e)}rotateZ(e){return this.rotateOnAxis(Ac,e)}translateOnAxis(e,t){return Tc.copy(e).applyQuaternion(this.quaternion),this.position.add(Tc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bc,e)}translateY(e){return this.translateOnAxis(wc,e)}translateZ(e){return this.translateOnAxis(Ac,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?ws.copy(e):ws.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(Nr,ws,this.up):Rn.lookAt(ws,Nr,this.up),this.quaternion.setFromRotationMatrix(Rn),n&&(Rn.extractRotation(n.matrixWorld),Ui.setFromRotationMatrix(Rn),this.quaternion.premultiply(Ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(nd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(id)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const a=this.children[r].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let r=[];this[e]===t&&r.push(this);for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectsByProperty(e,t);a.length>0&&(r=r.concat(a))}return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,e,ed),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,td,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++){const i=t[r];(i.matrixWorldAutoUpdate===!0||e===!0)&&i.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let i=0,a=n.length;i<a;i++){const o=n[i];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function i(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=i(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];i(e.shapes,h)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(i(e.materials,this.material[l]));n.material=o}else n.material=i(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(i(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),h.length>0&&(r.shapes=h),f.length>0&&(r.skeletons=f),d.length>0&&(r.animations=d),g.length>0&&(r.nodes=g)}return r.object=n,r;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}gt.DEFAULT_UP=new I(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new I,Pn=new I,to=new I,Ln=new I,Di=new I,Fi=new I,Cc=new I,no=new I,io=new I,ro=new I;let As=!1;class fn{constructor(e=new I,t=new I,r=new I){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),hn.subVectors(e,t),n.cross(hn);const i=n.lengthSq();return i>0?n.multiplyScalar(1/Math.sqrt(i)):n.set(0,0,0)}static getBarycoord(e,t,r,n,i){hn.subVectors(n,t),Pn.subVectors(r,t),to.subVectors(e,t);const a=hn.dot(hn),o=hn.dot(Pn),l=hn.dot(to),c=Pn.dot(Pn),u=Pn.dot(to),h=a*c-o*o;if(h===0)return i.set(-2,-1,-1);const f=1/h,d=(c*l-o*u)*f,g=(a*u-o*l)*f;return i.set(1-d-g,g,d)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,Ln),Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getUV(e,t,r,n,i,a,o,l){return As===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),As=!0),this.getInterpolation(e,t,r,n,i,a,o,l)}static getInterpolation(e,t,r,n,i,a,o,l){return this.getBarycoord(e,t,r,n,Ln),l.setScalar(0),l.addScaledVector(i,Ln.x),l.addScaledVector(a,Ln.y),l.addScaledVector(o,Ln.z),l}static isFrontFacing(e,t,r,n){return hn.subVectors(r,t),Pn.subVectors(e,t),hn.cross(Pn).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),hn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,n,i){return As===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),As=!0),fn.getInterpolation(e,this.a,this.b,this.c,t,r,n,i)}getInterpolation(e,t,r,n,i){return fn.getInterpolation(e,this.a,this.b,this.c,t,r,n,i)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,i=this.c;let a,o;Di.subVectors(n,r),Fi.subVectors(i,r),no.subVectors(e,r);const l=Di.dot(no),c=Fi.dot(no);if(l<=0&&c<=0)return t.copy(r);io.subVectors(e,n);const u=Di.dot(io),h=Fi.dot(io);if(u>=0&&h<=u)return t.copy(n);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(r).addScaledVector(Di,a);ro.subVectors(e,i);const d=Di.dot(ro),g=Fi.dot(ro);if(g>=0&&d<=g)return t.copy(i);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(r).addScaledVector(Fi,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Cc.subVectors(i,n),o=(h-u)/(h-u+(d-g)),t.copy(n).addScaledVector(Cc,o);const p=1/(m+v+f);return a=v*p,o=f*p,t.copy(r).addScaledVector(Di,a).addScaledVector(Fi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function so(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Je{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,n=tt.workingColorSpace){return this.r=e,this.g=t,this.b=r,tt.toWorkingColorSpace(this,n),this}setHSL(e,t,r,n=tt.workingColorSpace){if(e=Vf(e,1),t=At(t,0,1),r=At(r,0,1),t===0)this.r=this.g=this.b=r;else{const i=r<=.5?r*(1+t):r+t-r*t,a=2*r-i;this.r=so(a,i,e+1/3),this.g=so(a,i,e),this.b=so(a,i,e-1/3)}return tt.toWorkingColorSpace(this,n),this}setStyle(e,t=xt){function r(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],a=i.length;if(a===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){const r=$u[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=Ya(e.r),this.g=Ya(e.g),this.b=Ya(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return tt.fromWorkingColorSpace(Pt.copy(this),e),Math.round(At(Pt.r*255,0,255))*65536+Math.round(At(Pt.g*255,0,255))*256+Math.round(At(Pt.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Pt.copy(this),t);const r=Pt.r,n=Pt.g,i=Pt.b,a=Math.max(r,n,i),o=Math.min(r,n,i);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case r:l=(n-i)/h+(n<i?6:0);break;case n:l=(i-r)/h+2;break;case i:l=(r-n)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=xt){tt.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,r=Pt.g,n=Pt.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+t,jn.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(Cs);const r=Xa(jn.h,Cs.h,t),n=Xa(jn.s,Cs.s,t),i=Xa(jn.l,Cs.l,t);return this.setHSL(r,n,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,n=this.b,i=e.elements;return this.r=i[0]*t+i[3]*r+i[6]*n,this.g=i[1]*t+i[4]*r+i[7]*n,this.b=i[2]*t+i[5]*r+i[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new Je;Je.NAMES=$u;let rd=0;class fr extends cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=ur(),this.name="",this.type="Material",this.blending=Ki,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Po,this.blendDst=Lo,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(r.blending=this.blending),this.side!==zn&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Po&&(r.blendSrc=this.blendSrc),this.blendDst!==Lo&&(r.blendDst=this.blendDst),this.blendEquation!==mi&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ra&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pc&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(r.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(i){const a=[];for(const o in i){const l=i[o];delete l.metadata,a.push(l)}return a}if(t){const i=n(e.textures),a=n(e.images);i.length>0&&(r.textures=i),a.length>0&&(r.images=a)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let i=0;i!==n;++i)r[i]=t[i].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class st extends fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new I,Rs=new be;class vn{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=mc,this.updateRange={offset:0,count:-1},this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,i=this.itemSize;n<i;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Rs.fromBufferAttribute(this,t),Rs.applyMatrix3(e),this.setXY(t,Rs.x,Rs.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Dr(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Vt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),r=Vt(r,this.array),n=Vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),r=Vt(r,this.array),n=Vt(n,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class eh extends vn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class th extends vn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Ut extends vn{constructor(e,t,r){super(new Float32Array(e),t,r)}}let sd=0;const Zt=new mt,ao=new gt,Ii=new I,Jt=new hr,Or=new hr,Et=new I;class Xt extends cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=ur(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ju(e)?th:eh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const i=new Qe().getNormalMatrix(e);r.applyNormalMatrix(i),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,r){return Zt.makeTranslation(e,t,r),this.applyMatrix4(Zt),this}scale(e,t,r){return Zt.makeScale(e,t,r),this.applyMatrix4(Zt),this}lookAt(e){return ao.lookAt(e),ao.updateMatrix(),this.applyMatrix4(ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(e){const t=[];for(let r=0,n=e.length;r<n;r++){const i=e[r];t.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new Ut(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const i=t[r];Jt.setFromBufferAttribute(i),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const r=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const o=t[i];Or.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Jt.min,Or.min),Jt.expandByPoint(Et),Et.addVectors(Jt.max,Or.max),Jt.expandByPoint(Et)):(Jt.expandByPoint(Or.min),Jt.expandByPoint(Or.max))}Jt.getCenter(r);let n=0;for(let i=0,a=e.count;i<a;i++)Et.fromBufferAttribute(e,i),n=Math.max(n,r.distanceToSquared(Et));if(t)for(let i=0,a=t.length;i<a;i++){const o=t[i],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Et.fromBufferAttribute(o,c),l&&(Ii.fromBufferAttribute(e,c),Et.add(Ii)),n=Math.max(n,r.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,n=t.position.array,i=t.normal.array,a=t.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<o;b++)c[b]=new I,u[b]=new I;const h=new I,f=new I,d=new I,g=new be,v=new be,m=new be,p=new I,M=new I;function _(b,q,F){h.fromArray(n,b*3),f.fromArray(n,q*3),d.fromArray(n,F*3),g.fromArray(a,b*2),v.fromArray(a,q*2),m.fromArray(a,F*2),f.sub(h),d.sub(h),v.sub(g),m.sub(g);const G=1/(v.x*m.y-m.x*v.y);isFinite(G)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-v.y).multiplyScalar(G),M.copy(d).multiplyScalar(v.x).addScaledVector(f,-m.x).multiplyScalar(G),c[b].add(p),c[q].add(p),c[F].add(p),u[b].add(M),u[q].add(M),u[F].add(M))}let x=this.groups;x.length===0&&(x=[{start:0,count:r.length}]);for(let b=0,q=x.length;b<q;++b){const F=x[b],G=F.start,P=F.count;for(let k=G,B=G+P;k<B;k+=3)_(r[k+0],r[k+1],r[k+2])}const T=new I,C=new I,w=new I,D=new I;function S(b){w.fromArray(i,b*3),D.copy(w);const q=c[b];T.copy(q),T.sub(w.multiplyScalar(w.dot(q))).normalize(),C.crossVectors(D,q);const G=C.dot(u[b])<0?-1:1;l[b*4]=T.x,l[b*4+1]=T.y,l[b*4+2]=T.z,l[b*4+3]=G}for(let b=0,q=x.length;b<q;++b){const F=x[b],G=F.start,P=F.count;for(let k=G,B=G+P;k<B;k+=3)S(r[k+0]),S(r[k+1]),S(r[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let f=0,d=r.count;f<d;f++)r.setXYZ(f,0,0,0);const n=new I,i=new I,a=new I,o=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);n.fromBufferAttribute(t,g),i.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,i),h.subVectors(n,i),u.cross(h),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,v),c.fromBufferAttribute(r,m),o.add(u),l.add(u),c.add(u),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)n.fromBufferAttribute(t,f+0),i.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,i),h.subVectors(n,i),u.cross(h),r.setXYZ(f+0,u.x,u.y,u.z),r.setXYZ(f+1,u.x,u.y,u.z),r.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new vn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,r=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,r);t.setAttribute(o,c)}const i=this.morphAttributes;for(const o in i){const l=[],c=i[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,r);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let i=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(n[l]=u,i=!0)}i&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const i=e.morphAttributes;for(const c in i){const u=[],h=i[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rc=new mt,ci=new dl,Ps=new cs,Pc=new I,Ni=new I,Oi=new I,Bi=new I,oo=new I,Ls=new I,Us=new be,Ds=new be,Fs=new be,Lc=new I,Uc=new I,Dc=new I,Is=new I,Ns=new I;class et extends gt{constructor(e=new Xt,t=new st){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=n.length;i<a;i++){const o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}getVertexPosition(e,t){const r=this.geometry,n=r.attributes.position,i=r.morphAttributes.position,a=r.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(i&&o){Ls.set(0,0,0);for(let l=0,c=i.length;l<c;l++){const u=o[l],h=i[l];u!==0&&(oo.fromBufferAttribute(h,e),a?Ls.addScaledVector(oo,u):Ls.addScaledVector(oo.sub(t),u))}t.add(Ls)}return t}raycast(e,t){const r=this.geometry,n=this.material,i=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ps.copy(r.boundingSphere),Ps.applyMatrix4(i),ci.copy(e.ray).recast(e.near),!(Ps.containsPoint(ci.origin)===!1&&(ci.intersectSphere(Ps,Pc)===null||ci.origin.distanceToSquared(Pc)>(e.far-e.near)**2))&&(Rc.copy(i).invert(),ci.copy(e.ray).applyMatrix4(Rc),!(r.boundingBox!==null&&ci.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ci)))}_computeIntersections(e,t,r){let n;const i=this.geometry,a=this.material,o=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv1,h=i.attributes.normal,f=i.groups,d=i.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),_=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=M,T=_;x<T;x+=3){const C=o.getX(x),w=o.getX(x+1),D=o.getX(x+2);n=Os(this,p,e,r,c,u,h,C,w,D),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const M=o.getX(m),_=o.getX(m+1),x=o.getX(m+2);n=Os(this,a,e,r,c,u,h,M,_,x),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=M,T=_;x<T;x+=3){const C=x,w=x+1,D=x+2;n=Os(this,p,e,r,c,u,h,C,w,D),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const M=m,_=m+1,x=m+2;n=Os(this,a,e,r,c,u,h,M,_,x),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function ad(s,e,t,r,n,i,a,o){let l;if(e.side===Nt?l=r.intersectTriangle(a,i,n,!0,o):l=r.intersectTriangle(n,i,a,e.side===zn,o),l===null)return null;Ns.copy(o),Ns.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ns);return c<t.near||c>t.far?null:{distance:c,point:Ns.clone(),object:s}}function Os(s,e,t,r,n,i,a,o,l,c){s.getVertexPosition(o,Ni),s.getVertexPosition(l,Oi),s.getVertexPosition(c,Bi);const u=ad(s,e,t,r,Ni,Oi,Bi,Is);if(u){n&&(Us.fromBufferAttribute(n,o),Ds.fromBufferAttribute(n,l),Fs.fromBufferAttribute(n,c),u.uv=fn.getInterpolation(Is,Ni,Oi,Bi,Us,Ds,Fs,new be)),i&&(Us.fromBufferAttribute(i,o),Ds.fromBufferAttribute(i,l),Fs.fromBufferAttribute(i,c),u.uv1=fn.getInterpolation(Is,Ni,Oi,Bi,Us,Ds,Fs,new be),u.uv2=u.uv1),a&&(Lc.fromBufferAttribute(a,o),Uc.fromBufferAttribute(a,l),Dc.fromBufferAttribute(a,c),u.normal=fn.getInterpolation(Is,Ni,Oi,Bi,Lc,Uc,Dc,new I),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new I,materialIndex:0};fn.getNormal(Ni,Oi,Bi,h.normal),u.face=h}return u}class Tn extends Xt{constructor(e=1,t=1,r=1,n=1,i=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:i,depthSegments:a};const o=this;n=Math.floor(n),i=Math.floor(i),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,r,t,e,a,i,0),g("z","y","x",1,-1,r,t,-e,a,i,1),g("x","z","y",1,1,e,r,t,n,a,2),g("x","z","y",1,-1,e,r,-t,n,a,3),g("x","y","z",1,-1,e,t,r,n,i,4),g("x","y","z",-1,-1,e,t,-r,n,i,5),this.setIndex(l),this.setAttribute("position",new Ut(c,3)),this.setAttribute("normal",new Ut(u,3)),this.setAttribute("uv",new Ut(h,2));function g(v,m,p,M,_,x,T,C,w,D,S){const b=x/w,q=T/D,F=x/2,G=T/2,P=C/2,k=w+1,B=D+1;let Y=0,ie=0;const V=new I;for(let O=0;O<B;O++){const E=O*q-G;for(let U=0;U<k;U++){const H=U*b-F;V[v]=H*M,V[m]=E*_,V[p]=P,c.push(V.x,V.y,V.z),V[v]=0,V[m]=0,V[p]=C>0?1:-1,u.push(V.x,V.y,V.z),h.push(U/w),h.push(1-O/D),Y+=1}}for(let O=0;O<D;O++)for(let E=0;E<w;E++){const U=f+E+k*O,H=f+E+k*(O+1),X=f+(E+1)+k*(O+1),W=f+(E+1)+k*O;l.push(U,H,W),l.push(H,X,W),ie+=6}o.addGroup(d,ie,S),d+=ie,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function sr(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const n=s[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function Dt(s){const e={};for(let t=0;t<s.length;t++){const r=sr(s[t]);for(const n in r)e[n]=r[n]}return e}function od(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function nh(s){return s.getRenderTarget()===null?s.outputColorSpace:tt.workingColorSpace}const ar={clone:sr,merge:Dt};var ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class It extends fr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ld,this.fragmentShader=cd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sr(e.uniforms),this.uniformsGroups=od(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class ih extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=In}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class $t extends ih{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Oo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oo*2*Math.atan(Math.tan(Wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,n,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wa*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,i=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;i+=a.offsetX*n/l,t-=a.offsetY*r/c,n*=a.width/l,r*=a.height/c}const o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+n,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zi=-90,ki=1;class ud extends gt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new $t(zi,ki,e,t);n.layers=this.layers,this.add(n);const i=new $t(zi,ki,e,t);i.layers=this.layers,this.add(i);const a=new $t(zi,ki,e,t);a.layers=this.layers,this.add(a);const o=new $t(zi,ki,e,t);o.layers=this.layers,this.add(o);const l=new $t(zi,ki,e,t);l.layers=this.layers,this.add(l);const c=new $t(zi,ki,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,n,i,a,o,l]=t;for(const c of t)this.remove(c);if(e===In)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===la)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,n),e.render(t,i),e.setRenderTarget(r,1,n),e.render(t,a),e.setRenderTarget(r,2,n),e.render(t,o),e.setRenderTarget(r,3,n),e.render(t,l),e.setRenderTarget(r,4,n),e.render(t,c),r.texture.generateMipmaps=v,e.setRenderTarget(r,5,n),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,r.texture.needsPMREMUpdate=!0}}class rh extends Ot{constructor(e,t,r,n,i,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:nr,super(e,t,r,n,i,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hd extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];t.encoding!==void 0&&(Xr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===yi?xt:en),this.texture=new rh(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Tn(5,5,5),i=new It({name:"CubemapFromEquirect",uniforms:sr(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Nt,blending:Nn});i.uniforms.tEquirect.value=t;const a=new et(n,i),o=t.minFilter;return t.minFilter===$r&&(t.minFilter=Wt),new ud(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,r,n){const i=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,r,n);e.setRenderTarget(i)}}const lo=new I,fd=new I,dd=new Qe;class di{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=lo.subVectors(r,t).cross(fd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(lo),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/n;return i<0||i>1?null:t.copy(e.start).addScaledVector(r,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||dd.getNormalMatrix(e),n=this.coplanarPoint(lo).applyMatrix4(e),i=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new cs,Bs=new I;class pl{constructor(e=new di,t=new di,r=new di,n=new di,i=new di,a=new di){this.planes=[e,t,r,n,i,a]}set(e,t,r,n,i,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(n),o[4].copy(i),o[5].copy(a),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=In){const r=this.planes,n=e.elements,i=n[0],a=n[1],o=n[2],l=n[3],c=n[4],u=n[5],h=n[6],f=n[7],d=n[8],g=n[9],v=n[10],m=n[11],p=n[12],M=n[13],_=n[14],x=n[15];if(r[0].setComponents(l-i,f-c,m-d,x-p).normalize(),r[1].setComponents(l+i,f+c,m+d,x+p).normalize(),r[2].setComponents(l+a,f+u,m+g,x+M).normalize(),r[3].setComponents(l-a,f-u,m-g,x-M).normalize(),r[4].setComponents(l-o,f-h,m-v,x-_).normalize(),t===In)r[5].setComponents(l+o,f+h,m+v,x+_).normalize();else if(t===la)r[5].setComponents(o,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){return ui.center.set(0,0,0),ui.radius=.7071067811865476,ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(Bs.x=n.normal.x>0?e.max.x:e.min.x,Bs.y=n.normal.y>0?e.max.y:e.min.y,Bs.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sh(){let s=null,e=!1,t=null,r=null;function n(i,a){t(i,a),r=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){s=i}}}function pd(s,e){const t=e.isWebGL2,r=new WeakMap;function n(c,u){const h=c.array,f=c.usage,d=s.createBuffer();s.bindBuffer(u,d),s.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=s.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=s.SHORT;else if(h instanceof Uint32Array)g=s.UNSIGNED_INT;else if(h instanceof Int32Array)g=s.INT;else if(h instanceof Int8Array)g=s.BYTE;else if(h instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function i(c,u,h){const f=u.array,d=u.updateRange;s.bindBuffer(h,c),d.count===-1?s.bufferSubData(h,0,f):(t?s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),r.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=r.get(c);u&&(s.deleteBuffer(u.buffer),r.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=r.get(c);(!f||f.version<c.version)&&r.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=r.get(c);h===void 0?r.set(c,n(c,u)):h.version<c.version&&(i(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class Kt extends Xt{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const i=e/2,a=t/2,o=Math.floor(r),l=Math.floor(n),c=o+1,u=l+1,h=e/o,f=t/l,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const M=p*f-a;for(let _=0;_<c;_++){const x=_*h-i;g.push(x,-M,0),v.push(0,0,1),m.push(_/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const _=M+c*p,x=M+c*(p+1),T=M+1+c*(p+1),C=M+1+c*p;d.push(_,x,C),d.push(x,T,C)}this.setIndex(d),this.setAttribute("position",new Ut(g,3)),this.setAttribute("normal",new Ut(v,3)),this.setAttribute("uv",new Ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kt(e.width,e.height,e.widthSegments,e.heightSegments)}}var md=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gd=`#ifdef USE_ALPHAHASH
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
#endif`,vd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sd=`#ifdef USE_AOMAP
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
#endif`,Md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ed=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Td=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wd=`#ifdef USE_IRIDESCENCE
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
#endif`,Ad=`#ifdef USE_BUMPMAP
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
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Nd=`#define PI 3.141592653589793
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
} // validated`,Od=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bd=`vec3 transformedNormal = objectNormal;
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
#endif`,zd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wd=`
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
}`,Xd=`#ifdef USE_ENVMAP
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
#endif`,qd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yd=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jd=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$d=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ep=`#ifdef USE_GRADIENTMAP
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
}`,tp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,np=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sp=`uniform bool receiveShadow;
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
#endif`,ap=`#ifdef USE_ENVMAP
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
#endif`,op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hp=`PhysicalMaterial material;
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
#endif`,fp=`struct PhysicalMaterial {
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
}`,dp=`
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
#endif`,pp=`#if defined( RE_IndirectDiffuse )
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
#endif`,mp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_p=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,xp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,yp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ep=`#if defined( USE_POINTS_UV )
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
#endif`,Tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ap=`#ifdef USE_MORPHNORMALS
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
#endif`,Cp=`#ifdef USE_MORPHTARGETS
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
#endif`,Rp=`#ifdef USE_MORPHTARGETS
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
#endif`,Pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ip=`#ifdef USE_NORMALMAP
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
#endif`,Np=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zp=`float getShadowMask() {
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
}`,Qp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$p=`#ifdef USE_SKINNING
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
#endif`,em=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,am=`#ifdef USE_TRANSMISSION
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
#endif`,om=`#ifdef USE_TRANSMISSION
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dm=`uniform sampler2D t2D;
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
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`#include <common>
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
}`,xm=`#if DEPTH_PACKING == 3200
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
}`,ym=`#define DISTANCE
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
}`,Sm=`#define DISTANCE
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`uniform float scale;
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
}`,bm=`uniform vec3 diffuse;
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
}`,wm=`#include <common>
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
}`,Am=`uniform vec3 diffuse;
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
}`,Cm=`#define LAMBERT
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
}`,Rm=`#define LAMBERT
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
}`,Pm=`#define MATCAP
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
}`,Lm=`#define MATCAP
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
}`,Um=`#define NORMAL
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
}`,Dm=`#define NORMAL
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
}`,Fm=`#define PHONG
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
}`,Im=`#define PHONG
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
}`,Nm=`#define STANDARD
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
}`,Om=`#define STANDARD
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
}`,Bm=`#define TOON
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
}`,zm=`#define TOON
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
}`,km=`uniform float size;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Hm=`#include <common>
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
}`,Vm=`uniform vec3 color;
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
}`,Wm=`uniform float rotation;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:md,alphahash_pars_fragment:gd,alphamap_fragment:vd,alphamap_pars_fragment:_d,alphatest_fragment:xd,alphatest_pars_fragment:yd,aomap_fragment:Sd,aomap_pars_fragment:Md,begin_vertex:Ed,beginnormal_vertex:Td,bsdfs:bd,iridescence_fragment:wd,bumpmap_pars_fragment:Ad,clipping_planes_fragment:Cd,clipping_planes_pars_fragment:Rd,clipping_planes_pars_vertex:Pd,clipping_planes_vertex:Ld,color_fragment:Ud,color_pars_fragment:Dd,color_pars_vertex:Fd,color_vertex:Id,common:Nd,cube_uv_reflection_fragment:Od,defaultnormal_vertex:Bd,displacementmap_pars_vertex:zd,displacementmap_vertex:kd,emissivemap_fragment:Gd,emissivemap_pars_fragment:Hd,colorspace_fragment:Vd,colorspace_pars_fragment:Wd,envmap_fragment:Xd,envmap_common_pars_fragment:qd,envmap_pars_fragment:Yd,envmap_pars_vertex:jd,envmap_physical_pars_fragment:ap,envmap_vertex:Jd,fog_vertex:Kd,fog_pars_vertex:Zd,fog_fragment:Qd,fog_pars_fragment:$d,gradientmap_pars_fragment:ep,lightmap_fragment:tp,lightmap_pars_fragment:np,lights_lambert_fragment:ip,lights_lambert_pars_fragment:rp,lights_pars_begin:sp,lights_toon_fragment:op,lights_toon_pars_fragment:lp,lights_phong_fragment:cp,lights_phong_pars_fragment:up,lights_physical_fragment:hp,lights_physical_pars_fragment:fp,lights_fragment_begin:dp,lights_fragment_maps:pp,lights_fragment_end:mp,logdepthbuf_fragment:gp,logdepthbuf_pars_fragment:vp,logdepthbuf_pars_vertex:_p,logdepthbuf_vertex:xp,map_fragment:yp,map_pars_fragment:Sp,map_particle_fragment:Mp,map_particle_pars_fragment:Ep,metalnessmap_fragment:Tp,metalnessmap_pars_fragment:bp,morphcolor_vertex:wp,morphnormal_vertex:Ap,morphtarget_pars_vertex:Cp,morphtarget_vertex:Rp,normal_fragment_begin:Pp,normal_fragment_maps:Lp,normal_pars_fragment:Up,normal_pars_vertex:Dp,normal_vertex:Fp,normalmap_pars_fragment:Ip,clearcoat_normal_fragment_begin:Np,clearcoat_normal_fragment_maps:Op,clearcoat_pars_fragment:Bp,iridescence_pars_fragment:zp,opaque_fragment:kp,packing:Gp,premultiplied_alpha_fragment:Hp,project_vertex:Vp,dithering_fragment:Wp,dithering_pars_fragment:Xp,roughnessmap_fragment:qp,roughnessmap_pars_fragment:Yp,shadowmap_pars_fragment:jp,shadowmap_pars_vertex:Jp,shadowmap_vertex:Kp,shadowmask_pars_fragment:Zp,skinbase_vertex:Qp,skinning_pars_vertex:$p,skinning_vertex:em,skinnormal_vertex:tm,specularmap_fragment:nm,specularmap_pars_fragment:im,tonemapping_fragment:rm,tonemapping_pars_fragment:sm,transmission_fragment:am,transmission_pars_fragment:om,uv_pars_fragment:lm,uv_pars_vertex:cm,uv_vertex:um,worldpos_vertex:hm,background_vert:fm,background_frag:dm,backgroundCube_vert:pm,backgroundCube_frag:mm,cube_vert:gm,cube_frag:vm,depth_vert:_m,depth_frag:xm,distanceRGBA_vert:ym,distanceRGBA_frag:Sm,equirect_vert:Mm,equirect_frag:Em,linedashed_vert:Tm,linedashed_frag:bm,meshbasic_vert:wm,meshbasic_frag:Am,meshlambert_vert:Cm,meshlambert_frag:Rm,meshmatcap_vert:Pm,meshmatcap_frag:Lm,meshnormal_vert:Um,meshnormal_frag:Dm,meshphong_vert:Fm,meshphong_frag:Im,meshphysical_vert:Nm,meshphysical_frag:Om,meshtoon_vert:Bm,meshtoon_frag:zm,points_vert:km,points_frag:Gm,shadow_vert:Hm,shadow_frag:Vm,sprite_vert:Wm,sprite_frag:Xm},De={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Sn={basic:{uniforms:Dt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Dt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Dt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Dt([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Dt([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Dt([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Dt([De.points,De.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Dt([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Dt([De.common,De.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Dt([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Dt([De.sprite,De.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Dt([De.common,De.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Dt([De.lights,De.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Sn.physical={uniforms:Dt([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const zs={r:0,b:0,g:0};function qm(s,e,t,r,n,i,a){const o=new Je(0);let l=i===!0?0:1,c,u,h=null,f=0,d=null;function g(m,p){let M=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?v(o,l):_&&_.isColor&&(v(_,1),M=!0);const x=s.xr.getEnvironmentBlendMode();x==="additive"?r.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===va)?(u===void 0&&(u=new et(new Tn(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:sr(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=tt.getTransfer(_.colorSpace)!==ot,(h!==_||f!==_.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,d=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new et(new Kt(2,2),new It({name:"BackgroundMaterial",uniforms:sr(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=tt.getTransfer(_.colorSpace)!==ot,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,d=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,p){m.getRGB(zs,nh(s)),r.buffers.color.setClear(zs.r,zs.g,zs.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:g}}function Ym(s,e,t,r){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),i=r.isWebGL2?null:e.get("OES_vertex_array_object"),a=r.isWebGL2||i!==null,o={},l=m(null);let c=l,u=!1;function h(P,k,B,Y,ie){let V=!1;if(a){const O=v(Y,B,k);c!==O&&(c=O,d(c.object)),V=p(P,Y,B,ie),V&&M(P,Y,B,ie)}else{const O=k.wireframe===!0;(c.geometry!==Y.id||c.program!==B.id||c.wireframe!==O)&&(c.geometry=Y.id,c.program=B.id,c.wireframe=O,V=!0)}ie!==null&&t.update(ie,s.ELEMENT_ARRAY_BUFFER),(V||u)&&(u=!1,D(P,k,B,Y),ie!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ie).buffer))}function f(){return r.isWebGL2?s.createVertexArray():i.createVertexArrayOES()}function d(P){return r.isWebGL2?s.bindVertexArray(P):i.bindVertexArrayOES(P)}function g(P){return r.isWebGL2?s.deleteVertexArray(P):i.deleteVertexArrayOES(P)}function v(P,k,B){const Y=B.wireframe===!0;let ie=o[P.id];ie===void 0&&(ie={},o[P.id]=ie);let V=ie[k.id];V===void 0&&(V={},ie[k.id]=V);let O=V[Y];return O===void 0&&(O=m(f()),V[Y]=O),O}function m(P){const k=[],B=[],Y=[];for(let ie=0;ie<n;ie++)k[ie]=0,B[ie]=0,Y[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:B,attributeDivisors:Y,object:P,attributes:{},index:null}}function p(P,k,B,Y){const ie=c.attributes,V=k.attributes;let O=0;const E=B.getAttributes();for(const U in E)if(E[U].location>=0){const X=ie[U];let W=V[U];if(W===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(W=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(W=P.instanceColor)),X===void 0||X.attribute!==W||W&&X.data!==W.data)return!0;O++}return c.attributesNum!==O||c.index!==Y}function M(P,k,B,Y){const ie={},V=k.attributes;let O=0;const E=B.getAttributes();for(const U in E)if(E[U].location>=0){let X=V[U];X===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(X=P.instanceColor));const W={};W.attribute=X,X&&X.data&&(W.data=X.data),ie[U]=W,O++}c.attributes=ie,c.attributesNum=O,c.index=Y}function _(){const P=c.newAttributes;for(let k=0,B=P.length;k<B;k++)P[k]=0}function x(P){T(P,0)}function T(P,k){const B=c.newAttributes,Y=c.enabledAttributes,ie=c.attributeDivisors;B[P]=1,Y[P]===0&&(s.enableVertexAttribArray(P),Y[P]=1),ie[P]!==k&&((r.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,k),ie[P]=k)}function C(){const P=c.newAttributes,k=c.enabledAttributes;for(let B=0,Y=k.length;B<Y;B++)k[B]!==P[B]&&(s.disableVertexAttribArray(B),k[B]=0)}function w(P,k,B,Y,ie,V,O){O===!0?s.vertexAttribIPointer(P,k,B,ie,V):s.vertexAttribPointer(P,k,B,Y,ie,V)}function D(P,k,B,Y){if(r.isWebGL2===!1&&(P.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const ie=Y.attributes,V=B.getAttributes(),O=k.defaultAttributeValues;for(const E in V){const U=V[E];if(U.location>=0){let H=ie[E];if(H===void 0&&(E==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),E==="instanceColor"&&P.instanceColor&&(H=P.instanceColor)),H!==void 0){const X=H.normalized,W=H.itemSize,re=t.get(H);if(re===void 0)continue;const K=re.buffer,ne=re.type,ve=re.bytesPerElement,we=r.isWebGL2===!0&&(ne===s.INT||ne===s.UNSIGNED_INT||H.gpuType===ku);if(H.isInterleavedBufferAttribute){const he=H.data,R=he.stride,de=H.offset;if(he.isInstancedInterleavedBuffer){for(let J=0;J<U.locationSize;J++)T(U.location+J,he.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let J=0;J<U.locationSize;J++)x(U.location+J);s.bindBuffer(s.ARRAY_BUFFER,K);for(let J=0;J<U.locationSize;J++)w(U.location+J,W/U.locationSize,ne,X,R*ve,(de+W/U.locationSize*J)*ve,we)}else{if(H.isInstancedBufferAttribute){for(let he=0;he<U.locationSize;he++)T(U.location+he,H.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let he=0;he<U.locationSize;he++)x(U.location+he);s.bindBuffer(s.ARRAY_BUFFER,K);for(let he=0;he<U.locationSize;he++)w(U.location+he,W/U.locationSize,ne,X,W*ve,W/U.locationSize*he*ve,we)}}else if(O!==void 0){const X=O[E];if(X!==void 0)switch(X.length){case 2:s.vertexAttrib2fv(U.location,X);break;case 3:s.vertexAttrib3fv(U.location,X);break;case 4:s.vertexAttrib4fv(U.location,X);break;default:s.vertexAttrib1fv(U.location,X)}}}}C()}function S(){F();for(const P in o){const k=o[P];for(const B in k){const Y=k[B];for(const ie in Y)g(Y[ie].object),delete Y[ie];delete k[B]}delete o[P]}}function b(P){if(o[P.id]===void 0)return;const k=o[P.id];for(const B in k){const Y=k[B];for(const ie in Y)g(Y[ie].object),delete Y[ie];delete k[B]}delete o[P.id]}function q(P){for(const k in o){const B=o[k];if(B[P.id]===void 0)continue;const Y=B[P.id];for(const ie in Y)g(Y[ie].object),delete Y[ie];delete B[P.id]}}function F(){G(),u=!0,c!==l&&(c=l,d(c.object))}function G(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:F,resetDefaultState:G,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfProgram:q,initAttributes:_,enableAttribute:x,disableUnusedAttributes:C}}function jm(s,e,t,r){const n=r.isWebGL2;let i;function a(c){i=c}function o(c,u){s.drawArrays(i,c,u),t.update(u,i,1)}function l(c,u,h){if(h===0)return;let f,d;if(n)f=s,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](i,c,u,h),t.update(u,i,h)}this.setMode=a,this.render=o,this.renderInstances=l}function Jm(s,e,t){let r;function n(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function i(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=i(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,x=a||e.has("OES_texture_float"),T=_&&x,C=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:i,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:T,maxSamples:C}}function Km(s){const e=this;let t=null,r=0,n=!1,i=!1;const a=new di,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||r!==0||n;return n=f,r=h.length,d},this.beginShadows=function(){i=!0,u(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!n||g===null||g.length===0||i&&!m)i?u(null):c();else{const M=i?0:r,_=M*4;let x=p.clippingState||null;l.value=x,x=u(g,f,_,d);for(let T=0;T!==_;++T)x[T]=t[T];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(h,f,d,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,x=d;_!==v;++_,x+=4)a.copy(h[_]).applyMatrix4(M,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Zm(s){let e=new WeakMap;function t(a,o){return o===Uo?a.mapping=nr:o===Do&&(a.mapping=ir),a}function r(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Uo||o===Do)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new hd(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function i(){e=new WeakMap}return{get:r,dispose:i}}class ml extends ih{constructor(e=-1,t=1,r=1,n=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let i=r-e,a=r+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=c*this.view.offsetX,a=i+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Yi=4,Fc=[.125,.215,.35,.446,.526,.582],gi=20,co=new ml,Ic=new Je;let uo=null,ho=0,fo=0;const pi=(1+Math.sqrt(5))/2,Gi=1/pi,Nc=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,pi,Gi),new I(0,pi,-Gi),new I(Gi,0,pi),new I(-Gi,0,pi),new I(pi,Gi,0),new I(-pi,Gi,0)];class Oc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100){uo=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,r,n,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uo,ho,fo),e.scissorTest=!1,ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===nr||e.mapping===ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uo=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:On,format:mn,colorSpace:kn,depthBuffer:!1},n=Bc(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bc(e,t,r);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qm(i)),this._blurMaterial=$m(i,e,t)}return n}_compileMaterial(e){const t=new et(this._lodPlanes[0],e);this._renderer.compile(t,co)}_sceneToCubeUV(e,t,r,n){const o=new $t(90,1,t,r),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ic),u.toneMapping=ti,u.autoClear=!1;const d=new st({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),g=new et(new Tn,d);let v=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,v=!0):(d.color.copy(Ic),v=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const _=this._cubeSize;ks(n,M*_,p>2?_:0,_,_),u.setRenderTarget(n),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===nr||e.mapping===ir;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=kc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zc());const i=n?this._cubemapMaterial:this._equirectMaterial,a=new et(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;const l=this._cubeSize;ks(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(a,co)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const i=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=Nc[(n-1)%Nc.length];this._blur(e,n-1,n,i,a)}t.autoClear=r}_blur(e,t,r,n,i){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,r,n,"latitudinal",i),this._halfBlur(a,e,r,r,n,"longitudinal",i)}_halfBlur(e,t,r,n,i,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new et(this._lodPlanes[n],c),f=c.uniforms,d=this._sizeLods[r]-1,g=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*gi-1),v=i/g,m=isFinite(i)?1+Math.floor(u*v):gi;m>gi&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gi}`);const p=[];let M=0;for(let w=0;w<gi;++w){const D=w/v,S=Math.exp(-D*D/2);p.push(S),w===0?M+=S:w<m&&(M+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-r;const x=this._sizeLods[n],T=3*x*(n>_-Yi?n-_+Yi:0),C=4*(this._cubeSize-x);ks(t,T,C,3*x,2*x),l.setRenderTarget(t),l.render(h,co)}}function Qm(s){const e=[],t=[],r=[];let n=s;const i=s-Yi+1+Fc.length;for(let a=0;a<i;a++){const o=Math.pow(2,n);t.push(o);let l=1/o;a>s-Yi?l=Fc[a-s+Yi-1]:a===0&&(l=0),r.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,v=3,m=2,p=1,M=new Float32Array(v*g*d),_=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let C=0;C<d;C++){const w=C%3*2/3-1,D=C>2?0:-1,S=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];M.set(S,v*g*C),_.set(f,m*g*C);const b=[C,C,C,C,C,C];x.set(b,p*g*C)}const T=new Xt;T.setAttribute("position",new vn(M,v)),T.setAttribute("uv",new vn(_,m)),T.setAttribute("faceIndex",new vn(x,p)),e.push(T),n>Yi&&n--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Bc(s,e,t){const r=new gn(s,e,t);return r.texture.mapping=va,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ks(s,e,t,r,n){s.viewport.set(e,t,r,n),s.scissor.set(e,t,r,n)}function $m(s,e,t){const r=new Float32Array(gi),n=new I(0,1,0);return new It({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:gl(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function zc(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gl(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function kc(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function gl(){return`

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
	`}function eg(s){let e=new WeakMap,t=null;function r(o){if(o&&o.isTexture){const l=o.mapping,c=l===Uo||l===Do,u=l===nr||l===ir;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Oc(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&n(h)){t===null&&(t=new Oc(s));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",i),f.texture}else return null}}}return o}function n(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function i(o){const l=o.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:a}}function tg(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(r)}return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const n=t(r);return n===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}function ng(s,e,t,r){const n={},i=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}f.removeEventListener("dispose",a),delete n[f.id];const d=i.get(f);d&&(e.remove(d),i.delete(f)),r.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return n[f.id]===!0||(f.addEventListener("dispose",a),n[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],s.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],s.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let v=0;if(d!==null){const M=d.array;v=d.version;for(let _=0,x=M.length;_<x;_+=3){const T=M[_+0],C=M[_+1],w=M[_+2];f.push(T,C,C,w,w,T)}}else if(g!==void 0){const M=g.array;v=g.version;for(let _=0,x=M.length/3-1;_<x;_+=3){const T=_+0,C=_+1,w=_+2;f.push(T,C,C,w,w,T)}}else return;const m=new(Ju(f)?th:eh)(f,1);m.version=v;const p=i.get(h);p&&e.remove(p),i.set(h,m)}function u(h){const f=i.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return i.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function ig(s,e,t,r){const n=r.isWebGL2;let i;function a(f){i=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,d){s.drawElements(i,d,o,f*l),t.update(d,i,1)}function h(f,d,g){if(g===0)return;let v,m;if(n)v=s,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](i,d,o,f*l,g),t.update(d,i,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function rg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(i,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(i/3);break;case s.LINES:t.lines+=o*(i/2);break;case s.LINE_STRIP:t.lines+=o*(i-1);break;case s.LINE_LOOP:t.lines+=o*i;break;case s.POINTS:t.points+=o*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function sg(s,e){return s[0]-e[0]}function ag(s,e){return Math.abs(e[1])-Math.abs(s[1])}function og(s,e,t){const r={},n=new Float32Array(8),i=new WeakMap,a=new _t,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=g!==void 0?g.length:0;let m=i.get(u);if(m===void 0||m.count!==v){let k=function(){G.dispose(),i.delete(u),u.removeEventListener("dispose",k)};var d=k;m!==void 0&&m.texture.dispose();const _=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let S=0;_===!0&&(S=1),x===!0&&(S=2),T===!0&&(S=3);let b=u.attributes.position.count*S,q=1;b>e.maxTextureSize&&(q=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const F=new Float32Array(b*q*4*v),G=new Qu(F,b,q,v);G.type=$n,G.needsUpdate=!0;const P=S*4;for(let B=0;B<v;B++){const Y=C[B],ie=w[B],V=D[B],O=b*q*4*B;for(let E=0;E<Y.count;E++){const U=E*P;_===!0&&(a.fromBufferAttribute(Y,E),F[O+U+0]=a.x,F[O+U+1]=a.y,F[O+U+2]=a.z,F[O+U+3]=0),x===!0&&(a.fromBufferAttribute(ie,E),F[O+U+4]=a.x,F[O+U+5]=a.y,F[O+U+6]=a.z,F[O+U+7]=0),T===!0&&(a.fromBufferAttribute(V,E),F[O+U+8]=a.x,F[O+U+9]=a.y,F[O+U+10]=a.z,F[O+U+11]=V.itemSize===4?a.w:1)}}m={count:v,texture:G,size:new be(b,q)},i.set(u,m),u.addEventListener("dispose",k)}let p=0;for(let _=0;_<f.length;_++)p+=f[_];const M=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(s,"morphTargetBaseInfluence",M),h.getUniforms().setValue(s,"morphTargetInfluences",f),h.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let v=r[u.id];if(v===void 0||v.length!==g){v=[];for(let x=0;x<g;x++)v[x]=[x,0];r[u.id]=v}for(let x=0;x<g;x++){const T=v[x];T[0]=x,T[1]=f[x]}v.sort(ag);for(let x=0;x<8;x++)x<g&&v[x][1]?(o[x][0]=v[x][0],o[x][1]=v[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(sg);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let M=0;for(let x=0;x<8;x++){const T=o[x],C=T[0],w=T[1];C!==Number.MAX_SAFE_INTEGER&&w?(m&&u.getAttribute("morphTarget"+x)!==m[C]&&u.setAttribute("morphTarget"+x,m[C]),p&&u.getAttribute("morphNormal"+x)!==p[C]&&u.setAttribute("morphNormal"+x,p[C]),n[x]=w,M+=w):(m&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),p&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),n[x]=0)}const _=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(s,"morphTargetBaseInfluence",_),h.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:l}}function lg(s,e,t,r){let n=new WeakMap;function i(l){const c=r.render.frame,u=l.geometry,h=e.get(l,u);if(n.get(h)!==c&&(e.update(h),n.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return h}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:i,dispose:a}}const ah=new Ot,oh=new Qu,lh=new Jf,ch=new rh,Gc=[],Hc=[],Vc=new Float32Array(16),Wc=new Float32Array(9),Xc=new Float32Array(4);function dr(s,e,t){const r=s[0];if(r<=0||r>0)return s;const n=e*t;let i=Gc[n];if(i===void 0&&(i=new Float32Array(n),Gc[n]=i),e!==0){r.toArray(i,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(i,o)}return i}function yt(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function St(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Sa(s,e){let t=Hc[e];t===void 0&&(t=new Int32Array(e),Hc[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function cg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function ug(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;s.uniform2fv(this.addr,e),St(t,e)}}function hg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;s.uniform3fv(this.addr,e),St(t,e)}}function fg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;s.uniform4fv(this.addr,e),St(t,e)}}function dg(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(yt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(yt(t,r))return;Xc.set(r),s.uniformMatrix2fv(this.addr,!1,Xc),St(t,r)}}function pg(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(yt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(yt(t,r))return;Wc.set(r),s.uniformMatrix3fv(this.addr,!1,Wc),St(t,r)}}function mg(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(yt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(yt(t,r))return;Vc.set(r),s.uniformMatrix4fv(this.addr,!1,Vc),St(t,r)}}function gg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function vg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;s.uniform2iv(this.addr,e),St(t,e)}}function _g(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;s.uniform3iv(this.addr,e),St(t,e)}}function xg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;s.uniform4iv(this.addr,e),St(t,e)}}function yg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Sg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;s.uniform2uiv(this.addr,e),St(t,e)}}function Mg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;s.uniform3uiv(this.addr,e),St(t,e)}}function Eg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;s.uniform4uiv(this.addr,e),St(t,e)}}function Tg(s,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(s.uniform1i(this.addr,n),r[0]=n),t.setTexture2D(e||ah,n)}function bg(s,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(s.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||lh,n)}function wg(s,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(s.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||ch,n)}function Ag(s,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(s.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||oh,n)}function Cg(s){switch(s){case 5126:return cg;case 35664:return ug;case 35665:return hg;case 35666:return fg;case 35674:return dg;case 35675:return pg;case 35676:return mg;case 5124:case 35670:return gg;case 35667:case 35671:return vg;case 35668:case 35672:return _g;case 35669:case 35673:return xg;case 5125:return yg;case 36294:return Sg;case 36295:return Mg;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Ag}}function Rg(s,e){s.uniform1fv(this.addr,e)}function Pg(s,e){const t=dr(e,this.size,2);s.uniform2fv(this.addr,t)}function Lg(s,e){const t=dr(e,this.size,3);s.uniform3fv(this.addr,t)}function Ug(s,e){const t=dr(e,this.size,4);s.uniform4fv(this.addr,t)}function Dg(s,e){const t=dr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Fg(s,e){const t=dr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Ig(s,e){const t=dr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ng(s,e){s.uniform1iv(this.addr,e)}function Og(s,e){s.uniform2iv(this.addr,e)}function Bg(s,e){s.uniform3iv(this.addr,e)}function zg(s,e){s.uniform4iv(this.addr,e)}function kg(s,e){s.uniform1uiv(this.addr,e)}function Gg(s,e){s.uniform2uiv(this.addr,e)}function Hg(s,e){s.uniform3uiv(this.addr,e)}function Vg(s,e){s.uniform4uiv(this.addr,e)}function Wg(s,e,t){const r=this.cache,n=e.length,i=Sa(t,n);yt(r,i)||(s.uniform1iv(this.addr,i),St(r,i));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||ah,i[a])}function Xg(s,e,t){const r=this.cache,n=e.length,i=Sa(t,n);yt(r,i)||(s.uniform1iv(this.addr,i),St(r,i));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||lh,i[a])}function qg(s,e,t){const r=this.cache,n=e.length,i=Sa(t,n);yt(r,i)||(s.uniform1iv(this.addr,i),St(r,i));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||ch,i[a])}function Yg(s,e,t){const r=this.cache,n=e.length,i=Sa(t,n);yt(r,i)||(s.uniform1iv(this.addr,i),St(r,i));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||oh,i[a])}function jg(s){switch(s){case 5126:return Rg;case 35664:return Pg;case 35665:return Lg;case 35666:return Ug;case 35674:return Dg;case 35675:return Fg;case 35676:return Ig;case 5124:case 35670:return Ng;case 35667:case 35671:return Og;case 35668:case 35672:return Bg;case 35669:case 35673:return zg;case 5125:return kg;case 36294:return Gg;case 36295:return Hg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Yg}}class Jg{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.setValue=Cg(t.type)}}class Kg{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.size=t.size,this.setValue=jg(t.type)}}class Zg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let i=0,a=n.length;i!==a;++i){const o=n[i];o.setValue(e,t[o.id],r)}}}const po=/(\w+)(\])?(\[|\.)?/g;function qc(s,e){s.seq.push(e),s.map[e.id]=e}function Qg(s,e,t){const r=s.name,n=r.length;for(po.lastIndex=0;;){const i=po.exec(r),a=po.lastIndex;let o=i[1];const l=i[2]==="]",c=i[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){qc(t,c===void 0?new Jg(o,s,e):new Kg(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new Zg(o),qc(t,h)),t=h}}}class $s{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){const i=e.getActiveUniform(t,n),a=e.getUniformLocation(t,i.name);Qg(i,a,this)}}setValue(e,t,r,n){const i=this.map[t];i!==void 0&&i.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let i=0,a=t.length;i!==a;++i){const o=t[i],l=r[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,i=e.length;n!==i;++n){const a=e[n];a.id in t&&r.push(a)}return r}}function Yc(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const $g=37297;let ev=0;function tv(s,e){const t=s.split(`
`),r=[],n=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let a=n;a<i;a++){const o=a+1;r.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return r.join(`
`)}function nv(s){const e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(s);let r;switch(e===t?r="":e===oa&&t===aa?r="LinearDisplayP3ToLinearSRGB":e===aa&&t===oa&&(r="LinearSRGBToLinearDisplayP3"),s){case kn:case _a:return[r,"LinearTransferOETF"];case xt:case fl:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function jc(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),n=s.getShaderInfoLog(e).trim();if(r&&n==="")return"";const i=/ERROR: 0:(\d+)/.exec(n);if(i){const a=parseInt(i[1]);return t.toUpperCase()+`

`+n+`

`+tv(s.getShaderSource(e),a)}else return n}function iv(s,e){const t=nv(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function rv(s,e){let t;switch(e){case Nu:t="Linear";break;case Ou:t="Reinhard";break;case ul:t="OptimizedCineon";break;case Bu:t="ACESFilmic";break;case Mf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function sv(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vr).join(`
`)}function av(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function ov(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const i=s.getActiveAttrib(e,n),a=i.name;let o=1;i.type===s.FLOAT_MAT2&&(o=2),i.type===s.FLOAT_MAT3&&(o=3),i.type===s.FLOAT_MAT4&&(o=4),t[a]={type:i.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Vr(s){return s!==""}function Jc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lv=/^[ \t]*#include +<([\w\d./]+)>/gm;function zo(s){return s.replace(lv,uv)}const cv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function uv(s,e){let t=Ke[e];if(t===void 0){const r=cv.get(e);if(r!==void 0)t=Ke[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return zo(t)}const hv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zc(s){return s.replace(hv,fv)}function fv(s,e,t,r){let n="";for(let i=parseInt(e);i<parseInt(t);i++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return n}function Qc(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dv(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Fu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Jh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Dn&&(e="SHADOWMAP_TYPE_VSM"),e}function pv(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case nr:case ir:e="ENVMAP_TYPE_CUBE";break;case va:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mv(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ir:e="ENVMAP_MODE_REFRACTION";break}return e}function gv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Iu:e="ENVMAP_BLENDING_MULTIPLY";break;case yf:e="ENVMAP_BLENDING_MIX";break;case Sf:e="ENVMAP_BLENDING_ADD";break}return e}function vv(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function _v(s,e,t,r){const n=s.getContext(),i=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=dv(t),c=pv(t),u=mv(t),h=gv(t),f=vv(t),d=t.isWebGL2?"":sv(t),g=av(i),v=n.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vr).join(`
`),m.length>0&&(m+=`
`),p=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vr).join(`
`),p.length>0&&(p+=`
`)):(m=[Qc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),p=[d,Qc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?Ke.tonemapping_pars_fragment:"",t.toneMapping!==ti?rv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,iv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vr).join(`
`)),a=zo(a),a=Jc(a,t),a=Kc(a,t),o=zo(o),o=Jc(o,t),o=Kc(o,t),a=Zc(a),o=Zc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=M+m+a,x=M+p+o,T=Yc(n,n.VERTEX_SHADER,_),C=Yc(n,n.FRAGMENT_SHADER,x);n.attachShader(v,T),n.attachShader(v,C),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function w(q){if(s.debug.checkShaderErrors){const F=n.getProgramInfoLog(v).trim(),G=n.getShaderInfoLog(T).trim(),P=n.getShaderInfoLog(C).trim();let k=!0,B=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,v,T,C);else{const Y=jc(n,T,"vertex"),ie=jc(n,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Program Info Log: `+F+`
`+Y+`
`+ie)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(G===""||P==="")&&(B=!1);B&&(q.diagnostics={runnable:k,programLog:F,vertexShader:{log:G,prefix:m},fragmentShader:{log:P,prefix:p}})}n.deleteShader(T),n.deleteShader(C),D=new $s(n,v),S=ov(n,v)}let D;this.getUniforms=function(){return D===void 0&&w(this),D};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=n.getProgramParameter(v,$g)),b},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ev++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=C,this}let xv=0;class yv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),i=this._getShaderStage(r),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Sv(e),t.set(e,r)),r}}class Sv{constructor(e){this.id=xv++,this.code=e,this.usedTimes=0}}function Mv(s,e,t,r,n,i,a){const o=new ya,l=new yv,c=[],u=n.isWebGL2,h=n.logarithmicDepthBuffer,f=n.vertexTextures;let d=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function m(S,b,q,F,G){const P=F.fog,k=G.geometry,B=S.isMeshStandardMaterial?F.environment:null,Y=(S.isMeshStandardMaterial?t:e).get(S.envMap||B),ie=Y&&Y.mapping===va?Y.image.height:null,V=g[S.type];S.precision!==null&&(d=n.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const O=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,E=O!==void 0?O.length:0;let U=0;k.morphAttributes.position!==void 0&&(U=1),k.morphAttributes.normal!==void 0&&(U=2),k.morphAttributes.color!==void 0&&(U=3);let H,X,W,re;if(V){const Xe=Sn[V];H=Xe.vertexShader,X=Xe.fragmentShader}else H=S.vertexShader,X=S.fragmentShader,l.update(S),W=l.getVertexShaderID(S),re=l.getFragmentShaderID(S);const K=s.getRenderTarget(),ne=G.isInstancedMesh===!0,ve=!!S.map,we=!!S.matcap,he=!!Y,R=!!S.aoMap,de=!!S.lightMap,J=!!S.bumpMap,ae=!!S.normalMap,$=!!S.displacementMap,Ee=!!S.emissiveMap,te=!!S.metalnessMap,fe=!!S.roughnessMap,xe=S.anisotropy>0,ee=S.clearcoat>0,Ue=S.iridescence>0,A=S.sheen>0,y=S.transmission>0,z=xe&&!!S.anisotropyMap,me=ee&&!!S.clearcoatMap,Z=ee&&!!S.clearcoatNormalMap,oe=ee&&!!S.clearcoatRoughnessMap,_e=Ue&&!!S.iridescenceMap,pe=Ue&&!!S.iridescenceThicknessMap,ye=A&&!!S.sheenColorMap,Fe=A&&!!S.sheenRoughnessMap,Ie=!!S.specularMap,ue=!!S.specularColorMap,Ae=!!S.specularIntensityMap,Pe=y&&!!S.transmissionMap,ze=y&&!!S.thicknessMap,ke=!!S.gradientMap,Te=!!S.alphaMap,Ce=S.alphaTest>0,N=!!S.alphaHash,Re=!!S.extensions,ge=!!k.attributes.uv1,Q=!!k.attributes.uv2,Se=!!k.attributes.uv3;let Ne=ti;return S.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ne=s.toneMapping),{isWebGL2:u,shaderID:V,shaderType:S.type,shaderName:S.name,vertexShader:H,fragmentShader:X,defines:S.defines,customVertexShaderID:W,customFragmentShaderID:re,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,instancing:ne,instancingColor:ne&&G.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:K===null?s.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:kn,map:ve,matcap:we,envMap:he,envMapMode:he&&Y.mapping,envMapCubeUVHeight:ie,aoMap:R,lightMap:de,bumpMap:J,normalMap:ae,displacementMap:f&&$,emissiveMap:Ee,normalMapObjectSpace:ae&&S.normalMapType===Ff,normalMapTangentSpace:ae&&S.normalMapType===ju,metalnessMap:te,roughnessMap:fe,anisotropy:xe,anisotropyMap:z,clearcoat:ee,clearcoatMap:me,clearcoatNormalMap:Z,clearcoatRoughnessMap:oe,iridescence:Ue,iridescenceMap:_e,iridescenceThicknessMap:pe,sheen:A,sheenColorMap:ye,sheenRoughnessMap:Fe,specularMap:Ie,specularColorMap:ue,specularIntensityMap:Ae,transmission:y,transmissionMap:Pe,thicknessMap:ze,gradientMap:ke,opaque:S.transparent===!1&&S.blending===Ki,alphaMap:Te,alphaTest:Ce,alphaHash:N,combine:S.combine,mapUv:ve&&v(S.map.channel),aoMapUv:R&&v(S.aoMap.channel),lightMapUv:de&&v(S.lightMap.channel),bumpMapUv:J&&v(S.bumpMap.channel),normalMapUv:ae&&v(S.normalMap.channel),displacementMapUv:$&&v(S.displacementMap.channel),emissiveMapUv:Ee&&v(S.emissiveMap.channel),metalnessMapUv:te&&v(S.metalnessMap.channel),roughnessMapUv:fe&&v(S.roughnessMap.channel),anisotropyMapUv:z&&v(S.anisotropyMap.channel),clearcoatMapUv:me&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Z&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&v(S.sheenRoughnessMap.channel),specularMapUv:Ie&&v(S.specularMap.channel),specularColorMapUv:ue&&v(S.specularColorMap.channel),specularIntensityMapUv:Ae&&v(S.specularIntensityMap.channel),transmissionMapUv:Pe&&v(S.transmissionMap.channel),thicknessMapUv:ze&&v(S.thicknessMap.channel),alphaMapUv:Te&&v(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ae||xe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:ge,vertexUv2s:Q,vertexUv3s:Se,pointsUvs:G.isPoints===!0&&!!k.attributes.uv&&(ve||Te),fog:!!P,useFog:S.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:G.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:U,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&q.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ne,useLegacyLights:s._useLegacyLights,decodeVideoTexture:ve&&S.map.isVideoTexture===!0&&tt.getTransfer(S.map.colorSpace)===ot,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===dn,flipSided:S.side===Nt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:Re&&S.extensions.derivatives===!0,extensionFragDepth:Re&&S.extensions.fragDepth===!0,extensionDrawBuffers:Re&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:Re&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const q in S.defines)b.push(q),b.push(S.defines[q]);return S.isRawShaderMaterial===!1&&(M(b,S),_(b,S),b.push(s.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function M(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function _(S,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function x(S){const b=g[S.type];let q;if(b){const F=Sn[b];q=ar.clone(F.uniforms)}else q=S.uniforms;return q}function T(S,b){let q;for(let F=0,G=c.length;F<G;F++){const P=c[F];if(P.cacheKey===b){q=P,++q.usedTimes;break}}return q===void 0&&(q=new _v(s,b,S,i),c.push(q)),q}function C(S){if(--S.usedTimes===0){const b=c.indexOf(S);c[b]=c[c.length-1],c.pop(),S.destroy()}}function w(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:T,releaseProgram:C,releaseShaderCache:w,programs:c,dispose:D}}function Ev(){let s=new WeakMap;function e(i){let a=s.get(i);return a===void 0&&(a={},s.set(i,a)),a}function t(i){s.delete(i)}function r(i,a,o){s.get(i)[a]=o}function n(){s=new WeakMap}return{get:e,remove:t,update:r,dispose:n}}function Tv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function $c(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function eu(){const s=[];let e=0;const t=[],r=[],n=[];function i(){e=0,t.length=0,r.length=0,n.length=0}function a(h,f,d,g,v,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function o(h,f,d,g,v,m){const p=a(h,f,d,g,v,m);d.transmission>0?r.push(p):d.transparent===!0?n.push(p):t.push(p)}function l(h,f,d,g,v,m){const p=a(h,f,d,g,v,m);d.transmission>0?r.unshift(p):d.transparent===!0?n.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||Tv),r.length>1&&r.sort(f||$c),n.length>1&&n.sort(f||$c)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:r,transparent:n,init:i,push:o,unshift:l,finish:u,sort:c}}function bv(){let s=new WeakMap;function e(r,n){const i=s.get(r);let a;return i===void 0?(a=new eu,s.set(r,[a])):n>=i.length?(a=new eu,i.push(a)):a=i[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function wv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Je};break;case"SpotLight":t={position:new I,direction:new I,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function Av(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Cv=0;function Rv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Pv(s,e){const t=new wv,r=Av(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new I);const i=new I,a=new mt,o=new mt;function l(u,h){let f=0,d=0,g=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let v=0,m=0,p=0,M=0,_=0,x=0,T=0,C=0,w=0,D=0,S=0;u.sort(Rv);const b=h===!0?Math.PI:1;for(let F=0,G=u.length;F<G;F++){const P=u[F],k=P.color,B=P.intensity,Y=P.distance,ie=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=k.r*B*b,d+=k.g*B*b,g+=k.b*B*b;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],B);S++}else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*b),P.castShadow){const O=P.shadow,E=r.get(P);E.shadowBias=O.bias,E.shadowNormalBias=O.normalBias,E.shadowRadius=O.radius,E.shadowMapSize=O.mapSize,n.directionalShadow[v]=E,n.directionalShadowMap[v]=ie,n.directionalShadowMatrix[v]=P.shadow.matrix,x++}n.directional[v]=V,v++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(k).multiplyScalar(B*b),V.distance=Y,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[p]=V;const O=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,O.updateMatrices(P),P.castShadow&&D++),n.spotLightMatrix[p]=O.matrix,P.castShadow){const E=r.get(P);E.shadowBias=O.bias,E.shadowNormalBias=O.normalBias,E.shadowRadius=O.radius,E.shadowMapSize=O.mapSize,n.spotShadow[p]=E,n.spotShadowMap[p]=ie,C++}p++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(k).multiplyScalar(B),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[M]=V,M++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*b),V.distance=P.distance,V.decay=P.decay,P.castShadow){const O=P.shadow,E=r.get(P);E.shadowBias=O.bias,E.shadowNormalBias=O.normalBias,E.shadowRadius=O.radius,E.shadowMapSize=O.mapSize,E.shadowCameraNear=O.camera.near,E.shadowCameraFar=O.camera.far,n.pointShadow[m]=E,n.pointShadowMap[m]=ie,n.pointShadowMatrix[m]=P.shadow.matrix,T++}n.point[m]=V,m++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(B*b),V.groundColor.copy(P.groundColor).multiplyScalar(B*b),n.hemi[_]=V,_++}}M>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=g;const q=n.hash;(q.directionalLength!==v||q.pointLength!==m||q.spotLength!==p||q.rectAreaLength!==M||q.hemiLength!==_||q.numDirectionalShadows!==x||q.numPointShadows!==T||q.numSpotShadows!==C||q.numSpotMaps!==w||q.numLightProbes!==S)&&(n.directional.length=v,n.spot.length=p,n.rectArea.length=M,n.point.length=m,n.hemi.length=_,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=C+w-D,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=S,q.directionalLength=v,q.pointLength=m,q.spotLength=p,q.rectAreaLength=M,q.hemiLength=_,q.numDirectionalShadows=x,q.numPointShadows=T,q.numSpotShadows=C,q.numSpotMaps=w,q.numLightProbes=S,n.version=Cv++)}function c(u,h){let f=0,d=0,g=0,v=0,m=0;const p=h.matrixWorldInverse;for(let M=0,_=u.length;M<_;M++){const x=u[M];if(x.isDirectionalLight){const T=n.directional[f];T.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(p),f++}else if(x.isSpotLight){const T=n.spot[g];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(p),g++}else if(x.isRectAreaLight){const T=n.rectArea[v];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(p),o.identity(),a.copy(x.matrixWorld),a.premultiply(p),o.extractRotation(a),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const T=n.point[d];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const T=n.hemi[m];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:n}}function tu(s,e){const t=new Pv(s,e),r=[],n=[];function i(){r.length=0,n.length=0}function a(h){r.push(h)}function o(h){n.push(h)}function l(h){t.setup(r,h)}function c(h){t.setupView(r,h)}return{init:i,state:{lightsArray:r,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Lv(s,e){let t=new WeakMap;function r(i,a=0){const o=t.get(i);let l;return o===void 0?(l=new tu(s,e),t.set(i,[l])):a>=o.length?(l=new tu(s,e),o.push(l)):l=o[a],l}function n(){t=new WeakMap}return{get:r,dispose:n}}class uh extends fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Df,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hh extends fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dv=`uniform sampler2D shadow_pass;
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
}`;function Fv(s,e,t){let r=new pl;const n=new be,i=new be,a=new _t,o=new uh({depthPacking:Yu}),l=new hh,c={},u=t.maxTextureSize,h={[zn]:Nt,[Nt]:zn,[dn]:dn},f=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:Uv,fragmentShader:Dv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Xt;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new et(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fu;let p=this.type;this.render=function(T,C,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const D=s.getRenderTarget(),S=s.getActiveCubeFace(),b=s.getActiveMipmapLevel(),q=s.state;q.setBlending(Nn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const F=p!==Dn&&this.type===Dn,G=p===Dn&&this.type!==Dn;for(let P=0,k=T.length;P<k;P++){const B=T[P],Y=B.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;n.copy(Y.mapSize);const ie=Y.getFrameExtents();if(n.multiply(ie),i.copy(Y.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(i.x=Math.floor(u/ie.x),n.x=i.x*ie.x,Y.mapSize.x=i.x),n.y>u&&(i.y=Math.floor(u/ie.y),n.y=i.y*ie.y,Y.mapSize.y=i.y)),Y.map===null||F===!0||G===!0){const O=this.type!==Dn?{minFilter:Ft,magFilter:Ft}:{};Y.map!==null&&Y.map.dispose(),Y.map=new gn(n.x,n.y,O),Y.map.texture.name=B.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const V=Y.getViewportCount();for(let O=0;O<V;O++){const E=Y.getViewport(O);a.set(i.x*E.x,i.y*E.y,i.x*E.z,i.y*E.w),q.viewport(a),Y.updateMatrices(B,O),r=Y.getFrustum(),x(C,w,Y.camera,B,this.type)}Y.isPointLightShadow!==!0&&this.type===Dn&&M(Y,w),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(D,S,b)};function M(T,C){const w=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new gn(n.x,n.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(C,null,w,f,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(C,null,w,d,v,null)}function _(T,C,w,D){let S=null;const b=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(b!==void 0)S=b;else if(S=w.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const q=S.uuid,F=C.uuid;let G=c[q];G===void 0&&(G={},c[q]=G);let P=G[F];P===void 0&&(P=S.clone(),G[F]=P),S=P}if(S.visible=C.visible,S.wireframe=C.wireframe,D===Dn?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:h[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,w.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const q=s.properties.get(S);q.light=w}return S}function x(T,C,w,D,S){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Dn)&&(!T.frustumCulled||r.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);const F=e.update(T),G=T.material;if(Array.isArray(G)){const P=F.groups;for(let k=0,B=P.length;k<B;k++){const Y=P[k],ie=G[Y.materialIndex];if(ie&&ie.visible){const V=_(T,ie,D,S);s.renderBufferDirect(w,null,F,V,T,Y)}}}else if(G.visible){const P=_(T,G,D,S);s.renderBufferDirect(w,null,F,P,T,null)}}const q=T.children;for(let F=0,G=q.length;F<G;F++)x(q[F],C,w,D,S)}}function Iv(s,e,t){const r=t.isWebGL2;function n(){let N=!1;const Re=new _t;let ge=null;const Q=new _t(0,0,0,0);return{setMask:function(Se){ge!==Se&&!N&&(s.colorMask(Se,Se,Se,Se),ge=Se)},setLocked:function(Se){N=Se},setClear:function(Se,Ne,Oe,Xe,nt){nt===!0&&(Se*=Xe,Ne*=Xe,Oe*=Xe),Re.set(Se,Ne,Oe,Xe),Q.equals(Re)===!1&&(s.clearColor(Se,Ne,Oe,Xe),Q.copy(Re))},reset:function(){N=!1,ge=null,Q.set(-1,0,0,0)}}}function i(){let N=!1,Re=null,ge=null,Q=null;return{setTest:function(Se){Se?ve(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(Se){Re!==Se&&!N&&(s.depthMask(Se),Re=Se)},setFunc:function(Se){if(ge!==Se){switch(Se){case df:s.depthFunc(s.NEVER);break;case pf:s.depthFunc(s.ALWAYS);break;case mf:s.depthFunc(s.LESS);break;case ra:s.depthFunc(s.LEQUAL);break;case gf:s.depthFunc(s.EQUAL);break;case vf:s.depthFunc(s.GEQUAL);break;case _f:s.depthFunc(s.GREATER);break;case xf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ge=Se}},setLocked:function(Se){N=Se},setClear:function(Se){Q!==Se&&(s.clearDepth(Se),Q=Se)},reset:function(){N=!1,Re=null,ge=null,Q=null}}}function a(){let N=!1,Re=null,ge=null,Q=null,Se=null,Ne=null,Oe=null,Xe=null,nt=null;return{setTest:function(je){N||(je?ve(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(je){Re!==je&&!N&&(s.stencilMask(je),Re=je)},setFunc:function(je,$e,ft){(ge!==je||Q!==$e||Se!==ft)&&(s.stencilFunc(je,$e,ft),ge=je,Q=$e,Se=ft)},setOp:function(je,$e,ft){(Ne!==je||Oe!==$e||Xe!==ft)&&(s.stencilOp(je,$e,ft),Ne=je,Oe=$e,Xe=ft)},setLocked:function(je){N=je},setClear:function(je){nt!==je&&(s.clearStencil(je),nt=je)},reset:function(){N=!1,Re=null,ge=null,Q=null,Se=null,Ne=null,Oe=null,Xe=null,nt=null}}}const o=new n,l=new i,c=new a,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,v=[],m=null,p=!1,M=null,_=null,x=null,T=null,C=null,w=null,D=null,S=new Je(0,0,0),b=0,q=!1,F=null,G=null,P=null,k=null,B=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,V=0;const O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(O)[1]),ie=V>=1):O.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),ie=V>=2);let E=null,U={};const H=s.getParameter(s.SCISSOR_BOX),X=s.getParameter(s.VIEWPORT),W=new _t().fromArray(H),re=new _t().fromArray(X);function K(N,Re,ge,Q){const Se=new Uint8Array(4),Ne=s.createTexture();s.bindTexture(N,Ne),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Oe=0;Oe<ge;Oe++)r&&(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)?s.texImage3D(Re,0,s.RGBA,1,1,Q,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage2D(Re+Oe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se);return Ne}const ne={};ne[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(ne[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ve(s.DEPTH_TEST),l.setFunc(ra),te(!1),fe(Ol),ve(s.CULL_FACE),$(Nn);function ve(N){f[N]!==!0&&(s.enable(N),f[N]=!0)}function we(N){f[N]!==!1&&(s.disable(N),f[N]=!1)}function he(N,Re){return d[N]!==Re?(s.bindFramebuffer(N,Re),d[N]=Re,r&&(N===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Re),N===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Re)),!0):!1}function R(N,Re){let ge=v,Q=!1;if(N)if(ge=g.get(Re),ge===void 0&&(ge=[],g.set(Re,ge)),N.isWebGLMultipleRenderTargets){const Se=N.texture;if(ge.length!==Se.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let Ne=0,Oe=Se.length;Ne<Oe;Ne++)ge[Ne]=s.COLOR_ATTACHMENT0+Ne;ge.length=Se.length,Q=!0}}else ge[0]!==s.COLOR_ATTACHMENT0&&(ge[0]=s.COLOR_ATTACHMENT0,Q=!0);else ge[0]!==s.BACK&&(ge[0]=s.BACK,Q=!0);Q&&(t.isWebGL2?s.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function de(N){return m!==N?(s.useProgram(N),m=N,!0):!1}const J={[mi]:s.FUNC_ADD,[Zh]:s.FUNC_SUBTRACT,[Qh]:s.FUNC_REVERSE_SUBTRACT};if(r)J[kl]=s.MIN,J[Gl]=s.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(J[kl]=N.MIN_EXT,J[Gl]=N.MAX_EXT)}const ae={[$h]:s.ZERO,[ef]:s.ONE,[tf]:s.SRC_COLOR,[Po]:s.SRC_ALPHA,[lf]:s.SRC_ALPHA_SATURATE,[af]:s.DST_COLOR,[rf]:s.DST_ALPHA,[nf]:s.ONE_MINUS_SRC_COLOR,[Lo]:s.ONE_MINUS_SRC_ALPHA,[of]:s.ONE_MINUS_DST_COLOR,[sf]:s.ONE_MINUS_DST_ALPHA,[cf]:s.CONSTANT_COLOR,[uf]:s.ONE_MINUS_CONSTANT_COLOR,[hf]:s.CONSTANT_ALPHA,[ff]:s.ONE_MINUS_CONSTANT_ALPHA};function $(N,Re,ge,Q,Se,Ne,Oe,Xe,nt,je){if(N===Nn){p===!0&&(we(s.BLEND),p=!1);return}if(p===!1&&(ve(s.BLEND),p=!0),N!==Kh){if(N!==M||je!==q){if((_!==mi||C!==mi)&&(s.blendEquation(s.FUNC_ADD),_=mi,C=mi),je)switch(N){case Ki:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ro:s.blendFunc(s.ONE,s.ONE);break;case Bl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ki:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ro:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Bl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}x=null,T=null,w=null,D=null,S.set(0,0,0),b=0,M=N,q=je}return}Se=Se||Re,Ne=Ne||ge,Oe=Oe||Q,(Re!==_||Se!==C)&&(s.blendEquationSeparate(J[Re],J[Se]),_=Re,C=Se),(ge!==x||Q!==T||Ne!==w||Oe!==D)&&(s.blendFuncSeparate(ae[ge],ae[Q],ae[Ne],ae[Oe]),x=ge,T=Q,w=Ne,D=Oe),(Xe.equals(S)===!1||nt!==b)&&(s.blendColor(Xe.r,Xe.g,Xe.b,nt),S.copy(Xe),b=nt),M=N,q=!1}function Ee(N,Re){N.side===dn?we(s.CULL_FACE):ve(s.CULL_FACE);let ge=N.side===Nt;Re&&(ge=!ge),te(ge),N.blending===Ki&&N.transparent===!1?$(Nn):$(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);const Q=N.stencilWrite;c.setTest(Q),Q&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ee(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function te(N){F!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),F=N)}function fe(N){N!==Yh?(ve(s.CULL_FACE),N!==G&&(N===Ol?s.cullFace(s.BACK):N===jh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),G=N}function xe(N){N!==P&&(ie&&s.lineWidth(N),P=N)}function ee(N,Re,ge){N?(ve(s.POLYGON_OFFSET_FILL),(k!==Re||B!==ge)&&(s.polygonOffset(Re,ge),k=Re,B=ge)):we(s.POLYGON_OFFSET_FILL)}function Ue(N){N?ve(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function A(N){N===void 0&&(N=s.TEXTURE0+Y-1),E!==N&&(s.activeTexture(N),E=N)}function y(N,Re,ge){ge===void 0&&(E===null?ge=s.TEXTURE0+Y-1:ge=E);let Q=U[ge];Q===void 0&&(Q={type:void 0,texture:void 0},U[ge]=Q),(Q.type!==N||Q.texture!==Re)&&(E!==ge&&(s.activeTexture(ge),E=ge),s.bindTexture(N,Re||ne[N]),Q.type=N,Q.texture=Re)}function z(){const N=U[E];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Fe(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(N){W.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),W.copy(N))}function ze(N){re.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),re.copy(N))}function ke(N,Re){let ge=h.get(Re);ge===void 0&&(ge=new WeakMap,h.set(Re,ge));let Q=ge.get(N);Q===void 0&&(Q=s.getUniformBlockIndex(Re,N.name),ge.set(N,Q))}function Te(N,Re){const Q=h.get(Re).get(N);u.get(Re)!==Q&&(s.uniformBlockBinding(Re,Q,N.__bindingPointIndex),u.set(Re,Q))}function Ce(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),r===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},E=null,U={},d={},g=new WeakMap,v=[],m=null,p=!1,M=null,_=null,x=null,T=null,C=null,w=null,D=null,S=new Je(0,0,0),b=0,q=!1,F=null,G=null,P=null,k=null,B=null,W.set(0,0,s.canvas.width,s.canvas.height),re.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ve,disable:we,bindFramebuffer:he,drawBuffers:R,useProgram:de,setBlending:$,setMaterial:Ee,setFlipSided:te,setCullFace:fe,setLineWidth:xe,setPolygonOffset:ee,setScissorTest:Ue,activeTexture:A,bindTexture:y,unbindTexture:z,compressedTexImage2D:me,compressedTexImage3D:Z,texImage2D:ue,texImage3D:Ae,updateUBOMapping:ke,uniformBlockBinding:Te,texStorage2D:Fe,texStorage3D:Ie,texSubImage2D:oe,texSubImage3D:_e,compressedTexSubImage2D:pe,compressedTexSubImage3D:ye,scissor:Pe,viewport:ze,reset:Ce}}function Nv(s,e,t,r,n,i,a){const o=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,u=n.maxTextureSize,h=n.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,y){return p?new OffscreenCanvas(A,y):es("canvas")}function _(A,y,z,me){let Z=1;if((A.width>me||A.height>me)&&(Z=me/Math.max(A.width,A.height)),Z<1||y===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const oe=y?Bo:Math.floor,_e=oe(Z*A.width),pe=oe(Z*A.height);v===void 0&&(v=M(_e,pe));const ye=z?M(_e,pe):v;return ye.width=_e,ye.height=pe,ye.getContext("2d").drawImage(A,0,0,_e,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+_e+"x"+pe+")."),ye}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function x(A){return vc(A.width)&&vc(A.height)}function T(A){return o?!1:A.wrapS!==pn||A.wrapT!==pn||A.minFilter!==Ft&&A.minFilter!==Wt}function C(A,y){return A.generateMipmaps&&y&&A.minFilter!==Ft&&A.minFilter!==Wt}function w(A){s.generateMipmap(A)}function D(A,y,z,me,Z=!1){if(o===!1)return y;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let oe=y;if(y===s.RED&&(z===s.FLOAT&&(oe=s.R32F),z===s.HALF_FLOAT&&(oe=s.R16F),z===s.UNSIGNED_BYTE&&(oe=s.R8)),y===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(oe=s.R8UI),z===s.UNSIGNED_SHORT&&(oe=s.R16UI),z===s.UNSIGNED_INT&&(oe=s.R32UI),z===s.BYTE&&(oe=s.R8I),z===s.SHORT&&(oe=s.R16I),z===s.INT&&(oe=s.R32I)),y===s.RG&&(z===s.FLOAT&&(oe=s.RG32F),z===s.HALF_FLOAT&&(oe=s.RG16F),z===s.UNSIGNED_BYTE&&(oe=s.RG8)),y===s.RGBA){const _e=Z?sa:tt.getTransfer(me);z===s.FLOAT&&(oe=s.RGBA32F),z===s.HALF_FLOAT&&(oe=s.RGBA16F),z===s.UNSIGNED_BYTE&&(oe=_e===ot?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(oe=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(oe=s.RGB5_A1)}return(oe===s.R16F||oe===s.R32F||oe===s.RG16F||oe===s.RG32F||oe===s.RGBA16F||oe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function S(A,y,z){return C(A,z)===!0||A.isFramebufferTexture&&A.minFilter!==Ft&&A.minFilter!==Wt?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function b(A){return A===Ft||A===Hl||A===Ba?s.NEAREST:s.LINEAR}function q(A){const y=A.target;y.removeEventListener("dispose",q),G(y),y.isVideoTexture&&g.delete(y)}function F(A){const y=A.target;y.removeEventListener("dispose",F),k(y)}function G(A){const y=r.get(A);if(y.__webglInit===void 0)return;const z=A.source,me=m.get(z);if(me){const Z=me[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&P(A),Object.keys(me).length===0&&m.delete(z)}r.remove(A)}function P(A){const y=r.get(A);s.deleteTexture(y.__webglTexture);const z=A.source,me=m.get(z);delete me[y.__cacheKey],a.memory.textures--}function k(A){const y=A.texture,z=r.get(A),me=r.get(y);if(me.__webglTexture!==void 0&&(s.deleteTexture(me.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(z.__webglFramebuffer[Z]))for(let oe=0;oe<z.__webglFramebuffer[Z].length;oe++)s.deleteFramebuffer(z.__webglFramebuffer[Z][oe]);else s.deleteFramebuffer(z.__webglFramebuffer[Z]);z.__webglDepthbuffer&&s.deleteRenderbuffer(z.__webglDepthbuffer[Z])}else{if(Array.isArray(z.__webglFramebuffer))for(let Z=0;Z<z.__webglFramebuffer.length;Z++)s.deleteFramebuffer(z.__webglFramebuffer[Z]);else s.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&s.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&s.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let Z=0;Z<z.__webglColorRenderbuffer.length;Z++)z.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(z.__webglColorRenderbuffer[Z]);z.__webglDepthRenderbuffer&&s.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let Z=0,oe=y.length;Z<oe;Z++){const _e=r.get(y[Z]);_e.__webglTexture&&(s.deleteTexture(_e.__webglTexture),a.memory.textures--),r.remove(y[Z])}r.remove(y),r.remove(A)}let B=0;function Y(){B=0}function ie(){const A=B;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),B+=1,A}function V(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function O(A,y){const z=r.get(A);if(A.isVideoTexture&&ee(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const me=A.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(z,A,y);return}}t.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+y)}function E(A,y){const z=r.get(A);if(A.version>0&&z.__version!==A.version){ve(z,A,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+y)}function U(A,y){const z=r.get(A);if(A.version>0&&z.__version!==A.version){ve(z,A,y);return}t.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+y)}function H(A,y){const z=r.get(A);if(A.version>0&&z.__version!==A.version){we(z,A,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+y)}const X={[Fo]:s.REPEAT,[pn]:s.CLAMP_TO_EDGE,[Io]:s.MIRRORED_REPEAT},W={[Ft]:s.NEAREST,[Hl]:s.NEAREST_MIPMAP_NEAREST,[Ba]:s.NEAREST_MIPMAP_LINEAR,[Wt]:s.LINEAR,[Ef]:s.LINEAR_MIPMAP_NEAREST,[$r]:s.LINEAR_MIPMAP_LINEAR},re={[If]:s.NEVER,[Hf]:s.ALWAYS,[Nf]:s.LESS,[Bf]:s.LEQUAL,[Of]:s.EQUAL,[Gf]:s.GEQUAL,[zf]:s.GREATER,[kf]:s.NOTEQUAL};function K(A,y,z){if(z?(s.texParameteri(A,s.TEXTURE_WRAP_S,X[y.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,X[y.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,X[y.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,W[y.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,W[y.minFilter])):(s.texParameteri(A,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(A,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(y.wrapS!==pn||y.wrapT!==pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,s.TEXTURE_MAG_FILTER,b(y.magFilter)),s.texParameteri(A,s.TEXTURE_MIN_FILTER,b(y.minFilter)),y.minFilter!==Ft&&y.minFilter!==Wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,re[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const me=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Ft||y.minFilter!==Ba&&y.minFilter!==$r||y.type===$n&&e.has("OES_texture_float_linear")===!1||o===!1&&y.type===On&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||r.get(y).__currentAnisotropy)&&(s.texParameterf(A,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,n.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy)}}function ne(A,y){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",q));const me=y.source;let Z=m.get(me);Z===void 0&&(Z={},m.set(me,Z));const oe=V(y);if(oe!==A.__cacheKey){Z[oe]===void 0&&(Z[oe]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Z[oe].usedTimes++;const _e=Z[A.__cacheKey];_e!==void 0&&(Z[A.__cacheKey].usedTimes--,_e.usedTimes===0&&P(y)),A.__cacheKey=oe,A.__webglTexture=Z[oe].texture}return z}function ve(A,y,z){let me=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(me=s.TEXTURE_3D);const Z=ne(A,y),oe=y.source;t.bindTexture(me,A.__webglTexture,s.TEXTURE0+z);const _e=r.get(oe);if(oe.version!==_e.__version||Z===!0){t.activeTexture(s.TEXTURE0+z);const pe=tt.getPrimaries(tt.workingColorSpace),ye=y.colorSpace===en?null:tt.getPrimaries(y.colorSpace),Fe=y.colorSpace===en||pe===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const Ie=T(y)&&x(y.image)===!1;let ue=_(y.image,Ie,!1,u);ue=Ue(y,ue);const Ae=x(ue)||o,Pe=i.convert(y.format,y.colorSpace);let ze=i.convert(y.type),ke=D(y.internalFormat,Pe,ze,y.colorSpace,y.isVideoTexture);K(me,y,Ae);let Te;const Ce=y.mipmaps,N=o&&y.isVideoTexture!==!0,Re=_e.__version===void 0||Z===!0,ge=S(y,ue,Ae);if(y.isDepthTexture)ke=s.DEPTH_COMPONENT,o?y.type===$n?ke=s.DEPTH_COMPONENT32F:y.type===Qn?ke=s.DEPTH_COMPONENT24:y.type===_i?ke=s.DEPTH24_STENCIL8:ke=s.DEPTH_COMPONENT16:y.type===$n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===xi&&ke===s.DEPTH_COMPONENT&&y.type!==hl&&y.type!==Qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Qn,ze=i.convert(y.type)),y.format===rr&&ke===s.DEPTH_COMPONENT&&(ke=s.DEPTH_STENCIL,y.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=_i,ze=i.convert(y.type))),Re&&(N?t.texStorage2D(s.TEXTURE_2D,1,ke,ue.width,ue.height):t.texImage2D(s.TEXTURE_2D,0,ke,ue.width,ue.height,0,Pe,ze,null));else if(y.isDataTexture)if(Ce.length>0&&Ae){N&&Re&&t.texStorage2D(s.TEXTURE_2D,ge,ke,Ce[0].width,Ce[0].height);for(let Q=0,Se=Ce.length;Q<Se;Q++)Te=Ce[Q],N?t.texSubImage2D(s.TEXTURE_2D,Q,0,0,Te.width,Te.height,Pe,ze,Te.data):t.texImage2D(s.TEXTURE_2D,Q,ke,Te.width,Te.height,0,Pe,ze,Te.data);y.generateMipmaps=!1}else N?(Re&&t.texStorage2D(s.TEXTURE_2D,ge,ke,ue.width,ue.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ue.width,ue.height,Pe,ze,ue.data)):t.texImage2D(s.TEXTURE_2D,0,ke,ue.width,ue.height,0,Pe,ze,ue.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){N&&Re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,ke,Ce[0].width,Ce[0].height,ue.depth);for(let Q=0,Se=Ce.length;Q<Se;Q++)Te=Ce[Q],y.format!==mn?Pe!==null?N?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,Te.width,Te.height,ue.depth,Pe,Te.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,ke,Te.width,Te.height,ue.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?t.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,Te.width,Te.height,ue.depth,Pe,ze,Te.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Q,ke,Te.width,Te.height,ue.depth,0,Pe,ze,Te.data)}else{N&&Re&&t.texStorage2D(s.TEXTURE_2D,ge,ke,Ce[0].width,Ce[0].height);for(let Q=0,Se=Ce.length;Q<Se;Q++)Te=Ce[Q],y.format!==mn?Pe!==null?N?t.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,Te.width,Te.height,Pe,Te.data):t.compressedTexImage2D(s.TEXTURE_2D,Q,ke,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?t.texSubImage2D(s.TEXTURE_2D,Q,0,0,Te.width,Te.height,Pe,ze,Te.data):t.texImage2D(s.TEXTURE_2D,Q,ke,Te.width,Te.height,0,Pe,ze,Te.data)}else if(y.isDataArrayTexture)N?(Re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,ke,ue.width,ue.height,ue.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Pe,ze,ue.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ke,ue.width,ue.height,ue.depth,0,Pe,ze,ue.data);else if(y.isData3DTexture)N?(Re&&t.texStorage3D(s.TEXTURE_3D,ge,ke,ue.width,ue.height,ue.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Pe,ze,ue.data)):t.texImage3D(s.TEXTURE_3D,0,ke,ue.width,ue.height,ue.depth,0,Pe,ze,ue.data);else if(y.isFramebufferTexture){if(Re)if(N)t.texStorage2D(s.TEXTURE_2D,ge,ke,ue.width,ue.height);else{let Q=ue.width,Se=ue.height;for(let Ne=0;Ne<ge;Ne++)t.texImage2D(s.TEXTURE_2D,Ne,ke,Q,Se,0,Pe,ze,null),Q>>=1,Se>>=1}}else if(Ce.length>0&&Ae){N&&Re&&t.texStorage2D(s.TEXTURE_2D,ge,ke,Ce[0].width,Ce[0].height);for(let Q=0,Se=Ce.length;Q<Se;Q++)Te=Ce[Q],N?t.texSubImage2D(s.TEXTURE_2D,Q,0,0,Pe,ze,Te):t.texImage2D(s.TEXTURE_2D,Q,ke,Pe,ze,Te);y.generateMipmaps=!1}else N?(Re&&t.texStorage2D(s.TEXTURE_2D,ge,ke,ue.width,ue.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Pe,ze,ue)):t.texImage2D(s.TEXTURE_2D,0,ke,Pe,ze,ue);C(y,Ae)&&w(me),_e.__version=oe.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function we(A,y,z){if(y.image.length!==6)return;const me=ne(A,y),Z=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+z);const oe=r.get(Z);if(Z.version!==oe.__version||me===!0){t.activeTexture(s.TEXTURE0+z);const _e=tt.getPrimaries(tt.workingColorSpace),pe=y.colorSpace===en?null:tt.getPrimaries(y.colorSpace),ye=y.colorSpace===en||_e===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Fe=y.isCompressedTexture||y.image[0].isCompressedTexture,Ie=y.image[0]&&y.image[0].isDataTexture,ue=[];for(let Q=0;Q<6;Q++)!Fe&&!Ie?ue[Q]=_(y.image[Q],!1,!0,c):ue[Q]=Ie?y.image[Q].image:y.image[Q],ue[Q]=Ue(y,ue[Q]);const Ae=ue[0],Pe=x(Ae)||o,ze=i.convert(y.format,y.colorSpace),ke=i.convert(y.type),Te=D(y.internalFormat,ze,ke,y.colorSpace),Ce=o&&y.isVideoTexture!==!0,N=oe.__version===void 0||me===!0;let Re=S(y,Ae,Pe);K(s.TEXTURE_CUBE_MAP,y,Pe);let ge;if(Fe){Ce&&N&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,Te,Ae.width,Ae.height);for(let Q=0;Q<6;Q++){ge=ue[Q].mipmaps;for(let Se=0;Se<ge.length;Se++){const Ne=ge[Se];y.format!==mn?ze!==null?Ce?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se,0,0,Ne.width,Ne.height,ze,Ne.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se,Te,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se,0,0,Ne.width,Ne.height,ze,ke,Ne.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se,Te,Ne.width,Ne.height,0,ze,ke,Ne.data)}}}else{ge=y.mipmaps,Ce&&N&&(ge.length>0&&Re++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,Te,ue[0].width,ue[0].height));for(let Q=0;Q<6;Q++)if(Ie){Ce?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ue[Q].width,ue[Q].height,ze,ke,ue[Q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Te,ue[Q].width,ue[Q].height,0,ze,ke,ue[Q].data);for(let Se=0;Se<ge.length;Se++){const Oe=ge[Se].image[Q].image;Ce?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se+1,0,0,Oe.width,Oe.height,ze,ke,Oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se+1,Te,Oe.width,Oe.height,0,ze,ke,Oe.data)}}else{Ce?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ze,ke,ue[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Te,ze,ke,ue[Q]);for(let Se=0;Se<ge.length;Se++){const Ne=ge[Se];Ce?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se+1,0,0,ze,ke,Ne.image[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se+1,Te,ze,ke,Ne.image[Q])}}}C(y,Pe)&&w(s.TEXTURE_CUBE_MAP),oe.__version=Z.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function he(A,y,z,me,Z,oe){const _e=i.convert(z.format,z.colorSpace),pe=i.convert(z.type),ye=D(z.internalFormat,_e,pe,z.colorSpace);if(!r.get(y).__hasExternalTextures){const Ie=Math.max(1,y.width>>oe),ue=Math.max(1,y.height>>oe);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,oe,ye,Ie,ue,y.depth,0,_e,pe,null):t.texImage2D(Z,oe,ye,Ie,ue,0,_e,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),xe(y)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,Z,r.get(z).__webglTexture,0,fe(y)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,Z,r.get(z).__webglTexture,oe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function R(A,y,z){if(s.bindRenderbuffer(s.RENDERBUFFER,A),y.depthBuffer&&!y.stencilBuffer){let me=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(z||xe(y)){const Z=y.depthTexture;Z&&Z.isDepthTexture&&(Z.type===$n?me=s.DEPTH_COMPONENT32F:Z.type===Qn&&(me=s.DEPTH_COMPONENT24));const oe=fe(y);xe(y)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,me,y.width,y.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,me,y.width,y.height)}else s.renderbufferStorage(s.RENDERBUFFER,me,y.width,y.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,A)}else if(y.depthBuffer&&y.stencilBuffer){const me=fe(y);z&&xe(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,me,s.DEPTH24_STENCIL8,y.width,y.height):xe(y)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,me,s.DEPTH24_STENCIL8,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,A)}else{const me=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Z=0;Z<me.length;Z++){const oe=me[Z],_e=i.convert(oe.format,oe.colorSpace),pe=i.convert(oe.type),ye=D(oe.internalFormat,_e,pe,oe.colorSpace),Fe=fe(y);z&&xe(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Fe,ye,y.width,y.height):xe(y)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Fe,ye,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ye,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function de(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),O(y.depthTexture,0);const me=r.get(y.depthTexture).__webglTexture,Z=fe(y);if(y.depthTexture.format===xi)xe(y)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0);else if(y.depthTexture.format===rr)xe(y)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function J(A){const y=r.get(A),z=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");de(y.__webglFramebuffer,A)}else if(z){y.__webglDepthbuffer=[];for(let me=0;me<6;me++)t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[me]),y.__webglDepthbuffer[me]=s.createRenderbuffer(),R(y.__webglDepthbuffer[me],A,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),R(y.__webglDepthbuffer,A,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function ae(A,y,z){const me=r.get(A);y!==void 0&&he(me.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&J(A)}function $(A){const y=A.texture,z=r.get(A),me=r.get(y);A.addEventListener("dispose",F),A.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=y.version,a.memory.textures++);const Z=A.isWebGLCubeRenderTarget===!0,oe=A.isWebGLMultipleRenderTargets===!0,_e=x(A)||o;if(Z){z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(o&&y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[pe]=[];for(let ye=0;ye<y.mipmaps.length;ye++)z.__webglFramebuffer[pe][ye]=s.createFramebuffer()}else z.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let pe=0;pe<y.mipmaps.length;pe++)z.__webglFramebuffer[pe]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(oe)if(n.drawBuffers){const pe=A.texture;for(let ye=0,Fe=pe.length;ye<Fe;ye++){const Ie=r.get(pe[ye]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&xe(A)===!1){const pe=oe?y:[y];z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ye=0;ye<pe.length;ye++){const Fe=pe[ye];z.__webglColorRenderbuffer[ye]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[ye]);const Ie=i.convert(Fe.format,Fe.colorSpace),ue=i.convert(Fe.type),Ae=D(Fe.internalFormat,Ie,ue,Fe.colorSpace,A.isXRRenderTarget===!0),Pe=fe(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,Ae,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,z.__webglColorRenderbuffer[ye])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),R(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),K(s.TEXTURE_CUBE_MAP,y,_e);for(let pe=0;pe<6;pe++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let ye=0;ye<y.mipmaps.length;ye++)he(z.__webglFramebuffer[pe][ye],A,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye);else he(z.__webglFramebuffer[pe],A,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);C(y,_e)&&w(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){const pe=A.texture;for(let ye=0,Fe=pe.length;ye<Fe;ye++){const Ie=pe[ye],ue=r.get(Ie);t.bindTexture(s.TEXTURE_2D,ue.__webglTexture),K(s.TEXTURE_2D,Ie,_e),he(z.__webglFramebuffer,A,Ie,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,0),C(Ie,_e)&&w(s.TEXTURE_2D)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?pe=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,me.__webglTexture),K(pe,y,_e),o&&y.mipmaps&&y.mipmaps.length>0)for(let ye=0;ye<y.mipmaps.length;ye++)he(z.__webglFramebuffer[ye],A,y,s.COLOR_ATTACHMENT0,pe,ye);else he(z.__webglFramebuffer,A,y,s.COLOR_ATTACHMENT0,pe,0);C(y,_e)&&w(pe),t.unbindTexture()}A.depthBuffer&&J(A)}function Ee(A){const y=x(A)||o,z=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let me=0,Z=z.length;me<Z;me++){const oe=z[me];if(C(oe,y)){const _e=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,pe=r.get(oe).__webglTexture;t.bindTexture(_e,pe),w(_e),t.unbindTexture()}}}function te(A){if(o&&A.samples>0&&xe(A)===!1){const y=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],z=A.width,me=A.height;let Z=s.COLOR_BUFFER_BIT;const oe=[],_e=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=r.get(A),ye=A.isWebGLMultipleRenderTargets===!0;if(ye)for(let Fe=0;Fe<y.length;Fe++)t.bindFramebuffer(s.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Fe=0;Fe<y.length;Fe++){oe.push(s.COLOR_ATTACHMENT0+Fe),A.depthBuffer&&oe.push(_e);const Ie=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(Ie===!1&&(A.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),ye&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,pe.__webglColorRenderbuffer[Fe]),Ie===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[_e]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_e])),ye){const ue=r.get(y[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ue,0)}s.blitFramebuffer(0,0,z,me,0,0,z,me,Z,s.NEAREST),d&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ye)for(let Fe=0;Fe<y.length;Fe++){t.bindFramebuffer(s.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,pe.__webglColorRenderbuffer[Fe]);const Ie=r.get(y[Fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,Ie,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function fe(A){return Math.min(h,A.samples)}function xe(A){const y=r.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ee(A){const y=a.render.frame;g.get(A)!==y&&(g.set(A,y),A.update())}function Ue(A,y){const z=A.colorSpace,me=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===No||z!==kn&&z!==en&&(tt.getTransfer(z)===ot?o===!1?e.has("EXT_sRGB")===!0&&me===mn?(A.format=No,A.minFilter=Wt,A.generateMipmaps=!1):y=Ku.sRGBToLinear(y):(me!==mn||Z!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}this.allocateTextureUnit=ie,this.resetTextureUnits=Y,this.setTexture2D=O,this.setTexture2DArray=E,this.setTexture3D=U,this.setTextureCube=H,this.rebindTextures=ae,this.setupRenderTarget=$,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=he,this.useMultisampledRTT=xe}function Ov(s,e,t){const r=t.isWebGL2;function n(i,a=en){let o;const l=tt.getTransfer(a);if(i===ni)return s.UNSIGNED_BYTE;if(i===Gu)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Hu)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Tf)return s.BYTE;if(i===bf)return s.SHORT;if(i===hl)return s.UNSIGNED_SHORT;if(i===ku)return s.INT;if(i===Qn)return s.UNSIGNED_INT;if(i===$n)return s.FLOAT;if(i===On)return r?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(i===wf)return s.ALPHA;if(i===mn)return s.RGBA;if(i===Af)return s.LUMINANCE;if(i===Cf)return s.LUMINANCE_ALPHA;if(i===xi)return s.DEPTH_COMPONENT;if(i===rr)return s.DEPTH_STENCIL;if(i===No)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(i===Rf)return s.RED;if(i===Vu)return s.RED_INTEGER;if(i===Pf)return s.RG;if(i===Wu)return s.RG_INTEGER;if(i===Xu)return s.RGBA_INTEGER;if(i===za||i===ka||i===Ga||i===Ha)if(l===ot)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===za)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ka)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ha)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===za)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ka)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ga)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ha)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vl||i===Wl||i===Xl||i===ql)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Vl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ql)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Lf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===Yl||i===jl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Yl)return l===ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===jl)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Jl||i===Kl||i===Zl||i===Ql||i===$l||i===ec||i===tc||i===nc||i===ic||i===rc||i===sc||i===ac||i===oc||i===lc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Jl)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kl)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zl)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ql)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$l)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ec)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tc)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nc)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ic)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rc)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sc)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ac)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oc)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lc)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Va||i===cc||i===uc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Va)return l===ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Uf||i===hc||i===fc||i===dc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Va)return o.COMPRESSED_RED_RGTC1_EXT;if(i===hc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_i?r?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[i]!==void 0?s[i]:null}return{convert:n}}class Bv extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Gs extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zv={type:"move"};class mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,i=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,r),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,r),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&i!==null&&(n=i),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zv)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Gs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class kv extends Ot{constructor(e,t,r,n,i,a,o,l,c,u){if(u=u!==void 0?u:xi,u!==xi&&u!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===xi&&(r=Qn),r===void 0&&u===rr&&(r=_i),super(null,n,i,a,o,l,u,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ft,this.minFilter=l!==void 0?l:Ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Gv extends cr{constructor(e,t){super();const r=this;let n=null,i=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const v=t.getContextAttributes();let m=null,p=null;const M=[],_=[],x=new $t;x.layers.enable(1),x.viewport=new _t;const T=new $t;T.layers.enable(2),T.viewport=new _t;const C=[x,T],w=new Bv;w.layers.enable(1),w.layers.enable(2);let D=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(E){let U=M[E];return U===void 0&&(U=new mo,M[E]=U),U.getTargetRaySpace()},this.getControllerGrip=function(E){let U=M[E];return U===void 0&&(U=new mo,M[E]=U),U.getGripSpace()},this.getHand=function(E){let U=M[E];return U===void 0&&(U=new mo,M[E]=U),U.getHandSpace()};function b(E){const U=_.indexOf(E.inputSource);if(U===-1)return;const H=M[U];H!==void 0&&(H.update(E.inputSource,E.frame,c||a),H.dispatchEvent({type:E.type,data:E.inputSource}))}function q(){n.removeEventListener("select",b),n.removeEventListener("selectstart",b),n.removeEventListener("selectend",b),n.removeEventListener("squeeze",b),n.removeEventListener("squeezestart",b),n.removeEventListener("squeezeend",b),n.removeEventListener("end",q),n.removeEventListener("inputsourceschange",F);for(let E=0;E<M.length;E++){const U=_[E];U!==null&&(_[E]=null,M[E].disconnect(U))}D=null,S=null,e.setRenderTarget(m),d=null,f=null,h=null,n=null,p=null,O.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(E){i=E,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(E){o=E,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(E){c=E},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(E){if(n=E,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",b),n.addEventListener("selectstart",b),n.addEventListener("selectend",b),n.addEventListener("squeeze",b),n.addEventListener("squeezestart",b),n.addEventListener("squeezeend",b),n.addEventListener("end",q),n.addEventListener("inputsourceschange",F),v.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const U={antialias:n.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:i};d=new XRWebGLLayer(n,t,U),n.updateRenderState({baseLayer:d}),p=new gn(d.framebufferWidth,d.framebufferHeight,{format:mn,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let U=null,H=null,X=null;v.depth&&(X=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,U=v.stencil?rr:xi,H=v.stencil?_i:Qn);const W={colorFormat:t.RGBA8,depthFormat:X,scaleFactor:i};h=new XRWebGLBinding(n,t),f=h.createProjectionLayer(W),n.updateRenderState({layers:[f]}),p=new gn(f.textureWidth,f.textureHeight,{format:mn,type:ni,depthTexture:new kv(f.textureWidth,f.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const re=e.properties.get(p);re.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),O.setContext(n),O.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function F(E){for(let U=0;U<E.removed.length;U++){const H=E.removed[U],X=_.indexOf(H);X>=0&&(_[X]=null,M[X].disconnect(H))}for(let U=0;U<E.added.length;U++){const H=E.added[U];let X=_.indexOf(H);if(X===-1){for(let re=0;re<M.length;re++)if(re>=_.length){_.push(H),X=re;break}else if(_[re]===null){_[re]=H,X=re;break}if(X===-1)break}const W=M[X];W&&W.connect(H)}}const G=new I,P=new I;function k(E,U,H){G.setFromMatrixPosition(U.matrixWorld),P.setFromMatrixPosition(H.matrixWorld);const X=G.distanceTo(P),W=U.projectionMatrix.elements,re=H.projectionMatrix.elements,K=W[14]/(W[10]-1),ne=W[14]/(W[10]+1),ve=(W[9]+1)/W[5],we=(W[9]-1)/W[5],he=(W[8]-1)/W[0],R=(re[8]+1)/re[0],de=K*he,J=K*R,ae=X/(-he+R),$=ae*-he;U.matrixWorld.decompose(E.position,E.quaternion,E.scale),E.translateX($),E.translateZ(ae),E.matrixWorld.compose(E.position,E.quaternion,E.scale),E.matrixWorldInverse.copy(E.matrixWorld).invert();const Ee=K+ae,te=ne+ae,fe=de-$,xe=J+(X-$),ee=ve*ne/te*Ee,Ue=we*ne/te*Ee;E.projectionMatrix.makePerspective(fe,xe,ee,Ue,Ee,te),E.projectionMatrixInverse.copy(E.projectionMatrix).invert()}function B(E,U){U===null?E.matrixWorld.copy(E.matrix):E.matrixWorld.multiplyMatrices(U.matrixWorld,E.matrix),E.matrixWorldInverse.copy(E.matrixWorld).invert()}this.updateCamera=function(E){if(n===null)return;w.near=T.near=x.near=E.near,w.far=T.far=x.far=E.far,(D!==w.near||S!==w.far)&&(n.updateRenderState({depthNear:w.near,depthFar:w.far}),D=w.near,S=w.far);const U=E.parent,H=w.cameras;B(w,U);for(let X=0;X<H.length;X++)B(H[X],U);H.length===2?k(w,x,T):w.projectionMatrix.copy(x.projectionMatrix),Y(E,w,U)};function Y(E,U,H){H===null?E.matrix.copy(U.matrixWorld):(E.matrix.copy(H.matrixWorld),E.matrix.invert(),E.matrix.multiply(U.matrixWorld)),E.matrix.decompose(E.position,E.quaternion,E.scale),E.updateMatrixWorld(!0),E.projectionMatrix.copy(U.projectionMatrix),E.projectionMatrixInverse.copy(U.projectionMatrixInverse),E.isPerspectiveCamera&&(E.fov=Oo*2*Math.atan(1/E.projectionMatrix.elements[5]),E.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(E){l=E,f!==null&&(f.fixedFoveation=E),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=E)};let ie=null;function V(E,U){if(u=U.getViewerPose(c||a),g=U,u!==null){const H=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let X=!1;H.length!==w.cameras.length&&(w.cameras.length=0,X=!0);for(let W=0;W<H.length;W++){const re=H[W];let K=null;if(d!==null)K=d.getViewport(re);else{const ve=h.getViewSubImage(f,re);K=ve.viewport,W===0&&(e.setRenderTargetTextures(p,ve.colorTexture,f.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(p))}let ne=C[W];ne===void 0&&(ne=new $t,ne.layers.enable(W),ne.viewport=new _t,C[W]=ne),ne.matrix.fromArray(re.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(re.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(K.x,K.y,K.width,K.height),W===0&&(w.matrix.copy(ne.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),X===!0&&w.cameras.push(ne)}}for(let H=0;H<M.length;H++){const X=_[H],W=M[H];X!==null&&W!==void 0&&W.update(X,U,c||a)}ie&&ie(E,U),U.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:U}),g=null}const O=new sh;O.setAnimationLoop(V),this.setAnimationLoop=function(E){ie=E},this.dispose=function(){}}}function Hv(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function r(m,p){p.color.getRGB(m.fogColor.value,nh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,M,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),h(m,p)):p.isMeshPhongMaterial?(i(m,p),u(m,p)):p.isMeshStandardMaterial?(i(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(i(m,p),g(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),v(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Nt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Nt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const _=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Nt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function Vv(s,e,t,r){let n={},i={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,_){const x=_.program;r.uniformBlockBinding(M,x)}function c(M,_){let x=n[M.id];x===void 0&&(g(M),x=u(M),n[M.id]=x,M.addEventListener("dispose",m));const T=_.program;r.updateUBOMapping(M,T);const C=e.render.frame;i[M.id]!==C&&(f(M),i[M.id]=C)}function u(M){const _=h();M.__bindingPointIndex=_;const x=s.createBuffer(),T=M.__size,C=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,T,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,x),x}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const _=n[M.id],x=M.uniforms,T=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let C=0,w=x.length;C<w;C++){const D=x[C];if(d(D,C,T)===!0){const S=D.__offset,b=Array.isArray(D.value)?D.value:[D.value];let q=0;for(let F=0;F<b.length;F++){const G=b[F],P=v(G);typeof G=="number"?(D.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,S+q,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=G.elements[0],D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=G.elements[0],D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=G.elements[0]):(G.toArray(D.__data,q),q+=P.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,S,D.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(M,_,x){const T=M.value;if(x[_]===void 0){if(typeof T=="number")x[_]=T;else{const C=Array.isArray(T)?T:[T],w=[];for(let D=0;D<C.length;D++)w.push(C[D].clone());x[_]=w}return!0}else if(typeof T=="number"){if(x[_]!==T)return x[_]=T,!0}else{const C=Array.isArray(x[_])?x[_]:[x[_]],w=Array.isArray(T)?T:[T];for(let D=0;D<C.length;D++){const S=C[D];if(S.equals(w[D])===!1)return S.copy(w[D]),!0}}return!1}function g(M){const _=M.uniforms;let x=0;const T=16;let C=0;for(let w=0,D=_.length;w<D;w++){const S=_[w],b={boundary:0,storage:0},q=Array.isArray(S.value)?S.value:[S.value];for(let F=0,G=q.length;F<G;F++){const P=q[F],k=v(P);b.boundary+=k.boundary,b.storage+=k.storage}if(S.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=x,w>0){C=x%T;const F=T-C;C!==0&&F-b.boundary<0&&(x+=T-C,S.__offset=x)}x+=b.storage}return C=x%T,C>0&&(x+=T-C),M.__size=x,M.__cache={},this}function v(M){const _={boundary:0,storage:0};return typeof M=="number"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){const _=M.target;_.removeEventListener("dispose",m);const x=a.indexOf(_.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(n[_.id]),delete n[_.id],delete i[_.id]}function p(){for(const M in n)s.deleteBuffer(n[M]);a=[],n={},i={}}return{bind:l,update:c,dispose:p}}class fh{constructor(e={}){const{canvas:t=Wf(),context:r=null,depth:n=!0,stencil:i=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;r!==null?f=r.getContextAttributes().alpha:f=a;const d=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xt,this._useLegacyLights=!1,this.toneMapping=ti,this.toneMappingExposure=1;const _=this;let x=!1,T=0,C=0,w=null,D=-1,S=null;const b=new _t,q=new _t;let F=null;const G=new Je(0);let P=0,k=t.width,B=t.height,Y=1,ie=null,V=null;const O=new _t(0,0,k,B),E=new _t(0,0,k,B);let U=!1;const H=new pl;let X=!1,W=!1,re=null;const K=new mt,ne=new be,ve=new I,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return w===null?Y:1}let R=r;function de(L,j){for(let se=0;se<L.length;se++){const le=L[se],ce=t.getContext(le,j);if(ce!==null)return ce}return null}try{const L={alpha:!0,depth:n,stencil:i,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cl}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",Re,!1),R===null){const j=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&j.shift(),R=de(j,L),R===null)throw de(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&R instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let J,ae,$,Ee,te,fe,xe,ee,Ue,A,y,z,me,Z,oe,_e,pe,ye,Fe,Ie,ue,Ae,Pe,ze;function ke(){J=new tg(R),ae=new Jm(R,J,e),J.init(ae),Ae=new Ov(R,J,ae),$=new Iv(R,J,ae),Ee=new rg(R),te=new Ev,fe=new Nv(R,J,$,te,ae,Ae,Ee),xe=new Zm(_),ee=new eg(_),Ue=new pd(R,ae),Pe=new Ym(R,J,Ue,ae),A=new ng(R,Ue,Ee,Pe),y=new lg(R,A,Ue,Ee),Fe=new og(R,ae,fe),_e=new Km(te),z=new Mv(_,xe,ee,J,ae,Pe,_e),me=new Hv(_,te),Z=new bv,oe=new Lv(J,ae),ye=new qm(_,xe,ee,$,y,f,l),pe=new Fv(_,y,ae),ze=new Vv(R,Ee,ae,$),Ie=new jm(R,J,Ee,ae),ue=new ig(R,J,Ee,ae),Ee.programs=z.programs,_.capabilities=ae,_.extensions=J,_.properties=te,_.renderLists=Z,_.shadowMap=pe,_.state=$,_.info=Ee}ke();const Te=new Gv(_,R);this.xr=Te,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const L=J.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=J.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(L){L!==void 0&&(Y=L,this.setSize(k,B,!1))},this.getSize=function(L){return L.set(k,B)},this.setSize=function(L,j,se=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=L,B=j,t.width=Math.floor(L*Y),t.height=Math.floor(j*Y),se===!0&&(t.style.width=L+"px",t.style.height=j+"px"),this.setViewport(0,0,L,j)},this.getDrawingBufferSize=function(L){return L.set(k*Y,B*Y).floor()},this.setDrawingBufferSize=function(L,j,se){k=L,B=j,Y=se,t.width=Math.floor(L*se),t.height=Math.floor(j*se),this.setViewport(0,0,L,j)},this.getCurrentViewport=function(L){return L.copy(b)},this.getViewport=function(L){return L.copy(O)},this.setViewport=function(L,j,se,le){L.isVector4?O.set(L.x,L.y,L.z,L.w):O.set(L,j,se,le),$.viewport(b.copy(O).multiplyScalar(Y).floor())},this.getScissor=function(L){return L.copy(E)},this.setScissor=function(L,j,se,le){L.isVector4?E.set(L.x,L.y,L.z,L.w):E.set(L,j,se,le),$.scissor(q.copy(E).multiplyScalar(Y).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(L){$.setScissorTest(U=L)},this.setOpaqueSort=function(L){ie=L},this.setTransparentSort=function(L){V=L},this.getClearColor=function(L){return L.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(L=!0,j=!0,se=!0){let le=0;if(L){let ce=!1;if(w!==null){const Be=w.texture.format;ce=Be===Xu||Be===Wu||Be===Vu}if(ce){const Be=w.texture.type,Ge=Be===ni||Be===Qn||Be===hl||Be===_i||Be===Gu||Be===Hu,Ve=ye.getClearColor(),Me=ye.getClearAlpha(),qe=Ve.r,Ye=Ve.g,We=Ve.b;Ge?(d[0]=qe,d[1]=Ye,d[2]=We,d[3]=Me,R.clearBufferuiv(R.COLOR,0,d)):(g[0]=qe,g[1]=Ye,g[2]=We,g[3]=Me,R.clearBufferiv(R.COLOR,0,g))}else le|=R.COLOR_BUFFER_BIT}j&&(le|=R.DEPTH_BUFFER_BIT),se&&(le|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),Z.dispose(),oe.dispose(),te.dispose(),xe.dispose(),ee.dispose(),y.dispose(),Pe.dispose(),ze.dispose(),z.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",nt),Te.removeEventListener("sessionend",je),re&&(re.dispose(),re=null),$e.stop()};function Ce(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const L=Ee.autoReset,j=pe.enabled,se=pe.autoUpdate,le=pe.needsUpdate,ce=pe.type;ke(),Ee.autoReset=L,pe.enabled=j,pe.autoUpdate=se,pe.needsUpdate=le,pe.type=ce}function Re(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function ge(L){const j=L.target;j.removeEventListener("dispose",ge),Q(j)}function Q(L){Se(L),te.remove(L)}function Se(L){const j=te.get(L).programs;j!==void 0&&(j.forEach(function(se){z.releaseProgram(se)}),L.isShaderMaterial&&z.releaseShaderCache(L))}this.renderBufferDirect=function(L,j,se,le,ce,Be){j===null&&(j=we);const Ge=ce.isMesh&&ce.matrixWorld.determinant()<0,Ve=fs(L,j,se,le,ce);$.setMaterial(le,Ge);let Me=se.index,qe=1;if(le.wireframe===!0){if(Me=A.getWireframeAttribute(se),Me===void 0)return;qe=2}const Ye=se.drawRange,We=se.attributes.position;let at=Ye.start*qe,Ct=(Ye.start+Ye.count)*qe;Be!==null&&(at=Math.max(at,Be.start*qe),Ct=Math.min(Ct,(Be.start+Be.count)*qe)),Me!==null?(at=Math.max(at,0),Ct=Math.min(Ct,Me.count)):We!=null&&(at=Math.max(at,0),Ct=Math.min(Ct,We.count));const dt=Ct-at;if(dt<0||dt===1/0)return;Pe.setup(ce,le,Ve,se,Me);let zt,it=Ie;if(Me!==null&&(zt=Ue.get(Me),it=ue,it.setIndex(zt)),ce.isMesh)le.wireframe===!0?($.setLineWidth(le.wireframeLinewidth*he()),it.setMode(R.LINES)):it.setMode(R.TRIANGLES);else if(ce.isLine){let Ze=le.linewidth;Ze===void 0&&(Ze=1),$.setLineWidth(Ze*he()),ce.isLineSegments?it.setMode(R.LINES):ce.isLineLoop?it.setMode(R.LINE_LOOP):it.setMode(R.LINE_STRIP)}else ce.isPoints?it.setMode(R.POINTS):ce.isSprite&&it.setMode(R.TRIANGLES);if(ce.isInstancedMesh)it.renderInstances(at,dt,ce.count);else if(se.isInstancedBufferGeometry){const Ze=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Gn=Math.min(se.instanceCount,Ze);it.renderInstances(at,dt,Gn)}else it.render(at,dt)};function Ne(L,j,se){L.transparent===!0&&L.side===dn&&L.forceSinglePass===!1?(L.side=Nt,L.needsUpdate=!0,Bt(L,j,se),L.side=zn,L.needsUpdate=!0,Bt(L,j,se),L.side=dn):Bt(L,j,se)}this.compile=function(L,j,se=null){se===null&&(se=L),m=oe.get(se),m.init(),M.push(m),se.traverseVisible(function(ce){ce.isLight&&ce.layers.test(j.layers)&&(m.pushLight(ce),ce.castShadow&&m.pushShadow(ce))}),L!==se&&L.traverseVisible(function(ce){ce.isLight&&ce.layers.test(j.layers)&&(m.pushLight(ce),ce.castShadow&&m.pushShadow(ce))}),m.setupLights(_._useLegacyLights);const le=new Set;return L.traverse(function(ce){const Be=ce.material;if(Be)if(Array.isArray(Be))for(let Ge=0;Ge<Be.length;Ge++){const Ve=Be[Ge];Ne(Ve,se,ce),le.add(Ve)}else Ne(Be,se,ce),le.add(Be)}),M.pop(),m=null,le},this.compileAsync=function(L,j,se=null){const le=this.compile(L,j,se);return new Promise(ce=>{function Be(){if(le.forEach(function(Ge){te.get(Ge).currentProgram.isReady()&&le.delete(Ge)}),le.size===0){ce(L);return}setTimeout(Be,10)}J.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let Oe=null;function Xe(L){Oe&&Oe(L)}function nt(){$e.stop()}function je(){$e.start()}const $e=new sh;$e.setAnimationLoop(Xe),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(L){Oe=L,Te.setAnimationLoop(L),L===null?$e.stop():$e.start()},Te.addEventListener("sessionstart",nt),Te.addEventListener("sessionend",je),this.render=function(L,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(j),j=Te.getCamera()),L.isScene===!0&&L.onBeforeRender(_,L,j,w),m=oe.get(L,M.length),m.init(),M.push(m),K.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),H.setFromProjectionMatrix(K),W=this.localClippingEnabled,X=_e.init(this.clippingPlanes,W),v=Z.get(L,p.length),v.init(),p.push(v),ft(L,j,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(ie,V),this.info.render.frame++,X===!0&&_e.beginShadows();const se=m.state.shadowsArray;if(pe.render(se,L,j),X===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),ye.render(v,L),m.setupLights(_._useLegacyLights),j.isArrayCamera){const le=j.cameras;for(let ce=0,Be=le.length;ce<Be;ce++){const Ge=le[ce];tn(v,L,Ge,Ge.viewport)}}else tn(v,L,j);w!==null&&(fe.updateMultisampleRenderTarget(w),fe.updateRenderTargetMipmap(w)),L.isScene===!0&&L.onAfterRender(_,L,j),Pe.resetDefaultState(),D=-1,S=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function ft(L,j,se,le){if(L.visible===!1)return;if(L.layers.test(j.layers)){if(L.isGroup)se=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(j);else if(L.isLight)m.pushLight(L),L.castShadow&&m.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||H.intersectsSprite(L)){le&&ve.setFromMatrixPosition(L.matrixWorld).applyMatrix4(K);const Ge=y.update(L),Ve=L.material;Ve.visible&&v.push(L,Ge,Ve,se,ve.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||H.intersectsObject(L))){const Ge=y.update(L),Ve=L.material;if(le&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),ve.copy(L.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),ve.copy(Ge.boundingSphere.center)),ve.applyMatrix4(L.matrixWorld).applyMatrix4(K)),Array.isArray(Ve)){const Me=Ge.groups;for(let qe=0,Ye=Me.length;qe<Ye;qe++){const We=Me[qe],at=Ve[We.materialIndex];at&&at.visible&&v.push(L,Ge,at,se,ve.z,We)}}else Ve.visible&&v.push(L,Ge,Ve,se,ve.z,null)}}const Be=L.children;for(let Ge=0,Ve=Be.length;Ge<Ve;Ge++)ft(Be[Ge],j,se,le)}function tn(L,j,se,le){const ce=L.opaque,Be=L.transmissive,Ge=L.transparent;m.setupLightsView(se),X===!0&&_e.setGlobalState(_.clippingPlanes,se),Be.length>0&&nn(ce,Be,j,se),le&&$.viewport(b.copy(le)),ce.length>0&&qt(ce,j,se),Be.length>0&&qt(Be,j,se),Ge.length>0&&qt(Ge,j,se),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function nn(L,j,se,le){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;const Be=ae.isWebGL2;re===null&&(re=new gn(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?On:ni,minFilter:$r,samples:Be?4:0})),_.getDrawingBufferSize(ne),Be?re.setSize(ne.x,ne.y):re.setSize(Bo(ne.x),Bo(ne.y));const Ge=_.getRenderTarget();_.setRenderTarget(re),_.getClearColor(G),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();const Ve=_.toneMapping;_.toneMapping=ti,qt(L,se,le),fe.updateMultisampleRenderTarget(re),fe.updateRenderTargetMipmap(re);let Me=!1;for(let qe=0,Ye=j.length;qe<Ye;qe++){const We=j[qe],at=We.object,Ct=We.geometry,dt=We.material,zt=We.group;if(dt.side===dn&&at.layers.test(le.layers)){const it=dt.side;dt.side=Nt,dt.needsUpdate=!0,_n(at,se,le,Ct,dt,zt),dt.side=it,dt.needsUpdate=!0,Me=!0}}Me===!0&&(fe.updateMultisampleRenderTarget(re),fe.updateRenderTargetMipmap(re)),_.setRenderTarget(Ge),_.setClearColor(G,P),_.toneMapping=Ve}function qt(L,j,se){const le=j.isScene===!0?j.overrideMaterial:null;for(let ce=0,Be=L.length;ce<Be;ce++){const Ge=L[ce],Ve=Ge.object,Me=Ge.geometry,qe=le===null?Ge.material:le,Ye=Ge.group;Ve.layers.test(se.layers)&&_n(Ve,j,se,Me,qe,Ye)}}function _n(L,j,se,le,ce,Be){L.onBeforeRender(_,j,se,le,ce,Be),L.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ce.onBeforeRender(_,j,se,le,L,Be),ce.transparent===!0&&ce.side===dn&&ce.forceSinglePass===!1?(ce.side=Nt,ce.needsUpdate=!0,_.renderBufferDirect(se,j,le,ce,L,Be),ce.side=zn,ce.needsUpdate=!0,_.renderBufferDirect(se,j,le,ce,L,Be),ce.side=dn):_.renderBufferDirect(se,j,le,ce,L,Be),L.onAfterRender(_,j,se,le,ce,Be)}function Bt(L,j,se){j.isScene!==!0&&(j=we);const le=te.get(L),ce=m.state.lights,Be=m.state.shadowsArray,Ge=ce.state.version,Ve=z.getParameters(L,ce.state,Be,j,se),Me=z.getProgramCacheKey(Ve);let qe=le.programs;le.environment=L.isMeshStandardMaterial?j.environment:null,le.fog=j.fog,le.envMap=(L.isMeshStandardMaterial?ee:xe).get(L.envMap||le.environment),qe===void 0&&(L.addEventListener("dispose",ge),qe=new Map,le.programs=qe);let Ye=qe.get(Me);if(Ye!==void 0){if(le.currentProgram===Ye&&le.lightsStateVersion===Ge)return xn(L,Ve),Ye}else Ve.uniforms=z.getUniforms(L),L.onBuild(se,Ve,_),L.onBeforeCompile(Ve,_),Ye=z.acquireProgram(Ve,Me),qe.set(Me,Ye),le.uniforms=Ve.uniforms;const We=le.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(We.clippingPlanes=_e.uniform),xn(L,Ve),le.needsLights=wa(L),le.lightsStateVersion=Ge,le.needsLights&&(We.ambientLightColor.value=ce.state.ambient,We.lightProbe.value=ce.state.probe,We.directionalLights.value=ce.state.directional,We.directionalLightShadows.value=ce.state.directionalShadow,We.spotLights.value=ce.state.spot,We.spotLightShadows.value=ce.state.spotShadow,We.rectAreaLights.value=ce.state.rectArea,We.ltc_1.value=ce.state.rectAreaLTC1,We.ltc_2.value=ce.state.rectAreaLTC2,We.pointLights.value=ce.state.point,We.pointLightShadows.value=ce.state.pointShadow,We.hemisphereLights.value=ce.state.hemi,We.directionalShadowMap.value=ce.state.directionalShadowMap,We.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,We.spotShadowMap.value=ce.state.spotShadowMap,We.spotLightMatrix.value=ce.state.spotLightMatrix,We.spotLightMap.value=ce.state.spotLightMap,We.pointShadowMap.value=ce.state.pointShadowMap,We.pointShadowMatrix.value=ce.state.pointShadowMatrix),le.currentProgram=Ye,le.uniformsList=null,Ye}function Mt(L){if(L.uniformsList===null){const j=L.currentProgram.getUniforms();L.uniformsList=$s.seqWithValue(j.seq,L.uniforms)}return L.uniformsList}function xn(L,j){const se=te.get(L);se.outputColorSpace=j.outputColorSpace,se.instancing=j.instancing,se.instancingColor=j.instancingColor,se.skinning=j.skinning,se.morphTargets=j.morphTargets,se.morphNormals=j.morphNormals,se.morphColors=j.morphColors,se.morphTargetsCount=j.morphTargetsCount,se.numClippingPlanes=j.numClippingPlanes,se.numIntersection=j.numClipIntersection,se.vertexAlphas=j.vertexAlphas,se.vertexTangents=j.vertexTangents,se.toneMapping=j.toneMapping}function fs(L,j,se,le,ce){j.isScene!==!0&&(j=we),fe.resetTextureUnits();const Be=j.fog,Ge=le.isMeshStandardMaterial?j.environment:null,Ve=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:kn,Me=(le.isMeshStandardMaterial?ee:xe).get(le.envMap||Ge),qe=le.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,Ye=!!se.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),We=!!se.morphAttributes.position,at=!!se.morphAttributes.normal,Ct=!!se.morphAttributes.color;let dt=ti;le.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(dt=_.toneMapping);const zt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,it=zt!==void 0?zt.length:0,Ze=te.get(le),Gn=m.state.lights;if(X===!0&&(W===!0||L!==S)){const bt=L===S&&le.id===D;_e.setState(le,L,bt)}let ct=!1;le.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Gn.state.version||Ze.outputColorSpace!==Ve||ce.isInstancedMesh&&Ze.instancing===!1||!ce.isInstancedMesh&&Ze.instancing===!0||ce.isSkinnedMesh&&Ze.skinning===!1||!ce.isSkinnedMesh&&Ze.skinning===!0||ce.isInstancedMesh&&Ze.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&Ze.instancingColor===!1&&ce.instanceColor!==null||Ze.envMap!==Me||le.fog===!0&&Ze.fog!==Be||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==_e.numPlanes||Ze.numIntersection!==_e.numIntersection)||Ze.vertexAlphas!==qe||Ze.vertexTangents!==Ye||Ze.morphTargets!==We||Ze.morphNormals!==at||Ze.morphColors!==Ct||Ze.toneMapping!==dt||ae.isWebGL2===!0&&Ze.morphTargetsCount!==it)&&(ct=!0):(ct=!0,Ze.__version=le.version);let rn=Ze.currentProgram;ct===!0&&(rn=Bt(le,j,ce));let Tr=!1,sn=!1,ri=!1;const pt=rn.getUniforms(),an=Ze.uniforms;if($.useProgram(rn.program)&&(Tr=!0,sn=!0,ri=!0),le.id!==D&&(D=le.id,sn=!0),Tr||S!==L){pt.setValue(R,"projectionMatrix",L.projectionMatrix),pt.setValue(R,"viewMatrix",L.matrixWorldInverse);const bt=pt.map.cameraPosition;bt!==void 0&&bt.setValue(R,ve.setFromMatrixPosition(L.matrixWorld)),ae.logarithmicDepthBuffer&&pt.setValue(R,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&pt.setValue(R,"isOrthographic",L.isOrthographicCamera===!0),S!==L&&(S=L,sn=!0,ri=!0)}if(ce.isSkinnedMesh){pt.setOptional(R,ce,"bindMatrix"),pt.setOptional(R,ce,"bindMatrixInverse");const bt=ce.skeleton;bt&&(ae.floatVertexTextures?(bt.boneTexture===null&&bt.computeBoneTexture(),pt.setValue(R,"boneTexture",bt.boneTexture,fe),pt.setValue(R,"boneTextureSize",bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const si=se.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0&&ae.isWebGL2===!0)&&Fe.update(ce,se,rn),(sn||Ze.receiveShadow!==ce.receiveShadow)&&(Ze.receiveShadow=ce.receiveShadow,pt.setValue(R,"receiveShadow",ce.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(an.envMap.value=Me,an.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),sn&&(pt.setValue(R,"toneMappingExposure",_.toneMappingExposure),Ze.needsLights&&Er(an,ri),Be&&le.fog===!0&&me.refreshFogUniforms(an,Be),me.refreshMaterialUniforms(an,le,Y,B,re),$s.upload(R,Mt(Ze),an,fe)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&($s.upload(R,Mt(Ze),an,fe),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&pt.setValue(R,"center",ce.center),pt.setValue(R,"modelViewMatrix",ce.modelViewMatrix),pt.setValue(R,"normalMatrix",ce.normalMatrix),pt.setValue(R,"modelMatrix",ce.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const bt=le.uniformsGroups;for(let kt=0,Aa=bt.length;kt<Aa;kt++)if(ae.isWebGL2){const ai=bt[kt];ze.update(ai,rn),ze.bind(ai,rn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return rn}function Er(L,j){L.ambientLightColor.needsUpdate=j,L.lightProbe.needsUpdate=j,L.directionalLights.needsUpdate=j,L.directionalLightShadows.needsUpdate=j,L.pointLights.needsUpdate=j,L.pointLightShadows.needsUpdate=j,L.spotLights.needsUpdate=j,L.spotLightShadows.needsUpdate=j,L.rectAreaLights.needsUpdate=j,L.hemisphereLights.needsUpdate=j}function wa(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(L,j,se){te.get(L.texture).__webglTexture=j,te.get(L.depthTexture).__webglTexture=se;const le=te.get(L);le.__hasExternalTextures=!0,le.__hasExternalTextures&&(le.__autoAllocateDepthBuffer=se===void 0,le.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,j){const se=te.get(L);se.__webglFramebuffer=j,se.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(L,j=0,se=0){w=L,T=j,C=se;let le=!0,ce=null,Be=!1,Ge=!1;if(L){const Me=te.get(L);Me.__useDefaultFramebuffer!==void 0?($.bindFramebuffer(R.FRAMEBUFFER,null),le=!1):Me.__webglFramebuffer===void 0?fe.setupRenderTarget(L):Me.__hasExternalTextures&&fe.rebindTextures(L,te.get(L.texture).__webglTexture,te.get(L.depthTexture).__webglTexture);const qe=L.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ge=!0);const Ye=te.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ye[j])?ce=Ye[j][se]:ce=Ye[j],Be=!0):ae.isWebGL2&&L.samples>0&&fe.useMultisampledRTT(L)===!1?ce=te.get(L).__webglMultisampledFramebuffer:Array.isArray(Ye)?ce=Ye[se]:ce=Ye,b.copy(L.viewport),q.copy(L.scissor),F=L.scissorTest}else b.copy(O).multiplyScalar(Y).floor(),q.copy(E).multiplyScalar(Y).floor(),F=U;if($.bindFramebuffer(R.FRAMEBUFFER,ce)&&ae.drawBuffers&&le&&$.drawBuffers(L,ce),$.viewport(b),$.scissor(q),$.setScissorTest(F),Be){const Me=te.get(L.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me.__webglTexture,se)}else if(Ge){const Me=te.get(L.texture),qe=j||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Me.__webglTexture,se||0,qe)}D=-1},this.readRenderTargetPixels=function(L,j,se,le,ce,Be,Ge){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=te.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ve=Ve[Ge]),Ve){$.bindFramebuffer(R.FRAMEBUFFER,Ve);try{const Me=L.texture,qe=Me.format,Ye=Me.type;if(qe!==mn&&Ae.convert(qe)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ye===On&&(J.has("EXT_color_buffer_half_float")||ae.isWebGL2&&J.has("EXT_color_buffer_float"));if(Ye!==ni&&Ae.convert(Ye)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ye===$n&&(ae.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=L.width-le&&se>=0&&se<=L.height-ce&&R.readPixels(j,se,le,ce,Ae.convert(qe),Ae.convert(Ye),Be)}finally{const Me=w!==null?te.get(w).__webglFramebuffer:null;$.bindFramebuffer(R.FRAMEBUFFER,Me)}}},this.copyFramebufferToTexture=function(L,j,se=0){const le=Math.pow(2,-se),ce=Math.floor(j.image.width*le),Be=Math.floor(j.image.height*le);fe.setTexture2D(j,0),R.copyTexSubImage2D(R.TEXTURE_2D,se,0,0,L.x,L.y,ce,Be),$.unbindTexture()},this.copyTextureToTexture=function(L,j,se,le=0){const ce=j.image.width,Be=j.image.height,Ge=Ae.convert(se.format),Ve=Ae.convert(se.type);fe.setTexture2D(se,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,se.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,se.unpackAlignment),j.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,le,L.x,L.y,ce,Be,Ge,Ve,j.image.data):j.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,le,L.x,L.y,j.mipmaps[0].width,j.mipmaps[0].height,Ge,j.mipmaps[0].data):R.texSubImage2D(R.TEXTURE_2D,le,L.x,L.y,Ge,Ve,j.image),le===0&&se.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),$.unbindTexture()},this.copyTextureToTexture3D=function(L,j,se,le,ce=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Be=L.max.x-L.min.x+1,Ge=L.max.y-L.min.y+1,Ve=L.max.z-L.min.z+1,Me=Ae.convert(le.format),qe=Ae.convert(le.type);let Ye;if(le.isData3DTexture)fe.setTexture3D(le,0),Ye=R.TEXTURE_3D;else if(le.isDataArrayTexture)fe.setTexture2DArray(le,0),Ye=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,le.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,le.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,le.unpackAlignment);const We=R.getParameter(R.UNPACK_ROW_LENGTH),at=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Ct=R.getParameter(R.UNPACK_SKIP_PIXELS),dt=R.getParameter(R.UNPACK_SKIP_ROWS),zt=R.getParameter(R.UNPACK_SKIP_IMAGES),it=se.isCompressedTexture?se.mipmaps[0]:se.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,it.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,it.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,L.min.x),R.pixelStorei(R.UNPACK_SKIP_ROWS,L.min.y),R.pixelStorei(R.UNPACK_SKIP_IMAGES,L.min.z),se.isDataTexture||se.isData3DTexture?R.texSubImage3D(Ye,ce,j.x,j.y,j.z,Be,Ge,Ve,Me,qe,it.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(Ye,ce,j.x,j.y,j.z,Be,Ge,Ve,Me,it.data)):R.texSubImage3D(Ye,ce,j.x,j.y,j.z,Be,Ge,Ve,Me,qe,it),R.pixelStorei(R.UNPACK_ROW_LENGTH,We),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,at),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ct),R.pixelStorei(R.UNPACK_SKIP_ROWS,dt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,zt),ce===0&&le.generateMipmaps&&R.generateMipmap(Ye),$.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?fe.setTextureCube(L,0):L.isData3DTexture?fe.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?fe.setTexture2DArray(L,0):fe.setTexture2D(L,0),$.unbindTexture()},this.resetState=function(){T=0,C=0,w=null,$.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===fl?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===_a?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===xt?yi:qu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===yi?xt:kn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Wv extends fh{}Wv.prototype.isWebGL1Renderer=!0;class dh extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Xv extends vn{constructor(e,t,r,n=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class ph extends fr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const nu=new I,iu=new I,ru=new mt,go=new dl,Hs=new cs;class qv extends gt{constructor(e=new Xt,t=new ph){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let n=1,i=t.count;n<i;n++)nu.fromBufferAttribute(t,n-1),iu.fromBufferAttribute(t,n),r[n]=r[n-1],r[n]+=nu.distanceTo(iu);e.setAttribute("lineDistance",new Ut(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,i=e.params.Line.threshold,a=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Hs.copy(r.boundingSphere),Hs.applyMatrix4(n),Hs.radius+=i,e.ray.intersectsSphere(Hs)===!1)return;ru.copy(n).invert(),go.copy(e.ray).applyMatrix4(ru);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new I,u=new I,h=new I,f=new I,d=this.isLineSegments?2:1,g=r.index,m=r.attributes.position;if(g!==null){const p=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let _=p,x=M-1;_<x;_+=d){const T=g.getX(_),C=g.getX(_+1);if(c.fromBufferAttribute(m,T),u.fromBufferAttribute(m,C),go.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(f);D<e.near||D>e.far||t.push({distance:D,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),M=Math.min(m.count,a.start+a.count);for(let _=p,x=M-1;_<x;_+=d){if(c.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),go.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=n.length;i<a;i++){const o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}}class wn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,n=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)r=this.getPoint(a/e),i+=r.distanceTo(n),t.push(i),n=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let n=0;const i=r.length;let a;t?a=t:a=e*r[i-1];let o=0,l=i-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=r[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,r[n]===a)return n/(i-1);const u=r[n],f=r[n+1]-u,d=(a-u)/f;return(n+d)/(i-1)}getTangent(e,t){let n=e-1e-4,i=e+1e-4;n<0&&(n=0),i>1&&(i=1);const a=this.getPoint(n),o=this.getPoint(i),l=t||(a.isVector2?new be:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new I,n=[],i=[],a=[],o=new I,l=new mt;for(let d=0;d<=e;d++){const g=d/e;n[d]=this.getTangentAt(g,new I)}i[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(n[0].x),h=Math.abs(n[0].y),f=Math.abs(n[0].z);u<=c&&(c=u,r.set(1,0,0)),h<=c&&(c=h,r.set(0,1,0)),f<=c&&r.set(0,0,1),o.crossVectors(n[0],r).normalize(),i[0].crossVectors(n[0],o),a[0].crossVectors(n[0],i[0]);for(let d=1;d<=e;d++){if(i[d]=i[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(n[d-1],n[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(At(n[d-1].dot(n[d]),-1,1));i[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(n[d],i[d])}if(t===!0){let d=Math.acos(At(i[0].dot(i[e]),-1,1));d/=e,n[0].dot(o.crossVectors(i[0],i[e]))>0&&(d=-d);for(let g=1;g<=e;g++)i[g].applyMatrix4(l.makeRotationAxis(n[g],d*g)),a[g].crossVectors(n[g],i[g])}return{tangents:n,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class vl extends wn{constructor(e=0,t=0,r=1,n=1,i=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=n,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const r=t||new be,n=Math.PI*2;let i=this.aEndAngle-this.aStartAngle;const a=Math.abs(i)<Number.EPSILON;for(;i<0;)i+=n;for(;i>n;)i-=n;i<Number.EPSILON&&(a?i=0:i=n),this.aClockwise===!0&&!a&&(i===n?i=-n:i=i-n);const o=this.aStartAngle+e*i;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return r.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Yv extends vl{constructor(e,t,r,n,i,a){super(e,t,r,r,n,i,a),this.isArcCurve=!0,this.type="ArcCurve"}}function _l(){let s=0,e=0,t=0,r=0;function n(i,a,o,l){s=i,e=o,t=-3*i+3*a-2*o-l,r=2*i-2*a+o+l}return{initCatmullRom:function(i,a,o,l,c){n(a,o,c*(o-i),c*(l-a))},initNonuniformCatmullRom:function(i,a,o,l,c,u,h){let f=(a-i)/c-(o-i)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,d*=u,n(a,o,f,d)},calc:function(i){const a=i*i,o=a*i;return s+e*i+t*a+r*o}}}const Vs=new I,vo=new _l,_o=new _l,xo=new _l;class jv extends wn{constructor(e=[],t=!1,r="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=n}getPoint(e,t=new I){const r=t,n=this.points,i=n.length,a=(i-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:l===0&&o===i-1&&(o=i-2,l=1);let c,u;this.closed||o>0?c=n[(o-1)%i]:(Vs.subVectors(n[0],n[1]).add(n[0]),c=Vs);const h=n[o%i],f=n[(o+1)%i];if(this.closed||o+2<i?u=n[(o+2)%i]:(Vs.subVectors(n[i-1],n[i-2]).add(n[i-1]),u=Vs),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),vo.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,v,m),_o.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,v,m),xo.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(vo.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),_o.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),xo.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return r.set(vo.calc(l),_o.calc(l),xo.calc(l)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const n=e.points[t];this.points.push(new I().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function su(s,e,t,r,n){const i=(r-e)*.5,a=(n-t)*.5,o=s*s,l=s*o;return(2*t-2*r+i+a)*l+(-3*t+3*r-2*i-a)*o+i*s+t}function Jv(s,e){const t=1-s;return t*t*e}function Kv(s,e){return 2*(1-s)*s*e}function Zv(s,e){return s*s*e}function qr(s,e,t,r){return Jv(s,e)+Kv(s,t)+Zv(s,r)}function Qv(s,e){const t=1-s;return t*t*t*e}function $v(s,e){const t=1-s;return 3*t*t*s*e}function e0(s,e){return 3*(1-s)*s*s*e}function t0(s,e){return s*s*s*e}function Yr(s,e,t,r,n){return Qv(s,e)+$v(s,t)+e0(s,r)+t0(s,n)}class mh extends wn{constructor(e=new be,t=new be,r=new be,n=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=n}getPoint(e,t=new be){const r=t,n=this.v0,i=this.v1,a=this.v2,o=this.v3;return r.set(Yr(e,n.x,i.x,a.x,o.x),Yr(e,n.y,i.y,a.y,o.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gh extends wn{constructor(e=new I,t=new I,r=new I,n=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=n}getPoint(e,t=new I){const r=t,n=this.v0,i=this.v1,a=this.v2,o=this.v3;return r.set(Yr(e,n.x,i.x,a.x,o.x),Yr(e,n.y,i.y,a.y,o.y),Yr(e,n.z,i.z,a.z,o.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vh extends wn{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class n0 extends wn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _h extends wn{constructor(e=new be,t=new be,r=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new be){const r=t,n=this.v0,i=this.v1,a=this.v2;return r.set(qr(e,n.x,i.x,a.x),qr(e,n.y,i.y,a.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class i0 extends wn{constructor(e=new I,t=new I,r=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new I){const r=t,n=this.v0,i=this.v1,a=this.v2;return r.set(qr(e,n.x,i.x,a.x),qr(e,n.y,i.y,a.y),qr(e,n.z,i.z,a.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xh extends wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){const r=t,n=this.points,i=(n.length-1)*e,a=Math.floor(i),o=i-a,l=n[a===0?a:a-1],c=n[a],u=n[a>n.length-2?n.length-1:a+1],h=n[a>n.length-3?n.length-1:a+2];return r.set(su(o,l.x,c.x,u.x,h.x),su(o,l.y,c.y,u.y,h.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const n=e.points[t];this.points.push(new be().fromArray(n))}return this}}var ko=Object.freeze({__proto__:null,ArcCurve:Yv,CatmullRomCurve3:jv,CubicBezierCurve:mh,CubicBezierCurve3:gh,EllipseCurve:vl,LineCurve:vh,LineCurve3:n0,QuadraticBezierCurve:_h,QuadraticBezierCurve3:i0,SplineCurve:xh});class r0 extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ko[r](t,e))}return this}getPoint(e,t){const r=e*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=r){const a=n[i]-r,o=this.curves[i],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}i++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,n=this.curves.length;r<n;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let n=0,i=this.curves;n<i.length;n++){const a=i[n],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];r&&r.equals(u)||(t.push(u),r=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const n=e.curves[t];this.curves.push(new ko[n.type]().fromJSON(n))}return this}}class Go extends r0{constructor(e){super(),this.type="Path",this.currentPoint=new be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new vh(this.currentPoint.clone(),new be(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,n){const i=new _h(this.currentPoint.clone(),new be(e,t),new be(r,n));return this.curves.push(i),this.currentPoint.set(r,n),this}bezierCurveTo(e,t,r,n,i,a){const o=new mh(this.currentPoint.clone(),new be(e,t),new be(r,n),new be(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new xh(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,n,i,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,r,n,i,a),this}absarc(e,t,r,n,i,a){return this.absellipse(e,t,r,r,n,i,a),this}ellipse(e,t,r,n,i,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,r,n,i,a,o,l),this}absellipse(e,t,r,n,i,a,o,l){const c=new vl(e,t,r,n,i,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ea extends Go{constructor(e){super(e),this.uuid=ur(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,n=this.holes.length;r<n;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const n=e.holes[t];this.holes.push(new Go().fromJSON(n))}return this}}const s0={triangulate:function(s,e,t=2){const r=e&&e.length,n=r?e[0]*t:s.length;let i=yh(s,0,n,t,!0);const a=[];if(!i||i.next===i.prev)return a;let o,l,c,u,h,f,d;if(r&&(i=u0(s,e,i,t)),s.length>80*t){o=c=s[0],l=u=s[1];for(let g=t;g<n;g+=t)h=s[g],f=s[g+1],h<o&&(o=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-o,u-l),d=d!==0?32767/d:0}return ts(i,a,t,o,l,d,0),a}};function yh(s,e,t,r,n){let i,a;if(n===S0(s,e,t,r)>0)for(i=e;i<t;i+=r)a=au(i,s[i],s[i+1],a);else for(i=t-r;i>=e;i-=r)a=au(i,s[i],s[i+1],a);return a&&Ma(a,a.next)&&(is(a),a=a.next),a}function Mi(s,e){if(!s)return s;e||(e=s);let t=s,r;do if(r=!1,!t.steiner&&(Ma(t,t.next)||ht(t.prev,t,t.next)===0)){if(is(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function ts(s,e,t,r,n,i,a){if(!s)return;!a&&i&&m0(s,r,n,i);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,i?o0(s,r,n,i):a0(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),is(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=l0(Mi(s),e,t),ts(s,e,t,r,n,i,2)):a===2&&c0(s,e,t,r,n,i):ts(Mi(s),e,t,r,n,i,1);break}}}function a0(s){const e=s.prev,t=s,r=s.next;if(ht(e,t,r)>=0)return!1;const n=e.x,i=t.x,a=r.x,o=e.y,l=t.y,c=r.y,u=n<i?n<a?n:a:i<a?i:a,h=o<l?o<c?o:c:l<c?l:c,f=n>i?n>a?n:a:i>a?i:a,d=o>l?o>c?o:c:l>c?l:c;let g=r.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&ji(n,o,i,l,a,c,g.x,g.y)&&ht(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function o0(s,e,t,r){const n=s.prev,i=s,a=s.next;if(ht(n,i,a)>=0)return!1;const o=n.x,l=i.x,c=a.x,u=n.y,h=i.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,v=o>l?o>c?o:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,p=Ho(d,g,e,t,r),M=Ho(v,m,e,t,r);let _=s.prevZ,x=s.nextZ;for(;_&&_.z>=p&&x&&x.z<=M;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==n&&_!==a&&ji(o,u,l,h,c,f,_.x,_.y)&&ht(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==n&&x!==a&&ji(o,u,l,h,c,f,x.x,x.y)&&ht(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==n&&_!==a&&ji(o,u,l,h,c,f,_.x,_.y)&&ht(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=M;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==n&&x!==a&&ji(o,u,l,h,c,f,x.x,x.y)&&ht(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function l0(s,e,t){let r=s;do{const n=r.prev,i=r.next.next;!Ma(n,i)&&Sh(n,r,r.next,i)&&ns(n,i)&&ns(i,n)&&(e.push(n.i/t|0),e.push(r.i/t|0),e.push(i.i/t|0),is(r),is(r.next),r=s=i),r=r.next}while(r!==s);return Mi(r)}function c0(s,e,t,r,n,i){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&_0(a,o)){let l=Mh(a,o);a=Mi(a,a.next),l=Mi(l,l.next),ts(a,e,t,r,n,i,0),ts(l,e,t,r,n,i,0);return}o=o.next}a=a.next}while(a!==s)}function u0(s,e,t,r){const n=[];let i,a,o,l,c;for(i=0,a=e.length;i<a;i++)o=e[i]*r,l=i<a-1?e[i+1]*r:s.length,c=yh(s,o,l,r,!1),c===c.next&&(c.steiner=!0),n.push(v0(c));for(n.sort(h0),i=0;i<n.length;i++)t=f0(n[i],t);return t}function h0(s,e){return s.x-e.x}function f0(s,e){const t=d0(s,e);if(!t)return e;const r=Mh(t,s);return Mi(r,r.next),Mi(t,t.next)}function d0(s,e){let t=e,r=-1/0,n;const i=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>r&&(r=f,n=t.x<t.next.x?t:t.next,f===i))return n}t=t.next}while(t!==e);if(!n)return null;const o=n,l=n.x,c=n.y;let u=1/0,h;t=n;do i>=t.x&&t.x>=l&&i!==t.x&&ji(a<c?i:r,a,l,c,a<c?r:i,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(i-t.x),ns(t,s)&&(h<u||h===u&&(t.x>n.x||t.x===n.x&&p0(n,t)))&&(n=t,u=h)),t=t.next;while(t!==o);return n}function p0(s,e){return ht(s.prev,s,e.prev)<0&&ht(e.next,s,s.next)<0}function m0(s,e,t,r){let n=s;do n.z===0&&(n.z=Ho(n.x,n.y,e,t,r)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,g0(n)}function g0(s){let e,t,r,n,i,a,o,l,c=1;do{for(t=s,s=null,i=null,a=0;t;){for(a++,r=t,o=0,e=0;e<c&&(o++,r=r.nextZ,!!r);e++);for(l=c;o>0||l>0&&r;)o!==0&&(l===0||!r||t.z<=r.z)?(n=t,t=t.nextZ,o--):(n=r,r=r.nextZ,l--),i?i.nextZ=n:s=n,n.prevZ=i,i=n;t=r}i.nextZ=null,c*=2}while(a>1);return s}function Ho(s,e,t,r,n){return s=(s-t)*n|0,e=(e-r)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function v0(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ji(s,e,t,r,n,i,a,o){return(n-a)*(e-o)>=(s-a)*(i-o)&&(s-a)*(r-o)>=(t-a)*(e-o)&&(t-a)*(i-o)>=(n-a)*(r-o)}function _0(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!x0(s,e)&&(ns(s,e)&&ns(e,s)&&y0(s,e)&&(ht(s.prev,s,e.prev)||ht(s,e.prev,e))||Ma(s,e)&&ht(s.prev,s,s.next)>0&&ht(e.prev,e,e.next)>0)}function ht(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ma(s,e){return s.x===e.x&&s.y===e.y}function Sh(s,e,t,r){const n=Xs(ht(s,e,t)),i=Xs(ht(s,e,r)),a=Xs(ht(t,r,s)),o=Xs(ht(t,r,e));return!!(n!==i&&a!==o||n===0&&Ws(s,t,e)||i===0&&Ws(s,r,e)||a===0&&Ws(t,s,r)||o===0&&Ws(t,e,r))}function Ws(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Xs(s){return s>0?1:s<0?-1:0}function x0(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Sh(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ns(s,e){return ht(s.prev,s,s.next)<0?ht(s,e,s.next)>=0&&ht(s,s.prev,e)>=0:ht(s,e,s.prev)<0||ht(s,s.next,e)<0}function y0(s,e){let t=s,r=!1;const n=(s.x+e.x)/2,i=(s.y+e.y)/2;do t.y>i!=t.next.y>i&&t.next.y!==t.y&&n<(t.next.x-t.x)*(i-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==s);return r}function Mh(s,e){const t=new Vo(s.i,s.x,s.y),r=new Vo(e.i,e.x,e.y),n=s.next,i=e.prev;return s.next=e,e.prev=s,t.next=n,n.prev=t,r.next=t,t.prev=r,i.next=r,r.prev=i,r}function au(s,e,t,r){const n=new Vo(s,e,t);return r?(n.next=r.next,n.prev=r,r.next.prev=n,r.next=n):(n.prev=n,n.next=n),n}function is(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Vo(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function S0(s,e,t,r){let n=0;for(let i=e,a=t-r;i<t;i+=r)n+=(s[a]-s[i])*(s[i+1]+s[a+1]),a=i;return n}class Qi{static area(e){const t=e.length;let r=0;for(let n=t-1,i=0;i<t;n=i++)r+=e[n].x*e[i].y-e[i].x*e[n].y;return r*.5}static isClockWise(e){return Qi.area(e)<0}static triangulateShape(e,t){const r=[],n=[],i=[];ou(e),lu(r,e);let a=e.length;t.forEach(ou);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,lu(r,t[l]);const o=s0.triangulate(r,n);for(let l=0;l<o.length;l+=3)i.push(o.slice(l,l+3));return i}}function ou(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function lu(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class xl extends Xt{constructor(e=new ea([new be(.5,.5),new be(-.5,.5),new be(-.5,-.5),new be(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const r=this,n=[],i=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Ut(n,3)),this.setAttribute("uv",new Ut(i,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:M0;let _,x=!1,T,C,w,D;p&&(_=p.getSpacedPoints(u),x=!0,f=!1,T=p.computeFrenetFrames(u,!1),C=new I,w=new I,D=new I),f||(m=0,d=0,g=0,v=0);const S=o.extractPoints(c);let b=S.shape;const q=S.holes;if(!Qi.isClockWise(b)){b=b.reverse();for(let R=0,de=q.length;R<de;R++){const J=q[R];Qi.isClockWise(J)&&(q[R]=J.reverse())}}const G=Qi.triangulateShape(b,q),P=b;for(let R=0,de=q.length;R<de;R++){const J=q[R];b=b.concat(J)}function k(R,de,J){return de||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(de,J)}const B=b.length,Y=G.length;function ie(R,de,J){let ae,$,Ee;const te=R.x-de.x,fe=R.y-de.y,xe=J.x-R.x,ee=J.y-R.y,Ue=te*te+fe*fe,A=te*ee-fe*xe;if(Math.abs(A)>Number.EPSILON){const y=Math.sqrt(Ue),z=Math.sqrt(xe*xe+ee*ee),me=de.x-fe/y,Z=de.y+te/y,oe=J.x-ee/z,_e=J.y+xe/z,pe=((oe-me)*ee-(_e-Z)*xe)/(te*ee-fe*xe);ae=me+te*pe-R.x,$=Z+fe*pe-R.y;const ye=ae*ae+$*$;if(ye<=2)return new be(ae,$);Ee=Math.sqrt(ye/2)}else{let y=!1;te>Number.EPSILON?xe>Number.EPSILON&&(y=!0):te<-Number.EPSILON?xe<-Number.EPSILON&&(y=!0):Math.sign(fe)===Math.sign(ee)&&(y=!0),y?(ae=-fe,$=te,Ee=Math.sqrt(Ue)):(ae=te,$=fe,Ee=Math.sqrt(Ue/2))}return new be(ae/Ee,$/Ee)}const V=[];for(let R=0,de=P.length,J=de-1,ae=R+1;R<de;R++,J++,ae++)J===de&&(J=0),ae===de&&(ae=0),V[R]=ie(P[R],P[J],P[ae]);const O=[];let E,U=V.concat();for(let R=0,de=q.length;R<de;R++){const J=q[R];E=[];for(let ae=0,$=J.length,Ee=$-1,te=ae+1;ae<$;ae++,Ee++,te++)Ee===$&&(Ee=0),te===$&&(te=0),E[ae]=ie(J[ae],J[Ee],J[te]);O.push(E),U=U.concat(E)}for(let R=0;R<m;R++){const de=R/m,J=d*Math.cos(de*Math.PI/2),ae=g*Math.sin(de*Math.PI/2)+v;for(let $=0,Ee=P.length;$<Ee;$++){const te=k(P[$],V[$],ae);K(te.x,te.y,-J)}for(let $=0,Ee=q.length;$<Ee;$++){const te=q[$];E=O[$];for(let fe=0,xe=te.length;fe<xe;fe++){const ee=k(te[fe],E[fe],ae);K(ee.x,ee.y,-J)}}}const H=g+v;for(let R=0;R<B;R++){const de=f?k(b[R],U[R],H):b[R];x?(w.copy(T.normals[0]).multiplyScalar(de.x),C.copy(T.binormals[0]).multiplyScalar(de.y),D.copy(_[0]).add(w).add(C),K(D.x,D.y,D.z)):K(de.x,de.y,0)}for(let R=1;R<=u;R++)for(let de=0;de<B;de++){const J=f?k(b[de],U[de],H):b[de];x?(w.copy(T.normals[R]).multiplyScalar(J.x),C.copy(T.binormals[R]).multiplyScalar(J.y),D.copy(_[R]).add(w).add(C),K(D.x,D.y,D.z)):K(J.x,J.y,h/u*R)}for(let R=m-1;R>=0;R--){const de=R/m,J=d*Math.cos(de*Math.PI/2),ae=g*Math.sin(de*Math.PI/2)+v;for(let $=0,Ee=P.length;$<Ee;$++){const te=k(P[$],V[$],ae);K(te.x,te.y,h+J)}for(let $=0,Ee=q.length;$<Ee;$++){const te=q[$];E=O[$];for(let fe=0,xe=te.length;fe<xe;fe++){const ee=k(te[fe],E[fe],ae);x?K(ee.x,ee.y+_[u-1].y,_[u-1].x+J):K(ee.x,ee.y,h+J)}}}X(),W();function X(){const R=n.length/3;if(f){let de=0,J=B*de;for(let ae=0;ae<Y;ae++){const $=G[ae];ne($[2]+J,$[1]+J,$[0]+J)}de=u+m*2,J=B*de;for(let ae=0;ae<Y;ae++){const $=G[ae];ne($[0]+J,$[1]+J,$[2]+J)}}else{for(let de=0;de<Y;de++){const J=G[de];ne(J[2],J[1],J[0])}for(let de=0;de<Y;de++){const J=G[de];ne(J[0]+B*u,J[1]+B*u,J[2]+B*u)}}r.addGroup(R,n.length/3-R,0)}function W(){const R=n.length/3;let de=0;re(P,de),de+=P.length;for(let J=0,ae=q.length;J<ae;J++){const $=q[J];re($,de),de+=$.length}r.addGroup(R,n.length/3-R,1)}function re(R,de){let J=R.length;for(;--J>=0;){const ae=J;let $=J-1;$<0&&($=R.length-1);for(let Ee=0,te=u+m*2;Ee<te;Ee++){const fe=B*Ee,xe=B*(Ee+1),ee=de+ae+fe,Ue=de+$+fe,A=de+$+xe,y=de+ae+xe;ve(ee,Ue,A,y)}}}function K(R,de,J){l.push(R),l.push(de),l.push(J)}function ne(R,de,J){we(R),we(de),we(J);const ae=n.length/3,$=M.generateTopUV(r,n,ae-3,ae-2,ae-1);he($[0]),he($[1]),he($[2])}function ve(R,de,J,ae){we(R),we(de),we(ae),we(de),we(J),we(ae);const $=n.length/3,Ee=M.generateSideWallUV(r,n,$-6,$-3,$-2,$-1);he(Ee[0]),he(Ee[1]),he(Ee[3]),he(Ee[1]),he(Ee[2]),he(Ee[3])}function we(R){n.push(l[R*3+0]),n.push(l[R*3+1]),n.push(l[R*3+2])}function he(R){i.push(R.x),i.push(R.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,r=this.parameters.options;return E0(t,r,e)}static fromJSON(e,t){const r=[];for(let i=0,a=e.shapes.length;i<a;i++){const o=t[e.shapes[i]];r.push(o)}const n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new ko[n.type]().fromJSON(n)),new xl(r,e.options)}}const M0={generateTopUV:function(s,e,t,r,n){const i=e[t*3],a=e[t*3+1],o=e[r*3],l=e[r*3+1],c=e[n*3],u=e[n*3+1];return[new be(i,a),new be(o,l),new be(c,u)]},generateSideWallUV:function(s,e,t,r,n,i){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[r*3],u=e[r*3+1],h=e[r*3+2],f=e[n*3],d=e[n*3+1],g=e[n*3+2],v=e[i*3],m=e[i*3+1],p=e[i*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new be(a,1-l),new be(c,1-h),new be(f,1-g),new be(v,1-p)]:[new be(o,1-l),new be(u,1-h),new be(d,1-g),new be(m,1-p)]}};function E0(s,e,t){if(t.shapes=[],Array.isArray(s))for(let r=0,n=s.length;r<n;r++){const i=s[r];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ii extends Xt{constructor(e=1,t=32,r=16,n=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:n,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new I,f=new I,d=[],g=[],v=[],m=[];for(let p=0;p<=r;p++){const M=[],_=p/r;let x=0;p===0&&a===0?x=.5/t:p===r&&l===Math.PI&&(x=-.5/t);for(let T=0;T<=t;T++){const C=T/t;h.x=-e*Math.cos(n+C*i)*Math.sin(a+_*o),h.y=e*Math.cos(a+_*o),h.z=e*Math.sin(n+C*i)*Math.sin(a+_*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(C+x,1-_),M.push(c++)}u.push(M)}for(let p=0;p<r;p++)for(let M=0;M<t;M++){const _=u[p][M+1],x=u[p][M],T=u[p+1][M],C=u[p+1][M+1];(p!==0||a>0)&&d.push(_,x,C),(p!==r-1||l<Math.PI)&&d.push(x,T,C)}this.setIndex(d),this.setAttribute("position",new Ut(g,3)),this.setAttribute("normal",new Ut(v,3)),this.setAttribute("uv",new Ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class T0 extends It{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wo extends fr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ju,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const rs={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class b0{constructor(e,t,r){const n=this;let i=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(u){o++,i===!1&&n.onStart!==void 0&&n.onStart(u,a,o),i=!0},this.itemEnd=function(u){a++,n.onProgress!==void 0&&n.onProgress(u,a,o),a===o&&(i=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const w0=new b0;class us{constructor(e){this.manager=e!==void 0?e:w0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(n,i){r.load(e,n,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}us.DEFAULT_MATERIAL_NAME="__DEFAULT";const Un={};class A0 extends Error{constructor(e,t){super(e),this.response=t}}class C0 extends us{constructor(e){super(e)}load(e,t,r,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=rs.get(e);if(i!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0),i;if(Un[e]!==void 0){Un[e].push({onLoad:t,onProgress:r,onError:n});return}Un[e]=[],Un[e].push({onLoad:t,onProgress:r,onError:n});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Un[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let v=0;const m=new ReadableStream({start(p){M();function M(){h.read().then(({done:_,value:x})=>{if(_)p.close();else{v+=x.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let C=0,w=u.length;C<w;C++){const D=u[C];D.onProgress&&D.onProgress(T)}p.enqueue(x),M()}})}}});return new Response(m)}else throw new A0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{rs.add(e,c);const u=Un[e];delete Un[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Un[e];if(u===void 0)throw this.manager.itemError(e),c;delete Un[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class R0 extends us{constructor(e){super(e)}load(e,t,r,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,a=rs.get(e);if(a!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a;const o=es("img");function l(){u(),rs.add(e,this),t&&t(this),i.manager.itemEnd(e)}function c(h){u(),n&&n(h),i.manager.itemError(e),i.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(e),o.src=e,o}}class P0 extends us{constructor(e){super(e)}load(e,t,r,n){const i=new Ot,a=new R0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){i.image=o,i.needsUpdate=!0,t!==void 0&&t(i)},r,n),i}}class L0 extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const yo=new mt,cu=new I,uu=new I;class U0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pl,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;cu.setFromMatrixPosition(e.matrixWorld),t.position.copy(cu),uu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uu),t.updateMatrixWorld(),yo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yo),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(yo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class D0 extends U0{constructor(){super(new ml(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class F0 extends L0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new D0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class I0 extends Xt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Eh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=hu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function hu(){return(typeof performance>"u"?Date:performance).now()}class N0{constructor(e,t,r=0,n=1/0){this.ray=new dl(e,t),this.near=r,this.far=n,this.camera=null,this.layers=new ya,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,r=[]){return Xo(e,this,r,t),r.sort(fu),r}intersectObjects(e,t=!0,r=[]){for(let n=0,i=e.length;n<i;n++)Xo(e[n],this,r,t);return r.sort(fu),r}}function fu(s,e){return s.distance-e.distance}function Xo(s,e,t,r){if(s.layers.test(e.layers)&&s.raycast(e,t),r===!0){const n=s.children;for(let i=0,a=n.length;i<a;i++)Xo(n[i],e,t,!0)}}const du=new I,qs=new I;class Mn{constructor(e=new I,t=new I){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){du.subVectors(e,this.start),qs.subVectors(this.end,this.start);const r=qs.dot(qs);let i=qs.dot(du)/r;return t&&(i=At(i,0,1)),i}closestPointToPoint(e,t,r){const n=this.closestPointToPointParameter(e,t);return this.delta(r).multiplyScalar(n).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class O0{constructor(){this.type="ShapePath",this.color=new Je,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Go,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,r,n){return this.currentPath.quadraticCurveTo(e,t,r,n),this}bezierCurveTo(e,t,r,n,i,a){return this.currentPath.bezierCurveTo(e,t,r,n,i,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const M=[];for(let _=0,x=p.length;_<x;_++){const T=p[_],C=new ea;C.curves=T.curves,M.push(C)}return M}function r(p,M){const _=M.length;let x=!1;for(let T=_-1,C=0;C<_;T=C++){let w=M[T],D=M[C],S=D.x-w.x,b=D.y-w.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(w=M[C],S=-S,D=M[T],b=-b),p.y<w.y||p.y>D.y)continue;if(p.y===w.y){if(p.x===w.x)return!0}else{const q=b*(p.x-w.x)-S*(p.y-w.y);if(q===0)return!0;if(q<0)continue;x=!x}}else{if(p.y!==w.y)continue;if(D.x<=p.x&&p.x<=w.x||w.x<=p.x&&p.x<=D.x)return!0}}return x}const n=Qi.isClockWise,i=this.subPaths;if(i.length===0)return[];let a,o,l;const c=[];if(i.length===1)return o=i[0],l=new ea,l.curves=o.curves,c.push(l),c;let u=!n(i[0].getPoints());u=e?!u:u;const h=[],f=[];let d=[],g=0,v;f[g]=void 0,d[g]=[];for(let p=0,M=i.length;p<M;p++)o=i[p],v=o.getPoints(),a=n(v),a=e?!a:a,a?(!u&&f[g]&&g++,f[g]={s:new ea,p:v},f[g].s.curves=o.curves,u&&g++,d[g]=[]):d[g].push({h:o,p:v[0]});if(!f[0])return t(i);if(f.length>1){let p=!1,M=0;for(let _=0,x=f.length;_<x;_++)h[_]=[];for(let _=0,x=f.length;_<x;_++){const T=d[_];for(let C=0;C<T.length;C++){const w=T[C];let D=!0;for(let S=0;S<f.length;S++)r(w.p,f[S].p)&&(_!==S&&M++,D?(D=!1,h[S].push(w)):p=!0);D&&h[_].push(w)}}M>0&&p===!1&&(d=h)}let m;for(let p=0,M=f.length;p<M;p++){l=f[p].s,c.push(l),m=d[p];for(let _=0,x=m.length;_<x;_++)l.holes.push(m[_].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cl);function B0(){var s=Object.create(null);function e(n,i){var a=n.id,o=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!s[a])try{l=l.map(function(f){return f&&f.isWorkerModule&&(e(f,function(d){if(d instanceof Error)throw d}),f=s[f.id].value),f}),c=r("<"+o+">.init",c),u&&(u=r("<"+o+">.getTransferables",u));var h=null;typeof c=="function"?h=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),s[a]={id:a,value:h,getTransferables:u},i(h)}catch(f){f&&f.noLog||console.error(f),i(f)}}function t(n,i){var a,o=n.id,l=n.args;(!s[o]||typeof s[o].value!="function")&&i(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(a=s[o]).value.apply(a,l);c&&typeof c.then=="function"?c.then(u,function(h){return i(h instanceof Error?h:new Error(""+h))}):u(c)}catch(h){i(h)}function u(h){try{var f=s[o].getTransferables&&s[o].getTransferables(h);(!f||!Array.isArray(f)||!f.length)&&(f=void 0),i(h,f)}catch(d){console.error(d),i(d)}}}function r(n,i){var a=void 0;self.troikaDefine=function(l){return a=l};var o=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+i+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,a}self.addEventListener("message",function(n){var i=n.data,a=i.messageId,o=i.action,l=i.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:a,success:!1,error:c.stack})}})}function z0(s){var e=function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=s.dependencies,r=s.init;t=Array.isArray(t)?t.map(function(i){return i&&i._getInitResult?i._getInitResult():i}):[];var n=Promise.all(t).then(function(i){return r.apply(null,i)});return e._getInitResult=function(){return n},n},e}var Th=function(){var s=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),s=!0}catch(t){typeof process<"u",console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return Th=function(){return s},s},k0=0,G0=0,So=!1,jr=Object.create(null),Jr=Object.create(null),qo=Object.create(null);function pr(s){if((!s||typeof s.init!="function")&&!So)throw new Error("requires `options.init` function");var e=s.dependencies,t=s.init,r=s.getTransferables,n=s.workerId;if(!Th())return z0(s);n==null&&(n="#default");var i="workerModule"+ ++k0,a=s.name||i,o=null;e=e&&e.map(function(c){return typeof c=="function"&&!c.workerModuleData&&(So=!0,c=pr({workerId:n,name:"<"+a+"> function dependency: "+c.name,init:`function(){return (
`+ta(c)+`
)}`}),So=!1),c&&c.workerModuleData&&(c=c.workerModuleData),c});function l(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(!o){o=pu(n,"registerModule",l.workerModuleData);var h=function(){o=null,Jr[n].delete(h)};(Jr[n]||(Jr[n]=new Set)).add(h)}return o.then(function(f){var d=f.isCallable;if(d)return pu(n,"callModule",{id:i,args:c});throw new Error("Worker module function was called but `init` did not return a callable function")})}return l.workerModuleData={isWorkerModule:!0,id:i,name:a,dependencies:e,init:ta(t),getTransferables:r&&ta(r)},l}function H0(s){Jr[s]&&Jr[s].forEach(function(e){e()}),jr[s]&&(jr[s].terminate(),delete jr[s])}function ta(s){var e=s.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function V0(s){var e=jr[s];if(!e){var t=ta(B0);e=jr[s]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+s.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(r){var n=r.data,i=n.messageId,a=qo[i];if(!a)throw new Error("WorkerModule response with empty or unknown messageId");delete qo[i],a(n)}}return e}function pu(s,e,t){return new Promise(function(r,n){var i=++G0;qo[i]=function(a){a.success?r(a.result):n(new Error("Error in worker "+e+" call: "+a.error))},V0(s).postMessage({messageId:i,action:e,data:t})})}function bh(){var s=function(e){function t(V,O,E,U,H,X,W,re){var K=1-W;re.x=K*K*V+2*K*W*E+W*W*H,re.y=K*K*O+2*K*W*U+W*W*X}function r(V,O,E,U,H,X,W,re,K,ne){var ve=1-K;ne.x=ve*ve*ve*V+3*ve*ve*K*E+3*ve*K*K*H+K*K*K*W,ne.y=ve*ve*ve*O+3*ve*ve*K*U+3*ve*K*K*X+K*K*K*re}function n(V,O){for(var E=/([MLQCZ])([^MLQCZ]*)/g,U,H,X,W,re;U=E.exec(V);){var K=U[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(ne){return parseFloat(ne)});switch(U[1]){case"M":W=H=K[0],re=X=K[1];break;case"L":(K[0]!==W||K[1]!==re)&&O("L",W,re,W=K[0],re=K[1]);break;case"Q":{O("Q",W,re,W=K[2],re=K[3],K[0],K[1]);break}case"C":{O("C",W,re,W=K[4],re=K[5],K[0],K[1],K[2],K[3]);break}case"Z":(W!==H||re!==X)&&O("L",W,re,H,X);break}}}function i(V,O,E){E===void 0&&(E=16);var U={x:0,y:0};n(V,function(H,X,W,re,K,ne,ve,we,he){switch(H){case"L":O(X,W,re,K);break;case"Q":{for(var R=X,de=W,J=1;J<E;J++)t(X,W,ne,ve,re,K,J/(E-1),U),O(R,de,U.x,U.y),R=U.x,de=U.y;break}case"C":{for(var ae=X,$=W,Ee=1;Ee<E;Ee++)r(X,W,ne,ve,we,he,re,K,Ee/(E-1),U),O(ae,$,U.x,U.y),ae=U.x,$=U.y;break}}})}var a="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(V,O){var E=V.getContext?V.getContext("webgl",c):V,U=l.get(E);if(!U){let ae=function(ee){var Ue=X[ee];if(!Ue&&(Ue=X[ee]=E.getExtension(ee),!Ue))throw new Error(ee+" not supported");return Ue},$=function(ee,Ue){var A=E.createShader(Ue);return E.shaderSource(A,ee),E.compileShader(A),A},Ee=function(ee,Ue,A,y){if(!W[ee]){var z={},me={},Z=E.createProgram();E.attachShader(Z,$(Ue,E.VERTEX_SHADER)),E.attachShader(Z,$(A,E.FRAGMENT_SHADER)),E.linkProgram(Z),W[ee]={program:Z,transaction:function(_e){E.useProgram(Z),_e({setUniform:function(ye,Fe){for(var Ie=[],ue=arguments.length-2;ue-- >0;)Ie[ue]=arguments[ue+2];var Ae=me[Fe]||(me[Fe]=E.getUniformLocation(Z,Fe));E["uniform"+ye].apply(E,[Ae].concat(Ie))},setAttribute:function(ye,Fe,Ie,ue,Ae){var Pe=z[ye];Pe||(Pe=z[ye]={buf:E.createBuffer(),loc:E.getAttribLocation(Z,ye),data:null}),E.bindBuffer(E.ARRAY_BUFFER,Pe.buf),E.vertexAttribPointer(Pe.loc,Fe,E.FLOAT,!1,0,0),E.enableVertexAttribArray(Pe.loc),H?E.vertexAttribDivisor(Pe.loc,ue):ae("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Pe.loc,ue),Ae!==Pe.data&&(E.bufferData(E.ARRAY_BUFFER,Ae,Ie),Pe.data=Ae)}})}}}W[ee].transaction(y)},te=function(ee,Ue){K++;try{E.activeTexture(E.TEXTURE0+K);var A=re[ee];A||(A=re[ee]=E.createTexture(),E.bindTexture(E.TEXTURE_2D,A),E.texParameteri(E.TEXTURE_2D,E.TEXTURE_MIN_FILTER,E.NEAREST),E.texParameteri(E.TEXTURE_2D,E.TEXTURE_MAG_FILTER,E.NEAREST)),E.bindTexture(E.TEXTURE_2D,A),Ue(A,K)}finally{K--}},fe=function(ee,Ue,A){var y=E.createFramebuffer();ne.push(y),E.bindFramebuffer(E.FRAMEBUFFER,y),E.activeTexture(E.TEXTURE0+Ue),E.bindTexture(E.TEXTURE_2D,ee),E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,ee,0);try{A(y)}finally{E.deleteFramebuffer(y),E.bindFramebuffer(E.FRAMEBUFFER,ne[--ne.length-1]||null)}},xe=function(){X={},W={},re={},K=-1,ne.length=0};var ve=ae,we=$,he=Ee,R=te,de=fe,J=xe,H=typeof WebGL2RenderingContext<"u"&&E instanceof WebGL2RenderingContext,X={},W={},re={},K=-1,ne=[];E.canvas.addEventListener("webglcontextlost",function(ee){xe(),ee.preventDefault()},!1),l.set(E,U={gl:E,isWebGL2:H,getExtension:ae,withProgram:Ee,withTexture:te,withTextureFramebuffer:fe,handleContextLoss:xe})}O(U)}function h(V,O,E,U,H,X,W,re){W===void 0&&(W=15),re===void 0&&(re=null),u(V,function(K){var ne=K.gl,ve=K.withProgram,we=K.withTexture;we("copy",function(he,R){ne.texImage2D(ne.TEXTURE_2D,0,ne.RGBA,H,X,0,ne.RGBA,ne.UNSIGNED_BYTE,O),ve("copy",a,o,function(de){var J=de.setUniform,ae=de.setAttribute;ae("aUV",2,ne.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),J("1i","image",R),ne.bindFramebuffer(ne.FRAMEBUFFER,re||null),ne.disable(ne.BLEND),ne.colorMask(W&8,W&4,W&2,W&1),ne.viewport(E,U,H,X),ne.scissor(E,U,H,X),ne.drawArrays(ne.TRIANGLES,0,3)})})})}function f(V,O,E){var U=V.width,H=V.height;u(V,function(X){var W=X.gl,re=new Uint8Array(U*H*4);W.readPixels(0,0,U,H,W.RGBA,W.UNSIGNED_BYTE,re),V.width=O,V.height=E,h(W,re,0,0,U,H)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:h,resizeWebGLCanvasWithoutClearing:f});function g(V,O,E,U,H,X){X===void 0&&(X=1);var W=new Uint8Array(V*O),re=U[2]-U[0],K=U[3]-U[1],ne=[];i(E,function(ae,$,Ee,te){ne.push({x1:ae,y1:$,x2:Ee,y2:te,minX:Math.min(ae,Ee),minY:Math.min($,te),maxX:Math.max(ae,Ee),maxY:Math.max($,te)})}),ne.sort(function(ae,$){return ae.maxX-$.maxX});for(var ve=0;ve<V;ve++)for(var we=0;we<O;we++){var he=de(U[0]+re*(ve+.5)/V,U[1]+K*(we+.5)/O),R=Math.pow(1-Math.abs(he)/H,X)/2;he<0&&(R=1-R),R=Math.max(0,Math.min(255,Math.round(R*255))),W[we*V+ve]=R}return W;function de(ae,$){for(var Ee=1/0,te=1/0,fe=ne.length;fe--;){var xe=ne[fe];if(xe.maxX+te<=ae)break;if(ae+te>xe.minX&&$-te<xe.maxY&&$+te>xe.minY){var ee=p(ae,$,xe.x1,xe.y1,xe.x2,xe.y2);ee<Ee&&(Ee=ee,te=Math.sqrt(Ee))}}return J(ae,$)&&(te=-te),te}function J(ae,$){for(var Ee=0,te=ne.length;te--;){var fe=ne[te];if(fe.maxX<=ae)break;var xe=fe.y1>$!=fe.y2>$&&ae<(fe.x2-fe.x1)*($-fe.y1)/(fe.y2-fe.y1)+fe.x1;xe&&(Ee+=fe.y1<fe.y2?1:-1)}return Ee!==0}}function v(V,O,E,U,H,X,W,re,K,ne){X===void 0&&(X=1),re===void 0&&(re=0),K===void 0&&(K=0),ne===void 0&&(ne=0),m(V,O,E,U,H,X,W,null,re,K,ne)}function m(V,O,E,U,H,X,W,re,K,ne,ve){X===void 0&&(X=1),K===void 0&&(K=0),ne===void 0&&(ne=0),ve===void 0&&(ve=0);for(var we=g(V,O,E,U,H,X),he=new Uint8Array(we.length*4),R=0;R<we.length;R++)he[R*4+ve]=we[R];h(W,he,K,ne,V,O,1<<3-ve,re)}function p(V,O,E,U,H,X){var W=H-E,re=X-U,K=W*W+re*re,ne=K?Math.max(0,Math.min(1,((V-E)*W+(O-U)*re)/K)):0,ve=V-(E+ne*W),we=O-(U+ne*re);return ve*ve+we*we}var M=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:v,generateIntoFramebuffer:m}),_="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",x="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",T="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",C=new Float32Array([0,0,2,0,0,2]),w=null,D=!1,S={},b=new WeakMap;function q(V){if(!D&&!k(V))throw new Error("WebGL generation not supported")}function F(V,O,E,U,H,X,W){if(X===void 0&&(X=1),W===void 0&&(W=null),!W&&(W=w,!W)){var re=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!re)throw new Error("OffscreenCanvas or DOM canvas not supported");W=w=re.getContext("webgl",{depth:!1})}q(W);var K=new Uint8Array(V*O*4);u(W,function(he){var R=he.gl,de=he.withTexture,J=he.withTextureFramebuffer;de("readable",function(ae,$){R.texImage2D(R.TEXTURE_2D,0,R.RGBA,V,O,0,R.RGBA,R.UNSIGNED_BYTE,null),J(ae,$,function(Ee){P(V,O,E,U,H,X,R,Ee,0,0,0),R.readPixels(0,0,V,O,R.RGBA,R.UNSIGNED_BYTE,K)})})});for(var ne=new Uint8Array(V*O),ve=0,we=0;ve<K.length;ve+=4)ne[we++]=K[ve];return ne}function G(V,O,E,U,H,X,W,re,K,ne){X===void 0&&(X=1),re===void 0&&(re=0),K===void 0&&(K=0),ne===void 0&&(ne=0),P(V,O,E,U,H,X,W,null,re,K,ne)}function P(V,O,E,U,H,X,W,re,K,ne,ve){X===void 0&&(X=1),K===void 0&&(K=0),ne===void 0&&(ne=0),ve===void 0&&(ve=0),q(W);var we=[];i(E,function(he,R,de,J){we.push(he,R,de,J)}),we=new Float32Array(we),u(W,function(he){var R=he.gl,de=he.isWebGL2,J=he.getExtension,ae=he.withProgram,$=he.withTexture,Ee=he.withTextureFramebuffer,te=he.handleContextLoss;if($("rawDistances",function(fe,xe){(V!==fe._lastWidth||O!==fe._lastHeight)&&R.texImage2D(R.TEXTURE_2D,0,R.RGBA,fe._lastWidth=V,fe._lastHeight=O,0,R.RGBA,R.UNSIGNED_BYTE,null),ae("main",_,x,function(ee){var Ue=ee.setAttribute,A=ee.setUniform,y=!de&&J("ANGLE_instanced_arrays"),z=!de&&J("EXT_blend_minmax");Ue("aUV",2,R.STATIC_DRAW,0,C),Ue("aLineSegment",4,R.DYNAMIC_DRAW,1,we),A.apply(void 0,["4f","uGlyphBounds"].concat(U)),A("1f","uMaxDistance",H),A("1f","uExponent",X),Ee(fe,xe,function(me){R.enable(R.BLEND),R.colorMask(!0,!0,!0,!0),R.viewport(0,0,V,O),R.scissor(0,0,V,O),R.blendFunc(R.ONE,R.ONE),R.blendEquationSeparate(R.FUNC_ADD,de?R.MAX:z.MAX_EXT),R.clear(R.COLOR_BUFFER_BIT),de?R.drawArraysInstanced(R.TRIANGLES,0,3,we.length/4):y.drawArraysInstancedANGLE(R.TRIANGLES,0,3,we.length/4)})}),ae("post",a,T,function(ee){ee.setAttribute("aUV",2,R.STATIC_DRAW,0,C),ee.setUniform("1i","tex",xe),R.bindFramebuffer(R.FRAMEBUFFER,re),R.disable(R.BLEND),R.colorMask(ve===0,ve===1,ve===2,ve===3),R.viewport(K,ne,V,O),R.scissor(K,ne,V,O),R.drawArrays(R.TRIANGLES,0,3)})}),R.isContextLost())throw te(),new Error("webgl context lost")})}function k(V){var O=!V||V===w?S:V.canvas||V,E=b.get(O);if(E===void 0){D=!0;var U=null;try{var H=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],X=F(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,V);E=X&&H.length===X.length&&X.every(function(W,re){return W===H[re]}),E||(U="bad trial run results",console.info(H,X))}catch(W){E=!1,U=W.message}U&&console.warn("WebGL SDF generation not supported:",U),D=!1,b.set(O,E)}return E}var B=Object.freeze({__proto__:null,generate:F,generateIntoCanvas:G,generateIntoFramebuffer:P,isSupported:k});function Y(V,O,E,U,H,X){H===void 0&&(H=Math.max(U[2]-U[0],U[3]-U[1])/2),X===void 0&&(X=1);try{return F.apply(B,arguments)}catch(W){return console.info("WebGL SDF generation failed, falling back to JS",W),g.apply(M,arguments)}}function ie(V,O,E,U,H,X,W,re,K,ne){H===void 0&&(H=Math.max(U[2]-U[0],U[3]-U[1])/2),X===void 0&&(X=1),re===void 0&&(re=0),K===void 0&&(K=0),ne===void 0&&(ne=0);try{return G.apply(B,arguments)}catch(ve){return console.info("WebGL SDF generation failed, falling back to JS",ve),v.apply(M,arguments)}}return e.forEachPathCommand=n,e.generate=Y,e.generateIntoCanvas=ie,e.javascript=M,e.pathToLineSegments=i,e.webgl=B,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}function W0(){var s=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},r={},n={};r.L=1,n[1]="L",Object.keys(t).forEach(function(te,fe){r[te]=1<<fe+1,n[r[te]]=te}),Object.freeze(r);var i=r.LRI|r.RLI|r.FSI,a=r.L|r.R|r.AL,o=r.B|r.S|r.WS|r.ON|r.FSI|r.LRI|r.RLI|r.PDI,l=r.BN|r.RLE|r.LRE|r.RLO|r.LRO|r.PDF,c=r.S|r.WS|r.B|i|r.PDI|l,u=null;function h(){if(!u){u=new Map;var te=function(xe){if(t.hasOwnProperty(xe)){var ee=0;t[xe].split(",").forEach(function(Ue){var A=Ue.split("+"),y=A[0],z=A[1];y=parseInt(y,36),z=z?parseInt(z,36):0,u.set(ee+=y,r[xe]);for(var me=0;me<z;me++)u.set(++ee,r[xe])})}};for(var fe in t)te(fe)}}function f(te){return h(),u.get(te.codePointAt(0))||r.L}function d(te){return n[f(te)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function v(te,fe){var xe=36,ee=0,Ue=new Map,A=fe&&new Map,y;return te.split(",").forEach(function z(me){if(me.indexOf("+")!==-1)for(var Z=+me;Z--;)z(y);else{y=me;var oe=me.split(">"),_e=oe[0],pe=oe[1];_e=String.fromCodePoint(ee+=parseInt(_e,xe)),pe=String.fromCodePoint(ee+=parseInt(pe,xe)),Ue.set(_e,pe),fe&&A.set(pe,_e)}}),{map:Ue,reverseMap:A}}var m,p,M;function _(){if(!m){var te=v(g.pairs,!0),fe=te.map,xe=te.reverseMap;m=fe,p=xe,M=v(g.canonical,!1).map}}function x(te){return _(),m.get(te)||null}function T(te){return _(),p.get(te)||null}function C(te){return _(),M.get(te)||null}var w=r.L,D=r.R,S=r.EN,b=r.ES,q=r.ET,F=r.AN,G=r.CS,P=r.B,k=r.S,B=r.ON,Y=r.BN,ie=r.NSM,V=r.AL,O=r.LRO,E=r.RLO,U=r.LRE,H=r.RLE,X=r.PDF,W=r.LRI,re=r.RLI,K=r.FSI,ne=r.PDI;function ve(te,fe){for(var xe=125,ee=new Uint32Array(te.length),Ue=0;Ue<te.length;Ue++)ee[Ue]=f(te[Ue]);var A=new Map;function y(Gt,ln){var Ht=ee[Gt];ee[Gt]=ln,A.set(Ht,A.get(Ht)-1),Ht&o&&A.set(o,A.get(o)-1),A.set(ln,(A.get(ln)||0)+1),ln&o&&A.set(o,(A.get(o)||0)+1)}for(var z=new Uint8Array(te.length),me=new Map,Z=[],oe=null,_e=0;_e<te.length;_e++)oe||Z.push(oe={start:_e,end:te.length-1,level:fe==="rtl"?1:fe==="ltr"?0:Il(_e,!1)}),ee[_e]&P&&(oe.end=_e,oe=null);for(var pe=H|U|E|O|i|ne|X|P,ye=function(Gt){return Gt+(Gt&1?1:2)},Fe=function(Gt){return Gt+(Gt&1?2:1)},Ie=0;Ie<Z.length;Ie++){oe=Z[Ie];var ue=[{_level:oe.level,_override:0,_isolate:0}],Ae=void 0,Pe=0,ze=0,ke=0;A.clear();for(var Te=oe.start;Te<=oe.end;Te++){var Ce=ee[Te];if(Ae=ue[ue.length-1],A.set(Ce,(A.get(Ce)||0)+1),Ce&o&&A.set(o,(A.get(o)||0)+1),Ce&pe)if(Ce&(H|U)){z[Te]=Ae._level;var N=(Ce===H?Fe:ye)(Ae._level);N<=xe&&!Pe&&!ze?ue.push({_level:N,_override:0,_isolate:0}):Pe||ze++}else if(Ce&(E|O)){z[Te]=Ae._level;var Re=(Ce===E?Fe:ye)(Ae._level);Re<=xe&&!Pe&&!ze?ue.push({_level:Re,_override:Ce&E?D:w,_isolate:0}):Pe||ze++}else if(Ce&i){Ce&K&&(Ce=Il(Te+1,!0)===1?re:W),z[Te]=Ae._level,Ae._override&&y(Te,Ae._override);var ge=(Ce===re?Fe:ye)(Ae._level);ge<=xe&&Pe===0&&ze===0?(ke++,ue.push({_level:ge,_override:0,_isolate:1,_isolInitIndex:Te})):Pe++}else if(Ce&ne){if(Pe>0)Pe--;else if(ke>0){for(ze=0;!ue[ue.length-1]._isolate;)ue.pop();var Q=ue[ue.length-1]._isolInitIndex;Q!=null&&(me.set(Q,Te),me.set(Te,Q)),ue.pop(),ke--}Ae=ue[ue.length-1],z[Te]=Ae._level,Ae._override&&y(Te,Ae._override)}else Ce&X?(Pe===0&&(ze>0?ze--:!Ae._isolate&&ue.length>1&&(ue.pop(),Ae=ue[ue.length-1])),z[Te]=Ae._level):Ce&P&&(z[Te]=oe.level);else z[Te]=Ae._level,Ae._override&&Ce!==Y&&y(Te,Ae._override)}for(var Se=[],Ne=null,Oe=oe.start;Oe<=oe.end;Oe++){var Xe=ee[Oe];if(!(Xe&l)){var nt=z[Oe],je=Xe&i,$e=Xe===ne;Ne&&nt===Ne._level?(Ne._end=Oe,Ne._endsWithIsolInit=je):Se.push(Ne={_start:Oe,_end:Oe,_level:nt,_startsWithPDI:$e,_endsWithIsolInit:je})}}for(var ft=[],tn=0;tn<Se.length;tn++){var nn=Se[tn];if(!nn._startsWithPDI||nn._startsWithPDI&&!me.has(nn._start)){for(var qt=[Ne=nn],_n=void 0;Ne&&Ne._endsWithIsolInit&&(_n=me.get(Ne._end))!=null;)for(var Bt=tn+1;Bt<Se.length;Bt++)if(Se[Bt]._start===_n){qt.push(Ne=Se[Bt]);break}for(var Mt=[],xn=0;xn<qt.length;xn++)for(var fs=qt[xn],Er=fs._start;Er<=fs._end;Er++)Mt.push(Er);for(var wa=z[Mt[0]],L=oe.level,j=Mt[0]-1;j>=0;j--)if(!(ee[j]&l)){L=z[j];break}var se=Mt[Mt.length-1],le=z[se],ce=oe.level;if(!(ee[se]&i)){for(var Be=se+1;Be<=oe.end;Be++)if(!(ee[Be]&l)){ce=z[Be];break}}ft.push({_seqIndices:Mt,_sosType:Math.max(L,wa)%2?D:w,_eosType:Math.max(ce,le)%2?D:w})}}for(var Ge=0;Ge<ft.length;Ge++){var Ve=ft[Ge],Me=Ve._seqIndices,qe=Ve._sosType,Ye=Ve._eosType,We=z[Me[0]]&1?D:w;if(A.get(ie))for(var at=0;at<Me.length;at++){var Ct=Me[at];if(ee[Ct]&ie){for(var dt=qe,zt=at-1;zt>=0;zt--)if(!(ee[Me[zt]]&l)){dt=ee[Me[zt]];break}y(Ct,dt&(i|ne)?B:dt)}}if(A.get(S))for(var it=0;it<Me.length;it++){var Ze=Me[it];if(ee[Ze]&S)for(var Gn=it-1;Gn>=-1;Gn--){var ct=Gn===-1?qe:ee[Me[Gn]];if(ct&a){ct===V&&y(Ze,F);break}}}if(A.get(V))for(var rn=0;rn<Me.length;rn++){var Tr=Me[rn];ee[Tr]&V&&y(Tr,D)}if(A.get(b)||A.get(G))for(var sn=1;sn<Me.length-1;sn++){var ri=Me[sn];if(ee[ri]&(b|G)){for(var pt=0,an=0,si=sn-1;si>=0&&(pt=ee[Me[si]],!!(pt&l));si--);for(var bt=sn+1;bt<Me.length&&(an=ee[Me[bt]],!!(an&l));bt++);pt===an&&(ee[ri]===b?pt===S:pt&(S|F))&&y(ri,pt)}}if(A.get(S))for(var kt=0;kt<Me.length;kt++){var Aa=Me[kt];if(ee[Aa]&S){for(var ai=kt-1;ai>=0&&ee[Me[ai]]&(q|l);ai--)y(Me[ai],S);for(kt++;kt<Me.length&&ee[Me[kt]]&(q|l|S);kt++)ee[Me[kt]]!==S&&y(Me[kt],S)}}if(A.get(q)||A.get(b)||A.get(G))for(var br=0;br<Me.length;br++){var Ml=Me[br];if(ee[Ml]&(q|b|G)){y(Ml,B);for(var ds=br-1;ds>=0&&ee[Me[ds]]&l;ds--)y(Me[ds],B);for(var ps=br+1;ps<Me.length&&ee[Me[ps]]&l;ps++)y(Me[ps],B)}}if(A.get(S))for(var Ca=0,El=qe;Ca<Me.length;Ca++){var Tl=Me[Ca],Ra=ee[Tl];Ra&S?El===w&&y(Tl,w):Ra&a&&(El=Ra)}if(A.get(o)){var wr=D|S|F,bl=wr|w,ms=[];{for(var Ti=[],bi=0;bi<Me.length;bi++)if(ee[Me[bi]]&o){var Ar=te[Me[bi]],wl=void 0;if(x(Ar)!==null)if(Ti.length<63)Ti.push({char:Ar,seqIndex:bi});else break;else if((wl=T(Ar))!==null)for(var Cr=Ti.length-1;Cr>=0;Cr--){var Pa=Ti[Cr].char;if(Pa===wl||Pa===T(C(Ar))||x(C(Pa))===Ar){ms.push([Ti[Cr].seqIndex,bi]),Ti.length=Cr;break}}}ms.sort(function(Gt,ln){return Gt[0]-ln[0]})}for(var La=0;La<ms.length;La++){for(var Al=ms[La],gs=Al[0],Ua=Al[1],Cl=!1,on=0,Da=gs+1;Da<Ua;Da++){var Rl=Me[Da];if(ee[Rl]&bl){Cl=!0;var Pl=ee[Rl]&wr?D:w;if(Pl===We){on=Pl;break}}}if(Cl&&!on){on=qe;for(var Fa=gs-1;Fa>=0;Fa--){var Ll=Me[Fa];if(ee[Ll]&bl){var Ul=ee[Ll]&wr?D:w;Ul!==We?on=Ul:on=We;break}}}if(on){if(ee[Me[gs]]=ee[Me[Ua]]=on,on!==We){for(var Rr=gs+1;Rr<Me.length;Rr++)if(!(ee[Me[Rr]]&l)){f(te[Me[Rr]])&ie&&(ee[Me[Rr]]=on);break}}if(on!==We){for(var Pr=Ua+1;Pr<Me.length;Pr++)if(!(ee[Me[Pr]]&l)){f(te[Me[Pr]])&ie&&(ee[Me[Pr]]=on);break}}}}for(var Hn=0;Hn<Me.length;Hn++)if(ee[Me[Hn]]&o){for(var Dl=Hn,Ia=Hn,Na=qe,Lr=Hn-1;Lr>=0;Lr--)if(ee[Me[Lr]]&l)Dl=Lr;else{Na=ee[Me[Lr]]&wr?D:w;break}for(var Fl=Ye,Ur=Hn+1;Ur<Me.length;Ur++)if(ee[Me[Ur]]&(o|l))Ia=Ur;else{Fl=ee[Me[Ur]]&wr?D:w;break}for(var Oa=Dl;Oa<=Ia;Oa++)ee[Me[Oa]]=Na===Fl?Na:We;Hn=Ia}}}for(var Yt=oe.start;Yt<=oe.end;Yt++){var Xh=z[Yt],vs=ee[Yt];if(Xh&1?vs&(w|S|F)&&z[Yt]++:vs&D?z[Yt]++:vs&(F|S)&&(z[Yt]+=2),vs&l&&(z[Yt]=Yt===0?oe.level:z[Yt-1]),Yt===oe.end||f(te[Yt])&(k|P))for(var _s=Yt;_s>=0&&f(te[_s])&c;_s--)z[_s]=oe.level}}return{levels:z,paragraphs:Z};function Il(Gt,ln){for(var Ht=Gt;Ht<te.length;Ht++){var Vn=ee[Ht];if(Vn&(D|V))return 1;if(Vn&(P|w)||ln&&Vn===ne)return 0;if(Vn&i){var Nl=qh(Ht);Ht=Nl===-1?te.length:Nl}}return 0}function qh(Gt){for(var ln=1,Ht=Gt+1;Ht<te.length;Ht++){var Vn=ee[Ht];if(Vn&P)break;if(Vn&ne){if(--ln===0)return Ht}else Vn&i&&ln++}return-1}}var we="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",he;function R(){if(!he){var te=v(we,!0),fe=te.map,xe=te.reverseMap;xe.forEach(function(ee,Ue){fe.set(Ue,ee)}),he=fe}}function de(te){return R(),he.get(te)||null}function J(te,fe,xe,ee){var Ue=te.length;xe=Math.max(0,xe==null?0:+xe),ee=Math.min(Ue-1,ee==null?Ue-1:+ee);for(var A=new Map,y=xe;y<=ee;y++)if(fe[y]&1){var z=de(te[y]);z!==null&&A.set(y,z)}return A}function ae(te,fe,xe,ee){var Ue=te.length;xe=Math.max(0,xe==null?0:+xe),ee=Math.min(Ue-1,ee==null?Ue-1:+ee);var A=[];return fe.paragraphs.forEach(function(y){var z=Math.max(xe,y.start),me=Math.min(ee,y.end);if(z<me){for(var Z=fe.levels.slice(z,me+1),oe=me;oe>=z&&f(te[oe])&c;oe--)Z[oe]=y.level;for(var _e=y.level,pe=1/0,ye=0;ye<Z.length;ye++){var Fe=Z[ye];Fe>_e&&(_e=Fe),Fe<pe&&(pe=Fe|1)}for(var Ie=_e;Ie>=pe;Ie--)for(var ue=0;ue<Z.length;ue++)if(Z[ue]>=Ie){for(var Ae=ue;ue+1<Z.length&&Z[ue+1]>=Ie;)ue++;ue>Ae&&A.push([Ae+z,ue+z])}}}),A}function $(te,fe,xe,ee){var Ue=Ee(te,fe,xe,ee),A=[].concat(te);return Ue.forEach(function(y,z){A[z]=(fe.levels[y]&1?de(te[y]):null)||te[y]}),A.join("")}function Ee(te,fe,xe,ee){for(var Ue=ae(te,fe,xe,ee),A=[],y=0;y<te.length;y++)A[y]=y;return Ue.forEach(function(z){for(var me=z[0],Z=z[1],oe=A.slice(me,Z+1),_e=oe.length;_e--;)A[Z-_e]=oe[_e]}),A}return e.closingToOpeningBracket=T,e.getBidiCharType=f,e.getBidiCharTypeName=d,e.getCanonicalBracket=C,e.getEmbeddingLevels=ve,e.getMirroredCharacter=de,e.getMirroredCharactersMap=J,e.getReorderSegments=ae,e.getReorderedIndices=Ee,e.getReorderedString=$,e.openingToClosingBracket=x,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}const wh=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Yo(s){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(r,n){let i=Ke[n];return i?Yo(i):r}return s.replace(e,t)}const wt=[];for(let s=0;s<256;s++)wt[s]=(s<16?"0":"")+s.toString(16);function X0(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wt[s&255]+wt[s>>8&255]+wt[s>>16&255]+wt[s>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[r&255]+wt[r>>8&255]+wt[r>>16&255]+wt[r>>24&255]).toUpperCase()}const hi=Object.assign||function(){let s=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let r=arguments[e];if(r)for(let n in r)Object.prototype.hasOwnProperty.call(r,n)&&(s[n]=r[n])}return s},q0=Date.now(),mu=new WeakMap,gu=new Map;let Y0=1e10;function jo(s,e){const t=Z0(e);let r=mu.get(s);if(r||mu.set(s,r=Object.create(null)),r[t])return new r[t];const n=`_onBeforeCompile${t}`,i=function(c,u){s.onBeforeCompile.call(this,c,u);const h=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let f=gu[h];if(!f){const d=j0(this,c,e,t);f=gu[h]=d}c.vertexShader=f.vertexShader,c.fragmentShader=f.fragmentShader,hi(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-q0}}),this[n]&&this[n](c)},a=function(){return o(e.chained?s:s.clone())},o=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:s}),Object.defineProperty(u,"id",{value:Y0++}),u.uuid=X0(),u.uniforms=hi({},c.uniforms,e.uniforms),u.defines=hi({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=hi({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:a},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return s.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return i},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return s.copy.call(this,c),!s.isShaderMaterial&&!s.isDerivedMaterial&&(hi(this.extensions,c.extensions),hi(this.defines,c.defines),hi(this.uniforms,ar.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new s.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=jo(s.isDerivedMaterial?s.getDepthMaterial():new uh({depthPacking:Yu}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=jo(s.isDerivedMaterial?s.getDistanceMaterial():new hh,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),s.dispose.call(this)}}};return r[t]=a,new a}function j0(s,{vertexShader:e,fragmentShader:t},r,n){let{vertexDefs:i,vertexMainIntro:a,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:h,fragmentColorTransform:f,customRewriter:d,timeUniform:g}=r;if(i=i||"",a=a||"",o=o||"",c=c||"",u=u||"",h=h||"",(l||d)&&(e=Yo(e)),(f||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=Yo(t)),d){let v=d({vertexShader:e,fragmentShader:t});e=v.vertexShader,t=v.fragmentShader}if(f){let v=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,m=>(v.push(m),"")),h=`${f}
${v.join(`
`)}
${h}`}if(g){const v=`
uniform float ${g};
`;i=v+i,c=v+c}return l&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,i=`${i}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,a=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${a}
`,e=e.replace(/\b(position|normal|uv)\b/g,(v,m,p,M)=>/\battribute\s+vec[23]\s+$/.test(M.substr(0,p))?m:`troika_${m}_${n}`),s.map&&s.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=vu(e,n,i,a,o),t=vu(t,n,c,u,h),{vertexShader:e,fragmentShader:t}}function vu(s,e,t,r,n){return(r||n||t)&&(s=s.replace(wh,`
${t}
void troikaOrigMain${e}() {`),s+=`
void main() {
  ${r}
  troikaOrigMain${e}();
  ${n}
}`),s}function J0(s,e){return s==="uniforms"?void 0:typeof e=="function"?e.toString():e}let K0=0;const _u=new Map;function Z0(s){const e=JSON.stringify(s,J0);let t=_u.get(e);return t==null&&_u.set(e,t=++K0),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function Q0(){return typeof window>"u"&&(self.window=self),function(s){var e={parse:function(n){var i=e._bin,a=new Uint8Array(n);if(i.readASCII(a,0,4)=="ttcf"){var o=4;i.readUshort(a,o),o+=2,i.readUshort(a,o),o+=2;var l=i.readUint(a,o);o+=4;for(var c=[],u=0;u<l;u++){var h=i.readUint(a,o);o+=4,c.push(e._readFont(a,h))}return c}return[e._readFont(a,0)]},_readFont:function(n,i){var a=e._bin,o=i;a.readFixed(n,i),i+=4;var l=a.readUshort(n,i);i+=2,a.readUshort(n,i),i+=2,a.readUshort(n,i),i+=2,a.readUshort(n,i),i+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:n,_offset:o},h={},f=0;f<l;f++){var d=a.readASCII(n,i,4);i+=4,a.readUint(n,i),i+=4;var g=a.readUint(n,i);i+=4;var v=a.readUint(n,i);i+=4,h[d]={offset:g,length:v}}for(f=0;f<c.length;f++){var m=c[f];h[m]&&(u[m.trim()]=e[m.trim()].parse(n,h[m].offset,h[m].length,u))}return u},_tabOffset:function(n,i,a){for(var o=e._bin,l=o.readUshort(n,a+4),c=a+12,u=0;u<l;u++){var h=o.readASCII(n,c,4);c+=4,o.readUint(n,c),c+=4;var f=o.readUint(n,c);if(c+=4,o.readUint(n,c),c+=4,h==i)return f}return 0}};e._bin={readFixed:function(n,i){return(n[i]<<8|n[i+1])+(n[i+2]<<8|n[i+3])/65540},readF2dot14:function(n,i){return e._bin.readShort(n,i)/16384},readInt:function(n,i){return e._bin._view(n).getInt32(i)},readInt8:function(n,i){return e._bin._view(n).getInt8(i)},readShort:function(n,i){return e._bin._view(n).getInt16(i)},readUshort:function(n,i){return e._bin._view(n).getUint16(i)},readUshorts:function(n,i,a){for(var o=[],l=0;l<a;l++)o.push(e._bin.readUshort(n,i+2*l));return o},readUint:function(n,i){return e._bin._view(n).getUint32(i)},readUint64:function(n,i){return 4294967296*e._bin.readUint(n,i)+e._bin.readUint(n,i+4)},readASCII:function(n,i,a){for(var o="",l=0;l<a;l++)o+=String.fromCharCode(n[i+l]);return o},readUnicode:function(n,i,a){for(var o="",l=0;l<a;l++){var c=n[i++]<<8|n[i++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,i,a){var o=e._bin._tdec;return o&&i==0&&a==n.length?o.decode(n):e._bin.readASCII(n,i,a)},readBytes:function(n,i,a){for(var o=[],l=0;l<a;l++)o.push(n[i+l]);return o},readASCIIArray:function(n,i,a){for(var o=[],l=0;l<a;l++)o.push(String.fromCharCode(n[i+l]));return o},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,i,a,o,l){var c=e._bin,u={},h=i;c.readFixed(n,i),i+=4;var f=c.readUshort(n,i);i+=2;var d=c.readUshort(n,i);i+=2;var g=c.readUshort(n,i);return i+=2,u.scriptList=e._lctf.readScriptList(n,h+f),u.featureList=e._lctf.readFeatureList(n,h+d),u.lookupList=e._lctf.readLookupList(n,h+g,l),u},e._lctf.readLookupList=function(n,i,a){var o=e._bin,l=i,c=[],u=o.readUshort(n,i);i+=2;for(var h=0;h<u;h++){var f=o.readUshort(n,i);i+=2;var d=e._lctf.readLookupTable(n,l+f,a);c.push(d)}return c},e._lctf.readLookupTable=function(n,i,a){var o=e._bin,l=i,c={tabs:[]};c.ltype=o.readUshort(n,i),i+=2,c.flag=o.readUshort(n,i),i+=2;var u=o.readUshort(n,i);i+=2;for(var h=c.ltype,f=0;f<u;f++){var d=o.readUshort(n,i);i+=2;var g=a(n,h,l+d,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(n){for(var i=0,a=0;a<32;a++)n>>>a&1&&i++;return i},e._lctf.readClassDef=function(n,i){var a=e._bin,o=[],l=a.readUshort(n,i);if(i+=2,l==1){var c=a.readUshort(n,i);i+=2;var u=a.readUshort(n,i);i+=2;for(var h=0;h<u;h++)o.push(c+h),o.push(c+h),o.push(a.readUshort(n,i)),i+=2}if(l==2){var f=a.readUshort(n,i);for(i+=2,h=0;h<f;h++)o.push(a.readUshort(n,i)),i+=2,o.push(a.readUshort(n,i)),i+=2,o.push(a.readUshort(n,i)),i+=2}return o},e._lctf.getInterval=function(n,i){for(var a=0;a<n.length;a+=3){var o=n[a],l=n[a+1];if(n[a+2],o<=i&&i<=l)return a}return-1},e._lctf.readCoverage=function(n,i){var a=e._bin,o={};o.fmt=a.readUshort(n,i),i+=2;var l=a.readUshort(n,i);return i+=2,o.fmt==1&&(o.tab=a.readUshorts(n,i,l)),o.fmt==2&&(o.tab=a.readUshorts(n,i,3*l)),o},e._lctf.coverageIndex=function(n,i){var a=n.tab;if(n.fmt==1)return a.indexOf(i);if(n.fmt==2){var o=e._lctf.getInterval(a,i);if(o!=-1)return a[o+2]+(i-a[o])}return-1},e._lctf.readFeatureList=function(n,i){var a=e._bin,o=i,l=[],c=a.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var h=a.readASCII(n,i,4);i+=4;var f=a.readUshort(n,i);i+=2;var d=e._lctf.readFeatureTable(n,o+f);d.tag=h.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(n,i){var a=e._bin,o=i,l={},c=a.readUshort(n,i);i+=2,c>0&&(l.featureParams=o+c);var u=a.readUshort(n,i);i+=2,l.tab=[];for(var h=0;h<u;h++)l.tab.push(a.readUshort(n,i+2*h));return l},e._lctf.readScriptList=function(n,i){var a=e._bin,o=i,l={},c=a.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var h=a.readASCII(n,i,4);i+=4;var f=a.readUshort(n,i);i+=2,l[h.trim()]=e._lctf.readScriptTable(n,o+f)}return l},e._lctf.readScriptTable=function(n,i){var a=e._bin,o=i,l={},c=a.readUshort(n,i);i+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,o+c));var u=a.readUshort(n,i);i+=2;for(var h=0;h<u;h++){var f=a.readASCII(n,i,4);i+=4;var d=a.readUshort(n,i);i+=2,l[f.trim()]=e._lctf.readLangSysTable(n,o+d)}return l},e._lctf.readLangSysTable=function(n,i){var a=e._bin,o={};a.readUshort(n,i),i+=2,o.reqFeature=a.readUshort(n,i),i+=2;var l=a.readUshort(n,i);return i+=2,o.features=a.readUshorts(n,i,l),o},e.CFF={},e.CFF.parse=function(n,i,a){var o=e._bin;(n=new Uint8Array(n.buffer,i,a))[i=0],n[++i],n[++i],n[++i],i++;var l=[];i=e.CFF.readIndex(n,i,l);for(var c=[],u=0;u<l.length-1;u++)c.push(o.readASCII(n,i+l[u],l[u+1]-l[u]));i+=l[l.length-1];var h=[];i=e.CFF.readIndex(n,i,h);var f=[];for(u=0;u<h.length-1;u++)f.push(e.CFF.readDict(n,i+h[u],i+h[u+1]));i+=h[h.length-1];var d=f[0],g=[];i=e.CFF.readIndex(n,i,g);var v=[];for(u=0;u<g.length-1;u++)v.push(o.readASCII(n,i+g[u],g[u+1]-g[u]));if(i+=g[g.length-1],e.CFF.readSubrs(n,i,d),d.CharStrings){i=d.CharStrings,g=[],i=e.CFF.readIndex(n,i,g);var m=[];for(u=0;u<g.length-1;u++)m.push(o.readBytes(n,i+g[u],g[u+1]-g[u]));d.CharStrings=m}if(d.ROS){i=d.FDArray;var p=[];for(i=e.CFF.readIndex(n,i,p),d.FDArray=[],u=0;u<p.length-1;u++){var M=e.CFF.readDict(n,i+p[u],i+p[u+1]);e.CFF._readFDict(n,M,v),d.FDArray.push(M)}i+=p[p.length-1],i=d.FDSelect,d.FDSelect=[];var _=n[i];if(i++,_!=3)throw _;var x=o.readUshort(n,i);for(i+=2,u=0;u<x+1;u++)d.FDSelect.push(o.readUshort(n,i),n[i+2]),i+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(n,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(n,d.charset,d.CharStrings.length)),e.CFF._readFDict(n,d,v),d},e.CFF._readFDict=function(n,i,a){var o;for(var l in i.Private&&(o=i.Private[1],i.Private=e.CFF.readDict(n,o,o+i.Private[0]),i.Private.Subrs&&e.CFF.readSubrs(n,o+i.Private.Subrs,i.Private)),i)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(i[l]=a[i[l]-426+35])},e.CFF.readSubrs=function(n,i,a){var o=e._bin,l=[];i=e.CFF.readIndex(n,i,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,a.Bias=c,a.Subrs=[];for(var h=0;h<l.length-1;h++)a.Subrs.push(o.readBytes(n,i+l[h],l[h+1]-l[h]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,i){for(var a=0;a<n.charset.length;a++)if(n.charset[a]==i)return a;return-1},e.CFF.glyphBySE=function(n,i){return i<0||i>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[i])},e.CFF.readEncoding=function(n,i,a){e._bin;var o=[".notdef"],l=n[i];if(i++,l!=0)throw"error: unknown encoding format: "+l;var c=n[i];i++;for(var u=0;u<c;u++)o.push(n[i+u]);return o},e.CFF.readCharset=function(n,i,a){var o=e._bin,l=[".notdef"],c=n[i];if(i++,c==0)for(var u=0;u<a;u++){var h=o.readUshort(n,i);i+=2,l.push(h)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<a;){h=o.readUshort(n,i),i+=2;var f=0;for(c==1?(f=n[i],i++):(f=o.readUshort(n,i),i+=2),u=0;u<=f;u++)l.push(h),h++}}return l},e.CFF.readIndex=function(n,i,a){var o=e._bin,l=o.readUshort(n,i)+1,c=n[i+=2];if(i++,c==1)for(var u=0;u<l;u++)a.push(n[i+u]);else if(c==2)for(u=0;u<l;u++)a.push(o.readUshort(n,i+2*u));else if(c==3)for(u=0;u<l;u++)a.push(16777215&o.readUint(n,i+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(i+=l*c)-1},e.CFF.getCharString=function(n,i,a){var o=e._bin,l=n[i],c=n[i+1];n[i+2],n[i+3],n[i+4];var u=1,h=null,f=null;l<=20&&(h=l,u=1),l==12&&(h=100*l+c,u=2),21<=l&&l<=27&&(h=l,u=1),l==28&&(f=o.readShort(n,i+1),u=3),29<=l&&l<=31&&(h=l,u=1),32<=l&&l<=246&&(f=l-139,u=1),247<=l&&l<=250&&(f=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(f=256*-(l-251)-c-108,u=2),l==255&&(f=o.readInt(n,i+1)/65535,u=5),a.val=f??"o"+h,a.size=u},e.CFF.readCharString=function(n,i,a){for(var o=i+a,l=e._bin,c=[];i<o;){var u=n[i],h=n[i+1];n[i+2],n[i+3],n[i+4];var f=1,d=null,g=null;u<=20&&(d=u,f=1),u==12&&(d=100*u+h,f=2),u!=19&&u!=20||(d=u,f=2),21<=u&&u<=27&&(d=u,f=1),u==28&&(g=l.readShort(n,i+1),f=3),29<=u&&u<=31&&(d=u,f=1),32<=u&&u<=246&&(g=u-139,f=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,f=2),u==255&&(g=l.readInt(n,i+1)/65535,f=5),c.push(g??"o"+d),i+=f}return c},e.CFF.readDict=function(n,i,a){for(var o=e._bin,l={},c=[];i<a;){var u=n[i],h=n[i+1];n[i+2],n[i+3],n[i+4];var f=1,d=null,g=null;if(u==28&&(g=o.readShort(n,i+1),f=3),u==29&&(g=o.readInt(n,i+1),f=5),32<=u&&u<=246&&(g=u-139,f=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,f=2),u==255)throw g=o.readInt(n,i+1)/65535,f=5,"unknown number";if(u==30){var v=[];for(f=1;;){var m=n[i+f];f++;var p=m>>4,M=15&m;if(p!=15&&v.push(p),M!=15&&v.push(M),M==15)break}for(var _="",x=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],T=0;T<v.length;T++)_+=x[v[T]];g=parseFloat(_)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],f=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][h],f=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(g),i+=f}return l},e.cmap={},e.cmap.parse=function(n,i,a){n=new Uint8Array(n.buffer,i,a),i=0;var o=e._bin,l={};o.readUshort(n,i),i+=2;var c=o.readUshort(n,i);i+=2;var u=[];l.tables=[];for(var h=0;h<c;h++){var f=o.readUshort(n,i);i+=2;var d=o.readUshort(n,i);i+=2;var g=o.readUint(n,i);i+=4;var v="p"+f+"e"+d,m=u.indexOf(g);if(m==-1){var p;m=l.tables.length,u.push(g);var M=o.readUshort(n,g);M==0?p=e.cmap.parse0(n,g):M==4?p=e.cmap.parse4(n,g):M==6?p=e.cmap.parse6(n,g):M==12?p=e.cmap.parse12(n,g):console.debug("unknown format: "+M,f,d,g),l.tables.push(p)}if(l[v]!=null)throw"multiple tables for one platform+encoding";l[v]=m}return l},e.cmap.parse0=function(n,i){var a=e._bin,o={};o.format=a.readUshort(n,i),i+=2;var l=a.readUshort(n,i);i+=2,a.readUshort(n,i),i+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(n[i+c]);return o},e.cmap.parse4=function(n,i){var a=e._bin,o=i,l={};l.format=a.readUshort(n,i),i+=2;var c=a.readUshort(n,i);i+=2,a.readUshort(n,i),i+=2;var u=a.readUshort(n,i);i+=2;var h=u/2;l.searchRange=a.readUshort(n,i),i+=2,l.entrySelector=a.readUshort(n,i),i+=2,l.rangeShift=a.readUshort(n,i),i+=2,l.endCount=a.readUshorts(n,i,h),i+=2*h,i+=2,l.startCount=a.readUshorts(n,i,h),i+=2*h,l.idDelta=[];for(var f=0;f<h;f++)l.idDelta.push(a.readShort(n,i)),i+=2;for(l.idRangeOffset=a.readUshorts(n,i,h),i+=2*h,l.glyphIdArray=[];i<o+c;)l.glyphIdArray.push(a.readUshort(n,i)),i+=2;return l},e.cmap.parse6=function(n,i){var a=e._bin,o={};o.format=a.readUshort(n,i),i+=2,a.readUshort(n,i),i+=2,a.readUshort(n,i),i+=2,o.firstCode=a.readUshort(n,i),i+=2;var l=a.readUshort(n,i);i+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(a.readUshort(n,i)),i+=2;return o},e.cmap.parse12=function(n,i){var a=e._bin,o={};o.format=a.readUshort(n,i),i+=2,i+=2,a.readUint(n,i),i+=4,a.readUint(n,i),i+=4;var l=a.readUint(n,i);i+=4,o.groups=[];for(var c=0;c<l;c++){var u=i+12*c,h=a.readUint(n,u+0),f=a.readUint(n,u+4),d=a.readUint(n,u+8);o.groups.push([h,f,d])}return o},e.glyf={},e.glyf.parse=function(n,i,a,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,i){var a=e._bin,o=n._data,l=e._tabOffset(o,"glyf",n._offset)+n.loca[i];if(n.loca[i]==n.loca[i+1])return null;var c={};if(c.noc=a.readShort(o,l),l+=2,c.xMin=a.readShort(o,l),l+=2,c.yMin=a.readShort(o,l),l+=2,c.xMax=a.readShort(o,l),l+=2,c.yMax=a.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(a.readUshort(o,l)),l+=2;var h=a.readUshort(o,l);if(l+=2,o.length-l<h)return null;c.instructions=a.readBytes(o,l,h),l+=h;var f=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<f;u++){var d=o[l];if(l++,c.flags.push(d),(8&d)!=0){var g=o[l];l++;for(var v=0;v<g;v++)c.flags.push(d),u++}}for(c.xs=[],u=0;u<f;u++){var m=(2&c.flags[u])!=0,p=(16&c.flags[u])!=0;m?(c.xs.push(p?o[l]:-o[l]),l++):p?c.xs.push(0):(c.xs.push(a.readShort(o,l)),l+=2)}for(c.ys=[],u=0;u<f;u++)m=(4&c.flags[u])!=0,p=(32&c.flags[u])!=0,m?(c.ys.push(p?o[l]:-o[l]),l++):p?c.ys.push(0):(c.ys.push(a.readShort(o,l)),l+=2);var M=0,_=0;for(u=0;u<f;u++)M+=c.xs[u],_+=c.ys[u],c.xs[u]=M,c.ys[u]=_}else{var x;c.parts=[];do{x=a.readUshort(o,l),l+=2;var T={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(T),T.glyphIndex=a.readUshort(o,l),l+=2,1&x){var C=a.readShort(o,l);l+=2;var w=a.readShort(o,l);l+=2}else C=a.readInt8(o,l),l++,w=a.readInt8(o,l),l++;2&x?(T.m.tx=C,T.m.ty=w):(T.p1=C,T.p2=w),8&x?(T.m.a=T.m.d=a.readF2dot14(o,l),l+=2):64&x?(T.m.a=a.readF2dot14(o,l),l+=2,T.m.d=a.readF2dot14(o,l),l+=2):128&x&&(T.m.a=a.readF2dot14(o,l),l+=2,T.m.b=a.readF2dot14(o,l),l+=2,T.m.c=a.readF2dot14(o,l),l+=2,T.m.d=a.readF2dot14(o,l),l+=2)}while(32&x);if(256&x){var D=a.readUshort(o,l);for(l+=2,c.instr=[],u=0;u<D;u++)c.instr.push(o[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(n,i,a,o){var l=i;i+=4;var c=e._bin.readUshort(n,i);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,l+c)}},e.GPOS={},e.GPOS.parse=function(n,i,a,o){return e._lctf.parse(n,i,a,o,e.GPOS.subt)},e.GPOS.subt=function(n,i,a,o){var l=e._bin,c=a,u={};if(u.fmt=l.readUshort(n,a),a+=2,i==1||i==2||i==3||i==7||i==8&&u.fmt<=2){var h=l.readUshort(n,a);a+=2,u.coverage=e._lctf.readCoverage(n,h+c)}if(i==1&&u.fmt==1){var f=l.readUshort(n,a);a+=2,f!=0&&(u.pos=e.GPOS.readValueRecord(n,a,f))}else if(i==2&&u.fmt>=1&&u.fmt<=2){f=l.readUshort(n,a),a+=2;var d=l.readUshort(n,a);a+=2;var g=e._lctf.numOfOnes(f),v=e._lctf.numOfOnes(d);if(u.fmt==1){u.pairsets=[];var m=l.readUshort(n,a);a+=2;for(var p=0;p<m;p++){var M=c+l.readUshort(n,a);a+=2;var _=l.readUshort(n,M);M+=2;for(var x=[],T=0;T<_;T++){var C=l.readUshort(n,M);M+=2,f!=0&&(F=e.GPOS.readValueRecord(n,M,f),M+=2*g),d!=0&&(G=e.GPOS.readValueRecord(n,M,d),M+=2*v),x.push({gid2:C,val1:F,val2:G})}u.pairsets.push(x)}}if(u.fmt==2){var w=l.readUshort(n,a);a+=2;var D=l.readUshort(n,a);a+=2;var S=l.readUshort(n,a);a+=2;var b=l.readUshort(n,a);for(a+=2,u.classDef1=e._lctf.readClassDef(n,c+w),u.classDef2=e._lctf.readClassDef(n,c+D),u.matrix=[],p=0;p<S;p++){var q=[];for(T=0;T<b;T++){var F=null,G=null;f!=0&&(F=e.GPOS.readValueRecord(n,a,f),a+=2*g),d!=0&&(G=e.GPOS.readValueRecord(n,a,d),a+=2*v),q.push({val1:F,val2:G})}u.matrix.push(q)}}}else if(i==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(n,l.readUshort(n,a)+c),u.baseCoverage=e._lctf.readCoverage(n,l.readUshort(n,a+2)+c),u.markClassCount=l.readUshort(n,a+4),u.markArray=e.GPOS.readMarkArray(n,l.readUshort(n,a+6)+c),u.baseArray=e.GPOS.readBaseArray(n,l.readUshort(n,a+8)+c,u.markClassCount);else if(i==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(n,l.readUshort(n,a)+c),u.mark2Coverage=e._lctf.readCoverage(n,l.readUshort(n,a+2)+c),u.markClassCount=l.readUshort(n,a+4),u.mark1Array=e.GPOS.readMarkArray(n,l.readUshort(n,a+6)+c),u.mark2Array=e.GPOS.readBaseArray(n,l.readUshort(n,a+8)+c,u.markClassCount);else{if(i==9&&u.fmt==1){var P=l.readUshort(n,a);a+=2;var k=l.readUint(n,a);if(a+=4,o.ltype==9)o.ltype=P;else if(o.ltype!=P)throw"invalid extension substitution";return e.GPOS.subt(n,o.ltype,c+k)}console.debug("unsupported GPOS table LookupType",i,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(n,i,a){var o=e._bin,l=[];return l.push(1&a?o.readShort(n,i):0),i+=1&a?2:0,l.push(2&a?o.readShort(n,i):0),i+=2&a?2:0,l.push(4&a?o.readShort(n,i):0),i+=4&a?2:0,l.push(8&a?o.readShort(n,i):0),i+=8&a?2:0,l},e.GPOS.readBaseArray=function(n,i,a){var o=e._bin,l=[],c=i,u=o.readUshort(n,i);i+=2;for(var h=0;h<u;h++){for(var f=[],d=0;d<a;d++)f.push(e.GPOS.readAnchorRecord(n,c+o.readUshort(n,i))),i+=2;l.push(f)}return l},e.GPOS.readMarkArray=function(n,i){var a=e._bin,o=[],l=i,c=a.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var h=e.GPOS.readAnchorRecord(n,a.readUshort(n,i+2)+l);h.markClass=a.readUshort(n,i),o.push(h),i+=4}return o},e.GPOS.readAnchorRecord=function(n,i){var a=e._bin,o={};return o.fmt=a.readUshort(n,i),o.x=a.readShort(n,i+2),o.y=a.readShort(n,i+4),o},e.GSUB={},e.GSUB.parse=function(n,i,a,o){return e._lctf.parse(n,i,a,o,e.GSUB.subt)},e.GSUB.subt=function(n,i,a,o){var l=e._bin,c=a,u={};if(u.fmt=l.readUshort(n,a),a+=2,i!=1&&i!=2&&i!=4&&i!=5&&i!=6)return null;if(i==1||i==2||i==4||i==5&&u.fmt<=2||i==6&&u.fmt<=2){var h=l.readUshort(n,a);a+=2,u.coverage=e._lctf.readCoverage(n,c+h)}if(i==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(n,a),a+=2;else if(u.fmt==2){var f=l.readUshort(n,a);a+=2,u.newg=l.readUshorts(n,a,f),a+=2*u.newg.length}}else if(i==2&&u.fmt==1){f=l.readUshort(n,a),a+=2,u.seqs=[];for(var d=0;d<f;d++){var g=l.readUshort(n,a)+c;a+=2;var v=l.readUshort(n,g);u.seqs.push(l.readUshorts(n,g+2,v))}}else if(i==4)for(u.vals=[],f=l.readUshort(n,a),a+=2,d=0;d<f;d++){var m=l.readUshort(n,a);a+=2,u.vals.push(e.GSUB.readLigatureSet(n,c+m))}else if(i==5&&u.fmt==2){if(u.fmt==2){var p=l.readUshort(n,a);a+=2,u.cDef=e._lctf.readClassDef(n,c+p),u.scset=[];var M=l.readUshort(n,a);for(a+=2,d=0;d<M;d++){var _=l.readUshort(n,a);a+=2,u.scset.push(_==0?null:e.GSUB.readSubClassSet(n,c+_))}}}else if(i==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){f=l.readUshort(n,a),a+=2;for(var x=[],T=0;T<f;T++)x.push(e._lctf.readCoverage(n,c+l.readUshort(n,a+2*T)));a+=2*f,d==0&&(u.backCvg=x),d==1&&(u.inptCvg=x),d==2&&(u.ahedCvg=x)}f=l.readUshort(n,a),a+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(n,a,f)}}else{if(i==7&&u.fmt==1){var C=l.readUshort(n,a);a+=2;var w=l.readUint(n,a);if(a+=4,o.ltype==9)o.ltype=C;else if(o.ltype!=C)throw"invalid extension substitution";return e.GSUB.subt(n,o.ltype,c+w)}console.debug("unsupported GSUB table LookupType",i,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(n,i){var a=e._bin.readUshort,o=i,l=[],c=a(n,i);i+=2;for(var u=0;u<c;u++){var h=a(n,i);i+=2,l.push(e.GSUB.readSubClassRule(n,o+h))}return l},e.GSUB.readSubClassRule=function(n,i){var a=e._bin.readUshort,o={},l=a(n,i),c=a(n,i+=2);i+=2,o.input=[];for(var u=0;u<l-1;u++)o.input.push(a(n,i)),i+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(n,i,c),o},e.GSUB.readSubstLookupRecords=function(n,i,a){for(var o=e._bin.readUshort,l=[],c=0;c<a;c++)l.push(o(n,i),o(n,i+2)),i+=4;return l},e.GSUB.readChainSubClassSet=function(n,i){var a=e._bin,o=i,l=[],c=a.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var h=a.readUshort(n,i);i+=2,l.push(e.GSUB.readChainSubClassRule(n,o+h))}return l},e.GSUB.readChainSubClassRule=function(n,i){for(var a=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=a.readUshort(n,i);i+=2,c==1&&u--,o[l[c]]=a.readUshorts(n,i,u),i+=2*o[l[c]].length}return u=a.readUshort(n,i),i+=2,o.subst=a.readUshorts(n,i,2*u),i+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(n,i){var a=e._bin,o=i,l=[],c=a.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var h=a.readUshort(n,i);i+=2,l.push(e.GSUB.readLigature(n,o+h))}return l},e.GSUB.readLigature=function(n,i){var a=e._bin,o={chain:[]};o.nglyph=a.readUshort(n,i),i+=2;var l=a.readUshort(n,i);i+=2;for(var c=0;c<l-1;c++)o.chain.push(a.readUshort(n,i)),i+=2;return o},e.head={},e.head.parse=function(n,i,a){var o=e._bin,l={};return o.readFixed(n,i),i+=4,l.fontRevision=o.readFixed(n,i),i+=4,o.readUint(n,i),i+=4,o.readUint(n,i),i+=4,l.flags=o.readUshort(n,i),i+=2,l.unitsPerEm=o.readUshort(n,i),i+=2,l.created=o.readUint64(n,i),i+=8,l.modified=o.readUint64(n,i),i+=8,l.xMin=o.readShort(n,i),i+=2,l.yMin=o.readShort(n,i),i+=2,l.xMax=o.readShort(n,i),i+=2,l.yMax=o.readShort(n,i),i+=2,l.macStyle=o.readUshort(n,i),i+=2,l.lowestRecPPEM=o.readUshort(n,i),i+=2,l.fontDirectionHint=o.readShort(n,i),i+=2,l.indexToLocFormat=o.readShort(n,i),i+=2,l.glyphDataFormat=o.readShort(n,i),i+=2,l},e.hhea={},e.hhea.parse=function(n,i,a){var o=e._bin,l={};return o.readFixed(n,i),i+=4,l.ascender=o.readShort(n,i),i+=2,l.descender=o.readShort(n,i),i+=2,l.lineGap=o.readShort(n,i),i+=2,l.advanceWidthMax=o.readUshort(n,i),i+=2,l.minLeftSideBearing=o.readShort(n,i),i+=2,l.minRightSideBearing=o.readShort(n,i),i+=2,l.xMaxExtent=o.readShort(n,i),i+=2,l.caretSlopeRise=o.readShort(n,i),i+=2,l.caretSlopeRun=o.readShort(n,i),i+=2,l.caretOffset=o.readShort(n,i),i+=2,i+=8,l.metricDataFormat=o.readShort(n,i),i+=2,l.numberOfHMetrics=o.readUshort(n,i),i+=2,l},e.hmtx={},e.hmtx.parse=function(n,i,a,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,h=0,f=0;f<o.maxp.numGlyphs;f++)f<o.hhea.numberOfHMetrics&&(u=l.readUshort(n,i),i+=2,h=l.readShort(n,i),i+=2),c.aWidth.push(u),c.lsBearing.push(h);return c},e.kern={},e.kern.parse=function(n,i,a,o){var l=e._bin,c=l.readUshort(n,i);if(i+=2,c==1)return e.kern.parseV1(n,i-2,a,o);var u=l.readUshort(n,i);i+=2;for(var h={glyph1:[],rval:[]},f=0;f<u;f++){i+=2,a=l.readUshort(n,i),i+=2;var d=l.readUshort(n,i);i+=2;var g=d>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;i=e.kern.readFormat0(n,i,h)}return h},e.kern.parseV1=function(n,i,a,o){var l=e._bin;l.readFixed(n,i),i+=4;var c=l.readUint(n,i);i+=4;for(var u={glyph1:[],rval:[]},h=0;h<c;h++){l.readUint(n,i),i+=4;var f=l.readUshort(n,i);i+=2,l.readUshort(n,i),i+=2;var d=f>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;i=e.kern.readFormat0(n,i,u)}return u},e.kern.readFormat0=function(n,i,a){var o=e._bin,l=-1,c=o.readUshort(n,i);i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2;for(var u=0;u<c;u++){var h=o.readUshort(n,i);i+=2;var f=o.readUshort(n,i);i+=2;var d=o.readShort(n,i);i+=2,h!=l&&(a.glyph1.push(h),a.rval.push({glyph2:[],vals:[]}));var g=a.rval[a.rval.length-1];g.glyph2.push(f),g.vals.push(d),l=h}return i},e.loca={},e.loca.parse=function(n,i,a,o){var l=e._bin,c=[],u=o.head.indexToLocFormat,h=o.maxp.numGlyphs+1;if(u==0)for(var f=0;f<h;f++)c.push(l.readUshort(n,i+(f<<1))<<1);if(u==1)for(f=0;f<h;f++)c.push(l.readUint(n,i+(f<<2)));return c},e.maxp={},e.maxp.parse=function(n,i,a){var o=e._bin,l={},c=o.readUint(n,i);return i+=4,l.numGlyphs=o.readUshort(n,i),i+=2,c==65536&&(l.maxPoints=o.readUshort(n,i),i+=2,l.maxContours=o.readUshort(n,i),i+=2,l.maxCompositePoints=o.readUshort(n,i),i+=2,l.maxCompositeContours=o.readUshort(n,i),i+=2,l.maxZones=o.readUshort(n,i),i+=2,l.maxTwilightPoints=o.readUshort(n,i),i+=2,l.maxStorage=o.readUshort(n,i),i+=2,l.maxFunctionDefs=o.readUshort(n,i),i+=2,l.maxInstructionDefs=o.readUshort(n,i),i+=2,l.maxStackElements=o.readUshort(n,i),i+=2,l.maxSizeOfInstructions=o.readUshort(n,i),i+=2,l.maxComponentElements=o.readUshort(n,i),i+=2,l.maxComponentDepth=o.readUshort(n,i),i+=2),l},e.name={},e.name.parse=function(n,i,a){var o=e._bin,l={};o.readUshort(n,i),i+=2;var c=o.readUshort(n,i);i+=2,o.readUshort(n,i);for(var u,h=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],f=i+=2,d=0;d<c;d++){var g=o.readUshort(n,i);i+=2;var v=o.readUshort(n,i);i+=2;var m=o.readUshort(n,i);i+=2;var p=o.readUshort(n,i);i+=2;var M=o.readUshort(n,i);i+=2;var _=o.readUshort(n,i);i+=2;var x,T=h[p],C=f+12*c+_;if(g==0)x=o.readUnicode(n,C,M/2);else if(g==3&&v==0)x=o.readUnicode(n,C,M/2);else if(v==0)x=o.readASCII(n,C,M);else if(v==1)x=o.readUnicode(n,C,M/2);else if(v==3)x=o.readUnicode(n,C,M/2);else{if(g!=1)throw"unknown encoding "+v+", platformID: "+g;x=o.readASCII(n,C,M),console.debug("reading unknown MAC encoding "+v+" as ASCII")}var w="p"+g+","+m.toString(16);l[w]==null&&(l[w]={}),l[w][T!==void 0?T:p]=x,l[w]._lang=m}for(var D in l)if(l[D].postScriptName!=null&&l[D]._lang==1033)return l[D];for(var D in l)if(l[D].postScriptName!=null&&l[D]._lang==0)return l[D];for(var D in l)if(l[D].postScriptName!=null&&l[D]._lang==3084)return l[D];for(var D in l)if(l[D].postScriptName!=null)return l[D];for(var D in l){u=D;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(n,i,a){var o=e._bin.readUshort(n,i);i+=2;var l={};if(o==0)e["OS/2"].version0(n,i,l);else if(o==1)e["OS/2"].version1(n,i,l);else if(o==2||o==3||o==4)e["OS/2"].version2(n,i,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(n,i,l)}return l},e["OS/2"].version0=function(n,i,a){var o=e._bin;return a.xAvgCharWidth=o.readShort(n,i),i+=2,a.usWeightClass=o.readUshort(n,i),i+=2,a.usWidthClass=o.readUshort(n,i),i+=2,a.fsType=o.readUshort(n,i),i+=2,a.ySubscriptXSize=o.readShort(n,i),i+=2,a.ySubscriptYSize=o.readShort(n,i),i+=2,a.ySubscriptXOffset=o.readShort(n,i),i+=2,a.ySubscriptYOffset=o.readShort(n,i),i+=2,a.ySuperscriptXSize=o.readShort(n,i),i+=2,a.ySuperscriptYSize=o.readShort(n,i),i+=2,a.ySuperscriptXOffset=o.readShort(n,i),i+=2,a.ySuperscriptYOffset=o.readShort(n,i),i+=2,a.yStrikeoutSize=o.readShort(n,i),i+=2,a.yStrikeoutPosition=o.readShort(n,i),i+=2,a.sFamilyClass=o.readShort(n,i),i+=2,a.panose=o.readBytes(n,i,10),i+=10,a.ulUnicodeRange1=o.readUint(n,i),i+=4,a.ulUnicodeRange2=o.readUint(n,i),i+=4,a.ulUnicodeRange3=o.readUint(n,i),i+=4,a.ulUnicodeRange4=o.readUint(n,i),i+=4,a.achVendID=[o.readInt8(n,i),o.readInt8(n,i+1),o.readInt8(n,i+2),o.readInt8(n,i+3)],i+=4,a.fsSelection=o.readUshort(n,i),i+=2,a.usFirstCharIndex=o.readUshort(n,i),i+=2,a.usLastCharIndex=o.readUshort(n,i),i+=2,a.sTypoAscender=o.readShort(n,i),i+=2,a.sTypoDescender=o.readShort(n,i),i+=2,a.sTypoLineGap=o.readShort(n,i),i+=2,a.usWinAscent=o.readUshort(n,i),i+=2,a.usWinDescent=o.readUshort(n,i),i+=2},e["OS/2"].version1=function(n,i,a){var o=e._bin;return i=e["OS/2"].version0(n,i,a),a.ulCodePageRange1=o.readUint(n,i),i+=4,a.ulCodePageRange2=o.readUint(n,i),i+=4},e["OS/2"].version2=function(n,i,a){var o=e._bin;return i=e["OS/2"].version1(n,i,a),a.sxHeight=o.readShort(n,i),i+=2,a.sCapHeight=o.readShort(n,i),i+=2,a.usDefault=o.readUshort(n,i),i+=2,a.usBreak=o.readUshort(n,i),i+=2,a.usMaxContext=o.readUshort(n,i),i+=2},e["OS/2"].version5=function(n,i,a){var o=e._bin;return i=e["OS/2"].version2(n,i,a),a.usLowerOpticalPointSize=o.readUshort(n,i),i+=2,a.usUpperOpticalPointSize=o.readUshort(n,i),i+=2},e.post={},e.post.parse=function(n,i,a){var o=e._bin,l={};return l.version=o.readFixed(n,i),i+=4,l.italicAngle=o.readFixed(n,i),i+=4,l.underlinePosition=o.readShort(n,i),i+=2,l.underlineThickness=o.readShort(n,i),i+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,i){var a=n.cmap,o=-1;if(a.p0e4!=null?o=a.p0e4:a.p3e1!=null?o=a.p3e1:a.p1e0!=null?o=a.p1e0:a.p0e3!=null&&(o=a.p0e3),o==-1)throw"no familiar platform and encoding!";var l=a.tables[o];if(l.format==0)return i>=l.map.length?0:l.map[i];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(i<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>i?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[i-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:i+l.idDelta[c])}if(l.format==12){if(i>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var h=l.groups[u];if(h[0]<=i&&i<=h[1])return h[2]+(i-h[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,i){var a={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[i]){var o=n.SVG.entries[i];return o==null?a:(typeof o=="string"&&(o=e.SVG.toPath(o),n.SVG.entries[i]=o),o)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,u=n.CFF.Private;if(c.ROS){for(var h=0;c.FDSelect[h+2]<=i;)h+=2;u=c.FDArray[c.FDSelect[h+1]].Private}e.U._drawCFF(n.CFF.CharStrings[i],l,c,u,a)}else n.glyf&&e.U._drawGlyf(i,n,a);return a},e.U._drawGlyf=function(n,i,a){var o=i.glyf[n];o==null&&(o=i.glyf[n]=e.glyf._parseGlyf(i,n)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,a):e.U._compoGlyph(o,i,a))},e.U._simpleGlyph=function(n,i){for(var a=0;a<n.noc;a++){for(var o=a==0?0:n.endPts[a-1]+1,l=n.endPts[a],c=o;c<=l;c++){var u=c==o?l:c-1,h=c==l?o:c+1,f=1&n.flags[c],d=1&n.flags[u],g=1&n.flags[h],v=n.xs[c],m=n.ys[c];if(c==o)if(f){if(!d){e.U.P.moveTo(i,v,m);continue}e.U.P.moveTo(i,n.xs[u],n.ys[u])}else d?e.U.P.moveTo(i,n.xs[u],n.ys[u]):e.U.P.moveTo(i,(n.xs[u]+v)/2,(n.ys[u]+m)/2);f?d&&e.U.P.lineTo(i,v,m):g?e.U.P.qcurveTo(i,v,m,n.xs[h],n.ys[h]):e.U.P.qcurveTo(i,v,m,(v+n.xs[h])/2,(m+n.ys[h])/2)}e.U.P.closePath(i)}},e.U._compoGlyph=function(n,i,a){for(var o=0;o<n.parts.length;o++){var l={cmds:[],crds:[]},c=n.parts[o];e.U._drawGlyf(c.glyphIndex,i,l);for(var u=c.m,h=0;h<l.crds.length;h+=2){var f=l.crds[h],d=l.crds[h+1];a.crds.push(f*u.a+d*u.b+u.tx),a.crds.push(f*u.c+d*u.d+u.ty)}for(h=0;h<l.cmds.length;h++)a.cmds.push(l.cmds[h])}},e.U._getGlyphClass=function(n,i){var a=e._lctf.getInterval(i,n);return a==-1?0:i[a+2]},e.U._applySubs=function(n,i,a,o){for(var l=n.length-i-1,c=0;c<a.tabs.length;c++)if(a.tabs[c]!=null){var u,h=a.tabs[c];if(!h.coverage||(u=e._lctf.coverageIndex(h.coverage,n[i]))!=-1){if(a.ltype==1)n[i],h.fmt==1?n[i]=n[i]+h.delta:n[i]=h.newg[u];else if(a.ltype==4)for(var f=h.vals[u],d=0;d<f.length;d++){var g=f[d],v=g.chain.length;if(!(v>l)){for(var m=!0,p=0,M=0;M<v;M++){for(;n[i+p+(1+M)]==-1;)p++;g.chain[M]!=n[i+p+(1+M)]&&(m=!1)}if(m){for(n[i]=g.nglyph,M=0;M<v+p;M++)n[i+M+1]=-1;break}}}else if(a.ltype==5&&h.fmt==2)for(var _=e._lctf.getInterval(h.cDef,n[i]),x=h.cDef[_+2],T=h.scset[x],C=0;C<T.length;C++){var w=T[C],D=w.input;if(!(D.length>l)){for(m=!0,M=0;M<D.length;M++){var S=e._lctf.getInterval(h.cDef,n[i+1+M]);if(_==-1&&h.cDef[S+2]!=D[M]){m=!1;break}}if(m){var b=w.substLookupRecords;for(d=0;d<b.length;d+=2)b[d],b[d+1]}}}else if(a.ltype==6&&h.fmt==3){if(!e.U._glsCovered(n,h.backCvg,i-h.backCvg.length)||!e.U._glsCovered(n,h.inptCvg,i)||!e.U._glsCovered(n,h.ahedCvg,i+h.inptCvg.length))continue;var q=h.lookupRec;for(C=0;C<q.length;C+=2){_=q[C];var F=o[q[C+1]];e.U._applySubs(n,i+_,F,o)}}}}},e.U._glsCovered=function(n,i,a){for(var o=0;o<i.length;o++)if(e._lctf.coverageIndex(i[o],n[a+o])==-1)return!1;return!0},e.U.glyphsToPath=function(n,i,a){for(var o={cmds:[],crds:[]},l=0,c=0;c<i.length;c++){var u=i[c];if(u!=-1){for(var h=c<i.length-1&&i[c+1]!=-1?i[c+1]:0,f=e.U.glyphToPath(n,u),d=0;d<f.crds.length;d+=2)o.crds.push(f.crds[d]+l),o.crds.push(f.crds[d+1]);for(a&&o.cmds.push(a),d=0;d<f.cmds.length;d++)o.cmds.push(f.cmds[d]);a&&o.cmds.push("X"),l+=n.hmtx.aWidth[u],c<i.length-1&&(l+=e.U.getPairAdjustment(n,u,h))}}return o},e.U.P={},e.U.P.moveTo=function(n,i,a){n.cmds.push("M"),n.crds.push(i,a)},e.U.P.lineTo=function(n,i,a){n.cmds.push("L"),n.crds.push(i,a)},e.U.P.curveTo=function(n,i,a,o,l,c,u){n.cmds.push("C"),n.crds.push(i,a,o,l,c,u)},e.U.P.qcurveTo=function(n,i,a,o,l){n.cmds.push("Q"),n.crds.push(i,a,o,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,i,a,o,l){for(var c=i.stack,u=i.nStems,h=i.haveWidth,f=i.width,d=i.open,g=0,v=i.x,m=i.y,p=0,M=0,_=0,x=0,T=0,C=0,w=0,D=0,S=0,b=0,q={val:0,size:0};g<n.length;){e.CFF.getCharString(n,g,q);var F=q.val;if(g+=q.size,F=="o1"||F=="o18")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(F=="o3"||F=="o23")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(F=="o4")c.length>1&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),d&&e.U.P.closePath(l),m+=c.pop(),e.U.P.moveTo(l,v,m),d=!0;else if(F=="o5")for(;c.length>0;)v+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,v,m);else if(F=="o6"||F=="o7")for(var G=c.length,P=F=="o6",k=0;k<G;k++){var B=c.shift();P?v+=B:m+=B,P=!P,e.U.P.lineTo(l,v,m)}else if(F=="o8"||F=="o24"){G=c.length;for(var Y=0;Y+6<=G;)p=v+c.shift(),M=m+c.shift(),_=p+c.shift(),x=M+c.shift(),v=_+c.shift(),m=x+c.shift(),e.U.P.curveTo(l,p,M,_,x,v,m),Y+=6;F=="o24"&&(v+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,v,m))}else{if(F=="o11")break;if(F=="o1234"||F=="o1235"||F=="o1236"||F=="o1237")F=="o1234"&&(M=m,_=(p=v+c.shift())+c.shift(),b=x=M+c.shift(),C=x,D=m,v=(w=(T=(S=_+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,p,M,_,x,S,b),e.U.P.curveTo(l,T,C,w,D,v,m)),F=="o1235"&&(p=v+c.shift(),M=m+c.shift(),_=p+c.shift(),x=M+c.shift(),S=_+c.shift(),b=x+c.shift(),T=S+c.shift(),C=b+c.shift(),w=T+c.shift(),D=C+c.shift(),v=w+c.shift(),m=D+c.shift(),c.shift(),e.U.P.curveTo(l,p,M,_,x,S,b),e.U.P.curveTo(l,T,C,w,D,v,m)),F=="o1236"&&(p=v+c.shift(),M=m+c.shift(),_=p+c.shift(),b=x=M+c.shift(),C=x,w=(T=(S=_+c.shift())+c.shift())+c.shift(),D=C+c.shift(),v=w+c.shift(),e.U.P.curveTo(l,p,M,_,x,S,b),e.U.P.curveTo(l,T,C,w,D,v,m)),F=="o1237"&&(p=v+c.shift(),M=m+c.shift(),_=p+c.shift(),x=M+c.shift(),S=_+c.shift(),b=x+c.shift(),T=S+c.shift(),C=b+c.shift(),w=T+c.shift(),D=C+c.shift(),Math.abs(w-v)>Math.abs(D-m)?v=w+c.shift():m=D+c.shift(),e.U.P.curveTo(l,p,M,_,x,S,b),e.U.P.curveTo(l,T,C,w,D,v,m));else if(F=="o14"){if(c.length>0&&!h&&(f=c.shift()+a.nominalWidthX,h=!0),c.length==4){var ie=c.shift(),V=c.shift(),O=c.shift(),E=c.shift(),U=e.CFF.glyphBySE(a,O),H=e.CFF.glyphBySE(a,E);e.U._drawCFF(a.CharStrings[U],i,a,o,l),i.x=ie,i.y=V,e.U._drawCFF(a.CharStrings[H],i,a,o,l)}d&&(e.U.P.closePath(l),d=!1)}else if(F=="o19"||F=="o20")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0,g+=u+7>>3;else if(F=="o21")c.length>2&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),m+=c.pop(),v+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,v,m),d=!0;else if(F=="o22")c.length>1&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),v+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,v,m),d=!0;else if(F=="o25"){for(;c.length>6;)v+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,v,m);p=v+c.shift(),M=m+c.shift(),_=p+c.shift(),x=M+c.shift(),v=_+c.shift(),m=x+c.shift(),e.U.P.curveTo(l,p,M,_,x,v,m)}else if(F=="o26")for(c.length%2&&(v+=c.shift());c.length>0;)p=v,M=m+c.shift(),v=_=p+c.shift(),m=(x=M+c.shift())+c.shift(),e.U.P.curveTo(l,p,M,_,x,v,m);else if(F=="o27")for(c.length%2&&(m+=c.shift());c.length>0;)M=m,_=(p=v+c.shift())+c.shift(),x=M+c.shift(),v=_+c.shift(),m=x,e.U.P.curveTo(l,p,M,_,x,v,m);else if(F=="o10"||F=="o29"){var X=F=="o10"?o:a;if(c.length==0)console.debug("error: empty stack");else{var W=c.pop(),re=X.Subrs[W+X.Bias];i.x=v,i.y=m,i.nStems=u,i.haveWidth=h,i.width=f,i.open=d,e.U._drawCFF(re,i,a,o,l),v=i.x,m=i.y,u=i.nStems,h=i.haveWidth,f=i.width,d=i.open}}else if(F=="o30"||F=="o31"){var K=c.length,ne=(Y=0,F=="o31");for(Y+=K-(G=-3&K);Y<G;)ne?(M=m,_=(p=v+c.shift())+c.shift(),m=(x=M+c.shift())+c.shift(),G-Y==5?(v=_+c.shift(),Y++):v=_,ne=!1):(p=v,M=m+c.shift(),_=p+c.shift(),x=M+c.shift(),v=_+c.shift(),G-Y==5?(m=x+c.shift(),Y++):m=x,ne=!0),e.U.P.curveTo(l,p,M,_,x,v,m),Y+=4}else{if((F+"").charAt(0)=="o")throw console.debug("Unknown operation: "+F,n),F;c.push(F)}}}i.x=v,i.y=m,i.nStems=u,i.haveWidth=h,i.width=f,i.open=d};var t=e,r={Typr:t};return s.Typr=t,s.default=r,Object.defineProperty(s,"__esModule",{value:!0}),s}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function $0(){return function(s){var e=Uint8Array,t=Uint16Array,r=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(F,G){for(var P=new t(31),k=0;k<31;++k)P[k]=G+=1<<F[k-1];var B=new r(P[30]);for(k=1;k<30;++k)for(var Y=P[k];Y<P[k+1];++Y)B[Y]=Y-P[k]<<5|k;return[P,B]},l=o(n,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var h=o(i,0)[0],f=new t(32768),d=0;d<32768;++d){var g=(43690&d)>>>1|(21845&d)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,f[d]=((65280&g)>>>8|(255&g)<<8)>>>1}var v=function(F,G,P){for(var k=F.length,B=0,Y=new t(G);B<k;++B)++Y[F[B]-1];var ie,V=new t(G);for(B=0;B<G;++B)V[B]=V[B-1]+Y[B-1]<<1;if(P){ie=new t(1<<G);var O=15-G;for(B=0;B<k;++B)if(F[B])for(var E=B<<4|F[B],U=G-F[B],H=V[F[B]-1]++<<U,X=H|(1<<U)-1;H<=X;++H)ie[f[H]>>>O]=E}else for(ie=new t(k),B=0;B<k;++B)F[B]&&(ie[B]=f[V[F[B]-1]++]>>>15-F[B]);return ie},m=new e(288);for(d=0;d<144;++d)m[d]=8;for(d=144;d<256;++d)m[d]=9;for(d=256;d<280;++d)m[d]=7;for(d=280;d<288;++d)m[d]=8;var p=new e(32);for(d=0;d<32;++d)p[d]=5;var M=v(m,9,1),_=v(p,5,1),x=function(F){for(var G=F[0],P=1;P<F.length;++P)F[P]>G&&(G=F[P]);return G},T=function(F,G,P){var k=G/8|0;return(F[k]|F[k+1]<<8)>>(7&G)&P},C=function(F,G){var P=G/8|0;return(F[P]|F[P+1]<<8|F[P+2]<<16)>>(7&G)},w=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],D=function(F,G,P){var k=new Error(G||w[F]);if(k.code=F,Error.captureStackTrace&&Error.captureStackTrace(k,D),!P)throw k;return k},S=function(F,G,P){var k=F.length;if(!k||P&&!P.l&&k<5)return G||new e(0);var B=!G||P,Y=!P||P.i;P||(P={}),G||(G=new e(3*k));var ie,V=function(Ae){var Pe=G.length;if(Ae>Pe){var ze=new e(Math.max(2*Pe,Ae));ze.set(G),G=ze}},O=P.f||0,E=P.p||0,U=P.b||0,H=P.l,X=P.d,W=P.m,re=P.n,K=8*k;do{if(!H){P.f=O=T(F,E,1);var ne=T(F,E+1,3);if(E+=3,!ne){var ve=F[(xe=((ie=E)/8|0)+(7&ie&&1)+4)-4]|F[xe-3]<<8,we=xe+ve;if(we>k){Y&&D(0);break}B&&V(U+ve),G.set(F.subarray(xe,we),U),P.b=U+=ve,P.p=E=8*we;continue}if(ne==1)H=M,X=_,W=9,re=5;else if(ne==2){var he=T(F,E,31)+257,R=T(F,E+10,15)+4,de=he+T(F,E+5,31)+1;E+=14;for(var J=new e(de),ae=new e(19),$=0;$<R;++$)ae[a[$]]=T(F,E+3*$,7);E+=3*R;var Ee=x(ae),te=(1<<Ee)-1,fe=v(ae,Ee,1);for($=0;$<de;){var xe,ee=fe[T(F,E,te)];if(E+=15&ee,(xe=ee>>>4)<16)J[$++]=xe;else{var Ue=0,A=0;for(xe==16?(A=3+T(F,E,3),E+=2,Ue=J[$-1]):xe==17?(A=3+T(F,E,7),E+=3):xe==18&&(A=11+T(F,E,127),E+=7);A--;)J[$++]=Ue}}var y=J.subarray(0,he),z=J.subarray(he);W=x(y),re=x(z),H=v(y,W,1),X=v(z,re,1)}else D(1);if(E>K){Y&&D(0);break}}B&&V(U+131072);for(var me=(1<<W)-1,Z=(1<<re)-1,oe=E;;oe=E){var _e=(Ue=H[C(F,E)&me])>>>4;if((E+=15&Ue)>K){Y&&D(0);break}if(Ue||D(2),_e<256)G[U++]=_e;else{if(_e==256){oe=E,H=null;break}var pe=_e-254;if(_e>264){var ye=n[$=_e-257];pe=T(F,E,(1<<ye)-1)+c[$],E+=ye}var Fe=X[C(F,E)&Z],Ie=Fe>>>4;if(Fe||D(3),E+=15&Fe,z=h[Ie],Ie>3&&(ye=i[Ie],z+=C(F,E)&(1<<ye)-1,E+=ye),E>K){Y&&D(0);break}B&&V(U+131072);for(var ue=U+pe;U<ue;U+=4)G[U]=G[U-z],G[U+1]=G[U+1-z],G[U+2]=G[U+2-z],G[U+3]=G[U+3-z];U=ue}}P.l=H,P.p=oe,P.b=U,H&&(O=1,P.m=W,P.d=X,P.n=re)}while(!O);return U==G.length?G:function(Ae,Pe,ze){(Pe==null||Pe<0)&&(Pe=0),(ze==null||ze>Ae.length)&&(ze=Ae.length);var ke=new(Ae instanceof t?t:Ae instanceof r?r:e)(ze-Pe);return ke.set(Ae.subarray(Pe,ze)),ke}(G,0,U)},b=new e(0),q=typeof TextDecoder<"u"&&new TextDecoder;try{q.decode(b,{stream:!0})}catch{}return s.convert_streams=function(F){var G=new DataView(F),P=0;function k(){var he=G.getUint16(P);return P+=2,he}function B(){var he=G.getUint32(P);return P+=4,he}function Y(he){ve.setUint16(we,he),we+=2}function ie(he){ve.setUint32(we,he),we+=4}for(var V={signature:B(),flavor:B(),length:B(),numTables:k(),reserved:k(),totalSfntSize:B(),majorVersion:k(),minorVersion:k(),metaOffset:B(),metaLength:B(),metaOrigLength:B(),privOffset:B(),privLength:B()},O=0;Math.pow(2,O)<=V.numTables;)O++;O--;for(var E=16*Math.pow(2,O),U=16*V.numTables-E,H=12,X=[],W=0;W<V.numTables;W++)X.push({tag:B(),offset:B(),compLength:B(),origLength:B(),origChecksum:B()}),H+=16;var re,K=new Uint8Array(12+16*X.length+X.reduce(function(he,R){return he+R.origLength+4},0)),ne=K.buffer,ve=new DataView(ne),we=0;return ie(V.flavor),Y(V.numTables),Y(E),Y(O),Y(U),X.forEach(function(he){ie(he.tag),ie(he.origChecksum),ie(H),ie(he.origLength),he.outOffset=H,(H+=he.origLength)%4!=0&&(H+=4-H%4)}),X.forEach(function(he){var R,de=F.slice(he.offset,he.offset+he.compLength);if(he.compLength!=he.origLength){var J=new Uint8Array(he.origLength);R=new Uint8Array(de,2),S(R,J)}else J=new Uint8Array(de);K.set(J,he.outOffset);var ae=0;(H=he.outOffset+he.origLength)%4!=0&&(ae=4-H%4),K.set(new Uint8Array(ae).buffer,he.outOffset+he.origLength),re=H+ae}),ne.slice(0,re)},Object.defineProperty(s,"__esModule",{value:!0}),s}({}).convert_streams}function e_(s,e){const t={M:2,L:2,Q:4,C:6,Z:0},r={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,i=2,a=4,o=8,l=16,c=32;let u;function h(w){if(!u){const D={R:i,L:n,D:a,C:l,U:c,T:o};u=new Map;for(let S in r){let b=0;r[S].split(",").forEach(q=>{let[F,G]=q.split("+");F=parseInt(F,36),G=G?parseInt(G,36):0,u.set(b+=F,D[S]);for(let P=G;P--;)u.set(++b,D[S])})}}return u.get(w)||c}const f=1,d=2,g=3,v=4,m=[null,"isol","init","fina","medi"];function p(w){const D=new Uint8Array(w.length);let S=c,b=f,q=-1;for(let F=0;F<w.length;F++){const G=w.codePointAt(F);let P=h(G)|0,k=f;P&o||(S&(n|a|l)?P&(i|a|l)?(k=g,(b===f||b===g)&&D[q]++):P&(n|c)&&(b===d||b===v)&&D[q]--:S&(i|c)&&(b===d||b===v)&&D[q]--,b=D[F]=k,S=P,q=F,G>65535&&F++)}return D}function M(w,D){const S=[];for(let q=0;q<D.length;q++){const F=D.codePointAt(q);F>65535&&q++,S.push(s.U.codeToGlyph(w,F))}const b=w.GSUB;if(b){const{lookupList:q,featureList:F}=b;let G;const P=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,k=[];F.forEach(B=>{if(P.test(B.tag))for(let Y=0;Y<B.tab.length;Y++){if(k[B.tab[Y]])continue;k[B.tab[Y]]=!0;const ie=q[B.tab[Y]],V=/^(isol|init|fina|medi)$/.test(B.tag);V&&!G&&(G=p(D));for(let O=0;O<S.length;O++)(!G||!V||m[G[O]]===B.tag)&&s.U._applySubs(S,O,ie,q)}})}return S}function _(w,D){const S=new Int16Array(D.length*3);let b=0;for(;b<D.length;b++){const P=D[b];if(P===-1)continue;S[b*3+2]=w.hmtx.aWidth[P];const k=w.GPOS;if(k){const B=k.lookupList;for(let Y=0;Y<B.length;Y++){const ie=B[Y];for(let V=0;V<ie.tabs.length;V++){const O=ie.tabs[V];if(ie.ltype===1){if(s._lctf.coverageIndex(O.coverage,P)!==-1&&O.pos){G(O.pos,b);break}}else if(ie.ltype===2){let E=null,U=q();if(U!==-1){const H=s._lctf.coverageIndex(O.coverage,D[U]);if(H!==-1){if(O.fmt===1){const X=O.pairsets[H];for(let W=0;W<X.length;W++)X[W].gid2===P&&(E=X[W])}else if(O.fmt===2){const X=s.U._getGlyphClass(D[U],O.classDef1),W=s.U._getGlyphClass(P,O.classDef2);E=O.matrix[X][W]}if(E){E.val1&&G(E.val1,U),E.val2&&G(E.val2,b);break}}}}else if(ie.ltype===4){const E=s._lctf.coverageIndex(O.markCoverage,P);if(E!==-1){const U=q(F),H=U===-1?-1:s._lctf.coverageIndex(O.baseCoverage,D[U]);if(H!==-1){const X=O.markArray[E],W=O.baseArray[H][X.markClass];S[b*3]=W.x-X.x+S[U*3]-S[U*3+2],S[b*3+1]=W.y-X.y+S[U*3+1];break}}}else if(ie.ltype===6){const E=s._lctf.coverageIndex(O.mark1Coverage,P);if(E!==-1){const U=q();if(U!==-1){const H=D[U];if(x(w,H)===3){const X=s._lctf.coverageIndex(O.mark2Coverage,H);if(X!==-1){const W=O.mark1Array[E],re=O.mark2Array[X][W.markClass];S[b*3]=re.x-W.x+S[U*3]-S[U*3+2],S[b*3+1]=re.y-W.y+S[U*3+1];break}}}}}}}}else if(w.kern&&!w.cff){const B=q();if(B!==-1){const Y=w.kern.glyph1.indexOf(D[B]);if(Y!==-1){const ie=w.kern.rval[Y].glyph2.indexOf(P);ie!==-1&&(S[B*3+2]+=w.kern.rval[Y].vals[ie])}}}}return S;function q(P){for(let k=b-1;k>=0;k--)if(D[k]!==-1&&(!P||P(D[k])))return k;return-1}function F(P){return x(w,P)===1}function G(P,k){for(let B=0;B<3;B++)S[k*3+B]+=P[B]||0}}function x(w,D){const S=w.GDEF&&w.GDEF.glyphClassDef;return S?s.U._getGlyphClass(D,S):0}function T(...w){for(let D=0;D<w.length;D++)if(typeof w[D]=="number")return w[D]}function C(w){const D=Object.create(null),S=w["OS/2"],b=w.hhea,q=w.head.unitsPerEm,F=T(S&&S.sTypoAscender,b&&b.ascender,q),G={unitsPerEm:q,ascender:F,descender:T(S&&S.sTypoDescender,b&&b.descender,0),capHeight:T(S&&S.sCapHeight,F),xHeight:T(S&&S.sxHeight,F),lineGap:T(S&&S.sTypoLineGap,b&&b.lineGap),supportsCodePoint(P){return s.U.codeToGlyph(w,P)>0},forEachGlyph(P,k,B,Y){let ie=0;const V=1/G.unitsPerEm*k,O=M(w,P);let E=0;const U=_(w,O);return O.forEach((H,X)=>{if(H!==-1){let W=D[H];if(!W){const{cmds:re,crds:K}=s.U.glyphToPath(w,H);let ne="",ve=0;for(let J=0,ae=re.length;J<ae;J++){const $=t[re[J]];ne+=re[J];for(let Ee=1;Ee<=$;Ee++)ne+=(Ee>1?",":"")+K[ve++]}let we,he,R,de;if(K.length){we=he=1/0,R=de=-1/0;for(let J=0,ae=K.length;J<ae;J+=2){let $=K[J],Ee=K[J+1];$<we&&(we=$),Ee<he&&(he=Ee),$>R&&(R=$),Ee>de&&(de=Ee)}}else we=R=he=de=0;W=D[H]={index:H,advanceWidth:w.hmtx.aWidth[H],xMin:we,yMin:he,xMax:R,yMax:de,path:ne}}Y.call(null,W,ie+U[X*3]*V,U[X*3+1]*V,E),ie+=U[X*3+2]*V,B&&(ie+=B*k)}E+=P.codePointAt(E)>65535?2:1}),ie}};return G}return function(D){const S=new Uint8Array(D,0,4),b=s._bin.readASCII(S,0,4);if(b==="wOFF")D=e(D);else if(b==="wOF2")throw new Error("woff2 fonts not supported");return C(s.parse(D)[0])}}const t_=pr({name:"Typr Font Parser",dependencies:[Q0,$0,e_],init(s,e,t){const r=s(),n=e();return t(r,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function n_(){return function(s){var e=function(){this.buckets=new Map};e.prototype.add=function(_){var x=_>>5;this.buckets.set(x,(this.buckets.get(x)||0)|1<<(31&_))},e.prototype.has=function(_){var x=this.buckets.get(_>>5);return x!==void 0&&(x&1<<(31&_))!=0},e.prototype.serialize=function(){var _=[];return this.buckets.forEach(function(x,T){_.push((+T).toString(36)+":"+x.toString(36))}),_.join(",")},e.prototype.deserialize=function(_){var x=this;this.buckets.clear(),_.split(",").forEach(function(T){var C=T.split(":");x.buckets.set(parseInt(C[0],36),parseInt(C[1],36))})};var t=Math.pow(2,8),r=t-1,n=~r;function i(_){var x=function(C){return C&n}(_).toString(16),T=function(C){return(C&n)+t-1}(_).toString(16);return"codepoint-index/plane"+(_>>16)+"/"+x+"-"+T+".json"}function a(_,x){var T=_&r,C=x.codePointAt(T/6|0);return((C=(C||48)-48)&1<<T%6)!=0}function o(_,x){var T;(T=_,T.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(C){return C.split("-").map(function(w){return parseInt(w.trim(),16)})})).forEach(function(C){var w=C[0],D=C[1];D===void 0&&(D=w),x(w,D)})}function l(_,x){o(_,function(T,C){for(var w=T;w<=C;w++)x(w)})}var c={},u={},h=new WeakMap,f="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(_){var x=h.get(_);return x||(x=new e,l(_.ranges,function(T){return x.add(T)}),h.set(_,x)),x}var g,v=new Map;function m(_,x,T){return _[x]?x:_[T]?T:function(C){for(var w in C)return w}(_)}function p(_,x){var T=x;if(!_.includes(T)){T=1/0;for(var C=0;C<_.length;C++)Math.abs(_[C]-x)<Math.abs(T-x)&&(T=_[C])}return T}function M(_){return g||(g=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(x){g.add(x)})),g.has(_)}return s.CodePointSet=e,s.clearCache=function(){c={},u={}},s.getFontsForString=function(_,x){x===void 0&&(x={});var T,C=x.lang;C===void 0&&(C=new RegExp("\\p{Script=Hangul}","u").test(T=_)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(T)?"ja":"en");var w=x.category;w===void 0&&(w="sans-serif");var D=x.style;D===void 0&&(D="normal");var S=x.weight;S===void 0&&(S=400);var b=(x.dataUrl||f).replace(/\/$/g,""),q=new Map,F=new Uint8Array(_.length),G={},P={},k=new Array(_.length),B=new Map,Y=!1;function ie(E){var U=v.get(E);return U||(U=fetch(b+"/"+E).then(function(H){if(!H.ok)throw new Error(H.statusText);return H.json().then(function(X){if(!Array.isArray(X)||X[0]!==1)throw new Error("Incorrect schema version; need 1, got "+X[0]);return X[1]})}).catch(function(H){if(b!==f)return Y||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+b+'", trying default CDN. '+H.message),Y=!0),b=f,v.delete(E),ie(E);throw H}),v.set(E,U)),U}for(var V=function(E){var U=_.codePointAt(E),H=i(U);k[E]=H,c[H]||B.has(H)||B.set(H,ie(H).then(function(X){c[H]=X})),U>65535&&(E++,O=E)},O=0;O<_.length;O++)V(O);return Promise.all(B.values()).then(function(){B.clear();for(var E=function(H){var X=_.codePointAt(H),W=null,re=c[k[H]],K=void 0;for(var ne in re){var ve=P[ne];if(ve===void 0&&(ve=P[ne]=new RegExp(ne).test(C||"en")),ve){for(var we in K=ne,re[ne])if(a(X,re[ne][we])){W=we;break}break}}if(!W){e:for(var he in re)if(he!==K){for(var R in re[he])if(a(X,re[he][R])){W=R;break e}}}W||(console.debug("No font coverage for U+"+X.toString(16)),W="latin"),k[H]=W,u[W]||B.has(W)||B.set(W,ie("font-meta/"+W+".json").then(function(de){u[W]=de})),X>65535&&(H++,U=H)},U=0;U<_.length;U++)E(U);return Promise.all(B.values())}).then(function(){for(var E,U=null,H=0;H<_.length;H++){var X=_.codePointAt(H);if(U&&(M(X)||d(U).has(X)))F[H]=F[H-1];else{U=u[k[H]];var W=G[U.id];if(!W){var re=U.typeforms,K=m(re,w,"sans-serif"),ne=m(re[K],D,"normal"),ve=p((E=re[K])===null||E===void 0?void 0:E[ne],S);W=G[U.id]=b+"/font-files/"+U.id+"/"+K+"."+ne+"."+ve+".woff"}var we=q.get(W);we==null&&(we=q.size,q.set(W,we)),F[H]=we}X>65535&&(H++,F[H]=F[H-1])}return{fontUrls:Array.from(q.keys()),chars:F}})},Object.defineProperty(s,"__esModule",{value:!0}),s}({})}function i_(s,e){const t=Object.create(null),r=Object.create(null);function n(a,o){const l=c=>{console.error(`Failure loading font ${a}`,c)};try{const c=new XMLHttpRequest;c.open("get",a,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=s(c.response);u.src=a,o(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function i(a,o){let l=t[a];l?o(l):r[a]?r[a].push(o):(r[a]=[o],n(a,c=>{c.src=a,t[a]=c,r[a].forEach(u=>u(c)),delete r[a]}))}return function(a,o,{lang:l,fonts:c=[],style:u="normal",weight:h="normal",unicodeFontsURL:f}={}){const d=new Uint8Array(a.length),g=[];a.length||M();const v=new Map,m=[];if(u!=="italic"&&(u="normal"),typeof h!="number"&&(h=h==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(x=>!x.lang||x.lang.test(l)).reverse(),c.length){let w=0;(function D(S=0){for(let b=S,q=a.length;b<q;b++){const F=a.codePointAt(b);if(w===1&&g[d[b-1]].supportsCodePoint(F)||/\s/.test(a[b]))d[b]=d[b-1],w===2&&(m[m.length-1][1]=b);else for(let G=d[b],P=c.length;G<=P;G++)if(G===P){const k=w===2?m[m.length-1]:m[m.length]=[b,b];k[1]=b,w=2}else{d[b]=G;const{src:k,unicodeRange:B}=c[G];if(!B||_(F,B)){const Y=t[k];if(!Y){i(k,()=>{D(b)});return}if(Y.supportsCodePoint(F)){let ie=v.get(Y);typeof ie!="number"&&(ie=g.length,g.push(Y),v.set(Y,ie)),d[b]=ie,w=1;break}}}F>65535&&b+1<q&&(d[b+1]=d[b],b++,w===2&&(m[m.length-1][1]=b))}p()})()}else m.push([0,a.length-1]),p();function p(){if(m.length){const x=m.map(T=>a.substring(T[0],T[1]+1)).join(`
`);e.getFontsForString(x,{lang:l||void 0,style:u,weight:h,dataUrl:f}).then(({fontUrls:T,chars:C})=>{const w=g.length;let D=0;m.forEach(b=>{for(let q=0,F=b[1]-b[0];q<=F;q++)d[b[0]+q]=C[D++]+w;D++});let S=0;T.forEach((b,q)=>{i(b,F=>{g[q+w]=F,++S===T.length&&M()})})})}else M()}function M(){o({chars:d,fonts:g})}function _(x,T){for(let C=0;C<T.length;C++){const[w,D=w]=T[C];if(w<=x&&x<=D)return!0}return!1}}}const r_=pr({name:"FontResolver",dependencies:[i_,t_,n_],init(s,e,t){return s(e,t())}});function s_(s,e){const r=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",i=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function a({text:g,lang:v,fonts:m,style:p,weight:M,preResolvedFonts:_,unicodeFontsURL:x},T){const C=({chars:w,fonts:D})=>{let S,b;const q=[];for(let F=0;F<w.length;F++)w[F]!==b?(b=w[F],q.push(S={start:F,end:F,fontObj:D[w[F]]})):S.end=F;T(q)};_?C(_):s(g,C,{lang:v,fonts:m,style:p,weight:M,unicodeFontsURL:x})}function o({text:g="",font:v,lang:m,sdfGlyphSize:p=64,fontSize:M=400,fontWeight:_=1,fontStyle:x="normal",letterSpacing:T=0,lineHeight:C="normal",maxWidth:w=1/0,direction:D,textAlign:S="left",textIndent:b=0,whiteSpace:q="normal",overflowWrap:F="normal",anchorX:G=0,anchorY:P=0,metricsOnly:k=!1,unicodeFontsURL:B,preResolvedFonts:Y=null,includeCaretPositions:ie=!1,chunkedBoundsSize:V=8192,colorRanges:O=null},E){const U=h(),H={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),M=+M,T=+T,w=+w,C=C||"normal",b=+b,a({text:g,lang:m,style:x,weight:_,fonts:typeof v=="string"?[{src:v}]:v,unicodeFontsURL:B,preResolvedFonts:Y},X=>{H.fontLoad=h()-U;const W=isFinite(w);let re=null,K=null,ne=null,ve=null,we=null,he=null,R=null,de=null,J=0,ae=0,$=q!=="nowrap";const Ee=new Map,te=h();let fe=b,xe=0,ee=new f;const Ue=[ee];X.forEach(Z=>{const{fontObj:oe}=Z,{ascender:_e,descender:pe,unitsPerEm:ye,lineGap:Fe,capHeight:Ie,xHeight:ue}=oe;let Ae=Ee.get(oe);if(!Ae){const Ce=M/ye,N=C==="normal"?(_e-pe+Fe)*Ce:C*M,Re=(N-(_e-pe)*Ce)/2,ge=Math.min(N,(_e-pe)*Ce),Q=(_e+pe)/2*Ce+ge/2;Ae={index:Ee.size,src:oe.src,fontObj:oe,fontSizeMult:Ce,unitsPerEm:ye,ascender:_e*Ce,descender:pe*Ce,capHeight:Ie*Ce,xHeight:ue*Ce,lineHeight:N,baseline:-Re-_e*Ce,caretTop:(_e+pe)/2*Ce+ge/2,caretBottom:Q-ge},Ee.set(oe,Ae)}const{fontSizeMult:Pe}=Ae,ze=g.slice(Z.start,Z.end+1);let ke,Te;oe.forEachGlyph(ze,M,T,(Ce,N,Re,ge)=>{N+=xe,ge+=Z.start,ke=N,Te=Ce;const Q=g.charAt(ge),Se=Ce.advanceWidth*Pe,Ne=ee.count;let Oe;if("isEmpty"in Ce||(Ce.isWhitespace=!!Q&&new RegExp(n).test(Q),Ce.canBreakAfter=!!Q&&i.test(Q),Ce.isEmpty=Ce.xMin===Ce.xMax||Ce.yMin===Ce.yMax||r.test(Q)),!Ce.isWhitespace&&!Ce.isEmpty&&ae++,$&&W&&!Ce.isWhitespace&&N+Se+fe>w&&Ne){if(ee.glyphAt(Ne-1).glyphObj.canBreakAfter)Oe=new f,fe=-N;else for(let nt=Ne;nt--;)if(nt===0&&F==="break-word"){Oe=new f,fe=-N;break}else if(ee.glyphAt(nt).glyphObj.canBreakAfter){Oe=ee.splitAt(nt+1);const je=Oe.glyphAt(0).x;fe-=je;for(let $e=Oe.count;$e--;)Oe.glyphAt($e).x-=je;break}Oe&&(ee.isSoftWrapped=!0,ee=Oe,Ue.push(ee),J=w)}let Xe=ee.glyphAt(ee.count);Xe.glyphObj=Ce,Xe.x=N+fe,Xe.y=Re,Xe.width=Se,Xe.charIndex=ge,Xe.fontData=Ae,Q===`
`&&(ee=new f,Ue.push(ee),fe=-(N+Se+T*M)+b)}),xe=ke+Te.advanceWidth*Pe+T*M});let A=0;Ue.forEach(Z=>{let oe=!0;for(let _e=Z.count;_e--;){const pe=Z.glyphAt(_e);oe&&!pe.glyphObj.isWhitespace&&(Z.width=pe.x+pe.width,Z.width>J&&(J=Z.width),oe=!1);let{lineHeight:ye,capHeight:Fe,xHeight:Ie,baseline:ue}=pe.fontData;ye>Z.lineHeight&&(Z.lineHeight=ye);const Ae=ue-Z.baseline;Ae<0&&(Z.baseline+=Ae,Z.cap+=Ae,Z.ex+=Ae),Z.cap=Math.max(Z.cap,Z.baseline+Fe),Z.ex=Math.max(Z.ex,Z.baseline+Ie)}Z.baseline-=A,Z.cap-=A,Z.ex-=A,A+=Z.lineHeight});let y=0,z=0;if(G&&(typeof G=="number"?y=-G:typeof G=="string"&&(y=-J*(G==="left"?0:G==="center"?.5:G==="right"?1:c(G)))),P&&(typeof P=="number"?z=-P:typeof P=="string"&&(z=P==="top"?0:P==="top-baseline"?-Ue[0].baseline:P==="top-cap"?-Ue[0].cap:P==="top-ex"?-Ue[0].ex:P==="middle"?A/2:P==="bottom"?A:P==="bottom-baseline"?Ue[Ue.length-1].baseline:c(P)*A)),!k){const Z=e.getEmbeddingLevels(g,D);re=new Uint16Array(ae),K=new Uint8Array(ae),ne=new Float32Array(ae*2),ve={},R=[1/0,1/0,-1/0,-1/0],de=[],ie&&(he=new Float32Array(g.length*4)),O&&(we=new Uint8Array(ae*3));let oe=0,_e=-1,pe=-1,ye,Fe;if(Ue.forEach((Ie,ue)=>{let{count:Ae,width:Pe}=Ie;if(Ae>0){let ze=0;for(let ge=Ae;ge--&&Ie.glyphAt(ge).glyphObj.isWhitespace;)ze++;let ke=0,Te=0;if(S==="center")ke=(J-Pe)/2;else if(S==="right")ke=J-Pe;else if(S==="justify"&&Ie.isSoftWrapped){let ge=0;for(let Q=Ae-ze;Q--;)Ie.glyphAt(Q).glyphObj.isWhitespace&&ge++;Te=(J-Pe)/ge}if(Te||ke){let ge=0;for(let Q=0;Q<Ae;Q++){let Se=Ie.glyphAt(Q);const Ne=Se.glyphObj;Se.x+=ke+ge,Te!==0&&Ne.isWhitespace&&Q<Ae-ze&&(ge+=Te,Se.width+=Te)}}const Ce=e.getReorderSegments(g,Z,Ie.glyphAt(0).charIndex,Ie.glyphAt(Ie.count-1).charIndex);for(let ge=0;ge<Ce.length;ge++){const[Q,Se]=Ce[ge];let Ne=1/0,Oe=-1/0;for(let Xe=0;Xe<Ae;Xe++)if(Ie.glyphAt(Xe).charIndex>=Q){let nt=Xe,je=Xe;for(;je<Ae;je++){let $e=Ie.glyphAt(je);if($e.charIndex>Se)break;je<Ae-ze&&(Ne=Math.min(Ne,$e.x),Oe=Math.max(Oe,$e.x+$e.width))}for(let $e=nt;$e<je;$e++){const ft=Ie.glyphAt($e);ft.x=Oe-(ft.x+ft.width-Ne)}break}}let N;const Re=ge=>N=ge;for(let ge=0;ge<Ae;ge++){const Q=Ie.glyphAt(ge);N=Q.glyphObj;const Se=N.index,Ne=Z.levels[Q.charIndex]&1;if(Ne){const Oe=e.getMirroredCharacter(g[Q.charIndex]);Oe&&Q.fontData.fontObj.forEachGlyph(Oe,0,0,Re)}if(ie){const{charIndex:Oe,fontData:Xe}=Q,nt=Q.x+y,je=Q.x+Q.width+y;he[Oe*4]=Ne?je:nt,he[Oe*4+1]=Ne?nt:je,he[Oe*4+2]=Ie.baseline+Xe.caretBottom+z,he[Oe*4+3]=Ie.baseline+Xe.caretTop+z;const $e=Oe-_e;$e>1&&u(he,_e,$e),_e=Oe}if(O){const{charIndex:Oe}=Q;for(;Oe>pe;)pe++,O.hasOwnProperty(pe)&&(Fe=O[pe])}if(!N.isWhitespace&&!N.isEmpty){const Oe=oe++,{fontSizeMult:Xe,src:nt,index:je}=Q.fontData,$e=ve[nt]||(ve[nt]={});$e[Se]||($e[Se]={path:N.path,pathBounds:[N.xMin,N.yMin,N.xMax,N.yMax]});const ft=Q.x+y,tn=Q.y+Ie.baseline+z;ne[Oe*2]=ft,ne[Oe*2+1]=tn;const nn=ft+N.xMin*Xe,qt=tn+N.yMin*Xe,_n=ft+N.xMax*Xe,Bt=tn+N.yMax*Xe;nn<R[0]&&(R[0]=nn),qt<R[1]&&(R[1]=qt),_n>R[2]&&(R[2]=_n),Bt>R[3]&&(R[3]=Bt),Oe%V===0&&(ye={start:Oe,end:Oe,rect:[1/0,1/0,-1/0,-1/0]},de.push(ye)),ye.end++;const Mt=ye.rect;if(nn<Mt[0]&&(Mt[0]=nn),qt<Mt[1]&&(Mt[1]=qt),_n>Mt[2]&&(Mt[2]=_n),Bt>Mt[3]&&(Mt[3]=Bt),re[Oe]=Se,K[Oe]=je,O){const xn=Oe*3;we[xn]=Fe>>16&255,we[xn+1]=Fe>>8&255,we[xn+2]=Fe&255}}}}}),he){const Ie=g.length-_e;Ie>1&&u(he,_e,Ie)}}const me=[];Ee.forEach(({index:Z,src:oe,unitsPerEm:_e,ascender:pe,descender:ye,lineHeight:Fe,capHeight:Ie,xHeight:ue})=>{me[Z]={src:oe,unitsPerEm:_e,ascender:pe,descender:ye,lineHeight:Fe,capHeight:Ie,xHeight:ue}}),H.typesetting=h()-te,E({glyphIds:re,glyphFontIndices:K,glyphPositions:ne,glyphData:ve,fontData:me,caretPositions:he,glyphColors:we,chunkedBounds:de,fontSize:M,topBaseline:z+Ue[0].baseline,blockBounds:[y,z-A,y+J,z],visibleBounds:R,timings:H})})}function l(g,v){o({...g,metricsOnly:!0},m=>{const[p,M,_,x]=m.blockBounds;v({width:_-p,height:x-M})})}function c(g){let v=g.match(/^([\d.]+)%$/),m=v?parseFloat(v[1]):NaN;return isNaN(m)?0:m/100}function u(g,v,m){const p=g[v*4],M=g[v*4+1],_=g[v*4+2],x=g[v*4+3],T=(M-p)/m;for(let C=0;C<m;C++){const w=(v+C)*4;g[w]=p+T*C,g[w+1]=p+T*(C+1),g[w+2]=_,g[w+3]=x}}function h(){return(self.performance||Date).now()}function f(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return f.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(g){let v=f.flyweight;return v.data=this.data,v.index=g,v},splitAt(g){let v=new f;return v.data=this.data.splice(g*d.length),v}},f.flyweight=d.reduce((g,v,m,p)=>(Object.defineProperty(g,v,{get(){return this.data[this.index*d.length+m]},set(M){this.data[this.index*d.length+m]=M}}),g),{data:null,index:0}),{typeset:o,measure:l}}const Si=()=>(self.performance||Date).now(),Ea=bh();let xu;function a_(s,e,t,r,n,i,a,o,l,c,u=!0){return u?l_(s,e,t,r,n,i,a,o,l,c).then(null,h=>(xu||(console.warn("WebGL SDF generation failed, falling back to JS",h),xu=!0),Su(s,e,t,r,n,i,a,o,l,c))):Su(s,e,t,r,n,i,a,o,l,c)}const na=[],o_=5;let Jo=0;function Ah(){const s=Si();for(;na.length&&Si()-s<o_;)na.shift()();Jo=na.length?setTimeout(Ah,0):0}const l_=(...s)=>new Promise((e,t)=>{na.push(()=>{const r=Si();try{Ea.webgl.generateIntoCanvas(...s),e({timing:Si()-r})}catch(n){t(n)}}),Jo||(Jo=setTimeout(Ah,0))}),c_=4,u_=2e3,yu={};let h_=0;function Su(s,e,t,r,n,i,a,o,l,c){const u="TroikaTextSDFGenerator_JS_"+h_++%c_;let h=yu[u];return h||(h=yu[u]={workerModule:pr({name:u,workerId:u,dependencies:[bh,Si],init(f,d){const g=f().javascript.generate;return function(...v){const m=d();return{textureData:g(...v),timing:d()-m}}},getTransferables(f){return[f.textureData.buffer]}}),requests:0,idleTimer:null}),h.requests++,clearTimeout(h.idleTimer),h.workerModule(s,e,t,r,n,i).then(({textureData:f,timing:d})=>{const g=Si(),v=new Uint8Array(f.length*4);for(let m=0;m<f.length;m++)v[m*4+c]=f[m];return Ea.webglUtils.renderImageData(a,v,o,l,s,e,1<<3-c),d+=Si()-g,--h.requests===0&&(h.idleTimer=setTimeout(()=>{H0(u)},u_)),{timing:d}})}function f_(s){s._warm||(Ea.webgl.isSupported(s),s._warm=!0)}const d_=Ea.webglUtils.resizeWebGLCanvasWithoutClearing,Xi={defaultFontURL:null,unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},p_=new Je;function Hi(){return(self.performance||Date).now()}const Mu=Object.create(null);function m_(s,e){s=v_({},s);const t=Hi(),{defaultFontURL:r}=Xi,n=[];if(r&&n.push({label:"default",src:Eu(r)}),s.font&&n.push({label:"user",src:Eu(s.font)}),s.font=n,s.text=""+s.text,s.sdfGlyphSize=s.sdfGlyphSize||Xi.sdfGlyphSize,s.unicodeFontsURL=s.unicodeFontsURL||Xi.unicodeFontsURL,s.colorRanges!=null){let f={};for(let d in s.colorRanges)if(s.colorRanges.hasOwnProperty(d)){let g=s.colorRanges[d];typeof g!="number"&&(g=p_.set(g).getHex()),f[d]=g}s.colorRanges=f}Object.freeze(s);const{textureWidth:i,sdfExponent:a}=Xi,{sdfGlyphSize:o}=s,l=i/o*4;let c=Mu[o];if(!c){const f=document.createElement("canvas");f.width=i,f.height=o*256/l,c=Mu[o]={glyphCount:0,sdfGlyphSize:o,sdfCanvas:f,sdfTexture:new Ot(f,void 0,void 0,void 0,Wt,Wt),contextLost:!1,glyphsByFont:new Map},c.sdfTexture.generateMipmaps=!1,g_(c)}const{sdfTexture:u,sdfCanvas:h}=c;x_(s).then(f=>{const{glyphIds:d,glyphFontIndices:g,fontData:v,glyphPositions:m,fontSize:p,timings:M}=f,_=[],x=new Float32Array(d.length*4);let T=0,C=0;const w=Hi(),D=v.map(G=>{let P=c.glyphsByFont.get(G.src);return P||c.glyphsByFont.set(G.src,P=new Map),P});d.forEach((G,P)=>{const k=g[P],{src:B,unitsPerEm:Y}=v[k];let ie=D[k].get(G);if(!ie){const{path:H,pathBounds:X}=f.glyphData[B][G],W=Math.max(X[2]-X[0],X[3]-X[1])/o*(Xi.sdfMargin*o+.5),re=c.glyphCount++,K=[X[0]-W,X[1]-W,X[2]+W,X[3]+W];D[k].set(G,ie={path:H,atlasIndex:re,sdfViewBox:K}),_.push(ie)}const{sdfViewBox:V}=ie,O=m[C++],E=m[C++],U=p/Y;x[T++]=O+V[0]*U,x[T++]=E+V[1]*U,x[T++]=O+V[2]*U,x[T++]=E+V[3]*U,d[P]=ie.atlasIndex}),M.quads=(M.quads||0)+(Hi()-w);const S=Hi();M.sdf={};const b=h.height,q=Math.ceil(c.glyphCount/l),F=Math.pow(2,Math.ceil(Math.log2(q*o)));F>b&&(console.info(`Increasing SDF texture size ${b}->${F}`),d_(h,i,F),u.dispose()),Promise.all(_.map(G=>Ch(G,c,s.gpuAccelerateSDF).then(({timing:P})=>{M.sdf[G.atlasIndex]=P}))).then(()=>{_.length&&!c.contextLost&&(Rh(c),u.needsUpdate=!0),M.sdfTotal=Hi()-S,M.total=Hi()-t,e(Object.freeze({parameters:s,sdfTexture:u,sdfGlyphSize:o,sdfExponent:a,glyphBounds:x,glyphAtlasIndices:d,glyphColors:f.glyphColors,caretPositions:f.caretPositions,chunkedBounds:f.chunkedBounds,ascender:f.ascender,descender:f.descender,lineHeight:f.lineHeight,capHeight:f.capHeight,xHeight:f.xHeight,topBaseline:f.topBaseline,blockBounds:f.blockBounds,visibleBounds:f.visibleBounds,timings:f.timings}))})}),Promise.resolve().then(()=>{c.contextLost||f_(h)})}function Ch({path:s,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:r,sdfCanvas:n,contextLost:i},a){if(i)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:l}=Xi,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),h=u%(o/r)*r,f=Math.floor(u/(o/r))*r,d=e%4;return a_(r,r,s,t,c,l,n,h,f,d,a)}function g_(s){const e=s.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),s.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),s.contextLost=!1;const r=[];s.glyphsByFont.forEach(n=>{n.forEach(i=>{r.push(Ch(i,s,!0))})}),Promise.all(r).then(()=>{Rh(s),s.sdfTexture.needsUpdate=!0})})}function v_(s,e){for(let t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);return s}let Ys;function Eu(s){return Ys||(Ys=typeof document>"u"?{}:document.createElement("a")),Ys.href=s,Ys.href}function Rh(s){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=s,{width:r,height:n}=e,i=s.sdfCanvas.getContext("webgl");let a=t.image.data;(!a||a.length!==r*n*4)&&(a=new Uint8Array(r*n*4),t.image={width:r,height:n,data:a},t.flipY=!1,t.isDataTexture=!0),i.readPixels(0,0,r,n,i.RGBA,i.UNSIGNED_BYTE,a)}}const __=pr({name:"Typesetter",dependencies:[s_,r_,W0],init(s,e,t){return s(e,t())}}),x_=pr({name:"Typesetter",dependencies:[__],init(s){return function(e){return new Promise(t=>{s.typeset(e,t)})}},getTransferables(s){const e=[];for(let t in s)s[t]&&s[t].buffer&&e.push(s[t].buffer);return e}}),Tu={};function y_(s){let e=Tu[s];if(!e){const t=new Kt(1,1,s,s),r=t.clone(),n=t.attributes,i=r.attributes,a=new Xt,o=n.uv.count;for(let l=0;l<o;l++)i.position.array[l*3]*=-1,i.normal.array[l*3+2]*=-1;["position","normal","uv"].forEach(l=>{a.setAttribute(l,new Ut([...n[l].array,...i[l].array],n[l].itemSize))}),a.setIndex([...t.index.array,...r.index.array.map(l=>l+o)]),a.translate(.5,.5,0),e=Tu[s]=a}return e}const S_="aTroikaGlyphBounds",bu="aTroikaGlyphIndex",M_="aTroikaGlyphColor";class E_ extends I0{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new cs,this.boundingBox=new hr}computeBoundingSphere(){}computeBoundingBox(){}setSide(e){const t=this.getIndex().count;this.setDrawRange(e===Nt?t/2:0,e===dn?t:t/2)}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=y_(e);["position","normal","uv"].forEach(r=>{this.attributes[r]=t.attributes[r].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,r,n,i){Mo(this,S_,e,4),Mo(this,bu,t,1),Mo(this,M_,i,3),this._blockBounds=r,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:r}=this;if(t){const{PI:n,floor:i,min:a,max:o,sin:l,cos:c}=Math,u=n/2,h=n*2,f=Math.abs(t),d=e[0]/f,g=e[2]/f,v=i((d+u)/h)!==i((g+u)/h)?-f:a(l(d)*f,l(g)*f),m=i((d-u)/h)!==i((g-u)/h)?f:o(l(d)*f,l(g)*f),p=i((d+n)/h)!==i((g+n)/h)?f*2:o(f-c(d)*f,f-c(g)*f);r.min.set(v,e[1],t<0?-p:0),r.max.set(m,e[3],t<0?0:p)}else r.min.set(e[0],e[1],0),r.max.set(e[2],e[3],0);r.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(bu).count,r=this._chunkedBounds;if(r)for(let n=r.length;n--;){t=r[n].end;let i=r[n].rect;if(i[1]<e.w&&i[3]>e.y&&i[0]<e.z&&i[2]>e.x)break}this.instanceCount=t}}function Mo(s,e,t,r){const n=s.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(s.setAttribute(e,new Xv(t,r)),delete s._maxInstanceCount,s.dispose()):n&&s.deleteAttribute(e)}const T_=`
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
`,b_=`
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
`,w_=`
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
`,A_=`
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
`;function C_(s){const e=jo(s,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new be},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new _t(0,0,0,0)},uTroikaClipRect:{value:new _t(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new be},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Je},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Qe},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:T_,vertexTransform:b_,fragmentDefs:w_,fragmentColorTransform:A_,customRewriter({vertexShader:t,fragmentShader:r}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(r)&&(r=r.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(wh,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:r}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const yl=new st({color:16777215,side:dn,transparent:!0}),wu=8421504,Au=new mt,js=new I,Eo=new I,Br=[],R_=new I,To="+x+y";function Cu(s){return Array.isArray(s)?s[0]:s}let Ph=()=>{const s=new et(new Kt(1,1),yl);return Ph=()=>s,s},Lh=()=>{const s=new et(new Kt(1,1,32,1),yl);return Lh=()=>s,s};const P_={type:"syncstart"},L_={type:"synccomplete"},Uh=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],U_=Uh.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class mr extends et{constructor(){const e=new E_;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=wu,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=To,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(P_),m_({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const r=this._queuedSyncs;r&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{r.forEach(n=>n&&n())})),this.dispatchEvent(L_),e&&e()})))}onBeforeRender(e,t,r,n,i,a){this.sync(),i.isTroikaTextMaterial&&this._prepareForRender(i),i._hadOwnSide=i.hasOwnProperty("side"),this.geometry.setSide(i._actualSide=i.side),i.side=zn}onAfterRender(e,t,r,n,i,a){i._hadOwnSide?i.side=i._actualSide:delete i.side}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=yl.clone());if((!e||e.baseMaterial!==t)&&(e=this._derivedMaterial=C_(t),t.addEventListener("dispose",function r(){t.removeEventListener("dispose",r),e.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let r=e._outlineMtl;return r||(r=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),r.isTextOutlineMaterial=!0,r.depthWrite=!1,r.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),r.dispose()})),[r,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return Cu(this.material).getDepthMaterial()}get customDistanceMaterial(){return Cu(this.material).getDistanceMaterial()}_prepareForRender(e){const t=e.isTextOutlineMaterial,r=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:o,blockBounds:l}=n;r.uTroikaSDFTexture.value=o,r.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),r.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,r.uTroikaSDFExponent.value=n.sdfExponent,r.uTroikaTotalBounds.value.fromArray(l),r.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,u=0,h=0,f,d,g,v=0,m=0;if(t){let{outlineWidth:M,outlineOffsetX:_,outlineOffsetY:x,outlineBlur:T,outlineOpacity:C}=this;c=this._parsePercent(M)||0,u=Math.max(0,this._parsePercent(T)||0),f=C,v=this._parsePercent(_)||0,m=this._parsePercent(x)||0}else h=Math.max(0,this._parsePercent(this.strokeWidth)||0),h&&(g=this.strokeColor,r.uTroikaStrokeColor.value.set(g??wu),d=this.strokeOpacity,d==null&&(d=1)),f=this.fillOpacity;r.uTroikaDistanceOffset.value=c,r.uTroikaPositionOffset.value.set(v,m),r.uTroikaBlurRadius.value=u,r.uTroikaStrokeWidth.value=h,r.uTroikaStrokeOpacity.value=d,r.uTroikaFillOpacity.value=f??1,r.uTroikaCurveRadius.value=this.curveRadius||0;let p=this.clipRect;if(p&&Array.isArray(p)&&p.length===4)r.uTroikaClipRect.value.fromArray(p);else{const M=(this.fontSize||.1)*100;r.uTroikaClipRect.value.set(l[0]-M,l[1]-M,l[2]+M,l[3]+M)}this.geometry.applyClipRect(r.uTroikaClipRect.value)}r.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const i=t?this.outlineColor||0:this.color;if(i==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new Je;(i!==o._input||typeof i=="object")&&o.set(o._input=i)}let a=this.orientation||To;if(a!==e._orientation){let o=r.uTroikaOrient.value;a=a.replace(/[^-+xyz]/g,"");let l=a!==To&&a.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,h,f]=l;js.set(0,0,0)[u]=c==="-"?1:-1,Eo.set(0,0,0)[f]=h==="-"?-1:1,Au.lookAt(R_,js.cross(Eo),Eo),o.setFromMatrix4(Au)}else o.identity();e._orientation=a}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),r=t?parseFloat(t[1]):NaN;e=(isNaN(r)?0:r/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new be){t.copy(e);const r=this.curveRadius;return r&&(t.x=Math.atan2(e.x,Math.abs(r)-Math.abs(e.z))*Math.abs(r)),t}worldPositionToTextCoords(e,t=new be){return js.copy(e),this.localPositionToTextCoords(this.worldToLocal(js),t)}raycast(e,t){const{textRenderInfo:r,curveRadius:n}=this;if(r){const i=r.blockBounds,a=n?Lh():Ph(),o=a.geometry,{position:l,uv:c}=o.attributes;for(let u=0;u<c.count;u++){let h=i[0]+c.getX(u)*(i[2]-i[0]);const f=i[1]+c.getY(u)*(i[3]-i[1]);let d=0;n&&(d=n-Math.cos(h/n)*n,h=Math.sin(h/n)*n),l.setXYZ(u,h,f,d)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,a.matrixWorld=this.matrixWorld,a.material.side=this.material.side,Br.length=0,a.raycast(e,Br);for(let u=0;u<Br.length;u++)Br[u].object=this,t.push(Br[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,U_.forEach(r=>{this[r]=e[r]}),this}clone(){return new this.constructor().copy(this)}}Uh.forEach(s=>{const e="_private_"+s;Object.defineProperty(mr.prototype,s,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});class gr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const D_=new ml(-1,1,1,-1,0,1);class F_ extends Xt{constructor(){super(),this.setAttribute("position",new Ut([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ut([0,2,0,0,2,0],2))}}const I_=new F_;class Sl{constructor(e){this._mesh=new et(I_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,D_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class N_ extends gr{constructor(e,t,r=null,n=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=n,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Je}render(e,t,r){const n=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=n}}const Dh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Fh extends gr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof It?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ar.clone(e.uniforms),this.material=new It({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Sl(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ru extends gr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){const n=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),i.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(n.EQUAL,1,4294967295),i.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),i.buffers.stencil.setLocked(!0)}}class O_ extends gr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ih{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const r=e.getSize(new be);this._width=r.width,this._height=r.height,t=new gn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:On}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Fh(Dh),this.copyPass.material.blending=Nn,this.clock=new Eh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let r=!1;for(let n=0,i=this.passes.length;n<i;n++){const a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),a.needsSwap){if(r){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ru!==void 0&&(a instanceof Ru?r=!0:a instanceof O_&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const r=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(r,n),this.renderTarget2.setSize(r,n);for(let i=0;i<this.passes.length;i++)this.passes[i].setSize(r,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const B_={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Je(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class or extends gr{constructor(e,t,r,n){super(),this.strength=t!==void 0?t:1,this.radius=r,this.threshold=n,this.resolution=e!==void 0?new be(e.x,e.y):new be(256,256),this.clearColor=new Je(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new gn(i,a,{type:On}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new gn(i,a,{type:On});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new gn(i,a,{type:On});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),i=Math.round(i/2),a=Math.round(a/2)}const o=B_;this.highPassUniforms=ar.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new It({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new be(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Dh;this.copyUniforms=ar.clone(u.uniforms),this.blendMaterial=new It({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Ro,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Je,this.oldClearAlpha=1,this.basic=new st,this.fsQuad=new Sl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let r=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(r,n);for(let i=0;i<this.nMips;i++)this.renderTargetsHorizontal[i].setSize(r,n),this.renderTargetsVertical[i].setSize(r,n),this.separableBlurMaterials[i].uniforms.invSize.value=new be(1/r,1/n),r=Math.round(r/2),n=Math.round(n/2)}render(e,t,r,n,i){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),i&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=or.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=or.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,i&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(r),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(e*e))/e);return new It({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new be(.5,.5)},direction:{value:new be(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new It({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}or.BlurDirectionX=new be(1,0);or.BlurDirectionY=new be(0,1);const z_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class k_ extends gr{constructor(){super();const e=z_;this.uniforms=ar.clone(e.uniforms),this.material=new T0({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Sl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},tt.getTransfer(this._outputColorSpace)===ot&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Nu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ou?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ul?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Bu&&(this.material.defines.ACES_FILMIC_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class G_ extends us{constructor(e){super(e)}load(e,t,r,n){const i=this,a=new C0(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){const l=i.parse(JSON.parse(o));t&&t(l)},r,n)}parse(e){return new H_(e)}}class H_{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const r=[],n=V_(e,t,this.data);for(let i=0,a=n.length;i<a;i++)r.push(...n[i].toShapes());return r}}function V_(s,e,t){const r=Array.from(s),n=e/t.resolution,i=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*n,a=[];let o=0,l=0;for(let c=0;c<r.length;c++){const u=r[c];if(u===`
`)o=0,l-=i;else{const h=W_(u,n,o,l,t);o+=h.offsetX,a.push(h.path)}}return a}function W_(s,e,t,r,n){const i=n.glyphs[s]||n.glyphs["?"];if(!i){console.error('THREE.Font: character "'+s+'" does not exists in font family '+n.familyName+".");return}const a=new O0;let o,l,c,u,h,f,d,g;if(i.o){const v=i._cachedOutline||(i._cachedOutline=i.o.split(" "));for(let m=0,p=v.length;m<p;)switch(v[m++]){case"m":o=v[m++]*e+t,l=v[m++]*e+r,a.moveTo(o,l);break;case"l":o=v[m++]*e+t,l=v[m++]*e+r,a.lineTo(o,l);break;case"q":c=v[m++]*e+t,u=v[m++]*e+r,h=v[m++]*e+t,f=v[m++]*e+r,a.quadraticCurveTo(h,f,c,u);break;case"b":c=v[m++]*e+t,u=v[m++]*e+r,h=v[m++]*e+t,f=v[m++]*e+r,d=v[m++]*e+t,g=v[m++]*e+r,a.bezierCurveTo(h,f,d,g,c,u);break}}return{offsetX:i.ha*e,path:a}}class X_ extends xl{constructor(e,t={}){const r=t.font;if(r===void 0)super();else{const n=r.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(n,t)}this.type="TextGeometry"}}let ei=[],ut=[100,100,100,100,100],ca=[!1,!1,!1,!1,!1],bo=[],Zn=0,ss=new Eh,Bn=!1,Kr=65,vr=1,Ta=1,Vi,ua,Wr=[],Ko=0,yn,q_=5,ia=0,as=!1,$i=!1;console.log(window.screen.height,window.screen.width);window.screen.height>window.screen.width?window.screen.height/window.screen.width>1.9&&(Bn=!0):window.screen.width/window.screen.height>1.9&&(Bn=!0);Bn==!0&&(Kr=60,vr=1.8,Ta=.65);const Le=new dh;let Y_=new gt;Le.add(Y_);console.log(Bn);const He=new $t(Kr,window.innerWidth/window.innerHeight,.1,1e3),Nh=new F0(16777215,2.5);Nh.position.set(0,1,1).normalize();Le.add(Nh);const bn=new fh({antialias:!0});bn.setSize(window.innerWidth,window.innerHeight);bn.setPixelRatio(window.devicePixelRatio);document.getElementById("webGL").appendChild(bn.domElement);Le.background=new Je(0);He.position.x=-1.95;He.position.y=2;He.position.z=5;ss.start();ss.startTime;ss.getElapsedTime();new dh;const Oh=new N_(Le,He),hs=new Ih(bn);hs.addPass(Oh);const ba=new or(new be(window.innerWidth,window.innerHeight),1.6,.1,.1);hs.addPass(ba);hs.renderToScreen=!1;const j_=new Fh(new It({uniforms:{baseTexture:{value:null},bloomTexture:{value:hs.renderTarget2.texture}},vertexShader:document.getElementById("vertexshader").textContent,fragmentShader:document.getElementById("fragmentshader").textContent}),"baseTexture"),lr=new Ih(bn);lr.addPass(Oh);lr.addPass(j_);const J_=new k_;lr.addPass(J_);const Tt=1,Zo=new ya;Zo.set(Tt);const Pu=new st({color:0}),Zr={};function K_(s){s.isMesh&&Zo.test(s.layers)===!1&&(Zr[s.uuid]=s.material,s.material=Pu),s.isText&&Zo.test(s.layers)===!1&&(Zr[s.uuid]=s.material,s.material=Pu)}function Z_(s){Zr[s.uuid]&&(s.material=Zr[s.uuid],delete Zr[s.uuid])}ba.strength=.5;ba.radius=.5;ba.threshold=.1;bn.toneMapping=ul;bn.toneMappingExposure=1;bn.outputColorSpace=xt;let Ji=new gt;rs.enabled=!0;let qi=[],Bh,Lt=[];ix();rx();nx();ex();$_();lx();mx();Q_();function Q_(){let s=["O mnie","Programowanie","Wizualizacje","Smart Dom","Kontakt","MENU"];for(let t=0;t<6;t++){const r=new mr;r.name="naviText",r.text=s[t],r.font="./public/fonts/Roboto-Bold.ttf",r.fontSize=.45*(vr*Ta),r.textAlign="justify",r.anchorX="center",r.anchorY="middle",r.letterSpacing=.01,r.material=new st({color:43656}),r.maxWidth=10,Lt[t]=r,Ji.add(Lt[t]);let n=new et(new Kt(3.4,.6,1,1),new st({color:43656,wireframe:!0})),i=new et(new Kt(3.38,.58,1,1),new st({color:0,wireframe:!1}));n.add(i),Lt[t].add(n),n.layers.toggle(Tt),n.position.y-=.5,Lt[t].position.y-=t*.7,Lt[t].layers.toggle(Tt),n.position.setFromMatrixPosition(Lt[t].matrixWorld),n.position.z-=.001,i.position.z+=5e-4}Lt[5].rotation.z=-Math.PI/2,Lt[5].position.z+=.001,Lt[5].position.z+=.001,Lt[5].position.x-=1.41,Lt[5].position.y+=2.1;let e=new et(new Kt(4,3.38,1,1),new st({color:0,wireframe:!1}));e.position.y+=2,Lt[5].add(e),Le.children[0].add(Ji)}function $_(){const s=new gt;Le.children[0].add(s),ua=s;let e=["Pa","Trick","Toys"],t=[];for(let r=0;r<3;r++){let n=e[r],i=!0,a;const o=.1,l=.6,c=3,u=.05,h=.04;new G_().load("./public/fonts/Roboto_Regular.json",function(d){a=d;const g=new X_(n,{font:a,size:l,height:o,curveSegments:c,bevelThickness:u,bevelSize:h,bevelEnabled:i});g.computeBoundingBox();let v;v=new et(g,new Wo({color:16777215})),t[r]=g.boundingBox.max.x-g.boundingBox.min.x,r==1&&(v.material=new Wo({color:52360}),v.layers.toggle(Tt),yn=v,v.position.set(t[0]*2,(g.boundingBox.max.y-g.boundingBox.min.y)/2,0),v.geometry.center(),new I(t[r]/2,(g.boundingBox.max.y-g.boundingBox.min.y)/2,(g.boundingBox.max.z-g.boundingBox.min.z)/2)),r==2&&v.position.set(t[0]+t[1],0,0),s.add(v)})}}let ha=[],fa=[],da=[],pa=[],ma=[];function zr(s,e,t,r,n){const i=new ph({color:4210752});let a=new I,o=new I,l=new I,c=new I,u=new I;t.getWorldPosition(a),r.getWorldPosition(c),Le.children[0].children[0].getWorldPosition(o),o.y+=Le.children[0].children[0].geometry.parameters.height/2+.4+.1*n,l.x=Le.children[0].children[0].position.x+Le.children[0].children[0].geometry.parameters.width/2+.35+.1*n,u.x=Le.children[0].children[0].position.x+Le.children[0].children[0].geometry.parameters.width/2+.2,s.push(new I(a.x,a.y-.24,-5)),s.push(new I(a.x,o.y,-5)),s.push(new I(l.x,o.y,-5)),s.push(new I(l.x,c.y,-5)),s.push(new I(u.x,c.y,-5));const h=new Xt().setFromPoints(s),f=new qv(h,i);for(f.name=e,Le.add(f);ca[n]==!1;)setTimeout(zh(),500)}function ex(){let s=new Tn(11,.4,.001),e=new st({color:39270});new I(0,0,0);const t=new et(s,e);t.layers.toggle(Tt),t.name="naviUp",t.position.x=Le.children[0].children[0].position.x,t.position.z=-5,Le.children[0].add(t),Vi=t;function r(n,i,a,o){const l=new mr;l.name="naviText",l.text=i,l.font="./public/fonts/Roboto-Bold.ttf",l.fontSize=.34*(vr*Ta),l.textAlign="justify",l.letterSpacing=.01,l.material=new st({color:0}),l.maxWidth=10,t.add(l),l.sync(()=>{l.position.set(-(t.geometry.parameters.width*a),t.geometry.parameters.height*o,.001),Le.children[0].children[4].children[2].addEventListener("synccomplete",()=>{function c(){Vi.position.y=Le.children[0].children[0].position.y+Le.children[0].children[0].geometry.parameters.height/2+1.15,n==0&&zr(ha,"NaviUpToAboutMe",l,Le.children[0].children[0],0),n==1&&zr(fa,"NaviUpToDevelop",l,Le.children[0].children[1],1),n==2&&zr(da,"NaviUpToVis",l,Le.children[0].children[2],2),n==3&&zr(pa,"NaviUpToSmart",l,Le.children[0].children[3],3),n==4&&zr(ma,"NaviUpToKont",l,Le.children[0].children[4],4),kh(Le.children[0].children[0],He);const u=new I;Vi.updateMatrixWorld,Vi.getWorldPosition(u),ua.position.set(u.x-Vi.geometry.parameters.width/2+.2,u.y+.5,u.z),Vi.children[n].position.y+=.02,He.position.y=ut[0]+2.4}setTimeout(c,700)})})}r(0,"O mnie",.49,.38),r(1,"Programowanie",.35,.38),r(2,"Wizualizacje",.08,.38),r(3,"SmartDom",-.16,.38),r(4,"Kontakt",-.37,.38)}function tx(s){let e=Le.children[0].children[s],t=new Tn(e.geometry.parameters.width*1.04,.018,.015),r=new st({color:6750156}),n=new I(0,0,0);const i=new et(t,r);i.layers.toggle(Tt),i.name="borderTop",n.y+=e.geometry.parameters.height*.52,i.position.set(n.x,n.y,n.z),Le.children[0].children[s].add(i),n=new I(0,0,0);const a=new et(t,r);a.layers.toggle(Tt),a.name="borderBottom",n.y-=e.geometry.parameters.height*.52,a.position.set(n.x,n.y,n.z),Le.children[0].children[s].add(a),n=new I(0,0,0),t=new Tn(.015,e.geometry.parameters.height*1.04,.018);const o=new et(t,r);o.layers.toggle(Tt),o.name="borderLeft",n.x-=e.geometry.parameters.width*.52,o.position.set(n.x,n.y,n.z),Le.children[0].children[s].add(o),n=new I(0,0,0);const l=new et(t,r);l.layers.toggle(Tt),l.name="borderRight",n.x+=e.geometry.parameters.width*.52,l.position.set(n.x,n.y,n.z),Le.children[0].children[s].add(l)}function nx(){for(let s=0;s<Le.children[0].children.length;s++){let e=new be;e.x=10.5;let t=new Kt,r=new I(-2.2,2.2,-5);Le.children[0].children[s].children[0];let n=Le.children[0].children[s].children[1],i=Le.children[0].children[s].children[2];e.y=3,n.sync(()=>{let a=Le.children[0].children[s].children[1];e.y+=a.geometry.boundingBox.max.y-a.geometry.boundingBox.min.y}),i.sync(()=>{let a=Le.children[0].children[s].children[0],o=Le.children[0].children[s].children[1],l=Le.children[0].children[s].children[2],c=Le.children[0].children[s],u=Le.children[0].children[s-1];e.y+=l.geometry.boundingBox.max.y-l.geometry.boundingBox.min.y,t=new Kt(e.x,e.y+.7),c.geometry=t,s>0&&(r.y=u.position.y-(u.geometry.parameters.height/2+c.geometry.parameters.height/2)-.9),c.position.set(r.x,r.y,r.z),a.position.x=-(e.x*.5)+a.geometry.parameters.width/2+.2,a.position.y=c.geometry.parameters.height/2-a.geometry.parameters.height/2-.15,o.position.x=-(e.x*.5)+.2,o.position.y=c.geometry.parameters.height/2-a.geometry.parameters.height-.3,l.position.x=-(e.x*.5)+.2,l.position.y=c.geometry.parameters.height/2-a.geometry.parameters.height-.8,tx(s),Ko++})}}function ix(){ei=document.getElementsByClassName("article-container")}function rx(){const s=[220,426,406,427,424],e=[221,640,640,640,640];for(let t=0;t<ei.length;t++){let r=0,n=14,i=new I(-2.2,2.2,-5),a=new be(1,1);bo.push(n*r);let o=new Wo({color:0,opacity:1,transparent:!1});const l=new gt(a,o);l.name="elementPlane",t>0&&(i.y=Le.children[0].children[t-1].position.y-(bo[t-1]/2+bo[t]/2)-.45),l.position.set(i.x,i.y,i.z),Le.children[0].add(l),r=ei[t].getElementsByClassName("image")[0].clientWidth/ei[t].getElementsByClassName("image")[0].clientHeight,r=e[t]/s[t],sx(t,ei[t].getElementsByClassName("image")[0].src,r),ax(t),ox(t)}}function sx(s,e,t){let r=new et,n=new et,i=3,a=new st({color:16777215}),o=new Kt;const c=new P0().load(e,function(u){c.colorSpace=xt});a=new st({color:16777215,map:c}),o=new Kt(i*t,i),r=new et(o,a),r.position.z+=.1,o=new Tn(i*t+.07,i+.07,.01),a=new st({color:6750156}),n=new et(o,a),n.position.z-=.01,n.layers.toggle(Tt),r.add(n),Le.children[0].children[s].add(r)}function ax(s){let e=new mr;e.name="titleText",e.text=ei[s].getElementsByTagName("h2")[0].textContent,e.font="./public/fonts/Roboto-Bold.ttf",e.fontSize=.4*vr*Ta,e.textAlign="justify",e.letterSpacing=.1,e.material=new st({color:45943}),e.maxWidth=10,e.layers.toggle(Tt),Le.children[0].children[s].add(e)}function ox(s){let e=new mr;e.name="articleText",e.text=ei[s].getElementsByClassName("elementText")[0].textContent,e.font="./public/fonts/Roboto-Regular.ttf",e.fontSize=.25*vr,e.textAlign="justify",e.letterSpacing=.1,e.lineHeight=1.2,e.material=new st({color:6750156}),e.maxWidth=10,Le.children[0].children[s].add(e)}function lx(){let s=new mr;s.name="footText",s.text="Patryk Jenczyk								 Gorzów Wielkopolski 2023",s.font="./public/fonts/Roboto-Regular.ttf",s.fontSize=.2*vr,s.textAlign="justify",s.letterSpacing=.1,s.lineHeight=1.2,s.material=new st({color:45943}),s.layers.toggle(Tt),s.maxWidth=10,Le.children[0].add(s),qi[2]=s}function cx(s,e){return Math.random()*(e-s)+s}function Lu(s){var e=Math.max(-1,Math.min(1,s.wheelDelta||-s.detail));Zn=e*2}function zh(){He.aspect=window.innerWidth/window.innerHeight,He.updateProjectionMatrix(),bn.setSize(window.innerWidth,window.innerHeight),bn.setPixelRatio(window.devicePixelRatio),lr.setSize(window.innerWidth,window.innerHeight),lr.setPixelRatio(window.devicePixelRatio),kh(Le.children[0].children[0],He);for(let s=0;s<5;s++)for(ca[s]=!1;ca[s]==!1;)He.updateProjectionMatrix(),dx(Le.children[0].children[s],s);He.position.y=ut[0]+3.1}function kh(s,e){let t=new I,r=.5*window.innerWidth,n=.5*window.innerHeight;for(s.updateMatrixWorld(),t.setFromMatrixPosition(s.matrixWorld),t.x-=Le.children[0].children[0].geometry.parameters.width/2,t.project(e),t.x=t.x*r+r,t.y=-(t.y*n)+n;t.x<30;)e.fov+=.01,s.updateMatrixWorld(),t.setFromMatrixPosition(s.matrixWorld),e.updateProjectionMatrix(),t.x-=Le.children[0].children[0].geometry.parameters.width/2,t.project(e),t.x=t.x*r+r,t.y=-(t.y*n)+n;if(window.innerHeight>=700)for(e.fov<Kr&&(e.fov=Kr);t.x>30.01&&e.fov>Kr;)e.fov-=.01,s.updateMatrixWorld(),t.setFromMatrixPosition(s.matrixWorld),e.updateProjectionMatrix(),t.x-=Le.children[0].children[0].geometry.parameters.width/2,t.project(e),t.x=t.x*r+r,t.y=-(t.y*n)+n;if(window.innerHeight<700){let i=30.01;for(Bn==!0&&window.innerWidth>window.innerHeight&&(i=100.01);t.x>i;)e.fov-=.01,s.updateMatrixWorld(),t.setFromMatrixPosition(s.matrixWorld),e.updateProjectionMatrix(),t.x-=Le.children[0].children[0].geometry.parameters.width/2,t.project(e),t.x=t.x*r+r,t.y=-(t.y*n)+n}return{x:t.x,y:t.y}}let Qo=0,$o=0,_r;_r=new et(new ii(.035,3,3,0,3),new st({color:6750156}));_r.name="electron";_r.position.set(-2,-2,7);Le.add(_r);_r.layers.toggle(Tt);let el=0,tl=0,xr;xr=new et(new ii(.035,3,3,0,3),new st({color:6750156}));xr.name="electron";xr.position.set(-2,-2,7);Le.add(xr);xr.layers.toggle(Tt);let nl=0,il=0,yr;yr=new et(new ii(.035,3,3,0,3),new st({color:6750156}));yr.name="electron";yr.position.set(-2,-2,7);Le.add(yr);yr.layers.toggle(Tt);let rl=0,sl=0,Sr;Sr=new et(new ii(.035,3,3,0,3),new st({color:6750156}));Sr.name="electron";Sr.position.set(-2,-2,7);Le.add(Sr);Sr.layers.toggle(Tt);let al=0,ol=0,Mr;Mr=new et(new ii(.035,3,3,0,3),new st({color:6750156}));Mr.name="electron";Mr.position.set(-2,-2,7);Le.add(Mr);Mr.layers.toggle(Tt);let Qt=[!1,!1,!1,!1,!1],ga=[!1,!1,!1,!1,!1],Js=[0,0,0,0,0];function kr(s,e,t,r,n){Qt[s]=!0;var i=new Mn;n==ha&&(t=$o,e=Qo),n==fa&&(t=tl,e=el),n==da&&(t=il,e=nl),n==pa&&(t=sl,e=rl),n==ma&&(t=ol,e=al);const a=11;i=new Mn(n[e],n[e+1]);const o=n[e].distanceTo(n[e+1]);t+=a*En;let l=new I;switch(o>0&&e<5&&(t/o>1&&(e++,t=0,i=new Mn(n[e],n[e+1])),i.at(t/o,l),r.position.z=-5,r.position.x=l.x,r.position.y=l.y),e==4&&(e=0,t=0,Qt[s]=!1,r.position.z=7,ga[s]=!0),n){case ha:$o=t,Qo=e;break;case fa:tl=t,el=e;break;case da:il=t,nl=e;break;case pa:sl=t,rl=e;break;case ma:ol=t,al=e;break}}let Ks=[0,0,0,0,0];function ux(s){rt[0]=new I,rt[1]=new I,rt[2]=new I,rt[3]=new I,rt[4]=new I,rt[0].setFromMatrixPosition(Le.children[0].children[s].children[6].matrixWorld),rt[1].setFromMatrixPosition(Le.children[0].children[s].children[4].matrixWorld),rt[2].setFromMatrixPosition(Le.children[0].children[s].children[5].matrixWorld),rt[3].setFromMatrixPosition(Le.children[0].children[s].children[3].matrixWorld);const e=[];let t=new I(rt[0].x,rt[0].y,rt[0].z),r=new I(rt[0].x,rt[1].y,rt[0].z);e[0]=new Mn(t,r),t=r,r=new I(rt[2].x,rt[1].y,rt[0].z),e[1]=new Mn(t,r),t=r,r=new I(rt[2].x,rt[3].y,rt[0].z),e[2]=new Mn(t,r),t=r,r=new I(rt[0].x,rt[3].y,rt[0].z),e[3]=new Mn(t,r),t=r,r=new I(rt[0].x,rt[0].y,rt[0].z),e[4]=new Mn(t,r),Gr[s]=new I,Ks[s]>=1&&(Js[s]++,Ks[s]=0),Js[s]==5&&(Js[s]=0,vi[s].position.set(0,0,7),ga[s]=!1),ga[s]==!0&&(e[Js[s]].at(Ks[s],Gr[s]),vi[s].position.set(Gr[s].x,Gr[s].y,Gr[s].z),Ks[s]+=En*6)}const vi=[],Gr=[];let rt=[];for(let s=0;s<5;s++)vi[s]=new et(new ii(.08,10,15,0,3.1428),new st({color:6750156})),vi[s].name="bigElectron",vi[s].position.set(-2,-2,7),Le.add(vi[s]),vi[s].layers.toggle(Tt);let lt;const er=new N0;let Ei=new be;document.addEventListener("mousemove",Gh);function Gh(s){Ei.x=s.clientX/window.innerWidth*2-1,Ei.y=-(s.clientY/window.innerHeight)*2+1}let fi=new I,Jn=[],Uu,Hh;function Du(s){Jn[0]=new I(He.position.x,He.position.y,He.position.z),Jn[1]=new I(He.position.x,He.position.y+(ut[s]-He.position.y)/3,He.position.z-10),Jn[2]=new I(He.position.x,(He.position.y+(ut[s]-He.position.y)/3)*2,He.position.z-10),Jn[3]=new I(He.position.x,ut[s],He.position.z),Uu=new gh(Jn[0],Jn[1],Jn[2],Jn[3]);const e=Uu.getPoints(10);for(let t=0;t<11;t++)Wr[t]=new Mn(e[t],e[t+1]);new Mn(e[0],e[3]),Hh=ut[s]}let Wi=0,Kn=0;function hx(s){Kn+=En*8,Kn<1&&(Wr[Wi].at(Kn,fi),os[0]=!0,He.position.set(fi.x,fi.y+.15,fi.z),Wr[Wi].at(Kn,fi),He.lookAt(fi.x,fi.y-(5-He.position.z),-10)),Kn>1&&(Wi++,Kn=0,console.log(Kn,Wr.length,Wi),Wi==Wr.length-1&&(os[0]=!1,Wi=0,He.position.y=Hh+.11,He.position.z=5,He.rotation.x=0,Kn=0))}let Zs=!1,Qs=!1,fx=He.position.y;function dx(s,e){let t=new I;t.setFromMatrixPosition(s.matrixWorld),t.y+=s.geometry.parameters.height/2+.3,t.project(He);let r=window.innerWidth/2,n=window.innerHeight/2;t.x=t.x*r+r,t.y=-(t.y*n)+n,t.y>0&&Qs==!1&&(He.position.y-=.1,He.updateWorldMatrix(),Zs=!0),t.y<0&&Zs==!1&&(He.position.y+=.1,He.updateWorldMatrix(),Qs=!0),(t.y>0&&Qs==!0||t.y<0&&Zs==!0)&&(He.updateWorldMatrix(),ut[e]=He.position.y,ca[e]=!0,Zs=!1,Qs=!1,He.position.y=fx,ia<5&&ia++,ia==5&&console.log(ut[0]))}let os=[!1,0,!1],Qr=new be,Fn=new be,wo=new be;function Vh(s){Bn==!1&&(Ei.x=s.clientX/window.innerWidth*2-1,Ei.y=-(s.clientY/window.innerHeight)*2+1);const e=er.intersectObjects(Le.children[0].children[5].children,!1);if(e.length>0){const r=e[0].object;for(let n=0;n<5;n++)r===Le.children[0].children[5].children[n]&&(Du(n),os=[!0,ut[n],!1])}const t=er.intersectObjects(Le.children[0].children[8].children,!1);if(t.length>0){const r=t[0].object;for(let n=0;n<5;n++)r===Le.children[0].children[8].children[n]&&(Du(n),os=[!0,ut[n],!1]);r===Le.children[0].children[8].children[5]&&(tr==!1?(as=!0,$i=!1):($i=!0,as=!1))}}let Hr=0,tr=!1;function Ao(s){let e=En*8*s;Hr+=En,as==!0&&Lt[0].position.x<-3.5&&(as=!1,e=0,tr=!0),$i==!0&&Lt[0].position.x>0&&($i=!1,e=0,tr=!1,Hr=0),Hr>1.8&&Lt[0].position.x<0&&($i=!0,Hr=0);for(let t=0;t<5;t++)Lt[t].position.x-=e;console.log(Hr)}let px=!0,En=0,Co=0;function mx(){const s=new et(new Tn(.2,.2,.2),new st);Le.add(s),s.position.set(0,0,-5),Bh=s}function Wh(){if(En=ss.getElapsedTime()-En,as==!0&&(Ao(1),tr=!0),$i==!0&&(Ao(-1),tr=!1),tr==!0&&Ao(0),Ko==5&&px==!0){let t=new I;Le.children[0].children[0].getWorldPosition(t),t.x-=Le.children[0].children[0].geometry.parameters.width-Lu,t.y+=Le.children[0].children[0].geometry.parameters.height/2+1.5,Bh.position.set(t.x,t.y,-5)}Bn==!0?(window.addEventListener("touchstart",gx,!1),window.addEventListener("touchmove",vx,!1),window.addEventListener("touchend",_x,!1)):(window.addEventListener("pointerdown",Vh),window.addEventListener("pointermove",Gh)),er.setFromCamera(Ei,He);const s=er.intersectObjects(Le.children[0].children[5].children,!1);s.length>0?lt!=s[0].object&&(lt&&lt.material.color.setHex(lt.currentHex),lt=s[0].object,lt.currentHex=lt.material.color.getHex(),Bn==!1&&lt.material.color.setHex(16777215)):(lt&&lt.material.color.setHex(lt.currentHex),lt=null);const e=er.intersectObjects(Le.children[0].children[8].children,!1);if(e.length>0?lt!=e[0].object&&(lt&&lt.material.color.setHex(lt.currentHex),lt=e[0].object,lt.currentHex=lt.material.color.getHex(),Bn==!1&&lt.material.color.setHex(16777215)):(lt&&lt.material.color.setHex(lt.currentHex),lt=null),window.addEventListener("wheel",Lu,!1),Co+=En,Ko==5&&Co>1){let t=10;t=cx(0,10),t<2&&(Qt[0]=!0),t>2&&t<4&&(Qt[1]=!0),t>4&&t<6&&(Qt[2]=!0),t>6&&t<8&&(Qt[3]=!0),t>8&&t<10&&(Qt[4]=!0),Co=0,t=10}Qt[0]==!0&&kr(0,Qo,$o,_r,ha),Qt[1]==!0&&kr(1,el,tl,xr,fa),Qt[2]==!0&&kr(2,nl,il,yr,da),Qt[3]==!0&&kr(3,rl,sl,Sr,pa),Qt[4]==!0&&kr(4,al,ol,Mr,ma);for(let t=0;t<5;t++)ga[t]==!0&&ux(t);if(os[0]==!0&&hx(),Zn>.1||Zn<-.1){for(let t=0;t<ei.length;t++)He.position.y<=ut[0]+3.1&&He.position.y>=ut[4]&&(He.position.y+=Zn*.045);He.position.y>ut[0]+3.1?(He.position.y=ut[0]+3.099,Zn=0):He.position.y<ut[4]?(He.position.y=ut[4],Zn=0):Zn=Zn*.9}if(Le.traverse(K_),hs.render(),Le.traverse(Z_),lr.render(),ia>=5){window.addEventListener("resize",zh),yn.rotation.y+=En*q_*.2,yn.rotation.x=.1,ua.position.x=3*Math.sin(yn.rotation.y/10)-4.5,ua.rotation.x=.3*Math.sin(yn.rotation.y*1.5)+.25,qi[2].position.setFromMatrixPosition(Le.children[0].children[4].matrixWorld),qi[2].position.x=-7.5,qi[2].position.y-=3.2;let t=new Je;t=qi[2].material.color,t.g=1.4+1.3*Math.sin(yn.rotation.y*2),t.b=1+.9*Math.sin(yn.rotation.y*2),qi[2].material=new st({color:t});for(let r=0;r<5;r++){Le.children[0].children[r].children[0].rotation.y=.09*Math.sin((yn.rotation.y+r*2)*.9)+.05;let n=new Je;n=Le.children[0].children[r].children[1].material.color,n.g=1.5+1.3*Math.sin(yn.rotation.y*5+r),n.b=1.1+.9*Math.sin(yn.rotation.y*5+r),Le.children[0].children[r].children[1].material=new st({color:n}),He.updateMatrixWorld}Ji.position.setFromMatrixPosition(He.matrixWorld),Ji.position.z=-4.9,Ji.position.x=5.55,Ji.updateMatrixWorld}requestAnimationFrame(Wh),En=ss.getElapsedTime()}let ll=0;function gx(s){Qr.x=s.touches[0].pageX/window.innerWidth*2-1,Qr.y=-(s.touches[0].pageY/window.innerHeight)*2+1,Fn.copy(Qr)}function vx(s){s.preventDefault(),s.stopPropagation(),ll++,Fn.x=s.touches[0].pageX/window.innerWidth*2-1,Fn.y=-(s.touches[0].pageY/window.innerHeight)*2+1,ll>4&&(He.position.y<=ut[0]+3.1&&(window.innerWidth>window.innerHeight?He.position.y-=(Fn.y-wo.y)*4:He.position.y-=(Fn.y-wo.y)*14),He.position.y>ut[0]+3.1&&(He.position.y=ut[0]+3.1),He.position.y<ut[4]+.32&&window.innerHeight>window.innerWidth&&(He.position.y=ut[4]+.32),He.position.y<ut[4]-3&&window.innerWidth>window.innerHeight&&(He.position.y=ut[4]-3)),wo.copy(Fn)}function _x(s){let e=!1,t=!1;Fn.x-Qr.x>.01&&(e=!0),Fn.y-Qr.y>.01&&(t=!0),e==!1&&t==!1&&(Ei.copy(Fn),er.setFromCamera(Ei,He),Vh(s)),ll=0}Wh();
