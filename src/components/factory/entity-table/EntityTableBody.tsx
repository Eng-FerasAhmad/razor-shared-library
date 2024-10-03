import { ReactElement, useState } from 'react';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Edit, FormatListBulleted } from '@mui/icons-material';

import TableCellCustom from 'components/factory/entity-table/EntityTableCell';
import { color } from 'shared/color';
import { pixelToRem } from 'shared/common';
import { DeleteIcon, MenuItems, MoreHorizIcon } from 'src/index';
import { MenuCustom } from 'components/navigation/menu/Menu';

import { TableProps } from './types';

export default function EntityTableBody<T>(props: TableProps<T>): ReactElement {
    const [itemsMenu, setItemsMenu] = useState<MenuItems[]>([]);
    const [selectedIndex, setSelectedIndex] = useState<number>(
        props.selectedRow
    );

    const handleDlClick = (row: T, index: number): void => {
        if (props.onDlClickRow) {
            props.onDlClickRow(row, index);
        }
        setSelectedIndex(index);
    };

    const handleOneClick = (row: T, index: number): void => {
        if (props.onOneClickRow) {
            props.onOneClickRow(row, index);
        }
        setSelectedIndex(index);

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

        // Update the itemsMenu state
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
                            selectedIndex === index ? color.hover : '',
                        cursor: 'pointer',
                        ':hover': { backgroundColor: color.hover },
                    }}
                >
                    <TableCell
                        component="th"
                        scope="row"
                        sx={{ padding: pixelToRem(16) }}
                        align="center"
                    >
                        {index + 1 + props.pageSize * props.pageNumber}
                    </TableCell>
                    <TableCellCustom headCells={props.headCells} row={row} />
                    <TableCell
                        component="th"
                        scope="row"
                        sx={{ padding: pixelToRem(16) }}
                        align="right"
                    >
                        <MenuCustom
                            items={itemsMenu}
                            position="bottom-end"
                            data-testid={'more-horiz-icon'}
                            anchor={
                                <MoreHorizIcon
                                    fontSize="medium"
                                    color="primary"
                                />
                            }
                        />
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
}
