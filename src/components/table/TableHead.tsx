import { TableSortLabel } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TableProps } from './types';
import { color } from 'src/shared/color';
import { pixelToRem } from 'src/shared/common';
import { fontSize } from 'src/shared/fonts';
import { ReactElement } from 'react';

export default function EnhancedTableHead<T>(
    props: TableProps<T>
): ReactElement {
    const resetSortHandler = (): void => {
        props.resetSort();
    };

    const headerClick = (sortLabel: string): void => {
        props.handleHeaderClick(sortLabel);
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
                {props.headCells.map((headCell, idx) => (
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
                            active={props.orderBy === headCell.sortLabel}
                            direction={
                                props.orderBy === headCell.sortLabel
                                    ? props.order
                                    : 'asc'
                            }
                            onClick={() => headerClick(headCell.sortLabel)}
                        >
                            {headCell.label}
                        </TableSortLabel>
                        {headCell.id === 'statusText' && props.statusFilter && (
                            <>{props.statusFilter}</>
                        )}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
