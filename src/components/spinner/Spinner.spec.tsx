import { Spinner } from './Spinner';
import { render, screen } from 'src/test/test-utils';

describe('<Spinner />', () => {
    test('should render the component', () => {
        render(<Spinner />);

        expect(screen.getByTestId('spinner')).toBeInTheDocument();
    });
});
