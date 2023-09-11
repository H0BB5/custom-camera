import React from 'react';
import { FlexProps } from '@aws-amplify/ui-react';
interface StartScreenFigureProps extends FlexProps {
    caption: string;
    variation?: 'defaut' | 'error' | 'success';
}
export declare const StartScreenFigure: React.FC<StartScreenFigureProps>;
export {};
