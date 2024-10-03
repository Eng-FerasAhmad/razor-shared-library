import { TabCustom } from 'components/navigation/tab/Tab';
import { TabItem } from 'components/navigation/tab/types';

import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

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
