import { ReactNode } from '../../../../node_modules/react';
export interface AuthMenuItemType {
    title: string;
    icon: ReactNode;
    action: () => void;
}
export type MenuGroup = AuthMenuItemType[];
