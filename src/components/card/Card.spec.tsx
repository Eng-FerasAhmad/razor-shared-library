import { Card } from '..';
import { render, screen } from '../../test/test-utils';

describe('<Card />', () => {
    test('should render the component', () => {
        render(<Card />);

        expect(screen.getByTestId('card')).toBeInTheDocument();
    });
});
