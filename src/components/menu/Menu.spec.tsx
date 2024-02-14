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
                anchor={<div>click</div>}
            />
        );

        expect(screen.getByTestId('menu')).toBeInTheDocument();
    });
});
