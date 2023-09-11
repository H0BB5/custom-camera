/**
 * The options for the video recorder.
 */
export interface VideoRecorderOptions {
}
/**
 * Helper wrapper class over the native MediaRecorder.
 */
export declare class VideoRecorder {
    videoStream: ReadableStream<Blob | string | {
        type: string;
        code: number;
    }>;
    recordingStartApiTimestamp: number | undefined;
    recorderStartTimestamp: number | undefined;
    recorderEndTimestamp: number | undefined;
    firstChunkTimestamp: number | undefined;
    recorderStarted: Promise<void>;
    private _recorder;
    private _stream;
    private _options;
    private _chunks;
    private _recorderStopped;
    constructor(stream: MediaStream, options?: VideoRecorderOptions);
    getState(): string | undefined;
    start(timeSlice?: number): void;
    stop(): Promise<void>;
    pause(): void;
    clearRecordedData(): void;
    dispatch(event: Event): void;
    getVideoChunkSize(): number;
    private _setupCallbacks;
}
