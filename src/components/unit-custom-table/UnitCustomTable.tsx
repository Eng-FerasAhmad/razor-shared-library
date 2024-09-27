import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableBodyCustom from './UnitCustomTableBody';
import TableHead from './UnitCustomTableHead';
import UnitCustomTableToolbar from './UnitCustomTableToolbar';
import { Template } from 'src/components/_template/Template';
import UnitCustomTableEmptyRow from 'components/unit-custom-table/UnitCustomTableEmptyRow';
import TablePaginationCustom from 'components/unit-custom-table/UnitCustomTablePagination';
import { TableProps } from 'components/unit-custom-table/types';
import { pixelToRem } from 'src/shared/common';
import { ReactElement } from 'react';

export function UnitCustomTable<T>(props: TableProps<T>): ReactElement {
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
                    <UnitCustomTableToolbar
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
                                <UnitCustomTableEmptyRow
                                    caption={props.noDataCaption}
                                />
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
