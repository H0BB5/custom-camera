import{__awaiter as e,__asyncGenerator as i,__await as t}from"tslib";import{Credentials as o,getAmplifyUserAgent as n}from"@aws-amplify/core";import{AmazonAIInterpretPredictionsProvider as r}from"@aws-amplify/predictions";import{RekognitionStreamingClient as s,StartFaceLivenessSessionCommand as d}from"@aws-sdk/client-rekognitionstreaming";import{VideoRecorder as a}from"./videoRecorder.mjs";import{getLivenessUserAgent as l}from"../../utils/platform.mjs";import{CustomWebSocketFetchHandler as c}from"./CustomWebSocketFetchHandler.mjs";const h=process.env.NEXT_PUBLIC_STREAMING_API_URL,v=1e3;function m(e){return void 0!==e.Challenge}function u(e){return void 0!==e.code}class f extends r{constructor({sessionId:e,region:i,stream:t,videoEl:o,credentialProvider:n}){super(),this.sessionId=e,this.region=i,this._stream=t,this.videoEl=o,this.videoRecorder=new a(t),this.credentialProvider=n,this.initPromise=this.init()}getResponseStream(){return e(this,void 0,void 0,(function*(){return yield this.initPromise,this.responseStream}))}startRecordingLivenessVideo(){this.videoRecorder.start(1e3)}sendClientInfo(e){this.videoRecorder.dispatch(new MessageEvent("clientSesssionInfo",{data:{clientInfo:e}}))}stopVideo(){return e(this,void 0,void 0,(function*(){yield this.videoRecorder.stop()}))}dispatchStopVideoEvent(){this.videoRecorder.dispatch(new Event("stopVideo"))}endStreamWithCode(i){return e(this,void 0,void 0,(function*(){"recording"===this.videoRecorder.getState()&&(yield this.stopVideo()),this.videoRecorder.dispatch(new MessageEvent("endStreamWithCode",{data:{code:i}}))}))}init(){var i;return e(this,void 0,void 0,(function*(){const e=null!==(i=this.credentialProvider)&&void 0!==i?i:yield o.get();if(!e)throw new Error("No credentials");const t={credentials:e,region:this.region,customUserAgent:`${n()} ${l()}`,requestHandler:new c({connectionTimeout:1e4})};h&&(t.endpointProvider=()=>({url:new URL(h)})),this._client=new s(t),this.responseStream=yield this.startLivenessVideoConnection()}))}getAsyncGeneratorFromReadableStream(e){const o=this;return this._reader=e.getReader(),function(){return i(this,arguments,(function*(){for(;;){const{done:e,value:i}=yield t(o._reader.read());if(e)return yield t(void 0);if("stopVideo"===i)yield yield t({VideoEvent:{VideoChunk:[],TimestampMillis:Date.now()}});else if(void 0!==i.arrayBuffer){const e=yield t(i.arrayBuffer()),o=new Uint8Array(e);o.length>0&&(yield yield t({VideoEvent:{VideoChunk:o,TimestampMillis:Date.now()}}))}else m(i)?yield yield t({ClientSessionInformationEvent:{Challenge:i.Challenge}}):u(i)&&(yield yield t({VideoEvent:{VideoChunk:[],TimestampMillis:{closeCode:i.code}}}))}}))}}startLivenessVideoConnection(){return e(this,void 0,void 0,(function*(){const e=this.getAsyncGeneratorFromReadableStream(this.videoRecorder.videoStream)();return(yield this._client.send(new d({ChallengeVersions:"FaceMovementAndLightChallenge_1.0.0",SessionId:this.sessionId,LivenessRequestStream:e,VideoWidth:this.videoEl.videoWidth.toString(),VideoHeight:this.videoEl.videoHeight.toString()}))).LivenessResponseStream}))}}export{f as LivenessStreamProvider,v as TIME_SLICE};
