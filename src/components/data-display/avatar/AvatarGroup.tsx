import { ReactElement } from 'react';

import { AvatarGroup, AvatarGroupProps } from '@mui/material';

export function AvatarGroupCustom({
    ...Props
}: AvatarGroupProps): ReactElement {
    return <AvatarGroup {...Props} />;
}
