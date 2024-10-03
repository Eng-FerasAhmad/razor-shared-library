import { ReactNode } from 'react';

export interface MenuItems {
    title: string;
    action: () => void;
    icon?: ReactNode;
}
