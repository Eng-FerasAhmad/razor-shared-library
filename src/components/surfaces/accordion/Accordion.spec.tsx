import { AccordionItems } from 'components/surfaces/accordion/types';
import { AccordionCustom } from 'components/surfaces/accordion/Accordion';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('AccordionCustom', () => {
    const items: AccordionItems[] = [
        {
            title: 'Item 1',
            details: <p>Details 1</p>,
            actions: <button>Action 1</button>,
            onOpenAction: jest.fn(),
        },
        {
            title: 'Item 2',
            details: <p>Details 2</p>,
            actions: <button>Action 2</button>,
            onOpenAction: jest.fn(),
        },
    ];

    it('renders all accordion items', () => {
        render(<AccordionCustom items={items} />);
        items.forEach((item) => {
            expect(screen.getByText(item.title)).toBeInTheDocument();
        });
    });

    it('calls onOpenAction when an accordion is clicked', () => {
        render(<AccordionCustom items={items} />);
        const firstItem = screen.getByText('Item 1');
        fireEvent.click(firstItem);
        expect(items[0].onOpenAction).toHaveBeenCalled();
    });

    it('shows and hides accordion details on click', () => {
        render(<AccordionCustom items={items} />);
        const firstItem = screen.getByText('Item 1');
        const firstItemDetails = screen.getByText('Details 1');
        expect(firstItemDetails).not.toBeVisible();
        fireEvent.click(firstItem);
        expect(firstItemDetails).toBeVisible();
    });
});
