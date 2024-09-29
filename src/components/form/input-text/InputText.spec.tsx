import { InputText } from './InputText';

import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

describe('<InputText />', () => {
    test('should render the component', () => {
        render(<InputText label="label" value="value" />);

        expect(screen.getByTestId('input-text-container')).toBeInTheDocument();
    });
});
