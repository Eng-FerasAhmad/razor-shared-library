import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { DialogCustom } from './Dialog';

describe('<Dialog />', () => {
    test('Should render the component', async () => {
        render(
            <DialogCustom open={true} title="dialog" handleClose={jest.fn()} />
        );

        expect(screen.getByTestId('dialog')).toBeInTheDocument();
    });
});
