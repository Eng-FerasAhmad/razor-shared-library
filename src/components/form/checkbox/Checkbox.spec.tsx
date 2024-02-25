import { CheckboxCustom } from './Checkbox';
import { render, screen } from 'src/test/test-utils';

describe('<Checkbox />', () => {
    test('should render the component', () => {
        render(<CheckboxCustom />);

        expect(screen.getByTestId('checkbox')).toBeInTheDocument();
    });
});
