import { MenuCustom } from './Menu';
import { render, screen } from 'src/test/test-utils';

describe('<MenuCustom />', () => {
    test('should render the component', () => {
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
        render(
            <MenuCustom
                items={itemsMenu}
                open={true}
                anchorEl={null}
                handleClose={jest.fn()}
            />
        );

        expect(screen.getByTestId('menu')).toBeInTheDocument();
    });
});
