import { ReactElement } from 'react';

import Chip, { ChipProps } from '@mui/material/Chip';

import { Template } from 'components/_template/Template';

export function ChipCustom({ ...props }: ChipProps): ReactElement {
    return (
        <Template>
            <Chip {...props} data-testid="chip" />
        </Template>
    );
}
