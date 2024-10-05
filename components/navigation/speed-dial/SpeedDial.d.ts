import { ReactElement, ReactNode } from '../../../../node_modules/react';
import { SpeedDialActionType } from '../../../../../../../../src/components/navigation/speed-dial/types';
interface Props {
    actions: SpeedDialActionType[];
    icon?: ReactNode;
    ariaLabel: string;
    position?: {
        bottom?: number;
        right?: number;
        left?: number;
        top?: number;
    };
}
export declare function SpeedDialCustom({ actions, icon, ariaLabel, position, }: Props): ReactElement;
export {};
