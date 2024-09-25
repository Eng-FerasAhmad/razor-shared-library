import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { ReactElement, useState } from 'react';
import { TableProps } from './types';
import TableCellCustom from 'src/components/table/TableCell';
import { color } from 'src/shared/color';
import { pixelToRem } from 'src/shared/common';
import { DeleteIcon, MenuItems, MoreHorizIcon } from 'src/index.ts';
import { MenuCustom } from 'components/menu/Menu.tsx';
import { Edit, FormatListBulleted } from '@mui/icons-material';

export default function TableBodyCustom<T>(props: TableProps<T>): ReactElement {
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
        <TableBody>
            {props.rows.map((row: T, index) => (
                <TableRow
                    role="checkbox"
                    onDoubleClick={() => handleDlClick(row, index)}
                    onClick={() => handleOneClick(row, index)}
                    tabIndex={-1}
                    key={index}
                    sx={{
                        borderLeft:
                            selectedIndex === index
                                ? `2px solid ${color.primary.main}`
                                : '',
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
                        align="left"
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
