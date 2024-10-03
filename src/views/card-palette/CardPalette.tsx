import { ReactElement } from 'react';

import { Box } from '@mui/material';

import { ButtonCustom } from 'components/inputs/button/Button';
import { Card } from 'src/index';
import { fontSize } from 'src/shared/fonts';

export function CardPalette(): ReactElement {
    return (
        <Box sx={{ margin: 2, width: 500 }}>
            <Card variant="elevation" elevation={4}>
                <Box sx={{ margin: 2, fontSize: fontSize.font24 }}>
                    Card content
                </Box>
                <Box sx={{ margin: 2, lineHeight: '24px' }}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                </Box>
                <ButtonCustom
                    sx={{ margin: 2 }}
                    label="Submit"
                    variant="contained"
                />
            </Card>
        </Box>
    );
}
