import { ReactElement, ReactNode } from '../../../../node_modules/react';
import { DrawerListItems } from './types';
interface Props {
    appTitle: string;
    header: ReactNode;
    closeDrawerIcon?: ReactNode;
    drawerTitle?: ReactNode;
    listItems: DrawerListItems[];
    open: boolean;
    handleDrawerOpen: () => void;
    handleSubItemClick: (index: number) => void;
    selectedSubItemIndex?: number;
    selectedItemIndex?: number;
}
export declare function DrawerCustom({ appTitle, header, listItems, open, handleDrawerOpen, handleSubItemClick, selectedSubItemIndex, selectedItemIndex, }: Props): ReactElement;
export {};