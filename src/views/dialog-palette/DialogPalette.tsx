import { Box } from '@mui/material';
import { useState } from 'react';
import { Button, Dialog } from 'src/index';
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
        <Box sx={{ margin: 2, width: 300, height: 1000,fontFamily: fonts.primary }}>
            <Button
                label="Dialog"
                variant="contained"
                size="small"
                onClick={handleClickOpen}
            />
            <Dialog
                handleClose={handleClose}
                open={open}
                title="Card Title"
                sx={{ fontFamily: fonts.primary }}
                actions={<Button label="Action" />}
                hasCloseIcon={true}
            >
                <Box sx={{ width: 300 }}>Content 1</Box>
            </Dialog>
        </Box>
    );
}
