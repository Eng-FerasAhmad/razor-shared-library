import { render, screen } from 'src/test/test-utils';
import ColorPalette from './ColorPalette';

describe('<ColorPalette />', () => {
    test('Should render the component', () => {
        render(<ColorPalette />);

        expect(screen.getByTestId('color-palette')).toBeInTheDocument();
    });
});
