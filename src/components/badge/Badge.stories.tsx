import { sbColor } from 'shared/storybookConst';
import { EmailIcon } from 'src/index';

import type { Meta, StoryObj } from '@storybook/react';

import { BadgeCustom } from './Badge';

const meta = {
    component: BadgeCustom,
    title: 'Components/Badge',
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: { type: 'text' },
        },
        color: {
            options: sbColor,
            control: { type: 'select' },
        },
    },
} satisfies Meta<typeof BadgeCustom>;

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
            {sbColor.map((color, i) => (
                <BadgeCustom
                    badgeContent={i}
                    key={color}
                    {...args}
                    color={color}
                >
                    <EmailIcon color="action" />
                </BadgeCustom>
            ))}
        </div>
    ),
    args: {
        title: 'Badge',
        color: 'primary',
    },
};

export const Default: Story = {
    args: {
        title: 'Badge',
        color: 'primary',
    },
};
