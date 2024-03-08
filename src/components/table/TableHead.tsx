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
            <TableRow sx={{ color: `#00a894` }}>
                {headCells.map((headCell, idx) => (
                    <TableCell
                        key={idx}
                        align={headCell.numeric ? 'right' : 'left'}
                        sx={{
                            fontSize: pixelToRem(fontSize.font17),
                            padding: pixelToRem(10, 16),
                            color: `#009695`,
                        }}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
