import { ReactElement } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';

import { Template } from 'components/_template/Template';
import EntityTableEmptyRow from 'components/factory/entity-table/EntityTableEmptyRow';
import TablePaginationCustom from 'components/factory/entity-table/EntityTablePagination';
import { TableProps } from 'components/factory/entity-table/types';
import { pixelToRem } from 'shared/common';
import EntityTableBody from 'components/factory/entity-table/EntityTableBody';

import EntityTableToolbar from './EntityTableToolbar';
import TableHead from './EntityTableHead';

export function EntityTable<T>(props: TableProps<T>): ReactElement {
    return (
        <Template>
            <Box sx={{ width: '100%' }} data-testid="table-container">
                <Paper
                    sx={{
                        width: '100%',
                        mb: 2,
                        border: `${pixelToRem(1)} solid lightGray`,
                        color: 'inherit',
                        boxShadow: `none`,
                        borderRadius: `${!props.borderRadius ? 0 : 10}`,
                    }}
                >
                    <EntityTableToolbar
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
                                <EntityTableEmptyRow
                                    caption={props.noDataCaption}
                                />
                            )}
                            <TableHead {...props} />
                            <EntityTableBody {...props} />
                        </Table>
                    </TableContainer>
                    <TablePaginationCustom {...props} />
                </Paper>
            </Box>
        </Template>
    );
}
