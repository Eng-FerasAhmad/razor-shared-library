import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { ReactElement, useState } from 'react';
import { TableProps } from './types';
import TableCellCustom from 'src/components/table/TableCell';
import { color } from 'src/shared/color';
import { pixelToRem } from 'src/shared/common';

export default function TableBodyCustom<T>(props: TableProps<T>): ReactElement {
    const [selectedIndex, setSelectedIndex] = useState<number>(
        props.selectedRow
    );

    const handleDlClick = (row: T, index: number): void => {
        props.onDlClickRow(row, index);
        setSelectedIndex(index);
    };

    const handleOneClick = (row: T, index: number): void => {
        props.onOneClickRow(row, index);
        setSelectedIndex(index);
    };

    return (
        <TableBody>
            {props.rows.map((row: T, index) => {
                return (
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
                            ':hover': {
                                backgroundColor: color.hover,
                            },
                        }}
                    >
                        <TableCell
                            component="th"
                            scope="row"
                            sx={{ padding: pixelToRem(16) }}
                            align={'left'}
                        >
                            {index + 1 + props.pageSize * props.pageNumber}
                        </TableCell>
                        <TableCellCustom
                            headCells={props.headCells}
                            row={row}
                        />
                    </TableRow>
                );
            })}
        </TableBody>
    );
}
