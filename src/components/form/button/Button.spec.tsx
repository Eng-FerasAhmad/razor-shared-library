import { Button } from './Button';
import { render, screen } from 'src/test/test-utils';

describe('<Button />', () => {
    test('should render the component', () => {
        render(<Button label="button" clickHandler={jest.fn()} />);

        expect(screen.getByTestId('button')).toBeInTheDocument();
    });
});
