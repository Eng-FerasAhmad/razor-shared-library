import { Card } from './Card';
import { render, screen } from 'src/test/test-utils';

describe('<Card />', () => {
    test('should render the component', () => {
        render(<Card />);

        expect(screen.getByTestId('card')).toBeInTheDocument();
    });
});
