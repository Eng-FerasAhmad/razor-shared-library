import { Textarea } from './Textarea';
import { render, screen } from 'src/test/test-utils';

describe('<Textarea />', () => {
    test('should render the component', () => {
        render(<Textarea />);

        expect(screen.getByTestId('textarea')).toBeInTheDocument();
    });
});
