import { ReactNode, useEffect, useState, MouseEvent } from 'react';

import {
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
    Divider,
    Typography,
    MenuItem,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Popover from '@mui/material/Popover';

import { color } from 'shared/color';

interface MenuItemType {
    key: string;
    label: string;
    icon: ReactNode;
    onClick?: () => void;
    children?: MenuItemType[];
}

interface MenuGroup {
    title?: string;
    items: MenuItemType[];
}

interface SidebarMenuProps {
    isOpen: boolean;
    items: MenuGroup[];
    width?: number;
    collapsedWidth?: number;
    top?: number;
    selectedColor?: string;
}

export default function Toolpad({
    isOpen,
    items,
    width = 240,
    collapsedWidth = 56,
    top = 0,
    selectedColor = 'rgba(25, 118, 210, 0.08)',
}: SidebarMenuProps) {
    const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
    const [selectedKey, setSelectedKey] = useState<string | null>(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [hoverMenuItems, setHoverMenuItems] = useState<MenuItemType[]>([]);

    const handleClosePopupMenu = () => {
        setAnchorEl(null);
        setHoverMenuItems([]);
    };

    useEffect(() => {
        if (isOpen) {
            handleClosePopupMenu();
        }
    }, [isOpen]);

    const handleToggleSubMenu = (label: string) => {
        setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
    };

    const handleSelect = (key: string, onClick?: () => void) => {
        setSelectedKey(key);
        if (onClick) onClick();
    };

    const handleOpenPopupMenu = (
        e: MouseEvent<HTMLElement>,
        children: MenuItemType[]
    ) => {
        e.stopPropagation();
        setAnchorEl(e.currentTarget);
        setHoverMenuItems(children);
    };

    const selectedStyles = {
        backgroundColor: `${color.hover} !important`,
        '&:hover': {
            backgroundColor: `${color.hover} !important`,
        },
    };

    return (
        <>
            <Drawer
                variant="permanent"
                open={isOpen}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: isOpen ? width : collapsedWidth,
                        transition: 'width 0.3s',
                        top,
                        height: `calc(100vh - ${top}px)`,
                        overflowX: 'hidden',
                    },
                }}
            >
                <List>
                    {items.map((group, idx) => (
                        <div key={`group-${idx}`}>
                            {group.title && isOpen && (
                                <Typography
                                    variant="caption"
                                    sx={{
                                        pl: 2,
                                        pb: 0.5,
                                        pt: 1,
                                        display: 'block',
                                        color: 'text.secondary',
                                    }}
                                >
                                    {group.title}
                                </Typography>
                            )}

                            {group.items.map((item) => {
                                const isMainSelected = selectedKey === item.key;
                                const hasChildren =
                                    item.children && item.children.length > 0;

                                return (
                                    <div key={item.key}>
                                        <ListItemButton
                                            selected={isMainSelected}
                                            onClick={
                                                hasChildren && !isOpen
                                                    ? (e) =>
                                                          handleOpenPopupMenu(
                                                              e,
                                                              item.children!
                                                          )
                                                    : hasChildren && isOpen
                                                    ? () =>
                                                          handleToggleSubMenu(
                                                              item.label
                                                          )
                                                    : () =>
                                                          handleSelect(
                                                              item.key,
                                                              item.onClick
                                                          )
                                            }
                                            sx={{
                                                px: 1.5,
                                                justifyContent: isOpen
                                                    ? 'initial'
                                                    : 'center',
                                                position: 'relative',
                                                borderLeft: isMainSelected
                                                    ? `4px solid ${selectedColor}`
                                                    : '4px solid transparent',
                                                ...(isMainSelected
                                                    ? selectedStyles
                                                    : {
                                                          '&:hover': {
                                                              backgroundColor:
                                                                  color.hover,
                                                          },
                                                      }),
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    minWidth: 0,
                                                    mr: isOpen ? 2 : 'auto',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                {item.icon}
                                            </ListItemIcon>

                                            {isOpen && (
                                                <ListItemText
                                                    primary={item.label}
                                                />
                                            )}

                                            {isOpen &&
                                                hasChildren &&
                                                (openMenus[item.label] ? (
                                                    <ExpandLess />
                                                ) : (
                                                    <ExpandMore />
                                                ))}
                                        </ListItemButton>

                                        {hasChildren && isOpen && (
                                            <Collapse
                                                in={openMenus[item.label]}
                                                timeout="auto"
                                                unmountOnExit
                                            >
                                                <List
                                                    component="div"
                                                    disablePadding
                                                >
                                                    {item.children!.map(
                                                        (child) => {
                                                            const isSubSelected =
                                                                selectedKey ===
                                                                child.key;
                                                            return (
                                                                <ListItemButton
                                                                    key={
                                                                        child.key
                                                                    }
                                                                    selected={
                                                                        isSubSelected
                                                                    }
                                                                    onClick={() =>
                                                                        handleSelect(
                                                                            child.key,
                                                                            child.onClick
                                                                        )
                                                                    }
                                                                    sx={{
                                                                        pl: 4,
                                                                        borderLeft:
                                                                            isSubSelected
                                                                                ? `4px solid ${selectedColor}`
                                                                                : '4px solid transparent',
                                                                        ...(isSubSelected
                                                                            ? selectedStyles
                                                                            : {
                                                                                  '&:hover':
                                                                                      {
                                                                                          backgroundColor:
                                                                                              color.hover,
                                                                                      },
                                                                              }),
                                                                    }}
                                                                >
                                                                    <ListItemIcon>
                                                                        {
                                                                            child.icon
                                                                        }
                                                                    </ListItemIcon>
                                                                    {isOpen && (
                                                                        <ListItemText
                                                                            primary={
                                                                                child.label
                                                                            }
                                                                        />
                                                                    )}
                                                                </ListItemButton>
                                                            );
                                                        }
                                                    )}
                                                </List>
                                            </Collapse>
                                        )}
                                    </div>
                                );
                            })}

                            {idx !== items.length - 1 && (
                                <Divider sx={{ my: 1 }} />
                            )}
                        </div>
                    ))}
                </List>
            </Drawer>

            <Popover
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClosePopupMenu}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                transitionDuration={0}
                slotProps={{
                    paper: {
                        sx: {
                            mt: 1,
                        },
                    },
                }}
            >
                {hoverMenuItems.map((child) => (
                    <MenuItem
                        key={child.key}
                        selected={selectedKey === child.key}
                        onClick={() => {
                            handleSelect(child.key, child.onClick);
                            setTimeout(() => handleClosePopupMenu(), 50);
                        }}
                        sx={{
                            padding: '10px 16px',
                            backgroundColor:
                                selectedKey === child.key
                                    ? `${color.hover} !important`
                                    : 'transparent',
                            '&:hover': {
                                backgroundColor: `${color.hover} !important`,
                            },
                        }}
                    >
                        {child.icon}
                        <ListItemText sx={{ ml: 1 }} primary={child.label} />
                    </MenuItem>
                ))}
            </Popover>
        </>
    );
}
