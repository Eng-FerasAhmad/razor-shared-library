import { Box } from '@mui/material';
import { SortDirection } from '@mui/material/TableCell';
import { ChangeEvent, ReactNode, useState, ReactElement } from 'react';
import { TableCustom } from 'src/components/table/Table';
import { HeadCell, Order } from 'src/components/table/types';

export interface Data {
    id: string;
    name: string;
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
    statusText: ReactNode;
}

function createData(
    id: string,
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
    statusText: ReactNode
): Data {
    return {
        id,
        name,
        calories,
        fat,
        carbs,
        protein,
        statusText,
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
        id: 'statusText',
        numeric: true,
        label: 'statusText',
        sortLabel: 'Status',
    },
];

const handleAction = (id: number): ReactNode => {
    const deleteHandler = (): void => {
        console.log('delete id', id);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <Box sx={{ padding: 1 }} onClick={() => deleteHandler()}>
                X
            </Box>
            <Box sx={{ padding: 1 }}>E</Box>
        </Box>
    );
};

const rows = [
    createData('1', 'Cupcake', 305, 4.7, 67, 25.3, handleAction(1)),
    createData('2', 'Donut', 452, 25.0, 51, 4.9, handleAction(2)),
    createData('3', 'Eclair', 262, 16.0, 24, 6.0, handleAction(3)),
    createData('4', 'Frozen yoghurt', 159, 6.0, 24, 4.0, handleAction(4)),
    createData('5', 'Gingerbread', 356, 16.0, 49, 3.9, handleAction(5)),
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
        <TableCustom<Data>
            headerTools={
                <>
                    <>Title</>
                </>
            }
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
                event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
                page: number
            ) => handleChangePage(event, page)}
            handleChangeRowsPerPage={(event: ChangeEvent<HTMLInputElement>) =>
                handleChangeRowsPerPage(event)
            }
            isCustomTable={true}
            resetIcon={<>x</>}
        />
    );
}
