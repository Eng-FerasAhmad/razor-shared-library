import { Stepper } from './Stepper';

import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

describe('<Stepper />', () => {
    test('should render the component', () => {
        render(<Stepper />);

        expect(screen.getByTestId('stepper')).toBeInTheDocument();
    });
});
