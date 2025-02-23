import { ReactElement } from 'react';

import { Box, TableSortLabel } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AutoFixHigh from '@mui/icons-material/AutoFixHigh';
import Autorenew from '@mui/icons-material/Autorenew';

import { TableProps } from '../types';

import { color } from 'shared/color';
import { pixelToRem } from 'shared/common';
import { fontSize } from 'shared/fonts';
import { ToolTipCustom } from 'components/data-display/tooltip/ToolTip';

export default function EntityTableHead<T>(props: TableProps<T>): ReactElement {
    const resetSortHandler = (): void => {
        if (props?.resetSort) {
            props.resetSort();
        }
    };

    const headerClick = (sortLabel: string): void => {
        props.handleHeaderClick(sortLabel);
    };

    return (
        <TableHead data-testid={'table-head'}>
            <TableRow
                sx={{ color: color.primary.main, paddingRight: pixelToRem(16) }}
            >
                {props.hasAutoId && (
                    <TableCell
                        align={'center'}
                        data-testid={'reset-button'}
                        sx={{
                            fontSize: pixelToRem(fontSize.font17),
                            padding: pixelToRem(10, 16),
                            color: color.primary.main,
                            cursor: 'pointer',
                            width: '50px',
                        }}
                        onClick={resetSortHandler}
                    >
                        <ToolTipCustom
                            title={'Clear all Filter, sort and Search params'}
                        >
                            <Autorenew />
                        </ToolTipCustom>
                    </TableCell>
                )}
                {props.headCells.map((headCell, idx) => (
                    <TableCell
                        key={idx}
                        align={headCell.numeric ? 'right' : 'left'}
                        sx={{
                            fontSize: pixelToRem(fontSize.font16),
                            padding: pixelToRem(10, 16),
                            color:
                                props.color === 'info'
                                    ? color.info.main
                                    : color.primary.main,
                            cursor: 'pointer',
                            width: headCell.width,
                        }}
                    >
                        {headCell.sortable ? (
                            <TableSortLabel
                                data-testid={'table-sort-label'}
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
                        ) : (
                            <Box
                                data-testid={'table-no-sort-label'}
                                onClick={() => headerClick(headCell.sortLabel)}
                            >
                                {headCell.label}
                            </Box>
                        )}
                        {headCell.id === 'statusText' && props.statusFilter && (
                            <>{props.statusFilter}</>
                        )}
                    </TableCell>
                ))}
                <TableCell
                    data-testid="reset-button"
                    align={'right'}
                    sx={{
                        fontSize: pixelToRem(fontSize.font17),
                        padding: pixelToRem(10, 16),
                        color: color.primary.main,
                        width: '60px',
                    }}
                    onClick={resetSortHandler}
                >
                    <AutoFixHigh fontSize={'small'} color={props.color} />
                </TableCell>
            </TableRow>
        </TableHead>
    );
}
