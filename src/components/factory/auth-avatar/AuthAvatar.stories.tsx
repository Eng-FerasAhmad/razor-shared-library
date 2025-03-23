import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

import { AuthAvatar } from 'components/factory/auth-avatar/AuthAvatar';
import { SearchIcon } from 'src/index';

import type { Meta, StoryObj } from '@storybook/react';

import type { MenuGroup } from './types';

const meta: Meta<typeof AuthAvatar> = {
    component: AuthAvatar,
    title: 'Factory/Auth Avatar',
    tags: ['autodocs'],
    argTypes: {
        menuItems: {
            control: { type: 'object' },
            description: 'Menu structure with titles, icons, and actions',
        },
    },
};

export default meta;

type Story = StoryObj<typeof AuthAvatar>;

const mockMenuItems: MenuGroup[] = [
    [
        {
            title: 'My Profile',
            icon: <PersonIcon />,
            action: () => console.log('Profile clicked'),
        },
        {
            title: 'Settings',
            icon: <SearchIcon />,
            action: () => console.log('Settings clicked'),
        },
    ],
    [
        {
            title: 'Logout',
            icon: <LogoutIcon />,
            action: () => console.log('Logout clicked'),
        },
    ],
];

export const Default: Story = {
    render: () => <AuthAvatar menuItems={mockMenuItems} />,
};
