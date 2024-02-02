import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';

import { Dialog } from './Dialog';

describe('<Dialog />', () => {
    test('Should render the component', () => {
        render(<Dialog handleClose={jest.fn()} open={true} title="dialog" />);
        expect(screen.getByTestId('dialog')).toBeInTheDocument();
    });
});
