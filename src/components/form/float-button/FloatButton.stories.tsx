import { sbColor, sbSize } from 'shared/storybookConst';
import { AddIcon } from 'src/index';

import type { Meta, StoryObj } from '@storybook/react';

import { FloatButton } from './FloatButton';

const meta = {
    title: 'Components/form/FloatButton',
    tags: ['autodocs'],
    component: FloatButton,
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
} satisfies Meta<typeof FloatButton>;

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
            {sbColor.map((color) => (
                <FloatButton key={color} {...args} color={color} />
            ))}
        </div>
    ),
    args: {
        size: 'medium',
        color: 'primary',
        icon: <AddIcon />,
    },
};

export const Default: Story = {
    args: {
        size: 'medium',
        color: 'primary',
        icon: <AddIcon />,
    },
};
