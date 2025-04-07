import { MenuGroup } from './types';
type Props = {
    open: boolean;
    anchorEl: HTMLElement | null;
    menuItems: MenuGroup[];
};
export default function PopperMenu({ open, anchorEl, menuItems }: Props): import("react/jsx-runtime").JSX.Element | null;
export {};
