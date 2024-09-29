import { PropsWithChildren, ReactElement } from 'react';

import Chip, { ChipProps } from '@mui/material/Chip';

import { Template } from 'src/components/_template/Template';

export function ChipCustom({
    children,
    ...props
}: PropsWithChildren<ChipProps>): ReactElement {
    return (
        <Template>
            <Chip {...props} data-testid="chip" />
        </Template>
    );
}
