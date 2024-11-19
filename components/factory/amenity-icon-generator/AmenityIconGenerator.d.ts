import { ReactElement } from '../../../../node_modules/react';
interface Props {
    iconName: string;
    size?: 'small' | 'medium' | 'large';
    color?: 'inherit' | 'primary' | 'secondary' | 'action' | 'error' | 'disabled';
}
export declare function AmenityIconGenerator({ iconName, size, color, }: Props): ReactElement | null;
export {};
