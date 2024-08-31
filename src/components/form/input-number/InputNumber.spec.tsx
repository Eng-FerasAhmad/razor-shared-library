import { InputNumber } from './InputNumber';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

describe('<InputNumber />', () => {
    test('should render the component', () => {
        render(<InputNumber />);

        expect(screen.getByTestId('input-number')).toBeInTheDocument();
    });
});
