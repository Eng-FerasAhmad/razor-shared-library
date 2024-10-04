import { CardCustom } from 'components/surfaces/card/Card';

import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';

describe('CardCustom Component', () => {
    const mockAction = jest.fn();

    it('should render the card with the provided children', () => {
        render(
            <CardCustom width={300} height={200}>
                <p>Card Content</p>
            </CardCustom>
        );

        const cardElement = screen.getByTestId('card');
        expect(cardElement).toBeInTheDocument();
        expect(screen.getByText('Card Content')).toBeInTheDocument();
    });

    it('should render the action button if actionButtonLabel is provided', () => {
        render(
            <CardCustom
                width={300}
                height={200}
                actionButtonLabel="Click Me"
                actionButton={mockAction}
            >
                <p>Card Content</p>
            </CardCustom>
        );

        const button = screen.getByText('Click Me');
        expect(button).toBeInTheDocument();
    });

    it('should trigger actionButton function when the button is clicked', () => {
        render(
            <CardCustom
                width={300}
                height={200}
                actionButtonLabel="Click Me"
                actionButton={mockAction}
            >
                <p>Card Content</p>
            </CardCustom>
        );

        const button = screen.getByText('Click Me');
        fireEvent.click(button);

        expect(mockAction).toHaveBeenCalledTimes(1);
    });

    it('should not render the action button if actionButtonLabel is not provided', () => {
        render(
            <CardCustom width={300} height={200}>
                <p>Card Content</p>
            </CardCustom>
        );

        expect(screen.queryByRole('button')).toBeNull();
    });
});
