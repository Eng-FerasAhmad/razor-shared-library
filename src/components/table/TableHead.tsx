import { TableSortLabel } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { HeadCell, Order } from 'src/components/table/types';
import { color } from 'src/shared/color';
import { pixelToRem } from 'src/shared/common';
import { fontSize } from 'src/shared/fonts';

export interface Props<T> {
    headCells: HeadCell<T>[];
    orderBy: string;
    order: Order;
    resetSort: () => void;
    handleHeaderClick: (label: string) => void;
}

export default function EnhancedTableHead<T>({
    headCells,
    orderBy,
    order,
    resetSort,
    handleHeaderClick,
}: Props<T>): JSX.Element {
    const resetSortHandler = (): void => {
        resetSort();
    };

    const headerClick = (label: string): void => {
        handleHeaderClick(label);
    };

    return (
        <TableHead>
            <TableRow sx={{ color: color.primary.main }}>
                <TableCell
                    align={'left'}
                    sx={{
                        fontSize: pixelToRem(fontSize.font17),
                        padding: pixelToRem(10, 16),
                        color: color.primary.main,
                        cursor: 'pointer',
                    }}
                    onClick={resetSortHandler}
                >
                    #
                </TableCell>
                {headCells.map((headCell, idx) => (
                    <TableCell
                        key={idx}
                        align={headCell.numeric ? 'right' : 'left'}
                        sx={{
                            fontSize: pixelToRem(fontSize.font17),
                            padding: pixelToRem(10, 16),
                            color: color.primary.main,
                            cursor: 'pointer',
                        }}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.label}
                            direction={
                                orderBy === headCell.label ? order : 'asc'
                            }
                            onClick={() => headerClick(headCell.label)}
                        >
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
