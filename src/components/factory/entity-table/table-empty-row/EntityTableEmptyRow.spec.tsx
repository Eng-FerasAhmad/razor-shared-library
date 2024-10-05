import EntityTableEmptyRow from 'components/factory/entity-table/table-empty-row/EntityTableEmptyRow';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { mockHeadCells } from 'components/factory/entity-table/mockTableProps';
import { Order } from 'components/factory/entity-table/types';

describe('EntityTableEmptyRow', () => {
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
        rows: [],
        headCells: mockHeadCells,
        headerTools: <>Title</>,
        selectedRow: -1,
        noDataCaption: 'No data available',
        orderBy: '',
        order: 'asc' as Order,
        resetSort: jest.fn(),
        handleHeaderClick: jest.fn(),
        onDlClickRow: mockOnDlClickRow,
        onOneClickRow: mockOnOneClickRow,
    };

    it('renders the caption with the correct alert message', () => {
        const captionText = 'No data available';
        render(<EntityTableEmptyRow {...props} />);

        expect(screen.getByText(captionText)).toBeInTheDocument();
    });

    it('renders the correct icon and color in AlertCustom', () => {
        const captionText = 'No data available';
        render(<EntityTableEmptyRow {...props} />);

        const iconElement = screen.getByTestId('InfoOutlinedIcon');
        expect(iconElement).toBeInTheDocument();

        const alertElement = screen.getByText(captionText).closest('div');
        expect(alertElement).toHaveClass('MuiAlert-message');
    });
});
