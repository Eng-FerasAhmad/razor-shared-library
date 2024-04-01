import { TabCustom } from 'src/components/tab/Tab';
import { TabItem } from 'src/components/tab/types';
import { render, screen } from 'src/test/test-utils';

describe('<TabCustom />', () => {
    const tabItem: TabItem[] = [
        {
            label: 'one',
            content: <div>one</div>,
        },
        {
            label: 'two',
            content: <div>two</div>,
        },
        {
            label: 'three',
            content: <div>three</div>,
        },
    ];

    test('should render the component', () => {
        render(<TabCustom tabItem={tabItem} />);

        expect(screen.getByTestId('tab')).toBeInTheDocument();
        expect(screen.getAllByTestId('tab-panel')).toHaveLength(3);
    });
});
