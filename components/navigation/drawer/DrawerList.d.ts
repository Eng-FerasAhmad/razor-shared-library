import { ReactElement, ReactNode } from '../../../../node_modules/react';
import { DrawerListItems } from './types';
interface Props {
    listItems: DrawerListItems[];
    collapseIconOpen?: ReactNode;
    collapseIconClose?: ReactNode;
    handleClick: (index: number) => void;
    selectedSubItemIndex?: number;
    selectedItemIndex?: number;
}
export default function DrawerList({ listItems, collapseIconOpen, collapseIconClose, handleClick, selectedSubItemIndex, selectedItemIndex, }: Props): ReactElement;
export {};
