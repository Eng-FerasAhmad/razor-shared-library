import { Loading } from 'components/feedback/loading/Loading';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Loading> = {
    component: Loading,
    title: 'Feedback/Loading',
    tags: ['autodocs'],
    argTypes: {
        open: {
            control: { type: 'boolean' },
            description: 'Controls whether the backdrop is visible or not',
        },
        color: {
            options: ['inherit', 'primary', 'secondary'],
            control: { type: 'select' },
            description: 'Controls the color of the CircularProgress',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Default: Story = {
    args: {
        open: true,
    },
};
