import { LivenessEvent } from '../types';
export declare const MIN_FACE_MATCH_TIME = 500;
export declare const livenessMachine: import("xstate").StateMachine<Partial<import("../types").HydratedLivenessContext>, any, LivenessEvent, {
    value: any;
    context: Partial<import("../types").HydratedLivenessContext>;
}, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, LivenessEvent, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
