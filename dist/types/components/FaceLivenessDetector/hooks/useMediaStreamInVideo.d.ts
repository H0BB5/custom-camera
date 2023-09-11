/// <reference types="react" />
export interface UseMediaStreamInVideo {
    videoRef: React.MutableRefObject<HTMLVideoElement | null>;
    videoHeight: number | undefined;
    videoWidth: number | undefined;
}
export declare function useMediaStreamInVideo(stream: MediaStream): UseMediaStreamInVideo;
