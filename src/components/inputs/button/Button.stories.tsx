import { sbColor, sbSize, sbVariant } from 'shared/storybookConst';

import type { Meta, StoryObj } from '@storybook/react';

import { ButtonCustom } from './Button';

const meta = {
    title: 'Inputs/Button',
    tags: ['autodocs'],
    component: ButtonCustom,
    argTypes: {
        label: {
            control: { type: 'text' },
        },
        color: {
            options: sbColor,
            control: { type: 'select' },
        },
        size: {
            options: sbSize,
            control: { type: 'radio' },
        },
        variant: {
            options: sbVariant,
            control: { type: 'radio' },
        },
    },
} satisfies Meta<typeof ButtonCustom>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllColors: Story = {
    render: (args) => (
        <div
            style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                width: '200px',
            }}
        >
            {sbColor.map((color) => (
                <ButtonCustom
                    key={color}
                    {...args}
                    color={color}
                    label={`${color} button`}
                    variant={'contained'}
                />
            ))}
        </div>
    ),
    args: {
        label: 'button',
        size: 'medium',
        color: 'primary',
        variant: 'contained',
    },
};

export const Default: Story = {
    args: {
        label: 'Button',
        size: 'medium',
        color: 'primary',
        variant: 'contained',
    },
};
