import EntityTableEmptyRow from 'components/factory/entity-table/table-empty-row/EntityTableEmptyRow';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('EntityTableEmptyRow', () => {
    it('renders the caption with the correct alert message', () => {
        const captionText = 'No data available';
        render(<EntityTableEmptyRow caption={captionText} />);

        expect(screen.getByText(captionText)).toBeInTheDocument();
    });

    it('renders the correct icon and color in AlertCustom', () => {
        const captionText = 'No data available';
        render(<EntityTableEmptyRow caption={captionText} />);

        const iconElement = screen.getByTestId('InfoOutlinedIcon');
        expect(iconElement).toBeInTheDocument();

        const alertElement = screen.getByText(captionText).closest('div');
        expect(alertElement).toHaveClass('MuiAlert-message');
    });
});
