import { DialogPalette } from './DialogPalette';
import { render, screen } from 'src/test/test-utils';

describe('<MenuPalette>', () => {
    test('Should render the component', () => {
        render(<DialogPalette />);

        expect(screen.getByTestId('dialog-palette')).toBeInTheDocument();
    });
});
