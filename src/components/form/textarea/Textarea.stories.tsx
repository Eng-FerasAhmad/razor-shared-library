import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './Textarea';

const meta = {
    title: 'Components/form/Textarea',
    tags: ['autodocs'],
    component: Textarea,
    argTypes: {
        label: {
            control: { type: 'text' },
        },
    },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Message',
    },
};
