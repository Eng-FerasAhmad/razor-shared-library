import { render, screen } from 'src/test/test-utils';
import { MenuPalette } from './MenuPalette';

describe('<MenuPalette>', () => {
    test('Should render the component', () => {
        render(<MenuPalette />);

        expect(screen.getByTestId('menu-palette')).toBeInTheDocument();
    });
});

