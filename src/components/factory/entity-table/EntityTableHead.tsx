import { ReactElement } from 'react';

import { TableSortLabel } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AutoFixHigh from '@mui/icons-material/AutoFixHigh';
import Autorenew from '@mui/icons-material/Autorenew';

import { color } from 'shared/color';
import { pixelToRem } from 'shared/common';
import { fontSize } from 'shared/fonts';

import { TableProps } from './types';

export default function EntityTableHead<T>(props: TableProps<T>): ReactElement {
    const resetSortHandler = (): void => {
        props.resetSort();
    };

    const headerClick = (sortLabel: string): void => {
        props.handleHeaderClick(sortLabel);
    };

    return (
        <TableHead data-testid={'table-head'}>
            <TableRow
                sx={{ color: color.primary.main, paddingRight: pixelToRem(16) }}
            >
                <TableCell
                    align={'center'}
                    sx={{
                        fontSize: pixelToRem(fontSize.font17),
                        padding: pixelToRem(10, 16),
                        color: color.primary.main,
                        cursor: 'pointer',
                        width: '50px',
                    }}
                    onClick={resetSortHandler}
                >
                    <Autorenew />
                </TableCell>
                {props.headCells.map((headCell, idx) => (
                    <TableCell
                        key={idx}
                        align={headCell.numeric ? 'right' : 'left'}
                        sx={{
                            fontSize: pixelToRem(fontSize.font16),
                            padding: pixelToRem(10, 16),
                            color: color.primary.main,
                            cursor: 'pointer',
                            width: headCell.width,
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
                <TableCell
                    align={'right'}
                    sx={{
                        fontSize: pixelToRem(fontSize.font17),
                        padding: pixelToRem(10, 16),
                        color: color.primary.main,
                        width: '60px',
                    }}
                    onClick={resetSortHandler}
                >
                    <AutoFixHigh fontSize={'small'} color={'primary'} />
                </TableCell>
            </TableRow>
        </TableHead>
    );
}
