import { ShopCard } from './ShopCard';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

describe('<ShopCard />', () => {
    test('should render the component', () => {
        render(<ShopCard />);

        expect(screen.getByTestId('shop-card')).toBeInTheDocument();
    });
});
