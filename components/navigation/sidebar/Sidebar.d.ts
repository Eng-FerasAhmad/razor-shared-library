import { ReactElement, ReactNode } from '../../../../node_modules/react';
interface Props {
    isDrawerOpen: boolean;
    toggleDrawer: () => void;
    top: number;
    children: ReactNode;
    width: number | undefined;
    hasBorder: boolean;
    minView?: boolean;
    minWidth?: number;
}
export declare function Sidebar({ isDrawerOpen, toggleDrawer, top, children, width, hasBorder, minView, minWidth, }: Props): ReactElement;
export {};
