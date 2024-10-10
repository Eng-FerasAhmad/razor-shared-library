import { ReactElement, useState } from 'react';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Edit, FormatListBulleted } from '@mui/icons-material';

import { TableProps } from '../types';

import TableCellCustom from 'components/factory/entity-table/table-cell/EntityTableCell';
import { color } from 'shared/color';
import { pixelToRem } from 'shared/common';
import { DeleteIcon, MenuItems, MoreHorizIcon } from 'src/index';
import { MenuCustom } from 'components/navigation/menu/Menu';

export default function EntityTableBody<T>(props: TableProps<T>): ReactElement {
    const [itemsMenu, setItemsMenu] = useState<MenuItems[]>([]);
    const [visibleMenuRow, setVisibleMenuRow] = useState<number | null>(null);
    const [hoveredRow, setHoveredRow] = useState<number | null>(null);

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

        // Update the itemsMenu state
        setItemsMenu(newItemsMenu);
        setVisibleMenuRow(index); // Set the clicked row as the visible menu row
    };

    const handleMenuClick = (event: React.MouseEvent, index: number) => {
        event.stopPropagation(); // Prevent row click from triggering when interacting with the menu
        setVisibleMenuRow(index); // Ensure the menu stays visible for the clicked row
    };

    const handleRowHover = (index: number) => {
        setHoveredRow(index);
    };

    const handleRowLeave = () => {
        setHoveredRow(null);
    };

    return (
        <TableBody data-testid={'table-body'}>
            {props.rows.map((row: T, index) => (
                <TableRow
                    role="row"
                    onDoubleClick={() => handleDlClick(row, index)}
                    onClick={() => handleOneClick(row, index)}
                    onMouseEnter={() => handleRowHover(index)}
                    onMouseLeave={handleRowLeave}
                    tabIndex={-1}
                    key={index}
                    sx={{
                        backgroundColor:
                            props.selectedRow === index ? color.hover : '',
                        cursor: 'pointer',
                        ':hover': { backgroundColor: color.hover },
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
                        sx={{ padding: pixelToRem(10, 16) }}
                        align="right"
                        onClick={(event) => handleMenuClick(event, index)} // Prevent row click
                    >
                        <MenuCustom
                            items={itemsMenu}
                            position="bottom-end"
                            data-testid={'more-horiz-icon'}
                            style={{
                                visibility:
                                    visibleMenuRow === index ||
                                    hoveredRow === index
                                        ? 'visible'
                                        : 'hidden',
                            }}
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
