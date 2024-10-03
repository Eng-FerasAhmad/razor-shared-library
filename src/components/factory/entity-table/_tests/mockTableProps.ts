import { HeadCell } from 'components/factory/entity-table/types';

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

export const mockHeadCells: HeadCell<Data>[] = [
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

export const mockRows = [
    createData('1', 'Cupcake', 305, 4.7, 67, 25.3, 'Pending'),
    createData('2', 'Donut', 452, 25.0, 51, 4.9, 'Active'),
    createData('3', 'Eclair', 262, 16.0, 24, 6.0, 'Pending'),
    createData('4', 'Frozen yoghurt', 159, 6.0, 24, 4.0, 'Deleted'),
    createData('5', 'Gingerbread', 356, 16.0, 49, 3.9, 'Blocked'),
];
