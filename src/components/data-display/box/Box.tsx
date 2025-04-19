import { ReactElement } from 'react';

import Box, { BoxProps } from '@mui/material/Box';

export function BoxCustom({ ...props }: BoxProps): ReactElement {
    return <Box {...props} data-testid="box" />;
}
