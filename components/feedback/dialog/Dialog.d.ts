import { PropsWithChildren, ReactElement, ReactNode } from '../../../../node_modules/react';
import { DialogProps } from '@mui/material/Dialog';
interface Props {
    handleClose: () => void;
    title?: string;
    actions?: ReactNode;
    open: boolean;
    headerColor?: string;
    headerFontColor?: string;
}
export declare function DialogCustom({ handleClose, title, actions, open, headerColor, headerFontColor, children, ...props }: PropsWithChildren<DialogProps & Props>): ReactElement;
export {};
