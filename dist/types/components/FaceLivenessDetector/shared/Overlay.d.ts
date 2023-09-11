import * as React from 'react';
import { FlexProps } from '@aws-amplify/ui-react';
interface AnchorOrigin {
    horizontal: 'start' | 'center' | 'end';
    vertical: 'start' | 'center' | 'end' | 'space-between';
}
interface OverlayProps extends FlexProps {
    anchorOrigin?: AnchorOrigin;
}
export declare const Overlay: React.FC<OverlayProps>;
export {};
