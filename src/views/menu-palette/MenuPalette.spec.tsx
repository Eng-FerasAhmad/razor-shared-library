import { MenuPalette } from './MenuPalette';
import { render, screen } from 'src/test/test-utils';

describe('<MenuPalette>', () => {
    test('Should render the component', () => {
        render(<MenuPalette />);

        expect(screen.getByTestId('menu-palette')).toBeInTheDocument();
    });
});
