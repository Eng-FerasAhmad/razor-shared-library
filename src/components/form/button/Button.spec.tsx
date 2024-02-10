import { render, screen } from 'src/test/test-utils';
import { ButtonCustom } from './Button';

describe('<ButtonCustom />', () => {
    test('should render the primary button', () => {
        render(
            <ButtonCustom label="button" color="primary" />
        );

        const button = screen.getByRole('button', { name: 'button' });
        expect(button).toBeInTheDocument();
    });
});
