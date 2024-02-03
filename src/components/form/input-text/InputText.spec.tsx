import { InputText } from './InputText';
import { render, screen } from 'src/test/test-utils';

describe('<InputText />', () => {
    test('should render the component', () => {
        render(<InputText label='label' handleChange={jest.fn()} value='value'/>);

        expect(screen.getByTestId('input-text')).toBeInTheDocument();
    });
});
