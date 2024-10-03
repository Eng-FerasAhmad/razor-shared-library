import { ReactElement } from 'react';

import { Avatar, AvatarProps } from '@mui/material';

import { Template } from 'components/_template/Template';

export function AvatarCustom({ ...Props }: AvatarProps): ReactElement {
    return (
        <Template>
            <Avatar {...Props} />
        </Template>
    );
}
