import { MenuItems } from 'components/menu/types';
import { MenuCustom } from 'components/menu/Menu'; // Adjust the import for your MenuItems type

import { render, screen, fireEvent, waitFor } from '@testing-library/react';

describe('MenuCustom Component', () => {
    const mockItems: MenuItems[] = [
        { title: 'Item 1', action: jest.fn(), icon: <div>Icon 1</div> },
        { title: 'Item 2', action: jest.fn(), icon: <div>Icon 2</div> },
    ];

    const anchorElement = <button>Open Menu</button>;

    beforeEach(() => {
        jest.clearAllMocks(); // Clear mock function calls before each test
    });

    test('renders the anchor element', () => {
        render(<MenuCustom items={mockItems} anchor={anchorElement} />);
        expect(
            screen.getByRole('button', { name: /open menu/i })
        ).toBeInTheDocument();
    });

    test('opens the menu when anchor is clicked', () => {
        render(<MenuCustom items={mockItems} anchor={anchorElement} />);

        // Click the anchor to open the menu
        fireEvent.click(screen.getByRole('button', { name: /open menu/i }));

        expect(screen.getByRole('menu')).toBeInTheDocument(); // Ensure menu is rendered
    });

    test('calls the action of the clicked item', () => {
        render(<MenuCustom items={mockItems} anchor={anchorElement} />);

        // Open the menu
        fireEvent.click(screen.getByRole('button', { name: /open menu/i }));

        // Click on the first menu item
        fireEvent.click(screen.getByText('Item 1'));

        expect(mockItems[0].action).toHaveBeenCalled(); // Ensure the action was called
    });

    test('closes the menu when an item is clicked', async () => {
        render(<MenuCustom items={mockItems} anchor={anchorElement} />);

        // Open the menu
        fireEvent.click(screen.getByRole('button', { name: /open menu/i }));

        // Click on the first menu item
        fireEvent.click(screen.getByText('Item 1'));

        await waitFor(() => {
            expect(screen.queryByRole('menu')).not.toBeInTheDocument(); // Ensure menu is closed
        });
    });

    test('closes the menu when escape key is pressed', async () => {
        render(<MenuCustom items={mockItems} anchor={anchorElement} />);

        // Open the menu
        fireEvent.click(screen.getByRole('button', { name: /open menu/i }));

        // Simulate pressing the escape key
        fireEvent.keyDown(screen.getByRole('menu'), { key: 'Escape' });

        await waitFor(() => {
            expect(screen.queryByRole('menu')).not.toBeInTheDocument(); // Ensure menu is closed
        });
    });
});
