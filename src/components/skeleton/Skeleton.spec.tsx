import { Skeleton } from './Skeleton';
import { render, screen } from 'src/test/test-utils';

describe('<Skeleton />', () => {
    test('should render the component', () => {
        render(<Skeleton />);

        expect(screen.getByTestId('skeleton')).toBeInTheDocument();
    });
});
