import { Meta, StoryObj } from '@storybook/react';

import { amenityOptionsMap } from 'components/factory/icon-select-list/iconList';
import { IconGenerator } from 'components/factory/icon-generator/IconGenerator';

const meta: Meta<typeof IconGenerator> = {
    title: 'Components/IconFactory',
    component: IconGenerator,
    argTypes: {
        iconName: {
            control: 'select',
            options: Object.keys(amenityOptionsMap), // Dynamically fetch options from amenityOptionsMap
        },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
        color: {
            control: { type: 'select' },
            options: [
                'inherit',
                'primary',
                'secondary',
                'action',
                'error',
                'disabled',
            ],
        },
    },
};

export default meta;

type Story = StoryObj<typeof IconGenerator>;

export const Default: Story = {
    args: {
        iconName: 'Wifi', // Default icon name, update as per amenityOptionsMap
        size: 'medium',
        color: 'inherit',
    },
};
