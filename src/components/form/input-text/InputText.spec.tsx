import { InputText } from './InputText';
import { render, screen } from 'src/test/test-utils';

describe('<InputText />', () => {
    test('should render the component', () => {
        render(<InputText />);

        expect(screen.getByTestId('input-text')).toBeInTheDocument();
    });
});
