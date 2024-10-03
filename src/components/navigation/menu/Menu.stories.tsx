import { useState } from 'react';

import Button from '@mui/material/Button';

import { MenuItems } from 'components/navigation/menu/types';
import { MenuCustom } from 'components/navigation/menu/Menu';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MenuCustom> = {
    component: MenuCustom,
    title: 'Navigation/Menu',
    tags: ['autodocs'],
    argTypes: {
        items: {
            control: { type: 'object' },
            description: 'Array of menu items with title and action',
        },
        selected: {
            control: { type: 'text' },
            description: 'The currently selected menu item',
        },
        anchor: {
            control: { type: 'text' }, // Change this line to allow JSX elements as input
            description: 'The element that triggers the menu',
        },
    },
};

export default meta;

type Story = StoryObj<typeof MenuCustom>;

// Sample menu items
const sampleItems: MenuItems[] = [
    { title: 'Item 1', action: () => console.log('Item 1 clicked') },
    { title: 'Item 2', action: () => console.log('Item 2 clicked') },
    { title: 'Item 3', action: () => console.log('Item 3 clicked') },
];

export const Default: Story = {
    render: () => {
        const [selected, setSelected] = useState<string | undefined>(undefined);

        const handleItemClick = (title: string) => {
            setSelected(title);
        };

        return (
            <MenuCustom
                items={sampleItems.map((item) => ({
                    ...item,
                    action: () => {
                        handleItemClick(item.title);
                        item.action();
                    },
                }))}
                selected={selected}
                anchor={<Button variant={'contained'}>Open Menu</Button>}
            />
        );
    },
};
