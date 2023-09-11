/// <reference types="react" />
import { FaceMatchState } from '../service';
import { ErrorDisplayText, HintDisplayText, StreamDisplayText } from '../displayText';
import { CheckScreenComponents } from '../shared/FaceLivenessErrorModal';
export declare const selectVideoConstraints: import("../hooks").LivenessSelectorFn<MediaTrackConstraints | undefined>;
export declare const selectVideoStream: import("../hooks").LivenessSelectorFn<MediaStream | undefined>;
export declare const selectFaceMatchPercentage: import("../hooks").LivenessSelectorFn<number | undefined>;
export declare const selectFaceMatchState: import("../hooks").LivenessSelectorFn<FaceMatchState | undefined>;
export interface LivenessCameraModuleProps {
    isMobileScreen: boolean;
    isRecordingStopped: boolean;
    streamDisplayText: Required<StreamDisplayText>;
    hintDisplayText: Required<HintDisplayText>;
    errorDisplayText: Required<ErrorDisplayText>;
    components?: CheckScreenComponents;
    testId?: string;
}
export declare const LivenessCameraModule: (props: LivenessCameraModuleProps) => JSX.Element;
