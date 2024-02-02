import { CategoryCard } from './CategoryCard';
import { render, screen } from 'src/test/test-utils';

describe('<CategoryCard />', () => {
    test('should render the component', () => {
        render(<CategoryCard />);

        expect(screen.getByTestId('category-card')).toBeInTheDocument();
    });
});
