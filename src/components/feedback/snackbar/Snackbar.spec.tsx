import { Snackbar } from './Snackbar';

import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

describe('<Snackbar />', () => {
    test('should render the component', () => {
        render(
            <Snackbar
                open={true}
                severity="success"
                text="I'm Snackbar"
                handleClose={jest.fn()}
            />
        );

        expect(screen.getByTestId('toast')).toBeInTheDocument();
    });
});
