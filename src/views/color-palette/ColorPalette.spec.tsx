import ColorPalette from './ColorPalette';
import { render, screen } from 'src/test/test-utils';

describe('<ColorPalette />', () => {
    test('Should render the component', () => {
        render(<ColorPalette />);

        expect(screen.getByTestId('color-palette')).toBeInTheDocument();
    });
});
