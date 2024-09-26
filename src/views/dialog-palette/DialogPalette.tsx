import { Box } from '@mui/material';
import { ReactElement, useState } from 'react';
import { Loading } from 'src/components/loading/Loading';
import { Button, Dialog } from 'src/index';
import { fonts } from 'src/shared/fonts';

export function DialogPalette(): ReactElement {
    const [open, setOpen] = useState(false);
    const [openLoading, setOpenLoading] = useState(false);

    const handleClickOpen = (): void => {
        setOpen(true);
    };

    const handleClickLoading = (): void => {
        setOpenLoading(true);
    };

    const handleClose = (): void => {
        setOpen(false);
        setOpenLoading(false);
    };

    return (
        <Box
            sx={{ margin: 2, width: 300, fontFamily: fonts.primary }}
            data-testid="dialog-palette"
        >
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
                actions={<Button label="Action" variant="contained" />}
            >
                <Box sx={{ width: 300, height: 300 }}>Content 1</Box>
            </Dialog>

            <Button
                label="Loading"
                variant="contained"
                size="small"
                onClick={handleClickLoading}
            />

            <Loading open={openLoading} onClick={handleClose} />
        </Box>
    );
}
