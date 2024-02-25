import { ButtonCustom } from './Button';
import { render, screen } from 'src/test/test-utils';

describe('<ButtonCustom />', () => {
    test('should render the primary button', () => {
        render(<ButtonCustom label="button" color="primary" />);

        expect(
            screen.getByRole('button', { name: 'button' })
        ).toBeInTheDocument();
    });

    test('should render the primary button size large', () => {
        render(<ButtonCustom label="button" color="primary" size="large" />);

        const button = screen.getByRole('button', { name: 'button' });
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('MuiButton-sizeLarge');
    });

    test('should render the primary button size large', () => {
        render(<ButtonCustom label="button" color="primary" size="medium" />);

        const button = screen.getByRole('button', { name: 'button' });
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('MuiButton-sizeMedium');
    });

    test('should render the primary button size large', () => {
        render(<ButtonCustom label="button" color="primary" size="small" />);

        const button = screen.getByRole('button', { name: 'button' });
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('MuiButton-sizeSmall');
    });
});
