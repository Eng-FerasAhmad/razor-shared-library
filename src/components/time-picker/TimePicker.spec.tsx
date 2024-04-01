import { render, screen } from 'src/test/test-utils';
import {TimePickerCustom} from 'src/components/time-picker/TimePicker';


describe('<TabCustom />', () => {
    test('should render the component', () => {
        render(<TimePickerCustom locale={'de'} label="Select Time" />);

        expect(screen.getByTestId('ClockIcon')).toBeInTheDocument();
    });
});
