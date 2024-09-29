import { CategoryCard } from './CategoryCard';

import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

describe('<CategoryCard />', () => {
    test('should render the component', () => {
        render(<CategoryCard />);

        expect(screen.getByTestId('category-card')).toBeInTheDocument();
    });
});
