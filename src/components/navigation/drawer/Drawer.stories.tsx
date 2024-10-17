import { useState } from 'react';

import { Box } from '@mui/material';
import { AccountCircle, Home, Settings } from '@mui/icons-material'; // Adjust the import based on your structure

import { DrawerCustom } from 'components/navigation/drawer/Drawer';

import type { Meta, StoryObj } from '@storybook/react';

import { DrawerListItems } from './types';

const meta: Meta<typeof DrawerCustom> = {
    component: DrawerCustom,
    title: 'Navigation/Drawer',
    tags: ['autodocs'],
    argTypes: {
        appTitle: {
            control: { type: 'text' },
            description: 'The title of the application displayed in the drawer',
        },
        header: {
            control: { type: 'text' },
            description: 'The header content of the drawer',
        },
        listItems: {
            control: { type: 'object' },
            description: 'Array of list items to be displayed in the drawer',
        },
        open: {
            control: { type: 'boolean' },
            description: 'Controls whether the drawer is open',
        },
    },
};

export default meta;

type Story = StoryObj<typeof DrawerCustom>;

// Sample list items with icons, click handlers, and sub-items expanded by default
const sampleListItems: DrawerListItems[] = [
    {
        icon: (
            <>
                <Home />
                Dashboard
            </>
        ),
        clickHandler: () => console.log('Item 1 clicked'),
        isOpen: true, // Set to true to open sub-items by default
        subMenu: [
            {
                icon: (
                    <>
                        <Home />
                        Services
                    </>
                ),
                clickHandler: () => console.log('Subitem 1a clicked'),
            },
            {
                icon: (
                    <>
                        <Home />
                        Setting
                    </>
                ),
                clickHandler: () => console.log('Subitem 1b clicked'),
            },
        ],
    },
    {
        icon: (
            <>
                <AccountCircle />
                Account
            </>
        ),
        clickHandler: () => console.log('Item 2 clicked'),
        isOpen: true, // Set to true to open sub-items by default
        subMenu: [
            {
                icon: (
                    <>
                        <Home />
                        User
                    </>
                ),
                clickHandler: () => console.log('Subitem 2a clicked'),
            },
            {
                icon: (
                    <>
                        <Home />
                        Profile
                    </>
                ),
                clickHandler: () => console.log('Subitem 2b clicked'),
            },
        ],
    },
    {
        icon: (
            <>
                <Settings />
                Setting
            </>
        ),
        clickHandler: () => console.log('Item 3 clicked'),
    },
];

export const Default: Story = {
    render: () => {
        const [open, setOpen] = useState(false);

        const handleDrawerOpen = () => {
            setOpen(!open);
        };

        return (
            <Box sx={{ display: 'flex' }}>
                <DrawerCustom
                    appTitle="My Application"
                    header={<Box>Content</Box>}
                    listItems={sampleListItems}
                    open={open}
                    handleDrawerOpen={handleDrawerOpen}
                    handleSubItemClick={(index: number) => {
                        console.log(`Subitem clicked: ${index}`);
                    }}
                    selectedSubItemIndex={1}
                    selectedItemIndex={1}
                />
            </Box>
        );
    },
};
