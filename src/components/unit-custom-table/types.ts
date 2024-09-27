import { ChangeEvent, ReactNode, MouseEvent as ReactMouseEvent } from 'react';

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
        event: ReactMouseEvent<HTMLButtonElement, MouseEvent> | null,
        page: number
    ) => void;
    handleChangeRowsPerPage: (event: ChangeEvent<HTMLInputElement>) => void;
    borderRadius?: boolean;
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

export const statusLabels = {
    active: 'Active',
    blocked: 'Blocked',
    canceled: 'Canceled',
    completed: 'Completed',
    deleted: 'Deleted',
    expired: 'Expired',
    inactive: 'Inactive',
    pending: 'Pending',
    rejected: 'Rejected',
};

export interface RowKeys {
    k: string;
    v: string | number;
    isNumber: boolean;
}
