import { ReactElement, useState } from 'react';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {
    Edit,
    FormatListBulleted,
    MoreHoriz,
    Delete,
} from '@mui/icons-material';
import { Box, Menu, MenuItem, IconButton } from '@mui/material';

import { TableProps } from '../types';

import TableCellCustom from 'components/factory/entity-table/table-cell/EntityTableCell';
import { color } from 'shared/color';
import { pixelToRem } from 'shared/common';

export default function EntityTableBody<T>(props: TableProps<T>): ReactElement {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(
        null
    );

    const handleDlClick = (row: T, index: number): void => {
        if (props.onDlClickRow) {
            props.onDlClickRow(row, index);
        }
    };

    const handleRowClick = (
        row: T,
        index: number,
        event: React.MouseEvent
    ): void => {
        if (
            (event.target as HTMLElement).closest('[data-menu-button="true"]')
        ) {
            return;
        }
        if (props.onOneClickRow) {
            props.onOneClickRow(row, index);
        }
    };

    const handleMenuClick = (
        event: React.MouseEvent<HTMLElement>,
        index: number
    ): void => {
        setAnchorEl(event.currentTarget);
        setSelectedRowIndex(index);
    };

    const handleCloseMenu = (): void => {
        setAnchorEl(null);
        setSelectedRowIndex(null);
    };

    return (
        <TableBody data-testid="table-body">
            {props.rows.map((row: T, index) => (
                <TableRow
                    role="row"
                    onDoubleClick={() => handleDlClick(row, index)}
                    onClick={(event) => handleRowClick(row, index, event)}
                    tabIndex={-1}
                    key={index}
                    sx={{
                        backgroundColor:
                            props.selectedRow === index ? color.hover : '',
                        cursor: 'pointer',
                        ':hover': { backgroundColor: color.hover },
                        '&:last-child td, &:last-child th': { border: 0 },
                    }}
                >
                    {props.hasAutoId && (
                        <TableCell
                            component="th"
                            scope="row"
                            sx={{ padding: pixelToRem(10, 16) }}
                            align="center"
                        >
                            {index + 1 + props.pageSize * props.pageNumber}
                        </TableCell>
                    )}
                    <TableCellCustom headCells={props.headCells} row={row} />
                    <TableCell
                        data-testid="table-cell-action-menu"
                        component="th"
                        scope="row"
                        align="right"
                    >
                        <Box
                            sx={{
                                borderRadius: '50%',
                                width: '30px',
                                height: '30px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                '&:hover': { backgroundColor: '#e6e6e6' },
                            }}
                        >
                            <IconButton
                                size="small"
                                data-menu-button="true"
                                onClick={(e) => handleMenuClick(e, index)}
                            >
                                <MoreHoriz
                                    fontSize="medium"
                                    color={props.color}
                                />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={
                                    Boolean(anchorEl) &&
                                    selectedRowIndex === index
                                }
                                onClose={handleCloseMenu}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                            >
                                {props.actionDetails && (
                                    <MenuItem onClick={props.actionDetails}>
                                        <FormatListBulleted
                                            fontSize="small"
                                            color="primary"
                                            sx={{ marginRight: 1 }}
                                        />
                                        Details
                                    </MenuItem>
                                )}
                                {props.actionEdit && (
                                    <MenuItem onClick={props.actionEdit}>
                                        <Edit
                                            fontSize="small"
                                            color="primary"
                                            sx={{ marginRight: 1 }}
                                        />
                                        Edit
                                    </MenuItem>
                                )}
                                {props.actionDelete && (
                                    <MenuItem onClick={props.actionDelete}>
                                        <Delete
                                            fontSize="small"
                                            color="error"
                                            sx={{ marginRight: 1 }}
                                        />
                                        Delete
                                    </MenuItem>
                                )}
                            </Menu>
                        </Box>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
}
