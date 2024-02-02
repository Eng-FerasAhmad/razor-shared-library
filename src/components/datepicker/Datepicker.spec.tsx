import { Datepicker } from './Datepicker';
import { render, screen } from 'src/test/test-utils';

describe('<Datepicker />', () => {
    test('should render the component', () => {
        render(<Datepicker />);

        expect(screen.getByTestId('datepicker')).toBeInTheDocument();
    });
});
