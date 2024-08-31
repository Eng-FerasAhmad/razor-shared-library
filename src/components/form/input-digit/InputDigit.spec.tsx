import { InputDigit } from './InputDigit';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

describe('<InputDigit />', () => {
    test('should render the component', () => {
        render(<InputDigit />);

        expect(screen.getByTestId('input-digit')).toBeInTheDocument();
    });
});
