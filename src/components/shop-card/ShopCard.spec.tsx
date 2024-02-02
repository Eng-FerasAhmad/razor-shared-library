import { ShopCard } from './ShopCard';
import { render, screen } from 'src/test/test-utils';

describe('<ShopCard />', () => {
    test('should render the component', () => {
        render(<ShopCard />);

        expect(screen.getByTestId('shop-card')).toBeInTheDocument();
    });
});
