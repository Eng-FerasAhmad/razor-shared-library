import { InputDigit } from './InputDigit';
import { render, screen } from 'src/test/test-utils';

describe('<InputDigit />', () => {
    test('should render the component', () => {
        render(<InputDigit />);

        expect(screen.getByTestId('input-digit')).toBeInTheDocument();
    });
});
