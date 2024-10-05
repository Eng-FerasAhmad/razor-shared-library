import { FileCopyOutlined, Save, Print, Share } from '@mui/icons-material';

import { SpeedDialActionType } from 'components/navigation/speed-dial/types';
import { SpeedDialCustom } from 'components/navigation/speed-dial/SpeedDial';

import { render, screen, fireEvent } from '@testing-library/react';

describe('SpeedDialCustom', () => {
    const actions: SpeedDialActionType[] = [
        { icon: <FileCopyOutlined />, name: 'Copy', onClick: jest.fn() },
        { icon: <Save />, name: 'Save', onClick: jest.fn() },
        { icon: <Print />, name: 'Print', onClick: jest.fn() },
        { icon: <Share />, name: 'Share', onClick: jest.fn() },
    ];

    it('should render the SpeedDialCustom component', () => {
        render(
            <SpeedDialCustom ariaLabel="SpeedDial example" actions={actions} />
        );

        // Verify the main SpeedDial button is rendered
        expect(screen.getByLabelText('SpeedDial example')).toBeInTheDocument();

        // Verify that the actions are not visible initially (SpeedDial is closed)
        actions.forEach((action) => {
            expect(screen.queryByText(action.name)).toBeNull();
        });
    });

    it('should display actions when the SpeedDial button is clicked', () => {
        render(
            <SpeedDialCustom ariaLabel="SpeedDial example" actions={actions} />
        );

        const speedDialButton = screen.getByTestId('speed-dial');
        fireEvent.mouseOver(speedDialButton);

        expect(screen.getAllByTestId('speed-dial-action').length).toBe(4);

        fireEvent.mouseOut(speedDialButton);

        actions.forEach((action) => {
            expect(screen.queryByText(action.name)).toBeNull();
        });
    });

    it('should trigger the onClick handler when an action is clicked', () => {
        render(
            <SpeedDialCustom ariaLabel="SpeedDial example" actions={actions} />
        );

        const speedDialButton = screen.getByTestId('speed-dial');
        fireEvent.mouseOver(speedDialButton);

        const actionButton = screen.getAllByTestId('speed-dial-action')[0];
        fireEvent.click(actionButton);
        expect(actions[0].onClick).toHaveBeenCalled();
    });
});
