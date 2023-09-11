import{__awaiter as t}from"tslib";import{FaceMatchState as e,IlluminationState as o}from"../types/liveness.mjs";import{LivenessErrorState as n}from"../types/error.mjs";import{FACE_DISTANCE_THRESHOLD as i,REDUCED_THRESHOLD_MOBILE as r,REDUCED_THRESHOLD as a}from"./constants.mjs";function h(t,e,o){return t*(o-e)+e}function l(t){const e=t.flippedCenterX-t.width/2,o=t.flippedCenterX+t.width/2,n=t.centerY-t.height/2,i=t.centerY+t.height/2;return{ovalBoundingBox:{left:e,top:n,right:o,bottom:i},minOvalX:e,maxOvalX:o,minOvalY:n,maxOvalY:i}}function c(t,e){const o=Math.max(t.left,e.left),n=Math.max(t.top,e.top),i=Math.min(t.right,e.right),r=Math.min(t.bottom,e.bottom),a=Math.abs(Math.max(0,i-o)*Math.max(0,r-n));if(0===a)return 0;return a/(Math.abs((t.right-t.left)*(t.bottom-t.top))+Math.abs((e.right-e.left)*(e.bottom-e.top))-a)}function s({sessionInformation:t,videoWidth:e}){var o,n;const i=null===(n=null===(o=null==t?void 0:t.Challenge)||void 0===o?void 0:o.FaceMovementAndLightChallenge)||void 0===n?void 0:n.OvalParameters;if(!(i&&i.CenterX&&i.CenterY&&i.Width&&i.Height))throw new Error("Oval parameters not returned from session information.");return{flippedCenterX:e-i.CenterX,centerX:i.CenterX,centerY:i.CenterY,width:i.Width,height:i.Height}}function d({width:t,height:e,widthSeed:o=1,centerXSeed:n=.5,centerYSeed:i=.5}){const r=e;let a=t;const l=.8*o,c=Math.floor(7*t/16),s=Math.floor(9*t/16),d=Math.floor(7*e/16),f=Math.floor(9*e/16),g=h(n,c,s),u=h(i,d,f);t>=e&&(a=3/4*r);const v=l*a,C=1.618*v;return{flippedCenterX:Math.floor(a-g),centerX:Math.floor(g),centerY:Math.floor(u),width:Math.floor(v),height:Math.floor(C)}}function f({canvas:t,oval:e,scaleFactor:o,videoEl:n}){const{flippedCenterX:i,centerY:r,width:a,height:h}=e,{width:l,height:c}=t.getBoundingClientRect(),s=t.getContext("2d");if(!s)throw new Error("Cannot find Canvas.");{s.clearRect(0,0,l,c),s.fillStyle="rgba(255, 255, 255, 1.0)",s.fillRect(0,0,l,c);const t={width:n.videoWidth,height:n.videoHeight},e={x:(l-t.width*o)/2,y:(c-t.height*o)/2};s.setTransform(o,0,0,o,e.x,e.y),s.beginPath(),s.ellipse(i,r,a/2,h/2,0,0,2*Math.PI),s.strokeStyle="#AEB3B7",s.lineWidth=3,s.stroke(),s.clip(),s.setTransform(1,0,0,1,0,0),s.clearRect(0,0,l,c)}}function g(t,o,n,i){var r,a;let h;const s=null===(a=null===(r=null==i?void 0:i.Challenge)||void 0===r?void 0:r.FaceMovementAndLightChallenge)||void 0===a?void 0:a.ChallengeConfig;if(!(s&&s.OvalIouThreshold&&s.OvalIouHeightThreshold&&s.OvalIouWidthThreshold&&s.FaceIouHeightThreshold&&s.FaceIouWidthThreshold))throw new Error("Challenge information not returned from session information.");const{OvalIouThreshold:d,OvalIouHeightThreshold:f,OvalIouWidthThreshold:g,FaceIouHeightThreshold:u,FaceIouWidthThreshold:C}=s,p=v(t,o),m=p.left,E=p.right,R=p.top,M=p.bottom,{ovalBoundingBox:w,minOvalX:O,minOvalY:T,maxOvalX:A,maxOvalY:I}=l(o),x=c(p,w),b=d,F=o.width*g,D=o.height*f,_=o.width*C,S=o.height*u,y=100*Math.max(Math.min(1,.75*(x-n)/(b-n)+.25),0);return h=x>b&&Math.abs(O-m)<F&&Math.abs(A-E)<F&&Math.abs(I-M)<D?e.MATCHED:T-R>S||M-I>S||O-m>_&&E-A>_?e.TOO_CLOSE:e.TOO_FAR,{faceMatchState:h,faceMatchPercentage:y}}function u(t){const{leftEye:e,rightEye:o,mouth:n}=t,i=[];i[0]=(e[0]+o[0])/2,i[1]=(e[1]+o[1])/2;return{pupilDistance:Math.sqrt(Math.pow(e[0]-o[0],2)+Math.pow(e[1]-o[1],2)),faceHeight:Math.sqrt(Math.pow(i[0]-n[0],2)+Math.pow(i[1]-n[1],2))}}function v(t,e){const{leftEye:o,rightEye:n,nose:i}=t,{height:r,centerY:a}=e,h=a-r/2,l=[];l[0]=(o[0]+n[0])/2,l[1]=(o[1]+n[1])/2;const{pupilDistance:c,faceHeight:s}=u(t),d=(2*c+1.8*s)/2,f=1.618*d;let g,v;l[1]<=(h+r)/2?(g=(l[0]+i[0])/2,v=(l[1]+i[1])/2):(g=l[0],v=l[1]);const C=g-d/2,p=v-f/2;return{left:C,top:p,right:C+d,bottom:p+f}}function C(t){const e=document.createElement("canvas");e.width=t.videoWidth,e.height=t.videoHeight;const n=e.getContext("2d");if(n){n.drawImage(t,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height).data,r=8,a=new Array(r).fill(0);for(let t=0;t<i.length;t++){a[Math.round(.2126*i[t++]+.7152*i[t++]+.0722*i[t++])%32]++}let h=-1,l=0;for(let t=0;t<r;t++)a[t]>l&&(l=a[t],h=t);return e.remove(),0===h?o.DARK:h===r?o.BRIGHT:o.NORMAL}throw new Error("Cannot find Video Element.")}function p(t){return t.label.toLowerCase().includes("virtual")}n.RUNTIME_ERROR,n.SERVER_ERROR,n.TIMEOUT,n.FACE_DISTANCE_ERROR,n.MULTIPLE_FACES_ERROR,n.CAMERA_FRAMERATE_ERROR,n.CAMERA_ACCESS_ERROR,n.MOBILE_LANDSCAPE_ERROR,n.FRESHNESS_TIMEOUT;function m({ctx:t,prevColor:e,nextColor:o,fraction:n}){const i=t.canvas.width,r=t.canvas.height;t.fillStyle=o,t.fillRect(0,0,i,r*n),1!==n&&(t.fillStyle=e,t.fillRect(0,r*n,i,r*(1-n)))}function E({overlayCanvas:t,prevColor:e,nextColor:o,videoEl:n,ovalDetails:i,heightFraction:r,scaleFactor:a}){const{x:h,y:l}=n.getBoundingClientRect(),{flippedCenterX:c,centerY:s,width:d,height:f}=i,g=c*a+h,u=s*a+l,v=t.width,C=t.height,p=t.getContext("2d");if(!p)throw new Error("Cannot find Overlay Canvas.");p.canvas.width=window.innerWidth,p.canvas.height=window.innerHeight,p.clearRect(0,0,v,C),m({ctx:p,prevColor:e,nextColor:o,fraction:r}),p.save(),p.beginPath(),p.rect(0,0,v,C),p.clip(),p.clearRect(0,0,v,C),p.globalAlpha=.9,m({ctx:p,prevColor:e,nextColor:o,fraction:r}),p.beginPath(),p.ellipse(g,u,d*a/2,f*a/2,0,0,2*Math.PI),p.strokeStyle="white",p.lineWidth=8,p.stroke(),p.clip(),p.clearRect(0,0,v,C),p.globalAlpha=.75,m({ctx:p,prevColor:e,nextColor:o,fraction:r}),p.restore()}const R=t=>!!t;function M(t){return(t.Challenge.FaceMovementAndLightChallenge.ColorSequences||[]).map((({FreshnessColor:t,DownscrollDuration:e,FlatDisplayDuration:o})=>{const n=t.RGB,i=`rgb(${n[0]},${n[1]},${n[2]})`;return void 0!==i&&void 0!==e&&void 0!==o?{color:i,downscrollDuration:e,flatDisplayDuration:o}:void 0})).filter(R)}function w(t){return t.slice(t.indexOf("(")+1,t.indexOf(")")).split(",").map((t=>parseInt(t)))}function O(o,n){return t(this,void 0,void 0,(function*(){let t;switch((yield o.detectFaces(n)).length){case 0:t=e.CANT_IDENTIFY;break;case 1:t=e.FACE_IDENTIFIED;break;default:t=e.TOO_MANY}return t}))}function T({faceDetector:e,videoEl:o,ovalDetails:h,reduceThreshold:l=!1,isMobile:c=!1}){return t(this,void 0,void 0,(function*(){const t=yield e.detectFaces(o);let s,d,f=!1;switch(t.length){case 0:d=n.FACE_DISTANCE_ERROR;break;case 1:{s=t[0];const e=h.width,{pupilDistance:o,faceHeight:g}=u(s),v=2;e&&(f=(v*o+1.8*g)/2/v/e<(l?c?r:a:i),f||(d=n.FACE_DISTANCE_ERROR));break}default:d=n.MULTIPLE_FACES_ERROR}return{isDistanceBelowThreshold:f,error:d}}))}function A({deviceHeight:t,deviceWidth:e,height:o,width:n,top:i,left:r}){return{Height:o/t,Width:n/e,Top:i/t,Left:r/e}}export{f as drawLivenessOvalInCanvas,C as estimateIllumination,E as fillOverlayCanvasFractional,v as generateBboxFromLandmarks,A as getBoundingBox,M as getColorsSequencesFromSessionInformation,O as getFaceMatchState,g as getFaceMatchStateInLivenessOval,c as getIntersectionOverUnion,l as getOvalBoundingBox,s as getOvalDetailsFromSessionInformation,w as getRGBArrayFromColorString,d as getStaticLivenessOvalDetails,p as isCameraDeviceVirtual,R as isClientFreshnessColorSequence,T as isFaceDistanceBelowThreshold};
