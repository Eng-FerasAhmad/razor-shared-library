import { userEvent } from '@testing-library/user-event';
import { MenuCustom } from './Menu';
import { fireEvent, render, screen } from 'src/test/test-utils';

describe('<MenuCustom />', () => {
    const itemsMenu = [
        {
            title: 'item1',
            action: jest.fn(),
        },
        {
            title: 'item2',
            action: jest.fn(),
        },
    ];

    test('should render the component', () => {
        render(<MenuCustom items={itemsMenu} anchor={<div>click</div>} />);

        expect(screen.queryByTestId('popper')).not.toBeInTheDocument();
        expect(screen.getByTestId('menu')).toBeInTheDocument();
    });

    test('should render open menu', () => {
        render(<MenuCustom items={itemsMenu} anchor={<div>click</div>} />);

        expect(screen.queryByTestId('popper')).not.toBeInTheDocument();
        expect(screen.getByTestId('menu')).toBeInTheDocument();

        fireEvent.click(screen.getByTestId('menu'));
        expect(screen.getByTestId('menu-list')).toBeInTheDocument();
    });

    test('should close menu list', async () => {
        render(<MenuCustom items={itemsMenu} anchor={<div>click</div>} />);

        expect(screen.queryByTestId('popper')).not.toBeInTheDocument();

        fireEvent.click(screen.getByTestId('menu'));
        expect(screen.getByTestId('menu-list')).toBeInTheDocument();

        fireEvent.click(screen.getAllByTestId('menu-item')[0]);
        expect(itemsMenu[0].action).toHaveBeenCalled();
    });

    test('should handle tab click', async () => {
        render(<MenuCustom items={itemsMenu} anchor={<div>click</div>} />);

        expect(screen.queryByTestId('popper')).not.toBeInTheDocument();

        fireEvent.click(screen.getByTestId('menu'));
        expect(screen.getByTestId('menu-list')).toBeInTheDocument();

        await userEvent.tab();
        expect(screen.queryByTestId('menu-list')).not.toBeInTheDocument();
    });
});
