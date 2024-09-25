import type { Meta, StoryObj } from '@storybook/react';
import { ButtonCustom } from 'components/form/button/Button';

const meta = {
    title: 'Components/Button',
    component: ButtonCustom,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        size: {
            control: {
                type: 'select',
                options: ['large', 'medium', 'small'],
                value: 'medium',
            },
        },
        variant: {
            control: {
                type: 'select',
                options: ['contained', 'outlined', 'text'],
            },
        },
        color: {
            control: {
                type: 'select',
                options: [
                    'inherit',
                    'primary',
                    'secondary',
                    'success',
                    'error',
                    'info',
                    'warning',
                ],
            },
        },
        disabled: {
            control: {
                type: 'boolean',
                value: false,
            },
        },
    },
    args: {
        label: 'Default Button',
        size: 'medium',
        variant: 'contained',
        color: 'primary',
        onClick: () => console.log('Button clicked!'),
    },
} satisfies Meta<typeof ButtonCustom>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
    args: {
        label: 'Medium Button',
        size: 'medium',
        variant: 'contained',
        color: 'primary',
    },
};

export const Large: Story = {
    args: {
        label: 'Large Button',
        size: 'large',
        variant: 'outlined',
    },
};

export const Small: Story = {
    args: {
        label: 'Small Button',
        size: 'small',
        variant: 'outlined',
    },
};

export const Primary: Story = {
    args: {
        label: 'Primary Button',
        size: 'medium',
        variant: 'outlined',
        color: 'primary',
    },
};

export const Secondary = {
    args: {
        label: 'Secondary Button',
        size: 'medium',
        variant: 'outlined',
        color: 'secondary',
    },
};
