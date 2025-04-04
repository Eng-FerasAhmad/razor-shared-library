import { MouseEvent } from 'react';

import { Divider, Typography } from '@mui/material';

import SidebarMenuItem from './MenuItemButton';
import { MenuGroup, MenuItemType } from './types';
import { groupTitleSx, MenuGroupContainer } from './styles';

export default function MenuGroupComponent({
    group,
    isOpen,
    isLast,
    openMenus,
    selectedKey,
    selectedColor,
    onToggleSubMenu,
    onSelect,
    onPopupOpen,
}: {
    group: MenuGroup;
    isOpen: boolean;
    isLast: boolean;
    openMenus: Record<string, boolean>;
    selectedKey: string | null;
    selectedColor: string;
    onToggleSubMenu: (label: string) => void;
    onSelect: (key: string, onClick?: () => void) => void;
    onPopupOpen: (e: MouseEvent<HTMLElement>, children: MenuItemType[]) => void;
}) {
    return (
        <MenuGroupContainer data-testid="menu-group-container">
            {group.title && isOpen && (
                <Typography
                    variant="caption"
                    sx={groupTitleSx}
                    data-testid="menu-group-typo"
                >
                    {group.title}
                </Typography>
            )}
            {group.items.map((item) => (
                <SidebarMenuItem
                    key={item.key}
                    item={item}
                    isOpen={isOpen}
                    openMenus={openMenus}
                    selectedKey={selectedKey}
                    selectedColor={selectedColor}
                    onToggleSubMenu={onToggleSubMenu}
                    onSelect={onSelect}
                    onPopupOpen={onPopupOpen}
                />
            ))}
            {!isLast && <Divider sx={{ my: 1 }} />}
        </MenuGroupContainer>
    );
}
