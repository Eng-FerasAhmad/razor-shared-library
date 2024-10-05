import { ReactElement } from '../../../../node_modules/react';
export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    children?: React.ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
}
export type IconType = (props: IconBaseProps) => ReactElement;
export interface IconOptions {
    label: string;
    value: string | number;
    icon?: (props: IconBaseProps) => ReactElement;
}
