import { useState } from 'react';

import { SelectChangeEvent } from '@mui/material';

import { SelectItems } from 'components/inputs/input-select/types';

import type { Meta, StoryObj } from '@storybook/react';

import { InputSelect } from './InputSelect';

const meta: Meta<typeof InputSelect> = {
    title: 'Inputs/Select',
    tags: ['autodocs'],
    component: InputSelect,
    argTypes: {
        label: { control: 'text' },
        items: { control: 'object' },
        noneValue: { control: 'boolean' },
        helperText: { control: 'text' },
        error: { control: 'boolean' },
        disabled: { control: 'boolean' },
        handleChange: { action: 'changed' },
        value: { control: false },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => {
        const [selectedValue, setSelectedValue] = useState(args.value);
        const items = [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
        ] as SelectItems[];
        const handleChange = (event: SelectChangeEvent) => {
            const newValue = event.target.value;
            setSelectedValue(newValue);
            args.handleChange?.(event);
        };

        return (
            <InputSelect
                {...args}
                items={items}
                value={selectedValue}
                handleChange={handleChange}
            />
        );
    },
    args: {
        label: 'Select Label',
        items: [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
        ] as SelectItems[],
        value: '',
        noneValue: false,
        helperText: '',
        error: false,
        disabled: false,
    },
};
