import { TimePickerCustom } from 'src/components/time-picker/TimePicker';
import { render, screen } from 'src/test/test-utils';

describe('<TabCustom />', () => {
    test('should render the component', () => {
        render(<TimePickerCustom locale={'de'} label="Select Time" />);

        expect(screen.getByTestId('ClockIcon')).toBeInTheDocument();
    });
});
