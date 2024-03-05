import { ChangeEvent, useState } from 'react';

interface Props {
    emptyRows: number;
    page: number;
    rowsPerPage: number;
    handleChangePage: (_event: unknown, newPage: number) => void;
    handleChangeRowsPerPage: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function useTable<T>(rows: T[]): Props {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (_event: unknown, newPage: number): void => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: ChangeEvent<HTMLInputElement>
    ): void => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return {
        emptyRows,
        page,
        rowsPerPage,
        handleChangePage,
        handleChangeRowsPerPage,
    };
}
