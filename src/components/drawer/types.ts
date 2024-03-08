import { ReactNode } from 'react';

export interface DrawerListItems {
    text: ReactNode;
    icon: ReactNode;
    clickHandler: () => void;
}
