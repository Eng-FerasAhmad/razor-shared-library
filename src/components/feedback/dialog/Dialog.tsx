import { PropsWithChildren, ReactElement, ReactNode, useState } from 'react';

import { DialogProps } from '@mui/material/Dialog';

import { Template } from 'components/_template/Template';
import { CloseIcon } from 'src/index';
import {
    BootstrapDialog,
    StyledDialogActions,
    StyledDialogContent,
    StyledDialogTitle,
    StyledIconButton,
} from 'components/feedback/dialog/styles';

interface Props {
    handleClose: () => void;
    title?: string;
    actions?: ReactNode;
    open: boolean;
    headerColor?: string;
    headerFontColor?: string;
}

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
    const [animate, setAnimate] = useState(false);

    const handleBackdropClick = (
        _event: unknown,
        reason: 'backdropClick' | 'escapeKeyDown'
    ) => {
        if (reason === 'backdropClick') {
            setAnimate(true);
            setTimeout(() => setAnimate(false), 300);
        }
    };

    return (
        <Template>
            <BootstrapDialog
                aria-labelledby="customized-dialog-title"
                open={open}
                onClose={handleBackdropClick}
                animate={animate}
                {...props}
                data-testid="dialog"
            >
                {title && (
                    <StyledDialogTitle
                        data-testid="dialog-title"
                        id="dialog-title"
                        headerColor={headerColor}
                        headerFontColor={headerFontColor}
                    >
                        {title}
                    </StyledDialogTitle>
                )}

                <StyledIconButton
                    aria-label="close"
                    onClick={handleClose}
                    data-testid="dialog-close-icon"
                >
                    <CloseIcon />
                </StyledIconButton>

                <StyledDialogContent dividers data-testid="dialog-content">
                    {children}
                </StyledDialogContent>

                {actions && (
                    <StyledDialogActions data-testid="dialog-action">
                        {actions}
                    </StyledDialogActions>
                )}
            </BootstrapDialog>
        </Template>
    );
}
