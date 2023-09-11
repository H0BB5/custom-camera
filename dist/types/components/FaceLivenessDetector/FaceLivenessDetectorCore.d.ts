/// <reference types="react" />
import { FaceLivenessDetectorCoreProps as FaceLivenessDetectorPropsFromUi } from './service';
import { StartScreenComponents } from './shared/DefaultStartScreenComponents';
import { LivenessDisplayText } from './displayText';
import { CheckScreenComponents } from './shared/FaceLivenessErrorModal';
export type FaceLivenessDetectorComponents = StartScreenComponents & CheckScreenComponents;
export interface FaceLivenessDetectorCoreProps extends FaceLivenessDetectorPropsFromUi {
    components?: FaceLivenessDetectorComponents;
    displayText?: LivenessDisplayText;
}
export default function FaceLivenessDetectorCore(props: FaceLivenessDetectorCoreProps): JSX.Element;
