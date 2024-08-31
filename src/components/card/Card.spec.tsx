import { CardCustom } from './Card';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

describe('<Card />', () => {
    test('should render the component', () => {
        render(<CardCustom />);

        expect(screen.getByTestId('card')).toBeInTheDocument();
    });
});
