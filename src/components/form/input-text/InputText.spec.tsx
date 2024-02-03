import { InputText } from './InputText';
import { render, screen } from 'src/test/test-utils';

describe('<InputText />', () => {
    test('should render the component', () => {
        render(
            <InputText label="label" handleChange={jest.fn()} value="value" />
        );

        expect(screen.getByTestId('input-text-container')).toBeInTheDocument();
        expect(screen.getByTestId('input-text')).toBeInTheDocument();
        expect(screen.getByTestId('input-label')).toBeInTheDocument();
    });

    test('should render the error input', () => {
        render(
            <InputText
                label="label"
                handleChange={jest.fn()}
                value="value"
                errorLabel="error"
            />
        );

        expect(screen.getByTestId('input-text-container')).toBeInTheDocument();
        expect(screen.getByTestId('input-error')).toBeInTheDocument();
    });
});
