import { ReactElement } from 'react';

import Alert from '@mui/material/Alert';
import Snackbar, { SnackbarProps } from '@mui/material/Snackbar';

import { Template } from '../_template/Template';

import { StandardSeverity } from 'shared/types';

interface Props {
    text: string;
    handleClose: () => void;
    open: boolean;
    severity: StandardSeverity;
}

export function Toast({
    text,
    handleClose,
    open,
    severity,
    ...props
}: Props & SnackbarProps): ReactElement {
    return (
        <Template>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                {...props}
                data-testid="toast"
            >
                <Alert
                    onClose={handleClose}
                    severity={severity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {text}
                </Alert>
            </Snackbar>
        </Template>
    );
}
