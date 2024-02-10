import { Box } from '@mui/material';
import { ButtonCustom } from 'src/index';
import { fonts } from 'src/shared/fonts';

export default function ButtonPalette(): JSX.Element {
    return (
        <Box sx={{ fontFamily: fonts.primary }} data-testid="button-palette">
            <ButtonCustom
                label="Primary"
                variant="contained"
                size="large"
                color="primary"
            />
        </Box>
    );
}
