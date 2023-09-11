import * as React from 'react';
import { ViewProps } from '@aws-amplify/ui-react';
interface ToastProps extends ViewProps {
    variation?: 'default' | 'primary' | 'error';
    size?: 'medium' | 'large';
    heading?: string;
}
export declare const Toast: React.FC<ToastProps>;
export {};
