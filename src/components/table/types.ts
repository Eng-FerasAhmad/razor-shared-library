import { ChangeEvent, MouseEvent } from 'react';

export type Order = 'asc' | 'desc';

export interface RowProps {
    id: number;
}

export interface EnhancedTableProps<T> {
    numSelected: number;
    onSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void;
    rowCount: number;
    headCells: HeadCell<T>[];
}

export interface HeadCell<T> {
    disablePadding: boolean;
    id: keyof T;
    label: string;
    numeric: boolean;
}
