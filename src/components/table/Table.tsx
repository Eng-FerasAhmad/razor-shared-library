import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableBodyCustom from './TableBody';
import TableHead from './TableHead';
import TableToolbar from './TableToolbar';
import { Template } from 'src/components/_template/Template';
import TableEmptyRow from 'src/components/table/TableEmptyRow';
import TablePaginationCustom from 'src/components/table/TablePagination';
import { TableProps } from 'src/components/table/types';
import { pixelToRem } from 'src/shared/common';
import { ReactElement } from 'react';
import { color } from 'shared/color';

export function TableCustom<T>(props: TableProps<T>): ReactElement {
    return (
        <Template>
            <Box
                sx={{ width: '100%', color: color.secondary.dark }}
                data-testid="table-container"
            >
                <Paper
                    sx={{
                        width: '100%',
                        mb: 2,
                        border: `${pixelToRem(1)} solid lightGray`,
                        color: 'inherit',
                        boxShadow: `none`,
                        borderRadius: `${!props.isCustomTable ? 0 : 10}`,
                        borderLeftWidth: `${props.noBorderLeft ? 0 : 1}`,
                        borderTopWidth: `${props.noBorderTop ? 0 : 1}`,
                        borderRightWidth: `${props.noBorderRight ? 0 : 1}`,
                    }}
                >
                    <TableToolbar
                        headerTools={props.headerTools}
                        data-testid="table-toolbar"
                    />
                    <TableContainer>
                        <Table
                            sx={{ minWidth: 750 }}
                            aria-labelledby="tableTitle"
                            size={'medium'}
                        >
                            {props.rows.length === 0 && (
                                <TableEmptyRow caption={props.noDataCaption} />
                            )}
                            <TableHead {...props} />
                            <TableBodyCustom {...props} />
                        </Table>
                    </TableContainer>
                    <TablePaginationCustom {...props} />
                </Paper>
            </Box>
        </Template>
    );
}
