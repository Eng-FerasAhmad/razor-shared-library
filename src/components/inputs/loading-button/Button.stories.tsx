import SaveIcon from '@mui/icons-material/Save';

import { sbColor, sbSize, sbVariant } from 'shared/storybookConst';
import { LoadingButtonCustom } from 'components/inputs/loading-button/LoadingButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Inputs/LoadingButton',
    tags: ['autodocs'],
    component: LoadingButtonCustom,
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
        loading: {
            control: { type: 'boolean' },
        },
        startIcon: {
            control: { disable: true }, // Disabling control to handle icon manually
        },
    },
} satisfies Meta<typeof LoadingButtonCustom>;

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
                <LoadingButtonCustom
                    key={color}
                    {...args}
                    color={color}
                    label={`${color} button`}
                    startIcon={<SaveIcon />}
                    variant={'contained'}
                />
            ))}
        </div>
    ),
    args: {
        label: 'Button',
        size: 'medium',
        color: 'primary',
        variant: 'contained',
        loading: false,
        startIcon: <SaveIcon />,
    },
};

export const Default: Story = {
    args: {
        label: 'Button',
        size: 'medium',
        color: 'primary',
        variant: 'contained',
        loading: false,
        startIcon: <SaveIcon />,
    },
};

export const LoadingState: Story = {
    args: {
        label: 'Loading...',
        size: 'medium',
        color: 'primary',
        variant: 'contained',
        loading: true,
        startIcon: <SaveIcon />,
    },
};
