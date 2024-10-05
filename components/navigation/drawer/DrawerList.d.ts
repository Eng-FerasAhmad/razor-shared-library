import { ReactElement, ReactNode } from '../../../../node_modules/react';
import { DrawerListItems } from './types';
interface Props {
    listItems: DrawerListItems[];
    collapseIconOpen?: ReactNode;
    collapseIconClose?: ReactNode;
    handleClick: (index: number) => void;
}
export default function DrawerList({ listItems, collapseIconOpen, collapseIconClose, handleClick, }: Props): ReactElement;
export {};
