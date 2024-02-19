import ButtonPalette from './FormPalette';
import { render, screen } from 'src/test/test-utils';

describe('<ButtonPalette>', () => {
    test('Should render the component', () => {
        render(<ButtonPalette />);

        expect(screen.getByTestId('button-palette')).toBeInTheDocument();
    });
});
