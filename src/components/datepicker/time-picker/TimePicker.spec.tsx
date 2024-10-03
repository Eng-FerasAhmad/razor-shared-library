import { TimePickerCustom } from 'components/datepicker/time-picker/TimePicker';

import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

describe('<TabCustom />', () => {
    test('should render the component', () => {
        render(<TimePickerCustom locale={'de'} label="Select Time" />);

        expect(screen.getByTestId('ClockIcon')).toBeInTheDocument();
    });
});
