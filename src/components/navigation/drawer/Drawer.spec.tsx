import { DrawerCustom } from 'components/navigation/drawer/Drawer';
import { DrawerListItems } from 'components/navigation/drawer/types';

import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';

describe('<DrawerCustom />', () => {
    const listItems: DrawerListItems[] = [
        {
            icon: <>Item 1</>,
            clickHandler: () => {
                jest.fn();
            },
        },
        {
            icon: <>Item 2</>,
            clickHandler: () => {
                jest.fn();
            },
        },
    ];

    test('Should render the component', async () => {
        render(
            <DrawerCustom
                header={<>header</>}
                listItems={listItems}
                open={true}
                appTitle="drawer"
                handleDrawerOpen={jest.fn()}
                closeDrawerIcon={<>icon</>}
                drawerTitle={<>title</>}
                handleSubItemClick={jest.fn}
            />
        );

        expect(screen.getByTestId('drawer')).toBeInTheDocument();
        expect(screen.getByTestId('drawer-list')).toBeInTheDocument();
    });

    test('Should render the closed drawer', async () => {
        render(
            <DrawerCustom
                header={<>header</>}
                listItems={listItems}
                open={false}
                appTitle="drawer"
                handleDrawerOpen={jest.fn()}
                closeDrawerIcon={<>icon</>}
                drawerTitle={<>title</>}
                handleSubItemClick={jest.fn}
            />
        );

        expect(screen.getByTestId('drawer')).toBeInTheDocument();
        expect(screen.getByTestId('drawer-app-bar')).toBeInTheDocument();
        expect(screen.getByTestId('drawer-list')).toBeInTheDocument();
    });
});
