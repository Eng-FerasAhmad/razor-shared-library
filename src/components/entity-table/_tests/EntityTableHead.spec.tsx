import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EntityTableHead from 'components/entity-table/EntityTableHead';
import {
    mockHeadCells,
    mockRows,
} from 'components/entity-table/_tests/mockTableProps';
import { Order } from 'components/entity-table/types';

describe('EntityTableHead', () => {
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

    it('renders the table header correctly', () => {
        render(<EntityTableHead {...props} />);

        // Check for table headers
        expect(screen.getByTestId('table-head')).toBeInTheDocument();
    });
});
