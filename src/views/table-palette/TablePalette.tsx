import {
    ChangeEvent,
    useState,
    ReactElement,
    MouseEvent as ReactMouseEvent,
} from 'react';

import { SortDirection } from '@mui/material/TableCell';

import { HeadCell, Order } from 'components/entity-table/types';
import { EntityTable } from 'components/entity-table/EntityTable';

export interface Data {
    id: string;
    name: string;
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
    status: string;
}

function createData(
    id: string,
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
    status: string
): Data {
    return {
        id,
        name,
        calories,
        fat,
        carbs,
        protein,
        status,
    };
}

export const headCells: HeadCell<Data>[] = [
    {
        id: 'name',
        numeric: false,
        label: 'Dessert (100g serving)',
        sortLabel: 'Dessert',
    },
    {
        id: 'protein',
        numeric: true,
        label: 'Protein (g)',
        sortLabel: 'Protein ',
    },
    {
        id: 'status',
        numeric: false,
        label: 'Status',
        sortLabel: 'Status',
    },
];

const rows = [
    createData('1', 'Cupcake', 305, 4.7, 67, 25.3, 'Pending'),
    createData('2', 'Donut', 452, 25.0, 51, 4.9, 'Active'),
    createData('3', 'Eclair', 262, 16.0, 24, 6.0, 'Pending'),
    createData('4', 'Frozen yoghurt', 159, 6.0, 24, 4.0, 'Deleted'),
    createData('5', 'Gingerbread', 356, 16.0, 49, 3.9, 'Blocked'),
];

export default function TablePalette(): ReactElement {
    const [pageSize, setPageSize] = useState<number>(5);
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [orderBy, setOrderBy] = useState<string>('');
    const [order, setOrder] = useState<Order>('asc');

    const handleHeaderClick = (label: string): void => {
        const direction: SortDirection = order === 'asc' ? 'desc' : 'asc';
        setOrderBy(label);
        setOrder(direction);
    };

    const resetSort = (): void => {
        setOrderBy('');
        setOrder('asc');
    };

    const clickHandler = (row: Data, index: number): void => {
        console.log('row', row, index);
    };

    const handleChangePage = (_event: unknown, newPage: number): void => {
        setPageNumber(newPage);
    };

    const handleChangeRowsPerPage = (
        event: ChangeEvent<HTMLInputElement>
    ): void => {
        setPageSize(parseInt(event.target.value, 10));
        setPageNumber(0);
    };

    return (
        <EntityTable<Data>
            headerTools={<>Title</>}
            handleHeaderClick={handleHeaderClick}
            resetSort={resetSort}
            order={order}
            orderBy={orderBy}
            pageSize={pageSize}
            pageNumber={pageNumber}
            totalResultCounts={5}
            rows={rows}
            noDataCaption="No Data Found!"
            headCells={headCells}
            selectedRow={-1}
            statusFilter={<div style={{ display: 'inline' }}>:</div>}
            onOneClickRow={clickHandler}
            handleChangePage={(
                event: ReactMouseEvent<HTMLButtonElement, MouseEvent> | null,
                page: number
            ) => handleChangePage(event, page)}
            handleChangeRowsPerPage={(event: ChangeEvent<HTMLInputElement>) =>
                handleChangeRowsPerPage(event)
            }
            borderRadius={true}
            actionEdit={() => console.log('edit')}
            actionDelete={() => console.log('delete')}
            actionDetails={() => console.log('delete')}
        />
    );
}
