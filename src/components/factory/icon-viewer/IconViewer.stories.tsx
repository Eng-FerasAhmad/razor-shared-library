import { Meta, StoryObj } from '@storybook/react';

import LocalParkingIcon from '@mui/icons-material/LocalParking';
import WifiIcon from '@mui/icons-material/Wifi';
import PoolIcon from '@mui/icons-material/Pool';

import { IconViewer } from './IconViewer';

const meta: Meta<typeof IconViewer> = {
    title: 'Components/IconViewer',
    component: IconViewer,
    tags: ['autodocs'],
    argTypes: {
        icons: { control: { type: 'object' } },
    },
};

export default meta;

type Story = StoryObj<typeof IconViewer>;

export const Default: Story = {
    args: {
        icons: [
            { id: 1, name: 'Parking', icon: <LocalParkingIcon /> },
            { id: 2, name: 'Wi-Fi', icon: <WifiIcon /> },
            { id: 3, name: 'Swimming Pool', icon: <PoolIcon /> },
        ],
    },
};
