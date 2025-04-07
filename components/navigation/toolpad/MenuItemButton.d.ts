import { MouseEvent } from '../../../../node_modules/react';
import { MenuItemType } from './types';
export default function SidebarMenuItem({ item, isOpen, openMenus, selectedKey, selectedColor, onToggleSubMenu, onSelect, onPopupOpen, }: {
    item: MenuItemType;
    isOpen: boolean;
    openMenus: Record<string, boolean>;
    selectedKey: string | null;
    selectedColor: string;
    onToggleSubMenu: (label: string) => void;
    onSelect: (key: string, onClick?: () => void) => void;
    onPopupOpen: (e: MouseEvent<HTMLElement>, children: MenuItemType[]) => void;
}): import("react/jsx-runtime").JSX.Element;
