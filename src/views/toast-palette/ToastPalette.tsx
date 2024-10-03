import { useState, ReactElement } from 'react';

import { Box } from '@mui/material';

import { Button, Snackbar } from 'src/index';
import { fonts } from 'src/shared/fonts';

export function ToastPalette(): ReactElement {
    const [open, setOpen] = useState(false);

    const handleClickOpen = (): void => {
        setOpen(true);
    };

    const handleClose = (): void => {
        setOpen(false);
    };

    return (
        <Box
            sx={{ margin: 2, width: 300, fontFamily: fonts.primary }}
            data-testid="dialog-palette"
        >
            <Button
                label="Open Snackbar"
                variant="contained"
                size="medium"
                onClick={handleClickOpen}
            />

            <Snackbar
                handleClose={handleClose}
                open={open}
                severity="success"
                text="This is a toast"
            />
        </Box>
    );
}
