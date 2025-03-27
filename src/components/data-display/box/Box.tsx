import { ReactElement } from 'react';

import Box, { BoxProps } from '@mui/material/Box';

import { Template } from 'components/_template/Template';

export function BoxCustom({ ...props }: BoxProps): ReactElement {
    return (
        <Template>
            <Box {...props} data-testid="box" />
        </Template>
    );
}
