import { ReactNode } from 'react';

export interface DrawerListItems {
    text: string;
    icon: ReactNode;
    clickHandler: () => void;
}
