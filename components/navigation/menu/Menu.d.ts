import { ReactElement, ReactNode } from '../../../../node_modules/react';
import { BoxProps } from '@mui/material/Box';
import { MenuItems } from '../../../../../../../../src/components/navigation/menu/types';
interface Props extends Omit<BoxProps, 'position'> {
    items: MenuItems[];
    selected?: string;
    anchor: ReactNode;
    position?: 'bottom-start' | 'bottom-end';
}
export declare const MenuCustom: ({ items, selected, anchor, position, ...props }: Props) => ReactElement;
export {};
