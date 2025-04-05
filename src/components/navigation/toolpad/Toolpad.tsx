import { useEffect, useState, MouseEvent } from 'react';

import { Drawer, List } from '@mui/material';

import MenuGroup from './MenuGroup';
import PopupMenu from './PopupMenu';
import { drawerSx } from './styles';
import { MenuItemType, SidebarMenuProps } from './types';

export function Toolpad({
    isOpen,
    items,
    width = 240,
    collapsedWidth = 56,
    top = 0,
    selectedColor = '#e6e6e6',
    selectedKey,
}: SidebarMenuProps) {
    const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
    const [internalSelectedKey, setInternalSelectedKey] = useState<
        string | null
    >(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [hoverMenuItems, setHoverMenuItems] = useState<MenuItemType[]>([]);

    const selected = selectedKey ?? internalSelectedKey;

    const handleClosePopupMenu = () => {
        setAnchorEl(null);
        setHoverMenuItems([]);
    };

    useEffect(() => {
        if (isOpen) handleClosePopupMenu();
    }, [isOpen]);

    const handleToggleSubMenu = (label: string) =>
        setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));

    const handleSelect = (key: string, onClick?: () => void) => {
        if (selectedKey === undefined) setInternalSelectedKey(key);
        onClick?.();
    };

    const handleOpenPopupMenu = (
        e: MouseEvent<HTMLElement>,
        children: MenuItemType[]
    ) => {
        e.stopPropagation();
        setAnchorEl(e.currentTarget);
        setHoverMenuItems(children);
    };

    return (
        <>
            <Drawer
                open={isOpen}
                variant="permanent"
                sx={drawerSx(isOpen, width, collapsedWidth, top)}
                data-testid="toolpad"
            >
                <List data-testid="toolpad-list" sx={{ p: 0 }}>
                    {items.map((group, idx) => (
                        <MenuGroup
                            key={`group-${idx}`}
                            group={group}
                            isOpen={isOpen}
                            isLast={idx === items.length - 1}
                            openMenus={openMenus}
                            selectedKey={selected}
                            selectedColor={selectedColor}
                            onToggleSubMenu={handleToggleSubMenu}
                            onSelect={handleSelect}
                            onPopupOpen={handleOpenPopupMenu}
                        />
                    ))}
                </List>
            </Drawer>

            <PopupMenu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                hoverMenuItems={hoverMenuItems}
                selectedKey={selected}
                onClose={handleClosePopupMenu}
                onSelect={handleSelect}
            />
        </>
    );
}
