/// <reference types="react" />
import { FaceLivenessDetectorProps as FaceLivenessDetectorPropsFromUi } from './service';
import { FaceLivenessDetectorComponents } from './FaceLivenessDetectorCore';
import { LivenessDisplayText } from './displayText';
export interface FaceLivenessDetectorProps extends FaceLivenessDetectorPropsFromUi {
    components?: FaceLivenessDetectorComponents;
    displayText?: LivenessDisplayText;
}
export default function FaceLivenessDetector(props: FaceLivenessDetectorProps): JSX.Element;
