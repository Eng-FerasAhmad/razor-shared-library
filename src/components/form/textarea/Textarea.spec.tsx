import { Textarea } from './Textarea';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

describe('<Textarea />', () => {
    test('should render the component', () => {
        render(<Textarea />);

        expect(screen.getByTestId('textarea')).toBeInTheDocument();
    });
});
