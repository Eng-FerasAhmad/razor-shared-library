import userEvent from '@testing-library/user-event';
import ButtonPalette from './ButtonPalette';
import { act, render, screen } from 'src/test/test-utils';

describe('<ButtonPalette>', () => {
    test('Should render the component', () => {
        render(<ButtonPalette />);

        expect(screen.getByTestId('button-palette')).toBeInTheDocument();
    });
});
