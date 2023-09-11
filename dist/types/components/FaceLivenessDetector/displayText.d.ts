export type HintDisplayText = {
    hintMoveFaceFrontOfCameraText?: string;
    hintTooManyFacesText?: string;
    hintFaceDetectedText?: string;
    hintCanNotIdentifyText?: string;
    hintTooCloseText?: string;
    hintTooFarText?: string;
    /** @deprecated `hintHoldFacePositionCountdownText` is no longer in use and will be removed in a future major version release. */
    hintHoldFacePositionCountdownText?: string;
    hintConnectingText?: string;
    hintVerifyingText?: string;
    hintIlluminationTooBrightText?: string;
    hintIlluminationTooDarkText?: string;
    hintIlluminationNormalText?: string;
    hintHoldFaceForFreshnessText?: string;
};
export type CameraDisplayText = {
    cameraMinSpecificationsHeadingText?: string;
    cameraMinSpecificationsMessageText?: string;
    cameraNotFoundHeadingText?: string;
    cameraNotFoundMessageText?: string;
    retryCameraPermissionsText?: string;
};
export type InstructionDisplayText = {
    instructionsHeaderHeadingText?: string;
    instructionsHeaderBodyText?: string;
    instructionsBeginCheckText?: string;
    photosensitivyWarningHeadingText?: string;
    photosensitivyWarningBodyText?: string;
    photosensitivyWarningInfoText?: string;
    instructionListHeadingText?: string;
    goodFitCaptionText?: string;
    goodFitAltText?: string;
    tooFarCaptionText?: string;
    tooFarAltText?: string;
    instructionListStepOneText?: string;
    instructionListStepTwoText?: string;
    instructionListStepThreeText?: string;
    instructionListStepFourText?: string;
};
export type StreamDisplayText = {
    recordingIndicatorText?: string;
    cancelLivenessCheckText?: string;
};
export declare const defaultErrorDisplayText: {
    timeoutHeaderText: string;
    timeoutMessageText: string;
    faceDistanceHeaderText: string;
    faceDistanceMessageText: string;
    multipleFacesHeaderText: string;
    multipleFacesMessageText: string;
    clientHeaderText: string;
    clientMessageText: string;
    serverHeaderText: string;
    serverMessageText: string;
    landscapeHeaderText: string;
    landscapeMessageText: string;
    portraitMessageText: string;
    tryAgainText: string;
};
export type ErrorDisplayTextFoo = typeof defaultErrorDisplayText;
export type ErrorDisplayText = Partial<ErrorDisplayTextFoo>;
export declare const defaultLivenessDisplayText: Required<LivenessDisplayText>;
export interface LivenessDisplayText extends HintDisplayText, CameraDisplayText, InstructionDisplayText, ErrorDisplayText, StreamDisplayText {
}
