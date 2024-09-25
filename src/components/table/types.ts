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
    onDlClickRow?: (row: T, selected: number) => void;
    onOneClickRow?: (row: T, selected: number) => void;
    handleChangePage: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
        page: number
    ) => void;
    handleChangeRowsPerPage: (event: ChangeEvent<HTMLInputElement>) => void;
    isCustomTable?: boolean;
    noBorderLeft?: boolean;
    noBorderTop?: boolean;
    noBorderRight?: boolean;
    resetIcon: ReactNode;
    actionAdd?: () => void;
    actionEdit?: () => void;
    actionDelete?: () => void;
    actionDetails?: () => void;
}

export interface HeadCell<T> {
    id: keyof T;
    label: string;
    numeric: boolean;
    sortLabel: string;
    filterIcon?: boolean;
    width?: string;
}
