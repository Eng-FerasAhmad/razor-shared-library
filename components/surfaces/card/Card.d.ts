import { PropsWithChildren, ReactElement } from '../../../../node_modules/react';
import { CardProps } from '@mui/material/Card';
interface Props extends CardProps {
    width: number;
    height: number;
    actionButtonLabel?: string;
    actionButton?: () => void;
}
export declare function CardCustom({ width, height, actionButton, actionButtonLabel, children, ...props }: PropsWithChildren<Props>): ReactElement;
export {};
