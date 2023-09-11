import * as React from 'react';
import { IlluminationState, FaceMatchState } from '../service';
import { HintDisplayText } from '../displayText';
export declare const selectErrorState: import("../hooks").LivenessSelectorFn<import("../service").LivenessErrorState | undefined>;
export declare const selectFaceMatchState: import("../hooks").LivenessSelectorFn<FaceMatchState | undefined>;
export declare const selectIlluminationState: import("../hooks").LivenessSelectorFn<IlluminationState | undefined>;
export declare const selectIsFaceFarEnoughBeforeRecording: import("../hooks").LivenessSelectorFn<boolean | undefined>;
export declare const selectFaceMatchStateBeforeStart: import("../hooks").LivenessSelectorFn<FaceMatchState | undefined>;
export interface HintProps {
    hintDisplayText: Required<HintDisplayText>;
}
export declare const Hint: React.FC<HintProps>;
