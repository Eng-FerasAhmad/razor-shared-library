import { ReactNode } from '../../../../node_modules/react';
export interface SpeedDialActionType {
    icon: ReactNode;
    name: string;
    onClick: () => void;
}
