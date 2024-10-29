import { Meta, StoryObj } from '@storybook/react';

import { AccountCircle, Google, Facebook } from '@mui/icons-material';

import { Account } from 'components/factory/account/Account';

const loginItems = [
    {
        label: 'Google',
        icon: <Google />,
        onClick: () => console.log('Login with Google'),
    },
    {
        label: 'Facebook',
        icon: <Facebook />,
        onClick: () => console.log('Login with Facebook'),
    },
    {
        label: 'Account',
        icon: <AccountCircle />,
        onClick: () => console.log('Login with Account'),
    },
];

const meta: Meta<typeof Account> = {
    title: 'Factory/LoginSwitch',
    component: Account,
    argTypes: {
        title: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof Account>;

export const Default: Story = {
    render: (args) => <Account {...args} items={loginItems} />,
    args: {
        title: 'Login',
    },
};
