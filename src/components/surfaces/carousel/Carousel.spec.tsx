import { Carousel } from './Carousel';

import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

describe('<Carousel />', () => {
    test('should render the component', () => {
        render(<Carousel />);

        expect(screen.getByTestId('carousel')).toBeInTheDocument();
    });
});
