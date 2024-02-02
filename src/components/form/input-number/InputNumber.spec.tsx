import { InputNumber } from './InputNumber';
import { render, screen } from 'src/test/test-utils';

describe('<InputNumber />', () => {
    test('should render the component', () => {
        render(<InputNumber />);

        expect(screen.getByTestId('input-number')).toBeInTheDocument();
    });
});
