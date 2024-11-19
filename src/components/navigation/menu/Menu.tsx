import {
    KeyboardEvent,
    ReactElement,
    ReactNode,
    SyntheticEvent,
    useEffect,
    useRef,
    useState,
} from 'react';

import Box, { BoxProps } from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Grow from '@mui/material/Grow';

import { Template } from 'components/_template/Template';
import { MenuItems } from 'components/navigation/menu/types';
import { color } from 'shared/color';
import { fontSize } from 'shared/fonts';

interface Props extends Omit<BoxProps, 'position'> {
    items: MenuItems[];
    selected?: string;
    anchor: ReactNode;
    position?: 'bottom-start' | 'bottom-end';
}

export const MenuCustom = ({
    items,
    selected,
    anchor,
    position = 'bottom-start',
    ...props
}: Props): ReactElement => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLDivElement>(null);
    const prevOpen = useRef(open);

    useEffect(() => {
        if (prevOpen.current && !open) {
            anchorRef.current?.focus();
        }
        prevOpen.current = open;
    }, [open]);

    const handleToggle = (): void => {
        setOpen((prev) => !prev);
    };

    const handleClose = (event: Event | SyntheticEvent): void => {
        if (anchorRef.current?.contains(event.target as HTMLElement)) {
            return;
        }
        setOpen(false);
    };

    const handleListKeyDown = (event: KeyboardEvent): void => {
        if (event.key === 'Tab' || event.key === 'Escape') {
            event.preventDefault();
            setOpen(false);
        }
    };

    const handleClickItem = (event: SyntheticEvent, item: MenuItems): void => {
        item.action();
        handleClose(event);
    };

    return (
        <Template data-testid="menu">
            <Box
                ref={anchorRef}
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open}
                aria-haspopup="true"
                onClick={handleToggle}
                {...props}
            >
                {anchor}
            </Box>

            <Popper
                open={open}
                anchorEl={anchorRef.current}
                placement={position}
                transition
                disablePortal={false}
                style={{ zIndex: 1101 }}
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom-start'
                                    ? 'left top'
                                    : 'left bottom',
                            padding: 0,
                            color: color.secondary.dark,
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                    sx={{ p: 0 }}
                                >
                                    {items.map((item, idx) => (
                                        <MenuItem
                                            key={idx}
                                            selected={selected === item.title}
                                            onClick={(e) =>
                                                handleClickItem(e, item)
                                            }
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                fontSize: fontSize.font14,
                                            }}
                                        >
                                            <Box sx={{ mr: 1, height: '20px' }}>
                                                {item.icon}
                                            </Box>
                                            {item.title}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Template>
    );
};
