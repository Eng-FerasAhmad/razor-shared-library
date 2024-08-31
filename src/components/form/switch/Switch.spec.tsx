import { SwitchCustom } from './Switch';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

describe('<Switch />', () => {
    test('should render the component', () => {
        render(<SwitchCustom />);

        expect(screen.getByTestId('switch')).toBeInTheDocument();
    });
});
