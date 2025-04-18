import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { AmenityIconsSelectList } from 'components/factory/amenity-icons/AmenityIconsSelectList';

import { amenityOptions } from 'components/factory/amenity-icons/iconList';

const meta: Meta<typeof AmenityIconsSelectList> = {
    title: 'Factory/Amenity Icons Select List',
    component: AmenityIconsSelectList,
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

type Story = StoryObj<typeof AmenityIconsSelectList>;

export const Default: Story = {
    render: (args) => {
        const [selectedValue, setSelectedValue] = useState(args.value);

        const handleChange = (newSelectedValue: string | null) => {
            setSelectedValue(newSelectedValue!);
            args.onChange?.(newSelectedValue);
        };

        return (
            <AmenityIconsSelectList
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
