import { Carousel } from './Carousel';
import { render, screen } from 'src/test/test-utils';

describe('<Carousel />', () => {
    test('should render the component', () => {
        render(<Carousel />);

        expect(screen.getByTestId('carousel')).toBeInTheDocument();
    });
});
