import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { ReactNode, useMemo } from 'react';
import { Template } from 'src/components/_template/Template';
import { HeadCell } from 'src/components/table/types';
import { stableSort } from 'src/components/table/utils';
import { pixelToRem } from 'src/shared/common';
import TableHead from './TableHead';
import TableToolbar from './TableToolbar';
import useTable from './useTable';
import { color } from 'src/shared/color';

interface Props<T> {
    rows: T[];
    headCells: HeadCell<T>[];
    title: string;
    pageRows: number;
}

export function TableCustom<T>(props: Props<T>): JSX.Element {
    const {
        emptyRows,
        page,
        rowsPerPage,
        handleChangePage,
        handleChangeRowsPerPage,
    } = useTable(props.rows, props.pageRows);

    const visibleRows = useMemo(
        () =>
            stableSort(props.rows).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
            ),
        [page, rowsPerPage, props.rows]
    );

    // eslint-disable-next-line
    const buildCell = (row: any): ReactNode => {
        return Object.keys(row).map((key: string) => {
            if (key === 'rowId' || key === 'id') return;
            // eslint-disable-next-line
            const isNumber = !isNaN(row[key]) || key === 'actions';
            // eslint-disable-next-line
            return (
                <TableCell
                    key={key}
                    component="th"
                    id={`id-${key}`}
                    scope="row"
                    sx={{padding: pixelToRem(10, 16)}}
                    align={isNumber ? 'right' : 'left'}
                >
                    {row[key]}
                </TableCell>
            );
        });
    };

    return (
        <Template>
            <Box sx={{ width: '100%' }}>
                <Paper
                    sx={{
                        width: '100%',
                        mb: 2,
                        border: `${pixelToRem(1)} solid lightGray`,
                    }}
                >
                    <TableToolbar
                        title={props.title}
                    />
                    <TableContainer>
                        <Table
                            sx={{ minWidth: 750 }}
                            aria-labelledby="tableTitle"
                            size={'medium'}
                        >
                            <TableHead
                                headCells={props.headCells}
                            />
                            <TableBody>
                                {visibleRows.map((row: T, index) => {
                                    return (
                                        <TableRow
                                            
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={index}
                                            sx={{
                                                cursor: 'pointer', ":hover": {
                                                    backgroundColor: color.hover
                                            }
                                            }}
                                        >
                                            {buildCell(row)}
                                        </TableRow>
                                    );
                                })}
                                {emptyRows > 0 && (
                                    <TableRow
                                        style={{
                                            height: 53 * emptyRows,
                                        }}
                                    >
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25, 50]}
                        component="div"
                        count={props.rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        sx={{
                            borderTop: `${pixelToRem(2)} solid lightgrey`,
                            marginTop: `${pixelToRem(-1)}`,
                        }}
                    />
                </Paper>
            </Box>
        </Template>
    );
}
