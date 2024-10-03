import { CircularProgressCustom } from 'components/feedback/progress-circular/CircularProgress';

import { render, screen } from '@testing-library/react';

describe('CircularProgressCustom', () => {
    test('renders CircularProgress with default size and color', () => {
        render(<CircularProgressCustom />);

        const circularProgress = screen.getByRole('progressbar');
        expect(circularProgress).toBeInTheDocument();
        expect(circularProgress).toHaveAttribute(
            'style',
            expect.stringContaining('40px')
        );
    });
});
