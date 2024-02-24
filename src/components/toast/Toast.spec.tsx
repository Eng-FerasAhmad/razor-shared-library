import { Toast } from './Toast';
import { render, screen } from 'src/test/test-utils';

describe('<Toast />', () => {
    test('should render the component', () => {
        render(
            <Toast
                open={true}
                severity="success"
                text="I'm Toast"
                handleClose={jest.fn()}
            />
        );

        expect(screen.getByTestId('toast')).toBeInTheDocument();
    });
});
