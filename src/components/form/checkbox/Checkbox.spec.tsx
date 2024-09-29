import { CheckboxCustom } from './Checkbox';

import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

describe('<Checkbox />', () => {
    test('should render the component', () => {
        render(<CheckboxCustom />);

        expect(screen.getByTestId('checkbox')).toBeInTheDocument();
    });
});
