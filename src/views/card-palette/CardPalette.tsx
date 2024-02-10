import { Box } from '@mui/material';
import { CardCustom } from 'src/index';

export function CardPalette(): JSX.Element {
    return (
        <Box sx={{ margin: 2, width: 300 }}>
            <CardCustom>Card content</CardCustom>
        </Box>
    );
}
