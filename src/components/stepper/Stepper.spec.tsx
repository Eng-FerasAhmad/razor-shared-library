import { Stepper } from './Stepper';
import { render, screen } from 'src/test/test-utils';

describe('<Stepper />', () => {
    test('should render the component', () => {
        render(<Stepper />);

        expect(screen.getByTestId('stepper')).toBeInTheDocument();
    });
});
