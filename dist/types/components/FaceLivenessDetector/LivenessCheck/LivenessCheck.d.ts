import * as React from 'react';
import { HintDisplayText, CameraDisplayText, StreamDisplayText, ErrorDisplayText } from '../displayText';
import { CheckScreenComponents } from '../shared/FaceLivenessErrorModal';
interface LivenessCheckProps {
    hintDisplayText: Required<HintDisplayText>;
    cameraDisplayText: Required<CameraDisplayText>;
    streamDisplayText: Required<StreamDisplayText>;
    errorDisplayText: Required<ErrorDisplayText>;
    components?: CheckScreenComponents;
}
export declare const LivenessCheck: React.FC<LivenessCheckProps>;
export {};
