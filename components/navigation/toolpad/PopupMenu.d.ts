import { MenuItemType } from './types';
export default function PopupMenu({ anchorEl, open, hoverMenuItems, selectedKey, onSelect, onClose, selectedColor, }: {
    anchorEl: HTMLElement | null;
    open: boolean;
    hoverMenuItems: MenuItemType[];
    selectedKey: string | null;
    onSelect: (key: string, onClick?: () => void) => void;
    onClose: () => void;
    selectedColor: string;
}): import("react/jsx-runtime").JSX.Element;
