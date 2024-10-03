import EntityTablePagination from 'components/factory/entity-table/table-pagination/EntityTablePagination';
import {
    mockHeadCells,
    mockRows,
} from 'components/factory/entity-table/mockTableProps';
import { Order } from 'components/factory/entity-table/types';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('EntityTablePagination', () => {
    const mockHandleChangePage = jest.fn();
    const mockHandleChangeRowsPerPage = jest.fn();

    const props = {
        totalResultCounts: 100,
        pageSize: 10,
        pageNumber: 0,
        handleChangePage: mockHandleChangePage,
        handleChangeRowsPerPage: mockHandleChangeRowsPerPage,
        rows: mockRows,
        headCells: mockHeadCells,
        headerTools: <>Title</>,
        selectedRow: -1,
        noDataCaption: '',
        orderBy: '',
        order: 'asc' as Order,
        resetSort: jest.fn(),
        handleHeaderClick: jest.fn(),
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders pagination with correct props', () => {
        render(<EntityTablePagination {...props} />);

        const pagination = screen.getByTestId('table-pagination');
        expect(pagination).toBeInTheDocument();

        const rowsPerPageSelect = screen.getByLabelText('Rows per page:');
        expect(rowsPerPageSelect).toBeInTheDocument();
    });

    it('handles page change', () => {
        render(<EntityTablePagination {...props} />);

        const nextPageButton = screen.getByLabelText('Go to next page');
        fireEvent.click(nextPageButton);

        expect(mockHandleChangePage).toHaveBeenCalledTimes(1);
        expect(mockHandleChangePage).toHaveBeenCalledWith(expect.anything(), 1);
    });

    it('handles rows per page change', () => {
        render(<EntityTablePagination {...props} />);

        const rowsPerPageSelect = screen.getByLabelText('Rows per page:');
        fireEvent.mouseDown(rowsPerPageSelect); // Open the select menu

        const optionToSelect = screen.getByText('25'); // Change to the desired option
        fireEvent.click(optionToSelect); // Select the option

        expect(mockHandleChangeRowsPerPage).toHaveBeenCalledTimes(1);
        expect(mockHandleChangeRowsPerPage).toHaveBeenCalledWith(
            expect.anything()
        );
    });
});
