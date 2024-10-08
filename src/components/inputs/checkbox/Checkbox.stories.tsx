import { sbColor, sbSize } from 'shared/storybookConst';

import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxCustom } from './Checkbox';

const meta = {
    title: 'Inputs/Checkbox',
    component: CheckboxCustom,
    tags: ['autodocs'],
    argTypes: {
        color: {
            options: sbColor,
            control: { type: 'select' },
        },
        size: {
            options: sbSize,
            control: { type: 'radio' },
        },
    },
} satisfies Meta<typeof CheckboxCustom>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Checkbox',
        size: 'medium',
        color: 'primary',
    },
};
