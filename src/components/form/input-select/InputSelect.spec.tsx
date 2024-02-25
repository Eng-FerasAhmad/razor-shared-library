import { InputSelect } from './InputSelect';
import { render, screen } from 'src/test/test-utils';

describe('<InputSelect />', () => {
    test('should render the component', () => {
        render(
            <InputSelect
                handleChange={jest.fn()}
                items={[{ value: '1', label: 'item' }]}
                label="select"
                value=""
            />
        );

        expect(screen.getByTestId('input-select-form')).toBeInTheDocument();
    });
});
