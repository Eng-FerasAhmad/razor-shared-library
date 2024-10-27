import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { amenityOptions } from 'components/factory/icon-select-list/iconList';
import { AutoCompleteOptions } from 'components/inputs/auto-complete/types';

import { IconSelectList } from './IconSelectList';

const meta: Meta<typeof IconSelectList> = {
    title: 'Components/IconSelectList',
    component: IconSelectList,
    tags: ['autodocs'],
    argTypes: {
        label: { control: { type: 'text' } },
        value: { control: { type: 'object' } },
        options: { control: { type: 'object' } },
        onChange: { action: 'changed' },
    },
    args: {
        label: 'Amenities',
        options: amenityOptions,
        value: null,
    },
};

export default meta;

type Story = StoryObj<typeof IconSelectList>;

export const Default: Story = {
    render: (args) => {
        const [selectedValue, setSelectedValue] =
            useState<AutoCompleteOptions | null>(args.value);

        const handleChange = (selected: AutoCompleteOptions | null) => {
            setSelectedValue(selected);
            if (args.onChange) {
                args.onChange(selected);
            }
        };

        return (
            <IconSelectList
                {...args}
                value={selectedValue}
                onChange={handleChange}
            />
        );
    },
};
