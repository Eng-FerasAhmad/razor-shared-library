import TableCell from '@mui/material/TableCell';
import { useCallback, useEffect, useState } from 'react';
import { HeadCell } from 'src/components/table/types';
import { pixelToRem } from 'src/shared/common';

interface RowKeys {
    k: string;
    v: string | number;
    isNumber: boolean;
}

interface Props<T> {
    headCells: HeadCell<T>[];
    row: T;
}
export default function TableCellCustom<T>({
    headCells,
    row,
}: Props<T>): JSX.Element {
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
            {keys.map((key) => {
                return (
                    <TableCell
                        key={key.k}
                        component="th"
                        id={`id-${key}`}
                        scope="row"
                        sx={{ padding: pixelToRem(16) }}
                        align={key.isNumber ? 'right' : 'left'}
                    >
                        {key.v}
                    </TableCell>
                );
            })}
        </>
    );
}
