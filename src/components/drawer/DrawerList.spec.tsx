import DrawerList from './DrawerList';

import { render, screen, fireEvent } from '@testing-library/react';

describe('DrawerList Component', () => {
    const mockHandleClick = jest.fn();
    const mockListItems = [
        {
            icon: <span data-testid="icon-1">Icon 1</span>,
            clickHandler: jest.fn(),
            subMenu: [
                {
                    icon: <span data-testid="sub-icon-1">Sub Icon 1</span>,
                    clickHandler: jest.fn(),
                },
            ],
        },
        {
            icon: <span data-testid="icon-2">Icon 2</span>,
            clickHandler: jest.fn(),
        },
    ];

    it('renders the list items', () => {
        render(
            <DrawerList
                listItems={mockListItems}
                collapseIconOpen={<span>▲</span>}
                collapseIconClose={<span>▼</span>}
                handleClick={mockHandleClick}
            />
        );

        // Check if the main list items are rendered
        expect(screen.getByTestId('icon-1')).toBeInTheDocument();
        expect(screen.getByTestId('icon-2')).toBeInTheDocument();
    });

    it('triggers click handler when main list item is clicked', () => {
        render(
            <DrawerList
                listItems={mockListItems}
                collapseIconOpen={<span>▲</span>}
                collapseIconClose={<span>▼</span>}
                handleClick={mockHandleClick}
            />
        );

        // Simulate clicking the first list item
        const firstListItem = screen.getByTestId('icon-1');
        fireEvent.click(firstListItem);

        // Check if the click handler is called for the main item click
        expect(mockListItems[0].clickHandler).toHaveBeenCalled();
    });

    it('collapses and expands submenus when clicked', () => {
        render(
            <DrawerList
                listItems={mockListItems}
                collapseIconOpen={<span>▲</span>}
                collapseIconClose={<span>▼</span>}
                handleClick={mockHandleClick}
            />
        );

        // Initially, subMenu should not be visible
        expect(screen.queryByTestId('sub-icon-1')).not.toBeInTheDocument();

        // Simulate clicking the expand/collapse button
        fireEvent.click(screen.getByText('▼'));

        // Check if handleClick was called to open the submenu
        expect(mockHandleClick).toHaveBeenCalledWith(0);
    });
});
