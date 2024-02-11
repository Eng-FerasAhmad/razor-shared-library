import { Box } from '@mui/material';
import { Card } from 'src/index';

export function CardPalette(): JSX.Element {
    return (
        <Box sx={{ margin: 2, width: 300 }}>
            <Card>Card content</Card>
        </Box>
    );
}
