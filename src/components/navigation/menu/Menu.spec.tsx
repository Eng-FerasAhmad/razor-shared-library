import { useState } from 'react';

import { MenuCustom } from 'components/navigation/menu/Menu';
import { MenuItems } from 'components/navigation/menu/types';

import { render, screen, fireEvent, waitFor } from '@testing-library/react';

describe('MenuCustom Component', () => {
    const mockItems: MenuItems[] = [
        { title: 'Item 1', action: jest.fn(), icon: <div>Icon 1</div> },
        { title: 'Item 2', action: jest.fn(), icon: <div>Icon 2</div> },
    ];

    // Wrapper component to control open state
    const MenuWrapper = () => {
        const [open, setOpen] = useState(false);

        return (
            <MenuCustom
                items={mockItems}
                anchor={
                    <button onClick={() => setOpen(!open)}>Open Menu</button>
                }
                open={open}
                onClose={() => setOpen(false)}
            />
        );
    };

    beforeEach(() => {
        jest.clearAllMocks(); // Clear mock function calls before each test
    });

    test('renders the anchor element', () => {
        render(<MenuWrapper />);
        expect(
            screen.getByRole('button', { name: /open menu/i })
        ).toBeInTheDocument();
    });

    test('opens the menu when anchor is clicked', async () => {
        render(<MenuWrapper />);

        // Click the anchor to open the menu
        fireEvent.click(screen.getByRole('button', { name: /open menu/i }));

        await waitFor(() => {
            expect(screen.getByRole('menu')).toBeInTheDocument(); // Ensure menu is rendered
        });
    });

    test('calls the action of the clicked item', async () => {
        render(<MenuWrapper />);

        // Open the menu
        fireEvent.click(screen.getByRole('button', { name: /open menu/i }));

        // Click on the first menu item
        fireEvent.click(screen.getByText('Item 1'));

        await waitFor(() => {
            expect(mockItems[0].action).toHaveBeenCalled(); // Ensure the action was called
        });
    });

    test('closes the menu when an item is clicked', async () => {
        render(<MenuWrapper />);

        // Open the menu
        fireEvent.click(screen.getByRole('button', { name: /open menu/i }));

        // Click on the first menu item
        fireEvent.click(screen.getByText('Item 1'));

        await waitFor(() => {
            expect(screen.queryByRole('menu')).not.toBeInTheDocument(); // Ensure menu is closed
        });
    });

    test('closes the menu when escape key is pressed', async () => {
        render(<MenuWrapper />);

        // Open the menu
        fireEvent.click(screen.getByRole('button', { name: /open menu/i }));

        // Simulate pressing the escape key
        fireEvent.keyDown(screen.getByRole('menu'), { key: 'Escape' });

        await waitFor(() => {
            expect(screen.queryByRole('menu')).not.toBeInTheDocument(); // Ensure menu is closed
        });
    });
});
