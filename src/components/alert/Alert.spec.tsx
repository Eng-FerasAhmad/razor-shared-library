import {AlertCustom}  from './Alert';
import { render, screen } from 'src/test/test-utils';

describe('<Alert />', () => {
    test('should render the component', () => {
        render(<AlertCustom text='mock alert' />);

        expect(screen.getByTestId('alert')).toBeInTheDocument();
        expect(screen.getByText('mock alert')).toBeInTheDocument();

    });
});
