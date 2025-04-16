import { SkeletonCustom } from 'components/feedback/skeleton/Skeleton';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SkeletonCustom> = {
    title: 'Feedback/Skeleton',
    component: SkeletonCustom,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['text', 'rectangular', 'circular'],
            control: { type: 'select' },
        },
        width: {
            control: { type: 'number' },
        },
        height: {
            control: { type: 'number' },
        },
        animation: {
            options: ['pulse', 'wave', false],
            control: { type: 'select' },
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: 'text',
        width: 200,
        height: 20,
        animation: 'pulse',
    },
};
