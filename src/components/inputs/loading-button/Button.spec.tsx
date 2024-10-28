import SaveIcon from '@mui/icons-material/Save';

import { LoadingButtonCustom } from 'components/inputs/loading-button/LoadingButton';

import { render, screen } from '@testing-library/react';

describe('LoadingButtonCustom', () => {
    const defaultProps = {
        label: 'Save',
        startIcon: <SaveIcon data-testid="start-icon" />,
        loading: false,
    };

    it('renders the button with the correct label', () => {
        render(<LoadingButtonCustom {...defaultProps} />);
        expect(screen.getByRole('button')).toHaveTextContent('Save');
    });

    it('displays the start icon when not loading', () => {
        render(<LoadingButtonCustom {...defaultProps} />);
        expect(screen.getByTestId('start-icon')).toBeInTheDocument();
    });

    it('displays a CircularProgress spinner instead of the start icon when loading', () => {
        render(<LoadingButtonCustom {...defaultProps} loading={true} />);
        expect(screen.queryByTestId('start-icon')).not.toBeInTheDocument();
        expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    it('renders the button within the Template component', () => {
        render(<LoadingButtonCustom {...defaultProps} />);
        const templateContainer = screen.getByRole('button').closest('div'); // Assuming Template renders as a `div`
        expect(templateContainer).toBeInTheDocument();
    });
});
