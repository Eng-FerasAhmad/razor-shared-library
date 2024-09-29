import { ReactElement, SyntheticEvent, useState } from 'react';

import { TabCustom } from 'src/components/tab/Tab';
import { TabItem } from 'src/components/tab/types';
import { AccordionCustom } from 'components/accordion/Accordion';
import { AccordionItems } from 'components/accordion/types';

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
export default function TabPalette(): ReactElement {
    const [value, setValue] = useState(0);

    const handleClick = (_e: SyntheticEvent, val: number): void => {
        setValue(val);
    };

    const accordionItems: AccordionItems[] = [
        {
            title: 'accordion 1',
            details: 'Details 1',
            onOpenAction: () => console.log('accordion 1'),
        },
        {
            title: 'accordion 2',
            details: 'Details 2',
            onOpenAction: () => console.log('accordion 2'),
        },
        {
            title: 'accordion 3',
            details: 'Details 3',
            onOpenAction: () => console.log('accordion 3'),
            actions: (
                <div>
                    <button>Ok</button>
                </div>
            ),
        },
    ];

    return (
        <>
            <TabCustom tabItem={tabItem} value={value} onChange={handleClick} />
            <AccordionCustom items={accordionItems} />
        </>
    );
}
