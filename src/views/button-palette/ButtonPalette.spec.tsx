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

        const defaultButton = screen.getAllByRole('button', {
            name: 'Clicked 0',
        })[0];
        expect(defaultButton).toBeInTheDocument();

        await act(async () => {
            await user.click(defaultButton);
        });

        expect(defaultButton).toHaveTextContent('Clicked 1');
    });

    test('Should handle outline button', async () => {
        const user = userEvent.setup();
        render(<ButtonPalette />);

        expect(screen.getByTestId('button-palette')).toBeInTheDocument();

        const button = screen.getAllByRole('button', { name: 'Click' })[0];
        expect(button).toBeInTheDocument();

        await act(async () => {
            await user.click(button);
        });

        expect(button).toHaveTextContent('Submit');
    });

    test('Should handle outline button', async () => {
        const user = userEvent.setup();
        render(<ButtonPalette />);

        expect(screen.getByTestId('button-palette')).toBeInTheDocument();

        const button = screen.getAllByRole('button', { name: 'Click' })[0];
        expect(button).toBeInTheDocument();

        await act(async () => {
            await user.click(button);
        });

        expect(button).toHaveTextContent('Submit');
    });

    test('Should handle button with icon after label', async () => {
        const user = userEvent.setup();
        render(<ButtonPalette />);

        expect(screen.getByTestId('button-palette')).toBeInTheDocument();

        const button = screen.getAllByRole('button', { name: 'Icon' })[0];
        expect(button).toBeInTheDocument();

        await act(async () => {
            await user.click(button);
        });

        expect(button).toHaveTextContent('Icon Button');
    });

    test('Should handle button with icon before label', async () => {
        const user = userEvent.setup();
        render(<ButtonPalette />);

        expect(screen.getByTestId('button-palette')).toBeInTheDocument();

        const button = screen.getAllByRole('button', { name: 'Back' })[0];
        expect(button).toBeInTheDocument();

        await act(async () => {
            await user.click(button);
        });

        expect(button).toHaveTextContent('Button Back');
    });

    test('Should handle disabled button', async () => {
        const user = userEvent.setup();
        render(<ButtonPalette />);

        expect(screen.getByTestId('button-palette')).toBeInTheDocument();

        const button = screen.getAllByRole('button', { name: 'disabled' })[0];
        expect(button).toBeInTheDocument();

        await act(async () => {
            await user.click(button);
        });

        expect(button).toHaveTextContent('disabled');
    });
});
