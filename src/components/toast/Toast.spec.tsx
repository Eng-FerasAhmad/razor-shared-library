import { Toast } from './Toast';
import { render, screen } from 'src/test/test-utils';

describe('<Toast />', () => {
    test('should render the component', () => {
        render(<Toast />);

        expect(screen.getByTestId('toast')).toBeInTheDocument();
    });
});
