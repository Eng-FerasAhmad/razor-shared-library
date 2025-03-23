import { ReactElement, MouseEvent } from 'react';

import { Avatar, Box } from '@mui/material';

type Props = {
    onClick: (e: MouseEvent<HTMLElement>) => void;
    avatarSrc?: string;
};

export default function AvatarTrigger({
    onClick,
    avatarSrc,
}: Props): ReactElement {
    return (
        <Box onClick={onClick} sx={{ cursor: 'pointer' }}>
            <Avatar src={avatarSrc} sx={{ width: 35, height: 35 }} />
        </Box>
    );
}
