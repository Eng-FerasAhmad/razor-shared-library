import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import DrawerToolbar from 'src/components/drawer/DrawerToolbar';

describe('<DrawerToolbar />', () => {
    test('Should render the component', async () => {
        render(
            <DrawerToolbar
                appClickHandler={jest.fn()}
                appTitle={'title'}
                header={<>header</>}
                open={true}
                headerIcon={<>icon</>}
            />
        );

        expect(screen.getByTestId('drawer-app-bar')).toBeInTheDocument();
    });
});
