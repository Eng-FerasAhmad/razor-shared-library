import { AlertCustom } from './Alert';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

describe('<Alert />', () => {
    test('should render the component', () => {
        render(<AlertCustom text="mock alert" />);

        expect(screen.getByTestId('alert')).toBeInTheDocument();
        expect(screen.getByText('mock alert')).toBeInTheDocument();
    });
});
