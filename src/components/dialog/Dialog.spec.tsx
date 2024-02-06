import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dialog } from './Dialog';

describe('<Dialog />', () => {
    test('Should render the component', async () => {
        render(<Dialog handleClose={jest.fn()} open={true} title="dialog" />);

        expect(screen.getByTestId('dialog')).toBeInTheDocument();

        const dialogContent = screen.getByTestId('dialog-content');
        expect(dialogContent).toBeInTheDocument();
    });

    test('Should not render the component', async () => {
        render(<Dialog handleClose={jest.fn()} open={false} title="dialog" />);
        expect(screen.queryByTestId('dialog')).not.toBeInTheDocument();
    });

    test('Should handle click on dialog', async () => {
        const user = userEvent.setup()
        render(<Dialog handleClose={jest.fn()} open={true} title="dialog" />);

        expect(screen.getByTestId('dialog')).toBeInTheDocument();

        const dialogContent = screen.getByTestId('dialog-content');
        expect(dialogContent).toBeInTheDocument();
        
        await user.click(dialogContent);

        expect(screen.getByTestId('dialog')).toBeInTheDocument();
    });
});
