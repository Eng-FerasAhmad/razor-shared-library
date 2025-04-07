import { MouseEvent } from '../../../../node_modules/react';
import { MenuGroup, MenuItemType } from './types';
export default function MenuGroupComponent({ group, isOpen, isLast, openMenus, selectedKey, selectedColor, onToggleSubMenu, onSelect, onPopupOpen, }: {
    group: MenuGroup;
    isOpen: boolean;
    isLast: boolean;
    openMenus: Record<string, boolean>;
    selectedKey: string | null;
    selectedColor: string;
    onToggleSubMenu: (label: string) => void;
    onSelect: (key: string, onClick?: () => void) => void;
    onPopupOpen: (e: MouseEvent<HTMLElement>, children: MenuItemType[]) => void;
}): import("react/jsx-runtime").JSX.Element;
