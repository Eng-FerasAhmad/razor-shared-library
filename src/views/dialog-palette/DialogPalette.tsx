import { Box } from '@mui/material';
import { useState } from 'react';
import { ButtonCustom, DialogCustom } from 'src/index';
import { fonts } from 'src/shared/fonts';

export function DialogPalette(): JSX.Element {
    const [open, setOpen] = useState(false);

    const handleClickOpen = (): void => {
        setOpen(true);
    };

    const handleClose = (): void => {
        setOpen(false);
    };

    return (
        <Box sx={{ margin: 2, width: 300, fontFamily: fonts.primary }}>
            <ButtonCustom
                label="Dialog"
                variant="contained"
                onClick={handleClickOpen}
            />
            <DialogCustom
                handleClose={handleClose}
                open={open}
                title="Card Title"
                sx={{ fontFamily: fonts.primary }}
                actions={<ButtonCustom label="Action" />}
                hasCloseIcon={true}
            >
                <Box sx={{ width: 300 }}>Content 1</Box>
            </DialogCustom>
        </Box>
    );
}
