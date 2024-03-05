import { SyntheticEvent, useState } from 'react';
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
    const [value, setValue] = useState(0);

    const handleClick = (_e: SyntheticEvent, val: number): void => {
        setValue(val);
    };

    return (
        <>
            <TabCustom tabItem={tabItem} value={value} onChange={handleClick} />
        </>
    );
}
