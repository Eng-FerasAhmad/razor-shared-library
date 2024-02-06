import userEvent from '@testing-library/user-event';
import ButtonPalette from './ButtonPalette';
import { act, render, screen } from 'src/test/test-utils';

describe('<ButtonPalette>', () => {
    test('Should render the component', () => {
        render(<ButtonPalette />);

        expect(screen.getByTestId('button-palette')).toBeInTheDocument();
    });

    test('Should handle default button', async () => {
        const user = userEvent.setup();
        render(<ButtonPalette />);

        expect(screen.getByTestId('button-palette')).toBeInTheDocument();

        const defaultButton = screen.getByRole('button', { name: 'Clicked 0' });
        expect(defaultButton).toBeInTheDocument();

        await act(async () => {
            await user.click(defaultButton);
        });

        expect(defaultButton).toHaveTextContent('Clicked 1');
    });
});
