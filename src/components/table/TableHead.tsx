import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { HeadCell } from 'src/components/table/types';
import { pixelToRem } from 'src/shared/common';
import { fontSize } from 'src/shared/fonts';

export interface Props<T> {
    headCells: HeadCell<T>[];
}

export default function EnhancedTableHead<T>({
    headCells,
}: Props<T>): JSX.Element {
    return (
        <TableHead>
            <TableRow
                sx={{ backgroundColor: `#ffe3c7`, padding: pixelToRem(10, 16) }}
            >
                {headCells.map((headCell, idx) => (
                    <TableCell
                        key={idx}
                        align={headCell.numeric ? 'right' : 'left'}
                        sx={{
                            fontWeight: 500,
                            fontSize: pixelToRem(fontSize.font17),
                        }}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
