export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    children?: React.ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
}
export type IconType = (props: IconBaseProps) => JSX.Element;

export interface IconOptions {
    label: string;
    value: string | number;
    icon?: (props: IconBaseProps) => JSX.Element;
}
