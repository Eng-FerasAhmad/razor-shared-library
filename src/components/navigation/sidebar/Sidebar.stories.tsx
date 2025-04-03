import { useState } from 'react';

import { Box, Button } from '@mui/material';

import { Sidebar } from 'components/navigation/sidebar/Sidebar';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Sidebar> = {
    component: Sidebar,
    title: 'Navigation/Sidebar',
    tags: ['autodocs'],
    argTypes: {
        isDrawerOpen: { control: false },
        toggleDrawer: { action: 'toggleDrawer' },
        top: { control: { type: 'number' }, description: 'Distance from top' },
        width: {
            control: { type: 'number' },
            description: 'Sidebar width when expanded',
        },
        minWidth: {
            control: { type: 'number' },
            description: 'Sidebar width when minimized',
        },
        hasBorder: {
            control: { type: 'boolean' },
            description: 'Show right border',
        },
        minView: {
            control: { type: 'boolean' },
            description: 'Minimized view with minWidth when closed',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
    render: (args) => {
        const [open, setOpen] = useState(true);

        const sidebarWidth = open
            ? args.width ?? 240
            : args.minView
            ? args.minWidth ?? 30
            : 0;

        return (
            <Box sx={{ display: 'flex', width: '100%' }}>
                <Sidebar
                    {...args}
                    isDrawerOpen={open}
                    toggleDrawer={() => setOpen(!open)}
                >
                    <Box p={2}>Sidebar content</Box>
                </Sidebar>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        padding: 2,
                        marginLeft: `${sidebarWidth}px`,
                    }}
                >
                    <Button variant="contained" onClick={() => setOpen(!open)}>
                        Toggle Sidebar
                    </Button>
                </Box>
            </Box>
        );
    },
    args: {
        top: 0,
        width: 240,
        minWidth: 30,
        hasBorder: true,
        minView: true,
    },
};
