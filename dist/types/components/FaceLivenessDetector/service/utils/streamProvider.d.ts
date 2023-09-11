import { AmazonAIInterpretPredictionsProvider } from '@aws-amplify/predictions';
import { ClientSessionInformationEvent, LivenessResponseStream } from '@aws-sdk/client-rekognitionstreaming';
import { VideoRecorder } from './videoRecorder';
import { AwsCredentialProvider } from '../types';
export interface StartLivenessStreamInput {
    sessionId: string;
}
export interface StartLivenessStreamOutput {
    sessionId: string;
    stream: WebSocket;
}
export interface Credentials {
    accessKeyId: string;
    secretAccessKey: string;
    sessionToken: string;
}
export interface StreamProviderArgs {
    sessionId: string;
    region: string;
    stream: MediaStream;
    videoEl: HTMLVideoElement;
    credentialProvider?: AwsCredentialProvider;
}
export declare const TIME_SLICE = 1000;
export declare class LivenessStreamProvider extends AmazonAIInterpretPredictionsProvider {
    sessionId: string;
    region: string;
    videoRecorder: VideoRecorder;
    responseStream: AsyncIterable<LivenessResponseStream>;
    credentialProvider?: AwsCredentialProvider;
    private _reader;
    private videoEl;
    private _client;
    private _stream;
    private initPromise;
    constructor({ sessionId, region, stream, videoEl, credentialProvider, }: StreamProviderArgs);
    getResponseStream(): Promise<AsyncIterable<LivenessResponseStream>>;
    startRecordingLivenessVideo(): void;
    sendClientInfo(clientInfo: ClientSessionInformationEvent): void;
    stopVideo(): Promise<void>;
    dispatchStopVideoEvent(): void;
    endStreamWithCode(code?: number): Promise<undefined>;
    private init;
    private getAsyncGeneratorFromReadableStream;
    private startLivenessVideoConnection;
}
