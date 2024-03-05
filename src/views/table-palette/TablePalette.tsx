import { Box } from '@mui/material';
import { ReactNode } from 'react';
import { TableCustom } from 'src/components/table/Table';
import { HeadCell } from 'src/components/table/types';

interface RowId {
    rowId: number;
}

export interface Data extends RowId {
    id: string;
    name: string;
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
    actions: ReactNode;
}

function createData(
    rowId: number,
    id: string,
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
    actions: ReactNode
): Data {
    return {
        rowId,
        id,
        name,
        calories,
        fat,
        carbs,
        protein,
        actions,
    };
}

export const headCells: HeadCell<Data>[] = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Dessert (100g serving)',
    },
    {
        id: 'calories',
        numeric: true,
        disablePadding: false,
        label: 'Calories',
    },
    {
        id: 'fat',
        numeric: true,
        disablePadding: false,
        label: 'Fat (g)',
    },
    {
        id: 'carbs',
        numeric: true,
        disablePadding: false,
        label: 'Carbs (g)',
    },
    {
        id: 'protein',
        numeric: true,
        disablePadding: false,
        label: 'Protein (g)',
    },
    {
        id: 'actions',
        numeric: true,
        disablePadding: false,
        label: 'Actions',
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
    createData(1, '1', 'Cupcake', 305, 4.7, 67, 25.3, handleAction(1)),
    createData(2, '2', 'Donut', 452, 25.0, 51, 4.9, handleAction(2)),
    createData(3, '3', 'Eclair', 262, 16.0, 24, 6.0, handleAction(3)),
    createData(4, '4', 'Frozen yoghurt', 159, 6.0, 24, 4.0, handleAction(4)),
    createData(5, '5', 'Gingerbread', 356, 16.0, 49, 3.9, handleAction(5)),
    createData(6, '6', 'Honeycomb', 408, 3.2, 87, 6.5, handleAction(6)),
    createData(
        7,
        '7',
        'Ice cream sandwich',
        237,
        9.0,
        37,
        4.3,
        handleAction(7)
    ),
    createData(8, '8', 'Jelly Bean', 375, 0.0, 94, 0.0, handleAction(8)),
    createData(9, '9', 'KitKat', 518, 26.0, 65, 7.0, handleAction(9)),
    createData(10, '10', 'Lollipop', 392, 0.2, 98, 0.0, handleAction(10)),
    createData(11, '11', 'Marshmallow', 318, 0, 81, 2.0, handleAction(11)),
    createData(12, '12', 'Nougat', 360, 19.0, 9, 37.0, handleAction(12)),
    createData(13, '13', 'Oreo', 437, 18.0, 63, 4.0, handleAction(13)),
];

export default function TablePalette(): JSX.Element {
    return (
        <TableCustom<Data>
            title={'Custom Table'}
            rows={rows}
            headCells={headCells}
            deleteIcon={<>del</>}
            filterIcon={<>flt</>}
            deleteAction={() => console.log('delete items')}
            filterAction={() => console.log('filter items')}
        />
    );
}
