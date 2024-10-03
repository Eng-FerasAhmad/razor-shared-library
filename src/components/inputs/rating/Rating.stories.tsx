import type { Meta, StoryObj } from '@storybook/react';

import { RatingCustom } from './Rating';

const meta = {
    title: 'Inputs/Rating',
    tags: ['autodocs'],
    component: RatingCustom,
    argTypes: {
        label: {
            control: { type: 'text' },
        },
    },
} satisfies Meta<typeof RatingCustom>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Rating',
    },
};
