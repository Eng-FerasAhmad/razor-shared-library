import { TabCustom } from 'src/components/tab/Tab';
import { TabItem } from 'src/components/tab/types';

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
export default function TabPalette(): JSX.Element {
    return <TabCustom tabItem={tabItem} />;
}
