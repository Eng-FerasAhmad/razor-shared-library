import EntityTableBody from 'components/factory/entity-table/EntityTableBody';
import {
    mockHeadCells,
    mockRows,
} from 'components/factory/entity-table/_tests/mockTableProps';
import { Order } from 'components/factory/entity-table/types';

import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('EntityTableBody', () => {
    const mockHandleChangePage = jest.fn();
    const mockHandleChangeRowsPerPage = jest.fn();
    const mockOnDlClickRow = jest.fn();
    const mockOnOneClickRow = jest.fn();

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
        onDlClickRow: mockOnDlClickRow,
        onOneClickRow: mockOnOneClickRow,
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders the rows correctly', () => {
        render(<EntityTableBody {...props} />);

        expect(screen.getByTestId('table-body')).toBeInTheDocument();
    });

    it('triggers onDoubleClick and onClick handlers', () => {
        render(<EntityTableBody {...props} selectedRow={0} />);
        const row = screen.getAllByRole('row')[0];
        fireEvent.doubleClick(row);
        expect(mockOnDlClickRow).toHaveBeenCalledWith(mockRows[0], 0);
        fireEvent.click(row);
        expect(mockOnOneClickRow).toHaveBeenCalledWith(mockRows[0], 0);
    });
});
