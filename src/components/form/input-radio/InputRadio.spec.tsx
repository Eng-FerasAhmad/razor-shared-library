import { InputRadio } from './InputRadio';
import { render, screen } from 'src/test/test-utils';

describe('<InputRadio />', () => {
    test('should render the component', () => {
        render(<InputRadio />);

        expect(screen.getByTestId('input-radio')).toBeInTheDocument();
    });
});
