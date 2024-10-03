import { Meta, StoryObj } from '@storybook/react';

import Stack from '@mui/material/Stack';

import { ToolTipCustom } from './ToolTip';

const meta: Meta<typeof ToolTipCustom> = {
    component: ToolTipCustom,
    title: 'Data Display/ToolTip',
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: { type: 'text' },
        },
        children: {
            control: { disable: true },
        },
    },
};

export default meta;

type Story = StoryObj<typeof ToolTipCustom>;

export const Default: Story = {
    args: {
        title: 'tooltip title',
        children: (
            <Stack spacing={2}>
                <span>Hover over me</span>
            </Stack>
        ),
    },
};
