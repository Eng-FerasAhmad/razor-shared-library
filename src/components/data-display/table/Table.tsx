import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Template } from 'components/_template/Template';

interface GenericTableProps<T> {
    columns: {
        id: keyof T;
        label: string;
        align?: 'left' | 'center' | 'right';
    }[];
    data: T[];
}

export const TableCustom = <T extends object>({
    columns,
    data,
}: GenericTableProps<T>) => {
    return (
        <Template>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="generic table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column, i) => (
                                <TableCell
                                    key={i}
                                    align={column.align || 'left'}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                {columns.map((column, i) => (
                                    <TableCell
                                        key={i}
                                        align={column.align || 'left'}
                                    >
                                        <>{row[column.id]}</>
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Template>
    );
};
