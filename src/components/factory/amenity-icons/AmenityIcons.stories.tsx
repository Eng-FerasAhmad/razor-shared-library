import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { amenityOptions } from 'components/factory/amenity-icons/iconList';

import { AmenityIcons } from './AmenityIcons';

const meta: Meta<typeof AmenityIcons> = {
    title: 'Factory/Amenity Icons',
    component: AmenityIcons,
    argTypes: {
        label: { control: 'text' },
        value: {
            control: 'select',
            options: amenityOptions.map((option) => option.value),
        },
        onChange: { action: 'selected' },
    },
};

export default meta;

type Story = StoryObj<typeof AmenityIcons>;

export const Default: Story = {
    render: (args) => {
        const [selectedValue, setSelectedValue] = useState(args.value);

        const handleChange = (newSelectedValue: string) => {
            setSelectedValue(newSelectedValue);
            if (args.onChange) {
                args.onChange(newSelectedValue);
            }
        };

        return (
            <AmenityIcons
                {...args}
                value={selectedValue}
                onChange={handleChange}
            />
        );
    },
    args: {
        label: 'Select an Amenity',
        value: amenityOptions[0].value,
    },
};
