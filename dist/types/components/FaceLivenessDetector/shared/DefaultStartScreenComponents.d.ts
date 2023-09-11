import React from 'react';
export interface StartScreenComponents {
    Header?: React.ComponentType;
    PhotosensitiveWarning?: React.ComponentType;
    Instructions?: React.ComponentType;
}
interface DefaultHeaderProps {
    headingText: string;
    bodyText: string;
}
export declare const DefaultHeader: ({ headingText, bodyText, }: DefaultHeaderProps) => JSX.Element;
interface DefaultPhotosensitiveWarningProps {
    headingText: string;
    bodyText: string;
    infoText: string;
}
export declare const DefaultPhotosensitiveWarning: ({ headingText, bodyText, infoText, }: DefaultPhotosensitiveWarningProps) => JSX.Element;
interface DefaultInstructionsProps {
    headingText: string;
    goodFitCaptionText: string;
    goodFitAltText: string;
    tooFarCaptionText: string;
    tooFarAltText: string;
    steps: string[];
}
export declare const DefaultInstructions: ({ headingText, goodFitCaptionText, goodFitAltText, tooFarCaptionText, tooFarAltText, steps, }: DefaultInstructionsProps) => JSX.Element;
export {};
