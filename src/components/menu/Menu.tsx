import {
    Box,
    ClickAwayListener,
    MenuItem,
    MenuList,
    Paper,
    Popper,
} from '@mui/material';
import Grow from '@mui/material/Grow';
import { KeyboardEvent, ReactNode, useEffect, useRef, useState } from 'react';
import { Template } from 'src/components/_template/Template';

interface Items {
    title: string;
    action: () => void;
    icon?: ReactNode;
}

interface Props {
    items: Array<Items>;
    selected?: string;
    anchor: ReactNode;
    position?: 'bottom-start' | 'bottom-end';
}

export const MenuCustom = ({
    items,
    selected,
    anchor,
    position = 'bottom-start',
}: Props): JSX.Element => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLDivElement>(null);

    const handleClose = (event: Event | React.SyntheticEvent): void => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    };

    const handleListKeyDown = (event: KeyboardEvent): void => {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    };

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);

    useEffect((): void => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const handleToggle = (): void => {
        setOpen((prev) => !prev);
    };

    const handleClickItem = (
        event: Event | React.SyntheticEvent,
        item: Items
    ): void => {
        item.action();
        handleClose(event);
    };

    return (
        <Template>
            <Box
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                data-testid="menu"
            >
                {anchor}
            </Box>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement={position}
                transition
                disablePortal
                data-testid="popper"
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom-start'
                                    ? 'left top'
                                    : 'left bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                    data-testid="menu-list"
                                >
                                    {items.map((item, idx) => {
                                        return (
                                            <MenuItem
                                                key={idx}
                                                selected={
                                                    selected === item.title
                                                }
                                                onClick={(e) =>
                                                    handleClickItem(e, item)
                                                }
                                            >
                                                <Box sx={{ mr: 1 }}>
                                                    {item.icon}
                                                </Box>
                                                {item.title}
                                            </MenuItem>
                                        );
                                    })}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Template>
    );
};
