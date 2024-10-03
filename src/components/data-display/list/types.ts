import { ReactNode } from 'react';

export interface ListItemsType {
    text: string;
    icon: ReactNode;
    onClick: () => void;
}
