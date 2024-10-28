import { Meta, StoryObj } from '@storybook/react';

import { amenityOptionsMap } from 'components/factory/amenity-icons/iconList';
import { AmenityIconGenerator } from 'components/factory/amenity-icon-generator/AmenityIconGenerator';

const meta: Meta<typeof AmenityIconGenerator> = {
    title: 'Factory/Amenity Icon Factory',
    component: AmenityIconGenerator,
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

type Story = StoryObj<typeof AmenityIconGenerator>;

export const Default: Story = {
    args: {
        iconName: 'Wifi', // Default icon name, update as per amenityOptionsMap
        size: 'medium',
        color: 'inherit',
    },
};
