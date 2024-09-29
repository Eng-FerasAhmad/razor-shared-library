import { RatingCustom } from 'components/form/rating/Rating';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

describe('RatingCustom', () => {
    it('renders the correct label', () => {
        render(<RatingCustom label="Test Rating" />);
        expect(screen.getByText('Test Rating')).toBeInTheDocument();
    });

    it('disables the rating when disabled prop is true', () => {
        render(<RatingCustom label="Test Rating" disabled />);
        const ratingElements = screen.getAllByRole('radio');
        ratingElements.forEach((element) => {
            expect(element).toBeDisabled();
        });
    });
});
