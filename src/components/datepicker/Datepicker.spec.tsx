import { DatepickerCustom } from './Datepicker';

import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

describe('<Datepicker />', () => {
    test('should render the component', () => {
        render(<DatepickerCustom locale="en-gb" />);

        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByTestId('CalendarIcon')).toBeInTheDocument();
    });
});
