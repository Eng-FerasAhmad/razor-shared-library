import { TimePickerCustom } from 'components/datepicker/time-picker/TimePicker';

import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

describe('<TabCustom />', () => {
    test('should render the component', () => {
        render(
            <TimePickerCustom
                locale={'de'}
                label="Select Time"
                time={'12:00:00'}
                is24Format={true}
            />
        );

        expect(screen.getByTestId('ClockIcon')).toBeInTheDocument();
    });
});
