import { sbAlertColor } from 'shared/storybookConst';

import type { Meta, StoryObj } from '@storybook/react';

import { AlertCustom } from './Alert';

const meta = {
    title: 'Components/Alert',
    tags: ['autodocs'],
    component: AlertCustom,
    argTypes: {
        text: {
            control: { type: 'text' },
        },
    },
} satisfies Meta<typeof AlertCustom>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllColors: Story = {
    render: (args) => (
        <div
            style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
            }}
        >
            {sbAlertColor.map((color) => (
                <AlertCustom
                    key={color}
                    severity={color}
                    {...args}
                    text={`${color} Alert`}
                />
            ))}
        </div>
    ),
    args: {
        text: 'Alert',
    },
};

export const Default: Story = {
    args: {
        text: 'Alert',
    },
};
