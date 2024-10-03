import { Loading } from './Loading';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

describe('Loading', () => {
    it('renders CircularProgress inside Backdrop', () => {
        render(<Loading open={true} />);
        expect(screen.getByTestId('progressbar')).toBeInTheDocument();
    });

    it('renders when open prop is true', () => {
        render(<Loading open={true} />);
        const backdropElement = screen.getByTestId('progressbar').parentElement;
        expect(backdropElement).toBeVisible();
    });

    it('does not render when open prop is false', () => {
        render(<Loading open={false} />);
        expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });
});
