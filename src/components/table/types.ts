import { ChangeEvent, MouseEvent } from 'react';

export type Order = 'asc' | 'desc';

export interface RowProps {
    id: number;
}

export interface EnhancedTableProps<T> {
    numSelected: number;
    onRequestSort: (event: MouseEvent<unknown>, property: number) => void;
    onSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: keyof T | undefined ;
    rowCount: number;
    headCells: HeadCell[];
}

export interface HeadCell {
    disablePadding: boolean;
    id: string;
    label: string;
    numeric: boolean;
}
