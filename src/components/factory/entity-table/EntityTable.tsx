import { ReactElement } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';

import EntityTableToolbar from './table-toobar/EntityTableToolbar';
import TableHead from './table-head/EntityTableHead';

import { Template } from 'components/_template/Template';
import EntityTableEmptyRow from 'components/factory/entity-table/table-empty-row/EntityTableEmptyRow';
import TablePaginationCustom from 'components/factory/entity-table/table-pagination/EntityTablePagination';
import { TableProps } from 'components/factory/entity-table/types';
import { pixelToRem } from 'shared/common';
import EntityTableBody from 'components/factory/entity-table/table-body/EntityTableBody';
import { color } from 'shared/color';

export function EntityTable<T>(props: TableProps<T>): ReactElement {
    return (
        <Template>
            <Box
                sx={{ width: '100%', color: color.fontDark }}
                data-testid="table-container"
            >
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
                    <TableContainer sx={{ maxHeight: 'calc(100vh - 260px)' }}>
                        <Table
                            stickyHeader
                            sx={{ minWidth: 750 }}
                            aria-labelledby="tableTitle"
                            size={'small'}
                        >
                            <TableHead {...props} />
                            <EntityTableBody {...props} />
                        </Table>
                    </TableContainer>
                    <TablePaginationCustom {...props} />
                    <EntityTableEmptyRow {...props} />
                </Paper>
            </Box>
        </Template>
    );
}
