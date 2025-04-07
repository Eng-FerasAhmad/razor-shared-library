import { MenuItemType } from './types';
interface Props {
    menuItems: MenuItemType[];
    selectedKey: string | null;
    selectedColor: string;
    onSelect: (key: string, onClick?: () => void) => void;
}
export default function SubMenuList({ menuItems, selectedKey, onSelect, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
