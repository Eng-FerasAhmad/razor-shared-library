import { ReactElement } from 'react';

import { Divider, DividerProps } from '@mui/material';

import { Template } from 'components/_template/Template';

export function DividerCustom({ ...props }: DividerProps): ReactElement {
    return (
        <Template>
            <Divider {...props} />
        </Template>
    );
}
