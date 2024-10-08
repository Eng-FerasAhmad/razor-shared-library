import SaveIcon from '@mui/icons-material/Save';

import { LoadingButtonCustom } from 'components/inputs/loading-button/LoadingButton';

import { render, screen } from '@testing-library/react';

describe('LoadingButtonCustom', () => {
    const mockProps = {
        label: 'Save',
        startIcon: <SaveIcon />,
        loading: false,
        onClick: jest.fn(),
    };

    it('renders the button with correct label and icon', () => {
        render(<LoadingButtonCustom {...mockProps} />);

        const button = screen.getByRole('button', { name: /save/i });
        expect(button).toBeInTheDocument();
        expect(screen.getByTestId('SaveIcon')).toBeInTheDocument();
    });

    it('renders the CircularProgress when loading is true', () => {
        render(<LoadingButtonCustom {...mockProps} loading={true} />);

        const button = screen.getByRole('button', { name: /save/i });
        expect(button).toBeDisabled();
        expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    it('does not render CircularProgress when loading is false', () => {
        render(<LoadingButtonCustom {...mockProps} loading={false} />);

        expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
        expect(screen.getByTestId('SaveIcon')).toBeInTheDocument();
    });

    it('disables the button when loading is true', () => {
        render(<LoadingButtonCustom {...mockProps} loading={true} />);

        const button = screen.getByRole('button', { name: /save/i });
        expect(button).toBeDisabled();
    });
});
