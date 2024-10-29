import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import { pixelToRem } from 'shared/common';

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
    '& .MuiDialog-paper': {
        maxWidth: 1000,
        borderRadius: theme.shape.borderRadius,
    },
}));

export const StyledDialogTitle = styled(DialogTitle, {
    shouldForwardProp: (prop) =>
        prop !== 'headerColor' && prop !== 'headerFontColor',
})<{
    headerColor?: string;
    headerFontColor?: string;
}>`
    background-color: ${({ headerColor }) => headerColor || 'transparent'};
    color: ${({ headerFontColor }) => headerFontColor || 'inherit'};
    padding: ${pixelToRem(16)};
    font-family: inherit;
    font-size: 1.25rem;
`;

export const StyledIconButton = styled(IconButton)`
    position: absolute;
    right: 8px;
    top: 8px;
    font-family: inherit;
`;

export const StyledDialogContent = styled(DialogContent)`
    font-family: inherit;
    padding: ${pixelToRem(16, 24)};
    margin: 0;
`;

export const StyledDialogActions = styled(DialogActions)`
    font-family: inherit;
    margin: ${pixelToRem(16, 24)};
    padding: 0;
`;
