import { ChangeEvent, ReactNode } from 'react';

export type Order = 'asc' | 'desc';

export interface TableProps<T> {
    rows: T[];
    headCells: HeadCell<T>[];
    headerTools: ReactNode;
    pageSize: number;
    totalResultCounts: number;
    pageNumber: number;
    selectedRow: number;
    noDataCaption: string;
    orderBy: string;
    order: Order;
    statusFilter?: ReactNode;
    resetSort: () => void;
    handleHeaderClick: (sortLabel: string) => void;
    onClickRow: (row: T, selected: number) => void;
    handleChangePage: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
        page: number
    ) => void;
    handleChangeRowsPerPage: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface HeadCell<T> {
    id: keyof T;
    label: string;
    numeric: boolean;
    sortLabel: string;
    filterIcon?: boolean;
}
