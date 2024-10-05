import { ReactElement } from '../../../../node_modules/react';
import { SnackbarProps } from '@mui/material/Snackbar';
import { StandardSeverity } from '../../../../../../../../src/shared/types';
interface Props {
    text: string;
    handleClose: () => void;
    open: boolean;
    severity: StandardSeverity;
}
export declare function SnackbarCustom({ text, handleClose, open, severity, ...props }: Props & SnackbarProps): ReactElement;
export {};
