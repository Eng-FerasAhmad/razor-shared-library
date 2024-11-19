import { ReactElement, ReactNode } from '../../../../node_modules/react';
interface Props {
    isDrawerOpen: boolean;
    toggleDrawer: () => void;
    children: ReactNode;
}
export declare function Sidebar({ isDrawerOpen, toggleDrawer, children, }: Props): ReactElement;
export {};
