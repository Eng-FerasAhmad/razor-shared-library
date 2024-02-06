import userEvent from '@testing-library/user-event';
import InputTextPalette from './InputTextPalette';
import { render, screen, act } from 'src/test/test-utils';

describe('<InputTextPalette>', () => {
    test('Should render the component', () => {
        render(<InputTextPalette />);

        expect(screen.getByTestId('input-text-palette')).toBeInTheDocument();
    });

    test('Should handle onChange', async () => {
        const user = userEvent.setup();
        render(<InputTextPalette />);

        expect(screen.getByTestId('input-text-palette')).toBeInTheDocument();

        const defaultInput = screen.getByRole('input-text');
        expect(defaultInput).toBeInTheDocument();

        await act(async () => {
            await user.type(defaultInput, 'new value');
        });

        expect(defaultInput).toHaveAttribute('value', 'new value');
    });
});
