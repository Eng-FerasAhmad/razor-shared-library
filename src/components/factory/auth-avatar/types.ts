import { ReactNode } from 'react';

export interface AuthMenuItemType {
    title: string;
    icon: ReactNode;
    action: () => void;
}

export type MenuGroup = AuthMenuItemType[];
