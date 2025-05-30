import { ReactNode } from 'react';

export interface DrawerListItems {
    icon: ReactNode;
    clickHandler: () => void;
    subMenu?: DrawerListItems[];
    isOpen?: boolean;
    isSubItemSelected?: boolean;
}
