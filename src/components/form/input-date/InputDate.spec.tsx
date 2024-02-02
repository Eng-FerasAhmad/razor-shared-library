import { InputDate } from './InputDate';
import { render, screen } from 'src/test/test-utils';

describe('<InputDate />', () => {
    test('should render the component', () => {
        render(<InputDate />);

        expect(screen.getByTestId('input-date')).toBeInTheDocument();
    });
});
