import { CardCustom } from './Card';
import { render, screen } from 'src/test/test-utils';

describe('<Card />', () => {
    test('should render the component', () => {
        render(<CardCustom />);

        expect(screen.getByTestId('card')).toBeInTheDocument();
    });
});
