import { useState } from 'react';

import { TabItem } from 'components/navigation/tab/types';
import { TabCustom } from 'components/navigation/tab/Tab';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TabCustom> = {
    component: TabCustom,
    title: 'Navigation/Tab',
    tags: ['autodocs'],
    argTypes: {
        value: {
            control: { type: 'number' },
            description: 'Controls the currently active tab',
        },
        onChange: {
            action: 'changed',
            description: 'Function to call when the tab changes',
        },
        tabItem: {
            control: { type: 'object' },
            description: 'Array of tab items with label and content',
        },
    },
};

export default meta;

type Story = StoryObj<typeof TabCustom>;

// Sample tab items
const sampleTabItems: TabItem[] = [
    { label: 'Tab 1', content: <div>Content for Tab 1</div> },
    { label: 'Tab 2', content: <div>Content for Tab 2</div> },
    { label: 'Tab 3', content: <div>Content for Tab 3</div> },
];

export const Default: Story = {
    render: () => {
        const [value, setValue] = useState(0);

        const handleChange = (
            _event: React.SyntheticEvent,
            newValue: number
        ) => {
            setValue(newValue);
        };

        return (
            <TabCustom
                tabItem={sampleTabItems}
                value={value}
                onChange={handleChange}
            />
        );
    },
};
