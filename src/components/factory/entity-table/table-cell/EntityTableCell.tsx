import { ReactElement, useCallback, useEffect, useState } from 'react';

import TableCell from '@mui/material/TableCell';

import { HeadCell, RowKeys } from 'components/factory/entity-table/types';
import { pixelToRem } from 'shared/common';
import { color } from 'shared/color';
import UnitCustomTableStatusCell from 'components/factory/entity-table/table-status-cell/EntityTableStatusCell';

interface Props<T> {
    headCells: HeadCell<T>[];
    row: T;
}
export default function EntityTableCell<T>({
    headCells,
    row,
}: Props<T>): ReactElement {
    const [keys, setKeys] = useState<RowKeys[]>([]);

    const createRowKeys = useCallback(() => {
        const ignoredRows: string[] = [];
        headCells.forEach((cell) => {
            ignoredRows.push(cell.id as string);
        });

        let key: keyof typeof row;
        const rowSet: RowKeys[] = [];
        // eslint-disable-next-line
        for (key in row) {
            if (ignoredRows.includes(key)) {
                rowSet.push({
                    k: key as string,
                    v: row[key] as string | number,
                    isNumber: !Number.isNaN(Number(row[key])),
                });
            }
        }

        setKeys(rowSet);
    }, [headCells, row]);

    useEffect(() => {
        createRowKeys();
    }, [createRowKeys]);

    return (
        <>
            {keys.map(({ k, v, isNumber }) => {
                return (
                    <TableCell
                        key={k}
                        component="th"
                        id={`id-${k}`}
                        scope="row"
                        sx={{
                            padding: pixelToRem(10, 16),
                            color: color.fontDark,
                        }}
                        align={isNumber ? 'right' : 'left'}
                    >
                        <UnitCustomTableStatusCell k={k} v={v.toString()} />
                    </TableCell>
                );
            })}
        </>
    );
}
