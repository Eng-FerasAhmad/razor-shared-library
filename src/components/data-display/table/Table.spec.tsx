import { TableCustom } from 'components/data-display/table/Table';
import { TableColumns } from 'components/data-display/table/types';

import { render, screen } from '@testing-library/react';

interface TestData {
    id: number;
    name: string;
}

const columns: TableColumns<TestData>[] = [
    { id: 'id', label: 'ID' },
    { id: 'name', label: 'Name' },
];

const data: TestData[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
];

describe('TableCustom', () => {
    test('renders table with correct data', () => {
        render(<TableCustom columns={columns} data={data} />);

        expect(screen.getByText('ID')).toBeInTheDocument();
        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('Item 2')).toBeInTheDocument();
    });
});
