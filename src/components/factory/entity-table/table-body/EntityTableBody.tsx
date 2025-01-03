import { ReactElement, useState } from 'react';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Edit, FormatListBulleted } from '@mui/icons-material';
import { Box } from '@mui/material';

import { TableProps } from '../types';

import TableCellCustom from 'components/factory/entity-table/table-cell/EntityTableCell';
import { color } from 'shared/color';
import { pixelToRem } from 'shared/common';
import { DeleteIcon, MenuItems, MoreHorizIcon } from 'src/index';
import { MenuCustom } from 'components/navigation/menu/Menu';

export default function EntityTableBody<T>(props: TableProps<T>): ReactElement {
    const [itemsMenu, setItemsMenu] = useState<MenuItems[]>([]);

    const handleDlClick = (row: T, index: number): void => {
        if (props.onDlClickRow) {
            props.onDlClickRow(row, index);
        }
    };

    const handleOneClick = (row: T, index: number): void => {
        if (props.onOneClickRow) {
            props.onOneClickRow(row, index);
        }

        // Construct the new menu items based on props
        const newItemsMenu: MenuItems[] = [];
        if (props.actionDetails) {
            newItemsMenu.push({
                title: 'Details',
                icon: (
                    <FormatListBulleted fontSize={'small'} color={'primary'} />
                ),
                action: props.actionDetails,
            });
        }

        if (props.actionEdit) {
            newItemsMenu.push({
                title: 'Edit',
                icon: <Edit fontSize={'small'} color={'primary'} />,
                action: props.actionEdit,
            });
        }
        if (props.actionDelete) {
            newItemsMenu.push({
                title: 'Delete',
                icon: <DeleteIcon fontSize={'small'} color={'error'} />,
                action: props.actionDelete,
            });
        }

        // Update the itemsMenu state and toggle menu index
        setItemsMenu(newItemsMenu);
    };

    return (
        <TableBody data-testid={'table-body'}>
            {props.rows.map((row: T, index) => (
                <TableRow
                    role="row"
                    onDoubleClick={() => handleDlClick(row, index)}
                    onClick={() => handleOneClick(row, index)}
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
                            <MenuCustom
                                items={itemsMenu}
                                position="bottom-end"
                                data-testid={'more-horiz-icon'}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                anchor={
                                    <MoreHorizIcon
                                        fontSize="medium"
                                        color={props.color}
                                    />
                                }
                            />
                        </Box>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
}
