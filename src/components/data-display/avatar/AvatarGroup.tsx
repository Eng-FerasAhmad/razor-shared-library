import { ReactElement } from 'react';

import { AvatarGroup, AvatarGroupProps } from '@mui/material';

import { Template } from 'components/_template/Template';

export function AvatarGroupCustom({
    ...Props
}: AvatarGroupProps): ReactElement {
    return (
        <Template>
            <AvatarGroup {...Props} />
        </Template>
    );
}
