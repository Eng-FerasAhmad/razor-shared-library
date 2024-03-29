import { Dialog, DialogProps } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { PropsWithChildren, ReactNode } from 'react';
import { Template } from 'src/components/_template/Template';
import { color } from 'src/shared/color';

interface Props {
    handleClose: () => void;
    title?: string;
    actions?: ReactNode;
    closeIcon?: ReactNode;
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
}));

export function DialogCustom({
    handleClose,
    title,
    actions,
    closeIcon,
    open,
    headerColor,
    headerFontColor,
    children,
    ...props
}: PropsWithChildren<DialogProps & Props>): JSX.Element {
    return (
        <Template>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                {...props}
                data-testid="dialog"
                sx={{}}
            >
                {title && (
                    <DialogTitle
                        sx={{
                            m: 0,
                            p: 2,
                            backgroundColor: headerColor || color.light,
                            color: headerFontColor || color.dark,
                        }}
                        id="customized-dialog-title"
                    >
                        {title}
                    </DialogTitle>
                )}

                {closeIcon && (
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            fontFamily: 'inherit',
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        {closeIcon}
                    </IconButton>
                )}

                <DialogContent
                    dividers
                    sx={{
                        fontFamily: 'inherit',
                    }}
                >
                    {children}
                </DialogContent>

                {actions && (
                    <DialogActions
                        sx={{
                            fontFamily: 'inherit',
                        }}
                    >
                        {actions}
                    </DialogActions>
                )}
            </BootstrapDialog>
        </Template>
    );
}
