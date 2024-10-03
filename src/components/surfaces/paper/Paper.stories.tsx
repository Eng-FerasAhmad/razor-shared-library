import { PaperCustom } from 'components/surfaces/paper/Paper';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PaperCustom> = {
    component: PaperCustom,
    title: 'Surfaces/Paper',
    tags: ['autodocs'],
    argTypes: {
        elevation: {
            control: { type: 'number' },
            description: 'Shadow depth of the Paper component',
        },
        square: {
            control: { type: 'boolean' },
            description: 'If true, border-radius is removed',
        },
    },
};

export default meta;

type Story = StoryObj<typeof PaperCustom>;

export const Default: Story = {
    args: {
        elevation: 3,
        square: false,
        children: 'This is a Paper component',
    },
};
