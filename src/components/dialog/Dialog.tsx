import { Dialog, DialogProps } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { Template } from 'src/components/_template/Template';
import { CloseIcon } from 'src/index.ts';
import { pixelToRem } from 'shared/common.ts';

interface Props {
    handleClose: () => void;
    title?: string;
    actions?: ReactNode;
    open: boolean;
    headerColor?: string;
    headerFontColor?: string;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
    '& .MuiDialog-paper': {
        maxWidth: 1000,
    },
}));

export function DialogCustom({
    handleClose,
    title,
    actions,
    open,
    headerColor,
    headerFontColor,
    children,
    ...props
}: PropsWithChildren<DialogProps & Props>): ReactElement {
    return (
        <Template>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                {...props}
                data-testid="dialog"
            >
                {title && (
                    <DialogTitle data-testid="dialog-title" id="dialog-title">
                        {title}
                    </DialogTitle>
                )}

                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        fontFamily: 'inherit',
                    }}
                    data-testid="dialog-close-icon"
                >
                    <CloseIcon />
                </IconButton>

                <DialogContent
                    dividers
                    sx={{
                        fontFamily: 'inherit',
                        '&.MuiDialogContent-root': {
                            p: pixelToRem(16, 24),
                            margin: 0,
                        },
                    }}
                    data-testid="dialog-content"
                >
                    {children}
                </DialogContent>

                {actions && (
                    <DialogActions
                        sx={{
                            fontFamily: 'inherit',
                            margin: pixelToRem(16, 24),
                            p: 0,
                            '&.MuiDialogActions-root': {
                                p: 0,
                            },
                        }}
                        data-testid="dialog-action"
                    >
                        {actions}
                    </DialogActions>
                )}
            </BootstrapDialog>
        </Template>
    );
}
