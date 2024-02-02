import { InputSelect } from './InputSelect';
import { render, screen } from 'src/test/test-utils';

describe('<InputSelect />', () => {
    test('should render the component', () => {
        render(<InputSelect />);

        expect(screen.getByTestId('input-select')).toBeInTheDocument();
    });
});
