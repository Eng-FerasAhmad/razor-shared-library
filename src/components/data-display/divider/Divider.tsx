import { ReactElement } from 'react';

import { Divider, DividerProps } from '@mui/material';

export function DividerCustom({ ...props }: DividerProps): ReactElement {
    return <Divider {...props} />;
}
