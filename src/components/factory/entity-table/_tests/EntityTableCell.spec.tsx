import { HeadCell } from 'components/factory/entity-table/types';
import EntityTableCell from 'components/factory/entity-table/EntityTableCell';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

interface Data {
    name: string;
    age: number;
}
const headCells: HeadCell<Data>[] = [
    {
        id: 'name',
        label: 'Name',
        numeric: false,
        sortLabel: 'name',
    },
    {
        id: 'age',
        label: 'Age',
        numeric: true,
        sortLabel: 'age',
    },
];

const row = {
    name: 'John Doe',
    age: 30,
};

describe('EntityTableCell', () => {
    it('renders the correct table cells based on headCells and row data', () => {
        render(<EntityTableCell headCells={headCells} row={row} />);
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('30')).toBeInTheDocument();
    });

    it('renders the cells aligned correctly', () => {
        render(<EntityTableCell headCells={headCells} row={row} />);
        const nameCell = screen.getByText('John Doe').closest('th');
        const ageCell = screen.getByText('30').closest('th');
        expect(window.getComputedStyle(nameCell!).textAlign).toBe('left');
        expect(window.getComputedStyle(ageCell!).textAlign).toBe('right');
    });

    it('does not render ignored keys not present in headCells', () => {
        const rowWithExtraKeys = {
            name: 'Jane Doe',
            age: 25,
            extraKey: 'should not be rendered',
        };
        render(
            <EntityTableCell headCells={headCells} row={rowWithExtraKeys} />
        );
        expect(
            screen.queryByText('should not be rendered')
        ).not.toBeInTheDocument();
    });
});
