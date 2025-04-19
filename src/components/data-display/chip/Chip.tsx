import { ReactElement } from 'react';

import Chip, { ChipProps } from '@mui/material/Chip';

export function ChipCustom({ ...props }: ChipProps): ReactElement {
    return <Chip {...props} data-testid="chip" />;
}
