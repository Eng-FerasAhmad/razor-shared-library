import { Toast } from './Toast';

import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

describe('<Toast />', () => {
    test('should render the component', () => {
        render(
            <Toast
                open={true}
                severity="success"
                text="I'm Toast"
                handleClose={jest.fn()}
            />
        );

        expect(screen.getByTestId('toast')).toBeInTheDocument();
    });
});
