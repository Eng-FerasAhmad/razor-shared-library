import { ReactElement, useState, MouseEvent } from 'react';

import { Box, ClickAwayListener } from '@mui/material';

import AvatarTrigger from './AvatarTrigger';
import PopperMenu from './PopperMenu';
import type { MenuGroup } from './types';

type Props = {
    menuItems: MenuGroup[];
    avatarSrc?: string;
};

export function AuthAvatar({ menuItems, avatarSrc }: Props): ReactElement {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleToggle = (event: MouseEvent<HTMLElement>) =>
        setAnchorEl(anchorEl ? null : event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <ClickAwayListener onClickAway={handleClose}>
            <Box>
                <AvatarTrigger avatarSrc={avatarSrc} onClick={handleToggle} />
                <PopperMenu
                    open={open}
                    anchorEl={anchorEl}
                    menuItems={menuItems.map((group) =>
                        group.map((item) => ({
                            ...item,
                            action: () => {
                                item.action();
                                handleClose();
                            },
                        }))
                    )}
                />
            </Box>
        </ClickAwayListener>
    );
}
