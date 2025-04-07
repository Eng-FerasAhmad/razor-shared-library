import { ReactNode } from 'react';

export interface MenuItemType {
    key: string;
    label: string;
    icon: ReactNode;
    onClick?: () => void;
    children?: MenuItemType[];
}

export interface MenuGroup {
    title?: string;
    items: MenuItemType[];
}

export interface SidebarMenuProps {
    isOpen: boolean;
    items: MenuGroup[];
    width?: number;
    collapsedWidth?: number;
    top?: number;
    selectedColor?: string;
    backgroundColor?: string;
    selectedKey?: string;
    header?: ReactNode;
    footer?: ReactNode;
}
