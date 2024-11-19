import { ReactNode } from '../../../../node_modules/react';
export interface DrawerListItems {
    icon: ReactNode;
    clickHandler: () => void;
    subMenu?: DrawerListItems[];
    isOpen?: boolean;
    isSubItemSelected?: boolean;
}
