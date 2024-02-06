import { Button } from './Button';
import { color } from 'src/shared/color';
import { render, screen } from 'src/test/test-utils';

describe('<Button />', () => {
    test('should render the primary button', () => {
        render(
            <Button label="button" clickHandler={jest.fn()} color="primary" />
        );

        const button = screen.getByRole('button', { name: 'button' });
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('color', 'primary');
    });

    test('should render the success button', () => {
        render(
            <Button label="button" clickHandler={jest.fn()} color="success" />
        );

        const button = screen.getByRole('button', { name: 'button' });
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('color', 'success');
    });

    test('should render the error button', () => {
        render(
            <Button label="button" clickHandler={jest.fn()} color="error" />
        );

        const button = screen.getByRole('button', { name: 'button' });
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('color', 'error');
    });

    test('should render the warning button', () => {
        render(
            <Button label="button" clickHandler={jest.fn()} color="warning" />
        );

        const button = screen.getByRole('button', { name: 'button' });
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('color', 'warning');
    });

    test('should render the info button', () => {
        render(<Button label="button" clickHandler={jest.fn()} color="info" />);

        const button = screen.getByRole('button', { name: 'button' });
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('color', 'info');
    });

    test('should render the outline button', () => {
        render(
            <Button label="button" clickHandler={jest.fn()} variant="outline" />
        );

        const button = screen.getByRole('button', { name: 'button' });
        expect(button).toBeInTheDocument();
        expect(button).toHaveStyle(`background-color:${color.light}`);
    });

    test('should render the disabled button', () => {
        render(
            <Button label="button" clickHandler={jest.fn()} disabled={true} />
        );

        const button = screen.getByRole('button', { name: 'button' });
        expect(button).toBeInTheDocument();
        expect(button).toHaveStyle(`background-color:${color.disabled}`);
    });
});
