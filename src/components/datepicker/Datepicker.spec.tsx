import { DatepickerCustom } from './Datepicker';
import { render, screen } from 'src/test/test-utils';

describe('<Datepicker />', () => {
    test('should render the component', () => {
        render(<DatepickerCustom locale="en-gb" />);

        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByTestId('CalendarIcon')).toBeInTheDocument();
    });
});
