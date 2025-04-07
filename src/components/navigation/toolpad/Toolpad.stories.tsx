import { useRef, useState } from 'react';

import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import { Box, Popper, Button } from '@mui/material';

import { Toolpad } from 'components/navigation/toolpad/Toolpad';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Toolpad> = {
    component: Toolpad,
    title: 'Navigation/Toolpad',
    tags: ['autodocs'],
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
                children: new Array(12).fill(null).map((_, i) => ({
                    key: `report-${i}`,
                    label: `Report ${i + 1}`,
                    icon: <ShoppingCartIcon />,
                })),
            },
            {
                key: 'integrations1',
                label: 'Integrations1',
                icon: <LayersIcon />,
            },
        ],
    },
];

function FooterWithPopper() {
    const anchorRef = useRef<HTMLButtonElement | null>(null);
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    return (
        <Box sx={{ padding: '16px', position: 'relative', zIndex: 10 }}>
            <Button
                ref={anchorRef}
                onClick={handleClick}
                variant="contained"
                size="small"
            >
                Toggle Popper
            </Button>

            <Popper
                open={open}
                anchorEl={anchorRef.current}
                placement="top"
                disablePortal={false}
                sx={{ zIndex: 1500 }}
            >
                <Box
                    sx={{
                        p: 1,
                        bgcolor: 'white',
                        border: '1px solid #ccc',
                        boxShadow: 3,
                    }}
                >
                    Hello from Popper
                </Box>
            </Popper>
        </Box>
    );
}

export const Default: Story = {
    args: {
        isOpen: true,
        items: items,
        width: 240,
        collapsedWidth: 56,
        top: 0,
        selectedColor: '#429d06',
        selectedKey: 'dashboard',
        backgroundColor: '#d1f6b9',
        header: <div style={{ padding: '16px' }}>Header</div>,
        footer: <FooterWithPopper />,
    },
};
