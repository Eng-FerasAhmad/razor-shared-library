import { MenuItemType } from './types';
export default function PopupMenu({ anchorEl, open, hoverMenuItems, selectedKey, onSelect, onClose, }: {
    anchorEl: HTMLElement | null;
    open: boolean;
    hoverMenuItems: MenuItemType[];
    selectedKey: string | null;
    onSelect: (key: string, onClick?: () => void) => void;
    onClose: () => void;
}): import("react/jsx-runtime").JSX.Element;
