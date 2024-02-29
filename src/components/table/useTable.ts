import { ChangeEvent, MouseEvent, useState } from 'react';
import { RowProps } from 'src/components/table/types';

interface Props {
    isSelected: (id: number) => boolean;
    emptyRows: number;
    selected: readonly number[];
    page: number;
    rowsPerPage: number;
    handleSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void;
    handleClick: (_event: MouseEvent<unknown>, id: number) => void;
    handleChangePage: (_event: unknown, newPage: number) => void;
    handleChangeRowsPerPage: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function useTable<T extends RowProps>(rows: T[]): Props {
    const [selected, setSelected] = useState<readonly number[]>([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleSelectAllClick = (
        event: ChangeEvent<HTMLInputElement>
    ): void => {
        if (event.target.checked) {
            const newSelected = rows.map((n: T) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (_event: MouseEvent<unknown>, id: number): void => {
        const selectedIndex = selected.indexOf(id);
        let newSelected: readonly number[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (_event: unknown, newPage: number): void => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: ChangeEvent<HTMLInputElement>
    ): void => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (id: number) => selected.indexOf(id) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return {
        isSelected,
        emptyRows,
        selected,
        page,
        rowsPerPage,
        handleSelectAllClick,
        handleClick,
        handleChangePage,
        handleChangeRowsPerPage,
    };
}
