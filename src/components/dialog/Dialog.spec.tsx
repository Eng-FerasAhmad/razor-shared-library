import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { DialogCustom } from './Dialog';

describe('<Dialog />', () => {
    test('Should render the component', async () => {
        render(
            <DialogCustom open={true} title="dialog" handleClose={jest.fn()} actions={<>action</>} closeIcon={<>ico</>} />
        );

        expect(screen.getByTestId('dialog')).toBeInTheDocument();
        expect(screen.getByTestId('dialog-title')).toBeInTheDocument();
        expect(screen.getByTestId('dialog-close-icon')).toBeInTheDocument();
        expect(screen.getByTestId('dialog-action')).toBeInTheDocument();
    });
});
