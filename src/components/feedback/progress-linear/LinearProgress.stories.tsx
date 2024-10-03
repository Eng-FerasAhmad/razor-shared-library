import { LinearProgressCustom } from 'components/feedback/progress-linear/LinearProgress';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    component: LinearProgressCustom,
    title: 'Feedback/Linear Progress',
    tags: ['autodocs'],
    argTypes: {
        color: {
            options: ['inherit', 'primary', 'secondary'],
            control: { type: 'select' },
        },
    },
} satisfies Meta<typeof LinearProgressCustom>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        color: 'primary',
    },
};
