import { ReactNode } from 'react';

export interface SpeedDialActionType {
    icon: ReactNode;
    name: string;
    onClick: () => void;
}
