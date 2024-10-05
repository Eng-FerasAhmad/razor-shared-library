import { ReactNode } from '../../../../node_modules/react';
export interface ListItemsType {
    text: string;
    icon: ReactNode;
    onClick: () => void;
}
