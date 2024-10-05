import { ReactElement } from '../../../../node_modules/react';
import { ListItemProps, ListProps } from '@mui/material';
import { ListItemsType } from '../../../../../../../../src/components/data-display/list/types';
interface Props {
    items: ListItemsType[];
    listProps: ListProps;
    itemsProps: ListItemProps;
}
export declare function ListCustom({ items, listProps, itemsProps, }: Props): ReactElement;
export {};
