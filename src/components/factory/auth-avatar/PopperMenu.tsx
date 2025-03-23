import {
    Fade,
    Popper,
    MenuList,
    MenuItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Box,
} from '@mui/material';

import { MenuGroup } from './types';
import { StyledPopperPaper } from './styles';

type Props = {
    open: boolean;
    anchorEl: HTMLElement | null;
    menuItems: MenuGroup[];
};

export default function PopperMenu({ open, anchorEl, menuItems }: Props) {
    if (!open || !anchorEl) return null;

    return (
        <Popper
            open={open}
            anchorEl={anchorEl}
            transition
            placement="bottom-end"
            disablePortal
        >
            {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={200}>
                    <StyledPopperPaper>
                        <MenuList>
                            {menuItems.map((group, groupIndex) => (
                                <Box key={groupIndex}>
                                    {group.map((item, index) => (
                                        <MenuItem
                                            key={index}
                                            onClick={item.action}
                                        >
                                            <ListItemIcon>
                                                {item.icon}
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={item.title}
                                            />
                                        </MenuItem>
                                    ))}
                                    {groupIndex < menuItems.length - 1 && (
                                        <Divider />
                                    )}
                                </Box>
                            ))}
                        </MenuList>
                    </StyledPopperPaper>
                </Fade>
            )}
        </Popper>
    );
}
