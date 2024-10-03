import { CircularProgressCustom } from 'components/feedback/progress-circular/CircularProgress';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    component: CircularProgressCustom,
    title: 'Feedback/Circular Progress',
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'number' },
        },
        color: {
            options: ['inherit', 'primary', 'secondary'],
            control: { type: 'select' },
        },
    },
} satisfies Meta<typeof CircularProgressCustom>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 40,
        color: 'primary',
    },
};
