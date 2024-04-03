import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import DrawerList from 'src/components/drawer/DrawerList';
import { DrawerListItems } from 'src/components/drawer/types';

describe('<DrawerList />', () => {
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
        render(<DrawerList listItems={listItems} />);

        expect(screen.getByTestId('drawer-list')).toBeInTheDocument();
    });
});
