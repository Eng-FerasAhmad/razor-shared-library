import { ReactElement, useState, MouseEvent } from 'react';

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

import * as styles from './styles';

export default function EntityTableBody<T>(props: TableProps<T>): ReactElement {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(
        null
    );

    const handleDlClick = (row: T, index: number): void => {
        if (props.onDlClickRow) props.onDlClickRow(row, index);
    };

    const handleRowClick = (row: T, index: number, event: MouseEvent): void => {
        if ((event.target as HTMLElement).closest('[data-menu-button="true"]'))
            return;
        if (props.onOneClickRow) props.onOneClickRow(row, index);
    };

    const handleMenuClick = (
        event: MouseEvent<HTMLElement>,
        index: number
    ): void => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
        setSelectedRowIndex(index);

        if (props.onOneClickRow) {
            props.onOneClickRow(props.rows[index], index);
        }
    };

    const handleCloseMenu = (): void => {
        setAnchorEl(null);
        setSelectedRowIndex(null);
    };

    const handleMenuItemClick =
        (action?: () => void) => (event: MouseEvent) => {
            event.stopPropagation();
            handleCloseMenu();
            action?.();
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
                    sx={styles.getRowStyle(props.selectedRow === index)}
                >
                    {props.hasAutoId && (
                        <TableCell
                            component="th"
                            scope="row"
                            sx={styles.autoIdCell}
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
                        <Box sx={styles.actionBox}>
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
                                    <MenuItem
                                        onClick={handleMenuItemClick(
                                            props.actionDetails
                                        )}
                                    >
                                        <FormatListBulleted
                                            fontSize="small"
                                            color="primary"
                                            sx={styles.menuIcon}
                                        />
                                        Details
                                    </MenuItem>
                                )}
                                {props.actionEdit && (
                                    <MenuItem
                                        onClick={handleMenuItemClick(
                                            props.actionEdit
                                        )}
                                    >
                                        <Edit
                                            fontSize="small"
                                            color="primary"
                                            sx={styles.menuIcon}
                                        />
                                        Edit
                                    </MenuItem>
                                )}
                                {props.actionDelete && (
                                    <MenuItem
                                        onClick={handleMenuItemClick(
                                            props.actionDelete
                                        )}
                                    >
                                        <Delete
                                            fontSize="small"
                                            color="error"
                                            sx={styles.menuIcon}
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
