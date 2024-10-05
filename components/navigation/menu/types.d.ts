import { ReactNode } from '../../../../node_modules/react';
export interface MenuItems {
    title: string;
    action: () => void;
    icon?: ReactNode;
}
