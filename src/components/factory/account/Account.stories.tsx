import { Meta, StoryObj } from '@storybook/react';

import { AccountCircle, Google, Facebook } from '@mui/icons-material';

import LoginSwitch from 'components/factory/account/Account';

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

const meta: Meta<typeof LoginSwitch> = {
    title: 'Factory/LoginSwitch',
    component: LoginSwitch,
    argTypes: {
        title: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof LoginSwitch>;

export const Default: Story = {
    render: (args) => <LoginSwitch {...args} items={loginItems} />,
    args: {
        title: 'Login',
    },
};
