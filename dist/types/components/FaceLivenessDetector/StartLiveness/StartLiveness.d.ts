/// <reference types="react" />
import { InstructionDisplayText } from '../displayText';
import { StartScreenComponents } from '../shared/DefaultStartScreenComponents';
export interface StartLivenessProps {
    beginLivenessCheck: () => void;
    components?: StartScreenComponents;
    instructionDisplayText: Required<InstructionDisplayText>;
}
export declare function StartLiveness(props: StartLivenessProps): JSX.Element;
