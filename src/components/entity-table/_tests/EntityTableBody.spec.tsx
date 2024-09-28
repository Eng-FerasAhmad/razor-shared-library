import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EntityTableBody from 'components/entity-table/EntityTableBody';
import {
    mockHeadCells,
    mockRows,
} from 'components/entity-table/_tests/mockTableProps';
import { Order } from 'components/entity-table/types';

describe('EntityTableBody', () => {
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

    it('renders the rows correctly', () => {
        render(<EntityTableBody {...props} />);

        expect(screen.getByTestId('table-body')).toBeInTheDocument();
    });
});
