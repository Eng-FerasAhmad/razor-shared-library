import { CardProps } from '@mui/material/Card';

import { CardCustom } from 'components/surfaces/card/Card';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CardCustom> = {
    title: 'Surfaces/Card',
    tags: ['autodocs'],
    component: CardCustom,
    argTypes: {
        sx: { control: { type: 'object' } },
        elevation: { control: { type: 'number', min: 0, max: 24 } },
        width: { control: { type: 'number' } },
        height: { control: { type: 'number' } },
        actionButtonLabel: { control: { type: 'text' } },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        elevation: 5,
        sx: {
            margin: '20px auto',
            textAlign: 'center',
            backgroundColor: '#e0f7fa',
        },
        width: 300,
        height: 400,
        children: 'This is some content inside the custom card.',
        actionButtonLabel: 'Click Me',
        actionButton: () => alert('Button Clicked!'),
    } as CardProps,
};

export const NoActionButton: Story = {
    args: {
        elevation: 1,
        sx: {
            margin: '20px auto',
            textAlign: 'center',
            backgroundColor: '#f0f0f0',
        },
        width: 400,
        children: 'This card does not have an action button.',
    } as CardProps,
};
