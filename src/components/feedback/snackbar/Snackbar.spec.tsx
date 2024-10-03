import { SnackbarCustom } from 'components/feedback/snackbar/Snackbar';

import { render, screen } from '@testing-library/react';

describe('SnackbarCustom', () => {
    const handleClose = jest.fn();

    test('renders Snackbar with text', () => {
        render(
            <SnackbarCustom
                text="Test message"
                handleClose={handleClose}
                open={true}
                severity="success"
            />
        );

        expect(screen.getByText('Test message')).toBeInTheDocument();
    });

    test('calls handleClose when Snackbar is closed', () => {
        render(
            <SnackbarCustom
                text="Test message"
                handleClose={handleClose}
                open={true}
                severity="success"
            />
        );

        const snackbar = screen.getByTestId('toast');
        snackbar.dispatchEvent(new MouseEvent('close', { bubbles: true }));
    });
});
