import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { ReactNode, useMemo, useState } from 'react';
import TableHead from './TableHead';
import TableToolbar from './TableToolbar';
import useTable from './useTable';
import { Template } from 'src/components/_template/Template';
import { HeadCell } from 'src/components/table/types';
import { stableSort } from 'src/components/table/utils';
import { color } from 'src/shared/color';
import { pixelToRem } from 'src/shared/common';

interface Props<T> {
    rows: T[];
    headCells: HeadCell<T>[];
    headerTools: ReactNode;
    pageRows: number;
    selectedRow: number;
    onClickRow: (row: T, selected: number) => void;
}

export function TableCustom<T>(props: Props<T>): JSX.Element {
    const [selectedIndex, setSelectedIndex] = useState<number>(
        props.selectedRow
    );

    const {
        emptyRows,
        page,
        rowsPerPage,
        handleChangePage,
        handleChangeRowsPerPage,
    } = useTable(props.rows, props.pageRows);

    const handleDlClick = (row: T, index: number): void => {
        props.onClickRow(row, index);
        setSelectedIndex(index);
    };

    const visibleRows = useMemo(
        () =>
            stableSort(props.rows).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
            ),
        [page, rowsPerPage, props.rows]
    );

    const createIgnoreCells = (): string[] => {
        const ignoredRows: string[] = [];
        props.headCells.forEach((cell) => {
            ignoredRows.push(cell.id as string);
        });

        return ignoredRows;
    };

    // eslint-disable-next-line
    const buildCell = (row: any): ReactNode => {
        return Object.keys(row).map((key: string): ReactNode => {
            if (!createIgnoreCells().includes(key)) return undefined;
            const isNumber =
                !Number.isNaN(Number(row[key])) || key === 'actions';
            return (
                <TableCell
                    key={key}
                    component="th"
                    id={`id-${key}`}
                    scope="row"
                    sx={{ padding: pixelToRem(16) }}
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
                    <TableToolbar headerTools={props.headerTools} />
                    <TableContainer>
                        <Table
                            sx={{ minWidth: 750 }}
                            aria-labelledby="tableTitle"
                            size={'medium'}
                        >
                            <TableHead headCells={props.headCells} />
                            <TableBody>
                                {visibleRows.map((row: T, index) => {
                                    return (
                                        <TableRow
                                            role="checkbox"
                                            onDoubleClick={() =>
                                                handleDlClick(row, index)
                                            }
                                            tabIndex={-1}
                                            key={index}
                                            sx={{
                                                borderLeft:
                                                    selectedIndex === index
                                                        ? `2px solid ${color.primary.main}`
                                                        : '',
                                                backgroundColor:
                                                    selectedIndex === index
                                                        ? color.hover
                                                        : '',
                                                cursor: 'pointer',
                                                ':hover': {
                                                    backgroundColor:
                                                        color.hover,
                                                },
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
