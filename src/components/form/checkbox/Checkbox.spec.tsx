import { Checkbox } from './Checkbox';
import { render, screen } from 'src/test/test-utils';

describe('<Checkbox />', () => {
    test('should render the component', () => {
        render(<Checkbox />);

        expect(screen.getByTestId('checkbox')).toBeInTheDocument();
    });
});
