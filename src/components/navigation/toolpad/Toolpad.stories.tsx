import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';

import { Toolpad } from 'components/navigation/toolpad/Toolpad';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Toolpad> = {
    component: Toolpad,
    title: 'Navigation/Toolpad',
    tags: ['autodocs'],
    argTypes: {
        isOpen: {
            control: { type: 'boolean' },
            description: 'Controls whether the sidebar is open or collapsed',
        },
        width: {
            control: { type: 'number' },
            description: 'Full width of the sidebar',
        },
        collapsedWidth: {
            control: { type: 'number' },
            description: 'Collapsed width of the sidebar',
        },
        top: {
            control: { type: 'number' },
            description: 'Top offset from viewport',
        },
        selectedColor: {
            control: { type: 'color' },
            description: 'Background color of selected item',
        },
        selectedKey: {
            control: { type: 'text' },
            description: 'Key of the currently selected menu item (controlled)',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Toolpad>;

const items = [
    {
        title: 'Main items',
        items: [
            {
                key: 'dashboard',
                label: 'Dashboard',
                icon: <DashboardIcon />,
            },
            {
                key: 'orders',
                label: 'Orders',
                icon: <ShoppingCartIcon />,
            },
        ],
    },
    {
        title: 'Analytics',
        items: [
            {
                key: 'reports',
                label: 'Reports',
                icon: <BarChartIcon />,
                children: [
                    {
                        key: 'sales',
                        label: 'Sales',
                        icon: <ShoppingCartIcon />,
                    },
                    {
                        key: 'traffic',
                        label: 'Traffic',
                        icon: <ShoppingCartIcon />,
                    },
                ],
            },
            {
                key: 'integrations',
                label: 'Integrations',
                icon: <LayersIcon />,
            },
        ],
    },
];

export const Default: Story = {
    args: {
        isOpen: true,
        items: items,
        width: 240,
        collapsedWidth: 56,
        top: 0,
        selectedColor: '#429d06',
        selectedKey: 'dashboard',
    },
};
