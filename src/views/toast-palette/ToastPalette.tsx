import { Box } from '@mui/material';
import { useState } from 'react';
import { Button, Toast } from 'src/index';
import { fonts } from 'src/shared/fonts';

export function ToastPalette(): JSX.Element {
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
                label="Open Toast"
                variant="contained"
                size="medium"
                onClick={handleClickOpen}
            />

            <Toast
                handleClose={handleClose}
                open={open}
                severity="success"
                text="This is a toast"
            />
        </Box>
    );
}
