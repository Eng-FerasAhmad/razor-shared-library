import { Meta, StoryObj } from '@storybook/react';

import { DividerCustom } from 'components/data-display/divider/Divider';

const meta: Meta<typeof DividerCustom> = {
    component: DividerCustom,
    title: 'Data Display/Divider',
    tags: ['autodocs'],
    argTypes: {
        orientation: {
            control: { type: 'radio' },
            options: ['horizontal', 'vertical'],
        },
        variant: {
            control: { type: 'radio' },
            options: ['fullWidth', 'inset', 'middle'],
        },
        light: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;

type Story = StoryObj<typeof DividerCustom>;

export const Default: Story = {
    args: {
        orientation: 'horizontal',
        variant: 'fullWidth',
        light: false,
    },
};

export const LightDivider: Story = {
    args: {
        orientation: 'horizontal',
        variant: 'fullWidth',
        light: true,
    },
};

export const VerticalInset: Story = {
    args: {
        orientation: 'vertical',
        variant: 'inset',
        light: false,
    },
};
