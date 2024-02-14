import { render, screen } from 'src/test/test-utils';
import { DialogPalette } from './DialogPalette';

describe('<MenuPalette>', () => {
    test('Should render the component', () => {
        render(<DialogPalette />);

        expect(screen.getByTestId('dialog-palette')).toBeInTheDocument();
    });
});
