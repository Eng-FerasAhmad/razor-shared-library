import { sbColor } from 'shared/storybookConst';

import type { Meta, StoryObj } from '@storybook/react';

import { SwitchCustom } from './Switch';

const meta = {
    title: 'Inputs/Switch',
    tags: ['autodocs'],
    component: SwitchCustom,
    argTypes: {
        label: {
            control: { type: 'text' },
        },
    },
} satisfies Meta<typeof SwitchCustom>;

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
                <SwitchCustom
                    key={color}
                    {...args}
                    color={color}
                    label={`${color} Switch`}
                />
            ))}
        </div>
    ),
    args: {
        label: 'button',
        size: 'medium',
        color: 'primary',
    },
};

export const Default: Story = {
    args: {
        label: 'Switch',
    },
};
