import { MenuCustom } from './Menu';
import { render, screen } from 'src/test/test-utils';

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
});
