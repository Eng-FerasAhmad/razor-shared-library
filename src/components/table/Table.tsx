import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { ReactNode, useMemo } from 'react';
import TableHead from './TableHead';
import TableToolbar from './TableToolbar';
import useTable from './useTable';
import { HeadCell, RowProps } from 'src/components/table/types';
import { stableSort } from 'src/components/table/utils';

interface Props<T> {
    rows: T[];
    headCells: HeadCell<T>[];
}

export function TableCustom<T extends RowProps>(props: Props<T>): JSX.Element {
    const {
        isSelected,
        emptyRows,
        selected,
        page,
        rowsPerPage,
        handleSelectAllClick,
        handleClick,
        handleChangePage,
        handleChangeRowsPerPage,
    } = useTable(props.rows);

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
            if (key === 'id') return;
            const isNumber = !isNaN(row[key]);
            return (
                <TableCell
                    key={key}
                    component="th"
                    id={`id-${key}`}
                    scope="row"
                    padding={isNumber ? 'normal' : 'none'}
                    align={isNumber ? 'right' : 'left'}
                >
                    {row[key]}
                </TableCell>
            );
        });
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableToolbar numSelected={selected.length} />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={'medium'}
                    >
                        <TableHead
                            numSelected={selected.length}
                            onSelectAllClick={handleSelectAllClick}
                            rowCount={props.rows.length}
                            headCells={props.headCells}
                        />
                        <TableBody>
                            {visibleRows.map((row: T, index) => {
                                const isItemSelected = isSelected(
                                    row.id as number
                                );
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) =>
                                            handleClick(event, row.id as number)
                                        }
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.id}
                                        selected={isItemSelected}
                                        sx={{ cursor: 'pointer' }}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                color="primary"
                                                checked={isItemSelected}
                                                inputProps={{
                                                    'aria-labelledby': labelId,
                                                }}
                                            />
                                        </TableCell>
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
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={props.rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}
