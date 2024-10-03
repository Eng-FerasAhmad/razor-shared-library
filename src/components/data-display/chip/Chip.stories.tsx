import { sbColor } from 'shared/storybookConst';
import { ChipCustom } from 'components/data-display/chip/Chip';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ChipCustom> = {
    component: ChipCustom,
    title: 'Data Display/Chip',
    tags: ['autodocs'],
    argTypes: {
        color: {
            options: sbColor,
            control: { type: 'select' },
        },
        size: {
            options: ['medium', 'small'],
            control: { type: 'radio' },
        },
    },
};

export default meta;

type Story = StoryObj<typeof ChipCustom>;

export const AllColors: Story = {
    render: (args) => (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {sbColor.map((color) => (
                <ChipCustom
                    key={color}
                    {...args}
                    color={color}
                    label={`${color} chip`}
                />
            ))}
        </div>
    ),
    args: {
        size: 'medium',
    },
};

export const Default: Story = {
    args: {
        label: 'chip',
        size: 'medium',
        color: 'primary',
    },
};
