import { TableSortLabel } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ReactNode } from 'react';
import { HeadCell, Order } from 'src/components/table/types';
import { color } from 'src/shared/color';
import { pixelToRem } from 'src/shared/common';
import { fontSize } from 'src/shared/fonts';

export interface Props<T> {
    headCells: HeadCell<T>[];
    orderBy: string;
    order: Order;
    statusFilter?: ReactNode;
    resetSort: () => void;
    handleHeaderClick: (sortLabel: string) => void;
}

export default function EnhancedTableHead<T>({
    headCells,
    orderBy,
    order,
    statusFilter,
    resetSort,
    handleHeaderClick,
}: Props<T>): JSX.Element {
    const resetSortHandler = (): void => {
        resetSort();
    };

    const headerClick = (sortLabel: string): void => {
        handleHeaderClick(sortLabel);
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
                            active={orderBy === headCell.sortLabel}
                            direction={
                                orderBy === headCell.sortLabel ? order : 'asc'
                            }
                            onClick={() => headerClick(headCell.sortLabel)}
                        >
                            {headCell.label}
                        </TableSortLabel>
                        {headCell.id === 'statusText' && statusFilter && (
                            <>{statusFilter}</>
                        )}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
