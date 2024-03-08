import { SwitchCustom } from './Switch';
import { render, screen } from 'src/test/test-utils';

describe('<Switch />', () => {
    test('should render the component', () => {
        render(<SwitchCustom />);

        expect(screen.getByTestId('switch')).toBeInTheDocument();
    });
});
