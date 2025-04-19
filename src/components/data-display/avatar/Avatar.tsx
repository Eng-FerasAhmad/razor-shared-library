import { ReactElement } from 'react';

import { Avatar, AvatarProps } from '@mui/material';

export function AvatarCustom({ ...Props }: AvatarProps): ReactElement {
    return <Avatar {...Props} />;
}
