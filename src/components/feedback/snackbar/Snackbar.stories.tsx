import { SnackbarCustom } from 'components/feedback/snackbar/Snackbar';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SnackbarCustom> = {
    title: 'Feedback/Snackbar',
    component: SnackbarCustom,
    tags: ['autodocs'],
    argTypes: {
        severity: {
            options: ['success', 'info', 'warning', 'error'],
            control: { type: 'select' },
        },
        open: {
            control: { type: 'boolean' },
        },
        text: {
            control: { type: 'text' },
            defaultValue: 'This is a success message!',
        },
        handleClose: { action: 'handleClose' },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        open: true,
        severity: 'success',
        text: 'This is a success message!',
        handleClose: () => {},
    },
};

export const Error: Story = {
    args: {
        open: true,
        severity: 'error',
        text: 'This is an error message!',
        handleClose: () => {},
    },
};

export const Warning: Story = {
    args: {
        open: true,
        severity: 'warning',
        text: 'This is a warning message!',
        handleClose: () => {},
    },
};

export const Info: Story = {
    args: {
        open: true,
        severity: 'info',
        text: 'This is an info message!',
        handleClose: () => {},
    },
};
