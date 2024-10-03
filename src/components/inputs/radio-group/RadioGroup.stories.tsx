import { RadioItems } from 'components/inputs/radio-group/types';

import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroupCustom } from './RadioGroup';

const meta = {
    title: 'Inputs/Radio',
    tags: ['autodocs'],
    component: RadioGroupCustom,
    argTypes: {
        label: {
            control: { type: 'text' },
        },
        radioItems: {
            control: { type: 'object' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
    },
} satisfies Meta<typeof RadioGroupCustom>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Radio',
        radioItems: [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
        ] as RadioItems[],
        disabled: false,
        value: 'option1',
    },
};
