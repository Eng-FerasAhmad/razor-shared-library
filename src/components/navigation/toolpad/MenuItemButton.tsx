import { MouseEvent } from 'react';

import {
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
} from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

import SubMenuList from './SubMenuList';
import { menuItemButtonSx, menuItemIconSx } from './styles';
import { MenuItemType } from './types';

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 13,
    },
}));

export default function SidebarMenuItem({
    item,
    isOpen,
    openMenus,
    selectedKey,
    selectedColor,
    onToggleSubMenu,
    onSelect,
    onPopupOpen,
}: {
    item: MenuItemType;
    isOpen: boolean;
    openMenus: Record<string, boolean>;
    selectedKey: string | null;
    selectedColor: string;
    onToggleSubMenu: (label: string) => void;
    onSelect: (key: string, onClick?: () => void) => void;
    onPopupOpen: (e: MouseEvent<HTMLElement>, children: MenuItemType[]) => void;
}) {
    const isSelected = selectedKey === item.key;
    const hasChildren = !!item.children?.length;

    const handleClick = hasChildren
        ? isOpen
            ? () => onToggleSubMenu(item.label)
            : (e: MouseEvent<HTMLElement>) => onPopupOpen(e, item.children!)
        : () => onSelect(item.key, item.onClick);

    return (
        <>
            <ListItemButton
                selected={isSelected}
                onClick={handleClick}
                sx={menuItemButtonSx(isSelected, isOpen, selectedColor)}
                data-testid="list-item-button"
            >
                <LightTooltip
                    title={!isOpen ? item.label : ''}
                    placement="right"
                >
                    <ListItemIcon
                        sx={menuItemIconSx(isOpen)}
                        data-testid="list-item-icon"
                    >
                        {item.icon}
                    </ListItemIcon>
                </LightTooltip>

                {isOpen && (
                    <ListItemText
                        data-testid="list-item-text"
                        primary={
                            <Typography
                                sx={{ fontSize: '15px', fontWeight: 560 }}
                            >
                                {item.label}
                            </Typography>
                        }
                    />
                )}
                {isOpen &&
                    hasChildren &&
                    (openMenus[item.label] ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>

            {hasChildren && isOpen && (
                <Collapse
                    in={openMenus[item.label]}
                    timeout="auto"
                    unmountOnExit
                    data-testid="list-item-collapse"
                >
                    {item.children && (
                        <SubMenuList
                            menuItems={item.children}
                            selectedKey={selectedKey}
                            selectedColor={selectedColor}
                            onSelect={onSelect}
                        />
                    )}
                </Collapse>
            )}
        </>
    );
}
