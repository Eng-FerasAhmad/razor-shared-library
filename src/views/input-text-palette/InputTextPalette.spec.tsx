import InputTextPalette from './InputTextPalette';
import { render, screen } from 'src/test/test-utils';

describe('<InputTextPalette>', () => {
    test('Should render the component', () => {
        render(<InputTextPalette />);

        expect(screen.getByTestId('input-text-palette')).toBeInTheDocument();
    });
});
