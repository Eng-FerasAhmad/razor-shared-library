import { EntityTable } from 'components/factory/entity-table/EntityTable';
import {
    mockHeadCells,
    mockRows,
} from 'components/factory/entity-table/_tests/mockTableProps';
import { Order } from 'components/factory/entity-table/types';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('EntityTable', () => {
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
        noDataCaption: 'No data available',
        orderBy: '',
        order: 'asc' as Order,
        resetSort: jest.fn(),
        handleHeaderClick: jest.fn(),
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders the table with the correct header tools', () => {
        render(<EntityTable {...props} />);

        expect(screen.getByText('Title')).toBeInTheDocument();
    });

    it('renders an empty row when there are no data rows', () => {
        render(<EntityTable {...props} rows={[]} />);

        expect(screen.getByText('No data available')).toBeInTheDocument();
    });

    it('renders the table container', () => {
        render(<EntityTable {...props} />);

        const tableContainer = screen.getByTestId('table-container');
        expect(tableContainer).toBeInTheDocument();
    });

    it('renders the toolbar', () => {
        render(<EntityTable {...props} />);

        const tableToolbar = screen.getByTestId('entity-table-toolbar');
        expect(tableToolbar).toBeInTheDocument();
    });
});
