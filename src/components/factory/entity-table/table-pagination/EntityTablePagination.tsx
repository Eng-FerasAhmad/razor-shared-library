import {
    ChangeEvent,
    ReactElement,
    MouseEvent as ReactMouseEvent,
} from 'react';

import TablePagination from '@mui/material/TablePagination';

import { TableProps } from '../types';

import { pixelToRem } from 'shared/common';

export default function EntityTablePagination<T>(
    props: TableProps<T>
): ReactElement {
    if (props.rows.length === 0) return <></>;

    return (
        <TablePagination
            data-testid={'table-pagination'}
            rowsPerPageOptions={[5, 10, 25, 50, 75, 100]}
            component="div"
            count={props.totalResultCounts}
            rowsPerPage={props.pageSize}
            page={props.pageNumber}
            onPageChange={(
                event: ReactMouseEvent<HTMLButtonElement, MouseEvent> | null,
                page: number
            ) => props.handleChangePage(event, page)}
            onRowsPerPageChange={(event: ChangeEvent<HTMLInputElement>) =>
                props.handleChangeRowsPerPage(event)
            }
            sx={{
                borderTop: `${pixelToRem(1)} solid lightgrey`,
                marginTop: `${pixelToRem(-1)}`,
            }}
        />
    );
}
