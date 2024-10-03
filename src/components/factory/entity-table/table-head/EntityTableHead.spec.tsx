import EntityTableHead from 'components/factory/entity-table/table-head/EntityTableHead';
import {
    mockHeadCells,
    mockRows,
} from 'components/factory/entity-table/mockTableProps';
import { Order } from 'components/factory/entity-table/types';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

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
        expect(screen.getByTestId('table-head')).toBeInTheDocument();
    });

    it('calls resetSort when reset icon is clicked', () => {
        render(<EntityTableHead {...props} />);
        const resetIcon = screen.getByTestId('reset-button');
        fireEvent.click(resetIcon);
        expect(props.resetSort).toHaveBeenCalled();
    });

    it('calls handleHeaderClick when a header cell is clicked', () => {
        render(<EntityTableHead {...props} />);
        const headerCell = screen.getAllByTestId('table-sort-label')[0];
        fireEvent.click(headerCell);
        expect(props.handleHeaderClick).toHaveBeenCalledWith(
            mockHeadCells[0].sortLabel
        );
    });

    it('renders the status filter in the statusText header cell', () => {
        const statusFilter = <>Active</>;
        const statusProps = {
            ...props,
            statusFilter: statusFilter,
            headCells: [...mockHeadCells],
        };
        render(<EntityTableHead {...statusProps} />);
        expect(screen.getByText('Active')).toBeInTheDocument();
    });
});
