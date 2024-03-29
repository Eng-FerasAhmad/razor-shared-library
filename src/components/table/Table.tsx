import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { ChangeEvent, ReactNode, useState } from 'react';
import { AlertCustom } from '../alert/Alert';
import TableHead from './TableHead';
import TableToolbar from './TableToolbar';
import { Template } from 'src/components/_template/Template';
import { HeadCell, Order } from 'src/components/table/types';
import { color } from 'src/shared/color';
import { pixelToRem } from 'src/shared/common';

interface Props<T> {
    rows: T[];
    headCells: HeadCell<T>[];
    headerTools: ReactNode;
    pageSize: number;
    totalResultCounts: number;
    pageNumber: number;
    selectedRow: number;
    noDataCaption: string;
    orderBy: string;
    order: Order;
    resetSort: () => void;
    handleHeaderClick: (label: string) => void;
    onClickRow: (row: T, selected: number) => void;
    handleChangePage: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
        page: number
    ) => void;
    handleChangeRowsPerPage: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function TableCustom<T>(props: Props<T>): JSX.Element {
    const [selectedIndex, setSelectedIndex] = useState<number>(
        props.selectedRow
    );

    const handleDlClick = (row: T, index: number): void => {
        props.onClickRow(row, index);
        setSelectedIndex(index);
    };

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

    const noDataRow = (): ReactNode => {
        return (
            <caption>
                <AlertCustom color="info" text={props.noDataCaption} />
            </caption>
        );
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
                            {props.rows.length === 0 && noDataRow()}
                            <TableHead
                                headCells={props.headCells}
                                handleHeaderClick={props.handleHeaderClick}
                                resetSort={props.resetSort}
                                order={props.order}
                                orderBy={props.orderBy}
                            />
                            <TableBody>
                                {props.rows.map((row: T, index) => {
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
                                            <TableCell
                                                component="th"
                                                scope="row"
                                                sx={{ padding: pixelToRem(16) }}
                                                align={'left'}
                                            >
                                                {index + 1}
                                            </TableCell>
                                            {buildCell(row)}
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25, 50, 75, 100]}
                        component="div"
                        count={props.totalResultCounts}
                        rowsPerPage={props.pageSize}
                        page={props.pageNumber}
                        onPageChange={(
                            event: React.MouseEvent<
                                HTMLButtonElement,
                                MouseEvent
                            > | null,
                            page: number
                        ) => props.handleChangePage(event, page)}
                        onRowsPerPageChange={(
                            event: ChangeEvent<HTMLInputElement>
                        ) => props.handleChangeRowsPerPage(event)}
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
