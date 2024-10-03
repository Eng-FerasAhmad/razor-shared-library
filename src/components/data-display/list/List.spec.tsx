import { ListCustom } from 'components/data-display/list/List';

import { render, screen } from '@testing-library/react';

const mockItems = [
    {
        text: 'Item 1',
        icon: <div>Icon 1</div>,
        onClick: jest.fn(),
    },
    {
        text: 'Item 2',
        icon: <div>Icon 2</div>,
        onClick: jest.fn(),
    },
];

describe('ListCustom', () => {
    test('renders list items', () => {
        render(<ListCustom items={mockItems} listProps={{}} itemsProps={{}} />);

        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('Item 2')).toBeInTheDocument();
    });
});
